/* global __dirname */

const Module = require('node:module');
const path = require('node:path');

let typescript;
try {
  typescript = require('typescript');
} catch {
  const globalRoot = require('node:child_process')
    .execFileSync('npm', ['root', '-g'], { encoding: 'utf8' })
    .trim();
  typescript = require(path.join(globalRoot, 'typescript'));
}

const repositoryRoot = path.resolve(__dirname, '..');
const originalResolveFilename = Module._resolveFilename;
Module._resolveFilename = function resolveFilename(request, parent, isMain, options) {
  const resolvedRequest = request.startsWith('@/')
    ? path.join(repositoryRoot, 'src', request.slice(2))
    : request;
  return originalResolveFilename.call(this, resolvedRequest, parent, isMain, options);
};

function compile(module, filename) {
  const source = require('node:fs').readFileSync(filename, 'utf8');
  const output = typescript.transpileModule(source, {
    compilerOptions: {
      jsx: typescript.JsxEmit.ReactJSX,
      module: typescript.ModuleKind.CommonJS,
      target: typescript.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
    fileName: filename,
    reportDiagnostics: true,
  });
  const errors = output.diagnostics.filter(
    (diagnostic) => diagnostic.category === typescript.DiagnosticCategory.Error,
  );
  if (errors.length > 0) {
    throw new Error(
      errors
        .map((diagnostic) => typescript.flattenDiagnosticMessageText(diagnostic.messageText, '\n'))
        .join('\n'),
    );
  }
  module._compile(output.outputText, filename);
}

require.extensions['.ts'] = compile;
require.extensions['.tsx'] = compile;

module.exports = { typescript };

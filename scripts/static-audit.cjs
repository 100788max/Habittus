const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { typescript } = require('./register-typescript.cjs');

const root = path.resolve(__dirname, '..');
const files = [];
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(target);
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(target);
  }
}
walk(path.join(root, 'app'));
walk(path.join(root, 'src'));

const routes = new Set(
  files
    .filter((file) => file.startsWith(path.join(root, 'app')) && !file.endsWith('_layout.tsx'))
    .map((file) => {
      let route = file
        .slice(path.join(root, 'app').length)
        .replace(/\\/g, '/')
        .replace(/\.tsx$/, '');
      if (route.endsWith('/index')) route = route.slice(0, -6) || '/';
      return route;
    }),
);

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const transpiled = typescript.transpileModule(source, {
    compilerOptions: {
      jsx: typescript.JsxEmit.ReactJSX,
      module: typescript.ModuleKind.CommonJS,
      target: typescript.ScriptTarget.ES2022,
    },
    fileName: file,
    reportDiagnostics: true,
  });
  const syntaxErrors = transpiled.diagnostics.filter(
    (diagnostic) => diagnostic.category === typescript.DiagnosticCategory.Error,
  );
  assert.equal(syntaxErrors.length, 0, `Syntax error in ${path.relative(root, file)}`);
  for (const match of source.matchAll(/(?:href=|href:\s*)["'](\/\([^)]+\)\/[^"']+)["']/g)) {
    const route = match[1].replace(/\?.*$/, '');
    assert(routes.has(route), `Missing route ${route} referenced by ${path.relative(root, file)}`);
  }
  for (const match of source.matchAll(/from\s+["']@\/([^"']+)["']/g)) {
    const base = path.join(root, 'src', match[1]);
    assert(
      ['.ts', '.tsx', '/index.ts', '/index.tsx'].some((suffix) => fs.existsSync(base + suffix)),
      `Missing alias import @/${match[1]} in ${path.relative(root, file)}`,
    );
  }
}

const envExample = fs.readFileSync(path.join(root, '.env.example'), 'utf8');
assert(
  !/(SECRET|TOKEN|PASSWORD|PRIVATE_KEY)\s*=\s*\S+/i.test(envExample),
  'Secret-like value in .env.example',
);
assert(
  !files.some((file) => fs.readFileSync(file, 'utf8').includes('session!.')),
  'Unsafe session assertion found',
);
console.log(`Static audit passed: ${files.length} source files and ${routes.size} routes checked.`);

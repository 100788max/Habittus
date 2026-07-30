# Misión 2 — Estado de validación técnica

## Alcance

Este registro documenta la validación de la fundación móvil antes de implementar autenticación, persistencia o nuevas funcionalidades.

## Diagnóstico del entorno

- El proyecto no contenía una configuración local de proxy o credenciales.
- npm y pnpm resolvieron el registry oficial `https://registry.npmjs.org/`.
- El entorno inyectó `HTTP_PROXY`, `HTTPS_PROXY`, sus variantes en minúsculas y aliases `npm_config_*`, todos dirigidos a `http://proxy:8080`.
- Una solicitud HTTPS al registry mediante ese proxy fue rechazada por el túnel con `HTTP 403` y respuesta de Envoy.
- Al retirar las variables de proxy, el entorno no pudo resolver el dominio del registry.
- La caché y el store local no contenían las dependencias de Expo requeridas para una instalación offline.

El bloqueo es externo al repositorio: no existe una corrección local legítima que permita descargar paquetes sin acceso de red o credenciales autorizadas. No se agregaron tokens, proxies alternativos ni secretos.

## Correcciones de configuración

- Se agregó `.npmrc` para declarar explícitamente el registry oficial y políticas reproducibles de peers y engines.
- Se agregó `expo-doctor` como dependencia de desarrollo para que `pnpm doctor` no dependa de una descarga ad hoc.
- Se agregó `pnpm build:mobile` como comprobación no interactiva de bundles Android e iOS.

## Estado de verificaciones

Completadas sin dependencias:

- lectura y hash de `HABITTUS_MASTER.md`;
- validación sintáctica de TypeScript y TSX;
- resolución de aliases locales;
- parseo de archivos JSON;
- formato con Prettier disponible globalmente;
- validación de espacios y conflictos mediante Git.

Bloqueadas por instalación:

- lockfile de pnpm;
- lint con plugins de Expo;
- typecheck con `expo/tsconfig.base`;
- Expo Doctor;
- exportación no interactiva de bundles;
- arranque del servidor Expo.

## Procedimiento para completar la validación

En un entorno con acceso autorizado al registry oficial:

```bash
corepack enable
pnpm install
pnpm check
pnpm doctor
pnpm build:mobile
CI=1 pnpm start
```

Después de una instalación exitosa se debe versionar `pnpm-lock.yaml`, corregir cualquier incompatibilidad reportada y actualizar este registro con resultados reales. Hasta entonces, la validación técnica de la Misión 2 permanece bloqueada y no debe informarse como completada.

# Estado de preparación de la beta móvil

## Alcance auditado

La auditoría cubre autenticación, protección de rutas, perfil profesional, portfolio, publicación, descubrimiento, contacto y administración. `HABITTUS_MASTER.md` permanece como fuente de verdad y no fue modificado.

## Controles verificados en el repositorio

- separación de rutas públicas, profesionales y administrativas;
- aislamiento de operaciones profesionales mediante el usuario de la sesión;
- mensajes neutrales ante credenciales incorrectas;
- conservación de restricciones administrativas cuando un artista edita contenido;
- exclusión pública de borradores, entidades ocultas y cuentas suspendidas;
- redacción del email profesional privado;
- validación defensiva de preferencias y solicitudes en formularios y gateways;
- verificación de la relación entre perfil público y destinatario de contacto;
- ausencia de valores con apariencia de secreto en `.env.example`.

Las comprobaciones reproducibles que no requieren descargar paquetes son:

```bash
node scripts/static-audit.cjs
node --test scripts/beta-behavior.test.cjs
prettier --check .
```

## Bloqueos para ejecutar en un teléfono o tablet

1. El registro npm continúa inaccesible desde Codex Cloud por una restricción externa de proxy. Por ello no existen `node_modules` ni `pnpm-lock.yaml` verificables.
2. Hasta completar la instalación no pueden ejecutarse honestamente ESLint, `tsc` con la configuración de Expo, Expo Doctor ni la exportación de bundles.
3. Expo Go necesita que `pnpm start` pueda resolver las dependencias instaladas y publicar el servidor Metro accesible para el dispositivo.
4. La URL `http://localhost:3000/v1` es solo un valor de desarrollo y apuntaría al propio dispositivo. Antes de integrar un backend deberá sustituirse por una URL HTTPS accesible desde internet.
5. Las cuentas, solicitudes y acciones administrativas viven en memoria; reiniciar la aplicación restablece todos los datos.

## Criterio para habilitar validación móvil

Cuando el entorno autorizado recupere acceso al registro, la misma automatización web deberá ejecutar, sin requerir una computadora local:

```bash
pnpm install
pnpm check
pnpm doctor
pnpm build:mobile
CI=1 pnpm start
```

Solo después de obtener resultados reales, versionar `pnpm-lock.yaml` y corregir los hallazgos se considerará validada la ejecución móvil. La beta está estabilizada a nivel de repositorio, pero no está certificada como compilable o ejecutable en dispositivo. La Misión 8 incorporó un workflow web y las instrucciones de operación desde tablet en [`MISSION_8_MOBILE_BETA.md`](./MISSION_8_MOBILE_BETA.md).

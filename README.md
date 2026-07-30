# HABITTUS Mobile

Fundación técnica de la aplicación móvil HABITTUS para artistas visuales y profesionales creativos. La fuente de verdad funcional y técnica es [`HABITTUS_MASTER.md`](./HABITTUS_MASTER.md).

## Requisitos

- Node.js 22 LTS o superior compatible con Expo SDK 54.
- pnpm 10.28.1 mediante Corepack.
- Expo Go compatible en el teléfono o tablet de validación.

## Instalación

```bash
corepack enable
pnpm install
cp .env.example .env
```

Las variables `EXPO_PUBLIC_*` quedan incluidas en la aplicación cliente. Nunca deben contener secretos.

## Ejecución

```bash
pnpm start
pnpm web
```

Desde `pnpm start`, escaneá el QR con Expo Go o elegí el simulador disponible.

## Calidad

```bash
pnpm lint
pnpm format:check
pnpm typecheck
pnpm check
pnpm doctor
pnpm build:mobile
pnpm audit:static
pnpm test:behavior
```

El estado verificable de la fundación y el diagnóstico de instalación se mantienen en [`docs/MISSION_2_VALIDATION.md`](./docs/MISSION_2_VALIDATION.md).

La validación remota, la configuración de EAS Build y el procedimiento completo desde tablet se encuentran en [`docs/MISSION_8_MOBILE_BETA.md`](./docs/MISSION_8_MOBILE_BETA.md). El workflow manual `.github/workflows/mobile-beta.yml` puede generar el lockfile y las exportaciones como artefactos, y solicitar un APK cuando el repositorio tenga configurados el secreto `EXPO_TOKEN` y las variables públicas del proyecto Expo.

## Estructura

```text
app/                    Rutas y pantallas mediante Expo Router
  (public)/             Inicio, exploración, búsqueda, perfiles y obras
  (auth)/               Acceso y registro simulados
  (professional)/       Rutas protegidas de gestión profesional
  (admin)/              Consola protegida por rol administrativo
scripts/                Auditorías ejecutables sin dependencias nuevas
src/
  config/               Configuración validada del cliente
  features/             Límites funcionales por dominio
  shared/components/    Componentes reutilizables
  shared/theme/         Tokens visuales iniciales
```

## Alcance actual

La beta cliente incluye autenticación, perfil, portfolio, publicación, descubrimiento, contacto y moderación simulados. No incluye persistencia, API ni carga multimedia remota. Su estado técnico y los bloqueos para validarla en un dispositivo están documentados en [`docs/BETA_VALIDATION.md`](./docs/BETA_VALIDATION.md).

## Autenticación simulada

La experiencia de registro, inicio, protección de rutas y cierre de sesión utiliza temporalmente un adaptador en memoria. La cuenta incluida para pruebas es:

- Email: `artista@habittus.local`
- Contraseña: `Habittus123!`

La administración simulada utiliza `admin@habittus.local` con contraseña `HabittusAdmin123!`.

Las cuentas y sesiones creadas se pierden al reiniciar la aplicación. El contrato `AuthGateway` permite sustituir el adaptador por un backend OIDC sin acoplar formularios ni navegación al proveedor.

## Perfil y portfolio simulados

Las rutas profesionales permiten crear y editar un perfil, además de listar, crear, editar y eliminar obras. `ProfileGateway` y `PortfolioGateway` conservan temporalmente los datos en memoria y simulan latencia de red. Los datos se pierden al reiniciar la aplicación y las URLs de imágenes no se cargan a almacenamiento remoto.

## Publicación y descubrimiento simulados

Los perfiles y las obras admiten estados borrador/publicado. Las rutas públicas muestran exclusivamente entidades publicadas y permiten explorar artistas, explorar obras, buscar, filtrar y consultar detalles. El módulo `discovery` combina los gateways de perfil y portfolio sin duplicar datos.

No se implementaron backend, almacenamiento multimedia, pagos, chat ni administración completa.

## Contacto y administración simulados

Los perfiles públicos ofrecen un formulario profesional sujeto a las preferencias del artista. Las solicitudes se conservan en una bandeja en memoria y admiten estados leída, archivada y rechazada. La consola administrativa simulada permite suspender cuentas, ocultar perfiles u obras y registrar el motivo de cada acción.

No existe envío de email, chat en tiempo real, notificaciones push ni persistencia administrativa.

La cuenta administrativa simulada está protegida por rol y todas sus acciones requieren un motivo. Los ocultamientos se reflejan en la exploración pública y quedan registrados en una auditoría en memoria.

## Seguridad de la beta simulada

- Las rutas profesionales y administrativas verifican sesión y rol antes de renderizar contenido.
- El portfolio, el perfil, las preferencias y la bandeja operan con el identificador de la sesión activa.
- El descubrimiento excluye borradores, contenido moderado y cuentas suspendidas.
- Los emails privados se eliminan de la proyección pública y las solicitudes verifican que el perfil publicado pertenezca a su destinatario.
- Las variables `EXPO_PUBLIC_*` son configuración pública del cliente y no admiten secretos.

Estas defensas estabilizan la simulación, pero no sustituyen autorización de servidor. Los gateways en memoria y sus cuentas de demostración no deben utilizarse en producción.

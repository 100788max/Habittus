# Account

El módulo de cuenta separa dominio, aplicación, infraestructura y presentación:

- `domain`: sesión, usuario y errores estables.
- `application`: contrato `AuthGateway` y validaciones independientes del proveedor.
- `infrastructure`: adaptador simulado reemplazable por OIDC/backend.
- `presentation`: contexto de sesión y formulario accesible compartido.

El adaptador simulado mantiene cuentas y sesión solo en memoria. No persiste credenciales y no representa seguridad de producción.

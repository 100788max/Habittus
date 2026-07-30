# Misión 8 — Validación y compilación móvil

## Estado verificable

El acceso al registro npm desde Codex Cloud continúa bloqueado por el proxy externo con HTTP 403. No se intentó instalar después de confirmar el bloqueo mediante una solicitud de solo lectura. En consecuencia, este entorno no puede generar honestamente `pnpm-lock.yaml`, ejecutar Expo Doctor ni producir bundles.

El repositorio incorpora un flujo manual de GitHub Actions que realiza instalación, controles de calidad, Expo Doctor y exportaciones Android/web en infraestructura web. Opcionalmente, un segundo trabajo solicita a EAS Build un APK Android de distribución interna.

## Preparación única desde una tablet

1. Abrir `expo.dev` en el navegador, iniciar sesión y crear el proyecto **HABITTUS** si todavía no existe.
2. En la configuración del proyecto, copiar su **Project ID**. En la configuración de la cuenta, copiar el nombre de usuario u organización propietario.
3. En Expo, abrir **Account settings → Access tokens → Create token**. Crear un token para CI y copiarlo; Expo solo lo muestra una vez.
4. En GitHub, abrir el repositorio y seleccionar **Settings → Secrets and variables → Actions**.
5. En **Secrets**, pulsar **New repository secret**, usar el nombre `EXPO_TOKEN` y pegar el token. No escribirlo en archivos, issues ni logs.
6. En **Variables**, crear `EAS_PROJECT_ID` con el Project ID y `EXPO_OWNER` con el propietario de Expo. Estos identificadores no son secretos.

## Ejecutar validación y obtener el lockfile

1. Abrir **Actions → Mobile beta validation → Run workflow**.
2. Dejar desactivada **Build an installable Android APK** y pulsar **Run workflow**.
3. Abrir la ejecución y comprobar que el trabajo `validate` finaliza en verde.
4. En **Artifacts**, descargar `habittus-mobile-validation`. El archivo incluye `pnpm-lock.yaml` y las exportaciones.
5. Desde la rama del PR en GitHub, usar **Add file → Upload files**, cargar únicamente `pnpm-lock.yaml` y confirmar el commit. Después, volver a ejecutar el workflow: con el lockfile versionado deberá cambiarse la instalación a modo congelado en una revisión posterior.

Si `validate` falla, abrir el paso rojo y usar su salida exacta para corregir dependencias o código; no iniciar EAS hasta que todas las verificaciones estén verdes.

## Crear e instalar el APK beta

1. Volver a **Actions → Mobile beta validation → Run workflow**.
2. Activar **Build an installable Android APK** y pulsar **Run workflow**.
3. Esperar que `validate` y `build-android` terminen en verde. El paso de EAS imprime la URL de la compilación.
4. Abrir esa URL desde la tablet, pulsar **Install** o escanear el QR desde el teléfono Android de prueba.
5. Si Android lo solicita, autorizar temporalmente la instalación desde el navegador utilizado. Instalar el APK y revocar ese permiso después.

## Alternativa verificable con Expo Go

1. En GitHub, abrir **Code → Codespaces → Create codespace on this branch** desde la tablet.
2. En la terminal web ejecutar `pnpm install`, `pnpm check`, `pnpm doctor` y `pnpm start --tunnel`.
3. Abrir Expo Go en el teléfono y escanear el QR mostrado. Mantener el Codespace activo durante la prueba.

Esta alternativa depende de que Codespaces tenga acceso al registro y de que el túnel de Expo esté disponible. No reemplaza la generación y revisión del lockfile.

## Recorrido de aceptación en dispositivo

1. Abrir inicio, exploración, búsqueda y detalles públicos.
2. Enviar una solicitud desde un perfil que acepte contacto y verificar confirmación.
3. Iniciar sesión como artista, editar perfil, crear una obra y alternar su publicación.
4. Revisar la bandeja, cambiar estados y cerrar sesión.
5. Iniciar sesión administrativa, ocultar contenido con motivo, confirmar que desaparece del área pública y reactivarlo.
6. Reiniciar la app y confirmar la limitación esperada: los datos simulados vuelven al estado inicial.

## Bloqueo actual

La intervención del propietario es obligatoria para crear o vincular el proyecto Expo, almacenar `EXPO_TOKEN` como secreto de GitHub y ejecutar el workflow. Hasta que el trabajo remoto finalice y `pnpm-lock.yaml` vuelva al repositorio, la compilación beta y la validación en dispositivo permanecen pendientes, no fallidas.

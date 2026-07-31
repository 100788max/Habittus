# HABITTUS V2 — Especificación viva de producto

**Estado:** aprobada para reconstrucción incremental  
**Fecha base:** 31 de julio de 2026  
**Reemplaza funcionalmente:** alcance reducido de `HABITTUS_MASTER.md`  

## Visión

HABITTUS es la plataforma profesional y social para la vida artística. Integra organización de
obra, portfolio, negocio, descubrimiento, comunidad, oportunidades y entrenamiento con IA para
artistas visuales y agentes del ecosistema cultural.

## Principios obligatorios

1. El arte y su contexto son protagonistas.
2. La experiencia móvil debe sentirse premium, fluida y contemporánea.
3. Una función no está terminada si usa datos simulados o pierde información al reiniciar.
4. Inicio resume; Obras administra; Portfolio presenta; Perfil identifica.
5. Las estadísticas se calculan desde datos reales.
6. “Artista verificado” solo puede concederlo administración.
7. Privacidad, moderación, accesibilidad y seguridad forman parte de cada módulo.
8. Los cambios se entregan en recorridos completos y verificables, no como botones aislados.

## Navegación objetivo

- Inicio
- Descubrir
- Crear
- Comunidad
- Perfil

El área privada incorporará accesos a Obras, Portfolio, Negocio, Coach IA, Oportunidades,
Mensajes, Estadísticas y Configuración sin saturar la barra principal.

## Primer recorrido vertical

`Registro → Perfil → Cámara/Galería → Guardar obra → Catálogo → Portfolio`

### Criterios de aceptación

- La persona puede tomar o elegir una fotografía.
- La aplicación conserva una copia privada de la imagen.
- La obra conserva sus datos después de cerrar y volver a abrir la aplicación.
- Puede editarse, publicarse, ocultarse y eliminarse.
- Los errores se muestran y no destruyen información ingresada.
- El recorrido funciona en una APK release sin servidor de desarrollo.

## Arquitectura evolutiva

- Aplicación: React Native, Expo y TypeScript.
- Persistencia de dispositivo para funcionamiento temprano y tolerancia offline.
- Backend PostgreSQL, almacenamiento de objetos y autenticación en la siguiente fundación.
- API modular, notificaciones, tiempo real y búsqueda incorporados por fases.
- Integraciones de IA ejecutadas desde servidor; las claves nunca viven en la aplicación.

## Etapas

1. Núcleo profesional real.
2. Sistema visual premium.
3. Feed y descubrimiento.
4. Comunidad, mensajería y oportunidades.
5. Negocio artístico.
6. Coach IA de texto, imagen y voz.
7. Marketplace y servicios institucionales.

## Gobernanza

Toda modificación solicitada por Maxi se registra en esta especificación o en la matriz de
requisitos antes o junto con el código. Cada ciclo informa funciones, pantallas, pruebas, errores,
avance y siguiente bloque.

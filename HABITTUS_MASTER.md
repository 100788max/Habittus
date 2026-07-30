# HABITTUS_MASTER.md

## 1. Propósito del documento

### 1.1 Objetivo del documento maestro

`HABITTUS_MASTER.md` es la fuente de verdad funcional, técnica y operativa de HABITTUS. Su objetivo es mantener en un único documento la definición aprobada del producto, el alcance de cada etapa, las reglas de negocio, la arquitectura, las decisiones técnicas y los criterios que condicionan el desarrollo y la operación.

El documento debe permitir que producto, diseño, ingeniería, calidad, seguridad y operación trabajen sobre los mismos supuestos. Cuando exista una diferencia entre una interpretación informal y este documento, prevalece la versión aprobada de `HABITTUS_MASTER.md` hasta que sea modificada mediante el proceso establecido.

### 1.2 Alcance del documento

El documento cubre:

- visión, posicionamiento y objetivos;
- alcance del MVP, beta y evolución futura;
- usuarios, roles, permisos, casos de uso y flujos;
- reglas de negocio y modelo conceptual de datos;
- arquitectura, stack y decisiones técnicas;
- experiencia de usuario, sistema visual y arquitectura de información;
- autenticación, perfiles, obras, descubrimiento, contacto y moderación;
- comunicaciones, métricas, rendimiento y accesibilidad;
- privacidad, calidad, despliegue y operación;
- decisiones registradas, glosario y anexos.

No reemplaza contratos legales definitivos, diseños de interfaz de alta fidelidad, contratos API generados, diagramas físicos de infraestructura, runbooks ejecutables ni código. Esos artefactos deberán derivar de este documento y no contradecirlo.

### 1.3 Cómo debe mantenerse actualizado

- Toda decisión que modifique alcance, reglas, datos, arquitectura, seguridad o experiencia debe registrarse antes o junto con su implementación.
- Cada cambio debe realizarse mediante control de versiones y revisión por las disciplinas afectadas.
- Los capítulos deben conservar numeración, terminología y referencias coherentes.
- Las decisiones superadas no deben eliminarse sin preservar su reemplazo o historial.
- Los valores sujetos a verificación operativa deben indicar responsable o momento de revisión.
- Las funciones futuras no deben describirse como capacidades disponibles.
- Una corrección editorial puede aplicarse sin cambiar alcance; una modificación funcional requiere aprobación explícita.

### 1.4 Criterios para modificar este documento

Una modificación es necesaria cuando:

- cambia un objetivo o límite del producto;
- se incorpora o retira una funcionalidad;
- aparece una nueva regla de negocio;
- cambia una entidad, relación o clasificación de datos;
- se adopta o descarta una decisión técnica;
- un riesgo exige nuevos controles;
- una prueba con usuarios invalida un supuesto;
- una obligación legal o contractual afecta el tratamiento;
- se detecta una contradicción, duplicación o referencia inválida.

El cambio debe indicar motivación, impacto, etapa afectada y, si corresponde, estrategia de migración. No se modificarán capítulos aprobados únicamente para adaptar el documento a una implementación que se apartó de ellos sin decisión previa.

### 1.5 Relación con otros documentos del proyecto

Los artefactos derivados incluyen historias, diseños, ADR técnicos, contratos OpenAPI, esquemas de datos, planes de prueba, políticas legales, runbooks y notas de release.

Reglas de precedencia:

1. `HABITTUS_MASTER.md` define intención, alcance y decisiones vigentes.
2. Los ADR amplían una decisión técnica sin contradecir este documento.
3. Los contratos y diseños materializan los requisitos aprobados.
4. Las tareas describen unidades de ejecución, no redefinen producto.
5. El código implementa los contratos y reglas documentados.

Si un artefacto derivado requiere una conducta incompatible, primero debe actualizarse y aprobarse este documento.

## 2. Visión general de HABITTUS

### 2.1 Definición del producto

HABITTUS es una plataforma profesional orientada a artistas visuales, fotógrafos, escultores, ceramistas, ilustradores, performers y otros perfiles creativos que necesitan presentar, organizar y gestionar su presencia profesional en un entorno digital especializado.

El producto se concibe como una herramienta de infraestructura profesional para el ecosistema artístico y creativo. Su propósito es permitir que cada artista construya una representación clara, estructurada y verificable de su práctica, su obra, su trayectoria y sus canales de contacto profesional.

HABITTUS no debe entenderse como una red social generalista ni como una simple galería de imágenes. La plataforma debe funcionar como un espacio profesional donde el contenido artístico se presenta con contexto, orden y criterios adecuados para facilitar su consulta por parte de otros actores del sector.

En su alcance principal, HABITTUS debe permitir que los perfiles creativos administren información relevante sobre su identidad profesional, disciplinas, obras, proyectos, materiales, técnicas, trayectoria, disponibilidad y formas de contacto. La plataforma también debe facilitar que terceros interesados descubran, consulten y evalúen perfiles artísticos de manera organizada.

La definición funcional del producto prioriza la claridad, la calidad de la información y la utilidad profesional por encima de la interacción social superficial o el consumo rápido de contenido.

### 2.2 Problema que resuelve

Los artistas visuales y creativos suelen depender de herramientas fragmentadas para mostrar y gestionar su trabajo profesional. Es común que utilicen redes sociales, sitios personales, carpetas en la nube, documentos PDF, plataformas de venta, mensajería directa y portfolios dispersos para resolver necesidades que forman parte de un mismo flujo profesional.

Esta fragmentación genera problemas concretos:

- Dificultad para presentar una trayectoria artística de forma ordenada y actualizada.
- Falta de contexto profesional alrededor de las obras, procesos, técnicas y proyectos.
- Dependencia de plataformas sociales cuyo diseño prioriza la visibilidad algorítmica antes que la profundidad del trabajo artístico.
- Ausencia de una estructura común para que curadores, galeristas, compradores, instituciones o colaboradores evalúen perfiles creativos.
- Pérdida de información relevante en conversaciones informales, publicaciones antiguas o archivos no organizados.
- Dificultad para separar la identidad artística profesional de la actividad personal o social.
- Escasa trazabilidad sobre disponibilidad, contacto, ubicación, disciplinas y características del trabajo.

HABITTUS busca resolver este problema mediante una plataforma especializada que centralice la presentación profesional del artista y organice la información de manera útil para el propio creador y para quienes interactúan profesionalmente con su obra.

El problema principal no es únicamente publicar imágenes, sino construir una presencia profesional consistente, consultable y preparada para relaciones de trabajo, exhibición, compra, colaboración, curaduría o difusión.

### 2.3 Público objetivo

El público objetivo de HABITTUS está compuesto por profesionales y agentes del ecosistema artístico y creativo que necesitan una forma estructurada de presentar, descubrir o evaluar obra y trayectoria.

El foco principal está puesto en creadores cuya producción tiene una dimensión visual, material, performática o interdisciplinaria. Esto incluye tanto perfiles emergentes como profesionales consolidados que requieren ordenar su presencia digital y facilitar interacciones profesionales.

Perfiles contemplados dentro del público objetivo:

- Artistas visuales.
- Fotógrafos.
- Escultores.
- Ceramistas.
- Ilustradores.
- Performers.
- Artistas interdisciplinarios.
- Diseñadores autorales o experimentales cuando su práctica esté vinculada al campo artístico.
- Creativos independientes con producción visual documentable.

El público secundario está formado por personas u organizaciones que necesitan descubrir, contactar, seleccionar o analizar artistas y obras:

- Curadores.
- Galeristas.
- Coleccionistas.
- Compradores.
- Instituciones culturales.
- Ferias, residencias y convocatorias.
- Productoras o equipos creativos.
- Prensa cultural.
- Colaboradores profesionales.

HABITTUS debe contemplar ambos lados de la relación profesional: quienes publican y gestionan su perfil artístico, y quienes consultan esos perfiles con una intención profesional.

### 2.4 Usuarios principales

Los usuarios principales de HABITTUS se agrupan según su relación con la plataforma y sus necesidades funcionales.

#### Artista o creativo profesional

Es el usuario central de la plataforma. Utiliza HABITTUS para construir, mantener y compartir su perfil profesional.

Sus necesidades principales son:

- Presentar su identidad artística de manera clara.
- Organizar obras, proyectos o series.
- Documentar técnicas, materiales, formatos y procesos.
- Comunicar trayectoria, biografía, formación, exposiciones o experiencia relevante.
- Mantener canales de contacto profesional.
- Actualizar su portfolio sin depender de múltiples herramientas externas.
- Disponer de una presencia digital orientada al trabajo profesional.

#### Visitante profesional

Es un usuario que consulta la plataforma para descubrir, evaluar o contactar artistas.

Puede representar intereses diversos, como curaduría, compra, colaboración, contratación, investigación o difusión.

Sus necesidades principales son:

- Encontrar artistas según criterios relevantes.
- Comprender rápidamente la práctica de un creador.
- Consultar obras con información contextual.
- Evaluar trayectoria, disciplinas, ubicación o disponibilidad.
- Acceder a canales de contacto claros.
- Comparar perfiles de forma ordenada.

#### Administrador de plataforma

Es el usuario responsable de operar, revisar y mantener la calidad del entorno.

Sus necesidades principales son:

- Gestionar usuarios y perfiles.
- Revisar contenido reportado o problemático.
- Mantener criterios de calidad y seguridad.
- Administrar categorías, disciplinas o taxonomías si corresponde.
- Supervisar el funcionamiento general de la plataforma.

#### Usuario institucional o curatorial

Es un usuario profesional que puede tener necesidades más específicas que un visitante general.

Sus necesidades principales son:

- Identificar artistas para convocatorias, exposiciones o proyectos.
- Revisar portfolios con criterios consistentes.
- Acceder a información profesional verificable o estructurada.
- Contactar perfiles seleccionados.
- Construir procesos de selección o investigación a partir de información confiable.

### 2.5 Propuesta de valor

HABITTUS ofrece una plataforma profesional especializada para que artistas y creativos puedan organizar, presentar y gestionar su identidad artística en un entorno diseñado específicamente para el sector visual y creativo.

Para los artistas, la propuesta de valor consiste en brindar una herramienta que les permita consolidar su presencia profesional sin depender exclusivamente de redes sociales o portfolios aislados. La plataforma debe ayudar a transformar un conjunto disperso de obras, imágenes, textos y antecedentes en un perfil coherente, consultable y actualizado.

Para visitantes profesionales, la propuesta de valor consiste en facilitar el descubrimiento y la evaluación de artistas mediante información clara, estructurada y orientada a decisiones profesionales. HABITTUS debe reducir la fricción para encontrar perfiles relevantes y comprender su práctica artística.

La propuesta de valor se sostiene en los siguientes ejes:

- Centralización de información profesional del artista.
- Presentación estructurada de obras, proyectos y trayectoria.
- Contexto adecuado para piezas visuales, materiales o performáticas.
- Separación entre presencia profesional y dinámica social generalista.
- Facilidad de consulta para actores del ecosistema artístico.
- Mejora de la visibilidad profesional sin depender únicamente de algoritmos sociales.
- Base organizada para futuras funcionalidades de contacto, curaduría, oportunidades o monetización.

HABITTUS debe aportar valor no por la cantidad de publicaciones, sino por la calidad, organización y utilidad profesional de la información presentada.

### 2.6 Diferenciadores estratégicos

HABITTUS debe diferenciarse de plataformas genéricas mediante decisiones de producto orientadas al trabajo profesional de artistas y creativos.

Los diferenciadores estratégicos principales son:

#### Especialización en perfiles artísticos y creativos

La plataforma debe estar diseñada alrededor de las necesidades de artistas visuales y creativos, no alrededor de publicaciones genéricas. Esto implica contemplar disciplinas, técnicas, materiales, procesos, series, proyectos, trayectoria y contexto de obra.

#### Presentación profesional estructurada

HABITTUS debe priorizar perfiles claros, portfolios organizados e información contextual. La experiencia debe favorecer la comprensión de la práctica artística, no solo la visualización aislada de imágenes.

#### Enfoque en utilidad profesional

Cada funcionalidad debe evaluarse según su aporte a relaciones profesionales: descubrimiento, contacto, selección, exhibición, compra, colaboración o investigación. La plataforma no debe depender de mecánicas de interacción superficial como objetivo central.

#### Respeto por la obra y su contexto

El sistema debe permitir que las obras se presenten con información significativa, incluyendo título, técnica, dimensiones, año, materiales, descripción, disponibilidad u otros datos relevantes según el tipo de pieza.

#### Organización del ecosistema creativo

HABITTUS puede funcionar como una capa de orden para un ecosistema disperso. Su valor estratégico está en crear estructuras comunes para que la información artística sea más fácil de publicar, descubrir y consultar.

#### Escalabilidad hacia servicios profesionales

Aunque el MVP debe mantenerse acotado, la arquitectura funcional debe permitir una evolución futura hacia servicios como convocatorias, oportunidades, contacto avanzado, perfiles institucionales, herramientas curatoriales, venta, encargos o membresías profesionales.

#### Independencia relativa de redes sociales

HABITTUS no debe competir directamente replicando una red social generalista. Su diferenciación consiste en ofrecer un espacio profesional complementario, más estable y mejor estructurado para la carrera del artista.

### 2.7 Principios rectores del producto

Los principios rectores de HABITTUS deben guiar decisiones funcionales, técnicas y de diseño durante todo el desarrollo del proyecto.

#### Claridad profesional

La información debe presentarse de forma clara, comprensible y útil para decisiones profesionales. La plataforma debe evitar complejidad innecesaria y priorizar estructuras que ayuden a entender quién es el artista, qué produce y cómo puede ser contactado.

#### Centralidad del artista

El artista o creativo profesional es el usuario principal. Las decisiones de producto deben proteger su capacidad de representar su obra, trayectoria e identidad de manera fiel, ordenada y controlada.

#### Respeto por el contenido artístico

Las obras, imágenes y proyectos no deben tratarse como publicaciones descartables. La plataforma debe reconocer que el contenido artístico requiere contexto, autoría, calidad visual y cuidado en la presentación.

#### Estructura antes que volumen

HABITTUS debe priorizar información bien organizada por encima de grandes cantidades de contenido sin curaduría o sin contexto. La utilidad profesional depende de la calidad estructural del perfil y del portfolio.

#### Simplicidad operativa

La experiencia de uso debe reducir la carga administrativa del artista. Crear y mantener un perfil profesional debe ser un proceso claro, progresivo y sostenible.

#### Escalabilidad funcional

El producto debe poder comenzar con un MVP acotado y crecer hacia funcionalidades más complejas sin rediseñar sus fundamentos. Las decisiones iniciales deben permitir evolución futura en búsqueda, perfiles, multimedia, administración, monetización e integraciones.

#### Privacidad y control

Los usuarios deben mantener control sobre la información que publican, editan o eliminan. La plataforma debe diferenciar entre información pública, información de contacto e información administrativa.

#### Calidad y confianza

HABITTUS debe aspirar a construir un entorno confiable para artistas y visitantes profesionales. Esto requiere criterios de calidad, mecanismos de administración, validaciones adecuadas y una experiencia que reduzca perfiles incompletos, información confusa o contenido inapropiado.

#### Interoperabilidad futura

Aunque el producto inicial pueda ser limitado, el diseño funcional debe contemplar que artistas y organizaciones pueden necesitar compartir, exportar, vincular o integrar información con otros canales profesionales.

#### Evolución documentada

Toda decisión relevante del producto debe registrarse en este documento maestro. HABITTUS debe evolucionar de forma controlada, evitando cambios funcionales importantes que no estén reflejados en la documentación oficial.

## 3. Contexto del mercado y posicionamiento

### 3.1 Segmento de mercado

HABITTUS se ubica en la intersección entre plataformas profesionales, herramientas de portfolio digital, directorios especializados y servicios de infraestructura para el ecosistema artístico y creativo.

El segmento de mercado al que pertenece no debe definirse únicamente como una plataforma de publicación visual. Su alcance funcional responde a una necesidad más amplia: ofrecer un espacio estructurado para que artistas y creativos organicen su identidad profesional, documenten su obra y faciliten interacciones con actores relevantes del sector.

Dentro del mercado digital actual, los artistas suelen recurrir a soluciones diseñadas para otros fines: redes sociales masivas, sitios web personales, marketplaces generalistas, plataformas de almacenamiento, herramientas de diseño web o catálogos manuales. Estas alternativas pueden resolver necesidades parciales, pero no necesariamente ofrecen una estructura específica para representar una práctica artística de manera profesional.

HABITTUS debe posicionarse como una plataforma especializada, orientada a la calidad de la información y a la utilidad profesional. Su segmento principal es el de herramientas digitales para gestión, presentación y descubrimiento de perfiles artísticos y creativos.

Este segmento puede incluir relaciones funcionales con:

- Portfolios digitales profesionales.
- Directorios de artistas y creativos.
- Plataformas de descubrimiento artístico.
- Herramientas de presentación de obra.
- Infraestructura digital para artistas independientes.
- Espacios de conexión entre creadores y agentes profesionales.
- Plataformas futuras de oportunidades, encargos, curaduría o comercialización.

El posicionamiento inicial debe evitar una definición demasiado amplia que diluya el propósito del producto. HABITTUS debe priorizar el valor profesional para artistas visuales y creativos antes que intentar competir directamente con redes sociales, marketplaces o constructores genéricos de sitios web.

### 3.2 Tipos de profesionales creativos contemplados

HABITTUS está orientado a perfiles cuya práctica requiere documentación visual, contextualización profesional y presentación ordenada de obra, procesos o proyectos.

Los tipos de profesionales creativos contemplados inicialmente son:

#### Artistas visuales

Incluye creadores que trabajan con pintura, dibujo, instalación, arte conceptual, arte digital, collage, técnicas mixtas u otras formas de producción visual. Estos perfiles requieren presentar obras, series, procesos, declaraciones de artista, exposiciones y antecedentes relevantes.

#### Fotógrafos

Incluye fotógrafos artísticos, documentales, editoriales, experimentales o autorales que necesitan organizar series, proyectos, ensayos visuales, técnica, contexto, publicaciones, exhibiciones y disponibilidad profesional.

#### Escultores

Incluye artistas que producen obra tridimensional en diversos materiales. Estos perfiles requieren documentar dimensiones, materiales, peso, instalación, transporte, ubicación, disponibilidad y condiciones de exhibición o adquisición.

#### Ceramistas

Incluye creadores que trabajan con cerámica artística, utilitaria autoral, objetos escultóricos, piezas seriadas o piezas únicas. La plataforma debe permitir describir técnica, materiales, proceso, dimensiones, disponibilidad y características de producción.

#### Ilustradores

Incluye ilustradores autorales, editoriales, experimentales, conceptuales o comerciales con práctica artística o profesional. Estos usuarios necesitan presentar series, encargos, publicaciones, estilos, técnicas y disponibilidad para colaboraciones.

#### Performers

Incluye artistas cuya obra se manifiesta a través de acciones, cuerpo, tiempo, espacio, registro audiovisual o documentación de eventos. Estos perfiles requieren una estructura que permita contextualizar obras no necesariamente objetuales, documentar registros y describir condiciones de presentación.

#### Creativos interdisciplinarios

Incluye perfiles cuya práctica combina medios, disciplinas o formatos. HABITTUS debe contemplar que algunos usuarios no encajan en una sola categoría y necesitan describir proyectos híbridos, procesos colaborativos o prácticas experimentales.

#### Otros perfiles creativos vinculados al campo visual

Pueden incluir diseñadores autorales, artistas textiles, grabadores, muralistas, joyeros contemporáneos, artistas digitales, videastas, escenógrafos o creadores de objetos, siempre que su práctica requiera una presentación profesional de obra, proyecto o trayectoria.

La plataforma debe evitar imponer una taxonomía rígida que limite la diversidad de prácticas artísticas. Al mismo tiempo, necesita una estructura suficiente para facilitar búsqueda, clasificación y comprensión por parte de visitantes profesionales.

### 3.3 Necesidades del sector artístico y creativo

El sector artístico y creativo presenta necesidades específicas que no siempre son atendidas por herramientas digitales generalistas. HABITTUS debe responder a esas necesidades desde una perspectiva funcional y profesional.

#### Presentación profesional consistente

Los artistas necesitan una forma clara de explicar quiénes son, qué producen, cómo trabajan y cuáles son sus antecedentes. Esta información debe estar organizada de manera que pueda ser consultada por terceros sin depender de conversaciones informales o publicaciones dispersas.

#### Organización de obra y trayectoria

La producción artística suele estar compuesta por obras individuales, series, proyectos, registros, exposiciones, colaboraciones y textos. La plataforma debe permitir ordenar esa información de forma coherente para construir una narrativa profesional verificable.

#### Contexto para la obra

Una imagen por sí sola no siempre comunica la naturaleza de una obra. El sector requiere información contextual como título, año, técnica, materiales, dimensiones, descripción, estado, serie, ubicación, disponibilidad o condiciones de exhibición.

#### Visibilidad orientada a oportunidades profesionales

Los artistas necesitan ser encontrados por personas u organizaciones con intención profesional: curadores, galerías, instituciones, compradores, colaboradores, prensa o convocatorias. La visibilidad relevante no se limita al alcance masivo, sino a la calidad del encuentro entre artista y oportunidad.

#### Canales claros de contacto

El contacto profesional suele ocurrir a través de mensajes dispersos, redes sociales o correos no actualizados. HABITTUS debe favorecer la existencia de información de contacto clara, controlada y adecuada al tipo de interacción que el artista desea recibir.

#### Separación entre presencia personal y presencia profesional

Muchos artistas utilizan redes sociales para difundir obra, pero estas plataformas mezclan vida personal, contenido efímero, algoritmos y métricas sociales. HABITTUS debe permitir una presencia profesional más estable, ordenada y centrada en la práctica creativa.

#### Herramientas de consulta para agentes del sector

Curadores, galeristas, compradores e instituciones necesitan evaluar perfiles con información consistente. La falta de estructura dificulta comparar trayectorias, comprender disciplinas, revisar portfolios o contactar artistas adecuados para una oportunidad determinada.

#### Control sobre identidad, obra e información

El artista debe poder decidir cómo se presenta, qué información publica, qué datos mantiene privados y cómo actualiza su perfil. La plataforma debe respetar la autoría, la representación profesional y el control del usuario sobre su contenido.

### 3.4 Competidores o referencias indirectas

HABITTUS no debe analizar su entorno competitivo únicamente en términos de competidores directos. La necesidad que busca resolver hoy suele estar cubierta por un conjunto de soluciones parciales o indirectas.

#### Redes sociales visuales

Plataformas sociales centradas en imagen o video son utilizadas por artistas para difusión, visibilidad y construcción de audiencia. Sin embargo, su lógica principal suele estar asociada a interacción, frecuencia de publicación, entretenimiento, métricas sociales y distribución algorítmica.

HABITTUS debe diferenciarse de estas plataformas al priorizar estructura profesional, contexto de obra y consulta ordenada por encima de la dinámica de feed.

#### Sitios web personales

Los sitios personales permiten alto grado de control visual y narrativo. No obstante, requieren mantenimiento, diseño, hosting, configuración técnica y estrategias propias de descubrimiento. Además, no necesariamente forman parte de un ecosistema común donde terceros puedan buscar o comparar perfiles.

HABITTUS puede complementar o reemplazar parcialmente esta necesidad al ofrecer una estructura profesional más accesible y estandarizada.

#### Constructores de portfolio

Existen herramientas que permiten crear portfolios visuales. Suelen resolver la presentación individual, pero no siempre contemplan descubrimiento, taxonomías artísticas, contacto profesional estructurado, administración de comunidad o evolución hacia servicios propios del ecosistema creativo.

HABITTUS debe diferenciarse por su orientación al sector artístico y por su capacidad de organizar relaciones entre perfiles, obras y agentes profesionales.

#### Marketplaces de arte o productos creativos

Las plataformas de venta se enfocan en transacciones, catálogo comercial y disponibilidad de compra. Este enfoque puede ser útil para ciertos casos, pero no representa completamente la trayectoria, práctica, contexto o identidad profesional del artista.

HABITTUS no debe definirse inicialmente como un marketplace. Su posicionamiento debe priorizar la presentación profesional y el descubrimiento, dejando cualquier componente transaccional como una posible evolución futura si está alineada con la estrategia del producto.

#### Directorios profesionales

Los directorios permiten listar perfiles, pero con frecuencia ofrecen información limitada, baja calidad visual o escasa profundidad sobre obra y trayectoria. HABITTUS debe superar esta limitación mediante perfiles ricos, contexto artístico y una experiencia diseñada para consulta profesional.

#### Herramientas de almacenamiento y documentos compartidos

Carpetas en la nube, documentos PDF y presentaciones son recursos habituales para compartir portfolios. Su problema principal es que no constituyen una presencia profesional viva, actualizable y descubrible dentro de una plataforma especializada.

HABITTUS debe ofrecer una alternativa más estructurada, permanente y fácil de mantener.

### 3.5 Oportunidades de diferenciación

HABITTUS tiene oportunidad de diferenciarse si evita replicar modelos generalistas y se concentra en resolver necesidades específicas del ecosistema artístico y creativo.

#### Especialización funcional

La plataforma puede diferenciarse al diseñar sus entidades, flujos y criterios alrededor de prácticas artísticas reales: obras, series, técnicas, materiales, trayectorias, procesos, registros, disponibilidad y contacto profesional.

#### Calidad de perfiles

Una oportunidad clave es elevar la calidad de la presentación profesional. Perfiles incompletos, desordenados o meramente visuales reducen la utilidad de una plataforma. HABITTUS debe promover perfiles claros, informativos y mantenibles.

#### Contextualización de la obra

La posibilidad de presentar obra con datos relevantes y contexto adecuado es un diferenciador central frente a plataformas donde la imagen aparece aislada o subordinada a una lógica de publicación rápida.

#### Descubrimiento profesional

HABITTUS puede construir valor facilitando que visitantes profesionales encuentren artistas según criterios útiles: disciplina, técnica, ubicación, tipo de obra, disponibilidad, trayectoria, intereses o características del trabajo. Estos criterios deben definirse cuidadosamente para no forzar categorías reduccionistas.

#### Neutralidad frente a la popularidad algorítmica

La plataforma puede diferenciarse al no basar la relevancia exclusivamente en popularidad, cantidad de seguidores o frecuencia de publicación. El posicionamiento debe favorecer la calidad, pertinencia y estructura de la información.

#### Confianza y orden

Un entorno profesional requiere información clara, moderación, criterios de calidad y control sobre el contenido. HABITTUS puede diferenciarse si construye confianza tanto para artistas como para visitantes profesionales.

#### Evolución hacia infraestructura del sector

A largo plazo, HABITTUS puede convertirse en una base organizada para oportunidades, convocatorias, colaboraciones, curaduría, encargos o servicios profesionales. Esta evolución debe apoyarse en un modelo de datos sólido y en una arquitectura funcional escalable.

### 3.6 Riesgos de posicionamiento

El posicionamiento de HABITTUS debe gestionarse con precisión para evitar ambigüedades que afecten el desarrollo del producto, la comunicación y la adopción por parte de usuarios.

#### Riesgo de parecer una red social más

Si la plataforma adopta demasiadas mecánicas propias de redes sociales generalistas, puede perder su carácter profesional y quedar atrapada en expectativas de interacción, seguidores, likes o producción constante de contenido.

Mitigación: priorizar perfiles, portfolios, contexto de obra, búsqueda útil y contacto profesional antes que dinámicas de feed o engagement superficial.

#### Riesgo de parecer solo una galería de imágenes

Si HABITTUS se limita a mostrar imágenes, no resolverá el problema principal de organización profesional. Las obras necesitan contexto, relación con trayectoria y datos funcionales.

Mitigación: asegurar que el modelo de producto contemple información estructurada sobre obra, disciplinas, técnicas, materiales, proyectos, antecedentes y disponibilidad.

#### Riesgo de competir prematuramente con marketplaces

Un enfoque demasiado temprano en venta o transacciones podría condicionar el producto hacia inventario, precios y conversión comercial, dejando en segundo plano la presentación profesional y la construcción de confianza.

Mitigación: mantener el MVP centrado en perfil, portfolio, descubrimiento y contacto profesional. Cualquier funcionalidad comercial debe evaluarse como evolución posterior.

#### Riesgo de taxonomía demasiado rígida

El campo artístico incluye prácticas híbridas, experimentales e interdisciplinarias. Una clasificación excesivamente cerrada puede excluir usuarios o representar mal su trabajo.

Mitigación: combinar categorías estructuradas con campos flexibles, etiquetas controladas y descripciones abiertas que permitan representar prácticas diversas.

#### Riesgo de amplitud excesiva

Intentar atender a todos los perfiles creativos desde el inicio puede diluir el foco y complicar el diseño del producto. La plataforma necesita suficiente amplitud para contemplar diversidad, pero también claridad sobre su usuario prioritario.

Mitigación: enfocar el MVP en perfiles visuales y creativos con obra documentable, dejando otras verticales para evaluación futura.

#### Riesgo de baja calidad de contenido

Una plataforma profesional pierde valor si los perfiles están incompletos, desactualizados o mal estructurados.

Mitigación: definir criterios mínimos de perfil, guías de carga de información, validaciones, estados de completitud y herramientas de administración.

#### Riesgo de falta de confianza

Artistas y visitantes profesionales pueden evitar la plataforma si no perciben control, seguridad, claridad de autoría o respeto por la obra.

Mitigación: incorporar desde el diseño funcional principios de privacidad, control de publicación, respeto por la propiedad intelectual, moderación y transparencia.

#### Riesgo de propuesta de valor ambigua

Si HABITTUS no comunica claramente si es portfolio, red, directorio, marketplace o herramienta profesional, los usuarios pueden no entender por qué deberían adoptarla.

Mitigación: definir el posicionamiento inicial como plataforma profesional para presentación, organización y descubrimiento de artistas visuales y creativos.

## 4. Objetivos del producto

### 4.1 Objetivos generales

Los objetivos generales de HABITTUS definen la dirección funcional del producto y establecen el marco para priorizar decisiones de diseño, desarrollo y evolución de la plataforma.

El objetivo principal es construir una plataforma profesional que permita a artistas visuales y creativos organizar, presentar y gestionar su identidad artística de manera estructurada, confiable y útil para interacciones profesionales.

HABITTUS debe cumplir los siguientes objetivos generales:

- Proveer un espacio digital especializado para perfiles artísticos y creativos.
- Permitir la presentación ordenada de obra, proyectos, trayectoria y datos profesionales.
- Facilitar que visitantes profesionales comprendan la práctica de un artista sin depender de información dispersa.
- Mejorar la calidad del descubrimiento de artistas mediante información contextual y criterios relevantes.
- Reducir la dependencia exclusiva de redes sociales generalistas como herramienta principal de presencia profesional.
- Ofrecer una base documental y funcional que pueda evolucionar hacia servicios profesionales más avanzados.
- Proteger la claridad, el control y la autoría del contenido publicado por los artistas.

Estos objetivos deben orientar el desarrollo de la plataforma sin convertirla prematuramente en una red social, marketplace o herramienta genérica de publicación.

### 4.2 Objetivos del MVP

El MVP de HABITTUS debe validar la utilidad central de la plataforma: permitir que un artista cree una presencia profesional estructurada y que un visitante pueda consultar esa información de manera clara.

Los objetivos del MVP son:

- Permitir el registro o identificación básica de usuarios necesarios para crear y administrar un perfil profesional.
- Permitir la creación y edición de un perfil de artista o creativo.
- Permitir la carga y organización básica de obras, piezas, proyectos o registros visuales.
- Permitir asociar información contextual mínima a cada obra o proyecto.
- Permitir la visualización pública o compartible de perfiles profesionales.
- Permitir que visitantes consulten perfiles y portfolios de manera ordenada.
- Permitir que el artista defina información de contacto profesional visible o gestionable.
- Establecer una estructura inicial de categorías, disciplinas o etiquetas que facilite comprensión y descubrimiento.
- Incorporar criterios mínimos de calidad, validación y consistencia de datos.
- Sentar las bases técnicas y funcionales para futuras capacidades de búsqueda, administración, moderación y monetización.

El MVP no debe intentar resolver todos los problemas del ecosistema artístico. Debe enfocarse en la creación de una base confiable para perfiles profesionales y portfolios estructurados.

### 4.3 Objetivos de mediano plazo

Los objetivos de mediano plazo corresponden a la etapa posterior al MVP, una vez validada la necesidad principal y estabilizada la experiencia básica de perfiles y portfolios.

En esta etapa, HABITTUS debe avanzar hacia mayor utilidad profesional, mejor descubrimiento y capacidades operativas más completas.

Objetivos de mediano plazo:

- Mejorar las herramientas de búsqueda y filtrado de perfiles artísticos.
- Incorporar mecanismos de curaduría o selección editorial si resultan pertinentes para la estrategia de producto.
- Ampliar la capacidad de organización de portfolios, series, proyectos y archivos multimedia.
- Mejorar la administración de perfiles incompletos, inactivos o de baja calidad.
- Incorporar herramientas de moderación y reportes más robustas.
- Permitir mayor personalización del perfil sin comprometer la consistencia estructural de la plataforma.
- Incorporar métricas internas de uso, adopción y calidad de perfiles respetando criterios de privacidad.
- Evaluar funcionalidades para oportunidades profesionales, convocatorias, colaboraciones o encargos.
- Fortalecer el sistema de roles para contemplar usuarios institucionales, curatoriales o administrativos.
- Mejorar la arquitectura de almacenamiento y optimización de contenido multimedia.

El mediano plazo debe mantener la coherencia con el objetivo principal: fortalecer la presencia profesional de artistas y facilitar relaciones útiles dentro del ecosistema creativo.

### 4.4 Objetivos de largo plazo

Los objetivos de largo plazo definen posibles líneas de evolución para HABITTUS una vez que la plataforma haya demostrado valor para artistas y visitantes profesionales.

Estos objetivos no forman parte obligatoria del MVP. Deben considerarse como dirección estratégica futura, condicionada por validación de usuarios, sostenibilidad operativa, viabilidad técnica y alineación con la identidad del producto.

Objetivos de largo plazo:

- Convertir HABITTUS en una infraestructura profesional de referencia para artistas visuales y creativos.
- Construir un ecosistema donde artistas, curadores, instituciones, compradores y colaboradores puedan interactuar con información clara y confiable.
- Desarrollar herramientas avanzadas para descubrimiento, selección, investigación o curaduría de perfiles.
- Incorporar servicios profesionales vinculados a oportunidades, convocatorias, exhibiciones, colaboraciones o encargos.
- Evaluar modelos de monetización sostenibles que no perjudiquen la calidad del contenido ni la confianza del usuario.
- Explorar funcionalidades transaccionales o comerciales solo si son coherentes con el posicionamiento profesional de la plataforma.
- Permitir expansión geográfica e internacionalización si el producto lo requiere.
- Construir capacidades de interoperabilidad con otros canales profesionales del artista.
- Consolidar políticas de privacidad, propiedad intelectual, moderación y seguridad acordes al crecimiento de la plataforma.
- Desarrollar una arquitectura escalable que permita crecimiento de usuarios, contenido multimedia, búsqueda y servicios complementarios.

El largo plazo debe evitar transformar HABITTUS en una plataforma indiferenciada. La evolución debe preservar su especialización, su foco profesional y su respeto por la práctica artística.

### 4.5 Métricas de éxito

Las métricas de éxito deben medir si HABITTUS cumple su función como plataforma profesional para artistas y creativos. No deben limitarse a métricas superficiales de actividad o volumen.

Las métricas deben organizarse en torno a valor para el artista, valor para el visitante profesional, calidad de contenido y salud operativa de la plataforma.

Métricas de éxito sugeridas:

- Cantidad de perfiles profesionales creados.
- Porcentaje de perfiles con información mínima completa.
- Cantidad de obras, piezas o proyectos cargados por perfil.
- Porcentaje de obras con información contextual suficiente.
- Cantidad de perfiles publicados o compartibles.
- Frecuencia de actualización de perfiles.
- Cantidad de visitantes que consultan perfiles o portfolios.
- Cantidad de contactos o interacciones profesionales iniciadas desde la plataforma, si esta funcionalidad está disponible.
- Tasa de retorno de artistas para editar o mantener su perfil.
- Tasa de retorno de visitantes profesionales para descubrir o consultar nuevos perfiles.
- Calidad promedio de completitud de perfiles.
- Porcentaje de contenido reportado o moderado.
- Tiempo requerido para que un artista complete un perfil básico.
- Porcentaje de usuarios que abandonan el proceso de creación de perfil.

Las métricas deben interpretarse con cuidado. Un alto volumen de publicaciones no necesariamente representa éxito si la información es incompleta, desordenada o poco útil para fines profesionales.

### 4.6 Indicadores clave de adopción

Los indicadores de adopción deben ayudar a entender si los usuarios encuentran valor suficiente para iniciar el uso de HABITTUS.

Indicadores clave de adopción para artistas y creativos:

- Registros iniciados por artistas o creativos.
- Registros completados.
- Perfiles profesionales creados.
- Perfiles que alcanzan el umbral mínimo de completitud.
- Primeras obras o proyectos cargados.
- Perfiles publicados, activados o compartidos.
- Usuarios que regresan después de crear el perfil inicial.
- Invitaciones, enlaces compartidos o tráfico referido hacia perfiles.

Indicadores clave de adopción para visitantes profesionales:

- Consultas de perfiles públicos.
- Uso de búsqueda o navegación por categorías, si está disponible.
- Visualización de portfolios completos.
- Consultas de información de contacto profesional.
- Retorno de visitantes para revisar nuevos perfiles.
- Interacciones con filtros o criterios de descubrimiento, si están disponibles.

Indicadores clave de adopción institucional o curatorial:

- Creación de cuentas institucionales, si este rol está habilitado.
- Consultas recurrentes de perfiles.
- Uso de criterios de selección o búsqueda profesional.
- Contactos iniciados hacia artistas.
- Solicitudes de información adicional o colaboración.

En etapas iniciales, la adopción debe evaluarse cualitativamente además de cuantitativamente. Es importante validar si los usuarios entienden el propósito de HABITTUS, si logran completar su perfil y si perciben valor profesional en mantenerlo actualizado.

### 4.7 Indicadores clave de retención

Los indicadores de retención deben medir si HABITTUS se convierte en una herramienta sostenida dentro de la práctica profesional del artista y en una fuente recurrente de consulta para visitantes profesionales.

Indicadores clave de retención para artistas:

- Porcentaje de artistas que regresan después de crear su perfil.
- Frecuencia de actualización de información profesional.
- Frecuencia de carga de nuevas obras, proyectos o registros.
- Edición de datos de trayectoria, contacto o disponibilidad.
- Mantenimiento de perfiles publicados durante el tiempo.
- Uso recurrente del enlace de perfil o portfolio como recurso profesional.
- Revisión o mejora de completitud del perfil.

Indicadores clave de retención para visitantes profesionales:

- Retorno a la plataforma para consultar nuevos perfiles.
- Repetición de búsquedas o exploraciones.
- Consulta recurrente de portfolios.
- Contactos profesionales repetidos, si la funcionalidad está disponible.
- Uso de filtros, categorías o mecanismos de descubrimiento en sesiones sucesivas.

Indicadores de retención relacionados con calidad:

- Disminución de perfiles incompletos luego del onboarding.
- Aumento de obras con datos contextuales completos.
- Reducción de contenido duplicado, irrelevante o mal clasificado.
- Estabilidad en la proporción de perfiles activos frente a perfiles abandonados.
- Mejora progresiva del nivel de completitud de los portfolios.

La retención de HABITTUS no debe medirse únicamente por uso diario. A diferencia de una red social, una plataforma profesional puede generar valor mediante consultas periódicas, actualizaciones puntuales y uso como referencia estable. Por lo tanto, las métricas deben contemplar ciclos de uso propios del trabajo artístico y profesional.

## 5. Alcance del MVP

### 5.1 Funcionalidades incluidas en el MVP

El MVP de HABITTUS debe enfocarse en validar la utilidad principal de la plataforma: permitir que artistas visuales y creativos construyan un perfil profesional estructurado y que visitantes profesionales puedan consultar esa información de forma clara.

Las funcionalidades incluidas en el MVP son:

#### Registro y acceso básico

- Creación de cuenta para artistas o creativos.
- Inicio de sesión para usuarios registrados.
- Gestión básica de sesión.
- Recuperación básica de acceso si el proveedor de autenticación elegido lo permite.

#### Perfil profesional del artista

- Creación de perfil profesional asociado a una cuenta de usuario.
- Edición de información básica del perfil.
- Nombre artístico o profesional.
- Biografía o descripción profesional.
- Disciplina o disciplinas principales.
- Ubicación general, cuando el usuario decida informarla.
- Información de contacto profesional configurable.
- Enlaces externos relevantes, como sitio web, redes profesionales o portfolio existente.

#### Portfolio básico

- Creación y edición de obras, piezas, proyectos o registros.
- Carga de imágenes principales asociadas a cada obra o proyecto.
- Organización básica del contenido publicado por el artista.
- Definición de título, año, técnica, materiales, descripción y estado de disponibilidad cuando corresponda.
- Asociación de obras o proyectos al perfil profesional.

#### Visualización pública o compartible

- Página o vista consultable del perfil profesional.
- Visualización ordenada de información del artista.
- Visualización del portfolio publicado.
- Acceso a información contextual de cada obra o proyecto.
- Posibilidad de compartir el perfil mediante un enlace estable, si la arquitectura inicial lo contempla.

#### Descubrimiento básico

- Listado o exploración básica de perfiles publicados.
- Consulta de perfiles por criterios mínimos disponibles.
- Uso inicial de disciplinas, categorías o etiquetas para facilitar navegación y comprensión.

#### Contacto profesional

- Presentación de canales de contacto definidos por el artista.
- Control del artista sobre qué información de contacto se muestra públicamente.
- Estructura básica para facilitar consultas profesionales sin exponer datos innecesarios.

#### Administración mínima

- Capacidad de revisar o gestionar usuarios y perfiles desde un rol administrativo básico.
- Capacidad de ocultar, desactivar o revisar contenido problemático si fuera necesario.
- Definición de criterios mínimos de completitud y publicación de perfil.

#### Base documental y técnica

- Estructura inicial del documento maestro como fuente de verdad.
- Modelo de datos inicial para usuarios, perfiles, obras, multimedia, categorías y contacto.
- Convenciones mínimas de desarrollo y documentación.
- Arquitectura preparada para evolucionar sin reescrituras innecesarias.

### 5.2 Funcionalidades excluidas del MVP

El MVP debe evitar funcionalidades que amplíen prematuramente el alcance, incrementen la complejidad técnica o desvíen el foco de la validación principal.

Quedan excluidas del MVP las siguientes funcionalidades:

- Feed social de publicaciones.
- Sistema de likes, seguidores o comentarios públicos como eje central de interacción.
- Mensajería interna completa entre usuarios.
- Marketplace transaccional de compra y venta de obras.
- Pagos, comisiones, suscripciones o planes premium.
- Sistema avanzado de convocatorias u oportunidades.
- Curaduría algorítmica o recomendaciones personalizadas complejas.
- Verificación formal de identidad profesional o certificaciones externas.
- Aplicaciones nativas avanzadas para múltiples plataformas si primero se valida mediante una implementación más simple.
- Analítica pública avanzada para artistas.
- Gestión compleja de inventario artístico.
- Contratos, facturación o documentación comercial.
- Subastas, reservas o negociación de precios dentro de la plataforma.
- Integraciones profundas con redes sociales externas.
- Traducción automática o internacionalización avanzada.
- Herramientas colaborativas complejas para instituciones o equipos curatoriales.

Estas exclusiones no significan que las funcionalidades sean incompatibles con HABITTUS. Significan que no deben formar parte del primer alcance validable del producto.

### 5.3 Criterios de aceptación del MVP

El MVP se considerará aceptable cuando permita validar la experiencia profesional básica de HABITTUS de extremo a extremo.

Criterios de aceptación funcional:

- Un artista puede crear una cuenta y acceder a la plataforma.
- Un artista puede crear y editar su perfil profesional.
- Un artista puede cargar al menos una obra, pieza, proyecto o registro visual con información contextual mínima.
- Un artista puede publicar o dejar consultable su perfil profesional.
- Un visitante puede acceder a un perfil publicado y comprender la información principal del artista.
- Un visitante puede consultar obras o proyectos asociados a un perfil.
- La información de contacto profesional se muestra según configuración del artista.
- El sistema permite distinguir entre contenido en edición y contenido publicado, si esa regla se define para el MVP.
- La plataforma mantiene consistencia básica de datos mediante validaciones mínimas.
- Un administrador puede intervenir ante contenido problemático o perfiles que incumplan criterios mínimos.

Criterios de aceptación de contenido:

- Los perfiles deben tener campos mínimos obligatorios definidos.
- Las obras o proyectos deben tener información suficiente para no funcionar únicamente como imágenes aisladas.
- Las disciplinas, categorías o etiquetas iniciales deben ayudar a describir la práctica artística sin imponer una clasificación rígida.

Criterios de aceptación técnica:

- La estructura del producto debe permitir agregar nuevas funcionalidades sin romper el modelo inicial.
- El almacenamiento de imágenes debe contemplar optimización, límites y recuperación eficiente.
- La autenticación y autorización deben proteger la edición de perfiles y obras.
- La información pública y privada debe estar diferenciada desde el diseño funcional.
- La base de datos debe permitir evolucionar hacia búsqueda, filtros y administración más avanzada.

### 5.4 Supuestos del MVP

El MVP parte de supuestos que deberán validarse con usuarios reales y revisión del equipo de producto.

Supuestos principales:

- Los artistas visuales y creativos necesitan una alternativa más estructurada que redes sociales o portfolios dispersos para presentar su práctica profesional.
- Los visitantes profesionales valoran encontrar perfiles con información clara, contexto de obra y canales de contacto confiables.
- La presentación profesional organizada genera valor incluso sin funcionalidades sociales avanzadas.
- Un perfil público o compartible puede funcionar como herramienta profesional recurrente para artistas.
- La carga inicial de obras o proyectos no debe ser excesivamente compleja para no frenar adopción.
- Las categorías y disciplinas ayudan al descubrimiento, siempre que no limiten prácticas híbridas o experimentales.
- La plataforma puede comenzar con un conjunto acotado de funcionalidades y evolucionar gradualmente.
- La validación del producto depende más de la calidad de los perfiles que del volumen inicial de usuarios.

Estos supuestos deben revisarse después de pruebas con usuarios, entrevistas, uso beta o métricas tempranas de adopción y retención.

### 5.5 Limitaciones iniciales

El MVP debe asumir limitaciones explícitas para proteger el foco del producto y evitar decisiones prematuras.

Limitaciones iniciales:

- El modelo de perfil será suficiente para una primera presentación profesional, pero no cubrirá todos los casos posibles de trayectoria artística.
- La organización de portfolios será básica y podrá evolucionar hacia series, colecciones o proyectos más complejos.
- La búsqueda inicial podrá ser limitada y depender de campos estructurados simples.
- La administración inicial será mínima y orientada a operación básica, no a flujos curatoriales avanzados.
- El sistema de contacto podrá limitarse a información visible o enlaces externos, sin mensajería interna completa.
- La plataforma no resolverá inicialmente venta, pagos, contratos ni logística de obras.
- La experiencia inicial podrá priorizar una plataforma responsive o una base móvil simple antes de invertir en capacidades nativas avanzadas.
- Las métricas iniciales estarán orientadas a validación de producto, no a analítica comercial avanzada.
- La taxonomía inicial de disciplinas y categorías deberá mantenerse flexible y revisable.

Estas limitaciones deben documentarse para evitar que sean interpretadas como fallas del producto. Representan decisiones deliberadas de alcance.

### 5.6 Dependencias externas

El MVP puede requerir servicios externos para resolver capacidades que no conviene construir desde cero en la etapa inicial.

Dependencias externas posibles:

- Servicio de autenticación.
- Base de datos gestionada o infraestructura de backend.
- Almacenamiento de imágenes y archivos multimedia.
- Servicio de optimización o entrega de imágenes, si corresponde.
- Servicio de email transaccional para recuperación de cuenta o notificaciones básicas.
- Hosting o infraestructura de despliegue.
- Servicio de monitoreo de errores.
- Herramienta de analítica de producto respetuosa de la privacidad.

La selección de dependencias externas debe responder a criterios de estabilidad, costo, escalabilidad, seguridad, portabilidad y velocidad de implementación.

El MVP debe evitar dependencias que generen bloqueo tecnológico innecesario o dificulten una migración futura. Siempre que sea posible, la arquitectura debe encapsular servicios externos detrás de interfaces o módulos específicos.

### 5.7 Riesgos específicos del MVP

El MVP presenta riesgos propios derivados de su alcance limitado y de la necesidad de validar una propuesta profesional en un ecosistema diverso.

#### Riesgo de perfil incompleto

Si los artistas no completan suficiente información, la plataforma puede percibirse como una galería vacía o poco profesional.

Mitigación: definir campos mínimos, guías de carga, indicadores de completitud y criterios claros para publicación.

#### Riesgo de carga inicial demasiado pesada

Si crear un perfil requiere demasiado esfuerzo, los usuarios pueden abandonar antes de percibir valor.

Mitigación: permitir carga progresiva, separar información obligatoria de información complementaria y reducir fricción inicial.

#### Riesgo de bajo valor para visitantes profesionales

Si los perfiles no ofrecen contexto suficiente, los visitantes no encontrarán valor diferencial frente a redes sociales o portfolios existentes.

Mitigación: asegurar que las obras y perfiles incluyan datos profesionales mínimos y estructura de consulta clara.

#### Riesgo de taxonomía insuficiente o restrictiva

Una clasificación pobre puede dificultar el descubrimiento, mientras que una taxonomía rígida puede representar mal prácticas artísticas diversas.

Mitigación: comenzar con categorías simples, permitir múltiples disciplinas y revisar la taxonomía con usuarios reales.

#### Riesgo de costos de almacenamiento multimedia

Las imágenes y archivos pueden generar costos crecientes incluso en una etapa temprana.

Mitigación: establecer límites de tamaño, optimización de imágenes, formatos permitidos y políticas de eliminación.

#### Riesgo de moderación insuficiente

Contenido inadecuado, duplicado o de baja calidad puede afectar la confianza en la plataforma.

Mitigación: incluir administración mínima, reportes básicos o mecanismos internos de revisión desde el MVP.

#### Riesgo de confusión de posicionamiento

Los usuarios pueden interpretar HABITTUS como una red social, marketplace o constructor de sitios si el alcance no está claramente expresado.

Mitigación: mantener comunicación funcional consistente y reforzar que el MVP se centra en perfil profesional, portfolio estructurado y descubrimiento.

## 6. Tipos de usuario y roles

### 6.1 Visitante no autenticado

El visitante no autenticado es cualquier persona que accede a secciones públicas de HABITTUS sin iniciar sesión. Este rol representa el punto de entrada más amplio a la plataforma y debe permitir una consulta limitada pero útil del contenido publicado.

Responsabilidades y capacidades permitidas:

- Consultar perfiles profesionales publicados.
- Visualizar información pública del artista o creativo.
- Consultar obras, piezas, proyectos o registros marcados como públicos.
- Acceder a información contextual visible de cada obra o proyecto.
- Navegar por listados, categorías o criterios básicos de descubrimiento, si están disponibles en el MVP.
- Acceder a enlaces externos públicos definidos por el artista.
- Consultar canales de contacto visibles, según configuración del perfil.

Restricciones principales:

- No puede crear ni editar perfiles.
- No puede cargar obras, proyectos ni archivos multimedia.
- No puede acceder a información privada o administrativa.
- No puede modificar datos de contacto ni disponibilidad.
- No puede realizar acciones administrativas.

Este rol debe facilitar el descubrimiento profesional sin comprometer el control del artista sobre su información.

### 6.2 Artista / creativo

El artista o creativo es el usuario principal de HABITTUS. Representa a la persona que utiliza la plataforma para construir, administrar y publicar su presencia profesional.

Capacidades principales:

- Crear y administrar una cuenta propia.
- Crear, editar y mantener un perfil profesional.
- Definir nombre artístico o profesional, biografía, disciplinas, ubicación general y enlaces relevantes.
- Cargar, editar y organizar obras, piezas, proyectos o registros visuales.
- Asociar información contextual a cada obra o proyecto.
- Definir qué contenido se mantiene en edición y qué contenido se publica.
- Configurar información de contacto profesional visible.
- Actualizar trayectoria, disponibilidad o datos relevantes del perfil.
- Eliminar, ocultar o archivar contenido propio, según las reglas definidas para la plataforma.

Responsabilidades del rol:

- Mantener información profesional clara y actualizada.
- Publicar contenido sobre el cual posee derechos, autorización o legitimidad de uso.
- Respetar las reglas de contenido, propiedad intelectual y convivencia profesional.
- Utilizar categorías, disciplinas o etiquetas de manera representativa.

Restricciones principales:

- No puede modificar perfiles, obras o datos de otros usuarios.
- No puede acceder a datos privados de otros artistas.
- No puede ejecutar acciones administrativas de moderación o suspensión.
- No puede alterar métricas, taxonomías globales o configuración de plataforma.

El diseño funcional debe priorizar que este rol pueda construir valor progresivamente, sin exigir una carga inicial excesiva.

### 6.3 Curador / galerista / comprador

El rol de curador, galerista o comprador representa a usuarios que consultan HABITTUS con intención profesional. Este rol puede ser autenticado o no autenticado según la etapa del producto, pero funcionalmente se diferencia por su necesidad de descubrir, evaluar y contactar artistas.

Necesidades principales:

- Encontrar artistas o creativos según criterios relevantes.
- Consultar perfiles profesionales con información clara.
- Revisar portfolios, obras, proyectos o registros visuales.
- Comprender disciplinas, técnicas, materiales, trayectoria y disponibilidad.
- Acceder a canales de contacto profesional definidos por el artista.
- Evaluar perfiles para exhibiciones, compras, colaboraciones, encargos, convocatorias o investigación.

Capacidades posibles en el MVP:

- Navegar perfiles publicados.
- Consultar información pública de obras y proyectos.
- Usar criterios básicos de búsqueda o filtrado, si están disponibles.
- Acceder a enlaces o datos de contacto visibles.

Capacidades futuras posibles:

- Guardar perfiles o obras de interés.
- Crear listas privadas de investigación o selección.
- Contactar artistas mediante un flujo interno.
- Acceder a herramientas curatoriales o institucionales.
- Gestionar convocatorias, invitaciones o solicitudes profesionales.

Restricciones principales:

- No puede editar contenido de artistas.
- No puede acceder a información privada no publicada.
- No puede usar datos de contacto fuera de los términos definidos por la plataforma.
- No puede realizar acciones administrativas salvo que también posea un rol autorizado.

Este rol debe ser considerado en el diseño del descubrimiento, la estructura de perfiles y la claridad de información profesional.

### 6.4 Administrador de plataforma

El administrador de plataforma es el rol encargado de operar, supervisar y mantener la integridad funcional de HABITTUS.

Capacidades principales:

- Gestionar usuarios y perfiles dentro de límites definidos.
- Revisar contenido reportado o potencialmente problemático.
- Ocultar, desactivar o restaurar contenido según reglas de moderación.
- Gestionar categorías, disciplinas, etiquetas o taxonomías globales si la plataforma lo requiere.
- Revisar perfiles incompletos, duplicados o que incumplan criterios mínimos.
- Acceder a métricas operativas necesarias para administración y calidad.
- Supervisar el cumplimiento de reglas de contenido, privacidad y propiedad intelectual.

Responsabilidades del rol:

- Mantener un entorno confiable para artistas y visitantes profesionales.
- Aplicar criterios de moderación de forma consistente.
- Proteger la calidad del contenido publicado.
- Evitar intervenciones arbitrarias o no documentadas.
- Respetar la privacidad y los permisos asociados a cada usuario.

Restricciones principales:

- No debe modificar contenido artístico sin causa justificada y trazable.
- No debe acceder a información sensible que no sea necesaria para operación o soporte.
- No debe utilizar datos de usuarios para fines ajenos a la administración de la plataforma.
- Sus acciones relevantes deben poder auditarse.

El rol administrador debe existir desde una etapa temprana, aunque sus herramientas iniciales sean mínimas, para evitar que la operación dependa de intervenciones manuales no estructuradas.

### 6.5 Roles futuros posibles

HABITTUS debe permitir una evolución progresiva de roles sin comprometer la simplicidad del MVP.

Roles futuros posibles:

#### Usuario institucional

Representa museos, galerías, residencias, ferias, fundaciones, universidades, colectivos o instituciones culturales que interactúan profesionalmente con artistas.

Capacidades futuras posibles:

- Crear un perfil institucional.
- Publicar oportunidades, convocatorias o programas.
- Contactar artistas de forma estructurada.
- Crear listas internas de perfiles relevantes.

#### Curador avanzado

Representa profesionales que requieren herramientas de investigación, selección, comparación o armado de conjuntos de artistas.

Capacidades futuras posibles:

- Guardar perfiles.
- Crear colecciones privadas de investigación.
- Asociar notas internas.
- Compartir selecciones con equipos o instituciones.

#### Colaborador profesional

Representa productores, gestores culturales, editores, diseñadores, arquitectos, escenógrafos u otros actores que pueden requerir contacto con artistas para proyectos específicos.

Capacidades futuras posibles:

- Consultar disponibilidad profesional.
- Enviar solicitudes estructuradas.
- Buscar artistas por disciplina, ubicación o tipo de proyecto.

#### Moderador

Representa un rol operativo más limitado que el administrador general.

Capacidades futuras posibles:

- Revisar reportes.
- Ocultar contenido temporalmente.
- Escalar casos complejos a administración.

#### Usuario premium o profesional avanzado

Representa una posible evolución comercial, no incluida en el MVP.

Capacidades futuras posibles:

- Acceder a mayor capacidad de portfolio.
- Personalizar más secciones del perfil.
- Acceder a métricas privadas.
- Usar herramientas avanzadas de presentación profesional.

Estos roles futuros deben documentarse como posibilidades estratégicas, no como requisitos obligatorios del MVP.

### 6.6 Permisos por rol

Los permisos deben organizarse bajo el principio de mínimo privilegio: cada usuario solo debe acceder a las acciones e información necesarias para cumplir su función dentro de la plataforma.

Permisos iniciales sugeridos:

| Acción | Visitante no autenticado | Artista / creativo | Curador / galerista / comprador | Administrador |
| --- | --- | --- | --- | --- |
| Ver perfiles publicados | Sí | Sí | Sí | Sí |
| Ver obras o proyectos públicos | Sí | Sí | Sí | Sí |
| Crear cuenta | Sí | Sí | Sí, si se habilita | No aplica |
| Crear perfil artístico | No | Sí | No, salvo rol mixto | Sí, en tareas administrativas |
| Editar perfil propio | No | Sí | No | Sí, con restricciones y trazabilidad |
| Cargar obras propias | No | Sí | No | Sí, con restricciones y trazabilidad |
| Editar obras propias | No | Sí | No | Sí, con restricciones y trazabilidad |
| Ver información privada de perfil | No | Solo propia | No | Solo si es necesario para operación |
| Configurar contacto propio | No | Sí | No | Sí, con restricciones y trazabilidad |
| Reportar contenido | Opcional | Opcional | Opcional | No aplica |
| Moderar contenido | No | No | No | Sí |
| Gestionar taxonomías globales | No | No | No | Sí |
| Gestionar usuarios | No | No | No | Sí |
| Acceder a métricas administrativas | No | No | No | Sí |

El sistema debe permitir que un usuario tenga más de un rol si la evolución del producto lo requiere. Por ejemplo, una persona puede ser artista y también actuar como curador o comprador. Esta capacidad debe contemplarse a nivel de modelo de permisos, aunque no necesariamente se implemente en el MVP.

### 6.7 Restricciones de acceso

Las restricciones de acceso deben proteger la información del usuario, la integridad del contenido artístico y la operación de la plataforma.

Restricciones generales:

- Solo el propietario de un perfil puede editar su información, salvo intervención administrativa justificada.
- Solo el propietario de una obra o proyecto puede editar, ocultar o eliminar ese contenido, salvo intervención administrativa justificada.
- La información privada no debe estar disponible para visitantes ni para otros usuarios sin autorización.
- La información de contacto debe mostrarse únicamente según la configuración definida por el artista.
- Los perfiles no publicados o incompletos no deben exponerse públicamente salvo regla explícita.
- Las acciones administrativas sensibles deben quedar registradas para auditoría.
- Los roles administrativos deben estar protegidos por controles de acceso estrictos.
- Los archivos multimedia deben respetar reglas de visibilidad, propiedad y eliminación.
- Los visitantes no autenticados no deben poder ejecutar acciones que modifiquen datos persistentes, excepto flujos explícitos como reportes si se habilitan.
- Las futuras funcionalidades transaccionales, institucionales o curatoriales deberán agregar permisos específicos antes de implementarse.

El modelo de acceso debe ser suficientemente simple para el MVP, pero preparado para crecer hacia roles más complejos sin romper las reglas básicas de propiedad, privacidad y control.

## 7. Casos de uso principales

### 7.1 Registro e inicio de sesión

El caso de uso de registro e inicio de sesión permite que un usuario acceda a funcionalidades que requieren identidad persistente dentro de HABITTUS.

Actores principales:

- Artista o creativo.
- Administrador de plataforma.
- Usuario profesional autenticado, si este rol se habilita.

Objetivos del caso de uso:

- Crear una cuenta de usuario.
- Iniciar sesión de forma segura.
- Mantener una sesión activa según las reglas técnicas definidas.
- Proteger funcionalidades de edición, administración y gestión de contenido.

Flujo funcional esperado:

1. El usuario accede al flujo de registro o inicio de sesión.
2. El sistema solicita las credenciales o el proveedor de autenticación definido.
3. El usuario completa la información requerida.
4. El sistema valida identidad, credenciales y estado de la cuenta.
5. El sistema permite acceder a las funcionalidades correspondientes al rol asignado.

Reglas funcionales:

- La creación y edición de perfiles profesionales debe requerir autenticación.
- La edición de obras, proyectos o datos de contacto debe estar disponible solo para el propietario o roles administrativos autorizados.
- La plataforma debe diferenciar usuarios autenticados, visitantes no autenticados y roles administrativos.
- El acceso administrativo debe tener controles más estrictos que el acceso estándar.

Resultado esperado:

El usuario queda identificado dentro de HABITTUS y puede acceder a las capacidades correspondientes a su rol.

### 7.2 Creación de perfil profesional

La creación de perfil profesional es uno de los casos de uso centrales de HABITTUS. Permite que un artista o creativo construya una presencia estructurada dentro de la plataforma.

Actor principal:

- Artista o creativo.

Objetivos del caso de uso:

- Crear un perfil asociado a una cuenta de usuario.
- Registrar información básica y profesional del artista.
- Establecer una base para publicar obras, proyectos o registros.
- Preparar el perfil para visualización pública o compartible.

Información funcional mínima:

- Nombre profesional o artístico.
- Descripción, biografía o statement breve.
- Disciplina o disciplinas principales.
- Ubicación general, si corresponde.
- Información de contacto profesional configurable.
- Enlaces externos relevantes.

Flujo funcional esperado:

1. El artista autenticado inicia la creación de perfil.
2. El sistema presenta los campos requeridos y opcionales definidos para el MVP.
3. El artista completa la información inicial.
4. El sistema valida datos obligatorios, formato y consistencia.
5. El sistema guarda el perfil en estado editable.
6. El artista puede continuar completando información o preparar el perfil para publicación.

Reglas funcionales:

- Una cuenta de artista debe tener al menos un perfil profesional principal, salvo que se defina soporte para múltiples perfiles en una etapa futura.
- El perfil no debe publicarse si no cumple criterios mínimos de completitud.
- La información privada y pública debe diferenciarse desde el modelo funcional.
- El artista debe poder editar el perfil después de su creación.

Resultado esperado:

El artista cuenta con un perfil profesional base sobre el cual puede organizar su obra, trayectoria y datos de contacto.

### 7.3 Gestión de portfolio

La gestión de portfolio permite que el artista organice y mantenga el conjunto de obras, piezas, proyectos o registros que representan su práctica profesional.

Actor principal:

- Artista o creativo.

Objetivos del caso de uso:

- Cargar contenido artístico o creativo.
- Asociar información contextual a cada elemento del portfolio.
- Organizar obras o proyectos dentro del perfil profesional.
- Mantener actualizado el contenido visible para visitantes profesionales.

Elementos gestionables:

- Obras individuales.
- Piezas materiales.
- Series o conjuntos simples, si el MVP lo contempla.
- Proyectos visuales o interdisciplinarios.
- Registros documentales de performance, instalación o proceso.

Información contextual sugerida:

- Título.
- Año.
- Técnica.
- Materiales.
- Dimensiones o duración, cuando corresponda.
- Descripción.
- Estado de disponibilidad, si corresponde.
- Imágenes o archivos visuales asociados.

Flujo funcional esperado:

1. El artista accede a la gestión de portfolio desde su perfil.
2. El sistema permite crear un nuevo elemento de portfolio.
3. El artista carga información textual y material visual.
4. El sistema valida campos requeridos, formatos y límites de archivos.
5. El artista guarda el elemento en estado editable o publicado según las reglas definidas.
6. El contenido queda asociado al perfil profesional.

Reglas funcionales:

- Solo el propietario del perfil puede crear o editar su portfolio.
- Cada obra o proyecto debe tener información mínima para evitar funcionar como imagen aislada.
- Los archivos multimedia deben respetar límites técnicos y reglas de uso.
- El artista debe poder ocultar, editar o eliminar contenido propio según las reglas de la plataforma.

Resultado esperado:

El artista mantiene un portfolio estructurado, contextualizado y consultable por visitantes profesionales.

### 7.4 Publicación de obras o proyectos

La publicación de obras o proyectos define el paso mediante el cual el contenido cargado por el artista se vuelve visible para visitantes según las reglas de visibilidad de HABITTUS.

Actor principal:

- Artista o creativo.

Actores secundarios:

- Visitante no autenticado.
- Curador, galerista o comprador.
- Administrador de plataforma.

Objetivos del caso de uso:

- Controlar qué contenido del portfolio se muestra públicamente.
- Diferenciar contenido en edición de contenido publicado.
- Asegurar que el contenido publicado cumpla criterios mínimos.
- Permitir que visitantes consulten obra con contexto suficiente.

Flujo funcional esperado:

1. El artista crea o edita una obra, pieza, proyecto o registro.
2. El sistema valida información mínima requerida.
3. El artista define el estado de visibilidad correspondiente.
4. El sistema publica el contenido si cumple las reglas definidas.
5. El contenido queda disponible en el perfil público o compartible.

Estados posibles:

- Borrador.
- Publicado.
- Oculto.
- Archivado.
- En revisión, si la plataforma incorpora moderación previa.

Reglas funcionales:

- El contenido no debe publicarse si incumple campos mínimos definidos.
- El artista debe mantener control sobre la visibilidad de su obra.
- El administrador puede ocultar o desactivar contenido en casos justificados.
- La publicación de contenido debe respetar reglas de propiedad intelectual y uso permitido.

Resultado esperado:

Las obras o proyectos seleccionados por el artista quedan disponibles para consulta profesional en la plataforma.

### 7.5 Descubrimiento de artistas

El descubrimiento de artistas permite que visitantes profesionales encuentren perfiles relevantes dentro de HABITTUS.

Actores principales:

- Visitante no autenticado.
- Curador, galerista o comprador.
- Usuario institucional, si se habilita en una etapa futura.

Objetivos del caso de uso:

- Facilitar la exploración de perfiles publicados.
- Permitir consultas por criterios relevantes para el ecosistema artístico.
- Mejorar la conexión entre artistas y oportunidades profesionales.
- Evitar que la visibilidad dependa únicamente de popularidad o actividad frecuente.

Criterios iniciales posibles:

- Disciplina.
- Categoría artística.
- Técnica o material.
- Ubicación general.
- Tipo de obra o proyecto.
- Disponibilidad profesional, si el artista la informa.

Flujo funcional esperado:

1. El visitante accede a una sección de exploración o listado.
2. El sistema muestra perfiles publicados y consultables.
3. El visitante aplica criterios básicos de navegación o búsqueda, si están disponibles.
4. El sistema presenta resultados relevantes según la información estructurada.
5. El visitante accede al perfil de un artista para consultar información ampliada.

Reglas funcionales:

- Solo deben aparecer perfiles publicados o habilitados para consulta.
- La búsqueda no debe exponer información privada.
- Los criterios de descubrimiento deben respetar prácticas artísticas diversas.
- La relevancia debe priorizar información útil, completitud y pertinencia antes que métricas sociales superficiales.

Resultado esperado:

El visitante encuentra artistas y perfiles profesionales adecuados para investigación, contacto, compra, curaduría, colaboración o difusión.

### 7.6 Búsqueda y filtrado

La búsqueda y filtrado permiten refinar el descubrimiento de perfiles, obras o proyectos mediante criterios estructurados.

Actores principales:

- Visitante no autenticado.
- Curador, galerista o comprador.
- Artista o creativo.
- Administrador de plataforma.

Objetivos del caso de uso:

- Permitir consultas más precisas dentro del contenido publicado.
- Facilitar la identificación de artistas según criterios profesionales.
- Mejorar la navegabilidad del ecosistema de perfiles y obras.
- Sentar bases para búsqueda avanzada futura.

Criterios funcionales iniciales:

- Texto libre en campos públicos relevantes.
- Disciplina o categoría.
- Técnica o material.
- Ubicación general.
- Tipo de contenido.
- Estado de disponibilidad, si se habilita.

Flujo funcional esperado:

1. El usuario ingresa una consulta o selecciona filtros disponibles.
2. El sistema procesa la búsqueda sobre contenido público.
3. El sistema devuelve resultados ordenados según criterios definidos.
4. El usuario puede acceder a perfiles u obras desde los resultados.
5. El usuario puede ajustar o limpiar filtros.

Reglas funcionales:

- La búsqueda del MVP puede ser simple, pero debe ser consistente y predecible.
- Los filtros deben basarse en datos estructurados confiables.
- La búsqueda no debe incluir información privada ni contenido no publicado.
- La taxonomía debe ser revisable para evitar categorías rígidas o insuficientes.

Resultado esperado:

El usuario puede reducir el universo de perfiles u obras a un conjunto más relevante para su intención profesional.

### 7.7 Contacto profesional

El contacto profesional permite que un visitante interesado identifique canales adecuados para comunicarse con un artista o creativo.

Actores principales:

- Artista o creativo.
- Visitante profesional.
- Curador, galerista o comprador.

Objetivos del caso de uso:

- Facilitar el contacto profesional sin exponer datos innecesarios.
- Permitir que el artista controle qué información de contacto muestra.
- Separar el contacto profesional de interacciones sociales informales.
- Preparar una base para futuros flujos internos de solicitud o mensajería.

Modalidades iniciales posibles:

- Email profesional visible.
- Enlace a sitio web.
- Enlace a red profesional o canal externo.
- Texto de instrucciones para contacto.

Flujo funcional esperado:

1. El artista configura sus canales de contacto visibles.
2. El sistema valida formato y visibilidad de la información.
3. El visitante consulta el perfil del artista.
4. El visitante accede a los canales de contacto publicados.
5. El contacto ocurre por el medio definido por el artista o por un flujo interno futuro si se habilita.

Reglas funcionales:

- El artista debe controlar qué datos de contacto son públicos.
- La plataforma no debe exponer información privada por defecto.
- Los canales de contacto deben estar asociados al perfil profesional.
- Si en el futuro se implementa mensajería interna, deberá contar con permisos, moderación y protección contra abuso.

Resultado esperado:

El visitante cuenta con una vía clara y profesional para contactar al artista, respetando el control del usuario sobre su información.

### 7.8 Gestión de disponibilidad o encargos

La gestión de disponibilidad o encargos permite que el artista indique, de forma básica, si está abierto a oportunidades profesionales específicas.

Actor principal:

- Artista o creativo.

Actores secundarios:

- Curador, galerista o comprador.
- Visitante profesional.
- Usuario institucional futuro.

Objetivos del caso de uso:

- Comunicar disponibilidad profesional de manera clara.
- Diferenciar tipos de oportunidades que el artista acepta o desea recibir.
- Evitar consultas incompatibles con la práctica o intereses del artista.
- Preparar una base para futuros flujos de encargos, convocatorias o solicitudes estructuradas.

Tipos de disponibilidad posibles:

- Disponible para exhibiciones.
- Disponible para venta directa, si corresponde.
- Disponible para encargos.
- Disponible para colaboraciones.
- Disponible para prensa o entrevistas.
- No disponible temporalmente.

Flujo funcional esperado:

1. El artista accede a la configuración de disponibilidad profesional.
2. El sistema presenta opciones simples y editables.
3. El artista define qué tipos de oportunidades desea comunicar.
4. El sistema muestra esa información en el perfil, si el artista decide hacerla pública.
5. El visitante utiliza esa información para orientar su contacto.

Reglas funcionales:

- La disponibilidad debe ser opcional.
- La información debe poder actualizarse en cualquier momento.
- La disponibilidad no debe interpretarse como compromiso contractual.
- Las opciones iniciales deben ser simples y no reemplazar contratos, pagos ni negociación comercial.

Resultado esperado:

El perfil profesional comunica de forma clara qué tipos de oportunidades o contactos son pertinentes para el artista.

### 7.9 Administración de contenido

La administración de contenido permite mantener la calidad, seguridad y coherencia profesional de HABITTUS.

Actor principal:

- Administrador de plataforma.

Objetivos del caso de uso:

- Supervisar perfiles, obras y proyectos publicados.
- Intervenir ante contenido problemático, incompleto, duplicado o inapropiado.
- Mantener criterios mínimos de calidad y confianza.
- Proteger a artistas, visitantes y a la plataforma frente a usos indebidos.

Capacidades iniciales posibles:

- Consultar perfiles registrados.
- Revisar contenido publicado.
- Ocultar o desactivar contenido problemático.
- Gestionar reportes si el flujo está habilitado.
- Revisar categorías, disciplinas o etiquetas utilizadas.
- Identificar perfiles incompletos o duplicados.

Flujo funcional esperado:

1. El administrador accede a herramientas de administración protegidas.
2. El sistema muestra información operativa según permisos.
3. El administrador revisa el caso correspondiente.
4. El administrador ejecuta una acción permitida.
5. El sistema registra la acción para trazabilidad si corresponde.

Reglas funcionales:

- Las acciones administrativas deben estar restringidas a roles autorizados.
- Las acciones sensibles deben ser trazables.
- La administración no debe invadir contenido privado sin necesidad operativa justificada.
- La moderación debe seguir reglas documentadas y consistentes.

Resultado esperado:

La plataforma mantiene un entorno profesional, confiable y alineado con sus reglas de contenido y calidad.

### 7.10 Casos de uso futuros

Los casos de uso futuros representan líneas de evolución posibles que no forman parte obligatoria del MVP.

Casos de uso futuros posibles:

#### Convocatorias y oportunidades

Permitir que instituciones, galerías o agentes profesionales publiquen oportunidades para artistas, con criterios de aplicación y contacto estructurados.

#### Listas curatoriales o colecciones privadas

Permitir que curadores, galeristas o compradores guarden perfiles u obras para investigación, selección o seguimiento.

#### Mensajería o solicitudes internas

Permitir contacto dentro de la plataforma mediante flujos protegidos, con permisos, controles antiabuso y trazabilidad.

#### Perfil institucional

Permitir que organizaciones culturales creen presencia propia, publiquen información institucional y se vinculen con artistas.

#### Herramientas avanzadas de portfolio

Permitir series, colecciones, ordenamiento personalizado avanzado, archivos adicionales, videos, documentos técnicos o variaciones de presentación.

#### Monetización o planes profesionales

Evaluar funcionalidades premium, límites ampliados, herramientas profesionales avanzadas o servicios pagos, siempre que no comprometan la calidad ni el posicionamiento de la plataforma.

#### Venta o gestión comercial

Explorar venta, disponibilidad comercial, reservas, encargos o solicitudes de adquisición solo si existe validación suficiente y reglas claras de operación.

#### Analítica privada para artistas

Permitir que el artista consulte métricas privadas sobre visitas, interacciones o consultas, evitando dinámicas de presión social o competencia superficial.

Estos casos de uso deben permanecer documentados como posibilidades futuras. No deben implementarse antes de validar el núcleo profesional de HABITTUS.

## 8. Flujos funcionales principales

### 8.1 Onboarding de artista

El onboarding de artista debe guiar al usuario desde la creación de cuenta hasta la configuración inicial de su presencia profesional. Su objetivo no es completar toda la información posible, sino reducir la fricción inicial y ayudar al artista a alcanzar un perfil publicable.

Flujo secuencial:

1. El artista accede a HABITTUS e inicia el registro o inicio de sesión.
2. El sistema valida la identidad del usuario y crea una sesión activa.
3. El sistema identifica que el usuario no tiene un perfil profesional configurado.
4. El sistema solicita la información mínima necesaria para iniciar el perfil.
5. El artista completa nombre profesional o artístico, disciplina principal y una descripción inicial.
6. El sistema permite agregar información complementaria, pero no debe bloquear el avance por campos no esenciales.
7. El artista define si desea cargar una primera obra, pieza, proyecto o registro.
8. El sistema informa el nivel de completitud inicial del perfil, si esta capacidad está disponible.
9. El artista guarda el perfil en estado editable o avanza hacia publicación si cumple criterios mínimos.

Resultado esperado:

El artista finaliza el onboarding con un perfil profesional inicial creado, editable y preparado para incorporar portfolio o información adicional.

Reglas de negocio asociadas:

- El onboarding debe priorizar claridad y progresividad.
- El artista debe poder guardar avances sin completar todo el perfil.
- La publicación del perfil debe depender de criterios mínimos de completitud.
- El sistema debe evitar formularios excesivamente largos en la primera interacción.

### 8.2 Creación y edición de perfil

El flujo de creación y edición de perfil permite mantener actualizada la identidad profesional del artista dentro de HABITTUS.

Flujo secuencial de creación:

1. El artista autenticado accede a la sección de perfil profesional.
2. El sistema verifica si ya existe un perfil asociado a la cuenta.
3. Si no existe, el sistema habilita la creación de un nuevo perfil.
4. El artista completa los campos requeridos y opcionales definidos para el MVP.
5. El sistema valida datos obligatorios, formato y consistencia.
6. El sistema guarda el perfil en estado editable.
7. El artista puede revisar la información antes de publicarla.
8. El sistema permite publicar el perfil si cumple criterios mínimos.

Flujo secuencial de edición:

1. El artista accede a su perfil existente.
2. El sistema verifica permisos de edición sobre el perfil.
3. El artista modifica campos profesionales, enlaces, contacto, disciplinas o información descriptiva.
4. El sistema valida los cambios.
5. El artista guarda la nueva versión.
6. El sistema actualiza la información visible si el perfil está publicado.

Resultado esperado:

El artista puede crear, mantener y actualizar su perfil profesional sin intervención administrativa.

Reglas de negocio asociadas:

- Solo el propietario del perfil puede editarlo, salvo intervención administrativa justificada.
- Los cambios deben respetar validaciones de formato y campos requeridos.
- La información pública y privada debe mantenerse diferenciada.
- Un perfil publicado que deja de cumplir criterios mínimos puede requerir revisión o quedar limitado, según reglas futuras.

### 8.3 Carga de obra

El flujo de carga de obra permite al artista incorporar contenido visual o documental a su portfolio profesional.

Flujo secuencial:

1. El artista autenticado accede a la gestión de portfolio.
2. El sistema verifica que el usuario tenga permisos sobre el perfil seleccionado.
3. El artista inicia la creación de una nueva obra, pieza, proyecto o registro.
4. El sistema solicita información mínima del elemento.
5. El artista carga una o más imágenes o archivos visuales permitidos.
6. El sistema valida formato, tamaño y requisitos técnicos del archivo.
7. El artista completa información contextual como título, año, técnica, materiales, dimensiones, duración o descripción, según corresponda.
8. El sistema valida la información requerida.
9. El artista guarda el elemento como borrador, oculto o publicado, según reglas disponibles.
10. El sistema asocia el contenido al perfil profesional.

Resultado esperado:

La obra, pieza, proyecto o registro queda incorporado al portfolio del artista con información contextual suficiente.

Reglas de negocio asociadas:

- Cada elemento del portfolio debe pertenecer a un perfil profesional.
- El sistema debe evitar la publicación de contenido sin información mínima.
- Los archivos multimedia deben respetar límites técnicos y políticas de uso.
- La carga de obra no debe exigir campos que no apliquen al tipo de práctica artística.

### 8.4 Visualización de portfolio

El flujo de visualización de portfolio describe cómo un visitante consulta obras, proyectos o registros publicados por un artista.

Flujo secuencial:

1. El visitante accede a un perfil profesional publicado.
2. El sistema muestra información pública del artista y su portfolio visible.
3. El visitante selecciona una obra, pieza, proyecto o registro.
4. El sistema presenta la información visual disponible.
5. El sistema muestra datos contextuales asociados, como título, año, técnica, materiales, dimensiones, descripción o disponibilidad, según corresponda.
6. El visitante puede volver al perfil o continuar explorando otros contenidos publicados.
7. Si el artista configuró canales de contacto, el visitante puede acceder a ellos desde el perfil o desde el contexto de la obra, si la plataforma lo permite.

Resultado esperado:

El visitante comprende la obra dentro del contexto profesional del artista y puede evaluar su relevancia para una interacción profesional.

Reglas de negocio asociadas:

- Solo debe mostrarse contenido publicado o habilitado para consulta.
- El portfolio debe preservar la relación entre obra, contexto y autoría.
- La visualización no debe exponer información privada o administrativa.
- La experiencia debe priorizar claridad y consulta profesional, no consumo rápido sin contexto.

### 8.5 Exploración pública de artistas

El flujo de exploración pública permite que visitantes descubran perfiles profesionales publicados dentro de HABITTUS.

Flujo secuencial:

1. El visitante accede a la sección pública de exploración.
2. El sistema muestra perfiles publicados disponibles para consulta.
3. El visitante navega perfiles destacados, recientes, categorizados o listados según los criterios definidos.
4. El visitante puede aplicar filtros básicos si están disponibles.
5. El sistema actualiza los resultados según criterios públicos y datos estructurados.
6. El visitante selecciona un perfil para consultar información ampliada.
7. El sistema muestra el perfil profesional y el portfolio asociado.

Resultado esperado:

El visitante puede descubrir artistas o creativos relevantes sin necesidad de conocer previamente su nombre o enlace directo.

Reglas de negocio asociadas:

- La exploración pública debe incluir únicamente perfiles publicados.
- Los criterios de ordenamiento deben ser consistentes y documentables.
- La plataforma debe evitar depender exclusivamente de popularidad o volumen de interacción.
- La exploración debe respetar diversidad de disciplinas y prácticas artísticas.

### 8.6 Contacto o solicitud profesional

El flujo de contacto o solicitud profesional permite que un visitante interesado acceda a canales adecuados para comunicarse con un artista.

Flujo secuencial inicial:

1. El visitante consulta el perfil profesional de un artista.
2. El sistema verifica qué información de contacto fue configurada como visible.
3. El sistema muestra los canales disponibles o las instrucciones de contacto definidas por el artista.
4. El visitante utiliza el canal indicado para iniciar la comunicación.
5. El contacto ocurre fuera de la plataforma o mediante un mecanismo interno futuro si se habilita.

Flujo secuencial futuro, si se implementa solicitud interna:

1. El visitante autenticado inicia una solicitud desde el perfil del artista.
2. El sistema solicita tipo de consulta, mensaje y datos mínimos de contacto.
3. El sistema valida contenido, permisos y límites antiabuso.
4. El sistema envía o registra la solicitud para el artista.
5. El artista recibe la solicitud y decide responder, ignorar o reportar.

Resultado esperado:

El visitante cuenta con un camino claro para iniciar contacto profesional, y el artista mantiene control sobre sus datos y disponibilidad.

Reglas de negocio asociadas:

- La información de contacto debe ser configurable por el artista.
- La plataforma no debe exponer datos privados por defecto.
- Un flujo interno de solicitud debe incluir medidas contra abuso, spam o uso indebido.
- La disponibilidad informada por el artista no constituye obligación contractual.

### 8.7 Moderación de contenido

El flujo de moderación de contenido permite intervenir ante contenido que incumpla reglas de calidad, seguridad, propiedad intelectual o uso adecuado de la plataforma.

Flujo secuencial:

1. El contenido es detectado por revisión administrativa, reporte de usuario o mecanismo interno.
2. El sistema registra el elemento, perfil o cuenta involucrada.
3. El administrador accede al caso desde una herramienta protegida.
4. El administrador revisa la información disponible y la regla potencialmente incumplida.
5. El administrador decide una acción permitida: mantener, ocultar, desactivar, solicitar corrección o escalar el caso.
6. El sistema aplica la acción seleccionada.
7. El sistema registra la intervención para trazabilidad.
8. Si corresponde, el artista recibe una notificación o aviso sobre el estado del contenido.

Resultado esperado:

La plataforma mantiene estándares mínimos de calidad, confianza y seguridad sin afectar arbitrariamente la representación profesional del artista.

Reglas de negocio asociadas:

- Las acciones de moderación deben estar restringidas a roles autorizados.
- Las intervenciones sensibles deben ser trazables.
- La moderación debe basarse en reglas documentadas.
- El sistema debe diferenciar contenido problemático de contenido incompleto o pendiente de mejora.

### 8.8 Recuperación de cuenta

El flujo de recuperación de cuenta permite que un usuario recupere acceso cuando no puede iniciar sesión por pérdida de credenciales u otro problema previsto por el sistema de autenticación.

Flujo secuencial:

1. El usuario indica que no puede acceder a su cuenta.
2. El sistema solicita el dato identificador definido, como email u otro mecanismo permitido.
3. El sistema verifica si existe una cuenta asociada sin revelar información innecesaria.
4. El sistema envía instrucciones de recuperación mediante el canal configurado.
5. El usuario completa el proceso de recuperación.
6. El sistema valida el token, código o mecanismo de seguridad correspondiente.
7. El usuario restablece el acceso según las reglas del proveedor o sistema elegido.
8. El sistema permite iniciar sesión nuevamente.

Resultado esperado:

El usuario recupera el acceso a su cuenta sin comprometer la seguridad de perfiles, obras o datos asociados.

Reglas de negocio asociadas:

- El flujo no debe revelar públicamente si una cuenta existe cuando esto genere riesgo de privacidad.
- Los mecanismos de recuperación deben tener expiración y controles de seguridad.
- La recuperación de cuenta no debe permitir modificar contenido sin autenticación válida.
- Los casos administrativos excepcionales deben registrarse y verificarse manualmente.

### 8.9 Eliminación o desactivación de cuenta

El flujo de eliminación o desactivación de cuenta permite que un usuario deje de utilizar HABITTUS y controle el destino de su información dentro de la plataforma.

Flujo secuencial de desactivación:

1. El usuario autenticado accede a la configuración de cuenta.
2. El sistema informa las consecuencias de desactivar la cuenta.
3. El usuario confirma la acción.
4. El sistema desactiva el acceso público al perfil si corresponde.
5. El sistema conserva la información según reglas de recuperación, auditoría o políticas vigentes.
6. El usuario recibe confirmación de la desactivación.

Flujo secuencial de eliminación:

1. El usuario autenticado solicita eliminar su cuenta.
2. El sistema informa el alcance de la eliminación sobre perfil, obras, archivos, contacto y datos asociados.
3. El sistema solicita confirmación explícita.
4. El sistema valida identidad y permisos.
5. El sistema elimina o anonimiza información según las políticas definidas.
6. El sistema despublica perfiles y contenidos asociados.
7. El sistema confirma la finalización del proceso o informa si existen acciones pendientes.

Resultado esperado:

El usuario puede cerrar o eliminar su presencia en HABITTUS respetando privacidad, control de datos y obligaciones operativas de la plataforma.

Reglas de negocio asociadas:

- La eliminación debe diferenciarse de la desactivación temporal.
- El usuario debe recibir información clara sobre consecuencias de cada acción.
- Los archivos multimedia asociados deben seguir políticas explícitas de eliminación.
- Ciertas trazas administrativas mínimas pueden conservarse si son necesarias por seguridad, auditoría o cumplimiento legal.
- La eliminación no debe afectar contenido de otros usuarios salvo relaciones dependientes explícitas.

## 9. Reglas de negocio

### 9.1 Reglas de perfil profesional

Las reglas de perfil profesional definen las condiciones mínimas para crear, editar, publicar y mantener una presencia profesional dentro de HABITTUS.

Reglas:

- Todo perfil profesional debe estar asociado a una cuenta de usuario autenticada.
- Un perfil profesional debe tener un propietario claramente identificado.
- Solo el propietario del perfil puede editar su contenido, salvo intervención administrativa justificada.
- El perfil debe incluir un nombre profesional o artístico para poder ser publicado.
- El perfil debe incluir al menos una disciplina, categoría o descripción de práctica para poder ser publicado.
- El perfil debe incluir una descripción profesional mínima para evitar perfiles vacíos o ambiguos.
- El perfil puede contener información opcional como ubicación general, enlaces externos, trayectoria, disponibilidad o información de contacto.
- La ubicación debe ser general y no debe exigir dirección exacta del artista.
- La información de contacto debe ser configurable por el artista y no debe publicarse por defecto sin decisión explícita.
- El perfil puede existir en estado editable antes de cumplir criterios de publicación.
- Un perfil publicado debe cumplir criterios mínimos de completitud definidos por el producto.
- El sistema debe permitir actualizar un perfil publicado sin perder su URL o identificador estable, salvo decisión técnica contraria documentada.
- Un perfil puede ser ocultado, desactivado o eliminado según reglas de cuenta, moderación o solicitud del usuario.
- La plataforma debe evitar duplicados evidentes de perfiles cuando representen a la misma persona y cuenta, salvo que se defina soporte para múltiples perfiles.

### 9.2 Reglas de publicación de obras

Las reglas de publicación de obras determinan qué condiciones debe cumplir una obra, pieza, proyecto o registro para formar parte visible del portfolio profesional.

Reglas:

- Toda obra o proyecto debe estar asociado a un perfil profesional existente.
- Solo el propietario del perfil puede crear, editar, ocultar, archivar o eliminar obras asociadas a ese perfil, salvo intervención administrativa justificada.
- Cada obra o proyecto debe tener un título o identificador descriptivo para poder publicarse.
- Cada obra o proyecto debe incluir al menos una imagen, archivo visual o registro documental permitido para poder publicarse, salvo casos textuales o conceptuales explícitamente aceptados por reglas futuras.
- Cada obra o proyecto debe incluir información contextual mínima, como técnica, año, descripción, materiales, dimensiones, duración o categoría, según corresponda a su tipo.
- El sistema debe permitir guardar obras en estado borrador antes de completar toda la información requerida para publicación.
- La publicación debe ser una acción controlada por el artista o por reglas explícitas del sistema.
- Una obra publicada debe poder ser despublicada u ocultada por su propietario.
- Una obra archivada no debe aparecer como contenido activo del portfolio salvo que se defina una visualización específica.
- El administrador puede ocultar o desactivar una obra si incumple reglas de contenido, derechos, seguridad o calidad mínima.
- La edición de una obra publicada debe preservar su relación con el perfil y su historial lógico, aunque no necesariamente requiera versionado visible en el MVP.
- La disponibilidad comercial de una obra, si se informa, no constituye contrato, reserva ni compromiso de venta dentro del MVP.

### 9.3 Reglas de imágenes y archivos multimedia

Las reglas de imágenes y archivos multimedia protegen la calidad visual, la seguridad técnica, los costos operativos y los derechos asociados al contenido publicado.

Reglas:

- Todo archivo multimedia debe estar asociado a una obra, proyecto, perfil o entidad funcional definida.
- El sistema debe aceptar únicamente formatos de archivo permitidos por la plataforma.
- El sistema debe rechazar archivos que excedan los límites máximos de tamaño definidos.
- El sistema debe rechazar archivos corruptos, ilegibles o incompatibles con el procesamiento definido.
- Las imágenes deben optimizarse para visualización y carga eficiente cuando la arquitectura lo permita.
- El sistema debe generar o almacenar versiones adecuadas para miniaturas, vistas previas o visualización principal si la implementación lo requiere.
- El archivo original y sus derivados deben respetar reglas de visibilidad del contenido al que pertenecen.
- Un archivo asociado a contenido oculto o no publicado no debe exponerse públicamente.
- Cuando un usuario elimina una obra o cuenta, los archivos asociados deben tratarse según la política de eliminación vigente.
- El artista es responsable de cargar archivos sobre los que posee derechos, permisos o autorización de uso.
- La plataforma debe reservarse la capacidad de retirar archivos que infrinjan derechos, reglas de contenido o condiciones legales.
- Los metadatos sensibles incluidos en archivos, como ubicación exacta, deben evaluarse para evitar exposición involuntaria.
- La plataforma debe evitar usar archivos de artistas para fines no autorizados por los términos del producto.

### 9.4 Reglas de visibilidad pública

Las reglas de visibilidad pública definen qué información puede ser consultada por visitantes y bajo qué condiciones.

Reglas:

- Solo los perfiles publicados deben ser visibles para visitantes no autenticados.
- Los perfiles en borrador, incompletos, ocultos, desactivados o eliminados no deben aparecer en exploración pública.
- Solo las obras o proyectos publicados deben aparecer en un perfil público.
- El artista debe poder controlar si una obra se encuentra publicada, oculta, archivada o en borrador.
- La información privada del usuario no debe mostrarse públicamente.
- La información de contacto debe mostrarse únicamente si el artista la configuró como visible.
- Los enlaces externos visibles deben pertenecer al conjunto de campos permitidos o aceptados por la plataforma.
- La plataforma debe evitar publicar automáticamente datos derivados que el artista no haya aceptado mostrar.
- La información administrativa, métricas internas, reportes y estados de moderación no deben exponerse públicamente.
- El sistema debe respetar restricciones de visibilidad al mostrar resultados de búsqueda, listados, perfiles y archivos multimedia.
- Si un perfil es despublicado, sus obras no deben quedar accesibles como contenido público independiente salvo regla explícita contraria.

### 9.5 Reglas de contacto entre usuarios

Las reglas de contacto entre usuarios definen cómo se habilitan comunicaciones profesionales sin comprometer privacidad, seguridad o control del artista.

Reglas:

- El artista debe decidir qué canales de contacto profesional desea mostrar.
- Ningún dato de contacto privado debe publicarse por defecto.
- Los visitantes deben acceder únicamente a la información de contacto marcada como visible.
- El sistema debe permitir que el artista edite o retire sus canales de contacto en cualquier momento.
- Los canales de contacto deben estar asociados al perfil profesional y no a información administrativa interna.
- Si se habilita un formulario o solicitud interna, debe requerir validaciones mínimas de contenido y datos de respuesta.
- Si se habilita mensajería interna, debe incorporar controles contra spam, abuso, suplantación y contacto no deseado.
- La disponibilidad profesional informada por el artista debe interpretarse como orientación, no como obligación contractual.
- La plataforma no debe garantizar respuesta del artista ante una consulta.
- El uso indebido de canales de contacto puede derivar en restricciones, reporte o intervención administrativa.

### 9.6 Reglas de validación de datos

Las reglas de validación de datos aseguran consistencia, calidad y confiabilidad de la información almacenada en HABITTUS.

Reglas:

- Los campos obligatorios deben validarse antes de permitir publicación de perfiles u obras.
- Los campos opcionales pueden omitirse sin bloquear la creación de borradores.
- Los emails, URLs y enlaces externos deben validarse según formato esperado.
- Los campos de texto deben tener límites mínimos o máximos cuando sea necesario para evitar contenido vacío, excesivo o inválido.
- Las disciplinas, categorías y etiquetas controladas deben validarse contra valores permitidos cuando correspondan a taxonomías globales.
- Los campos flexibles deben permitir diversidad de prácticas sin romper la consistencia general del modelo.
- Las fechas o años deben validarse para evitar valores imposibles o incoherentes.
- Las dimensiones, duración, materiales o técnicas deben aceptar ausencia cuando no apliquen al tipo de obra.
- El sistema debe evitar duplicados técnicos evidentes cuando generen inconsistencias operativas.
- Los estados de perfil y obra deben limitarse a valores definidos por el producto.
- Las validaciones del cliente no reemplazan validaciones del servidor o capa persistente.
- Los errores de validación deben comunicarse de forma clara y accionable para el usuario.

### 9.7 Reglas de moderación

Las reglas de moderación definen cómo HABITTUS mantiene un entorno profesional, seguro y confiable.

Reglas:

- La moderación debe aplicarse sobre perfiles, obras, archivos, enlaces, textos y datos públicos cuando corresponda.
- El contenido que infrinja reglas legales, de propiedad intelectual, privacidad, seguridad o convivencia profesional puede ser ocultado o desactivado.
- El contenido reportado debe poder ser revisado por un rol autorizado.
- Las acciones de moderación sensibles deben quedar registradas para trazabilidad.
- El administrador debe poder diferenciar entre contenido incompleto, contenido de baja calidad y contenido que incumple reglas.
- La plataforma puede solicitar correcciones antes de ocultar definitivamente un contenido, si el caso lo permite.
- La reincidencia en incumplimientos puede derivar en restricciones de cuenta.
- La moderación no debe utilizarse para alterar arbitrariamente la representación artística del usuario.
- La plataforma debe preservar criterios consistentes y documentables para intervenir contenido.
- Los roles administrativos deben tener acceso solo a las herramientas necesarias para su función.

### 9.8 Reglas de privacidad

Las reglas de privacidad protegen los datos personales, profesionales y operativos de usuarios de HABITTUS.

Reglas:

- La plataforma debe distinguir entre información pública, información privada e información administrativa.
- La información pública es aquella que el usuario decide publicar o que resulta necesaria para mostrar un perfil publicado.
- La información privada no debe estar disponible para visitantes ni otros usuarios sin autorización.
- La información administrativa debe usarse únicamente para operación, soporte, seguridad o cumplimiento.
- La plataforma debe recolectar solo los datos necesarios para cumplir su función.
- El usuario debe poder editar información personal y profesional bajo su control.
- El usuario debe poder solicitar desactivación o eliminación de cuenta según políticas definidas.
- Los datos de contacto deben tratarse como información sensible en términos de visibilidad.
- Las métricas internas deben evitar exponer información innecesaria sobre comportamiento individual.
- La analítica de producto debe respetar criterios de privacidad y minimización de datos.
- La plataforma no debe vender ni reutilizar información de artistas fuera del propósito documentado sin consentimiento explícito.

### 9.9 Reglas de propiedad intelectual

Las reglas de propiedad intelectual protegen la autoría, los derechos y el uso legítimo de obras y materiales publicados.

Reglas:

- El artista conserva la autoría y titularidad de sus obras, salvo acuerdos externos que indiquen otra cosa.
- La publicación de una obra en HABITTUS no transfiere propiedad intelectual a la plataforma.
- El usuario que carga contenido declara contar con derechos, permisos o autorización suficiente para publicarlo.
- La plataforma puede utilizar imágenes y datos publicados únicamente para mostrar, operar y promocionar funcionalmente el perfil dentro de los límites definidos por sus términos.
- La plataforma debe permitir retirar contenido ante solicitudes válidas del propietario o por intervención administrativa justificada.
- La plataforma debe contar con un mecanismo para reportar infracciones de derechos o uso indebido.
- El contenido de terceros incluido en obras, registros o documentación debe respetar permisos aplicables.
- La descarga, copia o reutilización externa de obras por visitantes no debe considerarse autorizada por el simple hecho de visualizarlas en la plataforma.
- La plataforma debe comunicar de forma clara que las obras pertenecen a sus autores o titulares correspondientes.
- Cualquier funcionalidad futura de venta, licencia, cesión o comercialización deberá definir reglas específicas antes de implementarse.

### 9.10 Reglas futuras de monetización

Las reglas futuras de monetización establecen límites para evaluar modelos comerciales sin comprometer la confianza, la calidad ni el posicionamiento profesional de HABITTUS.

Reglas:

- La monetización no forma parte obligatoria del MVP.
- Cualquier modelo de monetización debe documentarse antes de implementarse.
- La monetización no debe impedir que el producto cumpla su función básica de presentación profesional, salvo que se defina explícitamente una estrategia diferente.
- Las funcionalidades pagas no deben degradar artificialmente perfiles gratuitos hasta volverlos inútiles.
- Los planes premium, si existen, deben aportar valor profesional claro y no depender únicamente de visibilidad algorítmica.
- La venta de obras, encargos, reservas o pagos requiere reglas específicas de responsabilidad, comisión, impuestos, cancelación y soporte antes de implementarse.
- La plataforma no debe presentar disponibilidad comercial como garantía de compra, venta o reserva.
- Cualquier comisión o cargo debe comunicarse de forma transparente.
- Las métricas de popularidad no deben convertirse en el único criterio de exposición comercial.
- La monetización debe respetar privacidad, propiedad intelectual y control del artista sobre su contenido.
- Los modelos comerciales futuros deben evaluarse contra el riesgo de convertir HABITTUS en un marketplace genérico o red social de pago.

## 10. Modelo de datos

### 10.1 Principios del modelo de datos

El modelo conceptual de datos de HABITTUS debe representar de forma clara la relación entre usuarios, perfiles profesionales, obras, portfolios, archivos multimedia, categorías, contacto y administración.

Principios:

- El modelo debe priorizar claridad funcional antes que optimización prematura.
- Toda entidad principal debe tener un identificador único estable.
- Las entidades deben diferenciar información pública, privada y administrativa.
- El contenido artístico debe conservar relación explícita con su autor o perfil propietario.
- El modelo debe permitir estados de edición, publicación, ocultamiento y eliminación lógica cuando corresponda.
- Las relaciones deben facilitar búsqueda, filtrado y visualización profesional.
- Las entidades deben admitir evolución futura sin romper el MVP.
- El modelo debe contemplar prácticas artísticas diversas sin imponer una clasificación rígida.
- Los archivos multimedia deben modelarse como entidades independientes asociadas a perfiles, obras o proyectos.
- Las reglas de privacidad, propiedad intelectual y visibilidad deben estar reflejadas en atributos y relaciones.

### 10.2 Entidades principales

Las entidades principales del modelo conceptual inicial son:

- Usuario.
- Perfil profesional.
- Obra, pieza o proyecto.
- Portfolio.
- Categoría artística.
- Técnica o disciplina.
- Imagen o archivo multimedia.
- Contacto o consulta.
- Ubicación.
- Etiqueta.
- Rol y permiso.
- Entidades administrativas.

Estas entidades no representan necesariamente tablas definitivas de base de datos. Constituyen el modelo conceptual que deberá guiar el diseño posterior de persistencia, APIs, validaciones y reglas de negocio.

Relaciones principales de alto nivel:

- Un usuario puede tener uno o más roles.
- Un usuario artista puede ser propietario de un perfil profesional.
- Un perfil profesional puede contener uno o más elementos de portfolio.
- Un elemento de portfolio puede representar una obra, pieza, proyecto o registro.
- Una obra o proyecto puede tener uno o más archivos multimedia.
- Un perfil u obra puede estar asociado a disciplinas, categorías o etiquetas.
- Un perfil puede tener información de contacto visible o privada.
- Un administrador puede ejecutar acciones administrativas sobre usuarios, perfiles u obras.

### 10.3 Usuario

La entidad Usuario representa una identidad autenticable dentro de HABITTUS.

Propósito:

- Gestionar acceso, sesión y propiedad de recursos.
- Asociar roles y permisos.
- Vincular una cuenta con uno o más perfiles o acciones dentro de la plataforma.

Atributos principales:

| Atributo | Descripción |
| --- | --- |
| id | Identificador único del usuario. |
| email | Email principal asociado a la cuenta, si se utiliza este mecanismo. |
| authProvider | Proveedor o mecanismo de autenticación. |
| status | Estado de la cuenta: activa, pendiente, desactivada, suspendida o eliminada. |
| createdAt | Fecha de creación de la cuenta. |
| updatedAt | Fecha de última actualización. |
| lastLoginAt | Último acceso registrado, si se almacena. |
| deletedAt | Fecha de eliminación lógica, si aplica. |

Relaciones:

- Un usuario puede tener uno o más roles.
- Un usuario puede ser propietario de un perfil profesional.
- Un usuario puede ejecutar acciones administrativas si posee rol autorizado.

Reglas asociadas:

- La edición de perfiles y obras requiere usuario autenticado.
- La eliminación o desactivación de cuenta debe afectar la visibilidad del perfil asociado según políticas definidas.
- Los datos de autenticación no deben mezclarse con información pública del perfil.

### 10.4 Perfil profesional

La entidad Perfil profesional representa la presencia pública o editable de un artista o creativo dentro de HABITTUS.

Propósito:

- Presentar identidad artística, trayectoria, disciplinas, disponibilidad y portfolio.
- Servir como unidad principal de consulta para visitantes profesionales.
- Actuar como contenedor funcional del contenido publicado por el artista.

Atributos principales:

| Atributo | Descripción |
| --- | --- |
| id | Identificador único del perfil. |
| ownerUserId | Usuario propietario del perfil. |
| professionalName | Nombre artístico o profesional. |
| slug | Identificador legible o URL estable, si se implementa. |
| bio | Biografía, descripción profesional o statement breve. |
| profileStatus | Estado: borrador, publicado, oculto, desactivado o eliminado. |
| visibility | Configuración de visibilidad general del perfil. |
| locationId | Referencia a ubicación general, si existe. |
| contactVisibility | Configuración de visibilidad de contacto. |
| availabilityStatus | Disponibilidad profesional general, si se informa. |
| completionLevel | Nivel o indicador de completitud, si se calcula. |
| createdAt | Fecha de creación. |
| updatedAt | Fecha de última actualización. |
| publishedAt | Fecha de publicación, si aplica. |
| deletedAt | Fecha de eliminación lógica, si aplica. |

Relaciones:

- Pertenece a un usuario propietario.
- Puede contener múltiples obras, piezas o proyectos.
- Puede estar asociado a múltiples disciplinas, categorías y etiquetas.
- Puede tener múltiples enlaces externos o canales de contacto.
- Puede tener acciones administrativas asociadas.

Reglas asociadas:

- No debe publicarse si no cumple criterios mínimos de completitud.
- No debe exponer información privada del usuario propietario.
- Debe mantener relación estable con su contenido publicado.

### 10.5 Obra / pieza / proyecto

La entidad Obra / pieza / proyecto representa una unidad de contenido artístico o creativo dentro del portfolio de un perfil.

Propósito:

- Documentar una obra individual, pieza material, proyecto, serie simple o registro artístico.
- Asociar información contextual y archivos multimedia.
- Permitir consulta profesional del contenido creativo.

Atributos principales:

| Atributo | Descripción |
| --- | --- |
| id | Identificador único del elemento. |
| profileId | Perfil profesional propietario. |
| title | Título o nombre descriptivo. |
| description | Descripción contextual. |
| year | Año de creación o referencia temporal. |
| type | Tipo: obra, pieza, proyecto, registro, serie u otro valor definido. |
| status | Estado: borrador, publicado, oculto, archivado, en revisión o eliminado. |
| technique | Técnica principal, si se almacena como texto simple. |
| materials | Materiales principales, si corresponde. |
| dimensions | Dimensiones físicas, si corresponde. |
| duration | Duración, si corresponde a performance, video o registro temporal. |
| availability | Disponibilidad informada: disponible, no disponible, consultar u otro valor definido. |
| sortOrder | Orden relativo dentro del portfolio. |
| createdAt | Fecha de creación. |
| updatedAt | Fecha de última actualización. |
| publishedAt | Fecha de publicación. |
| deletedAt | Fecha de eliminación lógica, si aplica. |

Relaciones:

- Pertenece a un perfil profesional.
- Puede tener múltiples archivos multimedia.
- Puede estar asociado a categorías, técnicas, disciplinas o etiquetas.
- Puede registrar acciones administrativas o reportes.

Reglas asociadas:

- Debe tener título e información mínima para publicarse.
- No debe quedar públicamente visible si el perfil propietario no está publicado.
- Debe respetar reglas de propiedad intelectual y visibilidad.

### 10.6 Portfolio

La entidad Portfolio representa la organización funcional del conjunto de obras, piezas, proyectos o registros de un perfil.

Propósito:

- Agrupar contenido artístico asociado a un perfil profesional.
- Definir orden, estructura y visibilidad del contenido.
- Permitir evolución futura hacia series, colecciones o secciones personalizadas.

Atributos principales:

| Atributo | Descripción |
| --- | --- |
| id | Identificador único del portfolio. |
| profileId | Perfil profesional asociado. |
| title | Nombre interno o público del portfolio, si se permite. |
| description | Descripción opcional del conjunto. |
| status | Estado del portfolio: activo, oculto, archivado o eliminado. |
| sortMode | Criterio de ordenamiento definido por el artista o sistema. |
| createdAt | Fecha de creación. |
| updatedAt | Fecha de última actualización. |

Relaciones:

- Pertenece a un perfil profesional.
- Contiene múltiples obras, piezas o proyectos.
- Puede evolucionar hacia secciones o colecciones internas.

Reglas asociadas:

- En el MVP puede existir un portfolio principal por perfil sin requerir múltiples portfolios.
- El portfolio público debe mostrar solo contenido publicado o habilitado.
- El orden del portfolio debe poder mantenerse estable si el producto lo requiere.

### 10.7 Categoría artística

La entidad Categoría artística representa una clasificación general que ayuda a organizar perfiles, obras y navegación.

Propósito:

- Facilitar descubrimiento y comprensión general del contenido.
- Ofrecer una taxonomía inicial sin limitar prácticas híbridas.
- Apoyar búsqueda, filtrado y administración.

Atributos principales:

| Atributo | Descripción |
| --- | --- |
| id | Identificador único de la categoría. |
| name | Nombre visible de la categoría. |
| slug | Identificador legible para URLs o filtros. |
| description | Descripción funcional de la categoría. |
| status | Estado: activa, inactiva o archivada. |
| parentCategoryId | Categoría superior, si se define jerarquía. |
| sortOrder | Orden de visualización. |
| createdAt | Fecha de creación. |
| updatedAt | Fecha de última actualización. |

Relaciones:

- Puede asociarse a perfiles profesionales.
- Puede asociarse a obras o proyectos.
- Puede tener relación jerárquica con otras categorías.

Reglas asociadas:

- Una categoría no debe impedir que el artista agregue información descriptiva flexible.
- Las categorías deben ser administrables y revisables.
- La eliminación de una categoría debe contemplar contenido asociado.

### 10.8 Técnica / disciplina

La entidad Técnica / disciplina representa prácticas, medios o métodos utilizados por artistas y creativos.

Propósito:

- Describir la práctica profesional del artista.
- Facilitar búsqueda y filtrado por medios o disciplinas.
- Permitir mayor precisión que una categoría general.

Atributos principales:

| Atributo | Descripción |
| --- | --- |
| id | Identificador único. |
| name | Nombre de la técnica o disciplina. |
| slug | Identificador legible. |
| description | Descripción opcional. |
| type | Clasificación interna: disciplina, técnica, material, medio u otro valor definido. |
| status | Estado: activa, inactiva o archivada. |
| createdAt | Fecha de creación. |
| updatedAt | Fecha de última actualización. |

Relaciones:

- Puede asociarse a perfiles.
- Puede asociarse a obras o proyectos.
- Puede complementarse con etiquetas libres o controladas.

Reglas asociadas:

- Un perfil puede tener múltiples disciplinas.
- Una obra puede tener múltiples técnicas o materiales.
- El sistema debe permitir prácticas interdisciplinarias.

### 10.9 Imagen o archivo multimedia

La entidad Imagen o archivo multimedia representa archivos asociados a perfiles, obras, proyectos o registros.

Propósito:

- Almacenar referencia, metadatos y estado de archivos.
- Separar el archivo de la entidad artística que lo utiliza.
- Permitir optimización, control de visibilidad y eliminación.

Atributos principales:

| Atributo | Descripción |
| --- | --- |
| id | Identificador único del archivo. |
| ownerUserId | Usuario que cargó el archivo. |
| profileId | Perfil asociado, si corresponde. |
| artworkId | Obra o proyecto asociado, si corresponde. |
| fileType | Tipo de archivo: imagen, video, documento u otro permitido. |
| mimeType | Tipo MIME. |
| fileSize | Tamaño del archivo. |
| storageKey | Referencia interna de almacenamiento. |
| publicUrl | URL pública si el archivo está habilitado para exposición. |
| altText | Texto descriptivo o accesible, si se define. |
| caption | Pie o descripción breve. |
| sortOrder | Orden relativo dentro de la entidad asociada. |
| status | Estado: activo, procesando, oculto, eliminado o fallido. |
| createdAt | Fecha de carga. |
| updatedAt | Fecha de última actualización. |
| deletedAt | Fecha de eliminación lógica, si aplica. |

Relaciones:

- Puede pertenecer a una obra o proyecto.
- Puede pertenecer a un perfil como imagen principal o recurso complementario.
- Puede generar versiones derivadas como miniaturas o formatos optimizados.

Reglas asociadas:

- Un archivo no debe exponerse públicamente si la entidad asociada no es pública.
- Los archivos deben respetar formatos y límites definidos.
- La eliminación de contenido asociado debe definir qué ocurre con sus archivos.

### 10.10 Contacto / consulta

La entidad Contacto / consulta representa canales o interacciones profesionales asociadas a un perfil.

Propósito:

- Gestionar información de contacto visible del artista.
- Preparar una base para futuras solicitudes internas.
- Separar datos de contacto de información administrativa privada.

Atributos principales para canal de contacto:

| Atributo | Descripción |
| --- | --- |
| id | Identificador único. |
| profileId | Perfil profesional asociado. |
| type | Tipo de contacto: email, sitio web, red externa, instrucciones u otro valor. |
| value | Valor del canal de contacto. |
| label | Etiqueta visible opcional. |
| visibility | Visibilidad: pública, privada u oculta. |
| status | Estado: activo, inactivo o eliminado. |
| createdAt | Fecha de creación. |
| updatedAt | Fecha de última actualización. |

Atributos principales para consulta futura:

| Atributo | Descripción |
| --- | --- |
| id | Identificador único de la consulta. |
| profileId | Perfil receptor. |
| senderUserId | Usuario emisor, si está autenticado. |
| senderName | Nombre informado por el emisor, si aplica. |
| senderEmail | Email de respuesta, si aplica. |
| subject | Asunto o tipo de consulta. |
| message | Contenido del mensaje. |
| status | Estado: nueva, leída, respondida, archivada, reportada o eliminada. |
| createdAt | Fecha de creación. |
| updatedAt | Fecha de última actualización. |

Relaciones:

- Un perfil puede tener múltiples canales de contacto.
- Una consulta futura debe estar asociada a un perfil receptor.

Reglas asociadas:

- La información de contacto debe ser configurable por el artista.
- Las consultas internas no forman parte obligatoria del MVP.
- Si se implementan consultas, deben contemplar privacidad, spam y abuso.

### 10.11 Ubicación

La entidad Ubicación representa información geográfica general asociada a perfiles, usuarios u oportunidades futuras.

Propósito:

- Facilitar contexto profesional y descubrimiento por región.
- Evitar exposición innecesaria de direcciones exactas.
- Preparar el modelo para internacionalización futura.

Atributos principales:

| Atributo | Descripción |
| --- | --- |
| id | Identificador único. |
| country | País. |
| region | Provincia, estado o región. |
| city | Ciudad o localidad. |
| displayName | Nombre legible de la ubicación. |
| latitude | Coordenada aproximada opcional, si se utiliza. |
| longitude | Coordenada aproximada opcional, si se utiliza. |
| visibility | Nivel de visibilidad de la ubicación. |
| createdAt | Fecha de creación. |
| updatedAt | Fecha de última actualización. |

Relaciones:

- Puede asociarse a perfiles profesionales.
- Puede utilizarse en búsqueda o filtrado.
- Puede asociarse a oportunidades futuras.

Reglas asociadas:

- La ubicación exacta no debe ser obligatoria.
- El artista debe controlar si muestra ubicación y con qué nivel de detalle.
- La ubicación debe tratarse como dato potencialmente sensible cuando permita identificar domicilio o taller.

### 10.12 Etiquetas

La entidad Etiqueta representa términos flexibles que complementan categorías y disciplinas.

Propósito:

- Permitir descripción más granular de perfiles, obras o proyectos.
- Facilitar descubrimiento sin depender únicamente de taxonomías rígidas.
- Capturar lenguaje propio del ecosistema artístico.

Atributos principales:

| Atributo | Descripción |
| --- | --- |
| id | Identificador único. |
| name | Texto de la etiqueta. |
| slug | Identificador normalizado. |
| type | Tipo: libre, controlada, sugerida o administrativa. |
| status | Estado: activa, pendiente, bloqueada o archivada. |
| createdAt | Fecha de creación. |
| updatedAt | Fecha de última actualización. |

Relaciones:

- Puede asociarse a perfiles.
- Puede asociarse a obras o proyectos.
- Puede ser revisada o consolidada por administración.

Reglas asociadas:

- Las etiquetas deben ayudar a describir contenido, no reemplazar información contextual obligatoria.
- El sistema debe evitar duplicados semánticos evidentes cuando afecten búsqueda o calidad.
- Las etiquetas ofensivas, engañosas o irrelevantes pueden ser moderadas.

### 10.13 Roles y permisos

Las entidades Rol y Permiso definen capacidades de acceso y acciones disponibles para cada usuario.

Propósito:

- Controlar acceso a funcionalidades.
- Separar capacidades de artista, visitante autenticado, administrador y roles futuros.
- Permitir evolución hacia permisos más granulares.

Atributos principales de Rol:

| Atributo | Descripción |
| --- | --- |
| id | Identificador único del rol. |
| name | Nombre del rol. |
| description | Descripción funcional. |
| status | Estado: activo o inactivo. |
| createdAt | Fecha de creación. |
| updatedAt | Fecha de última actualización. |

Atributos principales de Permiso:

| Atributo | Descripción |
| --- | --- |
| id | Identificador único del permiso. |
| key | Clave funcional del permiso. |
| description | Descripción del alcance permitido. |
| scope | Alcance: global, propio, público, administrativo u otro valor definido. |
| createdAt | Fecha de creación. |
| updatedAt | Fecha de última actualización. |

Relaciones:

- Un usuario puede tener múltiples roles.
- Un rol puede tener múltiples permisos.
- Un permiso puede estar presente en múltiples roles.

Reglas asociadas:

- El sistema debe aplicar mínimo privilegio.
- Las acciones administrativas deben requerir permisos explícitos.
- Un usuario puede tener rol mixto en el futuro, por ejemplo artista y curador.

### 10.14 Entidades administrativas

Las entidades administrativas permiten operar, auditar y mantener la calidad de la plataforma.

Entidades conceptuales:

- Acción administrativa.
- Reporte de contenido.
- Estado de moderación.
- Registro de auditoría.

Atributos principales de acción administrativa:

| Atributo | Descripción |
| --- | --- |
| id | Identificador único. |
| actorUserId | Usuario administrador que ejecuta la acción. |
| targetType | Tipo de entidad afectada: usuario, perfil, obra, archivo, etiqueta u otra. |
| targetId | Identificador de la entidad afectada. |
| actionType | Tipo de acción: ocultar, restaurar, suspender, revisar, eliminar u otra. |
| reason | Motivo documentado. |
| createdAt | Fecha de ejecución. |

Atributos principales de reporte de contenido:

| Atributo | Descripción |
| --- | --- |
| id | Identificador único. |
| reporterUserId | Usuario que reporta, si está autenticado. |
| targetType | Tipo de entidad reportada. |
| targetId | Identificador de la entidad reportada. |
| reason | Motivo del reporte. |
| status | Estado: nuevo, en revisión, resuelto, rechazado o cerrado. |
| createdAt | Fecha de creación. |
| updatedAt | Fecha de actualización. |

Reglas asociadas:

- Las acciones sensibles deben ser trazables.
- Los reportes deben poder revisarse sin exponer información innecesaria.
- La administración debe respetar privacidad y mínimo acceso necesario.

### 10.15 Relaciones entre entidades

Relaciones conceptuales principales:

- Usuario 1:N Rol mediante una relación de asignación de roles.
- Usuario 1:1 Perfil profesional en el MVP, con posibilidad futura de 1:N si se admiten múltiples perfiles.
- Perfil profesional 1:N Obra / pieza / proyecto.
- Perfil profesional 1:1 Portfolio principal en el MVP.
- Portfolio 1:N Obra / pieza / proyecto.
- Obra / pieza / proyecto 1:N Imagen o archivo multimedia.
- Perfil profesional N:M Categoría artística.
- Perfil profesional N:M Técnica / disciplina.
- Perfil profesional N:M Etiqueta.
- Obra / pieza / proyecto N:M Categoría artística.
- Obra / pieza / proyecto N:M Técnica / disciplina.
- Obra / pieza / proyecto N:M Etiqueta.
- Perfil profesional 1:N Canal de contacto.
- Perfil profesional N:1 Ubicación opcional.
- Acción administrativa N:1 Usuario administrador.
- Acción administrativa N:1 Entidad afectada mediante referencia polimórfica conceptual.
- Reporte de contenido N:1 Entidad reportada mediante referencia polimórfica conceptual.

Estas relaciones deben revisarse en la etapa de diseño técnico para decidir normalización, índices, restricciones y estrategia de consulta.

### 10.16 Campos requeridos y opcionales

Los campos requeridos y opcionales deben diferenciar creación, edición y publicación.

Usuario:

- Requeridos: id, mecanismo de autenticación, estado.
- Opcionales: último acceso, metadatos administrativos, fecha de eliminación lógica.

Perfil profesional:

- Requeridos para creación: ownerUserId, professionalName o campo equivalente mínimo.
- Requeridos para publicación: nombre profesional, descripción mínima, al menos una disciplina o categoría, estado publicable.
- Opcionales: ubicación, enlaces externos, disponibilidad, imagen principal, trayectoria ampliada.

Obra / pieza / proyecto:

- Requeridos para creación: profileId, título o identificador temporal.
- Requeridos para publicación: título, al menos un recurso visual o documental permitido, información contextual mínima.
- Opcionales: dimensiones, duración, materiales, disponibilidad, etiquetas, orden personalizado.

Archivo multimedia:

- Requeridos: ownerUserId, entidad asociada, tipo de archivo, referencia de almacenamiento, estado.
- Opcionales: altText, caption, orden, URL pública derivada.

Contacto:

- Requeridos: profileId, tipo, valor, visibilidad.
- Opcionales: etiqueta visible, instrucciones, estado avanzado.

Categorías, disciplinas y etiquetas:

- Requeridos: nombre, estado.
- Opcionales: descripción, slug, jerarquía, orden.

### 10.17 Consideraciones de normalización

El modelo de datos debe equilibrar normalización, flexibilidad y eficiencia de consulta.

Consideraciones:

- Usuarios y perfiles deben mantenerse separados para evitar exposición de datos privados en vistas públicas.
- Obras y archivos multimedia deben modelarse por separado para permitir múltiples archivos por obra y reutilización de lógica de almacenamiento.
- Categorías, disciplinas y etiquetas deben tener relaciones N:M con perfiles y obras para admitir prácticas diversas.
- La ubicación puede modelarse como entidad separada si se requiere reutilización, búsqueda geográfica o internacionalización.
- Los canales de contacto deben separarse del perfil para permitir múltiples medios y distintas reglas de visibilidad.
- Las acciones administrativas y reportes deben separarse de las entidades de contenido para preservar auditoría.
- Los estados deben representarse de forma consistente para facilitar reglas de visibilidad.
- Los datos calculados, como nivel de completitud, pueden almacenarse si mejoran performance, pero deben tener fuente de verdad clara.
- Las etiquetas libres pueden requerir normalización posterior para evitar duplicación excesiva.
- La referencia polimórfica en reportes o acciones administrativas debe evaluarse cuidadosamente en el diseño técnico para mantener integridad.

### 10.18 Consideraciones de escalabilidad del modelo

El modelo conceptual debe permitir crecimiento progresivo sin obligar a rediseñar las entidades centrales.

Consideraciones de escalabilidad:

- El modelo debe soportar crecimiento en cantidad de perfiles, obras y archivos multimedia.
- Las consultas públicas deben poder optimizarse por estado de publicación, disciplina, categoría, ubicación y completitud.
- La búsqueda debe poder evolucionar desde filtros simples hacia índices especializados sin cambiar el significado de las entidades.
- El almacenamiento de multimedia debe contemplar derivados, miniaturas, CDN y eliminación eficiente.
- Las relaciones N:M deben diseñarse pensando en consultas frecuentes y filtros combinados.
- El modelo debe permitir agregar perfiles institucionales sin alterar la entidad de artista de forma incompatible.
- Los roles y permisos deben poder ampliarse sin migraciones complejas de lógica de acceso.
- Las acciones administrativas deben escalar hacia auditoría más completa si aumenta la operación.
- Las entidades deben permitir internacionalización futura mediante campos localizables si el producto lo requiere.
- Las reglas de visibilidad deben mantenerse centralizadas para evitar inconsistencias entre perfil, portfolio, búsqueda y archivos.
- La evolución hacia monetización, venta, convocatorias o mensajería debe incorporar nuevas entidades sin sobrecargar el modelo base.

## 11. Arquitectura del sistema

### 11.1 Principios arquitectónicos

La arquitectura de HABITTUS debe sostener el alcance profesional definido en este documento y permitir que el MVP evolucione sin reemplazar sus componentes centrales.

Principios obligatorios:

- **Modularidad por dominio:** identidad, perfiles, portfolios, multimedia, descubrimiento, contacto y administración deben constituir módulos con responsabilidades explícitas.
- **Separación entre presentación y negocio:** las reglas de publicación, propiedad, visibilidad y moderación no deben depender de una interfaz específica.
- **Backend como autoridad:** toda operación persistente debe validarse en el servidor, aun cuando la interfaz aplique validaciones anticipadas.
- **Privacidad por defecto:** los datos privados no deben incluirse en respuestas, índices, logs ni archivos públicos.
- **API primero:** web, experiencia móvil y administración deben consumir contratos versionados comunes; no deben acceder directamente a la base de datos.
- **Monolito modular para el MVP:** el backend se desplegará como una unidad lógica única, con límites internos claros. No se adoptarán microservicios antes de contar con necesidades verificables de escala u operación independiente.
- **Servicios externos encapsulados:** autenticación, almacenamiento, email, analítica y monitoreo deben integrarse mediante adaptadores reemplazables.
- **Procesamiento asíncrono selectivo:** la generación de derivados multimedia, emails y tareas no críticas no debe bloquear las operaciones principales.
- **Trazabilidad:** las operaciones administrativas y cambios sensibles deben conservar actor, fecha, objeto afectado y resultado.
- **Evolución compatible:** los cambios de contratos y datos deben aplicarse mediante versionado y migraciones reversibles o con plan de recuperación.

### 11.2 Arquitectura general

HABITTUS adoptará una arquitectura cliente-servidor organizada en las siguientes capas:

1. **Clientes:** aplicación web responsive, aplicación móvil cuando corresponda a la fase aprobada y consola administrativa separada.
2. **API de aplicación:** punto de entrada autenticado y versionado para consultas y operaciones de negocio.
3. **Módulos de dominio:** identidad y acceso, perfil profesional, portfolio, multimedia, taxonomía, descubrimiento, contacto y administración.
4. **Persistencia:** base de datos relacional como fuente de verdad, almacenamiento de objetos para archivos e índice de búsqueda derivado.
5. **Procesamiento asíncrono:** cola de trabajos para multimedia, email y tareas operativas que admitan ejecución diferida.
6. **Servicios transversales:** autorización, validación, auditoría, observabilidad, seguridad y configuración.

Decisiones de alcance:

- La primera entrega priorizará una experiencia web responsive instalable y compartible. Esta decisión resuelve perfiles públicos mediante enlaces estables y evita duplicar implementaciones nativas durante la validación.
- La aplicación móvil nativa o multiplataforma se incorporará cuando exista una necesidad validada de distribución en tiendas o capacidades del dispositivo que la web no cubra adecuadamente.
- El panel administrativo será una aplicación web protegida y no una función expuesta en el cliente público.
- La API será la única vía autorizada de escritura sobre datos de negocio.
- La base relacional será la fuente de verdad. El buscador, la caché y los derivados multimedia serán proyecciones reconstruibles.
- No habrá comunicación directa entre clientes y proveedores externos salvo cargas multimedia autorizadas mediante credenciales temporales y operaciones explícitamente diseñadas.

### 11.3 Arquitectura frontend

El frontend público y autenticado se implementará como una aplicación web responsive con renderizado híbrido.

Responsabilidades:

- Renderizar perfiles y obras públicas de manera indexable y compartible.
- Proveer los flujos autenticados de registro, edición de perfil y gestión de portfolio.
- Aplicar validaciones de experiencia sin sustituir las validaciones del backend.
- Diferenciar con claridad estados de borrador, publicado, oculto y desactivado.
- Consumir exclusivamente contratos tipados y versionados de la API.
- Evitar incluir secretos, permisos administrativos o datos privados en el código entregado al navegador.

Organización funcional:

- Área pública: descubrimiento, perfiles publicados, portfolios y detalle de obra.
- Área autenticada: cuenta, perfil propio, portfolio, archivos y configuración de contacto.
- Área compartida: navegación, sistema de diseño, validación, manejo de errores, telemetría y accesibilidad.
- Consola administrativa: aplicación separada en despliegue y permisos, aunque pueda reutilizar componentes y contratos.

Las páginas públicas de perfil y obra deben poder renderizarse en servidor o generarse con estrategia equivalente para ofrecer enlaces estables, metadatos correctos y buen rendimiento inicial. Las áreas privadas pueden utilizar renderizado cliente cuando no exista beneficio de indexación.

El estado remoto debe gestionarse como datos de servidor con caché e invalidación explícita. El estado local se limitará a interacción, formularios y preferencias de interfaz; no se duplicará la fuente de verdad de perfiles u obras en un almacén global permanente.

### 11.4 Arquitectura backend

El backend del MVP será un monolito modular con API HTTP basada en recursos y operaciones de negocio explícitas.

Módulos iniciales:

- **Identidad:** referencia de usuarios, sesiones y estado de cuenta.
- **Perfiles:** creación, edición, completitud, publicación y visibilidad.
- **Portfolio:** obras, proyectos, orden y estados editoriales.
- **Multimedia:** solicitudes de carga, metadatos, procesamiento y eliminación.
- **Taxonomía:** categorías, disciplinas, técnicas y etiquetas controladas.
- **Descubrimiento:** consultas públicas, filtros y coordinación del índice.
- **Contacto:** canales públicos configurables y consultas si se habilitan.
- **Administración:** moderación, reportes, ocultamiento y auditoría.

Reglas de implementación arquitectónica:

- Cada módulo debe exponer casos de uso y no sus tablas internas.
- Las transacciones deben cubrir cambios que requieran consistencia conjunta, como publicación y validación de completitud.
- Las operaciones repetibles deben admitir idempotencia cuando puedan reenviarse, especialmente cargas y tareas asíncronas.
- Los errores deben usar un formato uniforme con código estable, mensaje comprensible e información de validación no sensible.
- La API pública comenzará bajo el prefijo `/v1`; los cambios incompatibles exigirán nueva versión o período de compatibilidad.
- La documentación de contratos se generará y verificará como parte del proceso técnico.
- Las eliminaciones de contenido deben coordinar registro, archivos derivados e índice, con política explícita de retención.

No se separarán módulos en servicios independientes durante el MVP. Una extracción futura requerirá evidencia de cuellos de botella, aislamiento de seguridad, carga diferenciada o propiedad operativa independiente.

### 11.5 Arquitectura móvil

El producto mantendrá una estrategia móvil progresiva:

1. El MVP ofrecerá web responsive con paridad funcional en navegadores móviles compatibles.
2. Se evaluará una aplicación multiplataforma cuando las métricas y pruebas demuestren valor específico en captura, carga frecuente, notificaciones o distribución en tiendas.
3. La aplicación futura reutilizará la API, los contratos, las reglas de negocio y los tokens de diseño; no reutilizará de forma forzada componentes web incompatibles con interacción nativa.

Condiciones para iniciar una aplicación móvil dedicada:

- necesidad validada mediante investigación o métricas;
- alcance de paridad y diferencias aprobado;
- presupuesto de mantenimiento para iOS y Android;
- estrategia de autenticación, enlaces profundos, carga en segundo plano y distribución definida;
- ausencia de impacto sobre la entrega y estabilidad de la experiencia principal.

La arquitectura no dependerá de APIs exclusivas del navegador que impidan un cliente móvil posterior. Tampoco incorporará sincronización offline compleja en el MVP: los borradores persistentes fuera del servidor deberán definirse como una capacidad futura con reglas de conflicto explícitas.

### 11.6 Arquitectura de datos

PostgreSQL será la fuente de verdad para los datos estructurados definidos en el Capítulo 10.

Decisiones:

- Identificadores internos no secuenciales para evitar exposición de volumen y facilitar creación distribuida futura.
- Integridad referencial mediante claves foráneas y restricciones para relaciones obligatorias.
- Estados editoriales representados con valores controlados y transiciones validadas por el dominio.
- Fechas técnicas almacenadas en UTC; años de obra y fechas artísticas conservarán su semántica específica sin conversiones improcedentes.
- Datos flexibles solo en campos JSON cuando la variabilidad sea real y no afecte consultas, integridad o reglas centrales.
- Migraciones versionadas, revisadas y ejecutadas por el proceso de despliegue, nunca manualmente como práctica ordinaria.
- Backups automáticos cifrados y restauraciones verificadas periódicamente.
- Acceso a datos mediante credenciales por entorno y privilegio mínimo.

La base no almacenará binarios multimedia. Guardará claves de objeto, metadatos técnicos, estado de procesamiento, propietario, visibilidad y referencias a derivados.

La búsqueda y las métricas derivadas no serán fuentes de verdad. Deben poder reconstruirse desde PostgreSQL y eventos operativos autorizados.

### 11.7 Arquitectura de almacenamiento multimedia

Los originales y derivados se almacenarán en un servicio compatible con la API S3 y se entregarán mediante CDN.

Flujo de carga:

1. El cliente solicita autorización de carga a la API.
2. La API valida identidad, propiedad, tipo de archivo, tamaño permitido y cuota aplicable.
3. La API entrega una URL temporal limitada a un objeto y una operación.
4. El cliente carga el archivo directamente al almacenamiento privado.
5. El sistema verifica la carga y encola análisis y generación de derivados.
6. El procesador valida el contenido técnico, elimina metadatos sensibles cuando corresponda y genera formatos optimizados.
7. La API marca el archivo como disponible o rechazado y registra el motivo operativo.

Reglas:

- Los originales serán privados por defecto.
- La entrega pública utilizará derivados aprobados y URLs controladas; la publicación del perfil determinará su visibilidad.
- Se generarán tamaños adecuados para miniatura, listado y detalle, conservando proporción y evitando ampliación innecesaria.
- Los formatos de entrega prioritarios serán WebP o AVIF con alternativa compatible; los formatos de entrada se definirán por política.
- Los nombres aportados por usuarios no se usarán como claves físicas.
- Los archivos huérfanos deberán detectarse y eliminarse después de un período de seguridad.
- La eliminación lógica de una obra debe retirar su exposición de inmediato; la eliminación física seguirá la política de retención y auditoría.
- El MVP se centrará en imágenes. Video, audio, modelos tridimensionales y documentos requerirán aprobación de alcance y pipelines específicos.

### 11.8 Arquitectura de autenticación

La autenticación se delegará en un proveedor gestionado compatible con OpenID Connect y OAuth 2.0, evitando implementar almacenamiento de contraseñas propio.

Decisiones:

- El MVP admitirá email con enlace de acceso o contraseña gestionada por el proveedor; los métodos concretos deberán mantener recuperación segura.
- El backend validará emisor, audiencia, firma, vigencia y estado del usuario en cada contexto protegido.
- Las sesiones web se mantendrán mediante cookies seguras, `HttpOnly` y `SameSite`, evitando persistir tokens de larga duración en almacenamiento accesible por JavaScript.
- El cierre de sesión y la desactivación de cuenta deben invalidar o revocar sesiones según capacidades del proveedor.
- Las cuentas administrativas deberán utilizar autenticación multifactor antes de operar en producción.
- La vinculación entre identidad externa y entidad Usuario será estable y no dependerá del email como identificador inmutable.

La autenticación confirma identidad; no concede por sí sola permisos sobre perfiles, obras ni acciones administrativas.

### 11.9 Arquitectura de autorización

La autorización combinará roles globales y propiedad de recursos.

Políticas principales:

- Un visitante solo puede leer recursos publicados y habilitados públicamente.
- Un artista autenticado puede gestionar su cuenta, su perfil y los recursos que le pertenecen.
- Un administrador puede ejecutar únicamente acciones concedidas a su rol, con auditoría obligatoria.
- El estado público de un perfil no habilita la lectura de campos privados asociados.
- Los archivos heredan reglas de visibilidad de la obra y el perfil, además de su propio estado de procesamiento.
- Toda autorización debe verificarse en backend y en cada operación; ocultar controles en la interfaz no constituye seguridad.

Las políticas se centralizarán para impedir diferencias entre API pública, consola administrativa y futuros clientes móviles. El acceso directo excepcional deberá quedar documentado y auditado.

### 11.10 Arquitectura de búsqueda

El MVP utilizará búsqueda estructurada sobre PostgreSQL para perfiles y obras publicados, con índices específicos para filtros aprobados.

Campos iniciales de descubrimiento:

- nombre profesional;
- disciplina y categoría;
- técnica o material cuando esté normalizado;
- ubicación general publicada;
- etiquetas aprobadas;
- título y año de obra, cuando corresponda.

Reglas:

- Solo se indexará información pública de contenido publicado y no moderado.
- La relevancia priorizará correspondencia textual, completitud y calidad estructural; no dependerá de likes, seguidores o pago.
- Los filtros deben derivar de taxonomías y campos documentados, no de atributos privados.
- La paginación será estable y tendrá límites para proteger el servicio.
- Los cambios de publicación, ocultamiento o eliminación deben reflejarse sin demoras operativas indebidas.

Si volumen o requisitos de relevancia superan las capacidades acordadas de PostgreSQL, se incorporará un motor dedicado. Ese índice será una proyección reconstruible alimentada por eventos o tareas idempotentes, nunca la fuente de verdad.

### 11.11 Arquitectura de notificaciones

El MVP limitará las notificaciones a comunicaciones transaccionales necesarias: acceso, recuperación, seguridad, confirmaciones operativas y avisos administrativos relevantes.

Decisiones:

- Email será el canal inicial.
- Los mensajes se generarán desde plantillas versionadas y se enviarán mediante una cola.
- Cada envío registrará tipo, destinatario, estado, proveedor y referencia de correlación, sin copiar contenido sensible innecesario a logs.
- Los reintentos serán limitados y no producirán envíos duplicados para una misma operación idempotente.
- Las preferencias de comunicaciones opcionales estarán separadas de mensajes estrictamente operativos.
- Notificaciones push, campañas, newsletters y automatizaciones de engagement quedan fuera del MVP.

### 11.12 Arquitectura de administración

La administración se implementará como una aplicación web independiente, accesible solo a roles autorizados.

Capacidades iniciales:

- consulta de usuarios, perfiles, obras y estados;
- revisión de contenido reportado o señalado;
- ocultamiento, reactivación o desactivación conforme a reglas;
- registro de motivo en acciones sensibles;
- consulta de historial básico de auditoría;
- gestión controlada de taxonomías globales.

La consola no accederá directamente a la base de datos. Utilizará endpoints administrativos separados, autenticación reforzada, autorización granular y auditoría. Las acciones destructivas deberán requerir confirmación explícita y, cuando corresponda, ser reversibles durante un período definido.

### 11.13 Integraciones externas

Integraciones previstas para el MVP:

| Capacidad | Tipo de integración | Criterio obligatorio |
|---|---|---|
| Autenticación | Proveedor OIDC/OAuth gestionado | Exportabilidad de identidades y controles de sesión |
| Email transaccional | API de proveedor especializado | Reputación, webhooks y trazabilidad |
| Almacenamiento | Servicio compatible con S3 | URLs firmadas, ciclo de vida y portabilidad |
| CDN | Red de distribución | Transformación o entrega eficiente y purga controlada |
| Monitoreo de errores | Servicio gestionado | Redacción de datos sensibles y separación por entorno |
| Analítica | Plataforma respetuosa de privacidad | Consentimiento aplicable y minimización de datos |

Cada integración debe estar detrás de un módulo adaptador, contar con timeouts, manejo explícito de fallos y configuración independiente por entorno. Los webhooks deben verificar firma, tolerar repetición y procesarse de forma idempotente.

Pagos, mapas, redes sociales, mensajería, traducción automática y servicios de inteligencia artificial quedan fuera de esta etapa.

### 11.14 Observabilidad y monitoreo

La plataforma debe contar desde el MVP con observabilidad suficiente para detectar fallos sin inspeccionar datos privados.

Componentes:

- logs estructurados con nivel, entorno, servicio, operación e identificador de correlación;
- captura de errores en frontend, backend y procesos asíncronos;
- métricas de latencia, tasa de errores, disponibilidad, colas, base de datos y almacenamiento;
- trazabilidad de solicitudes críticas entre API y trabajos asíncronos;
- alertas accionables para indisponibilidad, errores sostenidos, saturación y fallas de procesamiento;
- paneles diferenciados para salud técnica y métricas de producto.

No deben registrarse contraseñas, tokens, URLs firmadas, contenido completo de formularios, emails en texto claro ni datos de contacto. La retención de logs deberá ser limitada y compatible con las políticas de privacidad.

Objetivos iniciales de servicio se definirán antes de la beta. Como base operativa, las rutas públicas críticas deberán medirse por disponibilidad y percentiles de latencia, y toda alerta deberá tener responsable y procedimiento de respuesta.

### 11.15 Seguridad

La seguridad se aplicará de forma transversal y verificable.

Controles mínimos:

- TLS en toda comunicación y cifrado gestionado para datos y backups en reposo.
- Validación de entrada y codificación de salida según contexto.
- Protección contra CSRF, XSS, inyección, abuso de carga y acceso directo inseguro a objetos.
- Límites de frecuencia por identidad, IP y operación sensible.
- URLs de carga y descarga firmadas con alcance y expiración reducidos.
- Gestión de secretos fuera del repositorio y rotación periódica.
- Dependencias actualizadas mediante revisión automatizada de vulnerabilidades.
- encabezados de seguridad y política de contenido restrictiva en clientes web.
- separación de entornos y prohibición de usar datos reales en desarrollo.
- auditoría de acciones administrativas y cambios de permisos.
- proceso documentado para incidentes, revocación y recuperación.

Antes de una liberación pública se realizarán revisión de amenazas, pruebas de autorización sobre recursos, verificación del pipeline de archivos y análisis automatizado de dependencias y configuración.

### 11.16 Escalabilidad

La estrategia de escala será gradual y basada en medición.

Orden de evolución:

1. Optimizar consultas, índices, tamaños de respuesta y derivados multimedia.
2. Escalar horizontalmente API y trabajadores asíncronos sin estado local persistente.
3. Incorporar caché para contenido público con invalidación por publicación o moderación.
4. Agregar réplicas de lectura o partición operativa solo cuando las métricas lo justifiquen.
5. Migrar búsqueda a un motor dedicado si relevancia, volumen o filtros lo requieren.
6. Extraer módulos a servicios independientes únicamente ante límites concretos del monolito modular.

La CDN absorberá la mayor parte del tráfico de imágenes. Los límites de carga, paginación y cuotas protegerán almacenamiento y procesamiento. Toda optimización deberá preservar consistencia de publicación, privacidad y capacidad de retirar contenido.

## 12. Stack tecnológico

### 12.1 Criterios para selección tecnológica

El stack se selecciona según los siguientes criterios, en orden de prioridad:

1. seguridad y mantenimiento a largo plazo;
2. velocidad de entrega del MVP sin comprometer reglas centrales;
3. capacidad para servir contenido público indexable y una experiencia móvil responsive;
4. soporte sólido para TypeScript y contratos compartidos;
5. portabilidad de datos y archivos;
6. ecosistema maduro, documentación y disponibilidad de profesionales;
7. costo operativo previsible;
8. observabilidad, testing y automatización;
9. posibilidad de evolución sin adoptar infraestructura distribuida prematura.

Las versiones exactas se fijarán en archivos de dependencias al iniciar la implementación. Se utilizarán versiones estables con soporte vigente, evitando canales experimentales en componentes críticos.

### 12.2 Tecnología frontend

Decisión: **Next.js con React y TypeScript** para la aplicación web pública y autenticada.

Justificación:

- permite renderizado en servidor para perfiles y obras públicas;
- ofrece rutas, metadatos y estrategia de caché adecuadas para enlaces compartibles;
- conserva una única base web para escritorio y móvil durante el MVP;
- integra tipado, testing y optimización de recursos;
- permite separar áreas públicas y privadas sin incorporar otro framework.

Decisiones complementarias:

- **TanStack Query** para datos remotos, caché e invalidación en áreas interactivas.
- **React Hook Form** para formularios y **Zod** para esquemas de validación compartibles, sin asumir que la validación cliente es autoritativa.
- CSS mediante **Tailwind CSS** apoyado en tokens semánticos propios; los componentes de HABITTUS no dependerán de estilos arbitrarios dispersos.
- Componentes accesibles sin estilo de **Radix UI** cuando resuelvan patrones complejos; el aspecto visual será propio.
- Generación de contratos a partir de OpenAPI para evitar tipos manuales divergentes.

La consola administrativa utilizará Next.js y el mismo lenguaje, pero tendrá aplicación, rutas, permisos y despliegue separados del frontend público.

### 12.3 Tecnología móvil

Decisión para el MVP: **aplicación web responsive y PWA limitada**, sin aplicación nativa obligatoria.

La PWA podrá ofrecer instalación básica y acceso directo, pero no prometerá sincronización offline completa ni notificaciones push.

Decisión condicionada para una fase posterior: **React Native con Expo y TypeScript** si se aprueba una aplicación móvil dedicada.

La elección posterior se fundamenta en reutilización de lenguaje, contratos, validaciones y tokens, no en compartir toda la capa visual. Cualquier dependencia nativa deberá evaluarse por mantenimiento, compatibilidad con builds reproducibles y soporte de carga multimedia.

No se iniciarán proyectos separados de iOS y Android en el MVP.

### 12.4 Tecnología backend

Decisión: **Node.js con TypeScript y NestJS**, desplegado como monolito modular.

Justificación:

- estructura explícita de módulos, inyección de dependencias y políticas transversales;
- coherencia de lenguaje y contratos con frontend;
- ecosistema maduro para autenticación, OpenAPI, colas y validación;
- capacidad de ejecutar API y trabajadores sin introducir múltiples plataformas.

Decisiones complementarias:

- API HTTP REST documentada con **OpenAPI**.
- **Prisma ORM** para acceso tipado, migraciones y transacciones, manteniendo SQL explícito cuando optimización o integridad lo requieran.
- **BullMQ** sobre Redis para trabajos asíncronos de multimedia y email.
- Validación de entrada en el borde de API y reglas adicionales en casos de uso de dominio.

GraphQL, microservicios y arquitecturas basadas exclusivamente en funciones serverless no se adoptarán en el MVP porque agregan complejidad sin una necesidad funcional demostrada.

### 12.5 Base de datos

Decisión: **PostgreSQL gestionado**.

Uso:

- usuarios internos y referencias de identidad;
- perfiles, portfolios, obras y estados;
- taxonomías y relaciones N:M;
- configuración de contacto y ubicación;
- reportes, acciones administrativas y auditoría;
- búsqueda inicial mediante índices relacionales y de texto.

Se habilitarán backups automáticos, recuperación a un punto en el tiempo cuando el proveedor lo permita, cifrado y conexiones TLS. El proveedor debe permitir exportación estándar y acceso a métricas. Redis no reemplazará PostgreSQL: se utilizará únicamente para colas, límites temporales y caché no autoritativa.

### 12.6 Almacenamiento de imágenes y archivos

Decisión: **almacenamiento de objetos compatible con S3 más CDN**, separado de PostgreSQL.

El procesamiento se realizará con **Sharp/libvips** en trabajadores controlados. Se generarán derivados WebP o AVIF y una alternativa compatible. Los originales permanecerán privados y la entrega pública utilizará rutas gestionadas por el sistema.

El proveedor concreto deberá ofrecer:

- URLs firmadas;
- políticas de ciclo de vida;
- cifrado en reposo;
- versionado o protección ante eliminación accidental;
- eventos o confirmación de carga;
- exportación mediante API estándar;
- integración con CDN y control de caché.

### 12.7 Autenticación

Decisión: **proveedor gestionado compatible con OIDC/OAuth 2.0** integrado a través de una capa propia de identidad.

La selección comercial definitiva se realizará antes de implementar el flujo, comparando residencia de datos, exportabilidad, MFA, recuperación, costo por usuario activo y soporte de sesiones web seguras. El dominio almacenará un identificador externo opaco y no dependerá de estructuras propietarias adicionales.

No se construirá un sistema propio de contraseñas. Las cuentas administrativas requerirán MFA y las sesiones web utilizarán cookies seguras administradas en servidor.

### 12.8 Servicios de email

Decisión: proveedor de email transaccional con API, webhooks firmados, métricas de entrega y soporte de dominios autenticados mediante SPF, DKIM y DMARC.

Los emails se enviarán desde BullMQ, con claves idempotentes, reintentos limitados y plantillas versionadas. El MVP incluirá solo comunicaciones de acceso, recuperación, seguridad y operación aprobada. Las campañas comerciales requerirán sistema de consentimiento separado.

### 12.9 Servicios de analítica

Decisión: **PostHog** en despliegue gestionado o alternativa equivalente con controles de privacidad.

Reglas:

- catálogo de eventos aprobado antes de instrumentar;
- identificadores internos seudónimos cuando no sea necesario identificar personas;
- no enviar biografías, obras, datos de contacto, términos libres ni contenido de formularios;
- respetar consentimiento y legislación aplicable;
- desactivar captura indiscriminada de sesiones y propiedades automáticas sensibles;
- definir retención limitada.

Las métricas descritas en el Capítulo 4 deben calcularse desde eventos explícitos y datos agregados, no desde vigilancia general del comportamiento.

### 12.10 Servicios de monitoreo

Decisión: **Sentry** para errores y trazas de frontend/backend, complementado con métricas y logs estructurados de la plataforma de infraestructura.

Configuración obligatoria:

- entornos separados;
- releases identificables por commit;
- mapas de fuente protegidos;
- redacción de datos personales y tokens;
- muestreo controlado;
- alertas con responsable;
- integración con el flujo de incidentes.

La disponibilidad externa de rutas críticas se comprobará mediante monitoreo sintético independiente del proveedor de hosting.

### 12.11 Infraestructura y despliegue

Decisión inicial:

- contenedores OCI para API y trabajadores;
- frontend Next.js desplegado en una plataforma con soporte de renderizado en servidor;
- PostgreSQL, Redis y almacenamiento como servicios gestionados;
- CDN delante de recursos públicos;
- infraestructura declarada mediante **Terraform** una vez estabilizados los recursos iniciales;
- tres entornos: desarrollo local, preproducción y producción.

El pipeline de CI/CD se ejecutará en GitHub Actions e incluirá instalación reproducible, lint, comprobación de tipos, tests, build, análisis de dependencias y migraciones controladas. Producción requerirá aprobación y estrategia de rollback. Los secretos residirán en el gestor del proveedor, nunca en Git ni en imágenes de contenedor.

### 12.12 Herramientas de desarrollo

Herramientas aprobadas:

- **pnpm** como gestor de paquetes;
- monorepositorio gestionado con **Turborepo** para web, administración, API, trabajadores y paquetes compartidos;
- **ESLint** y **Prettier** para calidad y formato;
- **Vitest** para pruebas unitarias y de integración de TypeScript;
- **Testing Library** para comportamiento de componentes;
- **Playwright** para flujos end-to-end web;
- **Storybook** para documentar componentes del sistema de diseño;
- **Docker Compose** para dependencias locales;
- OpenAPI y generación de cliente para contratos;
- **Conventional Commits** y revisión obligatoria por pull request.

La estructura inicial prevista será `apps/web`, `apps/admin`, `apps/api`, `apps/worker` y paquetes compartidos para contratos, configuración y sistema de diseño. Esta organización es una decisión documental; no implica iniciar código en esta etapa.

### 12.13 Tecnologías descartadas y motivos

Decisiones descartadas para el MVP:

| Tecnología o enfoque | Motivo |
|---|---|
| Aplicaciones nativas iOS y Android desde el inicio | Duplican entrega y mantenimiento antes de validar necesidades nativas |
| Microservicios | Aumentan complejidad operativa y consistencia sin escala demostrada |
| GraphQL | No aporta ventaja suficiente para los casos de uso iniciales frente a REST tipado |
| Base de datos documental como fuente principal | El modelo tiene relaciones, estados e integridad relacional centrales |
| Binarios en PostgreSQL | Dificultan entrega, escalado y ciclo de vida multimedia |
| Backend dependiente de funciones aisladas | Complica transacciones, procesamiento multimedia y portabilidad inicial |
| Autenticación propia con contraseñas | Amplía superficie de seguridad sin valor diferencial |
| Motor de búsqueda dedicado desde el día uno | PostgreSQL cubre filtros y texto iniciales con menor operación |
| CMS genérico como núcleo | No representa adecuadamente propiedad, publicación y reglas profesionales del dominio |
| Feed social y métricas de popularidad | Contradicen alcance y posicionamiento aprobados |

Estas decisiones podrán revisarse mediante un registro técnico si cambian los requisitos o las métricas operativas.

## 13. Diseño de producto y experiencia de usuario

### 13.1 Principios de UX

La experiencia de HABITTUS debe facilitar una tarea profesional: construir, mantener, consultar y compartir una presentación artística estructurada.

Principios:

- **La obra tiene prioridad:** la interfaz debe acompañar el contenido sin competir visualmente con él.
- **Contexto antes que interacción social:** título, técnica, año, materiales y descripción deben ser comprensibles sin depender de métricas de popularidad.
- **Progresión:** el artista puede guardar borradores y completar su perfil por etapas, pero la publicación exige mínimos claros.
- **Control explícito:** publicar, ocultar, eliminar y mostrar contacto deben ser decisiones visibles y confirmables.
- **Consistencia:** perfiles y obras deben seguir patrones previsibles sin uniformar la identidad artística.
- **Accesibilidad:** toda tarea esencial debe poder completarse con teclado, lector de pantalla y ampliación.
- **Prevención de errores:** validaciones y límites se comunican antes de perder información o iniciar cargas costosas.
- **Transparencia:** estados, procesamiento, visibilidad y acciones administrativas deben explicarse con lenguaje directo.
- **Móvil primero, no móvil exclusivo:** las tareas centrales deben funcionar desde pantallas pequeñas y ampliarse en escritorio.

### 13.2 Principios visuales

El lenguaje visual será neutral, editorial y subordinado a la diversidad de obras.

Decisiones:

- Base cromática neutra con colores semánticos reservados para estado, acción y error.
- Tipografía de interfaz legible y consistente; títulos artísticos podrán tener jerarquía editorial sin sacrificar lectura.
- Espaciado generoso y ritmo estable para diferenciar información sin marcos decorativos excesivos.
- Imágenes mostradas respetando relación de aspecto; no se recortarán obras de forma destructiva por defecto.
- Contenedores con ancho de lectura limitado para biografías y descripciones extensas.
- Movimiento discreto, funcional y compatible con preferencia de reducción de animaciones.
- Iconos acompañados por texto cuando su significado no sea universal.
- Estados interactivos distinguibles sin depender solo del color.

La personalización visual completa de cada perfil queda fuera del MVP. HABITTUS debe ofrecer consistencia profesional y permitir que la identidad emerja del contenido y la información del artista.

### 13.3 Tono de la plataforma

El tono será profesional, claro, respetuoso y no paternalista.

Reglas editoriales:

- Usar términos reconocibles para el ecosistema artístico y explicar los términos técnicos.
- Evitar lenguaje competitivo, gamificado o asociado a productividad personal.
- No presentar métricas de actividad como valoración de calidad artística.
- Describir acciones y consecuencias: “Publicar perfil”, “Ocultar obra” o “Guardar borrador”.
- Escribir errores con causa comprensible y siguiente acción posible.
- Evitar promesas de venta, representación, contratación o visibilidad garantizada.
- Respetar nombre profesional, pronombres y formas de identificación declaradas.
- Diferenciar recomendaciones de carga de requisitos obligatorios.

### 13.4 Accesibilidad

Objetivo: cumplir **WCAG 2.2 nivel AA** en la experiencia web y conservar equivalencia en clientes futuros.

Requisitos:

- navegación completa por teclado con foco visible y orden lógico;
- estructura semántica de encabezados, regiones, listas y formularios;
- nombres accesibles para controles e imágenes funcionales;
- contraste mínimo AA en texto, controles y estados;
- objetivos táctiles adecuados y separación suficiente;
- errores asociados al campo y resumen de errores en formularios extensos;
- texto alternativo para imágenes de obra, definido por el artista cuando corresponda;
- alternativa textual para información transmitida visualmente;
- soporte de zoom al 200 % sin pérdida de funcionalidad y reflow compatible;
- respeto por preferencias de movimiento reducido y contraste cuando estén disponibles;
- pruebas automáticas complementadas con revisión manual de teclado y lector de pantalla.

El texto alternativo describe la imagen para acceso, no reemplaza título, ficha técnica ni interpretación curatorial. Si el artista marca una imagen como decorativa, la decisión debe ser compatible con el propósito de la vista.

### 13.5 Internacionalización

El idioma inicial del producto será español. La arquitectura quedará preparada para traducción sin implementar internacionalización avanzada en el MVP.

Decisiones:

- Los textos de interfaz no se incrustarán de forma dispersa; se organizarán en catálogos traducibles.
- Fechas, números y unidades se formatearán según configuración regional.
- Los nombres propios, títulos de obra y textos del artista no se traducirán automáticamente.
- El modelo distinguirá contenido editorial de plataforma y contenido aportado por usuarios.
- Las taxonomías globales deberán admitir etiquetas traducibles sin cambiar sus identificadores.
- La interfaz tolerará expansión de texto y caracteres Unicode.
- La dirección visual inicial será izquierda a derecha; soporte RTL requerirá validación específica futura.

Agregar un idioma exigirá traducción profesional, revisión de taxonomías, contenido legal, emails y pruebas completas, no solo sustitución de etiquetas.

### 13.6 Diseño responsive

La misma capacidad funcional esencial debe estar disponible en móvil, tablet y escritorio.

Reglas:

- El diseño partirá de una columna móvil y agregará columnas solo cuando mejoren comprensión.
- Los puntos de quiebre responderán al contenido, no a modelos de dispositivos específicos.
- Las grillas de obras conservarán proporciones y evitarán miniaturas ilegibles.
- Formularios extensos se dividirán en grupos lógicos sin ocultar progreso ni estado guardado.
- Tablas administrativas podrán transformarse en listas estructuradas en pantallas estrechas, preservando acciones y contexto.
- Navegación, modales y menús deben funcionar con toque, teclado y puntero.
- No se exigirán gestos sin alternativa visible.
- La información profesional no quedará oculta exclusivamente por reducción de pantalla.

Se probarán anchos representativos desde 320 px y situaciones de zoom, orientación horizontal y texto ampliado.

### 13.7 Experiencia móvil

La experiencia móvil priorizará consulta, edición progresiva y carga de imágenes sin convertir el producto en una red social.

Requisitos:

- acceso rápido al perfil propio y estado de publicación;
- selección de imágenes desde capacidades estándar del navegador;
- información previa de formato, tamaño y progreso de carga;
- posibilidad de reintentar cargas fallidas sin duplicar obras;
- formularios con teclados adecuados por tipo de dato y guardado seguro;
- acciones primarias alcanzables sin interferir con contenido;
- enlaces de perfil compartibles mediante capacidades del sistema cuando estén disponibles;
- consumo de datos controlado mediante derivados de imagen y carga diferida.

El MVP no garantizará edición sin conexión, carga en segundo plano después de cerrar el navegador ni notificaciones push. Estas limitaciones deben comunicarse cuando afecten una operación.

### 13.8 Estados vacíos

Los estados vacíos deben explicar por qué no hay contenido y ofrecer una acción pertinente, sin simular actividad.

Casos mínimos:

- perfil propio sin obras: explicar el valor de agregar la primera obra y ofrecer la acción correspondiente;
- portfolio público sin obras publicadas: comunicar que no hay contenido disponible sin exponer borradores;
- búsqueda sin resultados: conservar criterios visibles y permitir ajustarlos o limpiarlos;
- taxonomía sin perfiles: evitar páginas engañosas y ofrecer retorno a exploración;
- reportes administrativos vacíos: indicar que no hay elementos pendientes y fecha de actualización;
- canales de contacto ausentes: no mostrar bloques vacíos ni inferir datos.

Un estado vacío no debe usar datos ficticios que puedan confundirse con obras o perfiles reales.

### 13.9 Estados de carga

Los estados de carga deben mantener contexto y evitar acciones duplicadas.

Reglas:

- Mostrar indicadores locales en la región afectada, no bloquear toda la aplicación sin necesidad.
- Usar esqueletos solo cuando representen de forma estable la estructura esperada.
- Indicar progreso porcentual en cargas multimedia cuando esté disponible.
- Diferenciar “subiendo”, “procesando” y “publicado”; cerrar la página no debe presentarse como seguro si interrumpe la operación.
- Deshabilitar temporalmente una acción enviada cuando repetirla pueda duplicar efectos.
- Permitir cancelar cargas cuando la infraestructura lo soporte.
- Mantener contenido previo durante recargas para evitar saltos innecesarios.
- Informar cuando una tarea asíncrona continúa y cómo consultar su resultado.

### 13.10 Estados de error

Los errores se clasificarán y presentarán según posibilidad de recuperación.

Categorías:

- **Validación:** identificar campo, regla y corrección posible sin borrar datos ingresados.
- **Autenticación:** permitir reingreso seguro y preservar la intención cuando no comprometa privacidad.
- **Autorización:** explicar que la acción no está permitida sin revelar existencia de recursos privados.
- **Conectividad:** ofrecer reintento y conservar borradores locales solo cuando exista una garantía explícita.
- **Carga multimedia:** indicar archivo afectado, motivo y límites admitidos.
- **Procesamiento:** mantener el recurso en estado seguro y permitir reintento o soporte.
- **No encontrado:** diferenciar enlace inválido de contenido retirado solo si la privacidad lo permite.
- **Sistema:** mostrar referencia de soporte sin exponer stack, proveedor ni datos internos.

Los errores técnicos deben enviarse al monitoreo con correlación, mientras que el usuario recibe lenguaje accionable. Ningún error debe publicar datos privados o confirmar recursos a usuarios no autorizados.

### 13.11 Consideraciones para contenido visual/artístico

HABITTUS debe preservar la integridad de representación de obras y prácticas diversas.

Reglas de producto:

- Mantener relación de aspecto y orientación registradas; cualquier recorte editorial debe ser explícito y reversible.
- No aplicar filtros, marcas de agua ni mejoras automáticas que alteren la obra sin decisión documentada del artista.
- Separar imagen de portada, imágenes de detalle y registro de montaje mediante roles de archivo comprensibles.
- Mostrar ficha técnica junto a la obra sin superponer información sobre la imagen principal.
- Admitir que técnica, materiales, dimensiones, duración o año no aplican de igual manera a todas las disciplinas.
- Permitir múltiples imágenes cuando sean necesarias para representar volumen, instalación, proceso o performance, dentro de los límites del MVP.
- Diferenciar claramente autoría, créditos fotográficos y colaboradores cuando esos datos estén disponibles.
- No habilitar descarga de originales desde vistas públicas.
- Mantener una calidad visual suficiente en pantallas densas sin entregar archivos mayores a los necesarios.
- Evitar rankings o tratamientos visuales que impliquen valoración artística automática.
- Comunicar cuando una obra es registro documental de una práctica temporal y no una pieza bidimensional independiente.

Video, audio, vistas 3D, realidad aumentada y documentación compleja no se incorporarán por inferencia. Cada formato requerirá reglas de accesibilidad, derechos, procesamiento, costo y presentación antes de entrar al alcance.

## 14. Sistema de diseño visual

### 14.1 Propósito y alcance

El sistema de diseño visual de HABITTUS debe proporcionar una base coherente, accesible y reutilizable para la experiencia pública, el área profesional y la administración. Su función es reducir decisiones aisladas, preservar la prioridad de las obras y permitir que nuevas interfaces mantengan los mismos criterios funcionales.

El sistema incluirá:

- fundamentos visuales y tokens;
- tipografía, color, espaciado, grillas, bordes, elevación y movimiento;
- componentes básicos y compuestos;
- patrones de formularios, contenido artístico, navegación y feedback;
- estados interactivos, de datos y de sistema;
- reglas de accesibilidad, uso y documentación.

El sistema no permitirá personalización integral de colores, tipografías o estructura por perfil durante el MVP. La identidad del artista se expresará mediante su nombre, obra, biografía y selección de contenido, dentro de una presentación común y profesional.

### 14.2 Principios del sistema visual

Decisiones rectoras:

- **Neutralidad editorial:** la interfaz debe acompañar el contenido artístico sin imponer una estética temática sobre las obras.
- **Jerarquía informativa:** tamaño, peso, espacio y posición deben expresar prioridad antes de recurrir al color.
- **Consistencia semántica:** una misma acción, estado o nivel de información debe representarse del mismo modo en toda la plataforma.
- **Accesibilidad verificable:** contraste, foco, tamaño táctil y semántica son requisitos del componente, no ajustes posteriores.
- **Densidad contextual:** el área pública será respirada y editorial; la gestión y administración podrán ser más densas sin perder legibilidad.
- **Progresividad:** los componentes deben admitir contenido incompleto, cargas asíncronas y evolución del MVP sin variantes improvisadas.
- **Independencia del tema:** los tokens semánticos permitirán evolucionar el aspecto visual sin modificar reglas funcionales.

### 14.3 Tokens de diseño

Los valores visuales se definirán mediante tokens reutilizables y no como valores aislados por pantalla.

Categorías obligatorias:

- colores primitivos y semánticos;
- familias, tamaños, pesos y alturas de línea tipográficas;
- escala de espaciado;
- tamaños de contenedor y puntos de quiebre;
- radios de borde;
- grosores de borde;
- sombras y elevación;
- tamaños de iconos y controles;
- duración y curva de movimiento;
- capas de superposición.

Convenciones:

- Los componentes consumirán tokens semánticos como `texto-principal`, `fondo-superficie`, `borde-sutil`, `acción-primaria` o `estado-error`; los nombres no deben depender de un color concreto.
- La escala base de espaciado será de 4 px, con valores aprobados de 4, 8, 12, 16, 24, 32, 48, 64 y 96 px.
- Los radios aprobados serán 4 px para controles compactos, 8 px para campos y tarjetas, y 999 px solo para elementos circulares o etiquetas tipo píldora.
- Los valores excepcionales deberán documentarse en el sistema y no definirse dentro de una pantalla.
- La nomenclatura debe ser compartida entre diseño y desarrollo, aunque su representación técnica se defina posteriormente.

### 14.4 Paleta cromática

La paleta inicial utilizará una base neutra de alto contraste y un único acento funcional sobrio.

Roles cromáticos:

| Rol | Uso permitido |
|---|---|
| Fondo base | Superficie general de páginas públicas y privadas |
| Superficie elevada | Tarjetas, paneles, menús y diálogos |
| Texto principal | Títulos, datos esenciales y contenido de lectura |
| Texto secundario | Metadatos, ayudas y contexto complementario |
| Borde sutil | Separación estructural no interactiva |
| Acción primaria | Acciones principales, enlaces activos y foco reforzado |
| Éxito | Confirmaciones y estados completados |
| Advertencia | Riesgos reversibles o atención requerida |
| Error | Fallos, validaciones y acciones destructivas |
| Información | Mensajes neutrales de sistema |

Reglas:

- El color de acción primaria no se usará como decoración ni como indicador de prestigio artístico.
- Los estados nunca dependerán exclusivamente del color; incluirán texto, icono o patrón adicional.
- Texto normal y controles deben cumplir contraste WCAG 2.2 AA.
- Las imágenes no se utilizarán como fondo de texto esencial salvo que exista una superficie que garantice contraste.
- Las categorías artísticas no recibirán colores fijos durante el MVP, evitando asociaciones jerárquicas o culturales arbitrarias.
- El tema oscuro no forma parte del MVP. Los tokens deberán permitir incorporarlo sin redefinir componentes.

### 14.5 Tipografía y jerarquía textual

HABITTUS utilizará una familia sans serif de interfaz, de licencia abierta, con amplia cobertura Unicode y buena legibilidad en tamaños pequeños. Se priorizará una fuente variable para reducir peso de descarga. No se introducirán familias decorativas en la interfaz del MVP.

Escala tipográfica inicial:

| Estilo | Tamaño orientativo | Uso principal |
|---|---:|---|
| Display | 48/56 px | Presentación editorial excepcional en escritorio |
| Título 1 | 36/44 px | Nombre de artista o encabezado principal |
| Título 2 | 28/36 px | Secciones principales |
| Título 3 | 22/30 px | Subsecciones y títulos de obra |
| Cuerpo destacado | 18/28 px | Introducciones y biografías breves |
| Cuerpo | 16/24 px | Lectura y formularios |
| Cuerpo pequeño | 14/20 px | Metadatos y ayudas |
| Etiqueta | 12/16 px | Estados y categorías breves, nunca texto extenso |

Reglas:

- En pantallas pequeñas, los títulos mayores reducirán tamaño mediante tokens responsive sin perder orden jerárquico.
- El peso regular será el estándar de lectura; semibold se reservará para énfasis y acciones.
- No se utilizarán mayúsculas sostenidas en párrafos, botones extensos ni mensajes.
- Las líneas de lectura tendrán un máximo aproximado de 65 a 75 caracteres.
- Títulos de obras, nombres propios y textos aportados por artistas conservarán su escritura, salvo controles de seguridad y límites definidos.
- La jerarquía visual debe corresponder con la jerarquía semántica del documento.

### 14.6 Grilla, contenedores y composición

La composición será responsive y basada en una grilla flexible.

Decisiones:

- Margen lateral mínimo de 16 px en móvil, 24 px en tablet y 32 px en escritorio.
- Contenedor general máximo de 1280 px para listados y contenido visual.
- Contenedor de lectura máximo de 720 px para biografías, declaraciones y textos extensos.
- Grilla de 4 columnas en móvil, 8 en tablet y 12 en escritorio como referencia de composición.
- Separación entre columnas de 16 px en móvil y 24 px en anchos superiores.
- Las imágenes de obra pueden superar el ancho de lectura, pero no el contenedor visual aprobado.
- La alineación prioritaria será al inicio; el centrado se reservará para mensajes breves o estados vacíos.

Las grillas de portfolio se adaptarán al contenido sin recortar obras. El MVP podrá utilizar columnas regulares con contenedores de proporción reservada y `object-fit` equivalente a contener, evitando una composición tipo mosaico que genere saltos imprevisibles o altere jerarquías.

### 14.7 Iconografía e imágenes de interfaz

La iconografía utilizará una única familia de trazos consistente, con tamaños base de 16, 20 y 24 px.

Reglas:

- Los iconos no reemplazarán etiquetas en acciones críticas o poco frecuentes.
- Cada icono interactivo tendrá nombre accesible y área táctil mínima de 44 por 44 px.
- Un mismo concepto no utilizará iconos diferentes entre áreas.
- Los iconos de estado se acompañarán con texto cuando la interpretación tenga consecuencias.
- No se utilizarán ilustraciones genéricas para rellenar portfolios o estados vacíos.
- Avatares y miniaturas tendrán alternativa neutra cuando falte imagen, sin inventar identidad visual del usuario.

### 14.8 Componentes básicos

El MVP debe disponer, como mínimo, de los siguientes componentes básicos documentados:

- botón primario, secundario, terciario y destructivo;
- enlace textual y enlace externo;
- campo de texto, área de texto, selector, multiselección y búsqueda;
- casilla, opción única e interruptor cuando el cambio sea inmediato;
- etiqueta, badge de estado y chip de filtro;
- avatar, miniatura y contenedor de imagen;
- divisor, superficie, tarjeta y panel;
- tooltip, menú, popover, diálogo y confirmación;
- indicador de progreso, spinner y esqueleto;
- alerta, mensaje inline, toast y banner;
- breadcrumbs, pestañas y paginación;
- icono y botón de icono.

Cada componente debe documentar:

- propósito y casos en que no debe utilizarse;
- contenido permitido;
- tamaños y variantes;
- estados interactivos;
- comportamiento responsive;
- requisitos de teclado y lector de pantalla;
- ejemplos válidos y errores frecuentes.

### 14.9 Componentes compuestos del dominio

Los componentes compuestos traducen reglas de HABITTUS y no deben convertirse en contenedores visuales genéricos.

Componentes iniciales:

- **Tarjeta de artista:** nombre profesional, disciplinas principales, ubicación pública opcional e imagen representativa cuando exista.
- **Tarjeta de obra:** imagen derivada, título, año y técnica resumida; no muestra métricas de popularidad.
- **Cabecera de perfil:** identidad profesional, disciplinas, ubicación, acciones de compartir o contacto y estado solo para el propietario.
- **Ficha técnica:** conjunto semántico de año, técnica, materiales, dimensiones, duración y créditos aplicables.
- **Galería de obra:** imagen principal y detalles, con selección accesible y relación de aspecto preservada.
- **Editor de obra:** grupos de datos, multimedia, estado editorial y acciones de guardado o publicación.
- **Indicador de completitud:** requisitos cumplidos y pendientes sin presentar puntuación de calidad artística.
- **Selector de disciplinas:** taxonomía controlada con múltiples valores y búsqueda.
- **Canal de contacto:** tipo, valor, etiqueta y control explícito de visibilidad.
- **Registro de moderación:** objeto afectado, motivo, estado, actor y fecha para usuarios autorizados.

### 14.10 Estados de componentes

Todos los componentes interactivos deben contemplar, según corresponda:

- reposo;
- hover para dispositivos con puntero;
- foco visible;
- activo o presionado;
- seleccionado;
- deshabilitado con motivo comprensible cuando sea relevante;
- cargando;
- válido;
- advertencia;
- error;
- solo lectura.

Reglas:

- El foco no se eliminará ni dependerá del hover.
- Un control deshabilitado no ocultará información necesaria para comprender por qué no está disponible.
- Las acciones destructivas usarán variante específica y confirmación proporcional al impacto.
- Los botones en carga conservarán ancho y etiqueta contextual para evitar cambios bruscos.
- Los campos con error conservarán el valor y asociarán el mensaje mediante semántica accesible.
- El estado publicado, borrador, oculto o en revisión debe usar el mismo badge semántico en todas las áreas.

### 14.11 Patrones de formularios

Los formularios deben organizarse por tareas y no por estructura de base de datos.

Decisiones:

- Etiquetas persistentes sobre cada campo; el placeholder no funcionará como etiqueta.
- Campos obligatorios identificados de forma consistente y campos opcionales explicitados cuando reduzca incertidumbre.
- Ayuda previa para formatos, límites y efectos de visibilidad.
- Validación al abandonar un campo cuando resulte útil y validación integral al guardar o publicar.
- Resumen de errores al inicio en formularios extensos, con enlaces a los campos afectados.
- Guardado de borrador separado de publicación.
- Advertencia antes de abandonar cambios no guardados.
- Agrupación en secciones como “Información profesional”, “Ficha técnica”, “Imágenes” y “Visibilidad”.
- Confirmación explícita para eliminar, ocultar o reemplazar contenido publicado.

### 14.12 Feedback y estados del sistema

El sistema utilizará el canal de feedback según persistencia e importancia:

| Patrón | Uso |
|---|---|
| Mensaje inline | Validación o estado asociado a un campo o bloque |
| Toast | Confirmación breve de una acción no crítica y reversible |
| Banner | Situación persistente que afecta una página o cuenta |
| Diálogo | Confirmación o decisión que bloquea temporalmente el flujo |
| Página de estado | Error o ausencia que impide continuar en toda la ruta |
| Progreso | Carga o procesamiento con duración perceptible |

Los mensajes deben indicar resultado y, cuando corresponda, próxima acción. Un toast no será el único registro de un fallo que requiera intervención. Los procesos asíncronos deben conservar estado consultable después de cerrar el mensaje temporal.

### 14.13 Documentación y gobernanza

El sistema de diseño se mantendrá como producto interno versionado.

Reglas de gobernanza:

- Un nuevo componente requiere demostrar que no puede resolverse mediante composición de componentes existentes.
- Los cambios incompatibles deben documentar migración y pantallas afectadas.
- Diseño, producto y desarrollo deben revisar componentes con impacto en reglas de negocio.
- Las variantes no utilizadas se eliminarán para evitar una biblioteca teórica difícil de mantener.
- Cada componente debe validarse en Storybook o herramienta equivalente cuando comience la implementación.
- La accesibilidad formará parte de sus criterios de aceptación.
- Los tokens y componentes aprobados serán la única fuente para construir interfaces del MVP.

## 15. Navegación y estructura de pantallas

### 15.1 Modelo general de navegación

La navegación se organizará en tres contextos separados:

1. **Experiencia pública:** consulta y descubrimiento sin autenticación obligatoria.
2. **Área profesional:** creación y gestión de cuenta, perfil y portfolio para artistas autenticados.
3. **Administración:** moderación y operación mediante una aplicación protegida.

La separación evita exponer controles privados en páginas públicas y permite que cada contexto tenga jerarquía propia. Los enlaces públicos a perfiles y obras deben ser estables, legibles y accesibles directamente sin recorrer la portada.

### 15.2 Navegación global pública

La cabecera pública del MVP contendrá:

- marca HABITTUS con enlace a inicio;
- enlace “Explorar”;
- acceso a búsqueda;
- acción “Ingresar” para visitantes;
- acción “Mi perfil” para artistas autenticados.

En móvil, estos elementos se agruparán en una navegación compacta, pero “Explorar”, búsqueda y acceso a cuenta permanecerán disponibles con un máximo de dos interacciones.

El pie público contendrá únicamente enlaces operativos: acerca de HABITTUS, ayuda o contacto, términos, privacidad, propiedad intelectual y accesibilidad. No repetirá toda la navegación ni incorporará categorías sin contenido suficiente.

### 15.3 Navegación del área profesional

La navegación autenticada tendrá estas secciones de primer nivel:

- **Resumen:** estado del perfil, requisitos pendientes y acciones prioritarias.
- **Perfil:** identidad profesional, biografía, disciplinas, ubicación y enlaces.
- **Portfolio:** listado y gestión de obras o proyectos.
- **Contacto:** canales y visibilidad pública.
- **Cuenta:** acceso, datos privados y desactivación.

Reglas:

- En escritorio se utilizará navegación lateral persistente; en móvil, cabecera compacta y menú de cuenta.
- “Ver perfil público” será una acción contextual visible cuando el perfil esté publicado.
- “Publicar” no será un destino de navegación, sino una acción condicionada por completitud.
- El estado de guardado y publicación permanecerá visible en editores.
- Configuraciones poco frecuentes se agruparán en Cuenta y no competirán con tareas principales.
- No habrá una sección independiente de estadísticas en el MVP.

### 15.4 Navegación administrativa

La consola administrativa tendrá las siguientes secciones:

- Panel operativo.
- Contenido pendiente o reportado.
- Perfiles.
- Obras y archivos.
- Usuarios.
- Taxonomías.
- Auditoría.

La navegación mostrará solo secciones permitidas por el rol. No se incluirán métricas comerciales, pagos ni herramientas curatoriales avanzadas en el MVP. Toda transición desde un reporte hacia el recurso afectado debe conservar contexto y permitir volver a la cola de trabajo.

### 15.5 Mapa de pantallas del MVP

Pantallas públicas:

| Pantalla | Objetivo | Acceso principal |
|---|---|---|
| Inicio | Explicar la función de HABITTUS y orientar hacia exploración o registro | Ruta raíz |
| Explorar artistas | Consultar perfiles publicados mediante listado y filtros básicos | Navegación global |
| Resultados de búsqueda | Mostrar coincidencias y criterios aplicados | Búsqueda global |
| Perfil público | Presentar identidad, práctica, portfolio y contacto visible | Enlace estable o resultados |
| Detalle de obra | Mostrar imágenes y ficha contextual de una obra publicada | Portfolio del artista |
| Acceso | Iniciar sesión o recuperar acceso | Navegación global |
| Registro | Crear cuenta de artista | Inicio o acceso |
| Páginas legales | Informar términos, privacidad y propiedad intelectual | Pie global |

Pantallas autenticadas:

| Pantalla | Objetivo | Acceso principal |
|---|---|---|
| Resumen profesional | Mostrar estado, pendientes y accesos de gestión | Entrada al área privada |
| Crear/editar perfil | Gestionar información profesional | Navegación Perfil |
| Gestionar portfolio | Listar, ordenar y administrar obras | Navegación Portfolio |
| Crear/editar obra | Gestionar ficha, imágenes y estado | Portfolio |
| Gestionar contacto | Definir canales y visibilidad | Navegación Contacto |
| Vista previa | Revisar representación antes de publicar | Editores |
| Cuenta | Gestionar acceso, datos privados y desactivación | Navegación Cuenta |

Pantallas administrativas:

| Pantalla | Objetivo |
|---|---|
| Panel operativo | Resumir elementos que requieren intervención |
| Cola de revisión | Priorizar y filtrar reportes o contenido pendiente |
| Detalle de revisión | Consultar contexto y ejecutar una acción documentada |
| Gestión de usuario | Consultar estado y aplicar restricciones autorizadas |
| Gestión de taxonomía | Crear, editar, ordenar o desactivar valores globales |
| Auditoría | Consultar acciones administrativas registradas |

### 15.6 Jerarquía de la pantalla de inicio

La pantalla de inicio debe orientar sin comportarse como feed social.

Orden de contenido:

1. Definición breve y funcional de HABITTUS.
2. Acciones diferenciadas para explorar perfiles o crear presencia profesional.
3. Selección limitada de perfiles publicados, cuando exista criterio editorial u operativo explícito.
4. Explicación breve de la estructura profesional: perfil, portfolio y contacto.
5. Información de confianza, propiedad del contenido y control del artista.

No se mostrarán contadores de popularidad, actividad infinita, tendencias automáticas ni urgencia artificial.

### 15.7 Jerarquía de exploración y búsqueda

La pantalla de exploración tendrá:

1. título y descripción breve del alcance;
2. búsqueda textual;
3. filtros disponibles;
4. resumen de criterios y cantidad de resultados cuando sea confiable;
5. listado de perfiles;
6. paginación o carga incremental controlada;
7. estado vacío o error.

Filtros iniciales:

- disciplina;
- categoría artística;
- ubicación general publicada;
- técnica o material normalizado cuando exista cobertura suficiente.

Los filtros activos serán visibles y removibles individualmente. El orden inicial no expresará calidad artística y deberá seguir la regla de relevancia definida en el Capítulo 11.

### 15.8 Jerarquía del perfil público

La pantalla de perfil público seguirá este orden:

1. Nombre profesional o artístico.
2. Disciplinas principales y ubicación pública opcional.
3. Acción de compartir y contacto, si el artista habilitó canales.
4. Imagen representativa opcional.
5. Biografía o presentación profesional.
6. Portfolio publicado.
7. Enlaces profesionales externos.
8. Información complementaria aprobada para el MVP.

Reglas:

- Los borradores, estados internos y datos privados no deben aparecer.
- El portfolio tendrá prioridad sobre enlaces externos, sin bloquear el acceso al contacto.
- Si falta una sección opcional, no se mostrará un contenedor vacío.
- El propietario autenticado verá una franja separada con acceso a edición; esta no formará parte del contenido público compartido.
- El enlace canónico se mantendrá estable ante cambios del nombre visible; cualquier alias legible deberá redirigir de manera segura.

### 15.9 Jerarquía del detalle de obra

El detalle de obra contendrá:

1. Imagen principal preservando proporción.
2. Navegación de imágenes adicionales, si existen.
3. Título y año.
4. Ficha técnica aplicable.
5. Descripción o contexto.
6. Créditos y colaboradores informados.
7. Estado de disponibilidad solo cuando el artista decida publicarlo.
8. Enlace de retorno al perfil y portfolio del artista.

La navegación entre imágenes debe ser accesible y no bloquear zoom del navegador. No se mostrará descarga del original, precio, compra, likes, comentarios ni obras “similares” algorítmicas en el MVP.

### 15.10 Jerarquía del resumen profesional

El resumen privado debe responder tres preguntas:

- ¿Cuál es el estado actual del perfil?
- ¿Qué falta para publicarlo o mantenerlo completo?
- ¿Cuál es la siguiente acción útil?

Contenido, en orden:

1. Estado del perfil y última actualización.
2. Acción principal: continuar perfil, agregar obra, revisar o ver perfil público.
3. Requisitos de publicación cumplidos y pendientes.
4. Resumen de obras por estado.
5. Alertas operativas, rechazos de archivo o intervenciones administrativas que requieran acción.

No se mostrarán indicadores de vanidad ni comparaciones con otros artistas.

### 15.11 Jerarquía de gestión de portfolio

La gestión de portfolio incluirá:

- encabezado con cantidad y límites aplicables;
- acción “Agregar obra”;
- filtros por estado: todas, borradores, publicadas y ocultas;
- listado con miniatura, título, año, estado y actualización;
- acciones contextuales: editar, previsualizar, publicar u ocultar;
- ordenamiento manual si está habilitado para el MVP;
- paginación cuando el volumen lo requiera.

Las acciones masivas no forman parte del MVP salvo selección y eliminación operacional expresamente aprobadas. Eliminar y ocultar deben presentarse como acciones diferentes.

### 15.12 Flujos de navegación críticos

#### Registro a publicación

1. Inicio o registro.
2. Creación de cuenta.
3. Creación de perfil básico.
4. Resumen con requisitos pendientes.
5. Creación de primera obra.
6. Vista previa.
7. Corrección de requisitos.
8. Publicación.
9. Perfil público.

#### Descubrimiento a contacto

1. Inicio o exploración.
2. Búsqueda o filtro.
3. Perfil público.
4. Detalle de obra opcional.
5. Retorno al perfil.
6. Consulta del canal de contacto habilitado o enlace profesional.

#### Moderación

1. Cola de revisión.
2. Detalle del reporte o recurso.
3. Consulta de contexto e historial.
4. Acción permitida y registro de motivo.
5. Confirmación.
6. Retorno a la cola preservando filtros.

Cada flujo debe permitir volver sin pérdida indebida de contexto y debe impedir saltos hacia recursos privados mediante manipulación de URL.

### 15.13 URLs, enlaces y retorno

Decisiones:

- Cada perfil publicado tendrá URL canónica estable.
- Cada obra publicada tendrá URL propia subordinada conceptualmente al perfil, aunque el identificador técnico sea independiente.
- Búsquedas y filtros relevantes se representarán en la URL para poder compartir y recuperar resultados.
- Las rutas privadas no utilizarán datos personales como identificadores.
- Breadcrumbs se mostrarán en jerarquías de más de un nivel, especialmente obra, administración y configuración.
- El botón Atrás del navegador debe conservar comportamiento esperado; no se reemplazará por navegación interna incompatible.
- Las redirecciones después de autenticación solo admitirán destinos internos validados.
- Los enlaces a contenido oculto o eliminado responderán sin filtrar información privada.

### 15.14 Navegación responsive y accesible

Requisitos:

- La navegación global será alcanzable por teclado y tendrá enlace para saltar al contenido.
- El elemento activo se comunicará visual y semánticamente.
- Los menús móviles gestionarán foco, cierre y retorno al activador.
- Los diálogos no se utilizarán como sustitutos de páginas complejas.
- Los breadcrumbs podrán abreviarse visualmente en móvil sin perder nombre accesible.
- Las acciones frecuentes no dependerán de hover.
- Los cambios de ruta anunciarán título o encabezado principal a tecnologías de asistencia.
- El foco se ubicará de forma predecible después de guardar, eliminar, filtrar o cambiar de página.

### 15.15 Estados transversales de pantalla

Toda pantalla que consuma datos debe definir:

- carga inicial;
- contenido disponible;
- contenido vacío;
- error recuperable;
- error no recuperable;
- acceso no autorizado;
- recurso no encontrado;
- conectividad interrumpida;
- contenido en procesamiento cuando corresponda.

Las pantallas privadas deben diferenciar falta de permisos de falta de sesión. Las públicas no deben revelar si existe una versión privada del recurso solicitado.

## 16. Arquitectura de información

### 16.1 Objetivo

La arquitectura de información define cómo se agrupa, denomina, relaciona y recupera el contenido de HABITTUS. Debe permitir que artistas representen su práctica con precisión y que visitantes comprendan perfiles y obras sin conocer la estructura interna del sistema.

Objetivos específicos:

- reducir ambigüedad entre cuenta, perfil, portfolio y obra;
- mantener separada la información pública, privada y administrativa;
- ofrecer clasificación flexible sin perder capacidad de búsqueda;
- establecer jerarquías estables para navegación, URLs y metadatos;
- evitar que categorías técnicas sustituyan el discurso del artista;
- permitir evolución del modelo sin romper enlaces ni significado.

### 16.2 Dominios de información

La información se organiza en seis dominios:

1. **Identidad y cuenta:** credenciales externas, estado de cuenta, preferencias y datos privados.
2. **Identidad profesional:** nombre artístico, biografía, disciplinas, ubicación pública, enlaces y contacto.
3. **Producción artística:** portfolios, obras, proyectos, imágenes, fichas técnicas y créditos.
4. **Clasificación y descubrimiento:** disciplinas, categorías, técnicas, materiales, etiquetas y ubicación.
5. **Operación y confianza:** estados, reportes, moderación, auditoría y propiedad intelectual.
6. **Contenido institucional:** información de HABITTUS, ayuda, políticas y textos legales.

Cada dato tendrá un dominio propietario. No se duplicará información para resolver diferencias de pantalla; las vistas compondrán datos desde fuentes definidas.

### 16.3 Jerarquía conceptual principal

La jerarquía del contenido profesional será:

- HABITTUS
  - Artistas
    - Perfil profesional
      - Portfolio
        - Obra, pieza, proyecto o registro
          - Archivos multimedia
          - Ficha técnica
          - Créditos
      - Información de contacto pública
      - Enlaces profesionales
  - Taxonomías de descubrimiento
    - Disciplinas
    - Categorías
    - Técnicas y materiales
    - Etiquetas
    - Ubicaciones públicas

La cuenta no forma parte de la jerarquía pública. Es el mecanismo privado que controla un perfil. Del mismo modo, multimedia no será un destino público independiente: se presenta dentro del contexto de una obra o perfil.

### 16.4 Definiciones de contenido

Definiciones obligatorias:

- **Cuenta:** registro privado de acceso y operación. No equivale a la identidad pública.
- **Perfil profesional:** representación pública o publicable de un artista o creativo.
- **Portfolio:** conjunto ordenado de obras o proyectos asociados a un perfil.
- **Obra:** unidad profesional publicable con identidad, contexto y al menos un registro visual cuando el tipo lo requiera.
- **Proyecto:** unidad que agrupa una práctica o resultado con alcance mayor a una pieza individual; en el MVP utiliza la misma entidad base que Obra con tipo diferenciado.
- **Registro:** documentación de una práctica temporal, performática, instalativa o procesual; no debe confundirse automáticamente con la obra material.
- **Archivo multimedia:** activo técnico asociado a un perfil u obra, con rol y estado de procesamiento.
- **Disciplina:** campo amplio y controlado de práctica profesional.
- **Técnica o material:** descriptor de producción aplicable a perfiles u obras.
- **Etiqueta:** descriptor complementario, sujeto a normalización y moderación.

Estos términos deben utilizarse consistentemente en interfaz, documentación, API y soporte.

### 16.5 Modelo de clasificación

La clasificación combinará vocabulario controlado y descriptores flexibles.

Niveles:

| Nivel | Control | Cardinalidad | Ejemplo de propósito |
|---|---|---:|---|
| Disciplina | Global y administrado | Múltiple | Describir campo profesional principal |
| Categoría artística | Global y administrado | Múltiple | Agrupar prácticas para exploración |
| Técnica/material | Global con extensión revisable | Múltiple | Describir producción y permitir filtros |
| Etiqueta | Flexible y normalizable | Múltiple | Agregar contexto no cubierto |
| Tipo de obra | Controlado | Uno principal | Diferenciar obra, proyecto o registro |

Reglas:

- Un perfil puede declarar múltiples disciplinas y una de ellas como principal.
- Una obra puede usar disciplinas o técnicas diferentes de la disciplina principal del perfil.
- Las taxonomías no deben imponer una jerarquía de valor.
- Los términos desactivados permanecen asociados a contenido histórico, pero no se ofrecen para nuevas selecciones.
- Los sinónimos deben resolverse hacia un término canónico sin reescribir el texto libre del artista.
- Las etiquetas no se convertirán automáticamente en filtros globales hasta alcanzar calidad y uso suficientes.
- La administración de taxonomías debe registrar cambios y evitar eliminaciones destructivas.

### 16.6 Organización del perfil profesional

La información del perfil se agrupa en:

#### Identificación

- nombre profesional;
- imagen representativa opcional;
- disciplinas principales;
- ubicación general opcional.

#### Presentación

- biografía o descripción profesional;
- statement breve cuando el alcance lo distinga;
- idiomas del contenido solo si se habilitan posteriormente.

#### Práctica

- disciplinas;
- categorías;
- técnicas o materiales recurrentes;
- etiquetas complementarias.

#### Portfolio

- obras, proyectos y registros publicados;
- orden definido por el artista;
- imagen representativa y metadatos mínimos.

#### Conexión profesional

- canales de contacto visibles;
- sitio web y enlaces externos;
- disponibilidad declarativa cuando corresponda.

Los datos privados de cuenta, email de acceso, historial administrativo y borradores no pertenecen a estas agrupaciones públicas.

### 16.7 Organización de una obra o proyecto

La información se agrupa en:

#### Identidad de la obra

- título;
- tipo de contenido;
- año o período;
- estado editorial.

#### Representación visual

- imagen principal;
- imágenes de detalle, montaje o proceso;
- texto alternativo;
- orden y rol de cada archivo.

#### Ficha técnica

- técnica;
- materiales;
- dimensiones;
- duración;
- edición u otros datos aplicables.

#### Contexto

- descripción;
- relación con serie o proyecto si se incorpora posteriormente;
- indicación de registro documental;
- ubicación o contexto de presentación cuando corresponda.

#### Autoría y situación profesional

- autoría;
- créditos fotográficos o colaboradores;
- disponibilidad pública opcional;
- derechos y declaraciones aplicables.

Los campos no aplicables deben omitirse en la vista pública; no se mostrarán etiquetas vacías ni valores como “No corresponde” de forma sistemática.

### 16.8 Metadatos obligatorios, recomendados y opcionales

La arquitectura distingue tres niveles:

- **Obligatorio:** necesario para guardar la entidad técnica o publicar según reglas.
- **Recomendado:** mejora comprensión y descubrimiento, pero no bloquea por sí solo.
- **Opcional:** depende de disciplina, disponibilidad o decisión del artista.

Perfil publicable:

| Nivel | Contenido |
|---|---|
| Obligatorio | Nombre profesional, descripción profesional mínima, al menos una disciplina, categoría o descripción de práctica, y estado |
| Recomendado | Imagen representativa, ubicación general, técnicas, canal de contacto o enlace profesional |
| Opcional | Etiquetas, múltiples enlaces, disponibilidad declarada |

Obra publicable:

| Nivel | Contenido |
|---|---|
| Obligatorio | Título, tipo, imagen o registro visual permitido salvo excepción futura, información contextual mínima aplicable y estado |
| Recomendado | Descripción, materiales, texto alternativo, imágenes adicionales y créditos |
| Opcional | Dimensiones, duración, ubicación, disponibilidad y etiquetas cuando correspondan |

Los requisitos exactos deben mantenerse sincronizados con las reglas del Capítulo 9. Una disciplina que no utilice imagen deberá contar con una excepción de publicación aprobada antes de implementarse; el MVP visual prioriza contenido con registro de imagen.

### 16.9 Modelo de visibilidad

Cada unidad de información debe tener visibilidad derivada y explícita.

Niveles:

- **Privado:** accesible únicamente al propietario y roles administrativos autorizados.
- **Borrador:** contenido profesional aún no publicado; es privado aunque tenga datos completos.
- **Público:** visible para visitantes porque la entidad y sus contenedores están publicados.
- **Oculto:** retirado de consulta pública por el propietario o por una acción autorizada.
- **Administrativo:** visible solo para operación, seguridad, soporte o auditoría.

Reglas de herencia:

- Una obra no puede ser pública si su perfil está en borrador, oculto o desactivado.
- Un archivo no puede ser público si la obra asociada no es pública o si el archivo no terminó procesamiento.
- Publicar un perfil no publica automáticamente borradores de obra.
- Ocultar un perfil retira de exposición todas sus obras sin cambiar necesariamente el estado editorial interno de cada una.
- Los datos de contacto tienen visibilidad propia dentro de un perfil público.
- La administración puede retirar visibilidad sin transferir propiedad ni modificar autoría.

### 16.10 Etiquetado y lenguaje de interfaz

La nomenclatura de navegación debe utilizar palabras orientadas a tareas:

- “Explorar” para acceder al conjunto de perfiles publicados.
- “Perfil” para la identidad profesional propia.
- “Portfolio” para el conjunto de obras.
- “Obra” como término de interfaz predeterminado, acompañado por opciones de tipo “Proyecto” o “Registro”.
- “Contacto” para gestionar canales profesionales.
- “Cuenta” para acceso y datos privados.
- “Publicar”, “Ocultar”, “Guardar borrador” y “Eliminar” como acciones distintas.

Se evitarán términos ambiguos como “post”, “contenido”, “pieza multimedia”, “dashboard” o “activo” frente a usuarios finales cuando exista una denominación profesional más clara.

### 16.11 Búsqueda y recuperabilidad

La recuperabilidad se apoyará en navegación, búsqueda textual, filtros y enlaces estables.

Contenido indexable en el MVP:

- perfiles publicados por nombre, disciplina, categoría, ubicación y términos públicos aprobados;
- obras publicadas por título, año, técnica, material y etiquetas normalizadas;
- contenido institucional y ayuda.

Contenido excluido:

- cuentas y datos privados;
- borradores y contenido oculto;
- canales de contacto no públicos;
- reportes y auditoría;
- nombres originales de archivos;
- texto alternativo cuando pueda generar resultados engañosos o exponer información no destinada a búsqueda.

La búsqueda debe devolver primero entidades comprensibles y distinguir visualmente artistas de obras. El MVP priorizará descubrimiento de artistas; las obras funcionarán como evidencia contextual y punto de entrada al perfil.

### 16.12 Relaciones y navegación contextual

Relaciones visibles:

- una obra siempre enlaza a su artista y portfolio;
- un perfil enlaza a sus obras publicadas;
- una disciplina enlaza a perfiles públicos asociados cuando exista una página de exploración válida;
- una técnica o etiqueta solo genera destino propio si tiene calidad y cantidad de contenido suficientes;
- un enlace externo indica que abandona HABITTUS;
- una acción administrativa enlaza al objeto afectado dentro del contexto protegido.

No se crearán páginas vacías para todas las combinaciones taxonómicas. Los destinos indexables deben tener contenido, descripción comprensible y valor de navegación.

### 16.13 Ordenamiento y prioridad de contenido

Reglas:

- El artista controla el orden de su portfolio dentro de los límites del MVP.
- Las imágenes adicionales siguen el orden definido en la obra.
- Los resultados de búsqueda siguen relevancia y filtros documentados, no popularidad social.
- Los perfiles destacados requieren criterio editorial explícito y registro de vigencia.
- Los borradores se ordenan en gestión por actualización reciente, salvo elección del usuario.
- Las colas administrativas se ordenan por riesgo, antigüedad y estado operativo, no por visibilidad pública.
- Los metadatos esenciales aparecen antes de información complementaria.

### 16.14 Contenido institucional, ayuda y legal

El contenido institucional se organizará en:

- propósito y alcance de HABITTUS;
- guía para crear un perfil profesional;
- guía de imágenes y fichas de obra;
- ayuda de cuenta y acceso;
- privacidad y control de visibilidad;
- propiedad intelectual y reportes;
- términos y política de privacidad;
- accesibilidad y canal de contacto.

Cada artículo tendrá título, resumen, contenido, fecha de actualización y responsable editorial. Las políticas legales tendrán versionado y vigencia. La ayuda debe enlazarse desde el punto de necesidad sin sustituir mensajes claros dentro de los flujos.

### 16.15 Gobierno y calidad de la información

Responsabilidades:

- Producto define nomenclatura, jerarquías y requisitos funcionales.
- Curaduría o conocimiento de dominio revisa taxonomías artísticas.
- Administración aplica estados y políticas sin reescribir arbitrariamente la voz del artista.
- Desarrollo preserva integridad, visibilidad y trazabilidad técnica.
- El artista mantiene la exactitud del contenido profesional que publica.

Controles de calidad:

- validación de campos y relaciones obligatorias;
- detección de términos taxonómicos duplicados;
- revisión de enlaces rotos y archivos sin asociación;
- identificación de perfiles publicados que dejan de cumplir mínimos;
- auditoría de cambios globales de taxonomía;
- revisión periódica de búsquedas sin resultados;
- medición de completitud sin convertirla en valoración artística.

### 16.16 Evolución de la arquitectura de información

Toda nueva entidad o sección deberá responder antes de incorporarse:

1. Qué necesidad profesional resuelve.
2. Quién crea, consulta, modifica y elimina la información.
3. Si es pública, privada o administrativa.
4. Cómo se relaciona con perfil, portfolio y obra.
5. Qué metadatos y reglas de publicación exige.
6. Cómo se busca, navega y comparte.
7. Qué impacto tiene en accesibilidad, privacidad y propiedad intelectual.
8. Cómo se migra o retira sin romper contenido existente.

Series, colecciones, exposiciones, instituciones, convocatorias, ventas, mensajería y contenido audiovisual avanzado quedan fuera del modelo navegable del MVP. Su incorporación requerirá actualizar este documento antes de modificar navegación, datos o interfaces.

## 17. Autenticación y gestión de cuentas

### 17.1 Objetivo y alcance

Este capítulo define cómo una persona crea, utiliza, recupera, protege y desactiva su cuenta en HABITTUS. La cuenta constituye la identidad privada de acceso; no equivale al perfil profesional público y no debe exponerse en exploración, URLs ni metadatos públicos.

El MVP incluye:

- registro de una cuenta individual de artista o creativo;
- verificación del canal de acceso cuando lo exija el proveedor;
- inicio y cierre de sesión;
- recuperación de acceso;
- consulta del estado de cuenta;
- actualización controlada del email de acceso si el proveedor lo permite;
- desactivación y solicitud de eliminación;
- controles administrativos mínimos de suspensión y reactivación;
- sesiones seguras para web responsive.

Quedan fuera del MVP:

- cuentas institucionales o de equipo;
- múltiples propietarios de un mismo perfil;
- inicio de sesión empresarial mediante SAML;
- fusión automática de cuentas;
- delegación de acceso a representantes;
- suscripciones, facturación y permisos comerciales;
- autenticación biométrica propia de aplicaciones nativas;
- perfiles múltiples administrados por una misma cuenta.

### 17.2 Tipos y estados de cuenta

El MVP reconoce los siguientes tipos funcionales:

- **Artista:** cuenta estándar propietaria de un perfil profesional.
- **Administrador:** cuenta interna con permisos explícitos y autenticación reforzada.

Estados de cuenta:

| Estado | Significado | Acceso permitido |
|---|---|---|
| Pendiente de verificación | El canal de acceso aún no fue confirmado | Completar verificación y solicitar reenvío |
| Activa | La cuenta puede autenticarse y operar según su rol | Funcionalidad autorizada completa |
| Restringida | Existe una limitación administrativa parcial | Lectura propia y acciones expresamente habilitadas |
| Suspendida | El acceso operativo fue retirado temporalmente | Información del estado y canales de revisión cuando correspondan |
| Desactivada | El usuario solicitó retirar la cuenta de uso | Reactivación durante el período definido, si aplica |
| Eliminación pendiente | Se inició el proceso de borrado | Acceso limitado a cancelación o información del proceso |
| Eliminada | Los datos fueron eliminados o anonimizados según política | Ninguno |

Las transiciones deben quedar validadas por reglas de negocio. Una suspensión administrativa y una desactivación voluntaria no son equivalentes y deben conservar motivos, actor y fechas diferentes.

### 17.3 Registro de cuenta

Actor principal: artista o creativo no autenticado.

Precondiciones:

- La persona no mantiene una sesión activa incompatible.
- Acepta los términos y reconoce la política de privacidad vigentes.
- Proporciona un email válido y un método de acceso admitido.

Flujo principal:

1. La persona inicia el registro.
2. HABITTUS solicita únicamente email, método de acceso, aceptación legal y datos indispensables contra abuso.
3. El proveedor de identidad valida el formato y crea la identidad externa.
4. El sistema envía verificación cuando corresponda.
5. La persona confirma el canal de acceso.
6. HABITTUS crea la entidad privada Usuario, asigna el rol Artista y registra versiones legales aceptadas.
7. La cuenta queda activa y el usuario continúa hacia la creación de su perfil profesional.

Reglas:

- El email debe normalizarse para comparación sin alterar el valor válido gestionado por el proveedor.
- No se debe revelar si un email pertenece a una cuenta durante flujos públicos de recuperación o registro.
- Una identidad externa solo puede vincularse con un Usuario activo, salvo proceso documentado de recuperación.
- La aceptación legal debe registrar versión y fecha.
- No se solicitarán nombre artístico, biografía ni disciplina dentro de la entidad de cuenta; pertenecen al perfil.
- El registro debe aplicar límites de frecuencia y controles automatizados contra abuso.

Resultado esperado: existe una cuenta privada y verificable, sin que el sistema publique automáticamente un perfil.

### 17.4 Inicio de sesión y creación de sesión

Flujo principal:

1. El usuario selecciona “Ingresar”.
2. Proporciona el método de acceso configurado.
3. El proveedor autentica la identidad.
4. El backend valida emisor, audiencia, vigencia y vinculación con Usuario.
5. El sistema verifica estado y permisos de la cuenta.
6. Se crea una sesión web segura.
7. El usuario es dirigido al destino interno solicitado o al resumen profesional.

Reglas:

- Las cookies de sesión deben ser seguras, `HttpOnly` y con política `SameSite` apropiada.
- Los destinos posteriores al acceso deben ser rutas internas previamente validadas.
- Una cuenta suspendida no obtiene sesión operativa aunque las credenciales sean correctas.
- Los mensajes de error no deben distinguir públicamente entre email inexistente y credencial incorrecta.
- Los intentos reiterados deben activar límites progresivos sin bloquear de forma permanente a usuarios legítimos.
- Las cuentas administrativas requieren MFA antes de acceder a la consola.

### 17.5 Verificación y recuperación de acceso

#### Verificación

1. El sistema genera una solicitud temporal de un solo uso.
2. El usuario recibe un enlace en el canal registrado.
3. El proveedor valida vigencia, integridad y uso previo.
4. La cuenta pasa de pendiente a activa.
5. El sistema confirma el resultado sin exponer credenciales.

#### Recuperación

1. La persona solicita recuperar acceso e ingresa su email.
2. HABITTUS responde con un mensaje neutral, exista o no la cuenta.
3. Si corresponde, el proveedor envía un enlace temporal.
4. La persona completa el cambio o acceso seguro.
5. Las sesiones anteriores se revocan cuando el cambio afecte credenciales.
6. El sistema registra el evento de seguridad y notifica al titular.

Reglas:

- Los enlaces deben expirar, ser de un solo uso y quedar invalidados después del cambio.
- No se brindará recuperación basada en preguntas personales.
- Soporte no podrá ver, establecer ni solicitar contraseñas.
- Los errores de email del proveedor no deben confirmar existencia de cuenta.

### 17.6 Gestión de sesiones

Decisiones para el MVP:

- Una sesión tendrá vencimiento absoluto y vencimiento por inactividad definidos antes de producción.
- La renovación debe rotar credenciales de sesión cuando corresponda.
- El cierre de sesión elimina la sesión actual en servidor y navegador.
- Un cambio de credenciales, suspensión o eliminación pendiente revoca todas las sesiones.
- Las sesiones administrativas tendrán duración menor que las estándar.
- No se ofrecerá inicialmente una pantalla completa de dispositivos; se registrará información técnica mínima para seguridad y soporte.

El contenido público puede permanecer en caché sin sesión. Las respuestas privadas deben impedir almacenamiento compartido y no deben quedar disponibles después de cerrar sesión mediante navegación histórica insegura.

### 17.7 Gestión del email de acceso

Si el proveedor seleccionado admite cambio de email, el flujo será:

1. El usuario autenticado solicita el cambio desde Cuenta.
2. El sistema requiere autenticación reciente.
3. Se valida que el nuevo email tenga formato permitido.
4. Se envía verificación al nuevo email y aviso al anterior.
5. El cambio se completa únicamente después de verificar el nuevo canal.
6. El sistema actualiza la referencia operativa y revoca sesiones según riesgo.

El email de acceso nunca se actualizará mediante edición del perfil profesional. Cambiarlo no modifica canales públicos de contacto ni nombre del artista.

### 17.8 Permisos sobre la cuenta

| Acción | Visitante | Artista propietario | Administrador autorizado |
|---|---:|---:|---:|
| Crear cuenta | Sí | No aplica | No por defecto |
| Consultar datos privados | No | Solo propios | Solo por necesidad operativa |
| Cambiar método de acceso | No | Sí, con autenticación reciente | No directamente |
| Cerrar sesión propia | No | Sí | Sí |
| Desactivar cuenta | No | Sí | No en nombre del usuario |
| Suspender cuenta | No | No | Sí, con motivo y auditoría |
| Reactivar suspensión | No | No | Sí, según política |
| Solicitar eliminación | No | Sí | Solo por procedimiento documentado |

Ningún rol administrativo podrá apropiarse del perfil, conocer credenciales ni editar datos artísticos sin una justificación funcional registrada.

### 17.9 Desactivación, eliminación y reactivación

#### Desactivación voluntaria

1. El usuario consulta consecuencias.
2. Confirma mediante autenticación reciente.
3. El perfil y sus obras se retiran inmediatamente de exposición pública.
4. La cuenta pasa a Desactivada y se revocan sesiones.
5. Se informa el período de reactivación, si existe.

#### Eliminación

1. El usuario solicita eliminación desde Cuenta o por canal verificado.
2. El sistema informa datos afectados, excepciones legales y plazo.
3. El usuario confirma mediante autenticación reciente.
4. La cuenta pasa a Eliminación pendiente y se retira contenido público.
5. Transcurrido el período de seguridad, se eliminan o anonimizan datos según política.
6. Los archivos se eliminan conforme a su ciclo de vida y las copias de respaldo expiran según retención.
7. Se conserva únicamente auditoría mínima cuando exista obligación o interés legítimo documentado.

La reactivación solo se permitirá durante el período informado y no puede revertir datos ya eliminados físicamente.

### 17.10 Validaciones

Validaciones mínimas:

- email con sintaxis válida y longitud admitida;
- método de acceso soportado;
- aceptación explícita de documentos obligatorios;
- tokens de verificación vigentes y no reutilizados;
- autenticación reciente para cambios sensibles;
- transición de estado permitida;
- identidad externa única;
- rol solicitado compatible con el canal de registro;
- destinos de redirección internos;
- límites de frecuencia por operación, identidad y origen.

Las validaciones del cliente son orientativas. El proveedor y el backend deben repetir las comprobaciones que protegen identidad, sesión y estado.

### 17.11 Manejo de errores

| Situación | Respuesta funcional |
|---|---|
| Credenciales inválidas | Mensaje neutral y posibilidad de reintento o recuperación |
| Email no verificado | Reenvío controlado y explicación de vigencia |
| Enlace vencido o usado | Solicitud de un nuevo enlace, sin recuperar el token anterior |
| Cuenta suspendida | Estado general y canal de revisión cuando corresponda |
| Límite excedido | Espera indicada sin revelar reglas antifraude detalladas |
| Proveedor no disponible | Mensaje temporal, conservación del destino y reintento seguro |
| Sesión vencida | Nuevo acceso y preservación segura de intención no sensible |
| Cambio de email incompleto | Mantener email anterior hasta verificar el nuevo |
| Eliminación ya iniciada | Mostrar estado y opciones permitidas, sin duplicar solicitud |

Los errores técnicos deben llevar identificador de correlación. Nunca deben mostrar tokens, existencia de cuentas ajenas ni detalles del proveedor.

### 17.12 Criterios de aceptación del MVP

El capítulo se considera implementado cuando:

- un visitante puede crear y verificar una cuenta de artista;
- el registro no publica perfil ni datos privados;
- un usuario activo puede iniciar y cerrar sesión de forma segura;
- la recuperación responde de forma neutral y revoca sesiones cuando corresponde;
- una cuenta suspendida no puede ejecutar operaciones autenticadas;
- un artista solo puede consultar y modificar su propia cuenta;
- un administrador utiliza MFA y sus acciones sensibles quedan auditadas;
- desactivar una cuenta retira inmediatamente perfil y obras públicas;
- solicitar eliminación inicia un proceso trazable y coherente con retención;
- los flujos contemplan carga, éxito, error, expiración y reintento;
- las pruebas de autorización impiden acceso horizontal entre cuentas.

### 17.13 Funcionalidades futuras

Requieren definición y aprobación posterior:

- proveedores sociales adicionales;
- gestión visible de dispositivos y sesiones;
- cuentas institucionales y equipos;
- delegación temporal a asistentes o galerías;
- múltiples perfiles por cuenta;
- fusión de identidades;
- passkeys;
- aplicación móvil con biometría local;
- verificación profesional o institucional.

Ninguna de estas capacidades debe inferirse del modelo de rol actual.

## 18. Perfiles de usuario y portfolio

### 18.1 Objetivo y alcance

El perfil profesional es la representación pública o publicable de un artista. El portfolio es el conjunto ordenado de obras, proyectos o registros que el artista decide asociar y publicar. Ambos dependen de una cuenta propietaria, pero no deben exponer sus datos privados.

El MVP incluye un perfil principal por cuenta de artista, un portfolio asociado, edición progresiva, vista previa, publicación, ocultamiento y enlace estable.

No incluye perfiles institucionales, múltiples portfolios, series independientes, equipos editoriales, plantillas personalizables, dominio propio, currículum estructurado avanzado ni importación automática desde otras plataformas.

### 18.2 Estados del perfil

| Estado | Descripción | Visibilidad |
|---|---|---|
| Borrador | Perfil en edición que aún no cumple requisitos o no fue publicado | Propietario y administración autorizada |
| Publicable | Cumple mínimos, pero el artista no confirmó publicación | Privada |
| Publicado | El artista confirmó exposición y la cuenta está activa | Pública |
| Oculto por propietario | Fue retirado voluntariamente sin eliminarlo | Privada |
| En revisión | Requiere intervención administrativa | Según estado previo y riesgo |
| Oculto administrativamente | Fue retirado por una acción moderadora | Propietario y administración autorizada |
| Desactivado | La cuenta o perfil dejó de estar operativo | No pública |
| Eliminación pendiente | Se inició el borrado | No pública |

“Publicable” puede ser un estado calculado y no necesariamente persistido. La completitud no representa calidad artística ni determina orden de descubrimiento por sí sola.

### 18.3 Información del perfil

Información mínima para publicar, conforme al Capítulo 9:

- nombre profesional o artístico;
- descripción profesional mínima;
- al menos una disciplina, categoría o descripción de práctica;
- estado de cuenta activo;
- aceptación de reglas de publicación vigentes.

Información opcional del MVP:

- imagen representativa;
- disciplinas adicionales;
- ubicación general;
- técnicas o materiales recurrentes;
- enlaces profesionales externos;
- canales de contacto con visibilidad individual;
- disponibilidad declarativa cuando corresponda.

El portfolio puede estar vacío sin impedir técnicamente la publicación del perfil, salvo que una decisión futura modifique las reglas aprobadas. La interfaz debe recomendar agregar una obra sin presentar esa recomendación como requisito.

### 18.4 Creación del perfil

Precondiciones:

- cuenta de artista activa y autenticada;
- ausencia de otro perfil principal vigente para la misma cuenta.

Flujo:

1. El artista accede por primera vez al área profesional.
2. El sistema crea o inicia un perfil en borrador asociado a su cuenta.
3. El artista completa identificación, presentación y práctica.
4. El sistema valida cada sección y guarda cambios.
5. Se calcula completitud y se indican requisitos pendientes.
6. El artista puede continuar al portfolio, previsualizar o publicar cuando cumpla mínimos.

Resultado: perfil privado y editable; ninguna información queda pública sin la acción de publicación.

### 18.5 Edición y guardado

Reglas:

- Solo el propietario o un administrador con atribución documentada puede editar.
- El guardado de borrador debe aceptar campos opcionales incompletos, pero no datos inválidos que comprometan integridad.
- La interfaz debe informar guardado exitoso, error y cambios pendientes.
- Una edición de perfil publicado no debe cambiar su URL canónica.
- Los cambios compatibles pueden publicarse inmediatamente; cambios que incumplan mínimos deben impedir guardar como versión pública o requerir despublicación explícita.
- El sistema no debe reemplazar silenciosamente texto del artista por contenido generado o corregido automáticamente.
- La pérdida de conexión debe conservar el formulario en pantalla y permitir reintento, sin prometer persistencia offline.

### 18.6 Publicación del perfil

Flujo:

1. El artista solicita vista previa.
2. El sistema muestra únicamente información que sería pública.
3. Se verifican campos mínimos, cuenta, archivos procesados y ausencia de bloqueo administrativo.
4. Si existen faltantes, se presenta una lista accionable.
5. El artista confirma “Publicar perfil”.
6. El backend valida nuevamente y cambia el estado en una operación consistente.
7. Se habilita la URL canónica y la inclusión en descubrimiento.
8. El sistema confirma el resultado y ofrece ver o compartir el perfil.

Publicar el perfil no publica obras en borrador ni canales de contacto configurados como privados.

### 18.7 Ocultamiento, reactivación y eliminación

- **Ocultar:** retira el perfil y todas sus obras de exposición, preservando estados internos y URL para una posible reactivación.
- **Reactivar:** vuelve a publicar si la cuenta y el perfil cumplen requisitos y no existe restricción.
- **Eliminar perfil:** forma parte del proceso de eliminación de cuenta en el MVP; no se permitirá eliminar el único perfil manteniendo una cuenta profesional huérfana sin una regla específica.
- **Ocultamiento administrativo:** retira exposición y exige motivo, actor, fecha y notificación cuando corresponda.

Una URL oculta no debe devolver contenido en caché ni confirmar públicamente la causa del retiro.

### 18.8 Portfolio y ordenamiento

El MVP mantiene un portfolio único asociado al perfil.

Reglas:

- El portfolio contiene obras publicadas y, en gestión privada, borradores y obras ocultas.
- El artista controla el orden de exposición mediante una posición explícita.
- Una obra nueva se agrega al final por defecto.
- Reordenar no modifica fechas, autoría ni estados.
- El orden debe ser estable entre sesiones y dispositivos.
- Las obras retiradas no dejan espacios visibles.
- El sistema puede paginar la gestión sin alterar el orden público.
- No se crearán series, subportfolios ni colecciones en el MVP.

### 18.9 Perfil público y vista previa

La vista pública debe contener solo datos con visibilidad pública y recursos procesados. La vista previa debe:

- reproducir la jerarquía pública sin requerir publicación;
- identificarse claramente como vista privada;
- ser accesible solo al propietario y roles autorizados;
- excluir acciones internas de la captura o modo de presentación cuando corresponda;
- no generar una URL pública indexable.

El perfil público debe incluir nombre, práctica, biografía, portfolio publicado, enlaces y contacto habilitado, omitiendo secciones vacías.

### 18.10 Contacto y enlaces externos

Cada canal debe tener tipo, valor, etiqueta opcional, orden y visibilidad.

Reglas:

- Los canales son privados por defecto.
- Publicar el perfil no cambia su visibilidad individual.
- Emails y URLs deben validarse antes de exponerlos.
- Los enlaces externos deben identificarse como salida de HABITTUS.
- El email de acceso no se copiará automáticamente como contacto público.
- Ocultar o desactivar el perfil retira todos los canales públicos.
- El MVP no incorpora mensajería interna ni garantiza respuesta del artista.

### 18.11 Permisos

| Acción | Visitante | Artista propietario | Administrador autorizado |
|---|---:|---:|---:|
| Ver perfil publicado | Sí | Sí | Sí |
| Ver borrador | No | Sí | Solo por función autorizada |
| Crear perfil | No | Sí, uno principal | No en nombre del artista |
| Editar contenido profesional | No | Sí | Solo intervención justificada |
| Publicar u ocultar | No | Sí | Puede ocultar por moderación |
| Ordenar portfolio | No | Sí | No por defecto |
| Ver contacto privado | No | Sí | Solo por necesidad autorizada |
| Gestionar taxonomías globales | No | No | Sí, según rol |

La API debe verificar propiedad en cada operación mediante el identificador autenticado, sin confiar en IDs enviados por el cliente.

### 18.12 Validaciones

Validaciones de perfil:

- nombre profesional no vacío, dentro del límite y sin contenido de control;
- biografía dentro de límites y sanitizada para presentación segura;
- disciplinas y categorías existentes y activas;
- ubicación general sin exigir dirección exacta;
- URLs con protocolos permitidos;
- canales de contacto con formato compatible con su tipo;
- una sola imagen representativa activa;
- estado compatible con cuenta y moderación;
- unicidad de perfil principal por cuenta;
- identificador público estable y alias legible no conflictivo.

Validaciones de portfolio:

- pertenencia al perfil;
- posiciones no negativas y consistentes;
- solo obras públicas en la vista pública;
- ausencia de referencias a archivos fallidos o eliminados;
- límites de cantidad y paginación definidos operacionalmente.

### 18.13 Manejo de errores

| Error | Comportamiento esperado |
|---|---|
| Perfil incompleto al publicar | Lista de requisitos con enlaces a cada sección |
| Alias público en conflicto | Mantener identificador estable y proponer alternativa sin perder datos |
| Taxonomía desactivada | Conservar valor histórico y solicitar reemplazo antes de una nueva publicación si aplica |
| Imagen aún procesando | Permitir guardar; impedir publicación solo si esa imagen es obligatoria |
| Edición concurrente | Evitar sobrescritura silenciosa y solicitar recarga o resolución |
| Sin autorización | Respuesta genérica sin exponer datos del perfil privado |
| Error de guardado | Mantener valores, permitir reintento y mostrar referencia de soporte |
| Perfil oculto por moderación | Informar estado y acciones disponibles al propietario |
| Reordenamiento fallido | Restaurar último orden confirmado |

### 18.14 Criterios de aceptación del MVP

- Una cuenta activa puede crear como máximo un perfil principal.
- El perfil se inicia privado y puede guardarse por etapas.
- El sistema distingue requisitos obligatorios de recomendaciones.
- La publicación exige nombre, descripción y práctica mínima válidos.
- La vista previa no es pública ni indexable.
- Publicar conserva privados los canales no habilitados y las obras en borrador.
- Un visitante solo consulta perfiles publicados y datos públicos.
- El artista puede editar sin perder la URL estable.
- Ocultar el perfil retira perfil, obras y contacto de exposición y caché.
- El orden de portfolio definido por el artista se conserva.
- Las operaciones de otro perfil son rechazadas aunque se manipulen identificadores.
- Los estados vacíos, de carga, error y moderación están definidos.

### 18.15 Funcionalidades futuras

Fuera del MVP:

- múltiples perfiles o portfolios;
- series, colecciones y exposiciones;
- currículum, premios y formación como entidades estructuradas;
- dominios personalizados;
- traducciones del perfil;
- colaboración editorial y representantes;
- importación o sincronización externa;
- analítica avanzada del perfil;
- plantillas visuales personalizadas;
- insignias de verificación;
- perfiles institucionales.

## 19. Publicación y gestión de obras

### 19.1 Objetivo y alcance

Este capítulo define el ciclo de vida de obras, piezas, proyectos y registros visuales dentro del portfolio. Para simplificar la implementación, el término “obra” representa la entidad base y el campo tipo diferencia obra, proyecto o registro.

El MVP permite crear, editar, cargar imágenes, ordenar archivos, previsualizar, publicar, ocultar y eliminar lógicamente una obra. Incluye ficha técnica y estado de disponibilidad declarativo.

Quedan fuera del MVP: venta, precio, reservas, inventario, certificados, subastas, licencias, series estructuradas, coedición, video, audio, modelos 3D y documentos descargables.

### 19.2 Estados de la obra

| Estado | Descripción | Exposición pública |
|---|---|---|
| Borrador | En creación o incompleta | No |
| Procesando | Uno o más archivos obligatorios están en procesamiento | No |
| Publicable | Cumple requisitos y espera confirmación | No |
| Publicada | Confirmada y asociada a perfil publicado | Sí |
| Oculta por propietario | Retirada voluntariamente | No |
| En revisión | Requiere evaluación administrativa | Según riesgo y decisión autorizada |
| Oculta administrativamente | Retirada por moderación | No |
| Eliminación pendiente | Marcada para eliminación | No |
| Eliminada | Eliminada lógicamente y pendiente o completa físicamente | No |

La visibilidad efectiva de una obra publicada depende también del estado del perfil, cuenta, archivos y moderación.

### 19.3 Información de una obra

Obligatoria para publicación:

- título o identificador descriptivo;
- tipo: obra, proyecto o registro;
- al menos una imagen o registro visual permitido, salvo excepción futura aprobada;
- información contextual mínima aplicable, como año, técnica, descripción, materiales, dimensiones, duración o categoría;
- imagen principal seleccionada y procesada;
- estado de derechos declarado según términos.

Opcional:

- descripción ampliada;
- imágenes adicionales;
- materiales, dimensiones o duración cuando no sean el contexto mínimo elegido;
- créditos y colaboradores;
- texto alternativo;
- ubicación o contexto de presentación;
- estado de disponibilidad;
- etiquetas.

No se exigirá un campo que no resulte aplicable a la disciplina, pero toda obra publicada debe aportar contexto además de la imagen.

### 19.4 Creación de obra

Precondiciones:

- cuenta activa y autenticada;
- perfil existente y propiedad verificada;
- ausencia de restricción que impida crear contenido.

Flujo:

1. El artista selecciona “Agregar obra”.
2. El sistema crea un borrador asociado a su perfil o espera los campos mínimos técnicos antes de persistirlo.
3. El artista ingresa título, tipo y contexto.
4. Agrega al menos una imagen permitida.
5. El archivo se carga y procesa de forma asíncrona.
6. El artista completa ficha, orden y texto alternativo.
7. Guarda el borrador.
8. El sistema calcula si la obra es publicable.

Una obra en borrador no debe aparecer en perfil público, búsqueda, sitemap ni respuestas públicas de API.

### 19.5 Carga y procesamiento de imágenes

Flujo:

1. El cliente solicita autorización para un archivo concreto.
2. El backend verifica propiedad, cuota, formato y tamaño declarado.
3. El cliente carga mediante URL temporal.
4. El sistema confirma integridad y tipo real.
5. Se analiza seguridad y se eliminan metadatos sensibles cuando corresponda.
6. Se generan derivados para miniatura, listado y detalle.
7. El archivo pasa a Disponible o Fallido.
8. La obra actualiza su capacidad de publicación.

Reglas:

- Los originales permanecen privados.
- Un archivo fallido no puede seleccionarse como principal.
- Reintentar no debe duplicar asociaciones ni consumir cuota de manera incorrecta.
- El artista puede cancelar una carga en progreso cuando técnicamente sea posible.
- Eliminar una carga antes de publicar debe retirar derivados y originales conforme al período de seguridad.
- No se aplicarán filtros, recortes destructivos ni marcas de agua automáticas.
- Los límites concretos de cantidad, peso y resolución deben configurarse y mostrarse antes de seleccionar archivos.

### 19.6 Gestión de imágenes

El artista puede:

- seleccionar una imagen principal;
- ordenar imágenes adicionales;
- asignar rol de detalle, montaje, proceso o registro;
- agregar texto alternativo y pie cuando corresponda;
- reemplazar una imagen;
- eliminar una imagen no requerida.

Reglas:

- Debe existir exactamente una imagen principal para publicar.
- Reordenar no cambia el rol principal salvo acción explícita.
- Reemplazar una imagen publicada mantiene la anterior visible hasta que la nueva esté procesada y confirmada, o retira temporalmente la obra si no puede garantizarse integridad.
- Una obra publicada no puede quedar sin imagen principal por una eliminación aislada.
- Los créditos de imagen no se infieren de la autoría de la obra.

### 19.7 Edición y guardado

- El propietario puede editar borradores, obras publicadas y ocultas.
- El guardado de borrador permite información incompleta, pero rechaza valores corruptos o relaciones ajenas.
- La edición de una obra publicada conserva su identificador y URL.
- Los cambios de texto válidos pueden reflejarse al confirmar guardado.
- Reemplazos multimedia solo se hacen públicos después de procesamiento exitoso.
- Si una edición elimina un requisito de publicación, el sistema debe impedir confirmarla como pública o solicitar ocultamiento explícito.
- Las actualizaciones concurrentes deben usar control de versión o fecha para impedir pérdida silenciosa.

### 19.8 Vista previa y publicación

Flujo:

1. El artista abre la vista previa.
2. El sistema presenta la obra como se mostraría públicamente.
3. Se validan campos, imagen principal, procesamiento, propiedad, perfil y restricciones.
4. Los faltantes se muestran por sección.
5. El artista confirma publicación.
6. El backend ejecuta una validación final y cambia el estado.
7. Si el perfil está publicado, la obra aparece en su portfolio y puede incorporarse al índice.
8. Si el perfil no está publicado, la obra conserva estado Publicada internamente pero no tiene visibilidad efectiva; la interfaz debe explicar esta diferencia.

La publicación no implica venta, licencia, disponibilidad ni autorización de descarga.

### 19.9 Ocultar, archivar y eliminar

- **Ocultar:** retira inmediatamente una obra de exposición y búsqueda, conservando datos para reactivación.
- **Archivar:** no será un estado independiente en el MVP; se utilizará Oculta para evitar ambigüedad operativa.
- **Eliminar:** marca la obra, retira exposición, invalida caché y agenda eliminación de archivos según retención.
- **Restaurar:** puede habilitarse durante el período de seguridad antes de eliminación física.
- **Ocultar administrativamente:** requiere permiso, motivo y auditoría; el propietario no puede anularlo por sí solo.

Eliminar una obra no elimina el perfil ni modifica otras obras. Los enlaces externos a una obra retirada deben responder sin revelar causa privada.

### 19.10 Disponibilidad y contexto comercial

El MVP admite un estado declarativo opcional, por ejemplo disponible, no disponible o consultar.

Reglas:

- No se exige disponibilidad para publicar.
- No se muestra precio, moneda, reserva ni botón de compra.
- El estado no constituye oferta contractual ni garantía.
- El artista puede ocultarlo sin ocultar la obra.
- HABITTUS no valida propiedad material, inventario ni vigencia comercial.
- Cualquier evolución transaccional requerirá nuevas entidades y reglas antes de implementarse.

### 19.11 Permisos

| Acción | Visitante | Artista propietario | Administrador autorizado |
|---|---:|---:|---:|
| Ver obra pública | Sí | Sí | Sí |
| Ver borrador o vista previa | No | Sí | Solo por función autorizada |
| Crear y editar | No | Sí | No por defecto |
| Cargar o eliminar archivos | No | Sí | Solo intervención técnica autorizada |
| Publicar u ocultar voluntariamente | No | Sí | No en nombre del artista |
| Ocultar por moderación | No | No | Sí, con auditoría |
| Reordenar en portfolio | No | Sí | No por defecto |
| Eliminar lógicamente | No | Sí | Sí solo mediante procedimiento autorizado |

Los permisos se verifican sobre obra, perfil y archivo en cada operación.

### 19.12 Validaciones

Validaciones de datos:

- título no vacío y dentro del límite;
- tipo dentro del vocabulario aprobado;
- año o período con formato y rango coherentes cuando se informa;
- al menos un campo contextual aplicable además del título;
- dimensiones y duración con estructura válida cuando se proporcionan;
- disciplinas, técnicas, materiales y etiquetas referenciadas válidas;
- URLs y créditos sanitizados;
- disponibilidad dentro de estados admitidos.

Validaciones multimedia:

- tipo MIME declarado y real permitido;
- extensión compatible;
- peso y resolución dentro de límites;
- archivo íntegro y análisis de seguridad superado;
- propiedad del objeto y asociación al perfil correcto;
- imagen principal disponible;
- cantidad dentro de cuota;
- texto alternativo dentro de límites.

Validaciones de publicación:

- cuenta y perfil operativos;
- ausencia de bloqueo administrativo;
- requisitos mínimos completos;
- todos los archivos públicos procesados;
- declaración de derechos aceptada;
- transición de estado válida.

### 19.13 Manejo de errores

| Situación | Comportamiento esperado |
|---|---|
| Archivo no permitido | Rechazar antes o después de carga, indicar formatos admitidos |
| Exceso de tamaño o cuota | No iniciar carga y comunicar límite aplicable |
| Carga interrumpida | Permitir reintento idempotente sin duplicar obra |
| Procesamiento fallido | Mantener borrador, identificar archivo y ofrecer reemplazo o reintento |
| Publicación incompleta | Mostrar faltantes por sección sin perder cambios |
| Perfil no publicado | Explicar que la obra no tendrá visibilidad efectiva |
| Edición concurrente | Detener sobrescritura y ofrecer recarga o revisión |
| Archivo principal eliminado | Bloquear acción o exigir reemplazo previo |
| Falta de permisos | Respuesta genérica sin confirmar recursos privados |
| Moderación activa | Impedir publicación y mostrar opciones permitidas |
| Error del índice | Mantener PostgreSQL como fuente de verdad y reintentar sincronización |

### 19.14 Criterios de aceptación del MVP

- Un artista autenticado puede crear una obra solo en su perfil.
- Puede guardar un borrador incompleto sin hacerlo público.
- Puede cargar una imagen permitida y conocer estados de carga y procesamiento.
- El sistema preserva originales privados y publica únicamente derivados aprobados.
- La publicación exige título, registro visual, contexto mínimo e imagen principal disponible.
- La vista previa no es pública ni indexable.
- Una obra publicada aparece solo si su perfil también es visible.
- El artista puede ordenar imágenes y obras sin alterar sus metadatos.
- Ocultar retira la obra de perfil, búsqueda, caché y acceso público.
- Eliminar inicia un proceso trazable y no afecta otras obras.
- Un administrador puede ocultar contenido con permiso, motivo y auditoría.
- Los intentos de operar sobre obras o archivos ajenos son rechazados.
- Los errores de carga, validación, concurrencia y procesamiento permiten recuperación segura.

### 19.15 Funcionalidades futuras

Requieren especificación posterior:

- video, audio, documentos y modelos 3D;
- series, colecciones y exposiciones;
- edición colaborativa y coautorías estructuradas;
- importación masiva;
- inventario, ubicación física y conservación;
- precios, monedas, ventas, reservas y pagos;
- certificados y procedencia;
- licencias y descargas autorizadas;
- analítica avanzada por obra;
- recomendaciones y relaciones algorítmicas;
- versiones públicas históricas.

Estas capacidades no deben agregarse como campos opcionales aislados: requieren revisar modelo de datos, permisos, navegación, seguridad y reglas de negocio.

## 20. Descubrimiento, búsqueda y filtros

### 20.1 Objetivo y alcance

El sistema de descubrimiento debe permitir que visitantes y profesionales encuentren perfiles artísticos publicados mediante criterios comprensibles, sin convertir HABITTUS en un feed social ni ordenar la producción por popularidad.

El MVP incluye:

- exploración paginada de perfiles publicados;
- búsqueda textual por información profesional pública;
- filtros por disciplina, categoría y ubicación general;
- filtros por técnica o material únicamente cuando la taxonomía tenga cobertura suficiente;
- acceso desde un resultado al perfil y, de forma contextual, a sus obras públicas;
- URLs compartibles para búsquedas y filtros;
- gestión administrativa de taxonomías utilizadas para descubrir contenido.

Quedan fuera del MVP:

- recomendaciones personalizadas;
- feed de actividad;
- tendencias automáticas;
- rankings, popularidad o señales sociales;
- búsqueda semántica o generativa;
- geolocalización precisa y mapas;
- búsquedas guardadas y alertas;
- publicidad o posicionamiento pago;
- curaduría algorítmica individualizada.

### 20.2 Unidades descubribles

La unidad principal de resultado será el **perfil profesional publicado**. Las obras pueden aparecer como contexto o resultado secundario cuando una coincidencia sea relevante, pero siempre deben conducir al perfil del artista.

Solo son descubribles:

- perfiles en estado Publicado, asociados a cuentas activas y sin restricción;
- obras en estado Publicada cuyo perfil tenga visibilidad efectiva;
- taxonomías activas vinculadas con contenido público;
- ubicación y contacto únicamente cuando su visibilidad pública esté habilitada y sean pertinentes al resultado.

No son descubribles cuentas, borradores, vistas previas, contenido oculto, archivos originales, datos administrativos ni campos privados.

### 20.3 Modelo de consulta

Una consulta puede combinar:

- texto libre;
- una o más disciplinas;
- una o más categorías;
- ubicación general publicada;
- técnica o material controlado;
- tipo de resultado, cuando se habilite la búsqueda secundaria de obras;
- página y orden aprobado.

Reglas:

- Los criterios activos deben quedar visibles y poder eliminarse individualmente.
- Los parámetros válidos deben representarse en la URL.
- Los valores desconocidos, desactivados o incompatibles se ignoran de forma segura y se informa al usuario.
- La consulta vacía muestra exploración general, no un error.
- El sistema debe limitar longitud, cantidad de filtros y tamaño de página.
- Los filtros combinados utilizan intersección entre grupos y unión dentro de un mismo grupo, salvo indicación explícita distinta.

### 20.4 Campos de búsqueda textual

El MVP indexará únicamente campos públicos aprobados:

- nombre profesional;
- biografía o descripción profesional;
- disciplinas y categorías;
- técnicas y materiales normalizados;
- ubicación general;
- título y descripción de obras públicas;
- etiquetas públicas normalizadas.

No se indexarán emails, canales privados, nombres originales de archivo, datos de cuenta, reportes, auditoría ni texto de borradores.

La normalización podrá contemplar mayúsculas, minúsculas, diacríticos y variantes ortográficas básicas sin modificar el contenido fuente. La búsqueda no debe inferir identidad, ubicación o disciplina a partir de datos privados.

### 20.5 Relevancia y ordenamiento

Orden predeterminado: relevancia para consultas textuales y criterio editorial neutro para exploración sin texto.

La relevancia podrá considerar:

1. coincidencia exacta con nombre profesional;
2. coincidencia con disciplina o categoría;
3. coincidencia con campos estructurados;
4. coincidencia con biografía, descripción o título de obra;
5. completitud estructural suficiente para presentar el resultado;
6. vigencia del contenido publicado como criterio secundario, sin penalizar prácticas de actualización infrecuente.

No podrá considerar likes, seguidores, frecuencia de sesión, capacidad de pago, volumen de publicaciones ni supuesta calidad artística. Los perfiles destacados deberán responder a un criterio editorial explícito, temporal y diferenciable del orden de búsqueda.

### 20.6 Flujo de exploración

1. El visitante accede a Explorar.
2. El sistema presenta perfiles públicos y filtros disponibles.
3. El visitante aplica texto o filtros.
4. El sistema valida y normaliza la consulta.
5. Se muestran criterios activos, resultados y paginación.
6. El visitante abre un perfil o una obra secundaria.
7. Puede regresar conservando consulta, página y posición razonable.
8. Puede limpiar filtros o compartir la URL resultante.

El flujo no requiere autenticación y no debe crear un historial personal identificable fuera de la analítica mínima consentida.

### 20.7 Filtros del MVP

| Filtro | Fuente | Selección | Condición de disponibilidad |
|---|---|---|---|
| Disciplina | Taxonomía global | Múltiple | Siempre que tenga perfiles públicos |
| Categoría | Taxonomía global | Múltiple | Siempre que tenga perfiles públicos |
| Ubicación | Valor público normalizado | Una o múltiple según cobertura | Sin precisión domiciliaria |
| Técnica/material | Taxonomía controlada | Múltiple | Solo con datos consistentes suficientes |

Reglas:

- No se mostrarán opciones sin resultados salvo que preserven una selección ya aplicada.
- Los conteos, si se muestran, deben derivar de contenido visible y evitar inferencias sobre recursos ocultos.
- Una taxonomía desactivada no se ofrece en nuevas consultas, pero una URL histórica debe resolverse de forma segura.
- La ubicación se limita a país, región o ciudad declarada públicamente; nunca dirección o coordenada precisa.

### 20.8 Estados de la experiencia

Estados obligatorios:

- **Inicial:** exploración general disponible.
- **Cargando:** estructura y criterios permanecen visibles.
- **Con resultados:** listado, total confiable o indicación de continuidad y paginación.
- **Sin resultados:** explicación, criterios activos y acciones para ampliarlos.
- **Error recuperable:** reintento sin perder la consulta.
- **Error parcial:** resultados disponibles con un filtro temporalmente no aplicable.
- **Índice actualizándose:** contenido recién publicado puede tardar un período operativo informado.

No se utilizarán perfiles ficticios para completar estados vacíos.

### 20.9 Permisos y privacidad

| Acción | Visitante | Artista | Administrador autorizado |
|---|---:|---:|---:|
| Explorar contenido público | Sí | Sí | Sí |
| Aplicar y compartir filtros | Sí | Sí | Sí |
| Indexar su perfil | No directamente | Mediante publicación | Puede retirar por moderación |
| Ver contenido privado en resultados | No | Solo en su gestión, no en búsqueda pública | No salvo función autorizada |
| Gestionar taxonomías | No | No | Sí |
| Crear destacados editoriales | No | No | Solo rol específico futuro o autorizado |

El sistema debe filtrar por visibilidad antes de calcular resultados, conteos o facetas. Una consulta no puede confirmar la existencia de perfiles suspendidos, obras ocultas o datos privados.

### 20.10 Validaciones

- texto de búsqueda dentro del límite y sanitizado;
- parámetros reconocidos y cantidad máxima de valores;
- taxonomías existentes, activas o resolubles históricamente;
- paginación dentro de límites;
- ordenamiento perteneciente a opciones permitidas;
- ubicación con granularidad pública admitida;
- solo entidades con visibilidad efectiva;
- codificación segura de URL;
- límites de frecuencia contra extracción abusiva;
- consistencia entre índice y fuente de verdad antes de exponer contenido sensible.

### 20.11 Manejo de errores

| Situación | Respuesta funcional |
|---|---|
| Consulta inválida | Corregir parámetros seguros e indicar criterios descartados |
| Sin coincidencias | Mantener filtros visibles y sugerir ampliarlos, sin inventar resultados |
| Taxonomía retirada | Removerla o redirigir a su término canónico |
| Motor no disponible | Usar consulta relacional de contingencia si está aprobada o informar indisponibilidad temporal |
| Resultado retirado al abrir | Mostrar recurso no disponible sin revelar causa privada |
| Página fuera de rango | Volver a la última página válida o al inicio |
| Sincronización demorada | Mantener fuente de verdad y reintentar indexación de forma idempotente |

### 20.12 Criterios de aceptación del MVP

- Un visitante explora perfiles sin autenticarse.
- Solo aparecen perfiles y obras con visibilidad pública efectiva.
- La búsqueda encuentra nombre, práctica y metadatos públicos aprobados.
- Los filtros pueden combinarse, removerse y compartirse mediante URL.
- Regresar desde un perfil conserva la consulta.
- El orden no usa popularidad social ni pago.
- Borradores, contacto privado y contenido moderado no se filtran mediante resultados o conteos.
- Los estados de carga, vacío, error y paginación son accesibles.
- Publicar, ocultar o suspender actualiza el descubrimiento dentro del plazo operativo definido.
- Los límites previenen consultas y extracción abusivas sin impedir uso legítimo.

### 20.13 Funcionalidades futuras

Requieren especificación posterior:

- búsquedas guardadas y alertas;
- mapas y radios geográficos;
- recomendaciones personalizadas;
- afinidad semántica;
- perfiles destacados con herramientas curatoriales;
- filtros por disponibilidad comercial avanzada;
- oportunidades relacionadas;
- historial sincronizado entre dispositivos;
- búsqueda multilingüe;
- motor dedicado con relevancia avanzada.

## 21. Contacto profesional y oportunidades

### 21.1 Objetivo y alcance

HABITTUS debe facilitar que una persona interesada encuentre un canal profesional elegido por el artista sin exponer datos privados ni prometer una relación comercial.

El MVP incluye:

- publicación configurable de canales externos de contacto;
- email profesional, sitio web y enlaces externos admitidos;
- etiqueta y orden de cada canal;
- visibilidad individual, privada por defecto;
- acceso desde el perfil público;
- estado declarativo opcional de disponibilidad de una obra.

El MVP no incluye mensajería interna, bandeja de consultas, propuestas, convocatorias, postulaciones, contratos, pagos, reservas, presupuestos ni seguimiento de oportunidades. En este capítulo, “oportunidad” describe el resultado profesional posible del contacto, no una entidad gestionada por la plataforma.

### 21.2 Tipos de contacto admitidos

Tipos iniciales:

- email profesional;
- sitio web personal;
- portfolio externo;
- perfil profesional externo aprobado;
- instrucciones breves de contacto;
- enlace institucional o de representación declarado por el artista.

No se publicarán automáticamente teléfono, dirección exacta, email de cuenta ni identificadores privados. Nuevos tipos requieren validación de seguridad, presentación y propósito profesional.

### 21.3 Estados de un canal

| Estado | Significado | Visible públicamente |
|---|---|---|
| Borrador | Valor aún no confirmado | No |
| Verificado técnicamente | Formato válido; no implica identidad certificada | Según visibilidad |
| Público | Habilitado por el artista y perfil publicado | Sí |
| Privado | Conservado para gestión propia | No |
| Inválido | Formato incorrecto o destino no permitido | No |
| Retirado | Eliminado lógicamente o desactivado | No |
| Bloqueado | Retirado por seguridad o moderación | No |

La plataforma no debe mostrar “verificado” como certificación profesional cuando solo validó sintaxis o control técnico del canal.

### 21.4 Creación y publicación de un canal

1. El artista accede a Contacto.
2. Selecciona el tipo de canal.
3. Ingresa valor y etiqueta opcional.
4. El sistema valida formato, protocolo y dominio cuando corresponda.
5. El artista guarda el canal en privado.
6. Decide explícitamente hacerlo público.
7. Si el perfil está publicado, el canal aparece en la sección de contacto.
8. El artista puede reordenarlo, ocultarlo o retirarlo.

Publicar un perfil no modifica canales privados. Cambiar el email de cuenta tampoco cambia el contacto profesional.

### 21.5 Flujo de contacto para visitantes

1. El visitante consulta un perfil publicado.
2. Identifica una acción de contacto únicamente si existe al menos un canal público.
3. HABITTUS muestra el tipo y contexto definidos por el artista.
4. El visitante activa el canal.
5. El sistema abre el cliente de email o destino externo según corresponda.
6. La comunicación continúa fuera de HABITTUS.

La plataforma debe avisar cuando se abandona el sitio y no debe interceptar, almacenar ni analizar el contenido de la comunicación externa.

### 21.6 Disponibilidad profesional y de obra

El artista puede declarar información limitada:

- en una obra: disponible, no disponible o consultar;
- en el perfil: instrucciones de contacto o enlace profesional, sin un sistema estructurado de contratación.

Reglas:

- La disponibilidad es opcional y puede quedar sin informar.
- No constituye oferta, reserva, garantía, representación ni precio.
- El visitante debe confirmar toda condición directamente con el artista.
- Ocultar una obra o perfil retira su disponibilidad pública.
- HABITTUS no valida inventario, agenda, capacidad, propiedad material ni respuesta.

### 21.7 Privacidad y prevención de abuso

- Los canales son privados por defecto.
- El artista debe comprender qué dato quedará público antes de confirmar.
- No se muestra el email utilizado para autenticación salvo que el artista lo agregue expresamente como canal.
- Las direcciones de email podrán representarse mediante una acción que reduzca recolección automatizada, sin impedir accesibilidad.
- Los enlaces usarán protocolos permitidos y protección contra redirecciones inseguras.
- El sistema aplicará límites y monitoreo a accesos automatizados abusivos.
- Un reporte debe permitir señalar enlaces maliciosos, suplantación o contacto indebido.
- La plataforma no garantiza que publicar un dato evite copia por terceros; debe comunicar el carácter público de la decisión.

### 21.8 Permisos

| Acción | Visitante | Artista propietario | Administrador autorizado |
|---|---:|---:|---:|
| Ver canales públicos | Sí | Sí | Sí |
| Ver canales privados | No | Sí | Solo por necesidad operativa autorizada |
| Crear, editar u ordenar | No | Sí | No por defecto |
| Hacer público o privado | No | Sí | Puede bloquear por seguridad |
| Activar enlace externo | Sí | Sí | Sí |
| Gestionar oportunidades internas | No existe en MVP | No existe en MVP | No existe en MVP |

### 21.9 Validaciones

- tipo de canal dentro de valores permitidos;
- email y URL con sintaxis válida;
- protocolos limitados a opciones seguras;
- longitud de etiqueta e instrucciones;
- dominio no incluido en listas de bloqueo de seguridad;
- ausencia de scripts, HTML activo o redirecciones no permitidas;
- pertenencia del canal al perfil autenticado;
- visibilidad pública solo con perfil publicado y cuenta activa;
- cantidad máxima de canales y duplicados evidentes;
- estado compatible con moderación.

La validación de una URL no certifica la legitimidad de su contenido. Los destinos deben continuar sujetos a reporte y revisión.

### 21.10 Manejo de errores

| Situación | Respuesta funcional |
|---|---|
| Formato inválido | Mantener valor y señalar corrección requerida |
| Protocolo no permitido | Rechazar y mostrar tipos admitidos |
| Enlace bloqueado | Retirar exposición e informar al propietario según política |
| Perfil no publicado | Guardar el canal, pero explicar que no será visible |
| Destino externo caído | No asumir eliminación; permitir reporte o edición por el artista |
| Sin autorización | Rechazar sin revelar canales privados |
| Guardado fallido | Mantener datos y permitir reintento |
| Canal retirado durante visita | Mostrar que ya no está disponible, sin exponer su valor anterior |

### 21.11 Reporte vinculado al contacto

Un visitante podrá reportar, mediante el mecanismo de moderación aprobado:

- enlace malicioso o engañoso;
- suplantación de identidad;
- dato personal expuesto sin autorización aparente;
- canal que conduce a contenido prohibido;
- uso abusivo asociado al perfil.

El reporte no inicia una conversación ni garantiza una decisión. Debe generar referencia, estado administrativo y revisión proporcional al riesgo.

### 21.12 Criterios de aceptación del MVP

- Un artista agrega canales sin hacerlos públicos automáticamente.
- Puede revisar el resultado antes de habilitar visibilidad.
- El email de cuenta nunca aparece por inferencia.
- Un visitante accede solo a canales públicos de perfiles publicados.
- Los enlaces externos están identificados y utilizan protocolos permitidos.
- Ocultar perfil o canal retira el dato público y actualiza caché.
- La disponibilidad se presenta como declaración no contractual.
- No existe almacenamiento de mensajes ni datos de propuestas.
- Los permisos impiden modificar o consultar canales privados ajenos.
- Los errores de formato, seguridad y disponibilidad tienen recuperación definida.
- Es posible reportar un canal problemático sin exponer información adicional.

### 21.13 Funcionalidades futuras

Fuera del MVP:

- formulario de contacto intermediado;
- mensajería interna;
- bandeja y estados de consultas;
- oportunidades, convocatorias y postulaciones;
- solicitudes de presupuesto o encargo;
- agenda y disponibilidad temporal;
- archivos adjuntos;
- bloqueo entre usuarios;
- notificaciones de contacto;
- métricas de conversión;
- contratos, pagos, reservas y comisiones;
- herramientas para galerías o representantes.

Antes de implementar estas funciones deberán definirse consentimiento, moderación de comunicaciones, retención, spam, responsabilidad, permisos y modelo de datos.

## 22. Moderación, seguridad y administración

### 22.1 Objetivo y alcance

La moderación y administración deben proteger a usuarios, obras, datos y operación sin sustituir criterios artísticos ni otorgar acceso indiscriminado al contenido privado.

El MVP incluye:

- reporte de perfiles, obras y enlaces públicos;
- cola administrativa de revisión;
- ocultamiento y reactivación autorizados;
- restricción o suspensión de cuentas;
- gestión controlada de taxonomías;
- auditoría de acciones sensibles;
- controles de seguridad para autenticación, autorización, cargas y abuso;
- respuesta operativa básica a incidentes.

No incluye moderación comunitaria, puntuación automática de artistas, apelaciones complejas, detección mediante IA, verificación de identidad profesional ni equipos curatoriales avanzados.

### 22.2 Principios de intervención

- **Necesidad:** intervenir solo ante una regla, riesgo o obligación documentada.
- **Proporcionalidad:** elegir la acción menos restrictiva que controle el problema.
- **Trazabilidad:** registrar actor, objeto, motivo, fecha y resultado.
- **Separación de funciones:** permisos de soporte, moderación, taxonomía y seguridad no se presumen equivalentes.
- **Privacidad:** consultar únicamente datos necesarios para resolver el caso.
- **Reversibilidad:** preferir ocultamiento reversible antes que eliminación física cuando el riesgo lo permita.
- **Consistencia:** casos comparables deben aplicar criterios comparables.
- **No valoración artística:** la administración no decide calidad, mérito o estilo salvo criterios explícitos de completitud y alcance.

### 22.3 Objetos y motivos reportables

Objetos:

- perfil público;
- obra publicada;
- imagen o archivo expuesto;
- canal o enlace de contacto;
- posible suplantación de identidad;
- infracción de propiedad intelectual.

Motivos iniciales:

- contenido ilegal o prohibido;
- infracción de derechos;
- suplantación;
- datos personales expuestos;
- malware, phishing o enlace engañoso;
- contenido fuera del alcance profesional;
- acoso o conducta abusiva vinculada a contenido público;
- spam o duplicación intencional;
- otro motivo con explicación obligatoria.

### 22.4 Estados de reporte y revisión

| Estado | Significado |
|---|---|
| Recibido | El sistema aceptó el reporte |
| Pendiente | Espera asignación o evaluación |
| En revisión | Un administrador autorizado lo está analizando |
| Información requerida | Faltan datos verificables |
| Acción aplicada | Se ejecutó una medida |
| Sin acción | No se verificó incumplimiento suficiente |
| Escalado | Requiere seguridad, legal o responsable superior |
| Cerrado | La revisión terminó y quedó registrada |

Los cambios de estado requieren actor y fecha. Reabrir un caso debe conservar el historial anterior.

### 22.5 Flujo de reporte

1. El visitante o usuario abre “Reportar” sobre un recurso público.
2. Selecciona motivo y aporta contexto mínimo.
3. El sistema valida límites, recurso y datos requeridos.
4. Se crea una referencia sin revelar información administrativa.
5. El reporte ingresa en la cola según riesgo y antigüedad.
6. Un moderador revisa recurso público, historial relevante y regla aplicable.
7. Decide acción, ausencia de acción o escalamiento.
8. Registra motivo y evidencia mínima.
9. El sistema aplica cambios de visibilidad, índice y caché de forma consistente.
10. Se notifica al propietario y reportante solo en el nivel permitido por política.

Los reportes anónimos pueden permitirse para contenido público, sujetos a controles de abuso. No otorgan acceso posterior a detalles del caso.

### 22.6 Acciones administrativas

Acciones del MVP:

- solicitar corrección;
- ocultar un perfil, obra o canal;
- reactivar contenido cuando se resuelve el motivo;
- restringir temporalmente operaciones específicas;
- suspender o reactivar una cuenta;
- bloquear un archivo o enlace riesgoso;
- desactivar un término taxonómico;
- escalar a revisión legal o de seguridad;
- iniciar eliminación únicamente mediante procedimiento autorizado.

Las acciones destructivas requieren confirmación reforzada. Editar la voz profesional del artista no es una acción ordinaria de moderación.

### 22.7 Roles y permisos administrativos

Roles conceptuales mínimos:

- **Soporte:** consulta limitada de cuenta y estado operativo; no modera por defecto.
- **Moderación:** revisa reportes y aplica medidas de contenido autorizadas.
- **Gestor de taxonomía:** mantiene disciplinas, categorías y términos; no accede a credenciales.
- **Seguridad:** atiende abuso, sesiones, enlaces o archivos riesgosos.
- **Administrador principal:** asigna roles y ejecuta acciones excepcionales con control reforzado.

Reglas:

- MFA obligatorio.
- Privilegio mínimo y revisión periódica de accesos.
- Las acciones se autorizan en backend, no solo mediante ocultamiento de interfaz.
- Nadie puede consultar contraseñas o tokens.
- La suplantación de sesión de usuario queda fuera del MVP.
- Los cambios de roles y las exportaciones sensibles requieren auditoría reforzada.

### 22.8 Seguridad de plataforma

Controles mínimos:

- TLS, cifrado en reposo y gestión externa de secretos;
- validación y autorización en cada operación;
- protección CSRF, XSS, inyección y acceso inseguro a objetos;
- límites de frecuencia para acceso, recuperación, búsquedas, reportes y cargas;
- análisis técnico de archivos y comprobación de tipo real;
- URLs firmadas breves para almacenamiento privado;
- dependencias y contenedores analizados por vulnerabilidades;
- separación de entornos y datos;
- backups cifrados y restauraciones probadas;
- logs sin tokens, credenciales ni contenido personal innecesario;
- alertas sobre fallos sostenidos y patrones de abuso;
- revocación de sesiones ante incidentes relevantes.

### 22.9 Auditoría y evidencia

Toda acción sensible registrará:

- identificador de acción;
- administrador o servicio responsable;
- rol efectivo;
- recurso y propietario afectados;
- estado anterior y posterior;
- motivo normalizado y nota limitada;
- fecha y correlación técnica;
- origen administrativo;
- resultado y eventual reversión.

Los registros de auditoría no se modifican mediante operaciones ordinarias. Su acceso está restringido y su retención debe responder a seguridad, privacidad y obligaciones aplicables.

### 22.10 Gestión de taxonomías

El gestor autorizado puede crear, renombrar, ordenar, fusionar o desactivar términos.

Reglas:

- Los identificadores son estables aunque cambie la etiqueta.
- Desactivar no elimina relaciones históricas.
- Fusionar requiere término canónico y migración trazable.
- Los cambios que afecten filtros deben actualizar índice y caché.
- No se crean categorías para un único perfil sin criterio generalizable.
- Los sinónimos facilitan búsqueda, pero no reemplazan texto aportado por el artista.
- Las taxonomías no expresan jerarquía de calidad.

### 22.11 Gestión de incidentes

Flujo mínimo:

1. Detectar y registrar el incidente.
2. Clasificar impacto, alcance y datos potencialmente afectados.
3. Contener mediante revocación, bloqueo, retirada o aislamiento.
4. Preservar evidencia técnica con acceso restringido.
5. Corregir la causa y verificar la recuperación.
6. Comunicar internamente y a afectados cuando corresponda.
7. Documentar cronología, decisiones y acciones preventivas.

Todo incidente debe tener responsable. Las obligaciones de notificación legal se determinarán según jurisdicción y datos tratados antes del lanzamiento.

### 22.12 Validaciones administrativas y de moderación

Validaciones:

- recurso reportable y visible o identificable de forma autorizada;
- motivo permitido y contexto dentro de límites;
- límites contra reportes automatizados abusivos;
- transición de estado válida;
- permiso administrativo específico;
- motivo obligatorio para acciones restrictivas;
- autenticación reciente para acciones críticas;
- imposibilidad de actuar sobre recursos fuera del ámbito del rol;
- coherencia entre contenido, índice, caché y archivos después de una medida.

### 22.13 Manejo de errores administrativos y operativos

Errores:

| Situación | Respuesta funcional |
|---|---|
| Reporte duplicado | Vincular o aceptar sin crear trabajo redundante, preservando señal |
| Recurso ya retirado | Registrar referencia sin revelar causa o contenido privado |
| Permiso insuficiente | Bloquear, auditar intento y no exponer datos |
| Acción concurrente | Mostrar estado actualizado y exigir nueva evaluación |
| Fallo parcial al ocultar | Mantener estado restrictivo, reintentar índice/caché y alertar |
| Auditoría no disponible | Impedir la acción sensible antes que ejecutarla sin registro |
| Servicio externo caído | Contener localmente y reintentar de forma idempotente |
| Evidencia inválida | Solicitar información o cerrar sin acción documentada |

### 22.14 Criterios de aceptación del MVP

- Un visitante puede reportar un recurso público mediante motivos definidos.
- El reporte genera estado y referencia sin revelar datos administrativos.
- Solo roles autorizados acceden a la cola y al detalle necesario.
- Toda medida restrictiva registra actor, motivo, fecha y cambio de estado.
- Ocultar contenido lo retira de páginas, búsqueda, caché y entrega pública dentro del plazo definido.
- El artista no puede revertir una medida administrativa por una operación común.
- Las cuentas administrativas usan MFA y privilegio mínimo.
- Los intentos de acceso horizontal o escalamiento de privilegios son rechazados y observables.
- Los archivos y enlaces peligrosos pueden bloquearse sin eliminar evidencia necesaria.
- Taxonomías desactivadas preservan relaciones históricas.
- Un fallo parcial prioriza retiro seguro y reconciliación posterior.
- Existen procedimientos de respaldo, restauración e incidentes verificables antes de producción.

### 22.15 Funcionalidades futuras

Fuera del MVP:

- apelaciones con expediente completo;
- portales específicos de propiedad intelectual;
- moderación asistida por modelos automáticos;
- detección avanzada de duplicados y fraude;
- verificación de identidad o trayectoria;
- equipos regionales y colas especializadas;
- reglas por jurisdicción automatizadas;
- transparencia pública agregada;
- herramientas de moderación de mensajería;
- retención legal automatizada;
- acceso institucional delegado;
- gestión avanzada de riesgo y fraude transaccional.

Cada incorporación debe actualizar roles, evidencia, privacidad, tiempos de respuesta y criterios de revisión antes de implementarse.

## 23. Notificaciones y comunicaciones

### 23.1 Objetivo y alcance

Las comunicaciones de HABITTUS deben informar hechos relevantes para el acceso, la seguridad y la gestión profesional sin convertirse en un mecanismo de presión, engagement artificial o promoción no solicitada.

El MVP incluye comunicaciones transaccionales por email para:

- verificación de cuenta;
- acceso o recuperación de credenciales;
- confirmación de cambio de email;
- avisos de seguridad y revocación de sesiones;
- confirmación de desactivación o eliminación pendiente;
- medidas administrativas que afecten cuenta, perfil, obra o canal público;
- solicitudes de corrección o información relacionadas con moderación;
- confirmaciones operativas cuya ausencia pueda generar incertidumbre relevante.

El MVP no incluye:

- notificaciones push;
- SMS o mensajería instantánea;
- newsletters;
- campañas comerciales;
- resúmenes de actividad;
- recordatorios para publicar;
- recomendaciones de artistas u obras;
- notificaciones sociales;
- comunicaciones de oportunidades;
- automatizaciones orientadas exclusivamente a retención.

### 23.2 Principios de comunicación

- **Necesidad:** cada mensaje debe responder a un evento que el destinatario necesita conocer.
- **Minimización:** no se incluirán datos, imágenes ni enlaces que excedan el propósito.
- **Claridad:** asunto, motivo, consecuencia y siguiente acción deben ser comprensibles.
- **Seguridad:** los mensajes no solicitarán contraseñas, tokens ni información sensible por respuesta.
- **Idempotencia:** un mismo evento no debe generar comunicaciones duplicadas.
- **Trazabilidad:** el sistema registra plantilla, evento, destinatario, proveedor y resultado técnico.
- **Accesibilidad:** estructura semántica, texto legible y enlaces descriptivos.
- **Neutralidad:** no se utilizarán urgencia artificial, gamificación ni lenguaje promocional en mensajes transaccionales.
- **Control:** las comunicaciones opcionales futuras deberán contar con consentimiento y baja independientes.

### 23.3 Canales del MVP

El email será el único canal saliente automatizado del MVP.

La interfaz podrá mostrar comunicaciones internas no persistentes mediante:

- mensajes inline asociados a una tarea;
- banners de cuenta o moderación;
- confirmaciones temporales;
- estados consultables en las áreas de gestión.

Estos mensajes de interfaz no constituyen una bandeja de notificaciones. La información persistente debe permanecer disponible en el estado de la cuenta, perfil, obra o reporte correspondiente.

### 23.4 Tipos de comunicación

| Categoría | Ejemplos | Obligatoria | Requiere acción |
|---|---|---:|---:|
| Identidad | Verificación, recuperación, cambio de email | Sí | Frecuentemente |
| Seguridad | Acceso sospechoso confirmado, revocación, suspensión | Sí | Según riesgo |
| Cuenta | Desactivación, eliminación pendiente, reactivación | Sí | Según evento |
| Publicación | Fallo persistente que impide publicar | Sí cuando no sea visible en sesión | Sí |
| Moderación | Ocultamiento, corrección, resolución | Sí cuando corresponda | Según medida |
| Operación | Confirmación de tarea crítica diferida | Según impacto | Opcional |

No se enviarán emails por cada guardado, visualización, búsqueda, cambio menor o visita al perfil.

### 23.5 Estados de una comunicación

| Estado | Significado |
|---|---|
| Pendiente | El evento fue aceptado y espera procesamiento |
| Enviando | Un trabajador obtuvo la tarea |
| Entregada al proveedor | El proveedor aceptó el mensaje; no garantiza lectura |
| Entregada | Existe confirmación técnica de entrega, si el proveedor la ofrece |
| Diferida | El proveedor solicita reintento posterior |
| Rebotada | La entrega fue rechazada de forma temporal o definitiva |
| Fallida | No pudo completarse después de la política de reintentos |
| Suprimida | No se envía por seguridad, duplicidad, baja aplicable o dirección inválida |
| Cancelada | El evento perdió vigencia antes de enviarse |

Los estados “Entregada” y “Leída” no deben presentarse como equivalentes. El MVP no incorporará píxeles de lectura.

### 23.6 Flujo de emisión

1. Un caso de uso completa o registra un evento relevante.
2. El backend verifica que el tipo de comunicación corresponda al evento y destinatario.
3. Se genera una clave idempotente.
4. La tarea se incorpora a la cola sin incluir secretos innecesarios.
5. El trabajador obtiene la plantilla versionada y los datos mínimos.
6. Se valida vigencia, estado de cuenta y destino.
7. El proveedor recibe el mensaje.
8. El sistema registra resultado y correlación.
9. Los webhooks firmados actualizan entrega, rebote o supresión.
10. Los fallos transitorios se reintentan con espera progresiva y límite.

Un fallo de email no debe revertir una medida de seguridad o moderación ya aplicada. La comunicación y la operación principal tienen consistencia y recuperación separadas.

### 23.7 Plantillas y contenido

Cada plantilla debe definir:

- identificador estable y versión;
- categoría y evento de origen;
- asunto;
- preencabezado cuando corresponda;
- contenido HTML accesible;
- alternativa de texto plano;
- variables permitidas;
- acción principal y vencimiento, si aplica;
- información de soporte;
- documentos legales o políticas vinculadas;
- idiomas disponibles.

Reglas:

- Los enlaces de seguridad deben dirigir a dominios oficiales de HABITTUS.
- Los tokens temporales no se registrarán en logs ni analítica.
- Las obras o biografías no se incluirán salvo necesidad explícita y aprobada.
- El nombre profesional puede utilizarse como saludo solo si existe y es apropiado; el email no debe inferir identidad pública.
- Toda plantilla modificada requiere revisión de contenido, seguridad y accesibilidad.

### 23.8 Preferencias y consentimiento

En el MVP, los mensajes necesarios para identidad, seguridad, cuenta y medidas administrativas no son opcionales mientras la cuenta permanezca activa.

Reglas:

- No se mezclará contenido promocional con emails obligatorios.
- Una futura preferencia comercial será independiente por categoría y canal.
- La baja comercial futura no bloqueará recuperación ni avisos de seguridad.
- Las preferencias tendrán fuente de verdad, fecha y origen del consentimiento.
- No se asumirá consentimiento por crear una cuenta.
- Las comunicaciones a una cuenta en eliminación se limitarán a seguridad, confirmación y obligaciones aplicables.

### 23.9 Permisos y privacidad

| Acción | Artista | Administrador autorizado | Servicio |
|---|---:|---:|---:|
| Recibir comunicación propia | Sí | Sí | No aplica |
| Consultar contenido de emails ajenos | No | No por defecto | Solo datos mínimos para envío |
| Reenviar verificación propia | Sí, con límite | Soporte puede iniciar flujo autorizado | Sí |
| Editar plantillas | No | Solo rol específico | No |
| Consultar estado técnico | Solo el necesario para su flujo | Soporte limitado | Sí |
| Enviar campaña | No disponible | No disponible en MVP | No disponible |

Los logs no deben conservar cuerpos completos, tokens, emails sin protección ni contenido artístico. El acceso de soporte se limitará a estado, fecha, tipo y causa técnica general.

### 23.10 Eventos de comunicación

Eventos mínimos:

- `account_verification_requested`;
- `account_recovery_requested`;
- `account_email_change_requested`;
- `account_security_state_changed`;
- `account_deactivation_requested`;
- `account_deletion_requested`;
- `moderation_action_applied`;
- `moderation_information_requested`;
- `critical_processing_failed`;
- `communication_delivery_updated`.

Estos nombres documentan intención funcional, no un contrato técnico definitivo. Cada evento deberá tener versión, productor, consumidor, datos permitidos e idempotencia antes de implementarse.

### 23.11 Validaciones

- tipo de evento y plantilla compatibles;
- destinatario vinculado a la cuenta o caso autorizado;
- email validado por el proveedor de identidad cuando corresponda;
- variables requeridas presentes y sanitizadas;
- ausencia de variables no permitidas;
- enlace interno con dominio y destino válidos;
- token vigente y de un solo uso cuando aplique;
- clave idempotente única;
- estado de cuenta compatible con el mensaje;
- plantilla activa, versionada y disponible en idioma admitido;
- firma válida para webhooks;
- límites de reenvío y frecuencia.

### 23.12 Manejo de errores

| Situación | Respuesta funcional |
|---|---|
| Proveedor no disponible | Encolar reintento y alertar si supera el objetivo operativo |
| Rebote temporal | Reintentar con límite y espera progresiva |
| Rebote definitivo | Suprimir destino, registrar estado y solicitar corrección al usuario cuando pueda autenticarse |
| Plantilla inválida | No enviar, registrar error y alertar al responsable |
| Evento duplicado | Reconocer idempotencia sin repetir mensaje |
| Token vencido antes del envío | Cancelar y permitir generar una nueva solicitud |
| Webhook duplicado | Procesar de forma idempotente |
| Firma inválida | Rechazar, registrar señal de seguridad y no cambiar estado |
| Comunicación administrativa fallida | Mantener medida aplicada, reintentar y hacer visible el estado dentro de la plataforma |

### 23.13 Criterios de aceptación del MVP

- Los flujos de verificación y recuperación generan un solo mensaje válido por solicitud aceptada.
- Los enlaces sensibles expiran y son de un solo uso.
- Una medida administrativa no depende del éxito del proveedor de email.
- Cada comunicación tiene categoría, plantilla versionada y clave idempotente.
- Los reintentos no producen duplicados.
- Se registran estados técnicos sin almacenar el cuerpo completo.
- Los webhooks se autentican y toleran repetición.
- Los mensajes incluyen HTML accesible y texto plano.
- No se utilizan píxeles de lectura ni tracking de contenido.
- No se envían campañas, recomendaciones ni recordatorios de engagement.
- Soporte puede comprender un fallo sin acceder a credenciales o información artística privada.
- Los estados pendientes, enviados, rebotados, fallidos y suprimidos son observables.

### 23.14 Funcionalidades futuras

Requieren especificación posterior:

- centro de notificaciones dentro de HABITTUS;
- notificaciones push móviles;
- newsletters y comunicaciones editoriales consentidas;
- alertas de oportunidades;
- preferencias granulares por categoría;
- resúmenes periódicos;
- SMS para seguridad excepcional;
- localización multilingüe completa;
- pruebas controladas de contenido;
- comunicación entre usuarios.

## 24. Analítica, métricas y observabilidad

### 24.1 Objetivo y alcance

La analítica debe permitir evaluar si HABITTUS resuelve la presentación y el descubrimiento profesional sin vigilar de forma invasiva a artistas o visitantes. La observabilidad debe permitir operar el sistema, diagnosticar fallos y proteger datos.

El MVP incluye:

- eventos explícitos de producto vinculados a los objetivos del Capítulo 4;
- métricas agregadas de adopción, activación, publicación, descubrimiento y retención;
- métricas técnicas de disponibilidad, latencia, errores y procesamiento;
- logs estructurados con correlación;
- captura de errores en frontend, backend y trabajadores;
- alertas operativas;
- paneles separados para producto y operación;
- política de minimización y retención.

Quedan fuera del MVP:

- grabación indiscriminada de sesiones;
- mapas de calor invasivos;
- identificación entre sitios;
- perfiles publicitarios;
- venta o cesión de comportamiento;
- captura automática del contenido de formularios;
- atribución comercial avanzada;
- puntuación individual de artistas;
- experimentación automatizada sin revisión.

### 24.2 Principios de medición

- **Propósito definido:** ningún evento se instrumenta sin pregunta, responsable y uso previsto.
- **Minimización:** se recolectan solo propiedades necesarias.
- **Separación:** observabilidad técnica y analítica de producto no comparten datos por conveniencia.
- **Seudonimización:** identificadores internos sustituyen emails y nombres cuando se necesita continuidad.
- **Agregación:** los reportes de producto priorizan cohortes y tendencias, no vigilancia individual.
- **Transparencia:** la política debe explicar categorías de datos y finalidades.
- **Retención limitada:** eventos y logs expiran según necesidad documentada.
- **Calidad:** definiciones, zonas temporales y exclusiones deben permanecer consistentes.
- **Acción:** una métrica sin decisión asociada no justifica recolectar datos adicionales.

### 24.3 Taxonomía de eventos de producto

Convención conceptual: `<dominio>_<entidad>_<acción>` en pasado o como hecho inequívoco.

Eventos esenciales:

| Evento | Momento | Propiedades permitidas |
|---|---|---|
| `account_registration_completed` | Cuenta creada y verificada | método general, versión de flujo |
| `profile_draft_created` | Primer borrador persistido | origen del flujo |
| `profile_publication_completed` | Perfil publicado | completitud por categorías, no texto |
| `profile_publication_blocked` | Publicación rechazada por validación | códigos de requisito, no contenido |
| `artwork_draft_created` | Obra borrador creada | tipo de obra |
| `artwork_upload_completed` | Archivo procesado | clase de tamaño, formato derivado |
| `artwork_publication_completed` | Obra publicada | tipo y cantidad de imágenes |
| `discovery_search_completed` | Búsqueda respondida | cantidad de resultados en rango, filtros; texto excluido por defecto |
| `discovery_result_opened` | Perfil u obra abierto desde resultados | tipo, posición aproximada, filtros activos |
| `professional_contact_activated` | Canal público activado | tipo de canal, nunca valor |
| `moderation_report_submitted` | Reporte aceptado | categoría general, tipo de recurso |
| `account_deactivation_completed` | Cuenta desactivada | motivo controlado opcional |

Los textos libres, nombres, biografías, títulos de obra, emails, URLs completas y términos de búsqueda no se enviarán al proveedor de analítica en el MVP.

### 24.4 Propiedades comunes permitidas

Propiedades técnicas mínimas:

- identificador seudónimo de sesión o usuario cuando sea necesario;
- versión de aplicación;
- entorno;
- tipo general de dispositivo;
- familia de navegador;
- idioma y zona regional general;
- timestamp UTC generado o validado por servidor;
- identificador de correlación no reutilizable como credencial;
- variante funcional solo si existe una prueba aprobada.

Propiedades prohibidas:

- email, teléfono o dirección;
- nombre real o artístico;
- credenciales, tokens o URLs firmadas;
- contenido de perfil, obra, contacto o reporte;
- coordenadas precisas;
- nombres de archivos;
- identificadores de terceros;
- atributos sensibles inferidos.

### 24.5 Métricas esenciales de producto

#### Adopción

- cuentas verificadas por período;
- perfiles borrador creados;
- proporción de registros que inicia perfil;
- tiempo mediano desde registro hasta primer borrador.

#### Activación

- proporción de cuentas verificadas que publica un perfil;
- proporción que crea al menos una obra;
- proporción que publica al menos una obra;
- tiempo mediano hasta primera publicación;
- requisitos que bloquean publicación con mayor frecuencia.

#### Calidad estructural

- perfiles publicados que cumplen todos los mínimos;
- obras con ficha contextual y texto alternativo;
- tasa de archivos fallidos;
- proporción de canales públicos configurados conscientemente;
- contenido retirado por inconsistencias técnicas.

#### Descubrimiento

- sesiones con exploración o búsqueda;
- tasa de búsquedas sin resultados;
- apertura de perfil desde resultados;
- uso y combinación de filtros;
- activaciones de contacto desde perfiles públicos.

#### Retención profesional

- artistas que actualizan perfil u obra dentro de 30 y 90 días;
- perfiles publicados que permanecen activos;
- visitantes que regresan a explorar dentro de 30 días, de forma agregada;
- artistas que vuelven a gestionar contenido después de publicar.

La retención no se evaluará como obligación de uso diario.

### 24.6 Definiciones y denominadores

Reglas:

- “Cuenta verificada” excluye cuentas de prueba, internas y eliminadas antes de completar verificación.
- “Perfil publicado” cuenta la primera transición válida, no cada edición.
- “Obra publicada” requiere visibilidad efectiva o se informa por separado el estado interno.
- “Activación” se define como perfil publicado; la publicación de una obra se reporta como profundidad de activación.
- Las tasas deben mostrar numerador, denominador, período y exclusiones.
- Los tiempos utilizan mediana y percentiles, no solo promedio.
- Las métricas de visitantes distinguen sesiones anónimas sin intentar resolver identidad entre dispositivos.
- Los eventos duplicados y entornos no productivos se excluyen.
- Cambiar una definición requiere versión y fecha; no se reescribe historia sin indicarlo.

### 24.7 Estados de calidad de eventos

| Estado | Significado |
|---|---|
| Propuesto | Tiene objetivo, pero no aprobación |
| Aprobado | Definición y propiedades revisadas |
| Activo | Se emite y monitorea |
| Degradado | Presenta pérdida, duplicidad o esquema inválido |
| Obsoleto | No debe emitirse en nuevas versiones |
| Retirado | Dejó de recolectarse y tiene política de borrado |

Cada evento activo tendrá propietario, versión, fuente, esquema, retención y prueba automatizada o contractual cuando comience la implementación.

### 24.8 Observabilidad técnica

Se deberán observar:

- disponibilidad de web pública, API y administración;
- latencia por ruta y percentiles;
- tasa de errores por categoría;
- saturación de CPU, memoria, conexiones y almacenamiento;
- rendimiento y bloqueos de PostgreSQL;
- profundidad, edad y fallos de colas;
- cargas multimedia, tiempos de procesamiento y rechazos;
- entrega de emails y rebotes;
- sincronización de búsqueda y purga de caché;
- autenticación, límites y señales de abuso;
- resultados de backups y restauraciones.

Los logs usarán estructura, nivel, servicio, entorno, operación y correlación. No registrarán cuerpos completos por defecto.

### 24.9 Indicadores y objetivos técnicos del MVP

Objetivos iniciales para rutas críticas en producción, medidos mensualmente y revisados antes de beta:

| Indicador | Objetivo inicial |
|---|---:|
| Disponibilidad de lectura pública | ≥ 99,5 % |
| Disponibilidad de operaciones autenticadas | ≥ 99,0 % |
| API de lectura pública, p95 sin contar red del usuario | ≤ 500 ms |
| API de escritura común, p95 sin trabajos asíncronos | ≤ 800 ms |
| Tasa de respuestas 5xx | < 1 % de solicitudes válidas |
| Inicio de procesamiento de imagen, p95 | ≤ 60 s desde carga confirmada |
| Finalización de derivados habituales, p95 | ≤ 5 min |
| Retiro de contenido de API pública | Inmediato tras confirmar la medida |
| Retiro de índice y caché, p95 | ≤ 5 min |

Estos objetivos no constituyen garantía contractual. Deben segmentarse por ruta, excluir mantenimiento anunciado y revisarse con volumen real.

### 24.10 Alertas y respuesta

Alertas iniciales:

- indisponibilidad sostenida de rutas públicas;
- incremento de 5xx o latencia sobre objetivo;
- cola sin consumo o trabajos envejecidos;
- procesamiento multimedia fallido por encima del umbral;
- fallos de autenticación anómalos;
- purga de contenido moderado retrasada;
- backup fallido;
- disco, conexiones o memoria próximos al límite;
- errores de proveedor de email sostenidos;
- eventos analíticos inválidos o volumen inesperado.

Cada alerta debe tener severidad, responsable, ventana, umbral, enlace a procedimiento y criterio de cierre. No se crearán alertas sin una acción posible.

### 24.11 Privacidad, consentimiento y retención

- La analítica respetará consentimiento y legislación aplicable.
- Las funciones esenciales no dependerán de aceptar analítica opcional.
- Se aplicará configuración de privacidad antes de enviar eventos.
- La retención de eventos de producto se limitará inicialmente a 13 meses o menos si la finalidad lo permite.
- Los logs operativos tendrán retención menor, definida por nivel y necesidad; seguridad puede requerir períodos específicos documentados.
- Los datos eliminados se propagarán conforme a políticas y capacidades de proveedores.
- El acceso a analítica se limitará por rol.
- Exportaciones deberán evitar granularidad que permita reidentificación innecesaria.
- No se habilitará reproducción de sesiones en el MVP.

### 24.12 Validaciones

- nombre y versión de evento pertenecientes al catálogo;
- propiedades permitidas por esquema;
- ausencia de datos personales y texto libre prohibido;
- tipos, rangos y enumeraciones válidos;
- timestamp razonable y entorno correcto;
- idempotencia o deduplicación cuando el evento representa una transición única;
- consentimiento aplicable satisfecho;
- identificador seudónimo no derivado directamente de email;
- exclusión de tráfico interno y automatizado en métricas de producto;
- correlación técnica separada de identidad analítica;
- paneles con denominadores y períodos explícitos.

### 24.13 Manejo de errores

| Situación | Respuesta funcional |
|---|---|
| Proveedor analítico no disponible | No bloquear la tarea del usuario; descartar o reintentar según política |
| Evento inválido | Rechazar, contabilizar y alertar sin enviar contenido riesgoso |
| Propiedad prohibida detectada | Redactar o bloquear el evento y abrir revisión |
| Duplicidad | Deduplicar transiciones únicas y marcar degradación |
| Pérdida parcial | Informar brecha en paneles; no completar datos mediante inferencias engañosas |
| Error de monitoreo | Mantener operación y alertar por canal independiente cuando sea posible |
| Correlación ausente | Registrar evento técnico limitado y corregir instrumentación |
| Volumen anómalo | Aplicar límites, verificar abuso o bucle y proteger costos |

### 24.14 Criterios de aceptación del MVP

- Existe un catálogo aprobado para cada evento instrumentado.
- Ningún evento contiene emails, biografías, títulos, URLs completas o términos libres.
- Las métricas de adopción y activación tienen denominadores reproducibles.
- Producto puede medir publicación de perfil y obra, descubrimiento y contacto agregado.
- Operación observa disponibilidad, errores, latencia, colas, imágenes, email y backups.
- Los errores de analítica no bloquean funciones del usuario.
- Logs y trazas comparten correlación sin usar credenciales.
- Las alertas críticas tienen responsable y procedimiento.
- Los entornos de prueba se excluyen de métricas productivas.
- La retención y acceso están configurados y documentados.
- No se habilitan grabación de sesión, publicidad ni tracking entre sitios.
- Los paneles indican período, definición y posibles brechas de datos.

### 24.15 Funcionalidades futuras

Fuera del MVP:

- cohortes avanzadas y atribución multicanal;
- experimentación de producto;
- métricas profesionales visibles para artistas;
- embudos de oportunidades o transacciones;
- data warehouse dedicado;
- modelos predictivos;
- detección de anomalías automatizada avanzada;
- observabilidad distribuida entre microservicios;
- SLO contractuales y presupuestos de error formales;
- paneles públicos de estado y transparencia.

## 25. Rendimiento, accesibilidad y compatibilidad

### 25.1 Objetivo y alcance

HABITTUS debe ofrecer una experiencia profesional rápida, accesible y funcional en navegadores móviles y de escritorio vigentes, incluso cuando portfolios contengan múltiples imágenes. Estos requisitos forman parte de la aceptación del MVP y no son mejoras opcionales posteriores.

El capítulo cubre:

- presupuestos y métricas de rendimiento;
- carga y presentación multimedia;
- accesibilidad WCAG 2.2 nivel AA;
- interacción táctil, teclado y tecnologías de asistencia;
- compatibilidad de navegadores, dispositivos y conexiones;
- degradación progresiva;
- pruebas y criterios de liberación.

### 25.2 Objetivos de rendimiento percibido

Objetivos para páginas públicas en el percentil 75 de visitas reales, segmentadas por móvil y escritorio:

| Métrica | Objetivo MVP |
|---|---:|
| Largest Contentful Paint (LCP) | ≤ 2,5 s |
| Interaction to Next Paint (INP) | ≤ 200 ms |
| Cumulative Layout Shift (CLS) | ≤ 0,1 |
| First Contentful Paint (FCP) | ≤ 1,8 s como objetivo interno |
| Time to First Byte (TTFB) | ≤ 800 ms como objetivo interno |

Condiciones de laboratorio para el presupuesto móvil inicial:

- viewport móvil representativo;
- CPU ralentizada de gama media;
- conexión equivalente a 4G moderada;
- caché fría para primera visita;
- perfil público con al menos doce miniaturas y una imagen principal optimizada.

Las métricas reales prevalecen sobre una única prueba de laboratorio. Si una ruta no cumple, deberá existir plan de corrección antes de ampliar funcionalidad no esencial.

### 25.3 Presupuestos de recursos

Presupuestos iniciales por carga pública crítica, comprimidos y revisables con medición real:

| Recurso | Presupuesto inicial |
|---|---:|
| JavaScript inicial propio y dependencias | ≤ 250 KB transferidos |
| CSS inicial | ≤ 75 KB transferidos |
| Fuentes iniciales | ≤ 120 KB transferidos |
| Imagen LCP móvil | ≤ 300 KB cuando la obra lo permita |
| Total inicial sin imágenes diferidas | ≤ 800 KB transferidos |
| Solicitudes críticas antes de interacción | ≤ 25 |

Reglas:

- Toda dependencia que incremente el bundle debe justificar valor y costo.
- Las áreas administrativas pueden tener presupuesto separado, pero no degradar la experiencia pública.
- Los originales nunca se envían a listados o perfiles públicos.
- Los recursos no críticos se cargan de forma diferida.
- Los presupuestos se verifican en CI cuando existan artefactos ejecutables.

### 25.4 Rendimiento de imágenes

- Generar derivados adaptados a miniatura, listado, detalle y densidad de pantalla.
- Entregar formatos modernos con alternativa compatible.
- Declarar ancho y alto o relación de aspecto para evitar desplazamientos.
- Priorizar únicamente la imagen LCP; el resto se carga de forma diferida.
- No precargar galerías completas.
- Utilizar CDN, caché inmutable para derivados versionados y purga para contenido retirado.
- Evitar ampliar imágenes por encima de su resolución útil.
- Conservar proporción y calidad visual sin transmitir originales.
- Mostrar progreso durante carga y procesamiento en gestión.
- Comprimir sin aplicar alteraciones estéticas o recortes no aprobados.

### 25.5 Rendimiento de interfaz y datos

- Renderizar en servidor las rutas públicas que benefician primera carga e indexación.
- Paginar resultados y portfolios extensos.
- Evitar solicitudes en cascada cuando la API pueda devolver una vista coherente.
- Mantener contenido previo durante refetch no destructivo.
- Cancelar consultas obsoletas al cambiar filtros.
- Aplicar debounce moderado a búsqueda, sin retrasar controles directos.
- Evitar stores globales que provoquen renderizados amplios.
- Virtualizar únicamente listas suficientemente extensas y sin degradar accesibilidad.
- Procesar imágenes y emails fuera de la solicitud principal.
- Definir timeouts y estados de recuperación para integraciones.

### 25.6 Estados relacionados con rendimiento

Estados obligatorios:

- carga inicial con estructura reservada;
- carga incremental de página o galería;
- imagen pendiente con proporción estable;
- imagen fallida con alternativa y reintento cuando corresponda;
- procesamiento asíncrono visible en gestión;
- conexión lenta con progreso y expectativas claras;
- modo sin conexión limitado a informar indisponibilidad y preservar datos de formulario solo si existe garantía;
- contenido en caché identificado si pudiera estar desactualizado en área privada.

El MVP no promete uso offline completo. Una interfaz instalada como PWA sigue requiriendo conexión para operaciones persistentes.

### 25.7 Estándar de accesibilidad

Objetivo obligatorio: conformidad WCAG 2.2 nivel AA para las rutas y tareas del MVP.

Alcance mínimo:

- inicio, explorar, búsqueda, perfil y obra públicos;
- registro, acceso y recuperación;
- creación y edición de perfil;
- carga, edición y publicación de obra;
- contacto y cuenta;
- reporte de contenido;
- flujos administrativos críticos.

Una evaluación automática no demuestra conformidad por sí sola. Se requieren pruebas manuales de teclado, ampliación y lector de pantalla.

### 25.8 Requisitos de interacción accesible

- Todas las funciones deben operar con teclado, excepto entradas cuya naturaleza dependa intrínsecamente de trayectoria libre y que tengan alternativa.
- El foco será visible, con orden lógico y no quedará atrapado fuera de diálogos intencionales.
- Se incluirá enlace para saltar al contenido.
- Los objetivos táctiles tendrán al menos 44 por 44 px cuando sea viable y separación suficiente.
- No se dependerá de hover, gesto complejo o color único.
- Los menús y diálogos gestionarán foco, Escape y retorno al activador.
- El arrastre para ordenar tendrá alternativa mediante botones o controles de teclado.
- Los tiempos de sesión o acciones temporales advertirán y permitirán extensión cuando corresponda.
- Las animaciones respetarán reducción de movimiento.
- No se utilizarán destellos que superen límites de seguridad.

### 25.9 Formularios y errores accesibles

- Etiquetas persistentes asociadas programáticamente.
- Instrucciones y formato disponibles antes de ingresar datos.
- Campos obligatorios identificados en texto, no solo color.
- Errores vinculados al campo y resumen navegable en formularios extensos.
- Valores conservados después de errores recuperables.
- Mensajes anunciados mediante regiones apropiadas sin interrumpir excesivamente.
- Autocompletado semántico en datos de cuenta cuando corresponda.
- Controles nativos o patrones ARIA probados antes de componentes personalizados.
- Confirmaciones destructivas con consecuencias específicas.
- Progreso de carga comunicado visualmente y a tecnologías de asistencia.

### 25.10 Accesibilidad del contenido artístico

- Cada imagen funcional tendrá nombre accesible.
- El artista podrá proporcionar texto alternativo por imagen.
- Título, ficha técnica y descripción no sustituyen automáticamente el texto alternativo.
- Imágenes decorativas se marcarán como tales solo cuando no aporten contenido.
- Galerías comunicarán cantidad, posición y selección actual.
- Miniaturas repetidas no generarán anuncios redundantes innecesarios.
- Créditos y pies permanecerán disponibles como texto.
- El zoom del navegador no se bloqueará.
- La obra no se representará únicamente mediante color o una miniatura recortada.
- Formatos audiovisuales futuros requerirán subtítulos, transcripciones y controles específicos antes de habilitarse.

### 25.11 Accesibilidad móvil

- La experiencia debe funcionar desde 320 px de ancho CSS sin desplazamiento horizontal global.
- Debe admitir orientación vertical y horizontal.
- El zoom hasta 200 % y reflow hasta un equivalente de 400 % no deben perder tareas esenciales.
- Los controles no quedarán ocultos por teclado virtual, barras del navegador o áreas seguras.
- Los campos usarán tipo de teclado adecuado sin impedir pegar valores.
- La navegación móvil tendrá nombres accesibles y control de foco.
- Las acciones primarias no dependerán de alcanzar la parte superior de una página extensa.
- Los mensajes y toasts no cubrirán controles críticos.
- Las imágenes se adaptarán a ancho disponible conservando proporción.
- No se exigirán permisos del dispositivo antes de explicar su propósito.

### 25.12 Matriz de compatibilidad

Compatibilidad del MVP:

| Plataforma | Soporte |
|---|---|
| Chrome y Edge de escritorio | Últimas dos versiones mayores estables |
| Firefox de escritorio | Últimas dos versiones mayores estables |
| Safari en macOS | Últimas dos versiones mayores estables |
| Safari en iOS/iPadOS | Versión mayor vigente y anterior |
| Chrome en Android | Versión estable vigente y anterior cuando el sistema lo permita |
| WebViews embebidos | Funcionalidad básica no garantizada; se ofrecerá abrir en navegador |
| Lectores de pantalla | VoiceOver con Safari y NVDA con Firefox o Chrome como combinaciones mínimas de prueba |

La matriz se revisará antes de cada release importante. “Última” se interpreta en la fecha de liberación, no en la fecha de redacción del documento.

### 25.13 Degradación progresiva

- Los perfiles y obras públicas deben conservar contenido esencial si falla JavaScript después del render inicial.
- Enlaces, navegación y lectura no dependerán de APIs experimentales.
- Funciones no disponibles deben ocultarse o explicar alternativa, no fallar silenciosamente.
- La carga directa puede requerir JavaScript, pero los límites y errores deben ser comprensibles.
- Las imágenes tendrán alternativa y espacio reservado si CDN o formato moderno falla.
- El tema, animación y mejoras PWA no condicionan tareas centrales.
- Cookies bloqueadas o almacenamiento restringido deben producir un mensaje claro en autenticación, no un bucle.
- El navegador no soportado recibirá recomendación concreta sin bloquear contenido público básico cuando sea seguro.

### 25.14 Pruebas y controles de calidad

Antes del release MVP:

- auditoría automática de accesibilidad en rutas clave;
- revisión manual completa por teclado;
- pruebas con VoiceOver y NVDA en combinaciones admitidas;
- zoom, reflow, texto ampliado y reducción de movimiento;
- pruebas táctiles en iOS y Android reales o laboratorios confiables;
- Lighthouse u otra prueba de laboratorio con presupuesto definido;
- medición de Web Vitals reales en beta, con consentimiento aplicable;
- pruebas de carga sobre lectura pública, búsqueda y carga de archivos;
- validación de imágenes lentas, fallidas y de proporciones extremas;
- matriz de navegadores en CI o servicio de compatibilidad;
- revisión de tamaño de bundles y número de solicitudes;
- pruebas de retiro de contenido en caché y CDN.

Los defectos que impidan acceso, autenticación, publicación, lectura de obras o moderación no pueden aceptarse como diferencias menores de navegador.

### 25.15 Manejo de errores y excepciones

| Situación | Respuesta requerida |
|---|---|
| Métrica de rendimiento excedida | Registrar regresión, identificar recurso y bloquear release si afecta ruta crítica |
| Formato de imagen no soportado | Entregar alternativa compatible |
| JavaScript fallido | Mantener lectura pública esencial y ofrecer recarga para tareas interactivas |
| Tecnología asistiva sin nombre de control | Tratar como defecto bloqueante de la tarea |
| Navegador fuera de matriz | Ofrecer contenido básico y recomendación; no prometer soporte completo |
| Conexión interrumpida | Conservar datos cuando exista garantía y permitir reintento idempotente |
| CDN no disponible | Mostrar alternativa y evitar bucles de solicitud |
| Foco perdido tras actualización | Restablecerlo en contexto predecible |
| Teclado virtual oculta acción | Ajustar viewport o permitir desplazamiento hasta el control |

Una excepción a accesibilidad o presupuesto requiere responsable, justificación, impacto, mitigación, fecha límite y aprobación. No puede convertirse en exención permanente implícita.

### 25.16 Criterios de aceptación del MVP

- Las rutas públicas cumplen objetivos LCP, INP y CLS en laboratorio y se instrumentan para medición real.
- Los presupuestos de JavaScript, CSS, fuentes e imágenes se verifican antes de release.
- Los originales no se entregan en vistas públicas.
- Las tareas esenciales funcionan desde 320 px, con zoom y orientación alternativa.
- Registro, perfil, obra, búsqueda y reporte pueden operarse con teclado.
- Los controles tienen foco visible, nombres accesibles y errores asociados.
- Las imágenes admiten texto alternativo y conservan proporción.
- Se prueban VoiceOver y NVDA en la matriz mínima.
- Las últimas versiones admitidas de navegadores completan los flujos críticos.
- Los estados lento, fallido, offline limitado y no soportado tienen respuesta definida.
- Una regresión crítica de accesibilidad o compatibilidad bloquea la liberación.
- Las excepciones quedan documentadas y tienen fecha de corrección.

### 25.17 Funcionalidades futuras

Fuera del MVP:

- modo offline completo;
- sincronización de borradores con resolución de conflictos;
- aplicaciones móviles nativas;
- tema oscuro;
- formatos audiovisuales y 3D accesibles;
- soporte formal de navegadores antiguos;
- selección de calidad manual para conexiones limitadas;
- preferencias avanzadas de densidad y contraste;
- auditorías externas periódicas certificadas;
- presupuestos diferenciados por mercados internacionales.

## 26. Privacidad, cumplimiento y gestión de datos

### 26.1 Objetivo y alcance

HABITTUS debe tratar datos personales, profesionales y artísticos de manera legítima, transparente y proporcional. La privacidad forma parte del diseño del producto, del modelo de datos y de la operación; no se limita a una política legal publicada.

El MVP incluye:

- inventario de datos y finalidades;
- separación entre cuenta privada y perfil público;
- consentimiento cuando sea la base aplicable;
- controles explícitos de visibilidad;
- derechos de acceso, corrección, desactivación y eliminación;
- reglas de retención y supresión;
- acuerdos y evaluación de proveedores;
- seguridad de datos en tránsito, reposo y backups;
- registro de aceptación de documentos legales;
- procedimiento de incidentes y solicitudes de titulares;
- documentación de transferencias y ubicaciones de tratamiento.

Quedan fuera del MVP:

- tratamiento de datos biométricos;
- verificación documental de identidad;
- perfiles publicitarios;
- venta de datos;
- seguimiento entre sitios;
- decisiones automatizadas con efectos significativos;
- datos de menores como público objetivo deliberado;
- herramientas avanzadas de residencia regional por usuario;
- automatización jurídica multijurisdiccional.

### 26.2 Principios de privacidad por diseño

- **Finalidad:** cada dato debe responder a una necesidad documentada.
- **Minimización:** no se recolecta información “por si fuera útil”.
- **Privacidad por defecto:** canales, borradores, originales y datos de cuenta comienzan privados.
- **Separación:** identidad de acceso, identidad profesional, contenido público y administración permanecen diferenciados.
- **Transparencia:** el usuario conoce qué se publica, quién puede verlo y para qué se procesa.
- **Control:** las decisiones de publicación y contacto son explícitas y reversibles cuando corresponda.
- **Seguridad:** acceso por privilegio mínimo, cifrado, trazabilidad y gestión de incidentes.
- **Retención limitada:** los datos se conservan solo durante el plazo necesario.
- **Exactitud:** el titular puede corregir datos bajo su control.
- **Responsabilidad demostrable:** decisiones, proveedores, controles y excepciones deben documentarse.

### 26.3 Categorías de datos

| Categoría | Ejemplos | Visibilidad inicial |
|---|---|---|
| Cuenta | Email de acceso, identificador externo, estado | Privada |
| Perfil profesional | Nombre artístico, biografía, disciplinas | Privada hasta publicar |
| Portfolio | Obras, fichas, imágenes y créditos | Privada hasta publicar cada recurso |
| Contacto profesional | Email o enlaces declarados | Privada por canal |
| Operación | Estados, soporte, procesamiento y entregas | Interna restringida |
| Seguridad | Sesiones, intentos, señales de abuso | Interna altamente restringida |
| Moderación | Reportes, evidencia, decisiones | Administrativa restringida |
| Analítica | Eventos seudónimos y agregados | Interna según rol |
| Legal | Aceptaciones, solicitudes y retenciones | Interna restringida |

No se considerará que un dato deja de ser personal por haber sido publicado por el artista. Su reutilización debe permanecer limitada al propósito documentado.

### 26.4 Roles y responsabilidades sobre datos

- **Producto:** justifica finalidad, campos, visibilidad y métricas.
- **Ingeniería:** implementa controles, minimización, eliminación y trazabilidad.
- **Diseño:** comunica decisiones y evita patrones de consentimiento engañosos.
- **Seguridad:** gestiona riesgos, accesos, incidentes y vulnerabilidades.
- **Operación/soporte:** accede solo a datos necesarios para casos asignados.
- **Moderación:** trata reportes y evidencia según políticas.
- **Responsable legal o de privacidad:** revisa bases, documentos, proveedores y solicitudes.
- **Artista:** decide contenido profesional publicado y declara derechos suficientes.
- **Proveedores:** tratan datos únicamente bajo instrucciones y acuerdos aplicables.

Antes de producción se debe identificar formalmente al responsable del tratamiento y los canales oficiales de privacidad según las jurisdicciones de lanzamiento.

### 26.5 Finalidades y bases de tratamiento

Finalidades del MVP:

- crear y proteger cuentas;
- permitir perfiles y portfolios;
- publicar contenido por decisión del artista;
- ofrecer descubrimiento y contacto público;
- prestar soporte y comunicaciones transaccionales;
- moderar, prevenir abuso y proteger derechos;
- medir funcionamiento y adopción de forma minimizada;
- cumplir obligaciones legales.

La base jurídica concreta deberá ser validada por asesoría competente antes del lanzamiento. El consentimiento solo se utilizará cuando pueda ser libre, específico, informado, verificable y revocable; no debe emplearse para encubrir tratamientos necesarios para prestar el servicio.

### 26.6 Consentimiento y preferencias

Reglas:

- La aceptación de términos y el reconocimiento de privacidad deben registrarse por versión y fecha.
- El consentimiento opcional debe estar separado de la creación de cuenta.
- Las casillas opcionales no estarán premarcadas.
- Rechazar analítica opcional no limitará funciones esenciales.
- Retirar consentimiento debe ser tan accesible como otorgarlo.
- Las finalidades nuevas requieren evaluación y, cuando corresponda, nuevo consentimiento.
- Publicar un perfil, una obra o un canal constituye una acción específica de visibilidad, no consentimiento general para usos externos.
- No habrá consentimiento agrupado para newsletters, publicidad y analítica.
- Las evidencias de consentimiento no almacenarán más información de la necesaria.

### 26.7 Transparencia y avisos

La política de privacidad debe explicar:

- responsable y contacto;
- categorías y origen de datos;
- finalidades y bases aplicables;
- contenido público y consecuencias de publicación;
- proveedores y transferencias;
- retención;
- derechos y procedimiento;
- analítica y cookies;
- seguridad e incidentes;
- cambios de política;
- tratamiento de propiedad intelectual y reportes;
- alcance territorial y edad mínima.

Los avisos contextuales deben aparecer antes de publicar contacto, eliminar cuenta, cargar originales o aceptar analítica opcional. No deben depender exclusivamente de un documento extenso.

### 26.8 Retención

Antes de beta se aprobará una matriz de retención con propietario y fundamento.

Política inicial:

| Dato | Retención operativa |
|---|---|
| Cuenta activa | Mientras se preste el servicio y sea necesaria |
| Borradores activos | Mientras exista la cuenta; se avisará antes de limpieza por inactividad futura |
| Contenido eliminado | Período breve de recuperación y luego supresión física programada |
| Sesiones | Hasta expiración o revocación más registro mínimo de seguridad |
| Logs operativos | Plazo corto según nivel, normalmente 30–90 días |
| Eventos analíticos | Máximo inicial de 13 meses, preferentemente menos |
| Reportes y auditoría | Según seguridad, defensa de derechos y obligación documentada |
| Backups | Ventana rotativa definida; la eliminación se materializa al expirar copias |
| Emails transaccionales | Metadatos técnicos durante el plazo de soporte; cuerpos no persistidos por defecto |

Una retención legal excepcional debe tener alcance, autoridad, responsable y fecha de revisión.

### 26.9 Acceso, rectificación y portabilidad

Flujo de solicitud:

1. El titular presenta la solicitud por cuenta autenticada o canal oficial.
2. HABITTUS verifica identidad de forma proporcional.
3. Se registra alcance y fecha.
4. Se localizan sistemas y proveedores afectados.
5. Se evalúan derechos de terceros y excepciones legales.
6. Se responde en formato comprensible dentro del plazo aplicable.
7. Se registran acciones sin conservar copias innecesarias.

El MVP permitirá edición directa de la mayoría de datos de cuenta y perfil. Una exportación formal, si se solicita, debe usar formato interoperable para datos estructurados y enlaces o archivos autorizados, sin incluir datos de terceros o secretos internos.

### 26.10 Desactivación y eliminación

Procedimiento:

1. Mostrar consecuencias y alcance.
2. Requerir autenticación reciente.
3. Confirmar la solicitud.
4. Retirar inmediatamente perfil, obras y contacto de exposición.
5. Revocar sesiones y detener comunicaciones no necesarias.
6. Iniciar período de seguridad, si está aprobado.
7. Eliminar o anonimizar datos en base, almacenamiento, índices, cachés y proveedores.
8. Registrar cumplimiento mínimo.
9. Permitir que backups expiren según ciclo documentado, sin restaurar datos eliminados al entorno activo.

La eliminación puede preservar registros mínimos por fraude, seguridad, ejercicio de derechos u obligación legal. Estas excepciones deben comunicarse y no habilitan reutilización comercial.

### 26.11 Datos públicos y propiedad intelectual

- El artista conserva derechos sobre su contenido.
- Publicar concede únicamente permisos necesarios para operar y presentar HABITTUS según términos.
- Los originales permanecen privados y los derivados públicos siguen la visibilidad del recurso.
- Retirar contenido invalida acceso público, caché e índice con prioridad.
- Los metadatos sensibles se eliminan de derivados cuando corresponda.
- Los créditos y datos de terceros deben contar con fundamento para publicación.
- Las solicitudes de propiedad intelectual se separan de solicitudes generales de privacidad, aunque puedan relacionarse.
- El contenido público no se utilizará para entrenar modelos, publicidad o licenciamiento no documentado sin una decisión y base explícitas futuras.

### 26.12 Proveedores y transferencias

Todo proveedor con acceso a datos debe evaluarse por:

- finalidad y categorías tratadas;
- rol contractual;
- ubicación y subprocesadores;
- medidas de seguridad;
- retención y eliminación;
- exportabilidad y portabilidad;
- notificación de incidentes;
- auditorías o certificaciones relevantes;
- capacidad de atender derechos;
- bloqueo tecnológico y terminación.

Debe existir acuerdo de tratamiento cuando corresponda. Las transferencias internacionales requieren mecanismo válido antes de enviar datos. No se habilitará un proveedor en producción sin propietario interno y registro actualizado.

### 26.13 Seguridad y acceso a datos

- Cifrado TLS y cifrado gestionado en reposo.
- Credenciales separadas por entorno y servicio.
- Privilegio mínimo y revisión periódica de accesos.
- MFA administrativo.
- Datos reales prohibidos en desarrollo.
- Consultas administrativas auditadas cuando sean sensibles.
- Exportaciones protegidas, temporales y eliminadas después de su finalidad.
- Logs con redacción de datos y prohibición de secretos.
- Backups cifrados con pruebas de restauración.
- Respuesta a incidentes con evaluación de afectación a titulares.

### 26.14 Manejo de incidentes de privacidad

1. Detectar y contener.
2. Preservar evidencia con acceso restringido.
3. Determinar categorías, volumen, titulares y jurisdicciones.
4. Evaluar riesgo para derechos y libertades.
5. Corregir exposición y revocar accesos.
6. Notificar a responsables internos.
7. Comunicar a autoridades y titulares cuando sea obligatorio.
8. Documentar decisión, incluso si no se notifica.
9. Implementar acciones preventivas.

No se afirmará que un incidente está resuelto hasta verificar contención, recuperación y ausencia de exposición residual en cachés o proveedores.

### 26.15 Criterios de aceptación del MVP

- Existe inventario de datos, finalidades, sistemas y proveedores.
- Cuenta, perfil público y administración permanecen separados.
- Borradores, contacto y originales son privados por defecto.
- Las decisiones de publicación son explícitas y reversibles.
- Consentimientos opcionales están separados y versionados.
- Existe matriz aprobada de retención.
- Eliminar cuenta retira exposición inmediatamente y propaga supresión.
- El titular puede corregir datos y presentar solicitudes.
- Proveedores productivos tienen evaluación y acuerdos aplicables.
- Accesos administrativos usan MFA y privilegio mínimo.
- Analítica no contiene textos libres ni identificadores directos.
- Existe procedimiento probado de incidente de privacidad.
- Las políticas y avisos fueron revisados antes del lanzamiento.

### 26.16 Funcionalidades futuras

Fuera del MVP:

- portal automatizado de derechos;
- residencia regional elegible;
- cuentas de menores con consentimiento tutelar;
- privacidad diferencial;
- automatización multijurisdiccional;
- centro avanzado de consentimientos;
- retenciones legales automatizadas;
- exportación autoservicio completa;
- informes públicos de transparencia;
- clasificación automatizada de datos.

## 27. Pruebas y estrategia de calidad

### 27.1 Objetivo y principios

La calidad de HABITTUS debe verificarse durante todo el ciclo de entrega. Las pruebas priorizarán reglas de dominio, privacidad, autorización, publicación, multimedia y accesibilidad por encima de métricas superficiales de cobertura.

Principios:

- pruebas cercanas al riesgo;
- automatización reproducible;
- aislamiento entre entornos;
- datos sintéticos;
- fallos accionables;
- prevención antes que corrección en producción;
- criterios de salida explícitos;
- regresión obligatoria para defectos corregidos;
- revisión manual donde la automatización no es suficiente.

### 27.2 Alcance del MVP

La estrategia incluye:

- pruebas unitarias;
- pruebas de integración;
- pruebas de contratos API;
- pruebas end-to-end;
- seguridad automatizada y manual focalizada;
- accesibilidad automática y manual;
- compatibilidad entre navegadores;
- rendimiento y carga;
- migraciones y restauración;
- pruebas de resiliencia en integraciones críticas;
- aceptación funcional por producto.

No incluye certificaciones externas completas, chaos engineering continuo, dispositivos propios a gran escala ni red team permanente.

### 27.3 Pirámide de pruebas

Distribución orientativa:

1. **Unitarias:** mayoría de casos, rápidas y deterministas.
2. **Integración:** módulos, persistencia, colas y adaptadores reales controlados.
3. **Contratos:** compatibilidad entre API y clientes.
4. **End-to-end:** pocos flujos críticos y representativos.
5. **Exploratorias/manuales:** experiencia artística, accesibilidad y riesgos emergentes.

No se duplicará cada caso en todas las capas. Cada regla debe probarse en el nivel más bajo que otorgue confianza suficiente.

### 27.4 Pruebas unitarias

Cobertura prioritaria:

- transiciones de cuenta, perfil y obra;
- completitud y publicación;
- herencia de visibilidad;
- permisos y propiedad;
- filtros y normalización;
- retención y elegibilidad de eliminación;
- idempotencia de eventos;
- validación de archivos y canales;
- relevancia básica;
- redacción de datos analíticos;
- formateo de fechas y taxonomías.

Los módulos críticos de dominio tendrán cobertura de ramas objetivo mínima de 80 %, sin usar el porcentaje como sustituto de casos límite.

### 27.5 Pruebas de integración

Deben cubrir:

- API con PostgreSQL real aislado;
- migraciones desde la versión anterior soportada;
- transacciones de publicación y ocultamiento;
- almacenamiento S3 compatible y URLs firmadas;
- procesamiento de imágenes;
- BullMQ/Redis, reintentos e idempotencia;
- proveedor de identidad mediante entorno de prueba o simulación contractual;
- email y webhooks firmados;
- índice de búsqueda o consultas relacionales;
- auditoría administrativa;
- eliminación propagada entre sistemas.

Los dobles de prueba no deben ocultar diferencias críticas de proveedores. Se ejecutarán pruebas periódicas contra sandboxes reales.

### 27.6 Pruebas de contratos

- El esquema OpenAPI será versionado y validado.
- Los clientes generados deben compilar contra el contrato.
- Cambios incompatibles requieren nueva versión o período de transición.
- Respuestas de error, paginación y estados deben incluirse.
- Webhooks tendrán esquemas, firma, repetición y orden no garantizado probados.
- Eventos asíncronos tendrán versión y propiedades permitidas.
- CI detectará cambios de contrato no revisados.

### 27.7 Pruebas end-to-end

Flujos mínimos automatizados:

1. Registro, verificación simulada e inicio de sesión.
2. Creación y publicación de perfil.
3. Carga, procesamiento y publicación de obra.
4. Exploración, búsqueda y apertura de perfil.
5. Configuración y visibilidad de contacto.
6. Ocultamiento de perfil y retiro público.
7. Reporte, moderación y auditoría.
8. Recuperación de acceso.
9. Desactivación y eliminación pendiente.
10. Rechazo de acceso a recurso ajeno.

Las pruebas deben ser independientes, paralelizables y limpiar sus datos.

### 27.8 Pruebas de seguridad

Incluyen:

- análisis de dependencias y contenedores;
- análisis estático;
- detección de secretos;
- autorización horizontal y vertical;
- CSRF, XSS, inyección y redirecciones;
- límites de frecuencia;
- sesiones y revocación;
- carga de archivos maliciosos o inconsistentes;
- URLs firmadas y expiración;
- webhooks falsificados y repetidos;
- exposición en logs y errores;
- configuración de headers y TLS;
- revisión de amenazas antes de beta.

Hallazgos críticos o altos explotables bloquean release hasta corregir o contar con excepción formal de seguridad.

### 27.9 Pruebas de accesibilidad

- axe o equivalente en componentes y páginas;
- navegación manual completa por teclado;
- VoiceOver con Safari;
- NVDA con Firefox o Chrome;
- foco en cambios de ruta y diálogos;
- zoom, reflow y texto ampliado;
- contraste y estados sin dependencia de color;
- formularios, errores y progreso anunciados;
- ordenamiento con alternativa al arrastre;
- objetivos táctiles y teclado virtual móvil;
- texto alternativo y galerías.

Los defectos que impidan una tarea central son bloqueantes aunque una auditoría automática obtenga puntuación alta.

### 27.10 Pruebas de rendimiento y compatibilidad

- presupuestos de JavaScript, CSS, fuentes e imágenes;
- Web Vitals en laboratorio;
- carga de API de lectura, búsqueda y escritura;
- procesamiento concurrente de imágenes;
- colas y reintentos;
- navegación en matriz de navegadores;
- iOS y Android representativos;
- conexiones lentas y errores de CDN;
- portfolios con límites máximos;
- purga de contenido público.

Una regresión superior al 10 % en una métrica crítica requiere revisión, aun si permanece dentro del umbral absoluto.

### 27.11 Datos y ambientes de prueba

- Se utilizarán factories y fixtures sintéticos.
- No se copiarán datos productivos.
- Las imágenes de prueba tendrán licencia compatible y casos de proporción, tamaño y corrupción.
- Cada suite crea identificadores únicos.
- Relojes, proveedores y colas se controlan cuando la determinación lo exige.
- Los secretos de prueba son distintos por ambiente.
- Las cuentas administrativas de prueba no existen en producción.
- Los datos end-to-end expiran automáticamente.

### 27.12 Regresión y gestión de defectos

Todo defecto debe registrar severidad, alcance, ambiente, reproducción, evidencia y versión.

Severidades:

- **S0:** incidente activo de seguridad, privacidad o pérdida masiva.
- **S1:** tarea crítica imposible, exposición de datos o corrupción relevante.
- **S2:** función importante degradada con alternativa limitada.
- **S3:** defecto menor sin pérdida funcional principal.

Cada corrección S0–S2 requiere prueba de regresión. Defectos recurrentes deben originar análisis causal.

### 27.13 Criterios de entrada y salida

Para desplegar a producción:

- lint y tipos exitosos;
- pruebas unitarias, integración, contratos y E2E críticas aprobadas;
- build reproducible;
- migraciones probadas;
- análisis de seguridad sin hallazgos bloqueantes;
- accesibilidad crítica aprobada;
- presupuestos de rendimiento dentro de límites o excepción vigente;
- rollback verificado;
- monitoreo y alertas preparados;
- aceptación de producto;
- cambios documentados.

No se omitirán controles por presión de fecha sin una excepción registrada con riesgo, mitigación, responsable y vencimiento.

### 27.14 Responsabilidades

- Desarrollo escribe y mantiene pruebas de su cambio.
- QA define estrategia, riesgos y regresión transversal.
- Producto valida aceptación funcional.
- Diseño revisa experiencia y accesibilidad.
- Seguridad revisa amenazas y hallazgos.
- Operación valida despliegue, monitoreo, backup y rollback.
- La persona revisora verifica pruebas y alcance del PR.

La calidad es compartida; QA no funciona como último filtro aislado.

### 27.15 Manejo de pruebas inestables

- Una prueba inestable se identifica y asigna de inmediato.
- No se acepta reintento ilimitado como solución.
- Puede ponerse en cuarentena solo con ticket, responsable y vencimiento.
- El flujo crítico debe conservar cobertura alternativa.
- Se medirá tasa de inestabilidad.
- La prueba se corrige o elimina si no aporta señal confiable.
- Fallos de infraestructura se distinguen de defectos de producto.

### 27.16 Criterios de aceptación del MVP

- Existe suite automatizada para reglas críticas.
- Los diez flujos E2E mínimos están cubiertos.
- Autorización horizontal y cargas maliciosas se prueban.
- Migraciones y restauración tienen pruebas repetibles.
- WCAG se valida automática y manualmente.
- La matriz de navegadores completa tareas críticas.
- CI bloquea fallos de calidad obligatorios.
- Datos de prueba son sintéticos y se eliminan.
- Defectos S0–S2 tienen regresión.
- Las pruebas inestables tienen proceso y límite.
- Cada release conserva evidencia de resultados.
- Las excepciones tienen aprobación y fecha de vencimiento.

### 27.17 Funcionalidades futuras

- pruebas de caos continuas;
- red team periódico;
- certificación externa de accesibilidad;
- granja propia de dispositivos;
- pruebas visuales masivas;
- canary automatizado por métricas;
- fuzzing extendido;
- pruebas contractuales de múltiples clientes móviles;
- quality gates predictivos.

## 28. Despliegue, ambientes y operación

### 28.1 Objetivo y alcance

La operación debe permitir entregar cambios reproducibles, observables y reversibles sin utilizar producción como ambiente de prueba. El MVP empleará automatización suficiente para minimizar acciones manuales sobre infraestructura y datos.

Incluye:

- ambientes separados;
- CI/CD por commit y pull request;
- artefactos inmutables;
- migraciones controladas;
- secretos gestionados;
- backups y restauración;
- monitoreo, alertas y guardias definidas;
- rollback;
- procedimientos de incidente;
- registro de releases.

### 28.2 Ambientes

| Ambiente | Propósito | Datos |
|---|---|---|
| Local | Desarrollo individual | Sintéticos |
| CI | Pruebas automatizadas efímeras | Sintéticos y aislados |
| Preproducción | Validación integrada y aceptación | Sintéticos representativos |
| Producción | Servicio a usuarios reales | Reales, acceso restringido |

Preproducción debe reflejar versiones y topología esenciales de producción, sin exigir idéntica escala. Ningún ambiente no productivo utilizará copias de datos reales sin proceso excepcional de anonimización aprobado.

### 28.3 Configuración por ambiente

- Configuración externa al código.
- Variables validadas al iniciar.
- URLs, proveedores y credenciales específicos por ambiente.
- Flags con propietario, valor por ambiente y fecha de retiro.
- No se usan defaults inseguros en producción.
- La aplicación falla de forma explícita si falta una variable obligatoria.
- La configuración no secreta se versiona.
- Los cambios productivos quedan auditados.

### 28.4 Gestión de secretos

- Secretos en gestor administrado, nunca en Git.
- Acceso mediante identidad de servicio cuando sea posible.
- Privilegio mínimo por aplicación y ambiente.
- Rotación programada y ante incidentes.
- Prohibición de secretos en logs, imágenes y artefactos.
- Detección automática en commits.
- Acceso humano excepcional, temporal y auditado.
- Procedimiento de revocación de emergencia.
- Inventario con propietario y fecha de rotación.

### 28.5 Integración continua

Cada pull request ejecutará:

1. instalación bloqueada y reproducible;
2. lint y formato;
3. comprobación de tipos;
4. pruebas unitarias;
5. pruebas de integración y contratos relevantes;
6. análisis de secretos y dependencias;
7. build de aplicaciones y contenedores;
8. controles de accesibilidad automatizados;
9. presupuestos de bundle y rendimiento aplicables;
10. E2E críticos según costo y alcance;
11. publicación de resultados y artefactos.

No se permitirá fusionar con controles requeridos fallidos salvo procedimiento de emergencia.

### 28.6 Entrega continua

Flujo:

1. Fusionar cambio aprobado.
2. Construir una vez artefactos identificados por commit.
3. Firmar o registrar procedencia cuando la plataforma lo permita.
4. Desplegar el mismo artefacto en preproducción.
5. Ejecutar migraciones compatibles y smoke tests.
6. Obtener aprobación de producción.
7. Desplegar gradual o atómicamente según componente.
8. Ejecutar smoke tests productivos.
9. Observar métricas durante ventana definida.
10. Confirmar release o iniciar rollback.

No se reconstruirá un artefacto diferente para producción.

### 28.7 Migraciones de datos

- Versionadas y revisadas junto al código.
- Compatibles con la versión anterior durante despliegue.
- Separar expansión, backfill y contracción para cambios riesgosos.
- Probar con volumen representativo.
- Definir duración, locks y capacidad requerida.
- No ejecutar cambios destructivos antes de confirmar que ninguna versión usa el campo.
- Backfills reanudables e idempotentes.
- Backup o punto de recuperación antes de migraciones de riesgo.
- Rollback lógico documentado; no asumir que toda migración puede revertirse automáticamente.

### 28.8 Estrategia de despliegue

El MVP utilizará rolling update o estrategia blue/green según capacidades del proveedor.

Reglas:

- Instancias sin estado persistente local.
- Health checks de vida y disponibilidad diferenciados.
- Detención ordenada para solicitudes y trabajos.
- Trabajadores completan o reencolan tareas.
- Compatibilidad temporal entre frontend, API y esquema.
- CDN y caché se invalidan solo cuando corresponde.
- Cambios de alto riesgo pueden utilizar flag desactivado por defecto.
- Producción requiere aprobación explícita.

### 28.9 Rollback

Se inicia rollback ante:

- aumento sostenido de errores;
- indisponibilidad de flujo crítico;
- exposición o corrupción de datos;
- regresión grave de rendimiento o accesibilidad;
- fallos de autorización;
- procesamiento asíncrono acumulado sin recuperación.

Procedimiento:

1. Detener promoción.
2. Desactivar flag si aísla el problema.
3. Restaurar artefacto anterior compatible.
4. Contener escrituras si existe riesgo de datos.
5. Verificar health y smoke tests.
6. Comunicar estado.
7. Corregir datos mediante procedimiento específico; no restaurar backup indiscriminadamente.
8. Registrar incidente y causa.

### 28.10 Backups y restauración

- PostgreSQL: backups automáticos cifrados y recuperación a punto en el tiempo si está disponible.
- Objetos: versionado o protección equivalente y políticas de ciclo de vida.
- Configuración crítica: versionada o exportable.
- Backups separados de credenciales operativas.
- Retención alineada con privacidad.
- Prueba de restauración trimestral como mínimo durante el MVP.
- Registro de duración, integridad y hallazgos.

Objetivos iniciales: RPO máximo de 24 horas y RTO máximo de 8 horas para desastre completo; antes de beta se intentará mejorar a RPO de 1 hora mediante PITR y RTO de 4 horas, sujeto a pruebas y costo aprobado.

### 28.11 Monitoreo y alertas

Monitorear:

- rutas públicas y autenticadas;
- latencia y errores;
- base de datos;
- colas y trabajos fallidos;
- almacenamiento y CDN;
- autenticación;
- email;
- búsqueda;
- backups;
- costos y cuotas;
- certificados y dominios.

Toda alerta debe indicar severidad, responsable, procedimiento y condición de cierre. Las alertas se prueban antes de depender de ellas.

### 28.12 Gestión de incidentes

Severidades:

- **SEV-1:** indisponibilidad amplia, pérdida/exposición de datos o seguridad activa.
- **SEV-2:** función crítica degradada sin alternativa suficiente.
- **SEV-3:** impacto limitado con alternativa.

Flujo:

1. Declarar incidente y responsable.
2. Abrir canal y cronología.
3. Contener y priorizar usuarios sobre causa definitiva.
4. Comunicar internamente y externamente según impacto.
5. Recuperar y verificar.
6. Cerrar con evidencia.
7. Realizar revisión sin culpabilización para SEV-1/2.
8. Asignar acciones con responsables y fechas.

### 28.13 Acceso operativo

- SSO y MFA para herramientas cuando estén disponibles.
- Roles separados para lectura, despliegue y administración.
- Acceso productivo temporal y por necesidad.
- Sin cuentas compartidas.
- Acciones sensibles auditadas.
- Consolas de proveedores restringidas.
- Acceso de emergencia documentado, protegido y probado.
- Revisión trimestral de permisos.
- Baja inmediata al cambiar responsabilidades.

### 28.14 Tareas programadas y mantenimiento

Tareas:

- limpieza de archivos huérfanos;
- expiración de sesiones y tokens;
- reintentos y cola de fallos;
- reconciliación de índice y caché;
- eliminación conforme a retención;
- verificación de backups;
- rotación de secretos y certificados;
- actualización de dependencias;
- revisión de costos y cuotas.

Cada tarea tendrá propietario, frecuencia, idempotencia, timeout, alerta y procedimiento de recuperación.

### 28.15 Criterios de aceptación del MVP

- Existen local, CI, preproducción y producción separados.
- Producción usa artefactos inmutables construidos una vez.
- CI ejecuta controles obligatorios antes de fusionar.
- Secretos no residen en Git y tienen rotación.
- Migraciones son versionadas y probadas.
- Despliegue incluye smoke tests y ventana de observación.
- Rollback está documentado y ensayado.
- Backups cifrados se ejecutan y restauran con éxito.
- RPO y RTO se verifican mediante ejercicios.
- Monitoreo cubre rutas, datos, colas, archivos, email y búsqueda.
- Alertas críticas tienen responsable y runbook.
- Existe flujo SEV-1/2 y revisión posterior.
- Acceso productivo utiliza MFA, privilegio mínimo y auditoría.
- Eliminación y retención continúan durante fallos operativos.

### 28.16 Funcionalidades futuras

- despliegue canary automatizado;
- múltiples regiones;
- recuperación activa-activa;
- autoscaling predictivo;
- plataforma interna de desarrollo;
- policy as code avanzada;
- firma obligatoria de artefactos y SBOM público;
- chaos engineering continuo;
- SLO y presupuestos de error formales;
- guardia 24/7 dedicada;
- ambientes efímeros completos por pull request.

## 29. Decisiones técnicas registradas

### 29.1 Formato de registro de decisiones

Las decisiones técnicas relevantes deben registrarse mediante una entrada estable con los siguientes campos:

| Campo | Contenido requerido |
|---|---|
| Identificador | Código único con formato `ADR-XXXX` |
| Título | Decisión concreta, expresada sin ambigüedad |
| Estado | Propuesta, aprobada, reemplazada, descartada o revocada |
| Fecha | Fecha de aprobación o último cambio de estado |
| Contexto | Necesidad, restricciones y alternativas relevantes |
| Decisión | Conducta o tecnología adoptada |
| Consecuencias | Beneficios, costos, riesgos y obligaciones |
| Alcance temporal | MVP, beta o evolución futura |
| Responsables | Roles que aprobaron y deben revisar |
| Revisión | Condición o fecha que obliga a reconsiderar |
| Reemplaza/reemplazada por | Relación con otras decisiones |

Reglas:

- Una decisión aprobada no se edita para ocultar su historia; se reemplaza mediante una entrada nueva.
- Las decisiones de producto permanecen en los capítulos funcionales; este registro consolida decisiones técnicas con impacto transversal.
- Una tecnología mencionada como futura no se considera aprobada para implementación.
- Las versiones exactas de dependencias se fijarán al crear el proyecto y se mantendrán en archivos técnicos.
- Toda excepción temporal tendrá responsable, mitigación y vencimiento.

### 29.2 Decisiones aprobadas

#### ADR-0001 — Fuente de verdad documental

- **Estado:** aprobada.
- **Alcance:** MVP, beta y evolución.
- **Decisión:** `HABITTUS_MASTER.md` define intención, alcance y decisiones vigentes; los artefactos derivados deben mantener coherencia.
- **Consecuencia:** todo cambio funcional o técnico transversal requiere actualización documental.

#### ADR-0002 — Estrategia de entrega del MVP

- **Estado:** aprobada.
- **Alcance:** MVP.
- **Decisión:** priorizar una aplicación web responsive con capacidades PWA limitadas antes de una aplicación móvil dedicada.
- **Consecuencia:** perfiles y obras públicas son compartibles e indexables sin duplicar inicialmente clientes iOS y Android.
- **Revisión:** después de beta, con evidencia de necesidades nativas.

#### ADR-0003 — Arquitectura backend

- **Estado:** aprobada.
- **Alcance:** MVP y beta.
- **Decisión:** monolito modular basado en Node.js, TypeScript y NestJS.
- **Consecuencia:** los dominios mantienen límites internos, pero se despliegan como una unidad hasta que mediciones justifiquen extracción.

#### ADR-0004 — API y contratos

- **Estado:** aprobada.
- **Alcance:** MVP.
- **Decisión:** API HTTP REST versionada y documentada con OpenAPI; clientes generados o validados contra el contrato.
- **Consecuencia:** los cambios incompatibles requieren nueva versión o transición explícita.

#### ADR-0005 — Persistencia estructurada

- **Estado:** aprobada.
- **Alcance:** MVP y beta.
- **Decisión:** PostgreSQL gestionado como fuente de verdad y Prisma como acceso tipado y mecanismo inicial de migraciones.
- **Consecuencia:** caché, búsqueda y analítica son proyecciones o sistemas derivados, nunca autoridad de negocio.

#### ADR-0006 — Almacenamiento multimedia

- **Estado:** aprobada.
- **Alcance:** MVP.
- **Decisión:** originales privados en almacenamiento compatible con S3; derivados optimizados mediante trabajadores y entrega por CDN.
- **Consecuencia:** PostgreSQL conserva metadatos y claves, no binarios; toda exposición depende de visibilidad efectiva.

#### ADR-0007 — Procesamiento asíncrono

- **Estado:** aprobada.
- **Alcance:** MVP.
- **Decisión:** BullMQ sobre Redis para imágenes, email y tareas diferibles.
- **Consecuencia:** los trabajos deben ser idempotentes, observables y recuperables; Redis no es fuente de verdad.

#### ADR-0008 — Autenticación gestionada

- **Estado:** aprobada.
- **Alcance:** MVP.
- **Decisión:** proveedor compatible con OIDC/OAuth 2.0; HABITTUS no administra contraseñas directamente.
- **Consecuencia:** la identidad externa se vincula mediante identificador estable; autorización y propiedad siguen en backend.

#### ADR-0009 — Autorización

- **Estado:** aprobada.
- **Alcance:** permanente.
- **Decisión:** combinar roles globales, propiedad de recursos y estado de visibilidad; verificar cada operación en servidor.
- **Consecuencia:** esconder controles en UI nunca sustituye autorización.

#### ADR-0010 — Búsqueda inicial

- **Estado:** aprobada.
- **Alcance:** MVP.
- **Decisión:** consultas e índices de PostgreSQL para búsqueda estructurada inicial.
- **Consecuencia:** un motor dedicado se incorpora solo por evidencia de volumen, relevancia o filtros insuficientes.

#### ADR-0011 — Monorepositorio y herramientas

- **Estado:** aprobada.
- **Alcance:** MVP.
- **Decisión:** pnpm y Turborepo con aplicaciones web, administración, API y trabajador, más paquetes compartidos.
- **Consecuencia:** los límites de aplicaciones no deben crear dependencias circulares ni acceso directo entre dominios.

#### ADR-0012 — Privacidad y analítica

- **Estado:** aprobada.
- **Alcance:** permanente.
- **Decisión:** privacidad por defecto, eventos explícitos, minimización, seudonimización y prohibición de tracking entre sitios o grabación indiscriminada.
- **Consecuencia:** ninguna métrica justifica capturar contenido artístico, contacto o texto libre.

#### ADR-0013 — Accesibilidad y rendimiento

- **Estado:** aprobada.
- **Alcance:** MVP y evolución.
- **Decisión:** WCAG 2.2 AA y presupuestos de rendimiento son criterios de release.
- **Consecuencia:** regresiones críticas bloquean liberación salvo excepción formal y temporal.

#### ADR-0014 — Infraestructura y despliegue

- **Estado:** aprobada.
- **Alcance:** MVP.
- **Decisión:** contenedores OCI para API y trabajadores, servicios gestionados, GitHub Actions, artefactos inmutables y promoción por ambientes.
- **Consecuencia:** producción no se modifica manualmente como flujo ordinario.

#### ADR-0015 — Contacto profesional

- **Estado:** aprobada.
- **Alcance:** MVP.
- **Decisión:** canales externos configurables y privados por defecto; no habrá mensajería interna ni gestión de oportunidades.
- **Consecuencia:** HABITTUS no almacena comunicaciones ni promete resultados comerciales.

### 29.3 Decisiones pendientes

Las siguientes decisiones deben resolverse antes del hito indicado:

| Identificador | Decisión | Momento límite | Criterios |
|---|---|---|---|
| PEND-001 | Proveedor OIDC/OAuth | Antes de implementar autenticación | Exportabilidad, MFA, sesiones, residencia, costo |
| PEND-002 | Proveedor PostgreSQL | Antes de fundación técnica | PITR, métricas, regiones, costo, portabilidad |
| PEND-003 | Proveedor S3/CDN | Antes de carga multimedia | URLs firmadas, ciclo de vida, salida, purga |
| PEND-004 | Proveedor de email | Antes de recuperación de cuenta | Entrega, webhooks, reputación, costo |
| PEND-005 | Hosting de Next.js y contenedores | Antes de preproducción | SSR, observabilidad, rollback, regiones |
| PEND-006 | Herramienta analítica definitiva | Antes de beta | Privacidad, consentimiento, retención, costo |
| PEND-007 | Límites multimedia | Antes de pruebas con artistas | Formatos, tamaño, resolución, cantidad y costo |
| PEND-008 | Ventanas de retención definitivas | Antes de beta | Finalidad, ley, seguridad y costo |
| PEND-009 | Jurisdicciones iniciales | Antes de registro público | Privacidad, edad mínima, términos y transferencias |
| PEND-010 | SLA/SLO operativos finales | Antes del lanzamiento público | Métricas de beta y capacidad de soporte |
| PEND-011 | Aplicación móvil dedicada | Después de beta | Uso móvil, carga, push, tiendas y mantenimiento |
| PEND-012 | Modelo de monetización | Evolución futura | Valor profesional, confianza y sostenibilidad |

Una decisión pendiente no autoriza elegir silenciosamente la alternativa más conveniente durante implementación.

### 29.4 Decisiones descartadas

| Decisión descartada para el MVP | Motivo | Condición de revisión |
|---|---|---|
| Microservicios | Complejidad operativa sin escala demostrada | Límites medidos de aislamiento o escala |
| GraphQL | REST tipado cubre los contratos iniciales | Múltiples clientes con consultas incompatibles demostradas |
| Aplicaciones nativas desde el inicio | Duplican entrega y mantenimiento | Evidencia de capacidades nativas necesarias |
| Base documental como fuente principal | El dominio requiere integridad y relaciones | Nuevo dominio con datos no relacionales reales |
| Motor de búsqueda dedicado inicial | PostgreSQL cubre el MVP | Relevancia o volumen insuficientes medidos |
| Autenticación propia | Riesgo y mantenimiento sin diferenciación | No prevista; exige revisión de seguridad completa |
| Mensajería interna | Amplía privacidad, abuso y moderación | Necesidad profesional validada y operación disponible |
| Marketplace y pagos | Desvían el foco del perfil profesional | Estrategia comercial aprobada posterior |
| Feed social, likes y seguidores | Contradicen posicionamiento profesional | No prevista sin redefinir producto |
| IA generativa o ranking automático | Riesgo de opacidad y alcance prematuro | Caso de uso, datos y gobernanza aprobados |

### 29.5 Historial de cambios arquitectónicos

| Hito | Estado | Resultado arquitectónico |
|---|---|---|
| Misión 1 — Documento maestro | Completada con este capítulo | Fuente de verdad, alcance y decisiones consolidadas |
| Fundación técnica | Pendiente | Monorepo, contratos, ambientes y servicios base |
| MVP interno | Pendiente | Flujos centrales integrados con datos sintéticos |
| Beta privada | Pendiente | Validación con artistas invitados, métricas y operación limitada |
| Lanzamiento público | Futuro | Escala, soporte y cumplimiento según jurisdicción aprobada |

Los cambios futuros se incorporarán como ADR con fecha. Esta tabla resume hitos y no reemplaza el registro detallado.

## 30. Glosario

### 30.1 Términos de producto

- **HABITTUS:** plataforma profesional para presentar y descubrir artistas visuales y creativos.
- **MVP:** primera versión validable con perfil profesional, portfolio, obras, descubrimiento, contacto externo y administración mínima.
- **Beta privada:** etapa posterior al MVP interno, disponible para un grupo controlado con soporte y medición.
- **Lanzamiento público:** apertura general después de validar calidad, operación y cumplimiento.
- **Perfil profesional:** representación pública o publicable de un artista.
- **Portfolio:** conjunto ordenado de obras, proyectos o registros asociados a un perfil.
- **Obra:** entidad base publicable con identidad, contexto y representación visual.
- **Proyecto:** contenido artístico de alcance mayor a una pieza individual, representado como tipo de obra en el MVP.
- **Registro:** documentación de una práctica temporal, performática o procesual.
- **Canal de contacto:** dato o enlace profesional cuya visibilidad controla el artista.
- **Descubrimiento:** exploración y búsqueda de contenido público estructurado.
- **Completitud:** cumplimiento de requisitos funcionales; no representa calidad artística.
- **Publicación:** acción explícita que habilita exposición cuando todas las dependencias son visibles.
- **Ocultamiento:** retiro reversible de exposición pública.
- **Moderación:** intervención basada en reglas de seguridad, legalidad o convivencia, no en valoración artística.
- **Oportunidad:** futura entidad para convocatorias o encargos; no forma parte del MVP.

### 30.2 Términos técnicos

- **API:** contrato de comunicación entre clientes y backend.
- **ADR:** registro de una decisión arquitectónica y sus consecuencias.
- **CDN:** red que distribuye derivados públicos con menor latencia.
- **CI/CD:** automatización de integración, validación y despliegue.
- **Contrato:** esquema versionado de solicitudes, respuestas o eventos.
- **Derivado:** versión optimizada de un archivo original.
- **Idempotencia:** capacidad de repetir una operación sin duplicar efectos.
- **Índice:** proyección consultable para búsqueda; no es fuente de verdad.
- **MFA:** autenticación mediante más de un factor.
- **Monolito modular:** backend desplegado como unidad con dominios internos separados.
- **OIDC/OAuth 2.0:** estándares utilizados por el proveedor gestionado de identidad.
- **P95:** valor por debajo del cual se encuentra el 95 % de las mediciones.
- **PITR:** recuperación de base de datos a un punto temporal.
- **PWA:** aplicación web con capacidades instalables limitadas.
- **RPO:** pérdida máxima de datos aceptable medida en tiempo.
- **RTO:** tiempo objetivo de recuperación del servicio.
- **S3 compatible:** interfaz estándar de almacenamiento de objetos.
- **SLO:** objetivo interno medible de nivel de servicio.
- **Token:** credencial o valor temporal; nunca debe exponerse en logs o analítica.
- **Webhook:** solicitud firmada de un proveedor para comunicar un evento.

### 30.3 Términos del ecosistema artístico

- **Artista visual:** profesional cuya práctica se desarrolla principalmente mediante lenguajes visuales.
- **Ceramista:** profesional que trabaja con materiales y procesos cerámicos.
- **Crédito:** reconocimiento de autoría, fotografía, colaboración u otra contribución.
- **Disciplina:** campo amplio de práctica, como fotografía, escultura o ilustración.
- **Disponibilidad:** declaración informativa; no constituye oferta ni reserva.
- **Ficha técnica:** información contextual de una obra: año, técnica, materiales, dimensiones o duración.
- **Ilustrador/a:** profesional que produce imágenes aplicadas, editoriales o autorales.
- **Instalación:** práctica que organiza elementos en relación con un espacio.
- **Material:** componente físico o digital utilizado en la producción.
- **Performance:** práctica basada en acciones, tiempo, cuerpo o presencia; suele presentarse mediante registro.
- **Práctica interdisciplinaria:** trabajo que combina disciplinas sin quedar limitado a una sola taxonomía.
- **Statement:** texto mediante el cual un artista contextualiza su práctica.
- **Técnica:** proceso o método utilizado para producir una obra.
- **Trayectoria:** experiencia profesional, exhibiciones, formación u otros antecedentes; su estructura avanzada queda fuera del MVP.

### 30.4 Abreviaciones

| Abreviación | Significado |
|---|---|
| ADR | Architecture Decision Record |
| API | Application Programming Interface |
| CDN | Content Delivery Network |
| CI/CD | Continuous Integration / Continuous Delivery |
| CLS | Cumulative Layout Shift |
| FCP | First Contentful Paint |
| INP | Interaction to Next Paint |
| LCP | Largest Contentful Paint |
| MFA | Multi-Factor Authentication |
| MVP | Minimum Viable Product |
| OIDC | OpenID Connect |
| ORM | Object-Relational Mapping |
| PII | Personally Identifiable Information |
| PITR | Point-in-Time Recovery |
| PWA | Progressive Web App |
| RPO | Recovery Point Objective |
| RTO | Recovery Time Objective |
| SLO | Service Level Objective |
| SSR | Server-Side Rendering |
| TTFB | Time to First Byte |
| WCAG | Web Content Accessibility Guidelines |

## 31. Anexos

### 31.1 Referencias visuales

Las referencias visuales futuras deben evaluarse por principios y no copiar interfaces completas.

Criterios de evaluación:

- neutralidad editorial;
- prioridad y proporción de la obra;
- legibilidad de fichas técnicas;
- diversidad de formatos artísticos;
- navegación móvil y táctil;
- accesibilidad y contraste;
- densidad adecuada para gestión;
- ausencia de patrones sociales invasivos.

Toda referencia deberá registrar fuente, fecha, aspecto analizado y decisión derivada. Este anexo no aprueba estilos, pantallas ni activos de terceros.

### 31.2 Referencias funcionales

Las investigaciones deberán comparar capacidades concretas:

- creación y mantenimiento de perfiles;
- estructura de portfolio;
- representación de obras no bidimensionales;
- fichas, créditos y propiedad intelectual;
- descubrimiento y taxonomías;
- control de contacto;
- moderación y retiro;
- accesibilidad;
- exportación y eliminación de datos;
- carga y procesamiento multimedia.

Las referencias funcionales informan decisiones, pero no amplían el alcance del MVP por analogía.

### 31.3 Benchmark de plataformas similares

El benchmark debe incluir, como mínimo, las siguientes categorías:

| Categoría | Aspecto a observar | Riesgo que HABITTUS debe evitar |
|---|---|---|
| Redes sociales visuales | Descubrimiento y facilidad de publicación | Popularidad, ruido y pérdida de contexto |
| Constructores de portfolio | Presentación y personalización | Aislamiento y mantenimiento técnico individual |
| Marketplaces de arte | Fichas y disponibilidad | Reducir la obra a transacción |
| Directorios profesionales | Taxonomías y búsqueda | Perfiles rígidos o desactualizados |
| Plataformas curatoriales | Contexto y selección | Barreras opacas de acceso |
| Almacenamiento cloud | Gestión de archivos | Falta de narrativa y exposición profesional |

Antes de la beta se realizará un benchmark verificable con fuentes actuales. Sus conclusiones deberán traducirse en decisiones o preguntas, no en una lista promocional de competidores.

### 31.4 Preguntas abiertas

#### Antes de la fundación técnica

- ¿Qué proveedores concretos cumplen portabilidad, seguridad, costo y región?
- ¿Qué jurisdicción y entidad operarán el lanzamiento inicial?
- ¿Cuáles serán formatos, tamaños y cuotas multimedia exactos?
- ¿Cuál será el vocabulario inicial de disciplinas y técnicas?

#### Antes de la beta privada

- ¿Qué campos generan mayor abandono durante creación de perfil?
- ¿La publicación de perfil debe continuar permitida sin obras, como establecen las reglas actuales?
- ¿Qué frecuencia de actualización consideran natural los artistas?
- ¿Qué filtros usan realmente visitantes profesionales?
- ¿Qué objetivos de disponibilidad y soporte puede sostener el equipo?
- ¿Qué períodos definitivos de retención aprueba la revisión legal?

#### Antes de la evolución futura

- ¿Existe evidencia para una aplicación móvil dedicada?
- ¿Las oportunidades profesionales justifican nuevas entidades y operación?
- ¿Qué modelo de sostenibilidad evita degradar perfiles gratuitos?
- ¿Se necesitan series, colecciones, exposiciones o perfiles institucionales?
- ¿Qué idiomas y regiones deben priorizarse?
- ¿Existe capacidad para mensajería y moderación asociada?

Las preguntas abiertas no suspenden la Misión 1; se convierten en decisiones obligatorias antes del hito indicado.

### 31.5 Notas de investigación

Toda investigación futura debe registrar:

- pregunta y supuesto evaluado;
- participantes y criterios de selección;
- método;
- fecha y contexto;
- hallazgos diferenciados de interpretación;
- limitaciones;
- decisión propuesta;
- capítulo afectado;
- responsable y siguiente paso.

Prioridades para la beta:

1. Comprender carga inicial y abandono del perfil.
2. Validar utilidad de fichas y portfolio para visitantes profesionales.
3. Evaluar taxonomías con prácticas híbridas.
4. Probar claridad de publicación, privacidad y contacto.
5. Medir rendimiento y carga de imágenes en móvil.
6. Revisar accesibilidad con personas usuarias de tecnologías de asistencia.
7. Validar capacidad operativa de soporte y moderación.

La investigación no debe recolectar obra, contacto o datos sensibles fuera de lo necesario. Consentimiento, retención y acceso deben definirse antes de cada estudio.

### Estado de cierre de la Misión 1

La **Misión 1 — Documento maestro de HABITTUS** se considera terminada cuando se cumplen simultáneamente las siguientes condiciones:

- capítulos 1 a 31 presentes y numerados;
- visión, alcance, reglas, datos, arquitectura y operación documentados;
- MVP, beta y evolución futura diferenciados;
- decisiones aprobadas, pendientes y descartadas registradas;
- glosario y preguntas abiertas disponibles;
- auditoría estructural sin capítulos duplicados ni referencias rotas objetivas;
- cambios versionados y revisables.

Con la incorporación de los capítulos 29, 30 y 31 y las correcciones objetivas de auditoría, estas condiciones quedan satisfechas. La Misión 1 puede considerarse **terminada**. Las preguntas pendientes corresponden a la fundación técnica, la beta o la evolución y no implican que deba iniciarse desarrollo sin una instrucción posterior.

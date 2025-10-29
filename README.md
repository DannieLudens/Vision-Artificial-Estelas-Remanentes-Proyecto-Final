# Bitácora de Diseño - Proyecto Final
## Semana 1: Etapa de Diseño

**Nombre del Proyecto:** Estelas Remanentes

**Inspiración Principal:** SUPERRADIANCE de Memo Akten y Katie Payton Hofstadter

**Técnica Seleccionada:** Hand Pose Estimation (ML5.js HandPose)

**Fecha de inicio:** 29 de Octubre, 2025

---

# Actividad 1: Ideación de la Experiencia

<details>
<summary><strong>Concepto Artístico/Interactivo</strong></summary>

### Pregunta Central: ¿Qué quiero expresar o evocar?

**Mi respuesta:**

Quiero expresar **libertad de expresión a través del movimiento** y la capacidad de **fluir con el entorno digital**. Me inspira profundamente la idea de que el cuerpo pueda emitir energía, luz y partículas en un espacio digital, dejando rastros luminosos que se desvanecen con el tiempo.

**Elementos que me atraen de SUPERRADIANCE:**
- El cuerpo como fuente de emisión de energía y luz
- Los movimientos que se convierten en arte visual
- La belleza de los rastros luminosos que deja el cuerpo
- La naturaleza efímera de los rastros que desaparecen gradualmente
- La idea de "pintar con el cuerpo" dejando huellas digitales

**Emoción/experiencia objetivo:**
Quiero que el usuario sienta **expresión/liberación** - "Puedo expresarme libremente a través del movimiento" - y que experimente la sensación de **fluir con el entorno**, con la fluidez de las partículas de aire y el agua recordandole como es tocar el mar sobre un barco en movimiento con los dedos.

### Metáfora Central

**"Manos fluyendo en luz líquida"**

Al mover tus manos, fluyes a través de un espacio de luz líquida. Cada dedo libera estelas de partículas luminosas que fluyen y se desvanecen, como cuando tocas el agua del mar desde un bote en marcha y sientes cómo el mar fluye entre tus dedos.

**Metáfora visual poderosa:**
> "Tocar con los dedos el mar sobre un bote en marcha y cómo el mar fluye entre los dedos cuando se mueve sobre él"

Esta metáfora captura la esencia de la experiencia: el contacto íntimo con un medio fluido (el mar digital) que responde a cada gesto dejando estelas luminosas temporales.

### Narrativa o Propuesta Estética

**Descripción narrativa de la experiencia:**

El usuario entra al espacio y extiende sus manos hacia la cámara. Al moverlas, descubre que sus dedos despiertan un mar digital invisible - cada movimiento libera cascadas de partículas luminosas que fluyen entre sus dedos como agua.

La mano izquierda emite tonos de mar y aire (azules claros, verdes, cianos) mientras la mano derecha libera luz solar (amarillos cálidos, naranjas luminosos). Las partículas nacen en las puntas de cada dedo y fluyen en la dirección del movimiento con una ondulación suave y orgánica.

Cada gesto deja estelas remanentes - rastros de luz que persisten por unos segundos antes de desvanecerse gradualmente, como olas que se desdibujan en la arena. El usuario puede pintar libremente en el aire, creando composiciones efímeras de luz y color que existen solo en el momento, en diálogo constante entre lo físico y lo digital.

La experiencia invita a la exploración: movimientos lentos crean pocas partículas delicadas; gestos rápidos y enérgicos despiertan explosiones de luz. No hay forma incorrecta de interactuar - cada movimiento es válido, cada gesto es bello, cada estela es única.

</details>

---

<details>
<summary><strong> Selección de Técnica de Visión Artificial</strong></summary>

### Técnica Principal Seleccionada

**☐ Clasificación de Imágenes (ML5.js/Teachable Machine)**
**☐ Segmentación Corporal (BodySegmentation)**
**☐ Full-body Pose Estimation (BodyPose - BlazePose)**
**☑ Hand Pose Estimation (ML5.js HandPose)**

### Justificación de la Selección

**¿Por qué elegí Hand Pose Estimation?**

Decidí cambiar de Body Pose a **Hand Pose Estimation** porque se alinea mucho mejor con mi concepto de "pintar con los dedos en el mar digital". Las razones son:

**Ventajas conceptuales:**
- Las **manos son naturalmente expresivas** y precisas para gestos artísticos
- La metáfora de "tocar el mar con los dedos" se traduce literalmente con Hand Pose
- **Control fino**: Los dedos permiten movimientos más deliberados e intencionales que el cuerpo completo
- Es más **íntimo y personal** - como realmente pintar o tocar algo

**Ventajas técnicas:**
- **21 keypoints por mano** (incluyendo las 5 puntas de dedos) = datos muy precisos
- ML5.js HandPose puede detectar **2 manos simultáneamente**
- **Mejor rendimiento** que BodyPose (modelo más ligero, más FPS)
- **Más estable** en detección que el cuerpo completo
- Experiencia previa con pose detection facilita la transición

**Alineación con visión artística:**
- Los 10 dedos (5 por mano) crean múltiples puntos de emisión = visualmente más rico
- Permite diferenciación de color por mano (izquierda = mar/aire, derecha = sol)
- Se siente natural para la interacción de "pintar con energía fluida"

**Viabilidad técnica:**
- ML5.js tiene HandPose bien documentado
- Puedo reutilizar lógica de particle systems de ejercicios previos
- El tracking de velocidad de dedos es directo (similar a keypoints de pose)

### Enfoque Específico

**Datos que voy a usar de HandPose:**

**Keypoints de interés:**
- ✅ **Puntas de los 5 dedos de cada mano** (10 puntos emisores totales):
  - Thumb tip (pulgar)
  - Index finger tip (índice)
  - Middle finger tip (medio)
  - Ring finger tip (anular)
  - Pinky tip (meñique)

**Cálculos auxiliares:**
- ✅ **Velocidad de cada fingertip**: Calcular diferencia de posición entre frames
- ✅ **Dirección del movimiento**: Vector de velocidad normalizado para dirección de partículas
- ✅ **Magnitud de velocidad**: Para determinar cantidad de partículas a emitir
- ✅ **Identificación de mano**: Detectar cuál es izquierda/derecha para asignar paleta de colores

**NO voy a usar:**
- ❌ Otros keypoints de la mano (palma, nudillos, muñeca) - solo las puntas
- ❌ Detección de gestos específicos (poses de mano) - quiero movimiento libre
- ❌ Clasificación de manos - solo tracking continuo

</details>

---

<details>
<summary><strong> Propuesta de Interacción</strong></summary>

### "Interaction Sentence" (Oración de Interacción)

**Completa esta frase:**

> "Cuando yo **[ACCIÓN DEL USUARIO]**, el sistema crea **[RESPUESTA VISUAL]**, porque **[METÁFORA/SIGNIFICADO]**."

**Mi Interaction Sentence:**

> **"Cuando muevo mis manos y dedos por el espacio, partículas luminosas fluyen entre ellos como agua de mar, saliendo en la dirección de mi movimiento. La mano izquierda libera tonos de mar y aire (azules, verdes, cianos), mientras la mano derecha emite luz solar (amarillos, naranjas). Las partículas fluyen con ondulación suave y se desvanecen gradualmente (3-4 segundos), dejando una memoria efímera de mi gesto - como estelas en el agua que desaparecen con el tiempo. Movimientos lentos crean pocas partículas delicadas; gestos rápidos despiertan cascadas de luz, porque mis manos fluyen en luz líquida y cada movimiento es una pincelada efímera en el mar digital."**

### Mapeo de Interacción Detallado

**Movimiento → Visual:**

| Acción del Usuario | Dato Detectado | Respuesta Visual |
|-------------------|----------------|------------------|
| Mover dedo lentamente | Velocidad fingertip < 3 | Spawn 1-2 partículas/frame, tamaño pequeño |
| Mover dedo rápido | Velocidad fingertip > 5 | Spawn 5-10 partículas/frame, tamaño variable |
| Mano izquierda | handedness === "Left" | Paleta: azules (180°), verdes (150°), cianos (170°) |
| Mano derecha | handedness === "Right" | Paleta: amarillos (45°), naranjas (30°), cálidos |
| Dirección del gesto | Vector velocidad normalizado | Partículas salen tangentes al movimiento |
| Stillness (sin movimiento) | velocidad ≈ 0 por 2 seg | Partículas existentes se desvanecen, no hay nuevas |
| Arco/círculo con dedo | Trayectoria curva | Estela curva continua de partículas |
| Movimiento errático | Cambios bruscos de dirección | Explosiones puntuales de partículas |

**Parámetros de Partículas según Velocidad:**

| Velocidad (pixeles/frame) | Cantidad | Tamaño | Lifespan (aprox) |
|---------------------------|----------|--------|------------------|
| 0-2 (muy lento) | 0-1 | 3-5px | 3 seg |
| 2-5 (lento) | 1-3 | 5-8px | 3.5 seg |
| 5-10 (medio) | 3-7 | 8-12px | 4 seg |
| 10+ (rápido) | 7-15 | 10-15px | 4 seg |

</details>

---

<details>
<summary><strong> Definición de la Experiencia del Usuario</strong></summary>

### Journey del Usuario (Recorrido de Experiencia)

**Momento 1: Entrada**
> El usuario se coloca frente a la cámara a una distancia de 50-80cm. Ve un canvas oscuro (fondo negro o azul muy oscuro) y se ve a sí mismo reflejado. Aún no hay partículas. El espacio se siente expectante, vacío, esperando.

**Momento 2: Primera Interacción**
> Al levantar tímidamente una mano y mover un dedo, aparecen las primeras partículas luminosas. Quedan sorprendidos al ver cómo cada dedo deja un rastro de luz que fluye con ondulación suave. Descubren que la mano izquierda emite tonos azules/verdes (mar) y la derecha amarillos/naranjas (sol). La primera reacción suele ser de asombro: "¡Wow, puedo pintar con luz!"

**Momento 3: Exploración**
> El usuario comienza a experimentar: mueve ambas manos simultáneamente, hace gestos rápidos y lentos, dibuja formas en el aire. Descubre que movimientos rápidos crean más partículas; que puede crear patrones mezclando colores de ambas manos; que las partículas fluyen suavemente y se desvanecen dejando espacio para nuevas. Puede hacer círculos, líneas, ondas - cada gesto es único. Se pierde en el juego, explorando las posibilidades.

**Momento 4: Clímax**
> El usuario encuentra su "flow" - un estado de expresión libre donde ya no piensa conscientemente en los movimientos. Ambas manos danzan en el espacio creando composiciones efímeras de luz azul-verde y amarilla-naranja. Quizás hace movimientos grandes y expansivos que llenan el canvas de partículas; o gestos delicados y controlados que crean patrones precisos. Este es el momento de máxima expresión artística, donde el usuario se siente como un conductor de luz líquida.

**Momento 5: Conclusión**
> Al detenerse, las últimas partículas se desvanecen gradualmente durante 3-4 segundos. El canvas vuelve a la oscuridad. Queda una sensación de satisfacción y la tentación de empezar de nuevo - cada "pintura" es única y efímera. El usuario puede salir del frame o comenzar una nueva exploración.

</details>

---

<details>
<summary><strong> Objetivos de la Experiencia</strong></summary>

### ¿Qué quiero que el usuario sienta o experimente?

**Emociones objetivo:**
- [x] Asombro/Wonder
- [x] Alegría/Diversión
- [ ] Calma/Serenidad
- [x] Energía/Vitalidad
- [x] Poder/Empoderamiento
- [ ] Conexión/Pertenencia
- [x] Expresión/Liberación
- [x] Fluidez

**Descripción de la experiencia ideal:**

La experiencia ideal es aquella donde el usuario se siente **liberado para expresarse a través del movimiento sin restricciones ni juicio**. Quiero que experimenten:

1. **Asombro inicial**: "¿Mis manos pueden hacer esto?" - El descubrimiento de que cada dedo es una fuente de luz
2. **Exploración juguetona**: Experimentar con diferentes gestos, velocidades, combinaciones de manos
3. **Flow state**: Perderse en el movimiento, donde las manos fluyen intuitivamente y crean belleza sin esfuerzo consciente
4. **Agencia creativa**: Sentir que tienen control sobre algo hermoso - cada gesto importa y crea un efecto visual único
5. **Conexión con lo efímero**: Apreciar la belleza de algo que existe solo en el momento y luego desaparece
6. **Expresión corporal libre**: Moverse sin pensar "¿lo estoy haciendo bien?" - no hay forma incorrecta

La experiencia ideal termina con el usuario sonriendo, con ganas de repetir la interacción, y quizás con un nuevo aprecio por la belleza del movimiento de sus propias manos.

</details>

---

<details>
<summary><strong> Inspiración de SUPERRADIANCE</strong></summary>

### ¿Qué elementos de SUPERRADIANCE me inspiran específicamente?

**Elementos conceptuales:**
- ✅ **El cuerpo como fuente de radiación/energía luminosa** - Adapto esto a las manos y dedos específicamente
- ✅ **Movimiento que genera fenómenos emergentes** - Cada gesto crea patrones únicos de partículas
- ✅ **Belleza efímera y rastros temporales** - Las estelas remanentes que se desvanecen
- ✅ **Agencia individual con impacto visible** - Cada movimiento deja huella visible inmediata
- ✅ **Expresión libre sin restricciones** - No hay forma "correcta" de interactuar
- ✅ **Poética del movimiento** - El movimiento como arte, no como input funcional

**Elementos visuales:**
- ✅ **Partículas luminosas emanando del cuerpo (manos/dedos)** - 10 puntos de emisión
- ✅ **Colores saturados sobre fondo oscuro** - Máximo contraste para luminosidad
- ✅ **Efectos de glow/bloom** - Partículas con halo luminoso
- ✅ **Rastros fluidos y orgánicos** - Ondulación suave como agua
- ✅ **Alta respuesta a velocidad de movimiento** - Más velocidad = más partículas
- ✅ **Fade gradual** - Desvanecimiento suave de estelas
- ✅ **Sensación de fluidez** - Como agua o aire fluyendo

**Elementos de interacción:**
- ✅ **Respuesta inmediata (< 100ms latencia)** - Feedback instantáneo
- ✅ **Retroalimentación proporcional** - Más movimiento = más efecto visual
- ✅ **Interacción intuitiva (sin instrucciones)** - Autodescubrimiento natural
- ✅ **Exploración recompensada** - Cada gesto crea algo bello
- ✅ **Sin penalización** - No hay errores, solo exploración
- ✅ **Invitación al juego** - Sistema que invita a experimentar

</details>

---

<details>
<summary><strong> Mi Visión Única</strong></summary>

### ¿En qué se diferencia mi proyecto de SUPERRADIANCE?

**Diferencias conceptuales:**
- **Enfoque en manos/dedos vs cuerpo completo**: SUPERRADIANCE usa todo el cuerpo como instrumento; yo me enfoco específicamente en las manos y dedos, haciéndolo más íntimo y preciso
- **Metáfora del mar digital**: Mi metáfora específica de "tocar el agua del mar desde un bote" es única - añade una dimensión poética específica no presente en SUPERRADIANCE
- **Dualidad de colores por mano**: La diferenciación izquierda (mar/aire) vs derecha (sol) crea una narrativa visual de elementos naturales que SUPERRADIANCE no tiene explícitamente
- **Estelas remanentes**: El concepto de "lo que queda" tiene una dimensión melancólica y contemplativa que añade profundidad

**Diferencias técnicas:**
- **Escala**: SUPERRADIANCE es instalación a gran escala con proyecciones masivas; mi proyecto es experiencia web íntima en laptop/desktop
- **Tecnología**: Ellos usan sistemas profesionales de tracking; yo uso ML5.js HandPose en navegador web
- **Contexto de uso**: Instalación de galería vs experiencia personal accesible desde cualquier lugar
- **Usuarios**: SUPERRADIANCE permite múltiples personas; mi versión es individual (aunque podría expandirse)
- **Rendimiento**: Limitado a 30-60 FPS vs sistemas profesionales de alto rendimiento

**Diferencias estéticas:**
- **Paleta de colores**: Mi paleta específica (azules/verdes vs amarillos/naranjas) evoca naturaleza (mar/sol) de forma más directa
- **10 puntos de emisión** (vs tracking de cuerpo completo): Crea patrones más delicados y precisos
- **Flujo ondulante inspirado en agua**: Enfoque específico en movimiento acuático vs radiación general
- **Tamaño de partículas**: Más pequeñas y numerosas, creando sensación de "spray" de agua

### Mi aporte original/creativo:

**1. La metáfora del "mar digital" tocado con los dedos**
- Esta es mi contribución conceptual única - la imagen poética de tocar el agua desde un bote en movimiento
- Ancla la experiencia en una sensación corporal específica y evocativa

**2. Dualidad de manos como elementos naturales**
- Izquierda = mar/aire (azules, verdes, cianos)
- Derecha = sol (amarillos, naranjas)
- Esta división crea una narrativa visual de fuerzas naturales complementarias

**3. Accesibilidad web**
- Hacer este tipo de experiencia accesible en navegador web (no solo en galerías) democratiza el arte interactivo
- Cualquiera con webcam puede experimentarlo

**4. Enfoque en las manos como instrumento expressivo**
- Las manos son profundamente expresivas y personales
- 10 dedos permiten composiciones complejas pero controlables
- Más íntimo que el cuerpo completo - como escribir o dibujar

**5. Título y concepto de "Estelas Remanentes"**
- El nombre evoca memoria, persistencia, y melancolía
- Añade una capa conceptual sobre la impermanencia y lo que dejamos atrás

**Lo que hace único a mi proyecto:**
No es solo una versión técnicamente reducida de SUPERRADIANCE - es una reinterpretación conceptual que cambia el foco del cuerpo completo a las manos, añade una metáfora específica del mar, y crea una experiencia más íntima y accesible mientras mantiene el espíritu poético del original.

</details>

---

# Actividad 2: Búsqueda de Referentes

<details>
<summary><strong>Referencias de SUPERRADIANCE</strong></summary>

### Fuentes Principales

**Videos/Documentación:**

1. **Making of SUPERRADIANCE - Memo Akten**
   - URL: https://youtu.be/B_igdUDzcs4
   - Descripción: Video behind-the-scenes del proceso de creación de SUPERRADIANCE
   - Insights: Muestra el proceso técnico y conceptual, la escala de la instalación, y cómo los usuarios interactúan con ella
  
   - <img width="738" height="416" alt="msedge_2sV5DSc4tY" src="https://github.com/user-attachments/assets/c91c3836-1f83-478c-acc9-564e3593ece6" />

   - ![Photos_KAmmdns0Yb](https://github.com/user-attachments/assets/0c87a05c-eb49-40f0-b2c9-5afd689e8ab8)


   



2. **Sitio Oficial - SUPERRADIANCE**
   - URL: https://superradiance.art/
   - Descripción: Página oficial del proyecto con documentación, concepto y visuales
   - Insights: Información sobre el concepto artístico, la tecnología utilizada, y la visión de los artistas

### Análisis de SUPERRADIANCE

**Características técnicas observadas:**
- Sistema de tracking de cuerpo completo en tiempo real
- Proyecciones a gran escala (instalación inmersiva)
- Alta densidad de partículas generadas
- Procesamiento de múltiples usuarios simultáneamente
- Latencia muy baja (respuesta casi instantánea)
- Sistema profesional de captura de movimiento

**Características visuales observadas:**
- Partículas luminosas que emanan del cuerpo
- Colores saturados y vibrantes sobre fondo completamente oscuro
- Efectos de glow/bloom pronunciados
- Rastros que persisten temporalmente y se desvanecen con elegancia
- Sensación de radiación/emanación de luz
- Movimiento fluido y orgánico de las partículas
- Alto contraste para maximizar luminosidad
- Estética etérea y dreamlike

**Características de interacción observadas:**
- Respuesta inmediata al movimiento (feedback instantáneo)
- Retroalimentación proporcional: más movimiento = más partículas
- No requiere instrucciones - interacción intuitiva
- Usuarios naturalmente comienzan a "bailar" o hacer gestos expresivos
- Invita a la exploración y experimentación
- Múltiples personas pueden interactuar simultáneamente
- Creación de composiciones efímeras colectivas

**Aspectos que quiero incorporar en mi proyecto:**
- ✅ Respuesta inmediata y proporcional al movimiento
- ✅ Partículas con glow/emanación luminosa
- ✅ Fondo oscuro para máximo contraste
- ✅ Fade gradual de partículas (estelas que desaparecen)
- ✅ Interacción intuitiva sin instrucciones
- ✅ Sensación de "pintar con luz"
- ✅ Estética fluida y orgánica
- ✅ Invitación a la expresión libre y exploración

</details>

---

<details>
<summary><strong>Ejemplos Técnicos (ML5.js y p5.js)</strong></summary>

### Ejemplo Técnico 1: HandPose Tutorial - The Coding Train (Daniel Shiffman)

**Fuente:**
- Tutorial: https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/hand-pose
- Código ejemplo: https://editor.p5js.org/codingtrain/sketches/t7l5pYDDI

**Técnica implementada:**
- ML5.js HandPose para detección de manos
- Visualización de 21 keypoints por mano
- Tracking en tiempo real con p5.js

**¿Qué aprendí de este ejemplo?**
- Estructura básica para setup de HandPose en ML5.js
- Cómo acceder a los keypoints de las puntas de los dedos
- Patrón de callback para recibir resultados de detección
- Cómo dibujar y visualizar los puntos detectados
- Base técnica para construir mi sistema de partículas

**Código/funcionalidad que puedo reutilizar:**
```javascript
// Setup de HandPose
handpose = ml5.handPose(video, modelReady);
handpose.on('hand', gotHands);

// Acceso a keypoints específicos
function gotHands(results) {
  hands = results;
  // Acceder a fingertips:
  // results[0].keypoints[4] = thumb tip
  // results[0].keypoints[8] = index tip
  // results[0].keypoints[12] = middle tip
  // results[0].keypoints[16] = ring tip
  // results[0].keypoints[20] = pinky tip
}
```

</details>

---

<details>
<summary><strong>Instalaciones Interactivas Similares</strong></summary>

### Referente 1: "Treachery of Sanctuary" - Chris Milk

**Descripción:**
> Instalación interactiva donde la silueta del usuario se transforma en pájaros que vuelan. El cuerpo controla un ecosistema de partículas que se comportan como aves. Tres pantallas muestran diferentes transformaciones del cuerpo.

**URL/Fuente:**
> https://chrismilk.com/treachery-of-sanctuary/

**¿Por qué es relevante para mi proyecto?**
> Muestra cómo el cuerpo (o en mi caso, las manos) puede transformarse en sistemas de partículas orgánicas. La transformación de lo físico en digital, de lo sólido en fluido/volátil. El uso de silueta como punto de emisión es similar a mi concepto de dedos como fuentes.

**Elementos que me inspiran:**
- Transformación del cuerpo en fenómenos naturales (pájaros → yo: agua/luz)
- Partículas que emergen del cuerpo y tienen vida propia
- Estética de silueta oscura con elementos luminosos
- Tres etapas narrativas (yo podría tener estados/modos diferentes)

---

### Referente 2: "Connected Worlds" - Design I/O

**Descripción:**
> Instalación interactiva donde los gestos de las manos afectan un ecosistema digital. Tocar el agua, mover criaturas, crear conexiones entre mundos. Altamente responsivo y colorido.

**URL/Fuente:**
> https://www.design-io.com/projects/connectedworlds

**¿Por qué es relevante para mi proyecto?**
> El concepto de "tocar" elementos digitales con las manos. La interacción es fluida, natural e intuitiva. Los gestos de las manos tienen impacto directo en el ecosistema visual - similar a cómo mis dedos afectarán el "mar digital".

**Elementos que me inspiran:**
- Gestos de manos como herramienta de interacción principal
- Colores vibrantes y saturados
- Feedback inmediato y fluido
- Sistemas que responden orgánicamente al toque
- Sensación de "magia" al interactuar

---

### Referente 3: "Body Paint" - Memo Akten (trabajo previo)

**Descripción:**
> Una de las primeras obras de Memo Akten donde el cuerpo se convierte en pincel. El movimiento deja rastros de color que se desvanecen. Precursor conceptual de SUPERRADIANCE.

**URL/Fuente:**
> http://www.memo.tv/works/body-paint/

**¿Por qué es relevante para mi proyecto?**
> Es literalmente el concepto de "pintar con el cuerpo". Muestra la evolución del trabajo de Akten hacia SUPERRADIANCE. La idea de rastros efímeros que se desvanecen está presente desde este trabajo temprano.

**Elementos que me inspiran:**
- Concepto directo de cuerpo = pincel
- Rastros que se desvanecen (memoria visual temporal)
- Simplicidad conceptual pero poderosa experiencia
- Invitación a la expresión corporal libre

---

### Referente 4: "Kinæsthetic Sensing" - Lab212

**Descripción:**
> Instalación que usa sensores infrarrojos para trackear el cuerpo en 3D. Crea estelas de luz que siguen el movimiento del cuerpo con gran precisión. Estética minimalista con líneas de luz blanca sobre fondo negro.

**URL/Fuente:**
> https://www.lab212.org/projects/sensing

**¿Por qué es relevante para mi proyecto?**
> La estética de estelas luminosas es muy similar a lo que quiero lograr. El minimalismo visual (blanco sobre negro) maximiza el impacto. La traducción directa de movimiento a luz es clara y elegante.

**Elementos que me inspiran:**
- Estelas de luz que siguen movimiento con precisión
- Estética minimalista y elegante
- Alto contraste (luz sobre oscuridad)
- Sensación de dibujar con luz en el espacio

</details>

---

<details>
<summary><strong>Referencias Visuales y Estéticas</strong></summary>

### Paleta de Colores

**Paleta para Mano Izquierda (Mar y Aire):**

En modo HSB (p5.js):
- Cian brillante: Hue 180° (cian puro) - Para movimientos rápidos, alta energía
- Azul océano: Hue 200° (azul profundo) - Para movimientos medios
- Verde agua: Hue 160° (verde-azul) - Para movimientos lentos, suaves
- Azul cielo: Hue 190° (azul claro) - Variación intermedia

Valores de Saturation: 70-100% (saturado pero natural)
Valores de Brightness: 80-100% (luminoso)

**Paleta para Mano Derecha (Luz Solar):**

En modo HSB (p5.js):
- Amarillo dorado: Hue 45° - Para movimientos rápidos
- Naranja cálido: Hue 30° - Para movimientos medios
- Amarillo limón: Hue 55° - Para movimientos lentos
- Naranja rojizo: Hue 20° - Variación intensa

Valores de Saturation: 80-100% (muy saturado, vibrante)
Valores de Brightness: 90-100% (máxima luminosidad)

**Fondo:**
- Negro puro: RGB(0, 0, 0) o Azul muy oscuro: RGB(5, 10, 20) para dar profundidad

**Justificación de la paleta:**

Esta paleta evoca directamente los elementos naturales que inspiran el proyecto:
- **Mano izquierda** (tonos fríos): Representa el mar, el agua, el aire - elementos fluidos y refrescantes
- **Mano derecha** (tonos cálidos): Representa la luz del sol sobre el agua - calidez, energía, vitalidad
- **Contraste**: La oposición frío/cálido crea tensión visual interesante y permite diferenciar claramente ambas manos
- **Saturación alta**: Maximiza la luminosidad y el impacto visual sobre fondo oscuro
- **Relación con SUPERRADIANCE**: Mantiene la estética de colores saturados y luminosos

---

### Fenómenos Naturales como Inspiración

**Fenómeno 1: Agua de mar tocada desde bote en movimiento**
- Características visuales: Estelas fluidas, movimiento ondulante, spray de gotitas, espuma efímera
- Cómo lo adapto: Partículas que fluyen con ondulación, emergen en dirección del movimiento, se desvanecen gradualmente
- Referencia visual clave: [Búsqueda sugerida: "boat wake water trail" en imágenes]

**Fenómeno 2: Bioluminiscencia marina**
- Características visuales: Luz azul-verde brillante en agua oscura, aparece con movimiento, se desvanece rápidamente
- Cómo lo adapto: Glow effect en partículas azules/verdes de mano izquierda, activación por movimiento
- Referencia visual clave: [Búsqueda sugerida: "bioluminescent plankton" en imágenes]

**Fenómeno 3: Reflejo del sol en el agua**
- Características visuales: Destellos dorados/naranjas que brillan y se mueven con las olas
- Cómo lo adapto: Partículas amarillas/naranjas de mano derecha con alta luminosidad
- Referencia visual clave: [Búsqueda sugerida: "golden hour ocean reflections" en imágenes]

</details>

---

<details>
<summary><strong>Síntesis de Investigación</strong></summary>

### Top 5 Insights de la Investigación

1. **Respuesta inmediata es crítica para la experiencia**
   > Tanto SUPERRADIANCE como todos los referentes exitosos muestran latencia mínima (<100ms). Esto crea la ilusión de que el movimiento "despierta" o "activa" las partículas directamente. Debo optimizar desde el inicio para lograr esto.

2. **El contraste visual maximiza el impacto**
   > Todos los referentes usan fondos muy oscuros con partículas altamente saturadas y luminosas. Esto no es solo estético - es funcional. El alto contraste hace que cada partícula sea visible y crea sensación de emanación de luz.

3. **La fluidez orgánica requiere comportamiento de partículas sofisticado**
   > No basta con partículas que se mueven linealmente. Necesito: ondulación (sin wave), variación en velocidad, aceleración suave, fade gradual. El comportamiento debe sentirse "vivo" y natural.

4. **HandPose de ML5.js es más que suficiente técnicamente**
   > El ejemplo de Coding Train muestra que HandPose es estable, preciso y performante. Los 21 keypoints por mano son más que suficientes - solo necesito 5 (fingertips) + handedness detection.

5. **La metáfora conceptual diferencia mi proyecto**
   > Mientras los referentes son técnicamente impresionantes, mi proyecto tiene una metáfora poética única ("tocar el mar digital con los dedos"). Esta capa conceptual añade profundidad y hace que no sea solo una demo técnica sino una experiencia artística con significado.

</details>

---

# Actividad 3: Diseño en Papel

<details>
<summary><strong>3.1 Bocetos de Interfaz y Experiencia Visual</strong></summary>

### Boceto 1: [Título descriptivo]

**Descripción:**
> [Explica qué muestra este boceto]

**Elementos clave:**
- Elemento 1: [Descripción]
- Elemento 2: [Descripción]
- Elemento 3: [Descripción]

**[Insertar imagen del boceto o descripción detallada]**

---

### Boceto 2: [Título descriptivo]

**Descripción:**
> [Explicación]

**Elementos clave:**
- [Lista de elementos]

**[Imagen/descripción]**

---

### Boceto 3: [Título descriptivo]

**Descripción:**
> [Explicación]

**Elementos clave:**
- [Lista de elementos]

**[Imagen/descripción]**

---

### [Continuar con 7-10 bocetos visuales totales]

---

### Boceto Final Seleccionado

**¿Por qué elegí este diseño?**
> [Justificación de la selección]

**Refinamientos necesarios:**
> [Lista de ajustes a hacer]

</details>

---

<details>
<summary><strong>Diagramas de Flujo de Interacción</strong></summary>

### Diagrama de Flujo Principal

```
[Usuario entra al frame]
        ↓
[Cámara detecta cuerpo]
        ↓
[Sistema extrae datos]
     ↓         ↓
[Keypoints]  [Máscara]
     ↓         ↓
[Cálculo de movimiento]
        ↓
[Decisión: ¿Movimiento detectado?]
    ↓           ↓
  [Sí]        [No]
    ↓           ↓
[Trigger]   [Estado idle]
   ↓
[Respuesta visual]
   ↓
[Actualización del canvas]
   ↓
[Loop continúa]
```

**[Reemplaza con tu propio diagrama específico]**

---

### Diagrama de Mapeo: Movimiento → Visual

```
ENTRADA               PROCESAMIENTO           SALIDA
[Keypoint]     →     [Cálculo]        →     [Efecto Visual]

Ejemplo:
Mano derecha   →   Velocidad > 5    →   Spawn partículas azules
  (x, y)            + Dirección           en posición (x, y)
                                           con velocidad proporcional
```

**Tu diagrama:**
> [Crea tu propio mapeo específico]

---

### Diagrama de Estados del Sistema

```
[ESTADO IDLE]
     ↓
[Movimiento detectado]
     ↓
[ESTADO ACTIVO]
     ↓
[Trigger específico]
     ↓
[ESTADO EFECTO ESPECIAL]
     ↓
[Timeout/Fade]
     ↓
[Regreso a IDLE o ACTIVO]
```

**Tu diagrama:**
> [Diseña los estados de tu sistema]

</details>

---

<details>
<summary><strong>3.3 Wireframes de Composición Visual</strong></summary>

### Wireframe: Vista Completa

```
┌─────────────────────────────────────────────┐
│                                              │
│     [ZONA DE VISUALIZACIÓN PRINCIPAL]       │
│                                              │
│        ┌────────────┐                       │
│        │ Silueta    │                       │
│        │ Usuario    │    [Partículas]      │
│        │            │       ✨✨          │
│        └────────────┘    ✨    ✨         │
│                            ✨              │
│                                              │
│  [Fondo generativo / efecto ambiental]      │
│                                              │
│                                              │
│  [UI mínimo: FPS, etc. - esquina]          │
└─────────────────────────────────────────────┘
```

**Tu wireframe:**
> [Crea tu propio layout específico]

---

### Wireframe: Detalle de Elemento Visual

**Elemento: [ej: Sistema de Partículas]**

```
Partícula individual:
  - Posición inicial: [De dónde nace]
  - Trayectoria: [Cómo se mueve]
  - Vida útil: [Cuánto dura]
  - Apariencia: [Cómo se ve]
  - Fade: [Cómo desaparece]
```

**Tu diagrama de elemento:**
> [Detalla tu elemento visual principal]

</details>

---

<details>
<summary><strong>Storyboard de Experiencia de Usuario</strong></summary>

### Frame 1: Entrada

**Visual:**
> [Describe o dibuja lo que se ve]

**Estado del sistema:**
> [¿Qué está pasando técnicamente?]

**Experiencia del usuario:**
> [¿Qué percibe/siente el usuario?]

---

### Frame 2: Detección Inicial

**Visual:**
> [Descripción]

**Estado del sistema:**
> [Estado técnico]

**Experiencia del usuario:**
> [Percepción]

---

### Frame 3: Primera Interacción

**Visual:**
> [Descripción]

**Estado del sistema:**
> [Estado técnico]

**Experiencia del usuario:**
> [Percepción]

---

### Frame 4: Exploración

**Visual:**
> [Descripción]

**Estado del sistema:**
> [Estado técnico]

**Experiencia del usuario:**
> [Percepción]

---

### Frame 5: Momento Clímax

**Visual:**
> [Descripción]

**Estado del sistema:**
> [Estado técnico]

**Experiencia del usuario:**
> [Percepción]

---

### Frame 6: Transición/Fade

**Visual:**
> [Descripción]

**Estado del sistema:**
> [Estado técnico]

**Experiencia del usuario:**
> [Percepción]

---

### Frame 7: Reinicio/Loop

**Visual:**
> [Descripción]

**Estado del sistema:**
> [Estado técnico]

**Experiencia del usuario:**
> [Percepción]

</details>

---

<details>
<summary><strong>Diseño de Comportamiento de Partículas</strong></summary>

### Diagrama del Ciclo de Vida de una Partícula

```
NACIMIENTO
  ↓
  - Posición: [De dónde]
  - Velocidad inicial: [Dirección y magnitud]
  - Propiedades: [Color, tamaño, etc.]
  ↓
VIDA
  ↓
  - Física: [Gravedad, fricción, fuerzas]
  - Movimiento: [Trayectoria, variación]
  - Transformación: [Cambios en propiedades]
  ↓
MUERTE
  ↓
  - Condición: [Cuándo muere]
  - Fade: [Cómo desaparece]
  - Cleanup: [Remoción del sistema]
```

**Tu diseño específico:**
> [Detalles de tu sistema de partículas]

---

### Variaciones de Partículas

**Tipo 1: [Nombre]**
- Trigger: [Cuándo aparece]
- Comportamiento: [Cómo se mueve]
- Visual: [Cómo se ve]

**Tipo 2: [Nombre]**
- Trigger:
- Comportamiento:
- Visual:

</details>

---

<details>
<summary><strong>Refinamientos y Notas de Diseño</strong></summary>

### Decisiones de Diseño Importantes

**Decisión 1:**
> [Descripción de una decisión de diseño y su justificación]

**Decisión 2:**
> [Descripción y justificación]

**Decisión 3:**
> [Descripción y justificación]

---

### Elementos a Iterar

**Elemento 1: [Nombre]**
- Problema identificado: [Descripción]
- Solución propuesta: [Descripción]

**Elemento 2: [Nombre]**
- Problema identificado:
- Solución propuesta:

</details>

---

# Actividad 4: Planificación Técnica

<details>
<summary><strong>Selección y Configuración de Modelos</strong></summary>

### Modelo de Hand Pose

**Modelo seleccionado:** ML5.js HandPose (basado en MediaPipe Hands)

**Configuración:**
```javascript
let handpose;
let hands = [];

function preload() {
  // Cargar modelo HandPose
  handpose = ml5.handPose();
}

function setup() {
  // Iniciar detección
  handpose.detectStart(video, gotHands);
}

function gotHands(results) {
  hands = results;
  // results es un array de objetos hand
  // Cada hand tiene:
  // - keypoints: array de 21 puntos
  // - handedness: "Left" o "Right"
  // - score: confianza de detección
}
```

**Justificación:**
- **HandPose vs BodyPose**: HandPose es más preciso para tracking de dedos, más ligero (mejor FPS), y se alinea perfectamente con el concepto de "pintar con los dedos"
- **MediaPipe backend**: Más rápido y estable que TensorFlow.js puro
- **Sin configuración adicional**: El modelo viene pre-optimizado para detección de 2 manos

**Datos a extraer:**
- [x] **Fingertips (puntas de dedos)** - Keypoints específicos:
  - Thumb tip: `keypoints[4]`
  - Index finger tip: `keypoints[8]`
  - Middle finger tip: `keypoints[12]`
  - Ring finger tip: `keypoints[16]`
  - Pinky tip: `keypoints[20]`
- [x] **Handedness** (Left/Right) para asignar paleta de colores
- [x] **Velocidad de cada fingertip** (calculado entre frames)
- [x] **Dirección del movimiento** (vector velocidad normalizado)
- [x] **Score de confianza** para filtrar detecciones inestables

**NO se usa:**
- ❌ Body Segmentation (no necesario para este proyecto)
- ❌ BodyPose (cambiamos a HandPose)
- ❌ Otros keypoints de la mano (solo fingertips)

</details>

---

<details>
<summary><strong>Mapeo Detallado: Movimiento → Visual</strong></summary>

### Tabla de Mapeo Completa

| Elemento Detectado | Condición | Cálculo | Parámetro Visual | Valor/Fórmula |
|-------------------|-----------|---------|------------------|---------------|
| Fingertip de mano IZQUIERDA | speed > 2 | `velocity.mag()` | Cantidad de partículas | `map(speed, 2, 15, 1, 8)` |
| Fingertip de mano IZQUIERDA | speed > 2 | `velocity.mag()` | Hue (color) | `random(160, 200)` (azules/verdes) |
| Fingertip de mano DERECHA | speed > 2 | `velocity.mag()` | Cantidad de partículas | `map(speed, 2, 15, 1, 8)` |
| Fingertip de mano DERECHA | speed > 2 | `velocity.mag()` | Hue (color) | `random(20, 55)` (amarillos/naranjas) |
| Cualquier fingertip | speed > 2 | `velocity` normalizado | Dirección inicial | `velocity.normalize()` |
| Cualquier fingertip | speed | `map(speed, 0, 15)` | Tamaño partícula | `map(speed, 2, 15, 4, 10)` |
| Velocidad baja | speed < 2 | - | NO SPAWN | Sin partículas (umbral mínimo) |

**Umbrales importantes:**
- Velocidad mínima para spawn: `2 pixeles/frame`
- Velocidad máxima esperada: `15 pixeles/frame`
- Partículas por dedo por frame: `1-8` (según velocidad)
- Total máximo teórico: `10 dedos × 8 partículas = 80 partículas/frame`

</details>

---

<details>
<summary><strong>Ubicación y Configuración de Cámara</strong></summary>

### Setup Físico

**Ubicación de la cámara:**
> [Descripción de dónde estará la cámara]

**Distancia del usuario:**
> [Distancia estimada]

**Ángulo de la cámara:**
> [Ángulo y altura]

**Iluminación requerida:**
> [Condiciones de luz necesarias]

**Área de detección:**
> [Dimensiones del espacio de interacción]

---

### Diagrama de Setup

```
       [CÁMARA]
          |
    (2-3 metros)
          |
       [USUARIO]
      /   |   \
   [Zona de interacción]
```

**Tu diagrama:**
> [Crea un diagrama de tu setup específico]

</details>

---

<details>
<summary><strong>Zona de Interacción y Área de Detección</strong></summary>

### Definición del Espacio

**Espacio de interacción:**
> [Dimensiones en pixeles o metros]

**Zonas específicas:**
- Zona 1: [Nombre y función]
- Zona 2: [Nombre y función]
- Zona 3: [Nombre y función]

**Manejo de límites:**
> [¿Qué pasa cuando el usuario sale del frame?]

</details>

---

<details>
<summary><strong>Lógica de Procesamiento y Respuesta Visual</strong></summary>

### Pipeline de Datos

```
1. Captura de Video
   ↓
2. Inferencia de ML5 (pose/segmentation)
   ↓
3. Extracción de datos relevantes
   ↓
4. Cálculos auxiliares (velocidad, etc.)
   ↓
5. Evaluación de condiciones
   ↓
6. Trigger de efectos visuales
   ↓
7. Actualización de sistemas visuales
   ↓
8. Renderizado
   ↓
9. Display en canvas
```

**Notas sobre el pipeline:**
> [Detalles específicos de tu implementación]

---

### Gestión de Estados

**Estados del sistema:**

1. **IDLE**: Esperando detección
   - Visual: [Descripción]
   - Condición de salida: [Usuario detectado]

2. **ACTIVE**: Usuario interactuando
   - Visual: [Descripción]
   - Condición de salida: [Sin movimiento por X segundos]

3. **[ESTADO ADICIONAL]**
   - Visual:
   - Condición de salida:

</details>

---

# Conclusiones y Próximos Pasos

<details>
<summary><strong>Síntesis del Diseño</strong></summary>

### Concepto Final

**Resumen en una frase:**
> [Tu proyecto en una oración]

**Propuesta de valor:**
> [¿Qué hace especial a tu proyecto?]

**Alineación con SUPERRADIANCE:**
> [¿Cómo captura el espíritu de SUPERRADIANCE?]

</details>

---

<details>
<summary><strong>Aprendizajes de la Etapa de Diseño</strong></summary>

### Insights Principales

1. **[Insight 1]**
   > [Descripción]

2. **[Insight 2]**
   > [Descripción]

3. **[Insight 3]**
   > [Descripción]

</details>

---

<details>
<summary><strong>Decisiones Finales de Diseño</strong></summary>

**Decisión 1: [Tema]**
> [Decisión tomada y justificación]

**Decisión 2: [Tema]**
> [Decisión tomada y justificación]

**Decisión 3: [Tema]**
> [Decisión tomada y justificación]

</details>

---

<details>
<summary><strong>Preparación para Semana 2 (Implementación)</strong></summary>

### Checklist de Preparativos

**Antes de empezar a programar:**
- [ ] Diseño conceptual claro y aprobado
- [ ] Referencias organizadas y accesibles
- [ ] Bocetos digitalizados o fotografiados
- [ ] Arquitectura técnica definida
- [ ] Timeline de implementación claro
- [ ] Desafíos identificados con soluciones propuestas
- [ ] Código base de ejercicios previos revisado

---

### Riesgos Identificados

**Riesgo 1: [Descripción]**
- Probabilidad: [Alta/Media/Baja]
- Impacto: [Alto/Medio/Bajo]
- Mitigación: [Estrategia]

**Riesgo 2: [Descripción]**
- Probabilidad:
- Impacto:
- Mitigación:

---

### Recursos Necesarios

**Técnicos:**
- [ ] Computadora con webcam funcional
- [ ] Navegador actualizado (Chrome/Firefox)
- [ ] Editor de código configurado
- [ ] Espacio físico con buena iluminación
- [ ] [Otro recurso]

**De Referencia:**
- [ ] Documentación de ML5.js
- [ ] Ejemplos de p5.js
- [ ] Referencias visuales organizadas
- [ ] [Otro recurso]

</details>

---

<details>
<summary><strong>Reflexión Personal</strong></summary>

### ¿Qué me emociona de este proyecto?
> [Tu respuesta]

### ¿Qué me preocupa o genera incertidumbre?
> [Tu respuesta]

### ¿Cómo voy a manejar los desafíos?
> [Tu estrategia]

### ¿Qué espero aprender de este proceso?
> [Tus expectativas]

</details>

---

<details>
<summary><strong>Aprobación de Diseño</strong></summary>

**Fecha de finalización de diseño:** [Fecha]

**¿El diseño está listo para implementación?** [Sí/No]

**Ajustes pendientes antes de implementar:**
> [Lista de pendientes si los hay]

**Firma/Aprobación:**
> [Tu nombre y fecha]

</details>

---

<details>
<summary><strong>Referencias Bibliográficas</strong></summary>

1. [Referencia 1]
2. [Referencia 2]
3. [Referencia 3]
... [Continuar con todas las referencias usadas]

</details>

---

**Fin de la Bitácora de Diseño - Semana 1**

*Próximo paso: Semana 2 - Etapa de Implementación*

---

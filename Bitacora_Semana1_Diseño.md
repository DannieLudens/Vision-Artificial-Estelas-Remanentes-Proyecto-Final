# Bitácora de Diseño - Proyecto Final
## De "Estelas Remanentes" a "Polifonía Gestual"

---

### 📊 Información del Proyecto

| Campo | Valor |
|-------|-------|
| **Nombre Inicial** | Estelas Remanentes |
| **Nombre Final** | **Polifonía Gestual** |
| **Inspiración Principal** | SUPERRADIANCE (Memo Akten) |
| **Técnica de ML** | Hand Pose Estimation (ML5.js) |
| **Bibliotecas** | ML5.js, p5.js, Tone.js |
| **Fecha de inicio** | 29 de Octubre, 2025 |
| **Fecha de finalización** | 12 de Noviembre, 2025 |
| **Estado** | ✅ **COMPLETADO** |

---

### 🎯 Evolución del Concepto

```
DISEÑO INICIAL (Semana 1)          IMPLEMENTACIÓN FINAL (Semana 2)
━━━━━━━━━━━━━━━━━━━━━━━━━          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
📍 "Estelas Remanentes"             📍 "Polifonía Gestual"
                                    
🎨 Sistema de Partículas            🎨 Ondas Visuales Sincronizadas
   └─ 10 dedos → partículas            └─ 3 capas → ondas expandentes
   
🔇 Visual puro                      🔊 Audiovisual híbrido
                                       └─ 3 sintetizadores (Tone.js)
                                       └─ 6 progresiones armónicas
                                       
✋ Movimiento libre continuo        ✋ Gestos complejos discretos
   └─ Velocidad → cantidad             └─ Click (1 seg)
                                       └─ Volumen con pinza
                                       └─ Efectos con 2 manos
                                       
🎨 Paleta: Azul/Verde vs            🎨 Paleta: Azul/Verde/Naranja
   Amarillo/Naranja (2 manos)          (3 capas musicales)
   
📄 sketch.js monolítico             📦 7 módulos especializados
                                       (1,434 líneas de código)
```

**La esencia que SE MANTUVO:**
> 💡 Expresión libre a través del movimiento corporal  
> 💡 Feedback visual inmediato e intuitivo  
> 💡 Experiencia efímera y sin errores  
> 💡 Manos como instrumento expresivo  

---

### 📖 Índice de la Bitácora

#### **SEMANA 1: DISEÑO INICIAL**

<details>
<summary><strong>Actividad 1: Ideación de la Experiencia</strong></summary>

- Concepto artístico/interactivo
- Selección de técnica de visión artificial
- Propuesta de interacción
- Definición de la experiencia del usuario
- Objetivos de la experiencia
- Inspiración de SUPERRADIANCE
- Mi visión única

</details>

<details>
<summary><strong>Actividad 2: Búsqueda de Referentes</strong></summary>

- Referencias de SUPERRADIANCE
- Ejemplos técnicos (ML5.js y p5.js)
- **Sequenciador con Tone.js (código propio reutilizado)** ⭐
- Instalaciones interactivas similares
- Referencias visuales y estéticas
- Síntesis de investigación

</details>

<details>
<summary><strong>Actividad 3: Diseño en Papel</strong></summary>

- Bocetos de interfaz y experiencia visual
- Diagramas de flujo de interacción
- Wireframes de composición visual
- Storyboard de la experiencia del usuario

</details>

<details>
<summary><strong>Actividad 4: Planificación Técnica</strong></summary>

- Arquitectura del sistema
- Clases y estructuras de datos
- Algoritmos y lógica de procesamiento
- Desafíos técnicos identificados
- Timeline de implementación
- Preparación para Semana 2

</details>

---

#### **SEMANA 2: EVOLUCIÓN Y TRANSFORMACIÓN**

<details>
<summary><strong>📍 El Gran Pivote: De Visual a Audiovisual</strong></summary>

- Historia de la transformación
- ¿Por qué el cambio? (Asesorías + Tone.js)
- Concepto final: "Polifonía Gestual"
- Mantener la esencia del concepto original

</details>

<details>
<summary><strong>🎨 Decisiones de Diseño Clave</strong></summary>

- Sistema de capas musicales (3 capas vs 10 dedos)
- Gestos complejos vs movimiento libre
- Ondas visuales sincronizadas
- Arquitectura modular (7 archivos)

</details>

<details>
<summary><strong>🎵 Sistema Musical: Tone.js</strong></summary>

- Integración de Tone.js
- 3 sintetizadores especializados
- 6 progresiones armónicas
- Sistema de timing musical
- Efecto de reverb gestual

</details>

<details>
<summary><strong>🖥️ Interfaz de Usuario y Controles</strong></summary>

- Layout de controles (4 controles + reset)
- 3 círculos de capas musicales
- Feedback visual de estados
- Control de reset

</details>

<details>
<summary><strong>💭 Reflexión: Conectando Concepto Original con Implementación</strong></summary>

- ¿Se perdió el concepto original?
- Elementos que se mantuvieron
- Elementos que se transformaron
- Aprendizajes del proceso

</details>

---

#### **DOCUMENTACIÓN TÉCNICA DETALLADA**

<details>
<summary><strong>🏗️ Arquitectura Modular: 7 Módulos</strong></summary>

1. `1_config.js` - Configuración y constantes
2. `2_audio.js` - Sistema de audio Tone.js
3. `3_geometry.js` - Detección de colisiones
4. `4_handlers.js` - Manejadores de eventos
5. `5_gestures.js` - Sistema de gestos
6. `6_visual.js` - Renderizado visual
7. `7_main.js` - Loop principal

</details>

<details>
<summary><strong>✋ Sistema de Gestos con HandPose</strong></summary>

- Gesto 1: Click Virtual (1 segundo)
- Gesto 2: Control de Volumen (pinza)
- Gesto 3: Control de Efectos (reverb)
- Keypoints utilizados (índice, medio, pulgar)

</details>

<details>
<summary><strong>📚 Referencias y Recursos</strong></summary>

- Referencias artísticas (SUPERRADIANCE, etc.)
- Referencias técnicas (ML5.js, Tone.js, p5.js)
- Recursos educativos del curso
- Conceptos teóricos aplicados

</details>

---

### 🎯 Resultado Final

**"Polifonía Gestual"** es una experiencia híbrida audiovisual donde:

✨ **3 gestos complejos** de manos controlan un secuenciador musical  
🎵 **3 capas polifónicas** (arpegio, acordes, bajo) con **6 progresiones armónicas**  
🌊 **Ondas visuales sincronizadas** proporcionan feedback inmediato  
🎮 **4 controles adicionales** (BPM, Progresión, Reverb, Surprise)  
🔄 **Sistema de reset completo** para empezar de nuevo  
📦 **Arquitectura modular** de 7 archivos especializados  

> **"Tus manos dirigen una orquesta invisible, tejiendo capas musicales que fluyen en el espacio digital."**

---

# SEMANA 1: DISEÑO INICIAL

## Nombre Inicial del Proyecto: Estelas Remanentes

**Inspiración Principal:** SUPERRADIANCE de Memo Akten y Katie Payton Hofstadter

**Técnica Seleccionada:** Hand Pose Estimation (ML5.js HandPose)

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

---

### Ejemplo Técnico 2: Sequenciador con Tone.js y p5.js (Repositorio Propio)

**Fuente:**
- Carpeta: `Sequenciador_Tonejs_y_P5js/`
- Archivos: `sketch.js`, `index.html`, `style.css`

**Técnica implementada:**
- Tone.js para síntesis de audio web
- Sistema de capas musicales (arpegio, acordes, bajo)
- Secuenciador con loop de 2 compases
- Control visual de activación de capas

**¿Qué aprendí de este ejemplo?**

Este referente resultó **CRÍTICO** para la evolución del proyecto final. Descubrir este código en mi propio repositorio fue el catalizador que transformó "Estelas Remanentes" (visual) en "Polifonía Gestual" (audiovisual).

**Estructura de capas musicales** (código reutilizable):
```javascript
// Sistema de 3 capas independientes
const layers = {
  arpegio: {
    active: false,
    color: [100, 150, 255],
    volume: 60,
    pattern: [] // Notas del arpegio
  },
  acordes: {
    active: false,
    color: [100, 255, 150],
    volume: 60,
    pattern: [] // Acordes completos
  },
  bajo: {
    active: false,
    color: [255, 150, 100],
    volume: 60,
    pattern: [] // Notas graves
  }
};
```

**Sistema de síntesis con Tone.js:**
```javascript
// Creación de sintetizadores especializados
const arpegioSynth = new Tone.PolySynth(Tone.Synth, {
  oscillator: { type: "triangle" },
  envelope: { attack: 0.005, decay: 0.3, sustain: 0.1, release: 1.2 }
}).toDestination();

// Secuenciador con Tone.Transport
const arpegioPart = new Tone.Part((time, note) => {
  arpegioSynth.triggerAttackRelease(note, "8n", time);
}, arpegioPattern);
arpegioPart.loop = true;
arpegioPart.loopEnd = "2m"; // 2 compases
```

**Toggle de capas:**
```javascript
function toggleLayer(layerName) {
  const layer = layers[layerName];
  layer.active = !layer.active;
  
  if (layer.active) {
    // Activar reproducción
    if (layerName === "arpegio") arpegioPart.start(0);
    // Spawn feedback visual
  } else {
    // Desactivar
    if (layerName === "arpegio") arpegioPart.stop();
  }
}
```

**Código/funcionalidad que REUTILICÉ en el proyecto final:**

1. ✅ **Estructura de capas**: El objeto `layers` con propiedades `active`, `color`, `volume`
2. ✅ **Sistema de síntesis**: Los 3 sintetizadores (arpegio, acordes, bajo) con sus configuraciones
3. ✅ **Lógica de toggle**: Activar/desactivar capas con Tone.Part
4. ✅ **Loop de 2 compases**: Estructura rítmica base
5. ✅ **Sistema de colores**: Diferenciación visual por capa

**Lo que TRANSFORMÉ:**
- ❌ Clicks de mouse → ✅ Gestos complejos de manos
- ❌ Botones rectangulares → ✅ Círculos y formas geométricas interactivas
- ❌ Sin visualización → ✅ Ondas expandentes sincronizadas
- ❌ Sin control de volumen → ✅ Control gestual de volumen con pinza
- ❌ Sin efectos → ✅ Reverb gestual
- ❌ Una progresión → ✅ 6 progresiones intercambiables

**Impacto en el proyecto final:**
> Este código fue la **base técnica musical** del proyecto final. Sin él, hubiera tenido que aprender Tone.js desde cero durante la Semana 2, lo cual hubiera sido imposible. Al tener esta base, pude enfocarme en:
> - La **integración con HandPose** (detección de gestos)
> - El **sistema visual de ondas** (sincronización audio-visual)
> - La **complejidad gestual** (dos manos, múltiples gestos)

**Reflexión:**
> A veces los mejores referentes están en tu propio trabajo previo. Revisar ejercicios anteriores no es perder tiempo - es reconocer patrones y reutilizar conocimiento. Este secuenciador, que originalmente hice como práctica de Tone.js, se convirtió en la **columna vertebral** de mi proyecto final.

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

# DOCUMENTACIÓN TÉCNICA DETALLADA

<details>
<summary><strong>Arquitectura Modular: 7 Módulos del Sistema</strong></summary>

### Visión General de la Arquitectura

El proyecto está organizado en **7 archivos JavaScript especializados**, cada uno con responsabilidades claras:

```
├── 1_config.js       → Configuración y constantes globales
├── 2_audio.js        → Sistema de audio Tone.js
├── 3_geometry.js     → Detección de colisiones geométricas
├── 4_handlers.js     → Lógica de eventos y cambios de estado
├── 5_gestures.js     → Detección y procesamiento de gestos
├── 6_visual.js       → Renderizado visual (ondas, UI, manos)
└── 7_main.js         → Setup, draw, loop principal
```

**Flujo de datos:**

```
HandPose (ML5.js)
     ↓
[5_gestures.js] → Detecta gestos
     ↓
[4_handlers.js] → Procesa acciones
     ↓
[2_audio.js] ← → [6_visual.js]
   (Sonido)      (Visualización)
```

### Módulo 1: `1_config.js` - Configuración

**Propósito**: Centralizar todas las constantes, valores iniciales y estructuras de datos

**Contenido clave:**

```javascript
// Constantes de detección gestual
const CLICK_DURATION = 1000;           // 1 seg para activar
const FINGERS_CLOSE_THRESHOLD = 30;    // Índice + medio juntos
const VOLUME_DISTANCE_MIN = 20;        // Rango de control
const VOLUME_DISTANCE_MAX = 150;

// Valores iniciales para reset
const INITIAL_VALUES = {
  bpm: 130,
  bpmIndex: 1,
  progression: 0,
  reverb: 0,
  layerVolumes: { arpegio: 60, acordes: 60, bajo: 60 }
};

// Sistema de capas musicales
const layers = {
  arpegio: {
    active: false,
    color: [100, 150, 255],  // Azul
    name: "Arpegio",
    icon: "🎵",
    volume: 60
  },
  acordes: { /* ... */ },
  bajo: { /* ... */ }
};

// Círculos interactivos (3)
const circles = [
  { x: 160, y: 200, radius: 40, layer: "arpegio", clickTimer: 0, hasClicked: false },
  { x: 320, y: 200, radius: 40, layer: "acordes", clickTimer: 0, hasClicked: false },
  { x: 480, y: 200, radius: 40, layer: "bajo", clickTimer: 0, hasClicked: false }
];

// Controles adicionales (4: BPM, PROG, Reverb, Surprise)
const controls = [
  { type: "square", x: 100, y: 120, size: 30, control: "bpm", values: [90, 130, 180] },
  { type: "square", x: 200, y: 120, size: 30, control: "progression" },
  { type: "square", x: 300, y: 120, size: 30, control: "reverb" },
  { type: "star", x: 400, y: 120, size: 30, control: "surprise" }
];
```

**Decisión de diseño**: Separar configuración facilita ajustes rápidos sin tocar lógica

### Módulo 2: `2_audio.js` - Sistema de Audio

**Propósito**: Manejo completo del sistema musical con Tone.js

**Sintetizadores especializados:**

```javascript
// Arpegio: Melódico y brillante (triángulo)
const arpegioSynth = new Tone.PolySynth(Tone.Synth, {
  oscillator: { type: "triangle" },
  envelope: { attack: 0.005, decay: 0.3, sustain: 0.1, release: 1.2 }
}).toDestination();

// Acordes: Base armónica (seno)
const acordesSynth = new Tone.PolySynth(Tone.Synth, {
  oscillator: { type: "sine" },
  envelope: { attack: 0.05, decay: 0.3, sustain: 0.4, release: 1 }
}).toDestination();

// Bajo: Fundamento grave con filtro paso bajo
const bajoSynth = new Tone.MonoSynth({
  oscillator: { type: "sine" },
  envelope: { attack: 0.05, decay: 0.3, sustain: 0.4, release: 1 },
  filter: { Q: 1, type: "lowpass", frequency: 300 }
}).toDestination();

// Efecto Reverb compartido
const reverb = new Tone.Reverb({ decay: 2, wet: 0 }).toDestination();
arpegioSynth.connect(reverb);
acordesSynth.connect(reverb);
bajoSynth.connect(reverb);
```

**6 Progresiones armónicas:**

```javascript
const progressions = [
  {
    name: "Actual (Em-C-D)",
    chords: ["Em", "C", "D", "Em"],
    pattern: ["0:0", "0:2", "0:4", "0:6"]
  },
  {
    name: "Pop Clásica",
    chords: ["I", "V", "vi", "IV"],
    pattern: ["0:0", "0:2", "0:4", "0:6"]
  },
  // ... 4 progresiones más (Blues, Jazz, Rock, Emotiva)
];
```

**Generación de patrones rítmicos:**

```javascript
function generateArpeggioPattern() {
  const prog = progressions[currentProgression];
  const pattern = [];
  
  prog.chords.forEach((chordSymbol, i) => {
    const time = prog.pattern[i];
    const chord = romanToChord(chordSymbol, rootNote, scaleType);
    
    // Arpegio: 4 notas por acorde (corcheas)
    [0, 0.5, 1, 1.5].forEach((offset, j) => {
      const noteTime = `${measure}:${beat + offset}`;
      pattern.push([noteTime, chord[j % 3].replace("3", "4")]);
    });
  });
  
  return pattern;
}
```

**Función de toggle de capas con spawn de ondas:**

```javascript
function toggleLayer(layerName) {
  const layer = layers[layerName];
  layer.active = !layer.active;
  
  if (layer.active) {
    // Activar capa musical
    if (layerName === "arpegio") arpegioPart.start(0);
    if (layerName === "acordes") acordesPart.start(0);
    if (layerName === "bajo") bajoPart.start(0);
    
    // Spawn onda visual inicial
    const circle = circles.find(c => c.layer === layerName);
    waves.push({
      x: circle.x,
      y: circle.y,
      timestamp: millis(),
      layer: layerName,
      color: layer.color
    });
  } else {
    // Desactivar capa
    if (layerName === "arpegio") arpegioPart.stop();
    if (layerName === "acordes") acordesPart.stop();
    if (layerName === "bajo") bajoPart.stop();
  }
}
```

### Módulo 3: `3_geometry.js` - Detección de Colisiones

**Propósito**: Funciones helper para detectar si un punto está dentro de formas geométricas

```javascript
// Detección círculo
function isPointInCircle(px, py, circle) {
  const d = dist(px, py, circle.x, circle.y);
  return d < circle.radius;
}

// Detección cuadrado
function isPointInSquare(px, py, square) {
  return px > square.x - square.size/2 &&
         px < square.x + square.size/2 &&
         py > square.y - square.size/2 &&
         py < square.y + square.size/2;
}

// Detección triángulo (usando áreas)
function isPointInTriangle(px, py, triangle) {
  // Usa método de coordenadas baricéntricas
  const [x1, y1] = getTriangleVertices(triangle)[0];
  // ... cálculo de áreas
  return areaOrig === (area1 + area2 + area3);
}

// Detección estrella de 5 puntas
function isPointInStar(px, py, star) {
  // Verifica si está en círculo exterior pero no en pentágono interior
  // ... cálculos geométricos
}

// Helper: Distancia entre dos puntos
function calculateDistance(p1, p2) {
  return dist(p1.x, p1.y, p2.x, p2.y);
}
```

**Uso**: Cada frame, se verifica si dedos (keypoints) están dentro de controles

### Módulo 4: `4_handlers.js` - Manejadores de Eventos

**Propósito**: Lógica de negocio para cada tipo de control

```javascript
// Cambiar BPM
function changeBPM(control) {
  control.currentIndex = (control.currentIndex + 1) % control.values.length;
  const newBPM = control.values[control.currentIndex];
  currentBPMIndex = control.currentIndex;
  Tone.Transport.bpm.value = newBPM;
  console.log(`BPM cambiado a: ${newBPM}`);
}

// Cambiar progresión armónica
function changeProgression(control) {
  control.currentIndex = (control.currentIndex + 1) % progressions.length;
  currentProgression = control.currentIndex;
  regeneratePatterns();  // Regenera arpegio, acordes, bajo
  console.log(`Progresión: ${progressions[currentProgression].name}`);
}

// Actualizar nivel de reverb
function updateReverbLevel(control, level) {
  const reverbWet = level / 100;
  reverb.wet.value = constrain(reverbWet, 0, 0.6);
  control.reverbLevel = level;
}

// Sorpresa aleatoria
function triggerSurprise() {
  // Aleatoriza BPM
  const randomBPMIndex = floor(random(0, controls[0].values.length));
  controls[0].currentIndex = randomBPMIndex;
  Tone.Transport.bpm.value = controls[0].values[randomBPMIndex];
  
  // Aleatoriza progresión
  const randomProg = floor(random(0, progressions.length));
  currentProgression = randomProg;
  controls[1].currentIndex = randomProg;
  
  // Aleatoriza reverb
  const randomReverb = random(0, 60);
  updateReverbLevel(controls[2], randomReverb);
  
  regeneratePatterns();
  console.log("✨ SURPRISE! Todo aleatorizado");
}

// Reset completo
function resetAllToInitial() {
  // Restaurar valores iniciales
  Tone.Transport.bpm.value = INITIAL_VALUES.bpm;
  currentBPMIndex = INITIAL_VALUES.bpmIndex;
  currentProgression = INITIAL_VALUES.progression;
  
  // Apagar todas las capas
  Object.keys(layers).forEach(layerKey => {
    if (layers[layerKey].active) toggleLayer(layerKey);
    layers[layerKey].volume = INITIAL_VALUES.layerVolumes[layerKey];
  });
  
  // Resetear reverb
  reverb.wet.value = 0;
  regeneratePatterns();
  
  console.log("🔄 Sistema reseteado");
}
```

### Módulo 5: `5_gestures.js` - Sistema de Gestos

**Propósito**: Detección compleja de gestos con HandPose

**Loop principal de detección:**

```javascript
function detectGestures() {
  // Resetear estados
  circles.forEach(circle => {
    circle.indexInside = false;
    circle.indexMiddleInside = false;
    circle.otherHandPinch = null;
  });
  
  if (hands.length === 0) return;
  
  // Analizar cada mano
  for (let hand of hands) {
    const indexTip = hand.keypoints[8];    // Índice
    const middleTip = hand.keypoints[12];  // Medio
    const thumbTip = hand.keypoints[4];    // Pulgar
    
    // Verificar círculos
    for (let circle of circles) {
      // Gesto 1: Índice dentro → posible click
      if (isPointInCircle(indexTip.x, indexTip.y, circle)) {
        circle.indexInside = true;
        
        // Gesto 2: Índice + Medio juntos dentro → edición de volumen
        const distIndexMiddle = calculateDistance(indexTip, middleTip);
        if (distIndexMiddle < FINGERS_CLOSE_THRESHOLD &&
            isPointInCircle(middleTip.x, middleTip.y, circle)) {
          circle.indexMiddleInside = true;
          circle.editingHand = hand.handedness;
        }
      }
    }
    
    // Si hay 2 manos, detectar pinza de la otra
    if (hands.length === 2) {
      const otherHand = hands.find(h => h.handedness !== hand.handedness);
      if (otherHand) {
        const otherThumb = otherHand.keypoints[4];
        const otherIndex = otherHand.keypoints[8];
        const pinchDistance = calculateDistance(otherThumb, otherIndex);
        
        // Guardar info de pinza para control de volumen
        circles.forEach(circle => {
          if (circle.editingHand === hand.handedness) {
            circle.otherHandPinch = {
              distance: pinchDistance,
              thumb: otherThumb,
              index: otherIndex
            };
          }
        });
      }
    }
  }
  
  // Procesar lógica de cada círculo
  circles.forEach(circle => processCircleGestures(circle));
  controls.forEach(control => processControlGestures(control));
  processResetButton();
}
```

**Procesamiento de gestos por círculo:**

```javascript
function processCircleGestures(circle) {
  // MODO EDICIÓN DE VOLUMEN (PRIORIDAD 1)
  if (circle.indexMiddleInside) {
    circle.isEditingVolume = true;
    circle.hasClicked = true;  // Bloquear clicks
    
    // Si hay pinza de otra mano, ajustar volumen
    if (circle.otherHandPinch) {
      const volumePercent = map(
        circle.otherHandPinch.distance,
        VOLUME_DISTANCE_MIN,
        VOLUME_DISTANCE_MAX,
        0,
        100
      );
      const constrainedVolume = constrain(volumePercent, 0, 100);
      updateLayerVolume(circle.layer, constrainedVolume);
    }
  } 
  // MODO CLICK (PRIORIDAD 2)
  else if (circle.indexInside && !circle.indexMiddleInside) {
    if (!circle.hasClicked) {
      circle.clickTimer += deltaTime;
      
      // Si se completa 1 segundo, activar toggle
      if (circle.clickTimer >= CLICK_DURATION) {
        toggleLayer(circle.layer);
        circle.hasClicked = true;
      }
    }
  } 
  // RESET
  else {
    if (circle.isEditingVolume) {
      circle.isEditingVolume = false;
    }
    if (circle.clickTimer > 0 && !circle.hasClicked) {
      circle.clickTimer = 0;  // Cancelar click incompleto
    }
    if (!circle.indexInside) {
      circle.hasClicked = false;
      circle.clickTimer = 0;
    }
  }
}
```

**Keypoints de HandPose usados:**

```javascript
// ML5.js HandPose proporciona 21 keypoints por mano
// Keypoints críticos para este proyecto:
hand.keypoints[4]   // Pulgar (Thumb tip)
hand.keypoints[8]   // Índice (Index finger tip)
hand.keypoints[12]  // Medio (Middle finger tip)

// Cada keypoint tiene:
// - x, y: Posición en canvas
// - name: Nombre descriptivo
// - score: Confianza de detección (0-1)

// Identificación de mano:
hand.handedness  // "Left" o "Right"
```

### Módulo 6: `6_visual.js` - Renderizado Visual

**Propósito**: Toda la visualización (ondas, UI, manos, feedback)

**Sistema de ondas expandentes:**

```javascript
// Configuración de ondas por capa
const waveConfig = {
  arpegio: { maxRadius: 80, duration: 1000, expansion: 0.08 },
  acordes: { maxRadius: 100, duration: 1500, expansion: 0.067 },
  bajo: { maxRadius: 120, duration: 2000, expansion: 0.06 }
};

let waves = [];  // Array de ondas activas

// Spawn de onda (llamado desde 2_audio.js al tocar nota)
function spawnWave(layerName) {
  const circle = circles.find(c => c.layer === layerName);
  const layer = layers[layerName];
  
  waves.push({
    x: circle.x,
    y: circle.y,
    timestamp: millis(),
    layer: layerName,
    color: layer.color
  });
}

// Dibuja y actualiza ondas
function drawWaves() {
  waves = waves.filter(wave => {
    const elapsed = millis() - wave.timestamp;
    const config = waveConfig[wave.layer];
    
    // Si excede duración, eliminar
    if (elapsed > config.duration) return false;
    
    // Calcular radio actual
    const currentRadius = elapsed * config.expansion;
    
    // Fade out progresivo
    const alpha = map(elapsed, 0, config.duration, 255, 0);
    
    // Dibujar onda
    push();
    stroke(...wave.color, alpha);
    strokeWeight(2);
    noFill();
    circle(wave.x, wave.y, currentRadius * 2);
    pop();
    
    return true;  // Mantener onda
  });
}
```

**Visualización de manos:**

```javascript
function drawHands() {
  for (let hand of hands) {
    // Dibujar conexiones entre keypoints
    drawConnections(hand);
    
    // Dibujar keypoints importantes
    const indexTip = hand.keypoints[8];
    const middleTip = hand.keypoints[12];
    const thumbTip = hand.keypoints[4];
    
    fill(255, 255, 0);
    noStroke();
    circle(indexTip.x, indexTip.y, 10);    // Índice amarillo
    circle(middleTip.x, middleTip.y, 8);   // Medio más pequeño
    circle(thumbTip.x, thumbTip.y, 8);     // Pulgar
  }
}

function drawConnections(hand) {
  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4],      // Pulgar
    [0, 5], [5, 6], [6, 7], [7, 8],      // Índice
    [0, 9], [9, 10], [10, 11], [11, 12], // Medio
    // ... más conexiones
  ];
  
  stroke(255, 100);
  strokeWeight(2);
  connections.forEach(([i, j]) => {
    const kp1 = hand.keypoints[i];
    const kp2 = hand.keypoints[j];
    line(kp1.x, kp1.y, kp2.x, kp2.y);
  });
}
```

**UI de controles:**

```javascript
function drawControls() {
  controls.forEach(control => {
    push();
    
    // Dibuja según tipo
    if (control.type === "square") {
      drawSquareControl(control);
    } else if (control.type === "star") {
      drawStarControl(control);
    }
    
    // Label
    fill(255);
    textAlign(CENTER);
    text(control.label, control.x, control.y + 40);
    
    // Valor actual
    if (control.control === "bpm") {
      text(control.values[control.currentIndex], control.x, control.y);
    } else if (control.control === "progression") {
      text(control.currentIndex, control.x, control.y);
    }
    
    pop();
  });
}
```

### Módulo 7: `7_main.js` - Loop Principal

**Propósito**: Setup, draw, y callbacks de ML5.js

```javascript
let handPose;
let video;
let hands = [];

function preload() {
  // Cargar modelo HandPose
  handPose = ml5.handPose({ flipped: true });
}

function setup() {
  createCanvas(640, 480);
  
  // Video de cámara
  video = createCapture(VIDEO, { flipped: true });
  video.size(640, 480);
  video.hide();
  
  // Iniciar detección
  handPose.detectStart(video, gotHands);
  
  // Iniciar Tone.js (requiere interacción de usuario)
  Tone.start();
  
  // Generar patrones musicales iniciales
  regeneratePatterns();
}

function draw() {
  background(20);  // Fondo oscuro
  
  // 1. Detectar gestos
  detectGestures();
  
  // 2. Dibujar ondas
  drawWaves();
  
  // 3. Dibujar UI (círculos, controles)
  drawCircles();
  drawControls();
  drawResetButton();
  
  // 4. Dibujar manos
  drawHands();
  
  // 5. Dibujar video pequeño en esquina
  push();
  image(video, width - 160, height - 120, 160, 120);
  pop();
  
  // 6. Info de depuración (opcional)
  drawDebugInfo();
}

// Callback cuando HandPose detecta manos
function gotHands(results) {
  hands = results;
}
```

</details>

---

<details>
<summary><strong>Reflexión Personal sobre el Proceso</strong></summary>

### ¿Qué me emociona de este proyecto?

La **transformación del concepto inicial** en algo más rico y complejo sin perder la esencia. Me emociona especialmente:

- **La dimensión sinestésica**: Que el usuario no solo vea sino también escuche su expresión
- **La complejidad gestual**: Los gestos de dos manos creando controles expresivos
- **La accesibilidad musical**: Crear música sin necesidad de conocimiento previo
- **La modularidad del código**: Cada módulo tiene un propósito claro y puede evolucionar independientemente

### ¿Qué me preocupaba o generaba incertidumbre?

**Durante el proceso:**
- ¿Abandonar las partículas significaba traicionar el concepto original?
- ¿Sería muy complejo gestualmente? ¿Se entendería?
- ¿El rendimiento de Tone.js + HandPose juntos sería aceptable?
- ¿6 progresiones son demasiadas o muy pocas?

**Respuestas que encontré:**
- ✅ **No traicioné el concepto** - lo expandí manteniendo la esencia
- ✅ **Los gestos son autodescubribles** - la gente explora naturalmente
- ✅ **El rendimiento es bueno** - 30-40 FPS en hardware moderno
- ✅ **6 progresiones dan variedad** sin abrumar

### ¿Cómo manejé los desafíos?

**Desafío 1: Sincronización audio-visual**
- **Solución**: Spawn de ondas desde el callback de Tone.js al tocar cada nota
- **Aprendizaje**: La arquitectura event-driven es clave para sincronización

**Desafío 2: Detección de gestos complejos (dos manos)**
- **Solución**: Estado por círculo/control (`editingHand`, `otherHandPinch`)
- **Aprendizaje**: Mantener estado explícito evita bugs de detección cruzada

**Desafío 3: Performance con múltiples ondas**
- **Solución**: Filtrar ondas muertas cada frame, limitar duración
- **Aprendizaje**: Limpiar estructuras es tan importante como crearlas

**Desafío 4: Modularización sin romper flujo**
- **Solución**: Variables globales compartidas, funciones puras donde es posible
- **Aprendizaje**: Balance entre modularidad y pragmatismo

### ¿Qué aprendí de este proceso?

**Técnicamente:**
1. **Tone.js es increíblemente potente** para audio generativo web
2. **HandPose de ML5.js es estable** y suficientemente preciso para control fino
3. **La arquitectura modular escala mejor** que sketch monolítico
4. **Event-driven programming** es natural para sincronización multimedia

**Creativamente:**
1. **La restricción impulsa creatividad**: De 10 dedos a 3 capas = decisión difícil pero liberadora
2. **El proceso no es lineal**: Volver a pensar el concepto a mitad de camino está bien
3. **Los referentes propios importan**: Tener código base (`Sequenciador`) aceleró mucho
4. **La asesoría externa es oro**: Las preguntas del profesor detonaron ideas clave

**Personalmente:**
1. **Soy capaz de pivotar sin perder el norte** - flexibilidad con dirección
2. **Disfruto la complejidad técnica** - resolver problemas de sincronización me divierte
3. **La documentación mientras creo me ayuda** a reflexionar sobre decisiones
4. **Estoy orgulloso del resultado** - superó mis expectativas iniciales

### Cierre: Del "¿Y si...?" al "Lo hice"

Este proyecto empezó con la pregunta:
> "¿Y si pudiera pintar con luz usando mis manos?"

Y evolucionó a:
> "¿Y si pudiera componer música con gestos mientras creo arte visual sincronizado?"

La respuesta es: **Sí, puedo. Y lo hice.**

Y en el proceso aprendí que **la esencia de una idea creativa no está en el medio específico** (partículas vs ondas, visual vs audiovisual) sino en **lo que esa idea evoca**: libertad, expresión, fluidez, y la belleza de lo efímero.

**"Polifonía Gestual"** es más que código - es una **invitación a jugar**, a explorar, a crear algo bello con las manos que desaparecerá en instantes. Y eso, creo, es el arte interactivo en su forma más pura.

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

# SEMANA 2: EVOLUCIÓN Y TRANSFORMACIÓN DEL CONCEPTO

## Cambio de Paradigma: De Visual a Audiovisual

<details>
<summary><strong>El Gran Pivote: De "Estelas Remanentes" a "Polifonía Gestual"</strong></summary>

### Historia de la Transformación

Durante la **Semana 2**, el proyecto experimentó una **evolución significativa** que transformó fundamentalmente su naturaleza, pero **manteniendo su esencia conceptual intacta**.

**El concepto original** de "manos fluyendo en luz líquida" y la idea de **expresión libre a través del movimiento** se mantuvieron, pero el medio de expresión se expandió:

> **De**: Sistema de partículas visuales que emanan de los dedos
> 
> **A**: Secuenciador musical gestual con feedback visual sincronizado

### ¿Por qué el cambio?

#### 1. **Asesorías con el Profesor y Evolución Natural**

Durante las asesorías, surgió una reflexión importante: **¿Cómo profundizar la experiencia más allá de lo visual?** El movimiento ya era expresivo, pero faltaba una **dimensión sensorial adicional** que potenciara la experiencia.

La pregunta clave fue: **"¿Y si el movimiento no solo creara luz, sino también sonido?"**

Esto abrió una nueva dimensión: el usuario no solo "pinta con luz" sino que **compone música con gestos**, creando una experiencia **sinestésica** donde visual y sonoro se entrelazan.

#### 2. **Descubrimiento de Tone.js y Nuevas Posibilidades**

Al investigar bibliotecas de audio web, descubrí **Tone.js**, una biblioteca potente para síntesis de audio en tiempo real. Esto coincidió con el análisis del proyecto base `Sequenciador_Tonejs_y_P5js/` que ya tenía en el repositorio.

**Momento eureka:**
> "Si puedo tener un secuenciador musical, y puedo detectar gestos con HandPose... ¿puedo controlar música con gestos complejos en lugar de simples clicks?"

#### 3. **Mantener la Esencia del Concepto Original**

Aunque el medio cambió, **la metáfora central se mantiene**:

| Concepto Original | Implementación Musical |
|-------------------|------------------------|
| **Fluir con luz líquida** | **Fluir con capas sonoras** |
| **Tocar el mar con los dedos** | **Tocar instrumentos virtuales con gestos** |
| **Estelas que se desvanecen** | **Ondas visuales sincronizadas que se expanden** |
| **Expresión libre sin restricciones** | **Composición musical intuitiva sin conocimiento musical previo** |
| **Dualidad de manos (mar/sol)** | **3 capas musicales (arpegio/acordes/bajo)** |
| **Velocidad = más partículas** | **Distancia de pinza = control de volumen/efectos** |

**La esencia permanece**: El movimiento como forma de expresión artística libre, intuitiva y emotiva.

### Concepto Final: "Polifonía Gestual"

**Nuevo nombre del proyecto:** Polifonía Gestual

**Definición:**
> Una experiencia híbrida audiovisual donde el usuario controla capas musicales (arpegio, acordes, bajo) mediante gestos de manos, creando composiciones polifónicas en tiempo real mientras ondas visuales sincronizan con cada capa sonora.

**Metáfora actualizada:**
> "Tus manos son las directoras de una orquesta invisible. Cada gesto activa, controla y moldea capas musicales que fluyen en el espacio digital. Las ondas visuales que emanan de cada capa son la memoria visual de tu composición efímera."

</details>

---

<details>
<summary><strong>Decisiones de Diseño: De Partículas a Ondas + Música</strong></summary>

### Decisión 1: Sistema de Capas Musicales

**¿Por qué 3 capas en lugar de partículas por dedo?**

En el diseño original, los **10 dedos** emitían partículas independientes. En la versión musical, simplifiqué a **3 capas musicales**:

1. **Arpegio** (🎵) - Notas rápidas ascendentes, melódicas
2. **Acordes** (🎹) - Base armónica, acordes completos
3. **Bajo** (🎸) - Fundamento grave, ritmo

**Razones:**
- **Complejidad musical manejable**: 3 capas permiten polifonía rica pero comprensible
- **Control gestual más claro**: Cada círculo = una capa, fácil de entender visualmente
- **Referente del secuenciador base**: El `Sequenciador_Tonejs_y_P5js/` ya usaba este patrón de 3 capas
- **Balance**: Suficiente complejidad para ser interesante, pero no abrumador

**Código clave** (`1_config.js`):
```javascript
const layers = {
  arpegio: {
    active: false,
    color: [100, 150, 255],  // Azul (herencia de "mar/aire")
    name: "Arpegio",
    volume: 60
  },
  acordes: {
    active: false,
    color: [100, 255, 150],  // Verde (herencia conceptual)
    name: "Acordes",
    volume: 60
  },
  bajo: {
    active: false,
    color: [255, 150, 100],  // Naranja (herencia de "sol")
    name: "Bajo",
    volume: 60
  }
};
```

### Decisión 2: Gestos Complejos vs Movimiento Libre

**Del diseño original:**
> "Movimientos libres crean partículas - más velocidad = más partículas"

**En la implementación final:**
> "Gestos específicos activan funciones - complejidad del gesto = complejidad de control"

**Los 3 gestos principales:**

#### Gesto 1: Click Virtual (1 segundo)
- **Cómo**: Mantener índice dentro de círculo de capa por 1 seg
- **Efecto**: Toggle ON/OFF de la capa musical
- **Visual**: Barra de progreso circular mientras se mantiene

```javascript
// 5_gestures.js - Sistema de click con duración
if (circle.indexInside && !circle.indexMiddleInside) {
  if (!circle.hasClicked) {
    circle.clickTimer += deltaTime;
    if (circle.clickTimer >= CLICK_DURATION) {
      toggleLayer(circle.layer);
      circle.hasClicked = true;
    }
  }
}
```

#### Gesto 2: Control de Volumen con Pinza
- **Cómo**: Índice + medio juntos (< 30px) en círculo + otra mano hace pinza
- **Efecto**: Ajuste de volumen 0-100% según distancia pulgar-índice (20-150px)
- **Visual**: Indicador de nivel de volumen alrededor del círculo

```javascript
// Mapeo de distancia de pinza a volumen
const volumePercent = map(
  circle.otherHandPinch.distance,
  VOLUME_DISTANCE_MIN,    // 20px
  VOLUME_DISTANCE_MAX,    // 150px
  0,
  100
);
```

#### Gesto 3: Control de Efectos (Reverb)
- **Cómo**: Índice + medio en control cuadrado Reverb + otra mano pinza
- **Efecto**: Ajuste de reverberación 0-60% según distancia de pinza
- **Visual**: Indicador de nivel de efecto

**¿Por qué estos gestos?**

1. **Intuitivos pero no triviales**: Requieren intención (no activación accidental)
2. **Dos manos = más expresividad**: Una mano selecciona, otra modula
3. **Progresión de complejidad**: Click simple → Volumen con dos manos → Efectos
4. **Feedback claro**: Cada gesto tiene indicación visual inmediata

### Decisión 3: Ondas Visuales Sincronizadas

**¿Por qué ondas en lugar de partículas?**

En lugar del sistema complejo de partículas del diseño original, opté por **ondas expandentes sincronizadas** con el audio:

**Características de las ondas:**
- **Spawning sincronizado**: Cada nota tocada genera una onda
- **Diferenciación por capa**: Cada capa tiene radio máximo único
  - Arpegio: 80px, 1 segundo
  - Acordes: 100px, 1.5 segundos
  - Bajo: 120px, 2 segundos
- **Expansión suave**: Crecimiento constante con fade-out
- **Color heredado**: Usa los colores de las capas

**Código clave** (`6_visual.js`):
```javascript
function drawWaves() {
  waves.forEach((wave, index) => {
    const elapsed = millis() - wave.timestamp;
    const config = waveConfig[wave.layer];
    
    // Cálculo de radio actual
    const currentRadius = elapsed * config.expansion;
    
    // Fade out progresivo
    const alpha = map(elapsed, 0, config.duration, 255, 0);
    
    // Dibujar onda expandente
    stroke(...wave.color, alpha);
    noFill();
    strokeWeight(2);
    circle(wave.x, wave.y, currentRadius * 2);
  });
}
```

**Ventajas de las ondas:**
- ✅ **Performance**: Más eficiente que miles de partículas
- ✅ **Claridad visual**: Más limpio, menos caótico
- ✅ **Sincronización perfecta**: Cada onda = una nota
- ✅ **Estética minimalista**: Elegante y comprensible

### Decisión 4: Arquitectura Modular

**Del diseño original:**
> Sketch monolítico (todo en `sketch.js`)

**En la implementación final:**
> 7 módulos especializados

**Estructura modular:**

```
1_config.js      → Constantes, valores iniciales, configuración
2_audio.js       → Tone.js, síntesis, progresiones, patrones
3_geometry.js    → Detección de colisiones (círculos, cuadrados, etc.)
4_handlers.js    → Lógica de cambios (BPM, progresión, reverb, reset)
5_gestures.js    → Sistema de detección y procesamiento de gestos
6_visual.js      → Renderizado (ondas, manos, controles, UI)
7_main.js        → Setup, draw, loop principal
```

**¿Por qué modularizar?**

1. **Mantenibilidad**: Más fácil encontrar y editar funciones específicas
2. **Colaboración**: Diferentes módulos pueden desarrollarse en paralelo
3. **Escalabilidad**: Agregar nuevos gestos o capas es más simple
4. **Debugging**: Aislar problemas es más directo
5. **Buenas prácticas**: Separación de responsabilidades

**Inspiración**: Proyecto `Sequenciador_Tonejs_y_P5js/` demostró beneficios de estructura clara

</details>

---

<details>
<summary><strong>Sistema Musical: Tone.js y Progresiones Armónicas</strong></summary>

### Integración de Tone.js

**Tone.js** es una biblioteca de síntesis de audio para navegadores web que permitió crear un sistema musical completo en tiempo real.

**3 Sintetizadores especializados:**

```javascript
// 2_audio.js

// 1. Arpegio - Melódico y brillante
const arpegioSynth = new Tone.PolySynth(Tone.Synth, {
  oscillator: { type: "triangle" },
  envelope: { attack: 0.005, decay: 0.3, sustain: 0.1, release: 1.2 }
});

// 2. Acordes - Base armónica
const acordesSynth = new Tone.PolySynth(Tone.Synth, {
  oscillator: { type: "sine" },
  envelope: { attack: 0.05, decay: 0.3, sustain: 0.4, release: 1 }
});

// 3. Bajo - Fundamento grave
const bajoSynth = new Tone.MonoSynth({
  oscillator: { type: "sine" },
  envelope: { attack: 0.05, decay: 0.3, sustain: 0.4, release: 1 },
  filter: { Q: 1, type: "lowpass", frequency: 300 }
});
```

### 6 Progresiones Armónicas

Una de las características más ricas del proyecto es el **sistema de progresiones armónicas intercambiables**:

| # | Nombre | Acordes | Carácter |
|---|--------|---------|----------|
| 0 | Actual (Em-C-D) | Em → C → D → Em | Emotivo, menor |
| 1 | Pop Clásica | I → V → vi → IV | Alegre, optimista |
| 2 | Blues | I → I → IV → IV → I → I → V → IV | Bluesy, 8 compases |
| 3 | Jazz ii-V-I | ii → V → I → I | Sofisticado |
| 4 | Rock Potente | I → bVII → IV → IV | Potente, rock |
| 5 | Emotiva | vi → IV → I → V | Melancólica |

**Implementación** (`2_audio.js`):
```javascript
const progressions = [
  {
    name: "Actual (Em-C-D)",
    chords: ["Em", "C", "D", "Em"],
    pattern: ["0:0", "0:2", "0:4", "0:6"]  // Notación: medida:tiempo
  },
  // ... más progresiones
];
```

**Control gestual:**
- Click en cuadrado "PROG" cambia entre progresiones
- Cada cambio regenera patrones de arpegio, acordes y bajo
- **Visual**: Nombre de progresión se muestra en UI

### Sistema de Timing Musical

**Loop de 2 compases** (8 beats) con subdivisiones por capa:

```javascript
// Generación de patrones rítmicos

// Arpegio: notas 8n (corcheas) - las más rápidas
[0, 0.5, 1, 1.5].forEach((offset, j) => {
  pattern.push([`${measure}:${beat}`, chord[j % 3].replace("3", "4")]);
});

// Acordes: notas 2n (blancas) - duración media
pattern.push([time, chord]);

// Bajo: notas 4n (negras) - las más largas
pattern.push([time, chord[0].replace("3", "2")]);
```

**Relación musical:**
- **Arpegio**: 8 notas por acorde = melodía fluida
- **Acordes**: 4 acordes por loop = base armónica
- **Bajo**: 4 notas graves por loop = fundamento rítmico

**Esto crea polifonía rica** con diferentes ritmos superpuestos

### Efecto de Reverb Gestual

**Reverberación controlada por gesto** añade profundidad espacial:

```javascript
// Efecto Reverb conectado a todos los synths
const reverb = new Tone.Reverb({ decay: 2, wet: 0 }).toDestination();

arpegioSynth.connect(reverb);
acordesSynth.connect(reverb);
bajoSynth.connect(reverb);
```

**Control gestual:**
- Índice + medio en cuadrado "Reverb" + pinza de otra mano
- Mapeo: 20-150px → 0-60% de reverb
- **Efecto**: Sonido más "espacioso" y etéreo a mayor reverberación

</details>

---

<details>
<summary><strong>Interfaz de Usuario y Controles Interactivos</strong></summary>

### Layout de Controles

La interfaz final tiene **3 zonas principales**:

#### Zona Superior: 4 Controles + Reset
```
[🔄 RESET]    [BPM: 130] [PROG: 0] [REVERB] [✨ SURPRISE]
```

1. **BPM** (cuadrado azul): Cambia tempo (90 / 130 / 180)
2. **PROG** (cuadrado verde): Cambia progresión armónica (0-5)
3. **REVERB** (cuadrado naranja): Control gestual de efecto
4. **SURPRISE** (estrella): Aleatoriza todo (BPM + progresión + reverb)

**Implementación** (`1_config.js`):
```javascript
const controls = [
  {
    type: "square",
    x: 100, y: 120, size: 30,
    control: "bpm",
    values: [90, 130, 180],
    currentIndex: 1,  // 130 BPM inicial
    label: "BPM",
    color: [100, 200, 255]
  },
  // ... más controles
];
```

#### Zona Central: 3 Círculos de Capas Musicales
```
     [🎵 Arpegio]    [🎹 Acordes]    [🎸 Bajo]
         ○                ○               ○
       (azul)          (verde)        (naranja)
```

**Posiciones** (`1_config.js`):
```javascript
const circles = [
  { x: 160, y: 200, radius: 40, layer: "arpegio" },
  { x: 320, y: 200, radius: 40, layer: "acordes" },
  { x: 480, y: 200, radius: 40, layer: "bajo" }
];
```

#### Zona Inferior: Feedback Visual
- **Video de cámara** (esquina inferior derecha, pequeño)
- **Visualización de manos** (keypoints y conexiones)
- **Ondas expandentes** sincronizadas con audio

### Feedback Visual de Estados

**Estados de círculos** (`6_visual.js`):

1. **Inactivo (OFF)**: Círculo gris con borde
2. **Activo (ON)**: Círculo con color de capa vibrante
3. **Click en progreso**: Barra de progreso circular (0-360°)
4. **Editando volumen**: Indicador de nivel alrededor del círculo

```javascript
// Dibuja barra de progreso durante click
if (circle.indexInside && circle.clickTimer > 0) {
  const progress = circle.clickTimer / CLICK_DURATION;
  const angle = progress * TWO_PI;
  
  stroke(255, 255, 0, 200);
  strokeWeight(4);
  noFill();
  arc(circle.x, circle.y, circle.radius * 2 + 10, 
      circle.radius * 2 + 10, -HALF_PI, -HALF_PI + angle);
}
```

**Indicadores de volumen/efectos:**
- Arco alrededor del control mostrando nivel actual (0-100%)
- Color más intenso = mayor nivel
- Texto numérico con porcentaje

### Control de Reset

**Botón especial** en esquina superior izquierda:

```javascript
const resetButton = {
  x: 40,
  y: 40,
  radius: 25,
  icon: "🔄",
  clickTimer: 0,
  hasClicked: false,
  indexInside: false
};
```

**Función**: Resetea **todo** al estado inicial
- BPM → 130
- Progresión → 0 (Em-C-D)
- Reverb → 0%
- Capas → todas OFF
- Volúmenes → 60% cada una

**Implementación** (`4_handlers.js`):
```javascript
function resetAllToInitial() {
  Tone.Transport.bpm.value = INITIAL_VALUES.bpm;
  currentBPMIndex = INITIAL_VALUES.bpmIndex;
  currentProgression = INITIAL_VALUES.progression;
  
  // Apagar todas las capas
  Object.keys(layers).forEach(layerKey => {
    if (layers[layerKey].active) {
      toggleLayer(layerKey);
    }
    layers[layerKey].volume = INITIAL_VALUES.layerVolumes[layerKey];
  });
  
  reverb.wet.value = 0;
  regeneratePatterns();
}
```

</details>

---

<details>
<summary><strong>Reflexión: Conectando Concepto Original con Implementación Final</strong></summary>

### ¿Se Perdió el Concepto Original?

**Respuesta: No. Se EXPANDIÓ.**

#### Elementos que SE MANTUVIERON:

1. **✅ Expresión libre a través del movimiento**
   - Original: Mover manos libremente para crear partículas
   - Final: Mover manos para activar y modular capas musicales

2. **✅ Manos como instrumento expresivo**
   - Original: 10 dedos emiten partículas
   - Final: Gestos complejos de manos controlan música

3. **✅ Feedback visual inmediato**
   - Original: Partículas aparecen instantáneamente
   - Final: Ondas visuales + indicadores de estado

4. **✅ Sin instrucciones - exploración intuitiva**
   - Original: Usuario descubre por experimentación
   - Final: Gestos autodescubribles por exploración

5. **✅ Experiencia efímera**
   - Original: Partículas se desvanecen en 3-4 seg
   - Final: Ondas se desvanecen; composición musical es única e irrepetible

6. **✅ Dualidad de colores**
   - Original: Mano izquierda (azul/verde) vs derecha (amarillo/naranja)
   - Final: Tres capas con colores diferenciados (azul/verde/naranja)

#### Elementos que SE TRANSFORMARON:

1. **🔄 De visual puro a audiovisual híbrido**
   - **Ganancia**: Dimensión sensorial adicional (sonido)
   - **Razón**: Mayor profundidad expresiva

2. **🔄 De movimiento continuo a gestos discretos**
   - **Ganancia**: Control más preciso y funciones más ricas
   - **Razón**: Complejidad musical requiere acciones específicas

3. **🔄 De 10 puntos de emisión a 3 capas de control**
   - **Ganancia**: Más comprensible, polifonía manejable
   - **Razón**: Balance entre complejidad y usabilidad

4. **🔄 De partículas caóticas a ondas sincronizadas**
   - **Ganancia**: Limpieza visual, sincronización audio-visual
   - **Razón**: Performance y claridad estética

### Aprendizajes del Proceso

**Lección 1: La flexibilidad es creativa**
> Estar abierto a cambiar el medio (de solo visual a audiovisual) permitió una experiencia más rica sin perder la esencia conceptual.

**Lección 2: Las asesorías son catalizadores**
> Las conversaciones con el profesor generaron preguntas que llevaron a soluciones innovadoras ("¿Y si también hubiera sonido?")

**Lección 3: Investigar abre puertas**
> Descubrir Tone.js expandió el proyecto más allá de lo inicialmente imaginado. La curiosidad técnica alimenta la creatividad.

**Lección 4: El concepto es flexible, la esencia no**
> Cambié el **cómo** (partículas → música), pero no el **qué** (expresión libre a través del movimiento) ni el **por qué** (evocar libertad y fluidez).

**Lección 5: Referentes propios importan**
> Tener el `Sequenciador_Tonejs_y_P5js/` en mi repositorio fue clave - no partí de cero en lo musical, pude enfocarme en la gestualidad.

### El Proyecto Final es Mejor Que el Original

**¿Por qué?**

1. **Multisensorial**: Involucra vista + oído → experiencia más inmersiva
2. **Mayor agencia**: El usuario "compone" música, no solo ve - se siente más creador
3. **Más capas de interacción**: Activar, volumen, efectos, BPM, progresión - rica complejidad
4. **Replayabilidad**: 6 progresiones × infinitas combinaciones de capas = experiencia siempre fresca
5. **Accesibilidad musical**: No necesitas saber música para crear algo bello
6. **Mantiene la poética**: La metáfora de "fluir" se mantiene - ahora fluyes con sonido y luz

### Nombre Final: "Polifonía Gestual"

**Polifonía**: Múltiples voces musicales independientes sonando simultáneamente

**Gestual**: Controlado por gestos de manos

> "Una experiencia donde tus manos dirigen una orquesta invisible, tejiendo capas musicales que fluyen en el espacio digital, dejando ondas visuales como memoria efímera de tu composición."

**Esta frase captura:**
- ✅ El control gestual (manos)
- ✅ La polifonía (capas musicales)
- ✅ La fluidez (fluyen)
- ✅ Lo efímero (memoria efímera)
- ✅ La visualidad (ondas visuales)
- ✅ La agencia creativa (tu composición)

</details>

---

<details>
<summary><strong>Aprobación y Estado del Proyecto</strong></summary>

**Fecha de finalización de diseño:** 29 de Octubre, 2025

**Fecha de inicio de implementación:** 5 de Noviembre, 2025

**Fecha de finalización de implementación:** 12 de Noviembre, 2025

**¿El diseño evolucionó durante la implementación?** ✅ Sí

**Evolución principal:**
> De sistema visual puro de partículas ("Estelas Remanentes") a experiencia híbrida audiovisual ("Polifonía Gestual"), manteniendo la esencia conceptual de expresión libre a través del movimiento.

**Estado actual:** ✅ **COMPLETADO**

**Archivos del proyecto:**
```
Ejercicio Final Secuenciador Gestual/
├── 1_config.js       (162 líneas)
├── 2_audio.js        (282 líneas)
├── 3_geometry.js     (120 líneas)
├── 4_handlers.js     (180 líneas)
├── 5_gestures.js     (265 líneas)
├── 6_visual.js       (340 líneas)
├── 7_main.js         (85 líneas)
├── index.html        (HTML base)
└── sketch.js         (backup, no usar)

Total: ~1,434 líneas de código JavaScript
```

**Funcionalidades implementadas:**
- ✅ Detección de manos con ML5.js HandPose
- ✅ 3 gestos complejos (click, volumen, efectos)
- ✅ Sistema musical con Tone.js (3 sintetizadores)
- ✅ 6 progresiones armónicas intercambiables
- ✅ Control de BPM (90/130/180)
- ✅ Efecto de reverb gestual
- ✅ Ondas visuales sincronizadas con audio
- ✅ Sistema de reset completo
- ✅ Modo "Surprise" aleatorio
- ✅ Arquitectura modular (7 archivos)

**Desafíos superados:**
1. ✅ Sincronización audio-visual perfecta
2. ✅ Detección de gestos con dos manos simultáneas
3. ✅ Performance con HandPose + Tone.js + visualización
4. ✅ Sistema de estados complejos por círculo/control
5. ✅ Modularización sin romper flujo de datos

</details>

---

<details>
<summary><strong>Referencias Bibliográficas y Técnicas</strong></summary>

### Referencias Artísticas

1. **SUPERRADIANCE - Memo Akten y Katie Payton Hofstadter**
   - Sitio oficial: https://superradiance.art/
   - Making of: https://youtu.be/B_igdUDzcs4
   - Inspiración principal del proyecto

2. **Treachery of Sanctuary - Chris Milk**
   - Sitio: https://chrismilk.com/treachery-of-sanctuary/
   - Referente de transformación de cuerpo en partículas

3. **Connected Worlds - Design I/O**
   - Sitio: https://www.design-io.com/projects/connectedworlds
   - Referente de interacción gestual fluida

4. **Body Paint - Memo Akten**
   - Sitio: http://www.memo.tv/works/body-paint/
   - Concepto temprano de pintar con el cuerpo

5. **Kinæsthetic Sensing - Lab212**
   - Sitio: https://www.lab212.org/projects/sensing
   - Referente de estelas luminosas

### Referencias Técnicas

6. **ML5.js - Machine Learning for the Web**
   - Sitio: https://ml5js.org/
   - Documentación HandPose: https://docs.ml5js.org/#/reference/handpose
   - Biblioteca principal para detección de manos

7. **p5.js - JavaScript Creative Coding**
   - Sitio: https://p5js.org/
   - Referencia: https://p5js.org/reference/
   - Plataforma de desarrollo visual

8. **Tone.js - Web Audio Framework**
   - Sitio: https://tonejs.github.io/
   - Documentación: https://tonejs.github.io/docs/
   - Sistema de síntesis de audio

9. **The Coding Train - HandPose Tutorial (Daniel Shiffman)**
   - Tutorial: https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/hand-pose
   - Código: https://editor.p5js.org/codingtrain/sketches/t7l5pYDDI
   - Base técnica para implementación HandPose

10. **Sequenciador_Tonejs_y_P5js (Repositorio propio)**
    - Ubicación: `Sequenciador_Tonejs_y_P5js/` en este repositorio
    - Código base reutilizado para sistema musical

### Recursos Educativos

11. **Full-body Pose Estimation con ML5.js (Guía del curso)**
    - Ubicación: `Guia educativa/Full-body Pose Estimation con ML5 js.md`
    - Material del curso que proporcionó fundamentos

12. **Ejercicios previos del curso**
    - `Ejercicio 0 BodyPose Guide/` - Introducción a pose detection
    - `Ejercicio 1 bases de bodypose keypoints/` - Keypoints y tracking
    - `Ejercicio 1 BlazePose/` - Detección de cuerpo completo
    - `Ejercicio 2 Body Segmentation + Pose/` - Segmentación
    - `Ejercicio 2 clasificador de poses/` - Clasificación de gestos
    - `Ejercicio 3 Detector de gesto pinza/` - Detección de pinza (concepto reutilizado)

### Conceptos Teóricos

13. **Interaction Design Foundation - Gestural Interfaces**
    - Principios de diseño de interfaces gestuales
    - Aplicados en decisiones de UX del proyecto

14. **Synesthesia en Arte Digital**
    - Concepto de experiencia multisensorial (audio + visual)
    - Aplicado en la transformación del proyecto

15. **Event-Driven Architecture**
    - Patrón de arquitectura usado para sincronización
    - Implementado en callbacks de Tone.js y ML5.js

</details>

---

<details>
<summary><strong>Resumen Ejecutivo del Proyecto</strong></summary>

### "Polifonía Gestual" - Experiencia Audiovisual Interactiva

**Autor:** [Tu Nombre]

**Fecha:** Octubre - Noviembre 2025

**Tecnologías:** ML5.js HandPose, p5.js, Tone.js, JavaScript

---

#### Concepto

"Polifonía Gestual" es una experiencia híbrida audiovisual donde el usuario controla un secuenciador musical mediante gestos complejos de manos, mientras ondas visuales sincronizadas proporcionan feedback inmediato de la composición efímera que está creando.

#### Evolución del Diseño

El proyecto comenzó como "Estelas Remanentes", un sistema visual de partículas inspirado en SUPERRADIANCE, donde las manos pintarían con luz líquida. Durante la Semana 2, tras asesorías y descubrimiento de Tone.js, el proyecto evolucionó hacia una experiencia audiovisual más rica, manteniendo la esencia conceptual de **expresión libre a través del movimiento**.

#### Sistema de Interacción

**3 Gestos Principales:**

1. **Click Virtual (1 seg)**: Mantener índice en círculo de capa → Toggle ON/OFF
2. **Control de Volumen**: Índice + medio juntos en círculo + pinza de otra mano → Ajuste 0-100%
3. **Control de Efectos**: Índice + medio en control Reverb + pinza de otra mano → Ajuste 0-60%

**Controles Adicionales:**
- BPM (90/130/180 BPM)
- Progresión armónica (6 opciones)
- Reverb gestual
- Surprise (aleatorización)
- Reset completo

#### Sistema Musical

- **3 capas polifónicas**: Arpegio (melódico), Acordes (armónico), Bajo (rítmico)
- **6 progresiones armónicas**: Em-C-D, Pop, Blues, Jazz, Rock, Emotiva
- **3 sintetizadores especializados** con Tone.js
- **Loop de 2 compases** con subdivisiones por capa
- **Reverb compartido** controlable gestualmente

#### Sistema Visual

- **Ondas expandentes** sincronizadas con cada nota tocada
- **Diferenciación por capa**: Radio máximo y duración únicos
- **Colores identificadores**: Azul (arpegio), Verde (acordes), Naranja (bajo)
- **Feedback de estados**: Barras de progreso, indicadores de volumen, keypoints de manos

#### Arquitectura Técnica

**7 módulos especializados:**
1. `1_config.js` - Configuración y constantes
2. `2_audio.js` - Sistema musical Tone.js
3. `3_geometry.js` - Detección de colisiones
4. `4_handlers.js` - Lógica de eventos
5. `5_gestures.js` - Detección de gestos
6. `6_visual.js` - Renderizado
7. `7_main.js` - Loop principal

**Tecnologías integradas:**
- **ML5.js HandPose**: Detección de 21 keypoints por mano
- **Tone.js**: Síntesis de audio, secuenciación, efectos
- **p5.js**: Canvas, visualización, loop de animación

#### Contribución Original

1. **Sistema de gestos complejos con dos manos** para control musical fino
2. **Sincronización perfecta audio-visual** mediante arquitectura event-driven
3. **6 progresiones armónicas intercambiables** para variedad musical
4. **Accesibilidad musical**: Crear composiciones sin conocimiento musical previo
5. **Metáfora de "orquesta gestual"**: Dirección musical mediante movimiento corporal

#### Aprendizajes Clave

- **Flexibilidad creativa**: Pivotar el concepto durante desarrollo puede enriquecerlo
- **Integración multisensorial**: Audio + visual > cada uno por separado
- **Reutilización de código propio**: Ejercicios previos como base acelera desarrollo
- **Modularización**: Arquitectura clara facilita debugging y escalabilidad
- **Sincronización**: Event-driven programming es natural para multimedia interactivo

#### Resultado

Una experiencia interactiva donde **expresión corporal libre** se traduce en **composición musical polifónica** con **feedback visual sincronizado**, permitiendo a usuarios sin formación musical crear obras sonoras efímeras mediante gestos intuitivos de manos.

> "Tus manos dirigen una orquesta invisible, tejiendo capas musicales que fluyen en el espacio digital."

---

**Código fuente:** `Ejercicio Final Secuenciador Gestual/` (7 módulos, 1,434 líneas)

**Demostración:** [Enlace a video demo si existe]

**Repositorio:** Vision Artificial / Full body pose estimation con m5js

</details>

---

**Fin de la Bitácora de Diseño - Semana 1 y Evolución Semana 2**

**Proyecto completado: "Polifonía Gestual"**

**Fecha de documentación final:** 12 de Noviembre, 2025

---
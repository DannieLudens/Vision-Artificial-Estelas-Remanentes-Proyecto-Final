# Polifonía Gestual
## Secuenciador Musical Gestual Interactivo

![Status](https://img.shields.io/badge/status-completed-success)
![ML5.js](https://img.shields.io/badge/ML5.js-HandPose-blue)
![Tone.js](https://img.shields.io/badge/Tone.js-Audio-purple)
![p5.js](https://img.shields.io/badge/p5.js-Visual-red)

---

<img width="600" src="https://github.com/user-attachments/assets/8faab80b-39b3-4798-a08f-8b85047c202f" >


Presentación [Click aquí](https://gamma.app/docs/Polifonia-Gestual-xp2kgms7c9c46hy)

---

## 🎯 Descripción

**Polifonía Gestual** es una experiencia audiovisual interactiva que permite controlar un secuenciador musical mediante gestos complejos de manos. Los usuarios pueden activar capas musicales, ajustar volumen y efectos usando movimientos naturales, mientras ondas visuales sincronizadas proporcionan feedback inmediato.

> **"Tus manos dirigen una orquesta invisible, tejiendo capas musicales que fluyen en el espacio digital."**

---

## ✨ Características Principales

### 🎵 Sistema Musical
- **3 capas polifónicas**: Arpegio, Acordes, Bajo
- **6 progresiones armónicas**: Em-C-D, Pop, Blues, Jazz, Rock, Emotiva
- **3 sintetizadores especializados** con Tone.js
- **Control de tempo**: 90, 130 o 180 BPM
- **Efecto de reverb gestual** (0-60%)

### ✋ Gestos Interactivos
1. **Click Virtual** (1 segundo): Toggle ON/OFF de capas
2. **Control de Volumen**: Pinza con segunda mano (0-100%)
3. **Control de Reverb**: Pinza con segunda mano (0-60%)

### 🌊 Feedback Visual
- **Ondas expandentes** sincronizadas con cada nota
- **Diferenciación por capa**: Colores y velocidades únicas
- **Visualización de manos**: Keypoints y conexiones
- **Indicadores de estado**: Barras de progreso, niveles de volumen

### 🎮 Controles Adicionales
- **BPM**: Cambiar tempo musical
- **PROG**: Cambiar progresión armónica
- **REVERB**: Control de efecto espacial
- **SURPRISE**: Aleatorización completa
- **RESET**: Restaurar valores iniciales

---

## 🏗️ Arquitectura

El proyecto está modularizado en **7 archivos JavaScript**:

```
📦 Ejercicio Final Secuenciador Gestual/
│
├── 📄 index.html           # HTML base
│
├── 🔧 1_config.js          # Configuración y constantes (162 líneas)
│   ├── Constantes de detección gestual
│   ├── Valores iniciales para reset
│   ├── Sistema de capas musicales
│   ├── Círculos interactivos (3)
│   └── Controles adicionales (4)
│
├── 🎵 2_audio.js           # Sistema de audio Tone.js (282 líneas)
│   ├── 3 sintetizadores especializados
│   ├── 6 progresiones armónicas
│   ├── Generación de patrones rítmicos
│   ├── Toggle de capas musicales
│   └── Efecto de reverb
│
├── 📐 3_geometry.js        # Detección de colisiones (120 líneas)
│   ├── isPointInCircle()
│   ├── isPointInSquare()
│   ├── isPointInTriangle()
│   ├── isPointInStar()
│   └── calculateDistance()
│
├── 🎛️ 4_handlers.js       # Lógica de eventos (180 líneas)
│   ├── changeBPM()
│   ├── changeProgression()
│   ├── updateReverbLevel()
│   ├── triggerSurprise()
│   └── resetAllToInitial()
│
├── ✋ 5_gestures.js        # Sistema de gestos (265 líneas)
│   ├── detectGestures()
│   ├── processCircleGestures()
│   ├── processControlGestures()
│   ├── processResetButton()
│   └── updateLayerVolume()
│
├── 🖼️ 6_visual.js         # Renderizado (340 líneas)
│   ├── drawWaves()
│   ├── drawCircles()
│   ├── drawControls()
│   ├── drawHands()
│   └── drawDebugInfo()
│
└── 🎬 7_main.js            # Loop principal (85 líneas)
    ├── preload()
    ├── setup()
    ├── draw()
    └── gotHands()
```

**Total: ~1,434 líneas de código JavaScript**

---

## 🚀 Cómo Usar

### Requisitos
- Navegador web moderno (Chrome, Firefox, Edge)
- Webcam funcional
- Buena iluminación

### Instalación
1. Clonar o descargar el repositorio
2. Abrir `index.html` en un navegador web
3. Permitir acceso a la cámara cuando se solicite
4. ¡Empezar a gesticular!

### Gestos Básicos

#### 1️⃣ Activar/Desactivar Capa
- Coloca tu **dedo índice** dentro de un círculo (Arpegio, Acordes o Bajo)
- Mantén por **1 segundo** → Verás una barra de progreso
- La capa se activará y comenzará a sonar

#### 2️⃣ Controlar Volumen
- Con una mano: **Índice + medio juntos** dentro de un círculo activo
- Con la otra mano: Haz **pinza** (pulgar + índice juntos)
- **Separa o junta** la pinza para ajustar volumen (20-150px)

#### 3️⃣ Controlar Reverb
- Con una mano: **Índice + medio juntos** en el cuadrado "Reverb"
- Con la otra mano: Haz **pinza**
- **Separa o junta** para ajustar efecto (0-60%)

#### 4️⃣ Cambiar BPM
- **Índice** en cuadrado "BPM" por 1 segundo
- Cambia entre: 90 → 130 → 180 BPM

#### 5️⃣ Cambiar Progresión
- **Índice** en cuadrado "PROG" por 1 segundo
- Cicla entre 6 progresiones armónicas

#### 6️⃣ Sorpresa Aleatoria
- **Índice** en estrella "✨" por 1 segundo
- Aleatoriza: BPM + Progresión + Reverb

#### 7️⃣ Reset Completo
- **Índice** en círculo "🔄" (esquina superior izquierda) por 1 segundo
- Restaura todo al estado inicial

---

## 🎨 Capas Musicales

### 🎵 Arpegio (Azul)
- **Función**: Línea melódica
- **Notas**: Corcheas (8n) - las más rápidas
- **Sintetizador**: Onda triangular
- **Ondas visuales**: Radio 80px, 1 segundo

### 🎹 Acordes (Verde)
- **Función**: Base armónica
- **Notas**: Blancas (2n) - duración media
- **Sintetizador**: Onda sinusoidal
- **Ondas visuales**: Radio 100px, 1.5 segundos

### 🎸 Bajo (Naranja)
- **Función**: Fundamento rítmico
- **Notas**: Negras (4n) - las más graves
- **Sintetizador**: Onda sinusoidal con filtro paso bajo
- **Ondas visuales**: Radio 120px, 2 segundos

---

## 🎼 Progresiones Armónicas

| # | Nombre | Acordes | Carácter |
|---|--------|---------|----------|
| 0 | **Actual (Em-C-D)** | Em → C → D → Em | Emotivo, menor |
| 1 | **Pop Clásica** | I → V → vi → IV | Alegre, optimista |
| 2 | **Blues** | I → I → IV → IV → I → I → V → IV | Bluesy, 8 compases |
| 3 | **Jazz ii-V-I** | ii → V → I → I | Sofisticado |
| 4 | **Rock Potente** | I → bVII → IV → IV | Potente, rock |
| 5 | **Emotiva** | vi → IV → I → V | Melancólica |

---

## 🛠️ Tecnologías

### ML5.js - HandPose
- Detección de manos en tiempo real
- 21 keypoints por mano
- Identificación de handedness (izquierda/derecha)

**Keypoints utilizados:**
```javascript
hand.keypoints[4]   // Pulgar (Thumb tip)
hand.keypoints[8]   // Índice (Index finger tip)
hand.keypoints[12]  // Medio (Middle finger tip)
```

### Tone.js - Web Audio
- Síntesis de audio en tiempo real
- Secuenciación con Tone.Transport
- Efectos de audio (Reverb)

**Sintetizadores:**
```javascript
arpegioSynth  // PolySynth con onda triangular
acordesSynth  // PolySynth con onda sinusoidal
bajoSynth     // MonoSynth con filtro paso bajo
```

### p5.js - Visualización
- Canvas de 640x480
- Captura de video de webcam
- Renderizado de ondas y UI

---

## 📊 Flujo de Datos

```
┌─────────────┐
│   Webcam    │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│  ML5.js         │
│  HandPose       │
│  (21 keypoints) │
└──────┬──────────┘
       │
       ▼
┌──────────────────────┐
│  5_gestures.js       │
│  Detecta gestos      │
│  - Click (1 seg)     │
│  - Volumen (pinza)   │
│  - Efectos (pinza)   │
└──────┬───────────────┘
       │
       ├────────────────────┐
       │                    │
       ▼                    ▼
┌──────────────┐    ┌──────────────┐
│ 2_audio.js   │    │ 6_visual.js  │
│ Tone.js      │◄───┤ p5.js        │
│ Síntesis     │    │ Ondas        │
└──────────────┘    └──────────────┘
       │                    │
       └──────┬─────────────┘
              ▼
       ┌──────────────┐
       │   Usuario    │
       │   Escucha    │
       │   y Ve       │
       └──────────────┘
```

---

## 🎯 Constantes Clave

```javascript
// Gestos
CLICK_DURATION = 1000           // 1 segundo para activar
FINGERS_CLOSE_THRESHOLD = 30    // Índice + medio juntos
VOLUME_DISTANCE_MIN = 20        // Distancia mínima pinza
VOLUME_DISTANCE_MAX = 150       // Distancia máxima pinza

// Ondas visuales
waveConfig = {
  arpegio: { maxRadius: 80,  duration: 1000 },
  acordes: { maxRadius: 100, duration: 1500 },
  bajo:    { maxRadius: 120, duration: 2000 }
}

// Valores iniciales
INITIAL_VALUES = {
  bpm: 130,
  progression: 0,     // Em-C-D
  reverb: 0,          // Sin reverb
  layerVolumes: { arpegio: 60, acordes: 60, bajo: 60 }
}
```

---

## 🎓 Aprendizajes Técnicos

### 1. Sincronización Audio-Visual
**Problema**: ¿Cómo sincronizar ondas visuales con notas musicales?

**Solución**: Spawn de ondas desde callback de Tone.js
```javascript
arpegioPart = new Tone.Part((time, note) => {
  arpegioSynth.triggerAttackRelease(note, "8n", time);
  spawnWave("arpegio");  // ← Spawn sincronizado
}, arpegioPattern);
```

### 2. Gestos con Dos Manos
**Problema**: Detectar gestos que requieren ambas manos simultáneamente

**Solución**: Estado explícito por control + verificación de `handedness`
```javascript
if (hands.length === 2) {
  const otherHand = hands.find(h => h.handedness !== hand.handedness);
  // Calcular pinza de la otra mano
  circle.otherHandPinch = { distance: pinchDistance };
}
```

### 3. Performance con Múltiples Ondas
**Problema**: Acumulación de ondas degrada FPS

**Solución**: Filtrado y eliminación de ondas "muertas"
```javascript
waves = waves.filter(wave => {
  const elapsed = millis() - wave.timestamp;
  return elapsed < config.duration;  // Solo mantener ondas activas
});
```

### 4. Arquitectura Modular
**Problema**: Sketch monolítico difícil de mantener

**Solución**: Separación de responsabilidades en 7 módulos
- Config → Audio → Geometry → Handlers → Gestures → Visual → Main

---

## 🐛 Solución de Problemas

### La cámara no se activa
- ✅ Verificar permisos del navegador
- ✅ Usar HTTPS o localhost
- ✅ Revisar configuración de privacidad

### Los gestos no se detectan
- ✅ Mejorar iluminación de la habitación
- ✅ Acercar/alejar manos de la cámara
- ✅ Verificar que las manos sean visibles completamente

### El audio no suena
- ✅ Verificar que el volumen del sistema esté alto
- ✅ Interactuar con la página (Tone.js requiere gesto de usuario)
- ✅ Revisar consola del navegador por errores

### Bajo rendimiento (< 30 FPS)
- ✅ Cerrar otras pestañas del navegador
- ✅ Reducir cantidad de ondas activas
- ✅ Usar hardware más potente

---

## 📝 Evolución del Proyecto

Este proyecto evolucionó significativamente durante su desarrollo:

### Concepto Inicial: "Estelas Remanentes"
- Sistema de **partículas visuales** emanando de los dedos
- **10 puntos de emisión** (5 dedos por mano)
- **Visual puro** sin componente de audio
- Inspirado en SUPERRADIANCE de Memo Akten

### Transformación: "Polifonía Gestual"
- Sistema **audiovisual híbrido**
- **3 capas musicales** con ondas sincronizadas
- **Gestos complejos** con dos manos
- Integración de **Tone.js** para síntesis musical

**La esencia se mantuvo:**
> Expresión libre a través del movimiento corporal, feedback inmediato, experiencia efímera sin errores.

---

## 📚 Recursos y Referencias

### Artísticas
- **SUPERRADIANCE** - Memo Akten y Katie Payton Hofstadter
- **Treachery of Sanctuary** - Chris Milk
- **Connected Worlds** - Design I/O

### Técnicas
- [ML5.js Documentation](https://docs.ml5js.org/)
- [Tone.js Documentation](https://tonejs.github.io/docs/)
- [p5.js Reference](https://p5js.org/reference/)
- [The Coding Train - HandPose Tutorial](https://thecodingtrain.com/)

### Código Base
- Ejercicios previos del curso de Visión Artificial
- `Sequenciador_Tonejs_y_P5js/` (repositorio propio)

---

## 👤 Autor

Proyecto desarrollado como parte del curso de **Visión Artificial con ML5.js**

**Período:** Septiembre - Octubre - Noviembre 2025

---

## 📜 Licencia

Este proyecto es de uso educativo.

---

## 🙏 Agradecimientos

- Antonio Escamilla Profesor del curso por las asesorías y guía
- Juan Fernando Franco procesor de Simulación de sistemas fisicos interactivos y cursos afines.
- Memo Akten por SUPERRADIANCE como inspiración
- VCVRACK
- Comunidades de ML5.js, Tone.js y p5.js
- Daniel Shiffman (The Coding Train) por tutoriales

---

Ver documentación completa en:
`Bitacora_Semana1_Diseño.md`

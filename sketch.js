// ==========================================
// SECUENCIADOR MUSICAL CON CONTROL GESTUAL
// Control mediante detección de manos (ml5.handPose)
// ==========================================

// ==========================================
// DETECCIÓN DE MANOS
// ==========================================
let handPose;
let video;
let hands = [];

// ==========================================
// SINTETIZADORES (Base: Secuenciador Simple)
// ==========================================
const arpegioSynth = new Tone.PolySynth(Tone.Synth, {
  oscillator: { type: "triangle" },
  envelope: { attack: 0.005, decay: 0.3, sustain: 0.1, release: 1.2 }
}).toDestination();

const acordesSynth = new Tone.PolySynth(Tone.Synth, {
  oscillator: { type: "sine" },
  envelope: { attack: 0.05, decay: 0.3, sustain: 0.4, release: 1 }
}).toDestination();

const bajoSynth = new Tone.MonoSynth({
  oscillator: { type: "sine" },
  envelope: { attack: 0.05, decay: 0.3, sustain: 0.4, release: 1 },
  filter: { Q: 1, type: "lowpass", frequency: 300 }
}).toDestination();

// Volúmenes iniciales (reducidos para evitar distorsión)
arpegioSynth.volume.value = -18;
acordesSynth.volume.value = -16;
bajoSynth.volume.value = -20;

// Efecto de audio: Reverb
const reverb = new Tone.Reverb({ decay: 2, wet: 0 }).toDestination();

// Conectar synths a reverb
arpegioSynth.connect(reverb);
acordesSynth.connect(reverb);
bajoSynth.connect(reverb);

// ==========================================
// CONFIGURACIÓN MUSICAL
// ==========================================
Tone.Transport.bpm.value = 130;

// Progresiones armónicas
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
  {
    name: "Blues",
    chords: ["I", "I", "IV", "IV", "I", "I", "V", "IV"],
    pattern: ["0:0", "0:1", "0:2", "0:3", "0:4", "0:5", "0:6", "0:7"]
  },
  {
    name: "Jazz ii-V-I",
    chords: ["ii", "V", "I", "I"],
    pattern: ["0:0", "0:2", "0:4", "0:6"]
  },
  {
    name: "Rock Potente",
    chords: ["I", "bVII", "IV", "IV"],
    pattern: ["0:0", "0:2", "0:4", "0:6"]
  },
  {
    name: "Emotiva",
    chords: ["vi", "IV", "I", "V"],
    pattern: ["0:0", "0:2", "0:4", "0:6"]
  }
];

let currentProgression = 0;
const rootNote = "E";
const scaleType = "minor";

// Tabla de notas
const noteTable = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// ==========================================
// SISTEMA DE CAPAS
// ==========================================
const layers = {
  arpegio: {
    active: false, // Empieza DESACTIVADO
    color: [100, 150, 255],
    name: "Arpegio",
    icon: "🎵",
    volume: 60
  },
  acordes: {
    active: false, // Empieza DESACTIVADO
    color: [100, 255, 150],
    name: "Acordes",
    icon: "🎹",
    volume: 60
  },
  bajo: {
    active: false, // Empieza DESACTIVADO
    color: [255, 150, 100],
    name: "Bajo",
    icon: "🎸",
    volume: 60
  }
};

let arpegioPart, acordesPart, bajoPart;
let isTransportStarted = false;

// ==========================================
// CÍRCULOS INTERACTIVOS PARA GESTOS
// ==========================================
const circles = [
  {
    x: 160, y: 200, radius: 40,
    layer: "arpegio",
    clickTimer: 0,
    hasClicked: false,
    isEditingVolume: false,
    editingHand: null
  },
  {
    x: 320, y: 200, radius: 40,
    layer: "acordes",
    clickTimer: 0,
    hasClicked: false,
    isEditingVolume: false,
    editingHand: null
  },
  {
    x: 480, y: 200, radius: 40,
    layer: "bajo",
    clickTimer: 0,
    hasClicked: false,
    isEditingVolume: false,
    editingHand: null
  }
];

// ==========================================
// CONTROLES ADICIONALES (Cuadrados y Triángulos)
// ==========================================
const controls = [
  {
    type: "square",
    x: 100, y: 120, size: 30,
    control: "bpm",
    clickTimer: 0,
    hasClicked: false,
    values: [90, 130, 180],
    currentIndex: 1, // Empieza en 130
    label: "BPM",
    color: [100, 200, 255]
  },
  {
    type: "square",
    x: 200, y: 120, size: 30,
    control: "progression",
    clickTimer: 0,
    hasClicked: false,
    currentIndex: 0, // Empieza en progresión 0
    label: "PROG",
    color: [100, 255, 150]
  },
  {
    type: "square",
    x: 300, y: 120, size: 30,
    control: "reverb",
    clickTimer: 0,
    hasClicked: false,
    isEditingEffect: false,  // Modo edición gestual
    editingHand: null,       // Qué mano está editando
    effectLevel: 0,          // Nivel actual del efecto (0-60)
    otherHandPinch: null,    // Info de pinza de otra mano
    label: "R",
    color: [255, 200, 100]
  },
  {
    type: "star",
    x: 400, y: 120, size: 30,
    control: "surprise",
    clickTimer: 0,
    hasClicked: false,
    label: "⭐",
    color: [200, 100, 255]
  }
];

// Botón de Reset (círculo en esquina superior izquierda)
const resetButton = {
  x: 50, y: 50, radius: 20,
  clickTimer: 0,
  hasClicked: false,
  indexInside: false,
  label: "↻",
  color: [255, 100, 100]
};

// Constantes para detección de gestos
const CLICK_DURATION = 1000; // 1 segundo para activar
const FINGERS_CLOSE_THRESHOLD = 30; // Índice + medio juntos
const VOLUME_DISTANCE_MIN = 20; // Distancia mínima para volumen
const VOLUME_DISTANCE_MAX = 150; // Distancia máxima para volumen

// Valores iniciales para reset
const INITIAL_VALUES = {
  bpm: 130,
  bpmIndex: 1,
  progression: 0,
  reverb: 0,
  layerVolumes: { arpegio: 60, acordes: 60, bajo: 60 }
};

// ==========================================
// FUNCIONES MUSICALES HELPER
// ==========================================
function buildChord(root, quality, octave) {
  const rootIndex = noteTable.indexOf(root);
  const intervals = {
    major: [0, 4, 7],
    minor: [0, 3, 7],
    dim: [0, 3, 6]
  };
  const pattern = intervals[quality] || intervals.major;
  return pattern.map(interval => {
    const noteIndex = (rootIndex + interval) % 12;
    return noteTable[noteIndex] + octave;
  });
}

function romanToChord(roman, rootNote, scaleType) {
  const rootIndex = noteTable.indexOf(rootNote);
  const degreeMap = {
    "I": [0, "major"], "i": [0, "minor"],
    "ii": [2, "minor"], "II": [2, "major"],
    "iii": [4, "minor"], "III": [4, "major"],
    "IV": [5, "major"], "iv": [5, "minor"],
    "V": [7, "major"], "v": [7, "minor"],
    "VI": [9, "major"], "vi": [9, "minor"],
    "VII": [11, "major"], "vii°": [11, "dim"],
    "bVII": [10, "major"]
  };

  if (degreeMap[roman]) {
    const [semitones, quality] = degreeMap[roman];
    const chordRoot = noteTable[(rootIndex + semitones) % 12];
    return buildChord(chordRoot, quality, 3);
  }
  return buildChord(rootNote, "major", 3);
}

function getNamedChord(name) {
  const chords = {
    "Em": ["E3", "G3", "B3"],
    "C": ["C3", "E3", "G3"],
    "D": ["D3", "F#3", "A3"]
  };
  return chords[name] || ["C3", "E3", "G3"];
}

function generateArpeggioPattern() {
  const prog = progressions[currentProgression];
  const pattern = [];

  prog.chords.forEach((chordSymbol, i) => {
    const time = prog.pattern[i];
    const chord = (chordSymbol === "Em" || chordSymbol === "C" || chordSymbol === "D")
      ? getNamedChord(chordSymbol)
      : romanToChord(chordSymbol, rootNote, scaleType);

    // Arpegio de las notas del acorde
    [0, 0.5, 1, 1.5].forEach((offset, j) => {
      const noteTime = time.split(":");
      const measure = parseInt(noteTime[0]);
      const beat = parseFloat(noteTime[1]) + offset;
      pattern.push([`${measure}:${beat}`, chord[j % 3].replace("3", "4")]);
    });
  });

  return pattern;
}

function generateChordPattern() {
  const prog = progressions[currentProgression];
  const pattern = [];

  prog.chords.forEach((chordSymbol, i) => {
    const time = prog.pattern[i];
    const chord = (chordSymbol === "Em" || chordSymbol === "C" || chordSymbol === "D")
      ? getNamedChord(chordSymbol)
      : romanToChord(chordSymbol, rootNote, scaleType);

    pattern.push([time, chord]);
  });

  return pattern;
}

function generateBassPattern() {
  const prog = progressions[currentProgression];
  const pattern = [];

  prog.chords.forEach((chordSymbol, i) => {
    const time = prog.pattern[i];
    const chord = (chordSymbol === "Em" || chordSymbol === "C" || chordSymbol === "D")
      ? getNamedChord(chordSymbol)
      : romanToChord(chordSymbol, rootNote, scaleType);

    const root = chord[0].replace("3", "2");
    const baseTime = time.split(":");
    pattern.push([time, root]);
    pattern.push([`${baseTime[0]}:${parseFloat(baseTime[1]) + 1}`, root]);
  });

  return pattern;
}

// ==========================================
// CREAR CAPAS MUSICALES
// ==========================================
function createMusicLayers() {
  const arpeggioPattern = generateArpeggioPattern();
  const chordPattern = generateChordPattern();
  const bassPattern = generateBassPattern();
  // Capa 1: Arpegio
  arpegioPart = new Tone.Part(function(time, note) {
    if (layers.arpegio.active) {
      arpegioSynth.triggerAttackRelease(note, "8n", time);
    }
  }, arpeggioPattern);
  arpegioPart.loop = true;
  arpegioPart.loopEnd = "2m";

  // Capa 2: Acordes
  acordesPart = new Tone.Part(function(time, chord) {
    if (layers.acordes.active) {
      acordesSynth.triggerAttackRelease(chord, "2n", time);
    }
  }, chordPattern);
  acordesPart.loop = true;
  acordesPart.loopEnd = "2m";

  // Capa 3: Bajo
  bajoPart = new Tone.Part(function(time, note) {
    if (layers.bajo.active) {
      bajoSynth.triggerAttackRelease(note, "4n", time);
    }
  }, bassPattern);
  bajoPart.loop = true;
  bajoPart.loopEnd = "2m";
}

function startAllLayers() {
  const nextBar = Tone.Transport.nextSubdivision("1m");
  arpegioPart.start(nextBar);
  acordesPart.start(nextBar);
  bajoPart.start(nextBar);
}

// ==========================================
// CONTROL DE VOLUMEN
// ==========================================
function updateLayerVolume(layerName, volumePercent) {
  layers[layerName].volume = volumePercent;
  const volumeDb = map(volumePercent, 0, 100, -40, 0);

  if (layerName === "arpegio") arpegioSynth.volume.value = volumeDb;
  else if (layerName === "acordes") acordesSynth.volume.value = volumeDb;
  else if (layerName === "bajo") bajoSynth.volume.value = volumeDb;
}

// ==========================================
// FUNCIONES DE GEOMETRÍA
// ==========================================
function calculateDistance(p1, p2) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function isPointInCircle(px, py, circleObj) {
  // Invertir coordenada X para coincidir con el flip horizontal del video
  const flippedX = width - px;
  const d = dist(flippedX, py, circleObj.x, circleObj.y);
  return d < circleObj.radius;
}

function isPointInSquare(px, py, control) {
  const flippedX = width - px;
  const halfSize = control.size / 2;
  return flippedX > control.x - halfSize &&
         flippedX < control.x + halfSize &&
         py > control.y - halfSize &&
         py < control.y + halfSize;
}

function isPointInTriangle(px, py, control) {
  const flippedX = width - px;
  const cx = control.x;
  const cy = control.y;
  const size = control.size;

  // Triángulo equilátero apuntando hacia arriba
  const top = cy - size/2;
  const bottom = cy + size/2;
  const left = cx - size/2;
  const right = cx + size/2;

  // Verificar si está dentro del bounding box primero
  if (py < top || py > bottom || flippedX < left || flippedX > right) {
    return false;
  }

  // Verificar si está debajo de las líneas del triángulo
  const relY = py - top;
  const relX = flippedX - cx;
  const maxX = (relY / size) * (size / 2);

  return Math.abs(relX) <= maxX;
}

function isPointInStar(px, py, control) {
  const flippedX = width - px;
  const cx = control.x;
  const cy = control.y;
  const size = control.size;

  // Usar un círculo envolvente para detección simplificada
  // Radio aproximado de la estrella
  const radius = size * 0.6;
  const d = dist(flippedX, py, cx, cy);

  return d < radius;
}

// ==========================================
// REGENERAR PATRONES MUSICALES
// ==========================================
function regeneratePatterns() {
  if (!arpegioPart || !acordesPart || !bajoPart) return;

  const arpeggioPattern = generateArpeggioPattern();
  const chordPattern = generateChordPattern();
  const bassPattern = generateBassPattern();

  arpegioPart.clear();
  arpeggioPattern.forEach(event => {
    arpegioPart.add(event[0], event[1]);
  });

  acordesPart.clear();
  chordPattern.forEach(event => {
    acordesPart.add(event[0], event[1]);
  });

  bajoPart.clear();
  bassPattern.forEach(event => {
    bajoPart.add(event[0], event[1]);
  });
}

// ==========================================
// HANDLERS DE CONTROLES
// ==========================================
function handleBPMChange(control) {
  control.currentIndex = (control.currentIndex + 1) % control.values.length;
  const newBPM = control.values[control.currentIndex];
  Tone.Transport.bpm.value = newBPM;
}

function handleProgressionChange(control) {
  control.currentIndex = (control.currentIndex + 1) % progressions.length;
  currentProgression = control.currentIndex;
  regeneratePatterns();
}

function updateReverbLevel(control, level) {
  control.effectLevel = constrain(level, 0, 60);
  reverb.wet.value = control.effectLevel / 100; // Convertir porcentaje a 0.0-0.6
}

function handleSurprise() {
  // Randomizar BPM (entre los 3 valores disponibles)
  const bpmControl = controls.find(c => c.control === "bpm");
  bpmControl.currentIndex = floor(random(0, 3));
  Tone.Transport.bpm.value = bpmControl.values[bpmControl.currentIndex];

  // Randomizar Progresión (entre 0-5)
  const progControl = controls.find(c => c.control === "progression");
  progControl.currentIndex = floor(random(0, progressions.length));
  currentProgression = progControl.currentIndex;

  // Randomizar Reverb (entre 0-60%)
  const reverbControl = controls.find(c => c.control === "reverb");
  const randomReverb = random(0, 60);
  updateReverbLevel(reverbControl, randomReverb);

  // Regenerar patrones musicales con la nueva progresión
  regeneratePatterns();
}

function handleReset() {
  // Resetear BPM
  const bpmControl = controls.find(c => c.control === "bpm");
  bpmControl.currentIndex = INITIAL_VALUES.bpmIndex;
  Tone.Transport.bpm.value = INITIAL_VALUES.bpm;

  // Resetear Progresión
  const progControl = controls.find(c => c.control === "progression");
  progControl.currentIndex = INITIAL_VALUES.progression;
  currentProgression = INITIAL_VALUES.progression;

  // Resetear Reverb
  const reverbControl = controls.find(c => c.control === "reverb");
  updateReverbLevel(reverbControl, INITIAL_VALUES.reverb);

  // Resetear volúmenes de capas (NO resetea su estado ON/OFF)
  updateLayerVolume("arpegio", INITIAL_VALUES.layerVolumes.arpegio);
  updateLayerVolume("acordes", INITIAL_VALUES.layerVolumes.acordes);
  updateLayerVolume("bajo", INITIAL_VALUES.layerVolumes.bajo);

  // Regenerar patrones musicales
  regeneratePatterns();
}

function drawStar(cx, cy, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = -HALF_PI; a < TWO_PI - HALF_PI; a += angle) {
    let sx = cx + cos(a) * radius1;
    let sy = cy + sin(a) * radius1;
    vertex(sx, sy);
    sx = cx + cos(a + halfAngle) * radius2;
    sy = cy + sin(a + halfAngle) * radius2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// ==========================================
// DETECCIÓN DE GESTOS
// ==========================================
function detectGestures() {
  // Resetear estados de círculos si no hay dedos dentro
  circles.forEach(circle => {
    circle.indexInside = false;
    circle.indexMiddleInside = false;
    circle.otherHandPinch = null;
  });

  // Resetear estados de controles
  controls.forEach(control => {
    control.indexInside = false;
    control.indexMiddleInside = false;
    control.otherHandPinch = null;
  });

  // Resetear estado del botón de reset
  resetButton.indexInside = false;

  if (hands.length === 0) return;

  // Analizar cada mano detectada
  for (let hand of hands) {
    if (hand.keypoints.length < 21) continue;

    const indexTip = hand.keypoints[8];   // Punta del índice
    const middleTip = hand.keypoints[12]; // Punta del medio
    const thumbTip = hand.keypoints[4];   // Punta del pulgar

    // Para cada control, verificar si el índice está dentro
    for (let control of controls) {
      let isInside = false;
      if (control.type === "square") {
        isInside = isPointInSquare(indexTip.x, indexTip.y, control);
      } else if (control.type === "triangle") {
        isInside = isPointInTriangle(indexTip.x, indexTip.y, control);
      } else if (control.type === "star") {
        isInside = isPointInStar(indexTip.x, indexTip.y, control);
      }
      if (isInside) {
        control.indexInside = true;

        // Para Reverb, verificar si índice + medio están juntos y ambos dentro
        if (control.control === "reverb") {
          const distIndexMiddle = calculateDistance(indexTip, middleTip);
          if (distIndexMiddle < FINGERS_CLOSE_THRESHOLD &&
              isPointInSquare(middleTip.x, middleTip.y, control)) {
            control.indexMiddleInside = true;
            control.editingHand = hand.handedness;
          }
        }
      }
    }

    // Verificar si el índice está dentro del botón de reset
    if (isPointInCircle(indexTip.x, indexTip.y, resetButton)) {
      resetButton.indexInside = true;
    }

    // Para cada círculo, verificar qué dedos están dentro
    for (let circle of circles) {
      // Verificar si el índice está dentro
      if (isPointInCircle(indexTip.x, indexTip.y, circle)) {
        circle.indexInside = true;

        // Verificar si índice + medio están juntos y ambos dentro
        const distIndexMiddle = calculateDistance(indexTip, middleTip);
        if (distIndexMiddle < FINGERS_CLOSE_THRESHOLD &&
            isPointInCircle(middleTip.x, middleTip.y, circle)) {
          circle.indexMiddleInside = true;
          circle.editingHand = hand.handedness; // Guardar qué mano está editando
        }
      }
    }

    // Si hay otra mano, verificar distancia pulgar-índice para control de volumen o efectos
    if (hands.length === 2) {
      const otherHand = hands.find(h => h.handedness !== hand.handedness);
      if (otherHand && otherHand.keypoints.length >= 21) {
        const otherThumb = otherHand.keypoints[4];
        const otherIndex = otherHand.keypoints[8];
        const pinchDistance = calculateDistance(otherThumb, otherIndex);

        // Guardar info de la otra mano para control de volumen (círculos)
        for (let circle of circles) {
          if (circle.editingHand === hand.handedness) {
            circle.otherHandPinch = {
              distance: pinchDistance,
              thumb: otherThumb,
              index: otherIndex
            };
          }
        }

        // Guardar info de la otra mano para control de efectos (Reverb)
        for (let control of controls) {
          if (control.control === "reverb" && control.editingHand === hand.handedness) {
            control.otherHandPinch = {
              distance: pinchDistance,
              thumb: otherThumb,
              index: otherIndex
            };
          }
        }
      }
    }
  }

  // Procesar lógica de gestos para cada círculo
  circles.forEach(circle => processCircleGestures(circle));

  // Procesar lógica de gestos para cada control
  controls.forEach(control => processControlGestures(control));

  // Procesar lógica de gestos para el botón de reset
  processResetButton();
}

function processControlGestures(control) {
  // Reverb tiene comportamiento especial: control gestual en lugar de toggle
  if (control.control === "reverb") {
    // MODO EDICIÓN DE EFECTO (PRIORIDAD)
    if (control.indexMiddleInside) {
      control.isEditingEffect = true;
      control.hasClicked = true; // Evitar clicks mientras edita

      // Si hay otra mano con pinza, ajustar nivel de efecto
      if (control.otherHandPinch) {
        const effectPercent = map(
          control.otherHandPinch.distance,
          VOLUME_DISTANCE_MIN,
          VOLUME_DISTANCE_MAX,
          0,
          60
        );
        const constrainedEffect = constrain(effectPercent, 0, 60);
        updateReverbLevel(control, constrainedEffect);
      }
    } else {
      // Al sacar los dedos, confirmar nivel y salir del modo edición
      if (control.isEditingEffect) {
        control.isEditingEffect = false;
        control.editingHand = null;
      }

      // Resetear estados si no hay índice dentro
      if (!control.indexInside) {
        control.clickTimer = 0;
        control.hasClicked = false;
      }
    }
  } else {
    // Comportamiento normal para BPM, Progression y Surprise
    if (control.indexInside && !control.hasClicked) {
      // Incrementar timer
      control.clickTimer += deltaTime;

      // Si alcanzó 1 segundo, ejecutar acción
      if (control.clickTimer >= CLICK_DURATION) {
        // Ejecutar handler correspondiente
        if (control.control === "bpm") {
          handleBPMChange(control);
        } else if (control.control === "progression") {
          handleProgressionChange(control);
        } else if (control.control === "surprise") {
          handleSurprise();
        }

        control.hasClicked = true;
        control.clickTimer = 0;
      }
    } else if (!control.indexInside) {
      // Si el índice salió del control, resetear estados
      control.clickTimer = 0;
      control.hasClicked = false;
    }
  }
}

function processResetButton() {
  if (resetButton.indexInside && !resetButton.hasClicked) {
    // Incrementar timer
    resetButton.clickTimer += deltaTime;

    // Si alcanzó 1 segundo, ejecutar reset
    if (resetButton.clickTimer >= CLICK_DURATION) {
      handleReset();
      resetButton.hasClicked = true;
      resetButton.clickTimer = 0;
    }
  } else if (!resetButton.indexInside) {
    // Si el índice salió del botón, resetear estados
    resetButton.clickTimer = 0;
    resetButton.hasClicked = false;
  }
}

function processCircleGestures(circle) {
  const layer = layers[circle.layer];

  // GESTO 2 y 3: Modo edición de volumen (PRIORIDAD)
  if (circle.indexMiddleInside) {
    circle.isEditingVolume = true;
    circle.hasClicked = true; // Evitar clicks mientras edita

    // Si hay otra mano con pinza, ajustar volumen
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
  } else {
    // Al sacar los dedos, confirmar volumen y salir del modo edición
    if (circle.isEditingVolume) {
      circle.isEditingVolume = false;
      circle.editingHand = null;
    }

    // GESTO 1: Click virtual con índice solo
    if (circle.indexInside && !circle.hasClicked) {
      // Incrementar timer
      circle.clickTimer += deltaTime;

      // Si alcanzó 1 segundo, activar toggle
      if (circle.clickTimer >= CLICK_DURATION) {
        layer.active = !layer.active;
        circle.hasClicked = true;
        circle.clickTimer = 0;

        // Iniciar Transport si es la primera capa activada
        if (!isTransportStarted && layer.active) {
          // Iniciar el contexto de audio (requerido por navegadores modernos)
          Tone.start().then(() => {
            startAllLayers();
            Tone.Transport.start();
            isTransportStarted = true;
          });
        }
      }
    } else if (!circle.indexInside) {
      // Si el índice salió del círculo, resetear estados
      circle.clickTimer = 0;
      circle.hasClicked = false;
    }
  }
}

// ==========================================
// SETUP
// ==========================================
function preload() {
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(640, 480);
  textAlign(CENTER, CENTER);

  // Configurar video
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // Iniciar detección de manos
  handPose.detectStart(video, gotHands);

  // Crear las capas musicales (pero no iniciarlas aún)
  createMusicLayers();
}

function gotHands(results) {
  hands = results;
}

// ==========================================
// DRAW
// ==========================================
function draw() {
  background(0);

  // Flip horizontal para efecto espejo
  push();
  translate(width, 0);
  scale(-1, 1);

  // Dibujar video
  image(video, 0, 0, width, height);

  // Dibujar keypoints de manos (opcional, para debug)
  drawHands();

  pop();

  // Detectar gestos
  detectGestures();

  // Dibujar controles (cuadrados, triángulos y estrella)
  drawControls();

  // Dibujar círculos de capas (sin flip, posiciones absolutas)
  drawCircles();

  // Dibujar botón de reset (esquina superior izquierda)
  drawResetButton();

  // Información de estado
  drawUI();
}

// ==========================================
// VISUALIZACIÓN DE MANOS
// ==========================================
function drawHands() {
  for (let hand of hands) {
    if (hand.keypoints.length < 21) continue;

    // Dibujar puntos de la mano
    for (let keypoint of hand.keypoints) {
      fill(0, 255, 0, 150);
      noStroke();
      circle(keypoint.x, keypoint.y, 8);
    }

    // Dibujar líneas de conexión (opcional)
    drawHandConnections(hand.keypoints);
  }
}

function drawHandConnections(keypoints) {
  const fingers = [
    [1, 2, 3, 4],      // Pulgar
    [5, 6, 7, 8],      // Índice
    [9, 10, 11, 12],   // Medio
    [13, 14, 15, 16],  // Anular
    [17, 18, 19, 20]   // Meñique
  ];

  const colors = [
    [255, 100, 100],   // Pulgar - rojo
    [100, 200, 255],   // Índice - azul
    [100, 255, 150],   // Medio - verde
    [255, 200, 100],   // Anular - naranja
    [200, 150, 255]    // Meñique - morado
  ];

  strokeWeight(3);
  fingers.forEach((finger, i) => {
    stroke(colors[i][0], colors[i][1], colors[i][2], 180);
    for (let j = 0; j < finger.length - 1; j++) {
      const a = keypoints[finger[j]];
      const b = keypoints[finger[j + 1]];
      if (a && b) line(a.x, a.y, b.x, b.y);
    }
  });
}

// ==========================================
// VISUALIZACIÓN DE CÍRCULOS (SIN FLIP)
// ==========================================
function drawCircles() {
  for (let circle of circles) {
    const layer = layers[circle.layer];

    // Determinar color del círculo
    let circleColor;
    let borderColor = null;
    let borderWeight = 0;

    if (circle.isEditingVolume) {
      // Modo edición: borde especial
      circleColor = layer.color;
      borderColor = [255, 255, 0]; // Amarillo
      borderWeight = 4;
    } else if (layer.active) {
      // Activado: color de capa
      circleColor = layer.color;
    } else {
      // Desactivado: gris
      circleColor = [80, 80, 80];
    }

    // Aplicar feedback visual si índice está dentro
    let alpha = 200;
    if (circle.indexInside && !circle.isEditingVolume) {
      alpha = 255;
      borderColor = [255, 255, 255];
      borderWeight = 2;
    }

    // Dibujar círculo
    if (borderColor) {
      stroke(borderColor[0], borderColor[1], borderColor[2]);
      strokeWeight(borderWeight);
    } else {
      noStroke();
    }
    fill(circleColor[0], circleColor[1], circleColor[2], alpha);
    ellipse(circle.x, circle.y, circle.radius * 2);

    // Dibujar icono dentro del círculo
    noStroke();
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text(layer.icon, circle.x, circle.y);

    // Dibujar barra de progreso de click (timer)
    if (circle.clickTimer > 0 && !circle.isEditingVolume) {
      const progress = circle.clickTimer / CLICK_DURATION;
      noFill();
      stroke(255, 200, 0);
      strokeWeight(5);
      arc(circle.x, circle.y, circle.radius * 2 + 10, circle.radius * 2 + 10,
          -HALF_PI, -HALF_PI + TWO_PI * progress);
    }

    // Mostrar volumen si está en modo edición
    if (circle.isEditingVolume && circle.otherHandPinch) {
      drawVolumeIndicator(circle);
    }
  }
}

function drawVolumeIndicator(circle) {
  const pinchInfo = circle.otherHandPinch;
  const layer = layers[circle.layer];

  push();
  translate(width, 0);
  scale(-1, 1);

  // Dibujar línea entre pulgar e índice de la otra mano
  stroke(255, 255, 0);
  strokeWeight(3);
  line(pinchInfo.thumb.x, pinchInfo.thumb.y, pinchInfo.index.x, pinchInfo.index.y);

  // Punto medio
  const midX = (pinchInfo.thumb.x + pinchInfo.index.x) / 2;
  const midY = (pinchInfo.thumb.y + pinchInfo.index.y) / 2;

  // Dibujar indicador de volumen
  noStroke();
  fill(255, 255, 0);
  textSize(16);
  textAlign(CENTER, CENTER);

  // Flip el texto para que sea legible
  push();
  translate(midX, midY);
  scale(-1, 1);
  text(`${Math.round(layer.volume)}%`, 0, 0);
  pop();

  pop();
}

function drawEffectIndicator(control) {
  const pinchInfo = control.otherHandPinch;

  push();
  translate(width, 0);
  scale(-1, 1);

  // Dibujar línea entre pulgar e índice de la otra mano
  stroke(255, 200, 100);
  strokeWeight(3);
  line(pinchInfo.thumb.x, pinchInfo.thumb.y, pinchInfo.index.x, pinchInfo.index.y);

  // Punto medio
  const midX = (pinchInfo.thumb.x + pinchInfo.index.x) / 2;
  const midY = (pinchInfo.thumb.y + pinchInfo.index.y) / 2;

  // Dibujar indicador de nivel de efecto
  noStroke();
  fill(255, 200, 100);
  textSize(16);
  textAlign(CENTER, CENTER);

  // Flip el texto para que sea legible
  push();
  translate(midX, midY);
  scale(-1, 1);
  text(`${Math.round(control.effectLevel)}%`, 0, 0);
  pop();

  pop();
}

function drawResetButton() {
  // Determinar color y borde
  let circleColor = resetButton.color;
  let borderColor = null;
  let borderWeight = 0;
  let alpha = 200;

  // Aplicar feedback visual si índice está dentro
  if (resetButton.indexInside) {
    alpha = 255;
    borderColor = [255, 255, 255];
    borderWeight = 2;
  }

  // Dibujar círculo
  if (borderColor) {
    stroke(borderColor[0], borderColor[1], borderColor[2]);
    strokeWeight(borderWeight);
  } else {
    noStroke();
  }
  fill(circleColor[0], circleColor[1], circleColor[2], alpha);
  ellipse(resetButton.x, resetButton.y, resetButton.radius * 2);

  // Dibujar barra de progreso de click (timer)
  if (resetButton.clickTimer > 0) {
    const progress = resetButton.clickTimer / CLICK_DURATION;
    noFill();
    stroke(255, 200, 0);
    strokeWeight(5);
    arc(resetButton.x, resetButton.y, resetButton.radius * 2 + 10, resetButton.radius * 2 + 10,
        -HALF_PI, -HALF_PI + TWO_PI * progress);
  }

  // Dibujar icono
  noStroke();
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(resetButton.label, resetButton.x, resetButton.y);
}

// ==========================================
// VISUALIZACIÓN DE CONTROLES (SIN FLIP)
// ==========================================
function drawControls() {
  for (let control of controls) {
    // Determinar color del control
    let controlColor;
    let borderColor = null;
    let borderWeight = 0;

    if (control.control === "reverb") {
      // Triángulo de Reverb: mostrar color normal siempre (no hay toggle ON/OFF)
      controlColor = control.color;

      // Si está en modo edición, borde amarillo especial
      if (control.isEditingEffect) {
        borderColor = [255, 255, 0]; // Amarillo
        borderWeight = 4;
      }
    } else {
      // Cuadrados: mostrar color normal
      controlColor = control.color;
    }

    // Aplicar feedback visual si índice está dentro (solo si no está editando)
    let alpha = 200;
    if (control.indexInside && !control.isEditingEffect) {
      alpha = 255;
      if (!borderColor) {
        borderColor = [255, 255, 255];
        borderWeight = 2;
      }
    }

    // Dibujar figura según tipo
    if (control.type === "square") {
      // Dibujar cuadrado
      if (borderColor) {
        stroke(borderColor[0], borderColor[1], borderColor[2]);
        strokeWeight(borderWeight);
      } else {
        noStroke();
      }
      fill(controlColor[0], controlColor[1], controlColor[2], alpha);
      rectMode(CENTER);
      rect(control.x, control.y, control.size, control.size, 3);

      // Dibujar valor actual
      noStroke();
      fill(255);
      textSize(10);
      textAlign(CENTER, CENTER);
      if (control.control === "bpm") {
        text(control.values[control.currentIndex], control.x, control.y);
      } else if (control.control === "progression") {
        text(`P${control.currentIndex + 1}`, control.x, control.y);
      } else if (control.control === "reverb") {
        text(`${Math.round(control.effectLevel)}`, control.x, control.y);
      }
    } else if (control.type === "triangle") {
      // Dibujar triángulo
      if (borderColor) {
        stroke(borderColor[0], borderColor[1], borderColor[2]);
        strokeWeight(borderWeight);
      } else {
        noStroke();
      }
      fill(controlColor[0], controlColor[1], controlColor[2], alpha);

      const halfSize = control.size / 2;
      const top = control.y - halfSize;
      const bottom = control.y + halfSize;
      const left = control.x - halfSize;
      const right = control.x + halfSize;

      triangle(control.x, top, left, bottom, right, bottom);

      // Dibujar label y porcentaje para Reverb
      noStroke();
      fill(255);
      textSize(12);
      textAlign(CENTER, CENTER);
      if (control.control === "reverb") {
        text(`${Math.round(control.effectLevel)}%`, control.x, control.y + 2);
      } else {
        text(control.label, control.x, control.y + 2);
      }
    } else if (control.type === "star") {
      // Dibujar estrella
      if (borderColor) {
        stroke(borderColor[0], borderColor[1], borderColor[2]);
        strokeWeight(borderWeight);
      } else {
        noStroke();
      }
      fill(controlColor[0], controlColor[1], controlColor[2], alpha);

      // Dibujar estrella de 5 puntas
      const outerRadius = control.size * 0.5;
      const innerRadius = control.size * 0.25;
      drawStar(control.x, control.y, outerRadius, innerRadius, 5);

      // Dibujar label
      noStroke();
      fill(255);
      textSize(16);
      textAlign(CENTER, CENTER);
      text(control.label, control.x, control.y);
    }

    // Dibujar barra de progreso de click (timer)
    if (control.clickTimer > 0) {
      const progress = control.clickTimer / CLICK_DURATION;
      noFill();
      stroke(255, 200, 0);
      strokeWeight(3);
      const halfSize = control.size / 2;
      arc(control.x, control.y, control.size + 10, control.size + 10,
          -HALF_PI, -HALF_PI + TWO_PI * progress);
    }

    // Mostrar indicador de efecto si está en modo edición (Reverb)
    if (control.control === "reverb" && control.isEditingEffect && control.otherHandPinch) {
      drawEffectIndicator(control);
    }
  }
}

// ==========================================
// UI DE INFORMACIÓN
// ==========================================
function drawUI() {
  // Título
  noStroke();
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text("Polifonía Gestual", width / 2, 30);

  // Solo mostrar progresión (sin BPM)
  textSize(14);
  fill(150, 150, 200);
  textAlign(CENTER);
  text(`${progressions[currentProgression].name}`, width / 2, 55);

  // Nivel de Reverb
  textSize(11);
  const reverbControl = controls.find(c => c.control === "reverb");
  if (reverbControl && reverbControl.effectLevel > 0) {
    fill(255, 200, 100);
    text(`Reverb: ${Math.round(reverbControl.effectLevel)}%`, width / 2, 75);
  }

  // Estado de reproducción (esquina inferior derecha)
  textAlign(RIGHT);
  fill(150, 150, 200);
  textSize(11);
  text("Estado: " + (isTransportStarted ? "🎵 Reproduciendo" : "⏸ Esperando activación"), width - 10, height - 10);
}

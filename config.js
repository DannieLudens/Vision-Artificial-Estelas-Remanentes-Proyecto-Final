// ==========================================
// CONFIGURACIÓN Y CONSTANTES
// ==========================================

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
// CONTROLES ADICIONALES (Cuadrados, Triángulos, Estrella)
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

// ==========================================
// SISTEMA DE ONDAS VISUALES
// ==========================================
let waves = []; // Array para almacenar ondas activas

// Configuración de ondas por tipo de capa
const waveConfig = {
  arpegio: {
    maxRadius: 80,
    duration: 1000,    // 1 segundo
    strokeWeight: 2,
    expansion: 0.08    // Velocidad de expansión
  },
  acordes: {
    maxRadius: 100,
    duration: 1500,    // 1.5 segundos
    strokeWeight: 2.5,
    expansion: 0.067
  },
  bajo: {
    maxRadius: 120,
    duration: 2000,    // 2 segundos
    strokeWeight: 3,
    expansion: 0.06
  }
};

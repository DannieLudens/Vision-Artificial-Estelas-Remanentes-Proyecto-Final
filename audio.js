// ==========================================
// SISTEMA DE AUDIO Y MÚSICA
// ==========================================

// Variables de estado musical
let arpegioPart, acordesPart, bajoPart;
let isTransportStarted = false;
let currentProgression = 0;
const rootNote = "E";
const scaleType = "minor";

// Tabla de notas
const noteTable = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// ==========================================
// SINTETIZADORES
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
      // Crear onda visual sincronizada con la nota
      Tone.Draw.schedule(function() {
        createWave(circles[0].x, circles[0].y, layers.arpegio.color, "arpegio");
      }, time);
    }
  }, arpeggioPattern);
  arpegioPart.loop = true;
  arpegioPart.loopEnd = "2m";

  // Capa 2: Acordes
  acordesPart = new Tone.Part(function(time, chord) {
    if (layers.acordes.active) {
      acordesSynth.triggerAttackRelease(chord, "2n", time);
      // Crear onda visual sincronizada con el acorde
      Tone.Draw.schedule(function() {
        createWave(circles[1].x, circles[1].y, layers.acordes.color, "acordes");
      }, time);
    }
  }, chordPattern);
  acordesPart.loop = true;
  acordesPart.loopEnd = "2m";

  // Capa 3: Bajo
  bajoPart = new Tone.Part(function(time, note) {
    if (layers.bajo.active) {
      bajoSynth.triggerAttackRelease(note, "4n", time);
      // Crear onda visual sincronizada con la nota de bajo
      Tone.Draw.schedule(function() {
        createWave(circles[2].x, circles[2].y, layers.bajo.color, "bajo");
      }, time);
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

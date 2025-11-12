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

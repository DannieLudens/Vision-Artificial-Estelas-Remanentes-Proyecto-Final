// ==========================================
// SISTEMA DE DETECCIÓN DE GESTOS
// ==========================================

// Variables para detección de manos
let handPose;
let video;
let hands = [];

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

function gotHands(results) {
  hands = results;
}

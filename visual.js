// ==========================================
// FUNCIONES DE VISUALIZACIÓN
// ==========================================

// ==========================================
// SISTEMA DE ONDAS VISUALES
// ==========================================
function createWave(x, y, color, layerType) {
  const config = waveConfig[layerType];
  waves.push({
    x: x,
    y: y,
    color: color,
    radius: 0,
    maxRadius: config.maxRadius,
    alpha: 150,
    createdAt: millis(),
    duration: config.duration,
    strokeWeight: config.strokeWeight,
    expansion: config.expansion
  });
}

function updateWaves() {
  for (let i = waves.length - 1; i >= 0; i--) {
    let wave = waves[i];
    
    // Aumentar radio MÁS LENTO para que duren más
    wave.radius += 3; // Antes era 5-8, ahora crece más lento
    
    // Disminuir alpha MÁS LENTO para que no desaparezcan tan rápido
    wave.alpha -= 1.5; // Antes era 3-5, ahora se desvanece más lento
    
    // Eliminar cuando sea invisible o muy grande
    if (wave.alpha <= 0 || wave.radius > max(width, height) * 1.5) {
      waves.splice(i, 1);
    }
  }
}

function drawWaves() {
  noFill();
  for (let wave of waves) {
    stroke(wave.color[0], wave.color[1], wave.color[2], wave.alpha);
    strokeWeight(wave.strokeWeight);
    ellipse(wave.x, wave.y, wave.radius * 2);
  }
}

function drawHands() {
  for (let hand of hands) {
    if (hand.keypoints.length < 21) continue;

    // Dibujar puntos de la mano
    for (let keypoint of hand.keypoints) {
      fill(0, 255, 0, 150);
      noStroke();
      circle(keypoint.x, keypoint.y, 8);
    }

    // Dibujar líneas de conexión
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

    // Efecto de pulso cuando está activo
    let pulseRadius = circle.radius;
    if (layer.active) {
      // Pulso sutil usando sine wave
      const pulseAmount = sin(millis() * 0.003) * 3; // Pulso de ±3 pixels
      pulseRadius = circle.radius + pulseAmount;
    }

    // Dibujar círculo
    if (borderColor) {
      stroke(borderColor[0], borderColor[1], borderColor[2]);
      strokeWeight(borderWeight);
    } else {
      noStroke();
    }
    fill(circleColor[0], circleColor[1], circleColor[2], alpha);
    ellipse(circle.x, circle.y, pulseRadius * 2);

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

function drawControls() {
  for (let control of controls) {
    // Determinar color del control
    let controlColor;
    let borderColor = null;
    let borderWeight = 0;

    if (control.control === "reverb") {
      // Cuadrado de Reverb: mostrar color normal siempre (no hay toggle ON/OFF)
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

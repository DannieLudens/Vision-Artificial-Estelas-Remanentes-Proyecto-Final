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

function draw() {
  background(0);

  // Flip horizontal para efecto espejo
  push();
  translate(width, 0);
  scale(-1, 1);

  // Dibujar video
  image(video, 0, 0, width, height);

  // Dibujar keypoints de manos
  drawHands();

  pop();

  // Actualizar ondas visuales
  updateWaves();

  // Dibujar ondas ANTES del video (en el fondo)
  drawWaves();

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

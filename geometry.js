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

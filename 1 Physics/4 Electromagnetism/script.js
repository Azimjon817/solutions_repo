const canvas = document.getElementById('lorentzCanvas');
const ctx = canvas.getContext('2d');

// Physical constants (arbitrary units for visualization)
const q = 1;      // charge
const m = 1;      // mass
const B = 1;      // magnetic field (out of the screen)
const v0 = 120;   // initial speed (pixels/sec)
const dt = 0.016; // time step (seconds)

let x = 300, y = 200; // initial position (center)
let vx = 0, vy = -v0; // initial velocity (upwards)

function drawArrow(ctx, fromX, fromY, toX, toY, color) {
  const headlen = 14; // length of head in pixels
  const dx = toX - fromX;
  const dy = toY - fromY;
  const angle = Math.atan2(dy, dx);
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.shadowColor = color + "88";
  ctx.shadowBlur = 8;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 7), toY - headlen * Math.sin(angle - Math.PI / 7));
  ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 7), toY - headlen * Math.sin(angle + Math.PI / 7));
  ctx.lineTo(toX, toY);
  ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 7), toY - headlen * Math.sin(angle - Math.PI / 7));
  ctx.fillStyle = color;
  ctx.shadowBlur = 0;
  ctx.fill();
  ctx.restore();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw magnetic field (dots for B out of screen)
  for (let i = 40; i < canvas.width; i += 60) {
    for (let j = 40; j < canvas.height; j += 60) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(i, j, 7, 0, 2 * Math.PI);
      ctx.fillStyle = "#7ed6df";
      ctx.globalAlpha = 0.18;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(i, j, 2, 0, 2 * Math.PI);
      ctx.fillStyle = "#7ed6df";
      ctx.globalAlpha = 0.5;
      ctx.fill();
      ctx.restore();
    }
  }

  // Draw particle
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, 13, 0, 2 * Math.PI);
  ctx.fillStyle = "#fff";
  ctx.shadowColor = "#7ed6df";
  ctx.shadowBlur = 18;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x, y, 8, 0, 2 * Math.PI);
  ctx.fillStyle = "#00b894";
  ctx.shadowBlur = 0;
  ctx.fill();
  ctx.restore();

  // Draw velocity vector
  drawArrow(ctx, x, y, x + vx * 0.2, y + vy * 0.2, "#00b894");

  // Calculate Lorentz force: F = q(v x B)
  // For B out of screen, v x B = (vx, vy, 0) x (0, 0, B) = (qBvy, -qBvx, 0)
  const Fx = q * vy * B;
  const Fy = -q * vx * B;

  // Draw force vector
  drawArrow(ctx, x, y, x + Fx * 0.7, y + Fy * 0.7, "#fd5e53");
}

function update() {
  // Lorentz force
  const Fx = q * vy * B;
  const Fy = -q * vx * B;

  // Update velocity
  vx += (Fx / m) * dt;
  vy += (Fy / m) * dt;

  // Update position
  x += vx * dt;
  y += vy * dt;

  // Keep particle within bounds (wrap around)
  if (x < 0) x += canvas.width;
  if (x > canvas.width) x -= canvas.width;
  if (y < 0) y += canvas.height;
  if (y > canvas.height) y -= canvas.height;
}

function animate() {
  update();
  draw();
  requestAnimationFrame(animate);
}

animate();
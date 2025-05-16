const canvas = document.getElementById('projectileCanvas');
const ctx = canvas.getContext('2d');

// Constants
const SCALE = 100; // pixels per meter
const FPS = 60;

// State variables
let isRunning = false;
let time = 0;
let projectile = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0
};
let trajectory = [];
let initialVelocity = 50;
let angle = 45;
let gravity = 9.81;
let showTrajectory = true;
let showVectors = false;

// DOM elements
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const velocitySlider = document.getElementById('velocitySlider');
const velocityValue = document.getElementById('velocityValue');
const angleSlider = document.getElementById('angleSlider');
const angleValue = document.getElementById('angleValue');
const gravitySlider = document.getElementById('gravitySlider');
const gravityValue = document.getElementById('gravityValue');
const showTrajectoryCheckbox = document.getElementById('showTrajectory');
const showVectorsCheckbox = document.getElementById('showVectors');

// Initialize canvas
function initCanvas() {
    ctx.fillStyle = '#222';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw ground
    ctx.fillStyle = '#2c3e50';
    ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
    
    // Draw grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    
    // Vertical grid lines
    for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    
    // Horizontal grid lines
    for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

// Draw projectile
function drawProjectile() {
    ctx.beginPath();
    ctx.arc(projectile.x, projectile.y, 8, 0, 2 * Math.PI);
    ctx.fillStyle = '#e74c3c';
    ctx.fill();
    
    // Add glow effect
    ctx.shadowColor = '#e74c3c';
    ctx.shadowBlur = 20;
    ctx.fill();
    ctx.shadowBlur = 0;
}

// Draw trajectory
function drawTrajectory() {
    if (!showTrajectory || trajectory.length < 2) return;
    
    ctx.beginPath();
    ctx.moveTo(trajectory[0].x, trajectory[0].y);
    
    for (let i = 1; i < trajectory.length; i++) {
        ctx.lineTo(trajectory[i].x, trajectory[i].y);
    }
    
    ctx.strokeStyle = 'rgba(126, 214, 223, 0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Draw velocity vectors
function drawVectors() {
    if (!showVectors) return;
    
    const arrowLength = 50;
    const angle = Math.atan2(projectile.vy, projectile.vx);
    
    ctx.beginPath();
    ctx.moveTo(projectile.x, projectile.y);
    ctx.lineTo(
        projectile.x + arrowLength * Math.cos(angle),
        projectile.y + arrowLength * Math.sin(angle)
    );
    ctx.strokeStyle = '#00b894';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw arrow head
    const headLength = 10;
    ctx.beginPath();
    ctx.moveTo(
        projectile.x + arrowLength * Math.cos(angle),
        projectile.y + arrowLength * Math.sin(angle)
    );
    ctx.lineTo(
        projectile.x + arrowLength * Math.cos(angle) - headLength * Math.cos(angle - Math.PI / 6),
        projectile.y + arrowLength * Math.sin(angle) - headLength * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
        projectile.x + arrowLength * Math.cos(angle) - headLength * Math.cos(angle + Math.PI / 6),
        projectile.y + arrowLength * Math.sin(angle) - headLength * Math.sin(angle + Math.PI / 6)
    );
    ctx.closePath();
    ctx.fillStyle = '#00b894';
    ctx.fill();
}

// Update physics
function update() {
    if (!isRunning) return;
    
    const dt = 1 / FPS;
    time += dt;
    
    // Update position
    projectile.x = initialVelocity * Math.cos(angle * Math.PI / 180) * time * SCALE;
    projectile.y = canvas.height - 20 - (initialVelocity * Math.sin(angle * Math.PI / 180) * time - 0.5 * gravity * time * time) * SCALE;
    
    // Update velocity
    projectile.vx = initialVelocity * Math.cos(angle * Math.PI / 180);
    projectile.vy = initialVelocity * Math.sin(angle * Math.PI / 180) - gravity * time;
    
    // Add point to trajectory
    trajectory.push({ x: projectile.x, y: projectile.y });
    
    // Check for ground collision
    if (projectile.y >= canvas.height - 20) {
        projectile.y = canvas.height - 20;
        isRunning = false;
        startBtn.textContent = 'Start';
        updateStats();
    }
}

// Update statistics
function updateStats() {
    const maxHeight = (initialVelocity * Math.sin(angle * Math.PI / 180)) ** 2 / (2 * gravity);
    const timeOfFlight = 2 * initialVelocity * Math.sin(angle * Math.PI / 180) / gravity;
    const range = initialVelocity * initialVelocity * Math.sin(2 * angle * Math.PI / 180) / gravity;
    
    document.getElementById('maxHeight').textContent = maxHeight.toFixed(2) + ' m';
    document.getElementById('range').textContent = range.toFixed(2) + ' m';
    document.getElementById('timeOfFlight').textContent = timeOfFlight.toFixed(2) + ' s';
}

// Animation loop
function animate() {
    if (!isRunning) return;
    
    initCanvas();
    drawTrajectory();
    drawProjectile();
    drawVectors();
    update();
    requestAnimationFrame(animate);
}

// Event listeners
startBtn.addEventListener('click', () => {
    isRunning = !isRunning;
    startBtn.textContent = isRunning ? 'Pause' : 'Start';
    
    if (isRunning) {
        time = 0;
        trajectory = [];
        projectile.x = 0;
        projectile.y = canvas.height - 20;
        animate();
    }
});

resetBtn.addEventListener('click', () => {
    isRunning = false;
    startBtn.textContent = 'Start';
    time = 0;
    trajectory = [];
    projectile.x = 0;
    projectile.y = canvas.height - 20;
    
    initCanvas();
    drawProjectile();
    updateStats();
});

velocitySlider.addEventListener('input', (e) => {
    initialVelocity = parseInt(e.target.value);
    velocityValue.textContent = initialVelocity;
    updateStats();
});

angleSlider.addEventListener('input', (e) => {
    angle = parseInt(e.target.value);
    angleValue.textContent = angle + '°';
    updateStats();
});

gravitySlider.addEventListener('input', (e) => {
    gravity = parseFloat(e.target.value);
    gravityValue.textContent = gravity;
    updateStats();
});

showTrajectoryCheckbox.addEventListener('change', (e) => {
    showTrajectory = e.target.checked;
});

showVectorsCheckbox.addEventListener('change', (e) => {
    showVectors = e.target.checked;
});

// Initialize
initCanvas();
drawProjectile();
updateStats();
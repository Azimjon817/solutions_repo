const canvas = document.getElementById('pendulumCanvas');
const ctx = canvas.getContext('2d');

// Constants
const GRAVITY = 9.81;
const FPS = 60;
const DT = 1 / FPS;

// State variables
let isRunning = false;
let time = 0;
let angle = 0;
let angularVelocity = 0;
let length = 200;
let damping = 0.1;
let force = 0.5;
let frequency = 0.5;
let showPhaseSpace = true;
let showTrajectory = true;
let trajectory = [];
let phaseSpacePoints = [];

// DOM elements
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const dampingSlider = document.getElementById('dampingSlider');
const dampingValue = document.getElementById('dampingValue');
const forceSlider = document.getElementById('forceSlider');
const forceValue = document.getElementById('forceValue');
const frequencySlider = document.getElementById('frequencySlider');
const frequencyValue = document.getElementById('frequencyValue');
const showPhaseSpaceCheckbox = document.getElementById('showPhaseSpace');
const showTrajectoryCheckbox = document.getElementById('showTrajectory');

// Initialize canvas
function initCanvas() {
    ctx.fillStyle = '#222';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw pivot point
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 50, 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#7ed6df';
    ctx.fill();
}

// Draw pendulum
function drawPendulum() {
    const pivotX = canvas.width / 2;
    const pivotY = 50;
    const bobX = pivotX + length * Math.sin(angle);
    const bobY = pivotY + length * Math.cos(angle);
    
    // Draw string
    ctx.beginPath();
    ctx.moveTo(pivotX, pivotY);
    ctx.lineTo(bobX, bobY);
    ctx.strokeStyle = '#7ed6df';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw bob
    ctx.beginPath();
    ctx.arc(bobX, bobY, 15, 0, 2 * Math.PI);
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

// Draw phase space
function drawPhaseSpace() {
    if (!showPhaseSpace || phaseSpacePoints.length < 2) return;
    
    const phaseSpaceCanvas = document.createElement('canvas');
    phaseSpaceCanvas.width = 200;
    phaseSpaceCanvas.height = 200;
    const phaseCtx = phaseSpaceCanvas.getContext('2d');
    
    // Draw phase space points
    phaseCtx.fillStyle = '#222';
    phaseCtx.fillRect(0, 0, phaseSpaceCanvas.width, phaseSpaceCanvas.height);
    
    phaseCtx.beginPath();
    phaseCtx.moveTo(phaseSpacePoints[0].x, phaseSpacePoints[0].y);
    
    for (let i = 1; i < phaseSpacePoints.length; i++) {
        phaseCtx.lineTo(phaseSpacePoints[i].x, phaseSpacePoints[i].y);
    }
    
    phaseCtx.strokeStyle = '#00b894';
    phaseCtx.lineWidth = 2;
    phaseCtx.stroke();
    
    // Draw phase space on main canvas
    ctx.drawImage(phaseSpaceCanvas, 10, 10);
}

// Update physics
function update() {
    if (!isRunning) return;
    
    // Calculate acceleration
    const acceleration = -GRAVITY * Math.sin(angle) / length - 
                        damping * angularVelocity + 
                        force * Math.cos(frequency * time);
    
    // Update velocity and position
    angularVelocity += acceleration * DT;
    angle += angularVelocity * DT;
    
    // Update time
    time += DT;
    
    // Add point to trajectory
    const bobX = canvas.width / 2 + length * Math.sin(angle);
    const bobY = 50 + length * Math.cos(angle);
    trajectory.push({ x: bobX, y: bobY });
    
    // Add point to phase space
    phaseSpacePoints.push({
        x: 100 + angle * 50,
        y: 100 + angularVelocity * 50
    });
    
    // Limit trajectory and phase space points
    if (trajectory.length > 1000) trajectory.shift();
    if (phaseSpacePoints.length > 1000) phaseSpacePoints.shift();
    
    // Update statistics
    updateStats();
}

// Update statistics
function updateStats() {
    document.getElementById('angle').textContent = (angle * 180 / Math.PI).toFixed(2) + '°';
    document.getElementById('angularVelocity').textContent = angularVelocity.toFixed(2) + ' rad/s';
    document.getElementById('time').textContent = time.toFixed(2) + ' s';
    
    // Calculate energy
    const potentialEnergy = GRAVITY * length * (1 - Math.cos(angle));
    const kineticEnergy = 0.5 * length * length * angularVelocity * angularVelocity;
    const totalEnergy = potentialEnergy + kineticEnergy;
    document.getElementById('energy').textContent = totalEnergy.toFixed(2) + ' J';
}

// Animation loop
function animate() {
    if (!isRunning) return;
    
    initCanvas();
    drawTrajectory();
    drawPendulum();
    drawPhaseSpace();
    update();
    requestAnimationFrame(animate);
}

// Event listeners
startBtn.addEventListener('click', () => {
    isRunning = !isRunning;
    startBtn.textContent = isRunning ? 'Pause' : 'Start';
    
    if (isRunning) {
        animate();
    }
});

resetBtn.addEventListener('click', () => {
    isRunning = false;
    startBtn.textContent = 'Start';
    time = 0;
    angle = 0;
    angularVelocity = 0;
    trajectory = [];
    phaseSpacePoints = [];
    
    initCanvas();
    drawPendulum();
    updateStats();
});

lengthSlider.addEventListener('input', (e) => {
    length = parseInt(e.target.value);
    lengthValue.textContent = (length / 100).toFixed(1);
});

dampingSlider.addEventListener('input', (e) => {
    damping = parseFloat(e.target.value);
    dampingValue.textContent = damping.toFixed(2);
});

forceSlider.addEventListener('input', (e) => {
    force = parseFloat(e.target.value);
    forceValue.textContent = force.toFixed(2);
});

frequencySlider.addEventListener('input', (e) => {
    frequency = parseFloat(e.target.value);
    frequencyValue.textContent = frequency.toFixed(2);
});

showPhaseSpaceCheckbox.addEventListener('change', (e) => {
    showPhaseSpace = e.target.checked;
});

showTrajectoryCheckbox.addEventListener('change', (e) => {
    showTrajectory = e.target.checked;
});

// Initialize
initCanvas();
drawPendulum();
updateStats();
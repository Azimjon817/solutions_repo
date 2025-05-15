const canvas = document.getElementById('monteCarloCanvas');
const ctx = canvas.getContext('2d');

// Constants
const CANVAS_SIZE = 600;
const RADIUS = CANVAS_SIZE / 2;
const ACTUAL_PI = Math.PI;

// State variables
let totalPoints = 0;
let pointsInside = 0;
let isRunning = false;
let animationId = null;
let speed = 50;

// DOM elements
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const speedSlider = document.getElementById('speed');
const totalPointsDisplay = document.getElementById('totalPoints');
const pointsInsideDisplay = document.getElementById('pointsInside');
const piEstimateDisplay = document.getElementById('piEstimate');
const errorDisplay = document.getElementById('error');

// Initialize canvas
function initCanvas() {
    ctx.fillStyle = '#222';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    
    // Draw quarter circle
    ctx.beginPath();
    ctx.arc(0, CANVAS_SIZE, RADIUS, Math.PI, 1.5 * Math.PI);
    ctx.lineTo(0, CANVAS_SIZE);
    ctx.fillStyle = 'rgba(126, 214, 223, 0.1)';
    ctx.fill();
    
    // Draw axes
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, CANVAS_SIZE);
    ctx.moveTo(0, CANVAS_SIZE);
    ctx.lineTo(CANVAS_SIZE, CANVAS_SIZE);
    ctx.strokeStyle = '#7ed6df';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Generate random point
function generatePoint() {
    return {
        x: Math.random() * CANVAS_SIZE,
        y: Math.random() * CANVAS_SIZE
    };
}

// Check if point is inside quarter circle
function isPointInside(x, y) {
    const distance = Math.sqrt(x * x + (CANVAS_SIZE - y) * (CANVAS_SIZE - y));
    return distance <= RADIUS;
}

// Draw point
function drawPoint(x, y, isInside) {
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fillStyle = isInside ? '#00b894' : '#fd5e53';
    ctx.fill();
}

// Update statistics
function updateStats() {
    totalPointsDisplay.textContent = totalPoints;
    pointsInsideDisplay.textContent = pointsInside;
    
    const piEstimate = (pointsInside / totalPoints) * 4;
    piEstimateDisplay.textContent = piEstimate.toFixed(6);
    
    const error = Math.abs((piEstimate - ACTUAL_PI) / ACTUAL_PI * 100);
    errorDisplay.textContent = error.toFixed(4) + '%';
}

// Animation loop
function animate() {
    if (!isRunning) return;
    
    const pointsPerFrame = Math.ceil(speed / 10);
    
    for (let i = 0; i < pointsPerFrame; i++) {
        const point = generatePoint();
        const inside = isPointInside(point.x, point.y);
        
        drawPoint(point.x, point.y, inside);
        
        totalPoints++;
        if (inside) pointsInside++;
    }
    
    updateStats();
    animationId = requestAnimationFrame(animate);
}

// Event listeners
startBtn.addEventListener('click', () => {
    isRunning = !isRunning;
    startBtn.textContent = isRunning ? 'Pause' : 'Start';
    
    if (isRunning) {
        animate();
    } else {
        cancelAnimationFrame(animationId);
    }
});

resetBtn.addEventListener('click', () => {
    isRunning = false;
    startBtn.textContent = 'Start';
    cancelAnimationFrame(animationId);
    
    totalPoints = 0;
    pointsInside = 0;
    
    initCanvas();
    updateStats();
});

speedSlider.addEventListener('input', (e) => {
    speed = parseInt(e.target.value);
});

// Initialize
initCanvas();
updateStats();
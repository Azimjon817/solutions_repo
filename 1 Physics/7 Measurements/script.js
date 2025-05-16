const canvas = document.getElementById('gravityCanvas');
const ctx = canvas.getContext('2d');

// Constants
const GRAVITY = 9.81; // m/s²
const AIR_RESISTANCE = 0.02;
const SCALE = 100; // pixels per meter
const FPS = 60;

// State variables
let isRunning = false;
let time = 0;
let height = 500;
let velocity = 0;
let initialHeight = 500;
let hasAirResistance = false;

// DOM elements
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const heightSlider = document.getElementById('heightSlider');
const heightValue = document.getElementById('heightValue');
const airResistanceCheckbox = document.getElementById('airResistance');
const heightDisplay = document.getElementById('height');
const velocityDisplay = document.getElementById('velocity');
const timeDisplay = document.getElementById('time');
const accelerationDisplay = document.getElementById('acceleration');

// Initialize canvas
function initCanvas() {
    ctx.fillStyle = '#222';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw ground
    ctx.fillStyle = '#2c3e50';
    ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
}

// Draw falling object
function drawObject() {
    const x = canvas.width / 2;
    const y = canvas.height - (height * SCALE) - 20;
    
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.fillStyle = '#e74c3c';
    ctx.fill();
    
    // Add glow effect
    ctx.shadowColor = '#e74c3c';
    ctx.shadowBlur = 20;
    ctx.fill();
    ctx.shadowBlur = 0;
}

// Update physics
function update() {
    if (!isRunning) return;
    
    const dt = 1 / FPS;
    time += dt;
    
    // Calculate acceleration (including air resistance if enabled)
    let acceleration = GRAVITY;
    if (hasAirResistance) {
        acceleration -= AIR_RESISTANCE * velocity * velocity;
    }
    
    // Update velocity and position
    velocity += acceleration * dt;
    height -= velocity * dt;
    
    // Check for ground collision
    if (height <= 0) {
        height = 0;
        velocity = 0;
        isRunning = false;
        startBtn.textContent = 'Start';
    }
    
    // Update displays
    heightDisplay.textContent = height.toFixed(2) + ' m';
    velocityDisplay.textContent = velocity.toFixed(2) + ' m/s';
    timeDisplay.textContent = time.toFixed(2) + ' s';
    accelerationDisplay.textContent = acceleration.toFixed(2) + ' m/s²';
}

// Animation loop
function animate() {
    if (!isRunning) return;
    
    initCanvas();
    drawObject();
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
    height = initialHeight;
    velocity = 0;
    
    initCanvas();
    drawObject();
    update();
});

heightSlider.addEventListener('input', (e) => {
    initialHeight = parseInt(e.target.value);
    heightValue.textContent = initialHeight + 'm';
    if (!isRunning) {
        height = initialHeight;
        initCanvas();
        drawObject();
        update();
    }
});

airResistanceCheckbox.addEventListener('change', (e) => {
    hasAirResistance = e.target.checked;
});

// Initialize
initCanvas();
drawObject();
update();
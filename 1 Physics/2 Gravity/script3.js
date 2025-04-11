// simulation.js
const canvas = document.getElementById('trajectoryCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

const G = 9.81; // Acceleration due to gravity (m/s^2)
const timeStep = 0.1; // Time step for the simulation

let payload = {
    x: 100,
    y: 100,
    vx: 50, // Initial velocity in x (m/s)
    vy: 0,  // Initial velocity in y (m/s)
};

function update() {
    // Update velocity
    payload.vy += G * timeStep;

    // Update position
    payload.x += payload.vx * timeStep;
    payload.y += payload.vy * timeStep;

    // Check for ground collision
    if (payload.y > canvas.height) {
        payload.y = canvas.height;
        payload.vy = 0;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw payload
    ctx.beginPath();
    ctx.arc(payload.x, payload.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

loop();
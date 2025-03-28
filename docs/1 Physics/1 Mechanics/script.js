const canvas = document.getElementById("pendulumCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

// Pendulum parameters
let theta = Math.PI / 4; // Initial angle (radians)
let omega = 0; // Angular velocity
const length = 200; // Length of the pendulum (pixels)
const gravity = 9.81;
const damping = 0.01; // Damping factor (reduces over time)
const drivingForce = 0.5; // External force amplitude
const drivingFreq = 1.5; // External force frequency
const dt = 0.02; // Time step
const pivot = { x: canvas.width / 2, y: 100 }; // Pivot position

// Update pendulum motion
function updatePendulum(time) {
    let alpha = (-gravity / length) * Math.sin(theta) - damping * omega + drivingForce * Math.sin(drivingFreq * time);
    
    omega += alpha * dt;
    theta += omega * dt;

    // Constrain theta within realistic bounds (prevents full rotations)
    if (theta > Math.PI) theta = Math.PI;
    if (theta < -Math.PI) theta = -Math.PI;
}

// Draw pendulum
function drawPendulum() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let x = pivot.x + length * Math.sin(theta);
    let y = pivot.y + length * Math.cos(theta);

    // Draw pendulum rod
    ctx.beginPath();
    ctx.moveTo(pivot.x, pivot.y);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw pendulum bob
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
}

// Animation loop
function animate(time) {
    updatePendulum(time / 1000);
    drawPendulum();
    requestAnimationFrame(animate);
}

// Start the animation
animate(0);

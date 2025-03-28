const canvas = document.getElementById("orbitCanvas");
const ctx = canvas.getContext("2d");

// Constants
const G = 6.674e-11;  // Gravitational constant (m³/kg/s²)
const M = 1.989e30;   // Mass of the Sun (kg)
const AU = 149.6e9;   // 1 Astronomical Unit in meters (Earth-Sun distance)
const scale = 100 / AU; // Scale factor to fit orbit on canvas
let dt = 60 * 60 * 24; // Time step (1 day in seconds)

// Planet (Earth-like orbit)
let planet = {
    x: canvas.width / 2 + 150, // Position in pixels
    y: canvas.height / 2,
    vx: 0, 
    vy: Math.sqrt(G * M / AU) * scale * dt, // Correct orbital speed
    path: []
};

// Sun (Star) properties
const star = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

function update() {
    // Convert position from pixels to meters
    let dx = (planet.x - star.x) / scale;
    let dy = (planet.y - star.y) / scale;
    let r = Math.sqrt(dx * dx + dy * dy);

    // Apply Newton's Law of Universal Gravitation
    let F = (G * M) / (r * r);
    let ax = -F * (dx / r) * dt;
    let ay = -F * (dy / r) * dt;

    // Update velocity
    planet.vx += ax;
    planet.vy += ay;

    // Update position
    planet.x += planet.vx;
    planet.y += planet.vy;

    // Store orbital path for visualization
    if (planet.path.length > 300) {
        planet.path.shift(); // Keep path length manageable
    }
    planet.path.push({ x: planet.x, y: planet.y });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Sun
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(star.x, star.y, 10, 0, Math.PI * 2);
    ctx.fill();

    // Draw orbital path
    ctx.strokeStyle = "rgba(0, 255, 255, 0.5)";
    ctx.beginPath();
    for (let i = 0; i < planet.path.length; i++) {
        ctx.lineTo(planet.path[i].x, planet.path[i].y);
    }
    ctx.stroke();

    // Draw Planet
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(planet.x, planet.y, 5, 0, Math.PI * 2);
    ctx.fill();
}

function animate() {
    update();
    draw();
    requestAnimationFrame(animate);
}

// Speed control
document.getElementById("speed").addEventListener("change", (event) => {
    dt = 60 * 60 * 24 * parseInt(event.target.value); // Adjust simulation speed
});

animate();



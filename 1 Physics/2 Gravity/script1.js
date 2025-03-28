const canvas = document.getElementById("orbitCanvas");
const ctx = canvas.getContext("2d");

// Constants
const G = 6.674e-11; 
const M = 1.989e30; 
const AU = 149.6e9; 
const scale = 100 / AU; 
let dt = 60 * 60 * 24;

// Planet properties
let planet = {
    x: canvas.width / 2 + 100, 
    y: canvas.height / 2,
    vx: 0, 
    vy: 29780 * scale * dt, 
    path: [] 
};

// Sun properties
const star = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

function update() {
    let dx = (planet.x - star.x) / scale;
    let dy = (planet.y - star.y) / scale;
    let r = Math.sqrt(dx * dx + dy * dy);

    let F = (G * M) / (r * r); 
    let ax = -F * (dx / r) * dt;
    let ay = -F * (dy / r) * dt;

    planet.vx += ax;
    planet.vy += ay;
    planet.x += planet.vx;
    planet.y += planet.vy;

    if (planet.path.length > 300) {
        planet.path.shift(); 
    }
    planet.path.push({ x: planet.x, y: planet.y });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(star.x, star.y, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "rgba(0, 255, 255, 0.5)";
    ctx.beginPath();
    for (let i = 0; i < planet.path.length; i++) {
        ctx.lineTo(planet.path[i].x, planet.path[i].y);
    }
    ctx.stroke();

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

document.getElementById("speed").addEventListener("change", (event) => {
    dt = 60 * 60 * 24 * parseInt(event.target.value);
});

animate();

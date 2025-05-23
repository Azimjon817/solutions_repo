// Constants
const G = 6.67430e-11; // Gravitational constant

// DOM Elements
const massInput = document.getElementById('mass');
const radiusInput = document.getElementById('radius');
const calculateBtn = document.getElementById('calculate');
const resultSpan = document.getElementById('result');
const canvas = document.getElementById('spaceCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

// Initialize canvas
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Escape Velocity Calculator
function calculateEscapeVelocity(mass, radius) {
    return Math.sqrt((2 * G * mass) / radius);
}

// Event Listeners
calculateBtn.addEventListener('click', () => {
    const mass = parseFloat(massInput.value);
    const radius = parseFloat(radiusInput.value);

    if (isNaN(mass) || isNaN(radius) || mass <= 0 || radius <= 0) {
        alert('Please enter valid positive numbers for mass and radius');
        return;
    }

    const escapeVelocity = calculateEscapeVelocity(mass, radius);
    resultSpan.textContent = escapeVelocity.toFixed(2);
});

// Space Visualization
class Particle {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.alpha = 1;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= 0.01;
    }
}

// Create particles
const particles = [];
function createParticles() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f'];

    for (let i = 0; i < 50; i++) {
        const radius = Math.random() * 2 + 1;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        const velocity = {
            x: Math.cos(angle) * speed,
            y: Math.sin(angle) * speed
        };

        particles.push(new Particle(centerX, centerY, radius, color, velocity));
    }
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(26, 26, 46, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
        if (particle.alpha <= 0) {
            particles.splice(index, 1);
        } else {
            particle.update();
            particle.draw();
        }
    });

    if (particles.length < 50) {
        createParticles();
    }
}

// Start animation
animate();

// Add some initial particles
createParticles();
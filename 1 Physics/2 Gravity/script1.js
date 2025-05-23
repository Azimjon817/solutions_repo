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
    // Convert scientific notation to regular numbers if needed
    mass = parseFloat(mass);
    radius = parseFloat(radius);
    
    // Calculate escape velocity
    const velocity = Math.sqrt((2 * G * mass) / radius);
    return velocity;
}

// Event Listeners
calculateBtn.addEventListener('click', () => {
    // Get input values and convert scientific notation
    const mass = massInput.value.replace(/e/i, 'E'); // Standardize scientific notation
    const radius = radiusInput.value.replace(/e/i, 'E');
    
    // Parse the values
    const massValue = parseFloat(mass);
    const radiusValue = parseFloat(radius);

    // Input validation
    if (isNaN(massValue) || isNaN(radiusValue) || massValue <= 0 || radiusValue <= 0) {
        alert('Please enter valid positive numbers for mass and radius');
        return;
    }

    // Calculate and display result
    const escapeVelocity = calculateEscapeVelocity(massValue, radiusValue);
    
    // Format the result to be more readable
    let formattedResult;
    if (escapeVelocity >= 1000) {
        formattedResult = (escapeVelocity / 1000).toFixed(2) + ' km/s';
    } else {
        formattedResult = escapeVelocity.toFixed(2) + ' m/s';
    }
    
    resultSpan.textContent = formattedResult;
});

// Space Visualization
// ... rest of the existing code ...
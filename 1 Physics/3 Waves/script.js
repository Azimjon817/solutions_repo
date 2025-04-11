const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
const lambdaSlider = document.getElementById('lambda');
const freqSlider = document.getElementById('freq');
const dispRange = document.getElementById('disp-range');

const width = canvas.width;
const height = canvas.height;
const scale = 300; // Pixels per meter
const A = 0.1; // Amplitude (m)
const R = 0.5; // Pentagon radius (m)
const N = 5; // Number of sources

// Source positions (pentagon vertices)
const sources = [];
for (let i = 0; i < N; i++) {
    const theta = (2 * Math.PI * i) / N;
    sources.push({
        x: R * Math.cos(theta),
        y: R * Math.sin(theta)
    });
}

function computeDisplacement(x, y, t, lambda, freq) {
    const k = 2 * Math.PI / lambda;
    const omega = 2 * Math.PI * freq;
    let eta = 0;
    for (let i = 0; i < N; i++) {
        const r = Math.sqrt((x - sources[i].x)**2 + (y - sources[i].y)**2);
        eta += A * Math.cos(k * r - omega * t);
    }
    return eta;
}

function drawFrame(t) {
    const lambda = parseFloat(lambdaSlider.value);
    const freq = parseFloat(freqSlider.value);
    const imageData = ctx.createImageData(width, height);

    let minEta = Infinity, maxEta = -Infinity;
    for (let px = 0; px < width; px++) {
        for (let py = 0; py < height; py++) {
            const x = (px - width / 2) / scale;
            const y = (py - height / 2) / scale;
            const eta = computeDisplacement(x, y, t, lambda, freq);
            minEta = Math.min(minEta, eta);
            maxEta = Math.max(maxEta, eta);

            // Map displacement to grayscale
            const value = Math.min(Math.max((eta + 0.5) / 1 * 255, 0), 255);
            const idx = (py * width + px) * 4;
            imageData.data[idx] = value;     // R
            imageData.data[idx + 1] = value; // G
            imageData.data[idx + 2] = value; // B
            imageData.data[idx + 3] = 255;   // A
        }
    }

    ctx.putImageData(imageData, 0, 0);

    // Draw sources
    ctx.fillStyle = 'red';
    for (let i = 0; i < N; i++) {
        const px = (sources[i].x * scale + width / 2);
        const py = (sources[i].y * scale + height / 2);
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, 2 * Math.PI);
        ctx.fill();
    }

    dispRange.textContent = `Min: ${minEta.toFixed(3)} m, Max: ${maxEta.toFixed(3)} m`;
}

let startTime = null;
function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const t = (timestamp - startTime) / 1000; // Time in seconds
    drawFrame(t);
    requestAnimationFrame(animate);
}

lambdaSlider.addEventListener('input', () => drawFrame(0));
freqSlider.addEventListener('input', () => drawFrame(0));
requestAnimationFrame(animate);
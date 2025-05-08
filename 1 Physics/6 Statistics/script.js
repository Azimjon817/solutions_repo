// clt.js

const canvas = document.getElementById('histogram');
const ctx = canvas.getContext('2d');
const runBtn = document.getElementById('runBtn');
const distributionSelect = document.getElementById('distribution');
const sampleSizeInput = document.getElementById('sampleSize');
const numSamplesInput = document.getElementById('numSamples');

function randomUniform() {
  return Math.random();
}

function randomExponential(lambda = 1) {
  return -Math.log(1 - Math.random()) / lambda;
}

function randomDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function getRandomValue(dist) {
  if (dist === 'uniform') return randomUniform();
  if (dist === 'exponential') return randomExponential();
  if (dist === 'custom') return randomDice();
}

function getSampleMean(dist, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += getRandomValue(dist);
  }
  return sum / n;
}

function getSampleMeans(dist, n, numSamples) {
  const means = [];
  for (let i = 0; i < numSamples; i++) {
    means.push(getSampleMean(dist, n));
  }
  return means;
}

function drawHistogram(data, bins = 40) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Find min and max
  const min = Math.min(...data);
  const max = Math.max(...data);
  const binWidth = (max - min) / bins;
  const counts = Array(bins).fill(0);

  // Count data in bins
  data.forEach(val => {
    let idx = Math.floor((val - min) / binWidth);
    if (idx === bins) idx = bins - 1;
    counts[idx]++;
  });

  // Find max count for scaling
  const maxCount = Math.max(...counts);

  // Draw bins
  for (let i = 0; i < bins; i++) {
    const x = (i * canvas.width) / bins;
    const y = canvas.height - (counts[i] / maxCount) * (canvas.height - 30);
    const w = canvas.width / bins - 2;
    const h = (counts[i] / maxCount) * (canvas.height - 30);

    ctx.fillStyle = '#0984e3';
    ctx.fillRect(x + 1, y, w, h);

    // Optionally, draw bin lines
    ctx.strokeStyle = '#dfe6e9';
    ctx.strokeRect(x + 1, y, w, h);
  }

  // Draw axes
  ctx.strokeStyle = '#636e72';
  ctx.beginPath();
  ctx.moveTo(40, 0);
  ctx.lineTo(40, canvas.height - 10);
  ctx.lineTo(canvas.width, canvas.height - 10);
  ctx.stroke();

  // Draw labels
  ctx.fillStyle = '#636e72';
  ctx.font = '14px Arial';
  ctx.fillText('Sample Mean', canvas.width / 2 - 40, canvas.height - 5);
  ctx.save();
  ctx.translate(10, canvas.height / 2 + 40);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('Frequency', 0, 0);
  ctx.restore();
}

function runSimulation() {
  const dist = distributionSelect.value;
  const n = parseInt(sampleSizeInput.value, 10);
  const numSamples = parseInt(numSamplesInput.value, 10);

  const means = getSampleMeans(dist, n, numSamples);
  drawHistogram(means);
}

runBtn.addEventListener('click', runSimulation);

// Initial run
runSimulation();
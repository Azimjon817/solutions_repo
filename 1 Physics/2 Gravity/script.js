function orbitPlanet(planetId, radius, period) {
  const planet = document.getElementById(planetId);
  const orbitCenterX = 300; // center of .solar-system
  const orbitCenterY = 300;
  let angle = 0;

  function animate() {
    const x = orbitCenterX + radius * Math.cos(angle);
    const y = orbitCenterY + radius * Math.sin(angle);
    planet.style.left = `${x}px`;
    planet.style.top = `${y}px`;

    // Angular velocity (rad/frame)
    angle += (2 * Math.PI) / period;
    requestAnimationFrame(animate);
  }

  animate();
}

// Kepler's Third Law: T² ∝ R³ (here period ~ R^1.5 for visual simplicity)
orbitPlanet("planet1", 100, 240); // radius 100, period ~100^1.5
orbitPlanet("planet2", 150, 580); // radius 150, period ~150^1.5

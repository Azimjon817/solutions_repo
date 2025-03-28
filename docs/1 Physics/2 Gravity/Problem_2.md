# Escape Velocities and Cosmic Velocities

## Motivation
The concept of escape velocity is crucial for understanding the conditions required to leave a celestial body's gravitational influence. Extending this concept, the first, second, and third cosmic velocities define the thresholds for orbiting, escaping, and leaving a star system. These principles underpin modern space exploration, from launching satellites to interplanetary missions.

## Task
1. Define the first, second, and third cosmic velocities, explaining their physical meaning.
2. Analyze the mathematical derivations and parameters affecting these velocities.
3. Calculate and visualize these velocities for different celestial bodies like Earth, Mars, and Jupiter.
4. Discuss their importance in space exploration, including launching satellites, missions to other planets, and potential interstellar travel.

## Mathematical Formulation
### Escape Velocity
The escape velocity $ v_e $ is the minimum speed an object must have to break free from the gravitational pull of a celestial body without any additional propulsion. It is derived from the energy conservation principle:

$
KE + PE = 0 \Rightarrow \frac{1}{2} m v_e^2 - \frac{GMm}{r} = 0
$

Solving for $ v_e $:

$
v_e = \sqrt{\frac{2GM}{r}}
$

where:
- $ G $ is the gravitational constant ($6.674 \times 10^{-11} $ m³/kg/s²),
- $ M $ is the mass of the celestial body,
- $ r $ is the radius from the center of the body.

### First Cosmic Velocity (Orbital Speed)
This is the velocity needed to maintain a circular orbit around a celestial body:

$
v_1 = \sqrt{\frac{GM}{r}}
$

### Second Cosmic Velocity (Escape Velocity)
The escape velocity is simply $ \sqrt{2} $ times the first cosmic velocity:

$
v_2 = \sqrt{2} v_1 = \sqrt{\frac{2GM}{r}}
$

### Third Cosmic Velocity (Solar System Escape)
This is the speed required to leave the influence of the Sun's gravity from a planet’s orbit. It depends on the planet’s distance from the Sun:

$
v_3 = \sqrt{\frac{2G M_{sun}}{r_{planet}}}
$

## Importance in Space Exploration
- **Satellites:** Must reach the first cosmic velocity to maintain stable orbits.
- **Space Missions:** Rockets need to achieve second cosmic velocity to leave Earth’s gravity and travel to other planets.
- **Interstellar Travel:** Future missions aiming to leave the Solar System must reach the third cosmic velocity.

## Deliverables
- A Markdown document with a Python script or Jupyter Notebook implementing the simulations.
- A detailed explanation of the subjects.
- Graphical representations of escape velocities and cosmic velocities for various celestial bodies.
- An interactive HTML simulation demonstrating escape velocities.

---

## HTML Simulation
Below is an interactive simulation using HTML, JavaScript, and the Canvas API to visualize escape velocity for different celestial bodies.

[Escape Velocity Simulation](project_motion2.html)

This simulation allows users to select different planets and see their respective escape velocities. 


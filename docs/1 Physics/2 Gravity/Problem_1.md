# Orbital Period and Orbital Radius

## Motivation
Kepler's Third Law states that the square of the orbital period (T) is proportional to the cube of the orbital radius (r). This fundamental principle of celestial mechanics enables calculations of planetary motions and gravitational interactions, with applications ranging from satellite navigation to planetary science.

## Task
1. Derive the mathematical relationship between the square of the orbital period and the cube of the orbital radius for circular orbits.
2. Discuss its implications for astronomy, such as planetary mass and distance calculations.
3. Analyze real-world examples (e.g., the Moon’s orbit around Earth, planetary orbits in the Solar System).
4. Implement a computational model to simulate circular orbits and verify the relationship.

## Mathematical Formulation
Kepler's Third Law can be written as:
$T^2 = \frac{4\pi^2 r^3}{GM}$
where:
- $T$ is the orbital period,
- $r$ is the orbital radius,
- $G$ is the gravitational constant (6.674 \times 10^{-11} m³/kg/s²),
- $M$ is the mass of the central body.

## Deliverables
- A Markdown document with a Python script or Jupyter Notebook implementing the simulations.
- Detailed explanations of the concepts.
- Graphical representations of circular orbits and the relationship between orbital period and radius.
- Discussion on extending the relationship to elliptical orbits.
- An interactive HTML simulation of orbital mechanics.

---

# Escape Velocities and Cosmic Velocities

## Motivation
Escape velocity is the minimum speed required to break free from a celestial body’s gravitational pull. The first, second, and third cosmic velocities define the thresholds for orbiting, escaping, and leaving a star system, which are crucial for space exploration.

## Task
1. Define and explain the first, second, and third cosmic velocities.
2. Analyze the mathematical derivations and factors affecting these velocities.
3. Calculate and visualize these velocities for Earth, Mars, and Jupiter.
4. Discuss their significance in space exploration, including satellite launches and interplanetary missions.

## Mathematical Formulation
The escape velocity $ v_e $ is given by:
$v_e = \sqrt{\frac{2GM}{r}}$
where:
- $G$ is the gravitational constant,
- $M$ is the mass of the celestial body,
- $r$ is the radius from the center of the body.

For first, second, and third cosmic velocities:
- First cosmic velocity (orbital speed): $v_1 = \sqrt{\frac{GM}{r}}$
- Second cosmic velocity (escape velocity): $v_2 = \sqrt{2} v_1$
- Third cosmic velocity (solar system escape velocity): Depends on position in the system.

## Deliverables
- A Markdown document with a Python script or Jupyter Notebook implementing the calculations and visualizations.
- Detailed explanations of the physics involved.
- Graphical representations of escape and cosmic velocities for different celestial bodies.
- An interactive HTML simulation for escape velocity calculations.

---

# Trajectories of a Freely Released Payload Near Earth

## Motivation
When an object is released from a moving rocket, its trajectory depends on initial velocity, altitude, and gravitational forces. Understanding these trajectories is crucial for space missions, including satellite deployments and reentry planning.

## Task
1. Analyze possible trajectories (e.g., parabolic, hyperbolic, elliptical) of a payload released near Earth.
2. Perform a numerical simulation to compute the path based on initial conditions.
3. Discuss how these trajectories relate to orbital insertion, reentry, or escape scenarios.
4. Develop a computational tool to simulate and visualize the motion of a payload under Earth’s gravity.

## Mathematical Formulation
Using Newton’s Law of Gravitation and motion equations:
$F = \frac{GMm}{r^2}$
The equations of motion for a payload in free space are given by:
$\frac{d^2r}{dt^2} = -\frac{GM}{r^2}$
where $r$ is the distance from Earth's center.

## Hints and Resources
- Use Newton’s Law of Gravitation and Kepler’s Laws to derive equations.
- Implement numerical simulations using Python.
- Explore real-world applications in space mission planning and planetary exploration.

## Deliverables
- A Markdown document with a Python script or Jupyter Notebook implementing the simulations.
- Detailed explanations of the physics behind payload trajectories.
- Graphical representations of different trajectory types near Earth.
- An interactive HTML simulation to visualize payload trajectories.

---

## HTML Simulation
Below is an interactive simulation using HTML, JavaScript, and the Canvas API to visualize Kepler's Third Law and circular orbits.

[Orbital Simulation](project_motion.html)

This simulation visually demonstrates an orbiting body obeying Kepler’s Third Law. It updates planetary motion in real time using Newtonian mechanics.


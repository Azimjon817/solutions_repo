# Problem 2
# Forced Damped Pendulum and Orbital Mechanics

## 1. Theoretical Foundation

### 1.1 Governing Equation of Motion
The forced damped pendulum is governed by the following nonlinear differential equation:

\[ \frac{d^2\theta}{dt^2} + b \frac{d\theta}{dt} + \frac{g}{l} \sin\theta = A \cos(\omega t) \]

where:
- \( \theta \) is the angular displacement,
- \( b \) is the damping coefficient,
- \( g \) is the gravitational acceleration,
- \( l \) is the length of the pendulum,
- \( A \) is the amplitude of the external driving force,
- \( \omega \) is the driving frequency.

### 1.2 Approximate Solutions for Small-Angle Oscillations
For small angles (\( \theta \approx \sin\theta \)), the equation simplifies to:

\[ \frac{d^2\theta}{dt^2} + b \frac{d\theta}{dt} + \frac{g}{l} \theta = A \cos(\omega t) \]

Solving this linearized equation provides insights into resonance, stability, and the behavior of the pendulum under small perturbations.

### 1.3 Resonance Conditions and Energy Implications
Resonance occurs when \( \omega \approx \sqrt{g/l} \), leading to large oscillations. Energy transfer efficiency is maximized at resonance, which can cause instability or even chaotic motion depending on the damping coefficient and driving amplitude.

## 2. Analysis of Dynamics

### 2.1 Influence of System Parameters
- **Damping coefficient (b):** High damping leads to overdamped motion, while low damping results in sustained oscillations.
- **Driving amplitude (A):** Higher amplitudes increase the possibility of nonlinear and chaotic behavior.
- **Driving frequency (\( \omega \)):** Determines whether the system undergoes resonance, quasi-periodic motion, or chaos.

### 2.2 Transition from Regular to Chaotic Motion
The system exhibits a transition from periodic to chaotic motion as parameters change. A Poincaré section and bifurcation diagram can help visualize these transitions.

## 3. Practical Applications
- **Energy Harvesting:** Used in piezoelectric and electromagnetic energy conversion systems.
- **Suspension Bridges:** Can experience forced oscillations leading to instability (e.g., Tacoma Narrows Bridge collapse).
- **Oscillating Circuits:** Analogous to driven RLC circuits with damping and external forcing.

## 4. Implementation
A Python-based simulation using numerical integration (Runge-Kutta method) will be developed to model the motion and analyze its characteristics.

### Customizing Fonts in Plots
To enhance readability, custom fonts will be applied to all visualizations using Matplotlib:

```python
import matplotlib.pyplot as plt
from matplotlib import font_manager

# Set global font style
plt.rcParams['font.family'] = 'Georgia'  # Change to preferred font
plt.rcParams['font.size'] = 14  # Adjust font size
```

### Deliverables:
- Python script implementing forced damped pendulum simulation.
- Graphical outputs (phase portraits, bifurcation diagrams, and Poincaré sections).
- Explanation of results and potential extensions (nonlinear damping, non-periodic driving forces).

---

# Gravity and Orbital Mechanics

## Problem 1: Orbital Period and Orbital Radius

### 1.1 Derivation of Kepler’s Third Law
Kepler’s Third Law states:

\[ T^2 \propto r^3 \]

where:
- \( T \) is the orbital period,
- \( r \) is the orbital radius.

Using Newton’s laws, we derive:

\[ T^2 = \frac{4\pi^2 r^3}{GM} \]

where \( G \) is the gravitational constant and \( M \) is the central mass.

### 1.2 Implications for Astronomy
- Used to determine planetary masses and distances.
- Essential for satellite mission planning.
- Extends to exoplanet detection via transit methods.

### 1.3 Computational Verification
A numerical simulation will model circular orbits and verify the period-radius relationship.

### Deliverables:
- Python notebook simulating circular orbits.
- Graphical representations of orbital motion.
- Discussion on elliptical orbits and generalizations.

## Problem 2: Escape Velocities and Cosmic Velocities

### 2.1 Definitions
- **First cosmic velocity (orbital velocity):** \( v_o = \sqrt{GM/r} \)
- **Second cosmic velocity (escape velocity):** \( v_e = \sqrt{2GM/r} \)
- **Third cosmic velocity (solar system escape):** Higher than \( v_e \) to escape Sun’s gravity.

### 2.2 Mathematical Analysis
Escape velocity depends on mass and radius of the celestial body:

\[ v_e = \sqrt{2gr} \]

where \( g \) is the gravitational acceleration at the surface.

### 2.3 Applications in Space Exploration
- Satellite launches (low Earth orbit requires first cosmic velocity).
- Interplanetary missions (Mars rovers, interstellar probes).
- Space tourism and future colonization.

### 2.4 Computational Simulation
A Python model will calculate and visualize escape velocities for Earth, Mars, and Jupiter.

### Deliverables:
- Python script modeling escape velocities.
- Graphical outputs (velocity vs. celestial body comparisons).
- Discussion on interplanetary travel requirements.

---

## Additional Python Projects

### **1. Projectile Motion with Air Resistance**


[simulation](project_motion2.html)

## Conclusion
This project bridges theoretical analysis with computational modeling, providing insights into oscillatory dynamics and celestial mechanics. The simulations and visualizations will help in understanding forced oscillations, orbital mechanics, and escape conditions in various physical contexts.


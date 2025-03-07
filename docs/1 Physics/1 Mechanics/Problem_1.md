# Problem 1
Below is an example of a Markdown document that both explains the theoretical framework behind projectile motion and implements a simulation in Python. You can use this as a starting point for your project.

---

# Projectile Motion Analysis and Simulation

Projectile motion, while seemingly simple, provides a versatile framework for exploring key principles of physics. In this document, we will derive the fundamental equations of motion, analyze the range as a function of the projection angle and other parameters, discuss practical applications, and implement a computational simulation.

---

## 1. Theoretical Foundation

### 1.1 Derivation of the Equations of Motion

Consider a projectile launched with an initial velocity $v_0$ at an angle $\theta$ with respect to the horizontal. Assuming no air resistance and that the only force acting is gravity ($g$), we start with the basic differential equations for the horizontal and vertical components.

- **Horizontal Motion** (no acceleration):
  $$
  \frac{d^2x}{dt^2} = 0 \quad \Rightarrow \quad x(t) = v_0 \cos(\theta) \, t + x_0
  $$
  With $x_0 = 0$, we have:
  $$
  x(t) = v_0 \cos(\theta) \, t
  $$

- **Vertical Motion** (constant acceleration due to gravity):

  $$
  \frac{d^2y}{dt^2} = -g \quad \Rightarrow \quad y(t) = v_0 \sin(\theta) \, t - \frac{1}{2} g t^2 + y_0
  $$
  Assuming launch from the ground ($y_0 = 0$):
  $$
  y(t) = v_0 \sin(\theta) \, t - \frac{1}{2} g t^2
  $$

These equations form the family of solutions for projectile motion. Variations in the initial conditions $v_0$, $\theta$, and even $y_0$ (launch height) yield different trajectories, offering a rich parameter space to explore.

### 1.2 Family of Solutions

- **Dependence on $v_0$:** A higher initial velocity increases both the horizontal distance and the maximum height reached.
- **Dependence on $\theta$:** The angle of projection determines the shape of the trajectory. The horizontal range $R$ (assuming launch and landing at the same height) is given by:
  $$
  R = \frac{v_0^2 \sin(2\theta)}{g}
  $$
  This result comes from solving $y(t) = 0$ (for $t > 0$) and substituting back into $x(t)$.
- **Dependence on $g$:** The gravitational acceleration $g$ inversely affects the range and the maximum height. Lower $g$ (as on the Moon) leads to longer ranges and higher trajectories.

---

## 2. Analysis of the Range

### 2.1 Range as a Function of the Projection Angle

For a projectile launched from ground level, the horizontal range is:
$$
R(\theta) = \frac{v_0^2 \sin(2\theta)}{g}
$$
This formula shows a sinusoidal dependence on $2\theta$ with a maximum when $2\theta = 90^\circ$ (i.e., $\theta = 45^\circ$). As $\theta$ deviates from $45^\circ$, the range decreases.

### 2.2 Effects of Other Parameters

- **Initial Velocity ($v_0$)**: The range increases quadratically with $v_0$. Doubling the speed results in a fourfold increase in range.
- **Gravitational Acceleration ($g$)**: The range is inversely proportional to $g$. A smaller $g$ leads to a longer range.
- **Launch Height ($y_0$)**: For projectiles launched from an elevated position, the time of flight increases, leading to a longer range. The equations become more complex, typically requiring solving a quadratic equation in $t$.

---

## 3. Practical Applications

The idealized projectile model can be adapted to more complex real-world situations:

- **Uneven Terrain:** When the launch and landing heights differ, the time of flight is determined by solving
  $$
  y(t) = y_0 + v_0 \sin(\theta) \, t - \frac{1}{2} g t^2 = y_{\text{landing}}
  $$
- **Air Resistance:** Introducing a drag force (often modeled as proportional to the velocity or the square of the velocity) leads to non-linear differential equations that may require numerical solutions.
- **Sports and Engineering:** From predicting the flight of a soccer ball to the trajectory of missiles, understanding projectile motion is key in many fields.

---

## 4. Discussion on Limitations and Extensions

### 4.1 Limitations of the Idealized Model
- **No Air Resistance:** The simulation assumes a vacuum. In reality, drag can significantly affect the projectile’s path.
- **Flat Terrain Assumption:** The standard equations assume the projectile lands at the same vertical height from which it was launched.
- **Constant Gravity:** In real scenarios (especially in astrophysics), gravity may vary with height.

### 4.2 Extensions for a More Realistic Model
- **Air Resistance:** Incorporate drag forces that are proportional to velocity or the square of the velocity. This generally requires numerical integration (e.g., using `scipy.integrate.solve_ivp`).
- **Variable Launch and Landing Heights:** Modify the equations to account for different initial and final heights.
- **Wind Effects:** Include horizontal wind acceleration to model more complex trajectories.

---

## Conclusion

This project demonstrates how projectile motion can be explored theoretically and computationally. By deriving the equations of motion, analyzing the range as a function of projection angle and other parameters, and simulating trajectories with Python, one gains both theoretical insights and practical tools for further investigations into physics and engineering applications.

Feel free to build upon this framework by adding more realistic features like air resistance and varying terrain, thereby expanding the utility of the model in real-world scenarios.

--- 

This Markdown document, along with the included Python code, provides a comprehensive overview and a hands-on tool to explore projectile motion.
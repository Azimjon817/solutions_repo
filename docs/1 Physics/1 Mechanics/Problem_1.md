# Problem 1
## 1. Theoretical Foundation

Projectile motion refers to the motion of an object launched into the air, subject only to gravitational acceleration. We derive its equations from Newton’s second law of motion.

Let an object be projected with an initial velocity $v_0$ at an angle $\theta$ above the horizontal. The motion can be decomposed into horizontal (x) and vertical (y) components:

* **Horizontal motion:**

  $$
  x(t) = v_0 \cos(\theta) \cdot t
  $$

  No acceleration in this direction (ignoring air resistance), so velocity is constant.

* **Vertical motion:**

  $$
  y(t) = v_0 \sin(\theta) \cdot t - \frac{1}{2}gt^2
  $$

  Here, $g$ is the acceleration due to gravity, and the motion is uniformly accelerated.

To derive these, start from the differential equation of motion in each direction:

$$
\frac{d^2x}{dt^2} = 0, \quad \frac{d^2y}{dt^2} = -g
$$

Solving gives the velocity and position functions as shown above.

### Family of Solutions

The general solution varies based on:

* **Initial speed $v_0$**
* **Launch angle $\theta$**
* **Gravitational field strength $g$**

Each unique set of initial conditions produces a different trajectory. For a fixed $v_0$, varying $\theta$ results in a family of parabolic paths.

---

## 2. Analysis of the Range

The range $R$ is the horizontal distance the projectile travels before returning to the same vertical level:

$$
R = \frac{v_0^2 \sin(2\theta)}{g}
$$

### Dependence on Launch Angle

* $R$ is maximized when $\sin(2\theta) = 1$, i.e., $\theta = 45^\circ$
* Symmetric behavior: $\theta$ and $90^\circ - \theta$ yield the same range

### Influence of Other Parameters

* **Initial velocity $v_0$**: Quadratic relationship; doubling $v_0$ quadruples the range
* **Gravitational acceleration $g$**: Inverse relationship; weaker gravity increases range
* **Angle $\theta$**: Nonlinear relationship via the $\sin(2\theta)$ term

---

## 3. Practical Applications

The basic projectile model is idealized but can be adapted:

* **Uneven terrain**: Modify the vertical condition (i.e., the landing height $y = y_1 \neq 0$) and solve for time of flight
* **Air resistance**: Introduce drag force proportional to velocity; this leads to a system of nonlinear differential equations, typically solved numerically
* **Wind**: Acts as an external force; can be included as a constant or variable horizontal acceleration
* **Applications**: Sports (ballistics, golf, basketball), aerospace (rocket trajectories), engineering (civil structures and debris paths)

---

## 4. Implementation

A computational tool (e.g., Python script) can numerically simulate projectile motion and visualize how the range varies with different launch angles and parameters.

### Simulation Outline

1. Input parameters: $v_0, \theta, g$
2. Calculate trajectory: Use time steps to compute $x(t), y(t)$
3. Detect when $y(t) = 0$ to find range
4. Plot range as a function of $\theta$ from $0^\circ$ to $90^\circ$

### Graphical Output

* **Range vs. Angle Curve**: Typically a sine-like curve peaking at $45^\circ$
* **Multiple curves**: Show influence of varying $v_0$ or $g$

---

## Discussion: Limitations and Realism

### Limitations of the Ideal Model

* Ignores air resistance, which shortens range and flattens trajectory
* Assumes flat and level ground
* Assumes constant gravity (not true for very high altitudes)

### Suggestions for Realistic Extensions

* Include drag: $F_d = -kv$ or $-kv^2$, added to equations of motion
* Use numerical solvers (Euler, Runge-Kutta) for systems with drag or wind
* Account for terrain elevation and variable gravitational fields
---
### Simulation of Projectile Motion
*[Simulation](project_motion.html)*

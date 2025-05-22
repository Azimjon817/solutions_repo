## Problem3

## **Gravitational Trajectories Near Earth: Theory, Analysis, and Simulation**


### **1. Theoretical Background: Types of Orbital Trajectories**

The motion of a payload near Earth under gravity can follow one of several conic-section trajectories, depending on its total mechanical energy and initial conditions.

---

#### **1.1 Conic Trajectories**

Under Newtonian gravity, the **shape of a trajectory** is determined by the **specific mechanical energy**:

$$
\varepsilon = \frac{v^2}{2} - \frac{GM}{r}
$$

Where:

* $\varepsilon$: Specific energy (J/kg)
* $v$: Speed of the object
* $r$: Distance from Earth’s center
* $G$: Gravitational constant
* $M$: Mass of Earth

Then:

| Energy $\varepsilon$ | Orbit Type     | Description                              |
| -------------------- | -------------- | ---------------------------------------- |
| $\varepsilon < 0$    | **Elliptical** | Bound orbit (circular is a special case) |
| $\varepsilon = 0$    | **Parabolic**  | Just enough energy to escape Earth       |
| $\varepsilon > 0$    | **Hyperbolic** | Escaping Earth with residual velocity    |

---

### **2. Trajectory Applications in Space Missions**

#### **Elliptical Orbits:**

* Used for satellites and space stations
* Require precise **orbital insertion** to maintain stability

#### **Parabolic Trajectories:**

* Theoretical limit for **escape velocity**
* Used in energy calculations for interplanetary transfers

#### **Hyperbolic Trajectories:**

* Enable **escape from Earth's gravity** with extra velocity
* Used in high-energy missions like Voyager and New Horizons

#### **Reentry:**

* Occurs when orbital velocity is reduced and the payload intersects Earth’s atmosphere

---

### **3. Numerical Analysis**

To analyze the trajectory of a payload near Earth:

#### **3.1 Initial Conditions**

* Position: $\vec{r}_0 = (x_0, y_0)$
* Velocity: $\vec{v}_0 = (v_{x0}, v_{y0})$
* Altitude: $h = |\vec{r}_0| - R_\text{Earth}$

#### **3.2 Governing Equation (Newton’s Second Law + Gravity)**

$$
\vec{a} = -\frac{GM}{|\vec{r}|^3} \vec{r}
$$

Use **numerical integration (e.g., Runge-Kutta 4th order)** to simulate:

* The path of the payload in Cartesian coordinates
* The changes in velocity and position over time

---

### **4. Computational Simulation Plan (Python)**

#### **Key Steps:**

1. Define constants $G, M, R_{\text{Earth}}$
2. Initialize $\vec{r}_0, \vec{v}_0$
3. Integrate over time using small time steps (e.g., RK4 or `scipy.integrate.solve_ivp`)
4. Store and plot trajectory

#### **Visualization:**

* Trajectory plots in 2D (x vs y)
* Overlay Earth as a circle
* Vary initial speed and angle to demonstrate elliptical, parabolic, and hyperbolic paths

---

### **5. Real-World Relevance**

#### **Space Missions:**

* **LEO orbits**: Require precise $v_0 \approx 7.8 \, \text{km/s}$
* **GTO/GEO orbits**: Use elliptical trajectories with apogee at target altitude
* **Escape Missions**: Require $v_0 \gtrsim 11.2 \, \text{km/s}$

#### **Satellite Deployment:**

* Must match elliptical parameters to desired orbit
* Avoid reentry by ensuring perigee remains above atmosphere

#### **Planetary Probes:**

* Use hyperbolic escape for interplanetary transfers
* Often combined with gravity assists for fuel efficiency

---

### **6. Discussion: Limitations and Extensions**

#### **Simplifications in This Model:**

* Ignores atmospheric drag (affects low-altitude trajectories)
* Ignores Earth's rotation (can be significant at launch)
* Assumes Earth is a point mass (valid for high altitudes)

#### **Extensions for Realism:**

* Include **non-inertial reference frames** (rotating Earth)
* Model **aerodynamic drag** for reentry scenarios
* Include **multi-body gravitational effects** for spaceflight between planets

---
### Simulation of Gravitational Trajectories Near Earth
*[Simulation](project_motion3.html)*


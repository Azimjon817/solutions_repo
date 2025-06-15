## Problem 1


## **Kepler’s Third Law and Circular Orbits: Theory, Application, and Simulation**


### **1. Theoretical Foundation**

#### **Derivation of the Relationship Between Orbital Period and Radius**

For a body in **uniform circular orbit** around a much larger mass (e.g., a planet orbiting a star), Newton’s Law of Gravitation and the concept of centripetal force give us:

$$
F_{\text{gravity}} = F_{\text{centripetal}}
$$

$$
\frac{G M m}{r^2} = \frac{m v^2}{r}
$$

Where:

* $G$: Gravitational constant
* $M$: Mass of the central body
* $m$: Mass of the orbiting body
* $r$: Orbital radius
* $v$: Orbital speed

Solving for $v$:

$$
v = \sqrt{\frac{GM}{r}}
$$

The **orbital period** $T$ is the time to complete one full orbit:

$$
T = \frac{2\pi r}{v}
$$

Substituting $v$:

$$
T = 2\pi r \left(\frac{r}{GM}\right)^{1/2} = 2\pi \sqrt{\frac{r^3}{GM}}
$$

Squaring both sides:

$$
T^2 = \frac{4\pi^2}{GM} r^3
$$

---

### **2. Implications for Astronomy**

This equation is a form of **Kepler’s Third Law** for circular orbits. It states:

> **The square of the orbital period is proportional to the cube of the orbital radius.**

#### Applications in Astronomy:

* **Calculate masses** of planets or stars by observing orbiting bodies.
* **Infer distances** between celestial bodies based on their periods.
* **Compare orbits** in multi-body systems using ratios:

  $$
  \frac{T_1^2}{r_1^3} = \frac{T_2^2}{r_2^3} \quad (\text{if orbiting the same body})
  $$

This relation holds **independently of the orbiting object’s mass**—a profound insight enabling early astronomers to model the solar system.

![alt text](<../image-1 (1).png>)
>
![alt text](<../image-2 (1).png>)

---

### **3. Real-World Examples**

#### **Moon’s Orbit Around Earth:**

* Average radius $r \approx 3.84 \times 10^8 \, \text{m}$
* Orbital period $T \approx 27.3 \, \text{days}$
* Plugging into $T^2 = \frac{4\pi^2}{GM} r^3$ confirms the law using Earth's mass $M \approx 5.97 \times 10^{24} \, \text{kg}$

#### **Planets in the Solar System:**

* For all planets orbiting the Sun, the ratio $T^2/r^3$ is constant (in appropriate units), confirming Kepler’s law.
* Example:

  * Earth: $T = 1$ year, $r = 1$ AU
  * Mars: $T = 1.88$ years, $r = 1.52$ AU → $(1.88)^2 \approx (1.52)^3$

---

### **4. Implementation**

#### **Computational Model Outline (Python)**

A simulation can:

* Model circular orbits for various radii
* Calculate orbital periods from Newtonian dynamics
* Verify that $T^2 \propto r^3$

#### **Simulation Features:**

1. **Define constants**: $G, M$
2. **Iterate over various radii**
3. **Compute $T$ for each radius**
4. **Plot $T^2$ vs. $r^3$**

#### **Visualization Goals:**

* **Circular Orbits**: Animate motion using matplotlib
* **T² vs R³ Plot**: Should yield a straight line
* **Log-log plot**: Slope should be \~1.5 (confirming $T \propto r^{3/2}$)

---

### **5. Extension to Elliptical Orbits and Other Celestial Systems**

While the derivation assumes **circular orbits**, Kepler’s Third Law also applies to **elliptical orbits** if $r$ is replaced by the **semi-major axis $a$**:

$$
T^2 = \frac{4\pi^2}{GM} a^3
$$

#### Implications:

* Used to determine orbits of comets and exoplanets
* Enables tracking of satellites in elliptical Earth orbits
* Informs orbital mechanics in space missions

---

### **Discussion: Limitations and Realism**

#### **Limitations:**

* Assumes a two-body system (neglects perturbations from other bodies)
* Ignores relativity (significant in very strong gravitational fields)
* Assumes constant central mass (not valid for accreting or binary systems)

#### **Possible Extensions:**

* Include **orbital eccentricity** and use elliptical models
* Simulate **N-body systems** to account for gravitational interactions
* Introduce **relativistic corrections** for high-precision astrophysics
---
## HTML simulation
*[Simulation](project1.html)*



# Problem 1

## **Interference Patterns from Circular Waves Originating at Polygon Vertices**



### **1. Physical Background: Circular Surface Waves**

The displacement of a circular surface wave emanating from a point source is governed by:

$$
\psi(\mathbf{r}, t) = A \cos(k r - \omega t + \phi)
$$

Where:

* $\psi(\mathbf{r}, t)$: Displacement at point $\mathbf{r}$ and time $t$
* $A$: Wave amplitude
* $k = \frac{2\pi}{\lambda}$: Wave number (λ is the wavelength)
* $\omega = 2\pi f$: Angular frequency (f is the frequency)
* $r = |\mathbf{r} - \mathbf{r}_s|$: Distance from source $\mathbf{r}_s$
* $\phi$: Initial phase (assumed 0 for all sources in this task)

---

### **2. Task Setup**

#### **Polygon Selection**

Let us choose a **regular pentagon** as the polygon. It has:

* **5 vertices**
* Each vertex equidistant from the center
* Placed on a circle of radius $R$

#### **Source Positioning**

Let the sources be placed at:

$$
\mathbf{r}_i = R \left( \cos\left(\frac{2\pi i}{N}\right), \sin\left(\frac{2\pi i}{N}\right) \right), \quad i = 0, 1, ..., N-1
$$

where $N = 5$ for a pentagon.

---

### **3. Superposition Principle**

The net displacement at any point $\mathbf{r}$ is the sum of displacements from all point sources:

$$
\Psi(\mathbf{r}, t) = \sum_{i=1}^{N} A \cos(k |\mathbf{r} - \mathbf{r}_i| - \omega t)
$$

Because:

* All waves have the same amplitude $A$
* The same wave number $k$
* The same angular frequency $\omega$
* Constant phase difference (zero, for coherence)

---

### **4. Interference Analysis**

#### **Constructive Interference**

Occurs when wave crests from multiple sources coincide:

$$
k r_i - \omega t = 2\pi n, \quad n \in \mathbb{Z}
$$

#### **Destructive Interference**

Occurs when crests meet troughs, resulting in cancellation:

$$
k r_i - \omega t = (2n + 1)\pi
$$

#### **Resulting Pattern**

* Central symmetry due to regular polygon
* Complex interference zones, especially in the middle of the shape
* Stable nodes (destructive) and antinodes (constructive) form spatially static interference fringes

---

### **5. Visualization and Simulation Strategy**

#### **Approach**

* Create a 2D grid of points $(x, y)$
* Calculate $\Psi(x, y, t)$ by summing waves from all 5 sources
* Use snapshots at fixed $t$, or animate over time

#### **Suggested Tools**

* Python with:

  * `NumPy` for numerical operations
  * `Matplotlib` or `Plotly` for plotting 2D interference patterns
  * `FuncAnimation` for dynamic visualization (optional)

#### **Expected Output**

* Contour plots or heatmaps of $\Psi(x, y, t)$
* Clear visualization of interference zones
* Dynamic animation (optional): how wavefronts interact over time

---

### **6. Real-World Relevance**

This setup helps model:

* Water ripple interactions (e.g., rain on puddles)
* Sonar interference in marine environments
* Diffraction and wave pattern formation in physics experiments
* Acoustic interference in architectural acoustics

---

### **7. Limitations and Extensions**

#### **Assumptions**

* No damping or attenuation
* Ideal point sources
* Uniform medium

#### **Extensions**

* Add **random phase differences**
* Include **damping**: $e^{-\alpha r}$
* Simulate **non-regular** source patterns
* Introduce **boundary effects**

---
### Simulation of Interference Patterns on a water surface
*[Simulation](index.html)*

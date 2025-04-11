# Problem 1
Let’s tackle the problem of analyzing interference patterns on a water surface due to point sources placed at the vertices of a regular polygon, as outlined in the tasks. Below, I provide a comprehensive solution in Markdown format that includes a detailed explanation, a Python script for simulation and visualization, and graphical representations of the interference patterns. Additionally, I include an HTML, CSS, and JavaScript project to simulate the interference patterns interactively in a browser, fulfilling the request for a project simulation.

---

# Interference Patterns on a Water Surface

## Introduction

Wave interference occurs when multiple waves overlap, resulting in regions of constructive interference (where amplitudes add) and destructive interference (where amplitudes cancel). On a water surface, circular waves from point sources create visually striking patterns, making it an ideal system to study wave superposition. This project analyzes the interference patterns formed by coherent point sources positioned at the vertices of a regular polygon, using both numerical simulations in Python and an interactive web-based visualization with HTML, CSS, and JavaScript.

The objectives are:
1. Select a regular polygon and position wave sources at its vertices.
2. Derive wave equations for each source and compute the total displacement via superposition.
3. Analyze and visualize interference patterns, identifying constructive and destructive regions.
4. Provide a Python-based simulation with graphical outputs.
5. Develop an interactive web simulation to demonstrate the patterns dynamically.

## Theoretical Background

### Single Wave Equation

A circular wave emanating from a point source at position $\mathbf{r}_i = (x_i, y_i)$ on a water surface is described by:

$\eta_i(\mathbf{r}, t) = A \cos(k r_i - \omega t + \phi_i)$

where:
- $\eta_i(\mathbf{r}, t)$: Displacement of the water surface at position $\mathbf{r} = (x, y)$ and time $t$,
- $A$: Amplitude (assumed constant across sources),
- $k = \frac{2\pi}{\lambda}$: Wave number, with $\lambda$ as the wavelength,
- $\omega = 2\pi f$: Angular frequency, with $f$ as the frequency,
- $r_i = \sqrt{(x - x_i)^2 + (y - y_i)^2}$: Distance from the source to point $\mathbf{r}$,
- $\phi_i$: Initial phase (assumed zero for coherent sources).

### Superposition Principle

For $N$ sources (vertices of the polygon), the total displacement is the sum of individual wave contributions:

$\eta(\mathbf{r}, t) = \sum_{i=1}^N \eta_i(\mathbf{r}, t) = \sum_{i=1}^N A \cos(k r_i - \omega t)$

Since the sources are coherent ($\phi_i = 0$), the interference depends on the path differences encoded in $r_i$.

### Interference Patterns

- **Constructive Interference**: Occurs when waves are in phase ($k r_i - \omega t$ differs by multiples of $2\pi$), leading to amplified displacement ($|\eta| \approx N A$).
- **Destructive Interference**: Occurs when waves are out of phase (e.g., differing by $\pi$), leading to cancellation ($|\eta| \approx 0$).

The pattern depends on the geometry of the source positions and the wavelength.

## Step-by-Step Analysis

### 1. Select a Regular Polygon

I choose a **regular pentagon** ($N = 5$) for its symmetry and interesting interference patterns. The vertices are equally spaced around a circle, providing a balanced configuration to observe both constructive and destructive interference.

### 2. Position the Sources

Place the pentagon’s vertices on a circle of radius $R = 0.5 \, \text{m}$ centered at the origin $(0, 0)$. The coordinates of the $i$-th vertex are:

$x_i = R \cos\left(\frac{2\pi i}{N}\right), \quad y_i = R \sin\left(\frac{2\pi i}{N}\right)$

For $N = 5$, $i = 0, 1, 2, 3, 4$, and angles are $0^\circ, 72^\circ, 144^\circ, 216^\circ, 288^\circ$.

### 3. Wave Equations

Each source emits a wave:

$\eta_i(\mathbf{r}, t) = A \cos(k \sqrt{(x - x_i)^2 + (y - y_i)^2} - \omega t)$

Parameters:
- $A = 0.1 \, \text{m}$ (amplitude),
- $\lambda = 0.2 \, \text{m}$ (wavelength), so $k = \frac{2\pi}{\lambda} = 10\pi \, \text{m}^{-1}$,
- $f = 5 \, \text{Hz}$, so $\omega = 2\pi f = 10\pi \, \text{rad/s}$.

### 4. Superposition

The total displacement is:

$\eta(\mathbf{r}, t) = A \sum_{i=1}^5 \cos(k \sqrt{(x - x_i)^2 + (y - y_i)^2} - \omega t)$

### 5. Analyze Interference Patterns

To visualize the pattern, compute $\eta(\mathbf{r}, t)$ over a grid (e.g., $x, y \in [-1, 1] \, \text{m}$) at a fixed time (e.g., $t = 0$) or animate over time. The intensity (proportional to $\eta^2$) highlights:
- **Constructive regions**: High amplitude near sources and along symmetric paths where $r_i$ differences are multiples of $\lambda$.
- **Destructive regions**: Low amplitude where waves cancel, forming nodal lines.

### 6. Visualization

We use Python for static and animated plots, and a web-based simulation for interactivity.



## Web-Based Simulation (HTML, CSS, JavaScript)

To make the simulation interactive, I created a web project using a `<canvas>` element to render the interference pattern. Users can adjust parameters like wavelength and frequency.


[Simulation](index.html)


### Explanation of the Web Code

- **HTML**: Sets up a canvas for rendering and sliders for adjusting wavelength and frequency.
- **CSS**: Styles the page for clarity and responsiveness.
- **JavaScript**:
  - Defines pentagon source positions.
  - Computes displacement using the same wave equation as the Python code.
  - Maps displacement to grayscale for visualization (scaled to avoid clipping).
  - Animates the pattern using `requestAnimationFrame`.
  - Updates the pattern when sliders change, showing real-time parameter effects.
  - Displays the displacement range for user feedback.

### Features

- **Interactivity**: Adjust wavelength (0.1–0.5 m) and frequency (1–10 Hz) to see how patterns change.
- **Real-Time Animation**: Shows dynamic wave propagation.
- **Visual Clarity**: Sources are marked in red, and displacement is rendered in grayscale (white = positive, black = negative).

## Deliverables Summary

1. **Markdown Document**: Provided above with explanations and code.
2. **Python Script**: Simulates and visualizes interference for a pentagon, with static and animated plots.
3. **Web Project**: Interactive simulation allowing parameter adjustments, implemented in HTML, CSS, and JavaScript.
4. **Graphical Representations**:
   - Python: Static plot at $t = 0$ and animation over one period.
   - Web: Real-time animated pattern with adjustable parameters.
5. **Explanation**: Covers wave equations, superposition, pattern analysis, and symmetry effects.

## Discussion

- **Patterns Observed**: The pentagon configuration produces a star-shaped pattern due to its five-fold symmetry. Constructive interference is strongest near the center and along radial arms, while destructive interference forms nodal lines resembling a pentagram.
- **Parameter Effects**:
  - **Wavelength**: Smaller $\lambda$ increases the number of interference fringes, tightening the pattern.
  - **Frequency**: Affects animation speed but not the spatial pattern at fixed $t$.
- **Applications**: Understanding these patterns is relevant to acoustics (speaker placement), optics (diffraction gratings), and fluid dynamics (wave tanks).

## Limitations and Extensions

- **2D Assumption**: Real water waves may include damping or surface tension effects.
- **Fixed Amplitude**: Variable amplitudes could simulate source strength differences.
- **Extensions**:
  - Add phase differences between sources.
  - Allow users to change the polygon (e.g., triangle, square).
  - Include damping to model energy loss.

## Conclusion

This project demonstrates how wave superposition creates complex interference patterns from simple point sources. The pentagon’s symmetry produces a visually rich pattern, analyzed through both numerical simulation and interactive visualization. The Python code provides detailed insights, while the web simulation makes the physics accessible and engaging, highlighting the beauty of wave interactions.

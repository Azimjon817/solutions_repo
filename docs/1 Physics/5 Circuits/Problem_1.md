# Problem 1
Let’s address the problem of calculating equivalent resistance using graph theory, focusing on **Option 1: Simplified Task – Algorithm Description**, as requested, and creating a project simulation in HTML, CSS, and JavaScript to visualize and interact with circuit graphs. I’ll provide a detailed explanation of the algorithm, pseudocode, and analysis for three example circuits, followed by a web-based simulation that allows users to build and simplify circuits to compute equivalent resistance. The CSS will be designed to be visually appealing with larger, bold styles for a beautiful interface.

---

# Equivalent Resistance Using Graph Theory

## Introduction

Calculating the equivalent resistance of a circuit is a core problem in electrical engineering. Traditional methods rely on identifying series and parallel resistor combinations, but complex circuits with multiple nodes and cycles can be challenging to simplify manually. Graph theory offers a systematic approach by modeling a circuit as a graph, where nodes represent junctions and edges represent resistors with weights equal to their resistance values. This method enables iterative simplification of the graph to compute the equivalent resistance, even for intricate configurations.

The objectives are:
1. Describe an algorithm for calculating equivalent resistance using graph theory, including pseudocode.
2. Explain how the algorithm handles three example circuits: simple series, simple parallel, and a nested configuration.
3. Analyze the algorithm’s efficiency and suggest improvements.
4. Develop an interactive web-based simulation using HTML, CSS, and JavaScript to visualize circuit simplification and compute equivalent resistance.

## Algorithm Description

### Graph Representation

A circuit is represented as an undirected weighted graph \( G = (V, E) \):
- **Vertices (V)**: Junctions or nodes where resistors connect.
- **Edges (E)**: Resistors connecting pairs of nodes, with weights equal to resistance values (in ohms, Ω).
- The goal is to find the equivalent resistance between two specified nodes, say \( s \) (source) and \( t \) (sink).

### Algorithm Overview

The algorithm iteratively simplifies the graph by identifying and reducing series and parallel resistor combinations until only the source and sink nodes remain, connected by a single edge whose weight is the equivalent resistance. It uses graph traversal to detect patterns and applies resistance formulas:
- **Series**: Resistors \( R_1 \) and \( R_2 \) in series combine as \( R_{\text{eq}} = R_1 + R_2 \).
- **Parallel**: Resistors \( R_1 \) and \( R_2 \) in parallel combine as \( R_{\text{eq}} = \frac{R_1 R_2}{R_1 + R_2} \).

### Pseudocode

```
Algorithm ComputeEquivalentResistance(G, s, t)
    Input: Graph G = (V, E) with edge weights as resistances, source node s, sink node t
    Output: Equivalent resistance between s and t

    while |V| > 2 or |E| > 1 do
        // Step 1: Identify series connections
        for each node u in V do
            if degree(u) = 2 and u ≠ s and u ≠ t then
                let neighbors of u be v and w
                let R1 = resistance(u, v), R2 = resistance(u, w)
                // Remove node u and edges (u, v), (u, w)
                remove edge (u, v) from E
                remove edge (u, w) from E
                remove node u from V
                // Add new edge (v, w) with series resistance
                R_eq = R1 + R2
                add edge (v, w) with weight R_eq to E
                update graph G
            end if
        end for

        // Step 2: Identify parallel connections
        for each pair of nodes (u, v) in V do
            if multiple edges exist between u and v then
                let R1, R2, ..., Rk be resistances of parallel edges
                // Compute parallel equivalent
                R_eq = 1 / (1/R1 + 1/R2 + ... + 1/Rk)
                // Remove all edges between u and v
                remove all edges (u, v) from E
                // Add single edge with equivalent resistance
                add edge (u, v) with weight R_eq to E
                update graph G
            end if
        end for

        // Step 3: Check for trivial case
        if only edge is between s and t then
            return resistance(s, t)
        end if
    end while

    // Final check
    if |V| = 2 and edge exists between s and t then
        return resistance(s, t)
    else
        return "No valid path between s and t"
    end if
End Algorithm
```

### Explanation

- **Initialization**: The graph \( G \) is input with nodes \( s \) and \( t \). Edges have weights representing resistances.
- **Series Reduction**:
  - Identify nodes with degree 2 (excluding \( s \) and \( t \)), indicating two resistors connected in series.
  - Remove the node and its two edges, replacing them with a single edge whose weight is the sum of the resistances.
- **Parallel Reduction**:
  - Detect multiple edges between the same pair of nodes, indicating parallel resistors.
  - Replace them with a single edge whose weight is computed using the parallel formula.
- **Iteration**: Repeat series and parallel reductions until the graph reduces to one edge between \( s \) and \( t \).
- **Termination**: Return the weight of the final edge as the equivalent resistance.

### Handling Nested Combinations

Nested configurations (e.g., resistors in series within a parallel branch) are handled naturally:
- **Series within Parallel**: A series chain may form a single edge that later combines in parallel with another edge. The algorithm first reduces the series chain, then detects the parallel edges in a subsequent iteration.
- **Parallel within Series**: Parallel edges may reduce to a single edge, which then forms part of a series chain. The iterative approach ensures all patterns are eventually simplified.
- The algorithm uses degree checks and edge multiplicity to identify reducible patterns without needing to explicitly classify nested structures, making it robust for arbitrary graphs.

## Example Circuits

### Example 1: Simple Series Circuit

**Description**: Three resistors \( R_1 = 2 \, \Omega \), \( R_2 = 3 \, \Omega \), \( R_3 = 5 \, \Omega \) in series between nodes \( s \) and \( t \).

**Graph**:
- Nodes: \( s, A, B, t \)
- Edges: \( (s, A, 2) \), \( (A, B, 3) \), \( (B, t, 5) \)

**Algorithm Steps**:
1. Node \( A \) has degree 2:
   - Edges \( (s, A, 2) \), \( (A, B, 3) \).
   - Remove \( A \), edges \( (s, A) \), \( (A, B) \).
   - Add edge \( (s, B, 2 + 3 = 5) \).
2. Node \( B \) has degree 2:
   - Edges \( (s, B, 5) \), \( (B, t, 5) \).
   - Remove \( B \), edges \( (s, B) \), \( (B, t) \).
   - Add edge \( (s, t, 5 + 5 = 10) \).
3. Graph has one edge \( (s, t, 10) \).

**Result**: Equivalent resistance = \( 10 \, \Omega \).

### Example 2: Simple Parallel Circuit

**Description**: Two resistors \( R_1 = 4 \, \Omega \), \( R_2 = 6 \, \Omega \) in parallel between \( s \) and \( t \).

**Graph**:
- Nodes: \( s, t \)
- Edges: \( (s, t, 4) \), \( (s, t, 6) \)

**Algorithm Steps**:
1. Detect multiple edges between \( s \) and \( t \):
   - Resistances: \( 4 \, \Omega \), \( 6 \, \Omega \).
   - Parallel equivalent: \( R_{\text{eq}} = \frac{4 \cdot 6}{4 + 6} = \frac{24}{10} = 2.4 \, \Omega \).
   - Remove edges \( (s, t, 4) \), \( (s, t, 6) \).
   - Add edge \( (s, t, 2.4) \).
2. Graph has one edge \( (s, t, 2.4) \).

**Result**: Equivalent resistance = \( 2.4 \, \Omega \).

### Example 3: Nested Configuration (Series-Parallel)

**Description**: Two branches in parallel between \( s \) and \( t \): one with a single resistor \( R_3 = 6 \, \Omega \), the other with two resistors \( R_1 = 2 \, \Omega \), \( R_2 = 3 \, \Omega \) in series.

**Graph**:
- Nodes: \( s, A, t \)
- Edges: \( (s, A, 2) \), \( (A, t, 3) \), \( (s, t, 6) \)

**Algorithm Steps**:
1. Node \( A \) has degree 2:
   - Edges \( (s, A, 2) \), \( (A, t, 3) \).
   - Remove \( A \), edges \( (s, A) \), \( (A, t) \).
   - Add edge \( (s, t, 2 + 3 = 5) \).
2. Graph has two edges between \( s \) and \( t \):
   - Edges: \( (s, t, 5) \), \( (s, t, 6) \).
   - Parallel equivalent: \( R_{\text{eq}} = \frac{5 \cdot 6}{5 + 6} = \frac{30}{11} \approx 2.727 \, \Omega \).
   - Remove edges \( (s, t, 5) \), \( (s, t, 6) \).
   - Add edge \( (s, t, 2.727) \).
3. Graph has one edge \( (s, t, 2.727) \).

**Result**: Equivalent resistance ≈ \( 2.727 \, \Omega \).

## Algorithm Efficiency and Improvements

### Efficiency Analysis

- **Time Complexity**:
  - **Series Reduction**: Checking each node’s degree takes \( O(|V|) \). Removing a node and updating edges is \( O(1) \) per reduction. At most \( |V| - 2 \) nodes are removed, so series reductions contribute \( O(|V|^2) \) in the worst case.
  - **Parallel Reduction**: Checking for multiple edges involves examining all edge pairs, taking \( O(|E|^2) \). Each reduction is \( O(1) \), but multiple iterations may be needed.
  - **Iterations**: The number of iterations depends on the graph structure. In the worst case (e.g., a complex graph), it’s proportional to \( |V| + |E| \).
  - Overall: \( O(|V|^2 + |E|^2) \) per iteration, with potentially \( O(|V|) \) iterations, leading to a rough estimate of \( O(|V|^3 + |E|^2 |V|) \).
- **Space Complexity**: \( O(|V| + |E|) \) for storing the graph using an adjacency list or matrix.

### Potential Improvements

- **Delta-Star Transformation**: For graphs with cycles (e.g., Wheatstone bridge), series and parallel reductions may stall. Applying delta-star transformations can convert non-reducible subgraphs into reducible forms, though it increases complexity.
- **Matrix Methods**: Use the Laplacian matrix and Kirchhoff’s laws to compute equivalent resistance directly via linear algebra, which is more efficient for dense graphs (\( O(|V|^3) \)).
- **Priority Queue**: Maintain a queue of reducible patterns (series nodes, parallel edges) to prioritize reductions, reducing unnecessary traversals.
- **Graph Libraries**: Leverage libraries like NetworkX (though not used here) for optimized graph operations in practice.

## Web-Based Simulation (HTML, CSS, JavaScript)

The simulation allows users to create a circuit graph by adding nodes and edges (resistors), select source and sink nodes, and compute the equivalent resistance by stepping through series and parallel reductions. The interface visualizes the graph and highlights reductions, with a bold and beautiful CSS design.

### Code

**index.html**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Equivalent Resistance Simulator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Equivalent Resistance Simulator</h1>
        <div class="controls">
            <button onclick="addNode()">Add Node</button>
            <button onclick="startAddEdge()">Add Resistor</button>
            <button onclick="setSource()">Set Source</button>
            <button onclick="setSink()">Set Sink</button>
            <button onclick="stepReduction()">Step Reduction</button>
            <button onclick="computeResistance()">Compute Resistance</button>
            <button onclick="reset()">Reset</button>
            <p>Instructions: Click to add nodes, select nodes to add resistors, set source and sink, then step through reductions or compute directly.</p>
            <p>Equivalent Resistance: <span id="result">N/A</span> Ω</p>
        </div>
        <canvas id="circuitCanvas" width="800" height="600"></canvas>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**styles.css**:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
}

h1 {
    font-size: 3.5em;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    color: #ffd700;
}

.controls {
    margin-bottom: 30px;
}

.controls button {
    font-size: 1.8em;
    padding: 15px 30px;
    margin: 10px;
    border: none;
    border-radius: 10px;
    background: #ff6f61;
    color: #ffffff;
    cursor: pointer;
    transition: transform 0.2s, background 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.controls button:hover {
    background: #ff3d2e;
    transform: scale(1.05);
}

.controls p {
    font-size: 1.6em;
    margin: 15px 0;
    color: #e0e0e0;
}

#circuitCanvas {
    border: 5px solid #ffffff;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
```

**script.js**:

```javascript
const canvas = document.getElementById('circuitCanvas');
const ctx = canvas.getContext('2d');
const resultSpan = document.getElementById('result');

let nodes = [];
let edges = [];
let source = null, sink = null;
let addingEdge = false;
let firstNode = null;

function addNode() {
    const x = Math.random() * (canvas.width - 40) + 20;
    const y = Math.random() * (canvas.height - 40) + 20;
    nodes.push({ x, y, id: nodes.length });
}

function startAddEdge() {
    addingEdge = true;
    firstNode = null;
    alert('Click first node for resistor.');
}

function setSource() {
    alert('Click node to set as source.');
    canvas.onclick = (e) => {
        const node = getNodeAt(e.offsetX, e.offsetY);
        if (node) {
            source = node.id;
            canvas.onclick = null;
            draw();
        }
    };
}

function setSink() {
    alert('Click node to set as sink.');
    canvas.onclick = (e) => {
        const node = getNodeAt(e.offsetX, e.offsetY);
        if (node) {
            sink = node.id;
            canvas.onclick = null;
            draw();
        }
    };
}

function getNodeAt(x, y) {
    return nodes.find(n => Math.hypot(n.x - x, n.y - y) < 15);
}

canvas.onclick = (e) => {
    if (addingEdge) {
        const node = getNodeAt(e.offsetX, e.offsetY);
        if (node) {
            if (!firstNode) {
                firstNode = node;
                alert('Click second node.');
            } else if (firstNode.id !== node.id) {
                const resistance = prompt('Enter resistance (Ω):');
                if (resistance && !isNaN(resistance) && resistance > 0) {
                    edges.push({ u: firstNode.id, v: node.id, R: parseFloat(resistance) });
                    addingEdge = false;
                    firstNode = null;
                    canvas.onclick = null;
                    draw();
                }
            }
        }
    }
};

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    edges.forEach(e => {
        const u = nodes[e.u], v = nodes[e.v];
        ctx.beginPath();
        ctx.moveTo(u.x, u.y);
        ctx.lineTo(v.x, v.y);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.fillStyle = 'black';
        ctx.font = '16px Arial';
        ctx.fillText(`${e.R}Ω`, (u.x + v.x) / 2, (u.y + v.y) / 2);
    });
    nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 10, 0, 2 * Math.PI);
        ctx.fillStyle = n.id === source ? 'red' : n.id === sink ? 'blue' : 'green';
        ctx.fill();
        ctx.strokeStyle = '#000';
        ctx.stroke();
    });
}

function getDegree(nodeId) {
    return edges.filter(e => e.u === nodeId || e.v === nodeId).length;
}

function stepReduction() {
    if (source === null || sink === null) {
        alert('Set source and sink nodes.');
        return;
    }

    // Series reduction
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id !== source && nodes[i].id !== sink && getDegree(nodes[i].id) === 2) {
            const es = edges.filter(e => e.u === nodes[i].id || e.v === nodes[i].id);
            if (es.length === 2) {
                let u = es[0].u === nodes[i].id ? es[0].v : es[0].u;
                let v = es[1].u === nodes[i].id ? es[1].v : es[1].u;
                const R_eq = es[0].R + es[1].R;
                edges = edges.filter(e => e !== es[0] && e !== es[1]);
                edges.push({ u, v, R: R_eq });
                nodes.splice(i, 1);
                nodes.forEach((n, idx) => n.id = idx);
                if (source > nodes[i].id) source--;
                if (sink > nodes[i].id) sink--;
                draw();
                return;
            }
        }
    }

    // Parallel reduction
    for (let u = 0; u < nodes.length; u++) {
        for (let v = u + 1; v < nodes.length; v++) {
            const parallelEdges = edges.filter(e => 
                (e.u === nodes[u].id && e.v === nodes[v].id) || 
                (e.u === nodes[v].id && e.v === nodes[u].id)
            );
            if (parallelEdges.length > 1) {
                const R_eq = 1 / parallelEdges.reduce((sum, e) => sum + 1 / e.R, 0);
                edges = edges.filter(e => !parallelEdges.includes(e));
                edges.push({ u: nodes[u].id, v: nodes[v].id, R: R_eq });
                draw();
                return;
            }
        }
    }

    alert('No reductions possible or circuit is solved.');
}

function computeResistance() {
    if (source === null || sink === null) {
        alert('Set source and sink nodes.');
        return;
    }

    let tempNodes = nodes.map(n => ({ ...n }));
    let tempEdges = edges.map(e => ({ ...e }));
    let tempSource = source, tempSink = sink;

    while (tempNodes.length > 2 || tempEdges.length > 1) {
        let reduced = false;

        // Series
        for (let i = 0; i < tempNodes.length; i++) {
            if (tempNodes[i].id !== tempSource && tempNodes[i].id !== tempSink && getDegree(tempNodes[i].id, tempEdges) === 2) {
                const es = tempEdges.filter(e => e.u === tempNodes[i].id || e.v === tempNodes[i].id);
                if (es.length === 2) {
                    let u = es[0].u === tempNodes[i].id ? es[0].v : es[0].u;
                    let v = es[1].u === tempNodes[i].id ? es[1].v : es[1].u;
                    const R_eq = es[0].R + es[1].R;
                    tempEdges = tempEdges.filter(e => e !== es[0] && e !== es[1]);
                    tempEdges.push({ u, v, R: R_eq });
                    tempNodes.splice(i, 1);
                    tempNodes.forEach((n, idx) => n.id = idx);
                    if (tempSource > tempNodes[i].id) tempSource--;
                    if (tempSink > tempNodes[i].id) tempSink--;
                    reduced = true;
                    break;
                }
            }
        }

        if (reduced) continue;

        // Parallel
        for (let u = 0; u < tempNodes.length; u++) {
            for (let v = u + 1; v < tempNodes.length; v++) {
                const parallelEdges = tempEdges.filter(e => 
                    (e.u === tempNodes[u].id && e.v === tempNodes[v].id) || 
                    (e.u === tempNodes[v].id && e.v === tempNodes[u].id)
                );
                if (parallelEdges.length > 1) {
                    const R_eq = 1 / parallelEdges.reduce((sum, e) => sum + 1 / e.R, 0);
                    tempEdges = tempEdges.filter(e => !parallelEdges.includes(e));
                    tempEdges.push({ u: tempNodes[u].id, v: tempNodes[v].id, R: R_eq });
                    reduced = true;
                    break;
                }
            }
            if (reduced) break;
        }

        if (!reduced) {
            resultSpan.textContent = 'Cannot reduce further';
            return;
        }
    }

    const finalEdge = tempEdges.find(e => 
        (e.u === tempSource && e.v === tempSink) || 
        (e.u === tempSink && e.v === tempSource)
    );
    if (finalEdge) {
        resultSpan.textContent = finalEdge.R.toFixed(3);
    } else {
        resultSpan.textContent = 'No path';
    }
}

function getDegree(nodeId, edgesList = edges) {
    return edgesList.filter(e => e.u === nodeId || e.v === nodeId).length;
}

function reset() {
    nodes = [];
    edges = [];
    source = null;
    sink = null;
    resultSpan.textContent = 'N/A';
    draw();
}

draw();
```

### Explanation of the Web Simulation

- **HTML**:
  - A canvas for drawing the circuit graph.
  - Buttons for adding nodes, resistors, setting source/sink, stepping through reductions, computing resistance, and resetting.
  - Displays the equivalent resistance.

- **CSS**:
  - Uses a gradient background for depth.
  - Large, bold fonts (e.g., 3.5em for the title, 1.8em for buttons) for readability.
  - Buttons have hover effects (scale, color change) and shadows for a modern look.
  - Canvas has a white background with a rounded border and shadow for emphasis.
  - Glassmorphism effect on the container (blur, transparency) enhances aesthetics.

- **JavaScript**:
  - **Nodes**: Added randomly on the canvas, drawn as colored circles (red for source, blue for sink, green otherwise).
  - **Edges**: Added by selecting two nodes and entering a resistance value, drawn as lines with resistance labels.
  - **Reductions**:
    - **Series**: Finds a node with degree 2 (not source or sink), removes it, and combines the resistances.
    - **Parallel**: Finds multiple edges between two nodes and computes the parallel equivalent.
    - **Step Reduction**: Performs one reduction and redraws the graph, highlighting changes.
  - **Compute Resistance**: Runs reductions until the graph is a single edge, displaying the result.
  - **Interactivity**: Click-based node selection, prompts for resistance values, and visual feedback ensure usability.

### Features

- **Interactive Graph Building**: Users can place nodes and connect them with resistors.
- **Step-by-Step Reduction**: Visualizes each series or parallel simplification, aiding understanding.
- **Direct Computation**: Computes the final resistance in one click.
- **Visual Feedback**: Color-coded nodes and labeled edges clarify the circuit structure.
- **Reset Option**: Clears the canvas for new circuits.

### Testing with Examples

Users can recreate the example circuits:
- **Series**: Add nodes \( s, A, B, t \), connect \( s-A \), \( A-B \), \( B-t \), and compute \( 10 \, \Omega \).
- **Parallel**: Add nodes \( s, t \), add two edges with \( 4 \, \Omega \), \( 6 \, \Omega \), and compute \( 2.4 \, \Omega \).
- **Nested**: Add nodes \( s, A, t \), connect \( s-A \), \( A-t \), and \( s-t \), and compute \( 2.727 \, \Omega \).

## Deliverables Summary

1. **Algorithm Description and Pseudocode**: Provided with clear steps for series and parallel reductions.
2. **Explanation of Examples**:
   - Simple series: Reduced to \( 10 \, \Omega \).
   - Simple parallel: Reduced to \( 2.4 \, \Omega \).
   - Nested series-parallel: Reduced to \( 2.727 \, \Omega \).
3. **Efficiency Analysis**: Estimated complexity and suggested improvements like delta-star or matrix methods.
4. **Web Simulation**: Interactive HTML/CSS/JavaScript project visualizing circuit simplification, with bold and beautiful CSS styling.

## Conclusion

The graph theory approach simplifies equivalent resistance calculations by iteratively reducing series and parallel patterns, handling even nested configurations effectively. The web simulation makes this process accessible and educational, allowing users to build, simplify, and analyze circuits interactively. The bold, visually appealing design enhances user engagement, making the physics of circuits both understandable and enjoyable.

---

To run the simulation, save the HTML, CSS, and JavaScript files in a directory and open `index.html` in a browser. Let me know if you need additional features (e.g., support for delta-star transformations), specific circuit presets, or further assistance!

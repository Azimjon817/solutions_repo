# Problem 1

### **Measuring Earth's Gravitational Acceleration with a Pendulum**
---
To determine the acceleration due to gravity $g$, we use a simple pendulum and analyze its oscillatory motion. The pendulum consists of a string of known length with a small mass at the end. When displaced slightly and released, it undergoes periodic motion, and the time it takes to complete one full swing is called the **period**.

#### **1. Period Measurement**

We begin by measuring the time it takes for the pendulum to complete 10 full oscillations. This timing is repeated 10 times to improve accuracy and allow statistical analysis.

The period $T$ (time for one oscillation) is calculated by dividing the average time for 10 oscillations $\overline{t_{10}}$ by 10:

$$
T = \frac{\overline{t_{10}}}{10}
$$

#### **2. Calculating Gravitational Acceleration**

The relationship between the period $T$, the pendulum length $L$, and the gravitational acceleration $g$ is:

$$
g = \frac{4\pi^2 L}{T^2}
$$

By measuring $L$ and calculating $T$, we can determine $g$.

#### **3. Uncertainty Analysis**

Uncertainty is a key part of experimental work. The uncertainty in the length $L$ is estimated as half the resolution of the measuring tool. For the time measurements, we calculate the standard deviation of the 10 trials of $t_{10}$, then find the uncertainty in the mean:

$$
\delta T = \frac{s}{10\sqrt{n}}
$$

where $s$ is the standard deviation and $n = 10$ is the number of trials.

Finally, the uncertainty in $g$ is determined using uncertainty propagation:

$$
\delta g = g \cdot \sqrt{\left(\frac{\delta L}{L}\right)^2 + \left(2 \cdot \frac{\delta T}{T}\right)^2}
$$

This allows us to report $g$ with a meaningful uncertainty, reflecting the reliability of our measurements.

---


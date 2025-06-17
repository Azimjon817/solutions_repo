# Problem 1

# Central Limit Theorem Exploration through Simulation

## 1. Simulating Sampling Distributions

We explore the Central Limit Theorem (CLT) using three different types of population distributions:

* **Uniform distribution**: A distribution where every value between 0 and 1 has equal probability.
* **Exponential distribution**: A right-skewed distribution often used to model time between events.
* **Binomial distribution**: A discrete distribution representing the number of successes in a fixed number of independent trials with the same probability of success.

For each of these distributions, we generate a large population dataset containing 100,000 values to represent the entire population.

---

## 2. Sampling and Visualization

From each population distribution, we draw random samples of different sizes—5, 10, 30, and 50. For each sample size, we perform the following:

* Repeat the sampling process 1000 times.
* Calculate the mean of each sample.
* Visualize the distribution of these sample means using histograms.

### Observations:

* As the sample size increases, the distribution of the sample means begins to resemble a normal distribution, regardless of the original population shape.
* This is the essence of the Central Limit Theorem: the sampling distribution of the sample mean becomes approximately normal as the sample size increases, even if the population distribution is not normal.

---

## 3. Parameter Exploration

### Convergence to Normality:

* **Uniform Distribution**: Being symmetric and bounded, this distribution quickly shows convergence to normality. Even sample sizes of 10 begin to show a bell-shaped curve.
* **Exponential Distribution**: Initially highly skewed, it requires larger sample sizes (30 or 50) for the sampling distribution of the mean to approximate a normal distribution.
* **Binomial Distribution**: Since the binomial distribution with parameters n = 10 and p = 0.5 is already symmetric, the sample mean distributions become nearly normal with relatively small samples.

### Impact of Population Variance:

* The variability in the original population affects how spread out the sampling distribution is.
* The larger the population variance, the wider the sampling distribution of the mean will be.
* Importantly, the standard deviation of the sampling distribution (called the standard error) decreases as the sample size increases, following the formula:

  $$
  \text{Standard Error} = \frac{\sigma}{\sqrt{n}}
  $$

  where $\sigma$ is the population standard deviation and $n$ is the sample size.

---

## 4. Practical Applications

### Why the Central Limit Theorem Matters:

1. **Estimating Population Parameters**:

   * We can use the sample mean to estimate the population mean, even if the population is not normally distributed, provided the sample size is large enough.

2. **Quality Control in Manufacturing**:

   * In industries, random samples are taken from production lines. Thanks to the CLT, the average quality measures from these samples can help infer the overall quality with high confidence.

3. **Predicting Outcomes in Finance**:

   * Financial analysts often rely on the CLT to model returns and assess risk. The expected average returns from many small, independent investments tend to follow a normal distribution.

---
### Exploring the Central Limit Theorem through simulations
---
*[Simulation](iindex.html)*

*[Simulation](project.html)*



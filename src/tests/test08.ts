import type { TestQuestion } from "../testTypes";

const test08: TestQuestion[] = [
  {
    id: 1,
    marks: 1,
    type: "MCQ",
    question:
      "If ‘→’ denotes increasing order of intensity, then the meaning of the words [drizzle → rain → downpour] is analogous to [ ______ → quarrel → feud]. Which one of the given options is appropriate to fill the blank?",
    options: ["bicker", "bog", "dither", "dodge"],
    answer: "A",
  },
  {
    id: 2,
    marks: 1,
    type: "MCQ",
    question:
      "Statements:\n1. All heroes are winners.\n2. All winners are lucky people.\n\nInferences:\nI. All lucky people are heroes.\nII. Some lucky people are heroes.\nIII. Some winners are heroes.\n\nWhich of the above inferences can be logically deduced from statements 1 and 2?",
    options: ["Only I and II", "Only II and III", "Only I and III", "Only III"],
    answer: "B",
  },
  {
    id: 3,
    marks: 1,
    type: "MCQ",
    question:
      "A student was supposed to multiply a positive real number p with another positive real number q. Instead, the student divided p by q. If the percentage error in the student’s answer is 80%, the value of q is",
    options: ["5", String.raw`\(\sqrt{2}\)`, "2", String.raw`\(\sqrt{5}\)`],
    answer: "D",
  },
  {
    id: 4,
    marks: 1,
    type: "MCQ",
    question:
      String.raw`If the sum of the first 20 consecutive positive odd numbers is divided by \(20^2\), the result is`,
    options: ["1", "20", "2", "1/2"],
    answer: "A",
  },
  {
    id: 5,
    marks: 1,
    type: "MCQ",
    question:
      "The ratio of the number of girls to boys in class VIII is the same as the ratio of the number of boys to girls in class IX. The total number of students (boys and girls) in classes VIII and IX is 450 and 360, respectively. If the number of girls in classes VIII and IX is the same, then the number of girls in each class is",
    options: ["150", "200", "250", "175"],
    answer: "B",
  },
  {
    id: 6,
    marks: 2,
    type: "MCQ",
    question:
      "In the given text, the blanks are numbered (i)−(iv). Select the best match for all the blanks.\n\nYoko Roi stands (i) as an author for standing (ii) as an honorary fellow, after she stood (iii) her writings that stand (iv) the freedom of speech.",
    options: [
      "(i) out (ii) down (iii) in (iv) for",
      "(i) down (ii) out (iii) by (iv) in",
      "(i) down (ii) out (iii) for (iv) in",
      "(i) out (ii) down (iii) by (iv) for",
    ],
    answer: "D",
  },
  {
    id: 7,
    marks: 2,
    type: "MCQ",
    question:
      "Seven identical cylindrical chalk-sticks are fitted tightly in a cylindrical container. The figure in the original paper shows one central cylindrical chalk-stick surrounded by six identical chalk-sticks. The length of the container is equal to the length of the chalk-sticks. The ratio of the occupied space to the empty space of the container is",
    options: ["5/2", "7/2", "9/2", "3"],
    answer: "B",
  },
  {
    id: 8,
    marks: 2,
    type: "MCQ",
    question:
      "The plot in the original paper shows mortality risk of cardiovascular disease versus steps/day. Approximate plotted values are 1.0 at 0 steps/day, about 0.4 at 5000, about 0.2 at 10000, about 0.1 at 15000, and near 0.05 at 20000. Based on the data, which one of the following options is true?",
    options: [
      "The risk reduction on increasing the steps/day from 0 to 10000 is less than the risk reduction on increasing the steps/day from 10000 to 20000.",
      "The risk reduction on increasing the steps/day from 0 to 5000 is less than the risk reduction on increasing the steps/day from 15000 to 20000.",
      "For any 5000 increment in steps/day the largest risk reduction occurs on going from 0 to 5000.",
      "For any 5000 increment in steps/day the largest risk reduction occurs on going from 15000 to 20000.",
    ],
    answer: "C",
  },
  {
    id: 9,
    marks: 2,
    type: "MCQ",
    question:
      "Five cubes of identical size and another smaller cube are assembled as shown in Figure A of the original paper. If viewed from direction X, the planar image of the assembly appears as Figure B. If viewed from direction Y, the planar image of the assembly (Figure A) will appear as which one of the following? [Figure-based question; see the original GATE 2024 MA paper for the exact assembly and option drawings.]",
    options: [
      "Planar image shown as option (A) in the original paper",
      "Planar image shown as option (B) in the original paper",
      "Planar image shown as option (C) in the original paper",
      "Planar image shown as option (D) in the original paper",
    ],
    answer: "A",
  },
  {
    id: 10,
    marks: 2,
    type: "MCQ",
    question:
      "Visualize a cube that is held with one of the four body diagonals aligned to the vertical axis. Rotate the cube about this axis such that its view remains unchanged. The magnitude of the minimum angle of rotation is",
    options: ["120°", "60°", "90°", "180°"],
    answer: "A",
  },

  {
    id: 11,
    marks: 1,
    type: "MCQ",
    question:
      "Consider the following condition on a function \(f:\mathbb C\\to\\mathbb C\): \n\n\(|f(z)|=1\) for all \(z\\in\\mathbb C\) such that \(\operatorname{Im}(z)=0\). (P)\n\nWhich one of the following is correct?",
    options: [
      "There is a non-constant analytic polynomial f satisfying (P)",
      "Every entire function f satisfying (P) is a constant function",
      "Every entire function f satisfying (P) has no zeroes in C",
      "There is an entire function f satisfying (P) with infinitely many zeroes in C",
    ],
    answer: "C",
  },
  {
    id: 12,
    marks: 1,
    type: "MCQ",
    question:
      String.raw`Let \(C\) be the ellipse \(\{z\in\mathbb C:|z-2|+|z+2|=8\}\) traversed counter-clockwise. The value of the contour integral
\[
\oint_C \frac{z^2}{z^2-2z+2}\,dz
\]
is equal to`,
    options: ["0", String.raw`\(2\pi i\)`, String.raw`\(4\pi i\)`, String.raw`\(-\pi i\)`],
    answer: "C",
  },
  {
    id: 13,
    marks: 1,
    type: "MCQ",
    question:
      String.raw`Let \(X\) be a topological space and \(A\subseteq X\). Given a subset \(S\) of \(X\), let \(\operatorname{int}(S)\), \(\partial S\), and \(\overline{S}\) denote the interior, boundary, and closure, respectively, of the set \(S\). Which one of the following is NOT necessarily true?`,
    options: [
      String.raw`\(\operatorname{int}(X\setminus A)\subseteq X\setminus A\)`,
      String.raw`\(A\subseteq\overline A\)`,
      String.raw`\(\partial A\subseteq\partial(\operatorname{int}(A))\)`,
      String.raw`\(\partial(X\setminus A)\subseteq\partial A\)`,
    ],
    answer: "C",
  },
  {
    id: 14,
    marks: 1,
    type: "MCQ",
    question:
      String.raw`Consider the following limit:
\[
\lim_{\varepsilon\to0}\frac1\varepsilon\int_0^\infty e^{-x/\varepsilon}\left(\cos(3x)+x^2+\sqrt{x+4}\right)\,dx.
\]
Which one of the following is correct?`,
    options: [
      "The limit does not exist",
      "The limit exists and is equal to 0",
      "The limit exists and is equal to 3",
      String.raw`The limit exists and is equal to \(\pi\)`,
    ],
    answer: "C",
  },
  {
    id: 15,
    marks: 1,
    type: "MCQ",
    question:
      String.raw`Let \(\mathbb R[X^2,X^3]\) be the subring of \(\mathbb R[X]\) generated by \(X^2\) and \(X^3\). Consider the statements:\n\nI. The ring \(\mathbb R[X^2,X^3]\) is a unique factorization domain.\nII. The ring \(\mathbb R[X^2,X^3]\) is a principal ideal domain.\n\nWhich one of the following is correct?`,
    options: [
      "Both I and II are TRUE",
      "I is TRUE and II is FALSE",
      "I is FALSE and II is TRUE",
      "Both I and II are FALSE",
    ],
    answer: "D",
  },
  {
    id: 16,
    marks: 1,
    type: "MCQ",
    question:
      "Given a prime number p, let \(n_p(G)\) denote the number of p-Sylow subgroups of a finite group G. Which one of the following is TRUE for every group G of order 2024?",
    options: [
      String.raw`\(n_{11}(G)=1\) and \(n_{23}(G)=11\)`,
      String.raw`\(n_{11}(G)\in\{1,23\}\) and \(n_{23}(G)=1\)`,
      String.raw`\(n_{11}(G)=23\) and \(n_{23}(G)\in\{1,88\}\)`,
      String.raw`\(n_{11}(G)=23\) and \(n_{23}(G)=11\)`,
    ],
    answer: "B",
  },
  {
    id: 17,
    marks: 1,
    type: "MCQ",
    question:
      "Consider the following statements.\n\nI. Every compact Hausdorff space is normal.\nII. Every metric space is normal.\n\nWhich one of the following is correct?",
    options: [
      "Both I and II are TRUE",
      "I is TRUE and II is FALSE",
      "I is FALSE and II is TRUE",
      "Both I and II are FALSE",
    ],
    answer: "A",
  },
  {
    id: 18,
    marks: 1,
    type: "MCQ",
    question:
      "Consider the topology on Z with basis {S(a,b) : a,b ∈ Z and a ≠ 0}, where S(a,b) = {an+b : n ∈ Z}. Consider the following statements.\n\nI. S(a,b) is both open and closed for each a,b ∈ Z with a ≠ 0.\nII. The only connected set containing x ∈ Z is {x}.\n\nWhich one of the following is correct?",
    options: [
      "Both I and II are TRUE",
      "I is TRUE and II is FALSE",
      "I is FALSE and II is TRUE",
      "Both I and II are FALSE",
    ],
    answer: "A",
  },
  {
    id: 19,
    marks: 1,
    type: "MCQ",
    question:
      String.raw`Let
\[
A=\begin{pmatrix}0&2\\2&0\end{pmatrix}
\]
and \(T:M_2(\mathbb C)\to M_2(\mathbb C)\) be the linear transformation given by \(T(B)=AB\). The characteristic polynomial of \(T\) is`,
    options: [
      String.raw`\(X^4-8X^2+16\)`,
      String.raw`\(X^2-4\)`,
      String.raw`\(X^2-2\)`,
      String.raw`\(X^4-16\)`,
    ],
    answer: "A",
  },
  {
    id: 20,
    marks: 1,
    type: "MCQ",
    question:
      "Let A ∈ M_n(C) be a normal matrix. Consider the following statements.\n\nI. If all the eigenvalues of A are real, then A is Hermitian.\nII. If all the eigenvalues of A have absolute value 1, then A is unitary.\n\nWhich one of the following is correct?",
    options: [
      "Both I and II are TRUE",
      "I is TRUE and II is FALSE",
      "I is FALSE and II is TRUE",
      "Both I and II are FALSE",
    ],
    answer: "A",
  },
  {
    id: 21,
    marks: 1,
    type: "MCQ",
    question:
      String.raw`Let
\[
A=\begin{pmatrix}
2&-1&1\\
1&2&-1\\
-1&1&2
\end{pmatrix}
\]
and b be a 3 × 1 real column vector. Consider the statements.\n\nI. The Jacobi iteration method for the system \((A+\varepsilon I_3)x=b\) converges for any initial approximation and \(\varepsilon>0\).\nII. The Gauss-Seidel iteration method for the system \((A+\varepsilon I_3)x=b\) converges for any initial approximation and \(\varepsilon>0\).\n\nWhich one of the following is correct?`,
    options: [
      "Both I and II are TRUE",
      "I is TRUE and II is FALSE",
      "I is FALSE and II is TRUE",
      "Both I and II are FALSE",
    ],
    answer: "A",
  },
  {
    id: 22,
    marks: 1,
    type: "MCQ",
    question:
      String.raw`For the initial value problem
\[
y'=f(x,y),\qquad y(x_0)=y_0,
\]
generate approximations \(y_n\) to \(y(x_n)\), \(x_n=x_0+nh\), for a fixed \(h>0\) and \(n=1,2,3,\ldots\), using
\[
y_n=y_{n-1}+ak_1+bk_2,
\]
where
\[
k_1=hf(x_{n-1},y_{n-1}),\quad
k_2=hf(x_{n-1}+\alpha h,y_{n-1}+\beta k_1).
\]
Which one of the following choices gives the Runge-Kutta method of order 2?`,
    options: [
      "a = 1, b = 1, α = 0.5, β = 0.5",
      "a = 0.5, b = 0.5, α = 2, β = 2",
      "a = 0.25, b = 0.75, α = 2/3, β = 2/3",
      "a = 0.5, b = 0.5, α = 1, β = 2",
    ],
    answer: "C",
  },
  {
    id: 23,
    marks: 1,
    type: "MCQ",
    question:
      String.raw`Let \(u=u(x,t)\) be the solution of
\[
u_t-4u_{xx}=0,\quad 0<x<1,\ t>0,
\]
\[
u(0,t)=u(1,t)=0,\quad t\ge0,\qquad
u(x,0)=\sin(\pi x).
\]
Define
\[
g(t)=\int_0^1(u(x,t))^2\,dx,\quad t>0.
\]
Which one of the following is correct?`,
    options: [
      String.raw`\(g\) is decreasing on \((0,\infty)\) and \(\lim_{t\to\infty}g(t)=0\)`,
      String.raw`\(g\) is decreasing on \((0,\infty)\) and \(\lim_{t\to\infty}g(t)=1/4\)`,
      String.raw`\(g\) is increasing on \((0,\infty)\) and \(\lim_{t\to\infty}g(t)\) does not exist`,
      String.raw`\(g\) is increasing on \((0,\infty)\) and \(\lim_{t\to\infty}g(t)=3\)`,
    ],
    answer: "A",
  },
  {
    id: 24,
    marks: 1,
    type: "MCQ",
    question:
      String.raw`If \(y_1\) and \(y_2\) are two different solutions of the ordinary differential equation
\[
y'+\sin(e^x)y=\cos(e^x+1),\qquad 0\le x\le1,
\]
then which one of the following is its general solution on \([0,1]\)?`,
    options: [
      "c1y1 + c2y2, c1,c2 ∈ R",
      "y1 + c(y1 − y2), c ∈ R",
      "cy1 + (y1 − y2), c ∈ R",
      "c1(y1 + y2) + c2(y1 − y2), c1,c2 ∈ R",
    ],
    answer: "B",
  },
  {
    id: 25,
    marks: 1,
    type: "MCQ",
    question:
      String.raw`Consider the following Linear Programming Problem P:
\[
\text{minimize }5x_1+2x_2
\]
subject to
\[
2x_1+x_2\le2,\qquad
x_1+x_2\ge1,\qquad
x_1,x_2\ge0.
\]
The optimal value of the problem P is equal to`,
    options: ["5", "0", "4", "2"],
    answer: "D",
  },

  {
    id: 26,
    marks: 1,
    type: "NAT",
    question:
      String.raw`Let \(p=(1,\frac12,\frac13,\frac14)^T\in\mathbb R^4\) and \(f:\mathbb R^4\to\mathbb R\) be differentiable such that \(f(p)=6\) and \(f(\lambda x)=\lambda^3f(x)\) for every \(\lambda>0\) and \(x\in\mathbb R^4\). The value of
\[
12\frac{\partial f}{\partial x_1}(p)+6\frac{\partial f}{\partial x_2}(p)+4\frac{\partial f}{\partial x_3}(p)+3\frac{\partial f}{\partial x_4}(p)
\]
is equal to`,
    answer: 216,
  },
  {
    id: 27,
    marks: 1,
    type: "NAT",
    question:
      "The number of non-isomorphic finite groups with exactly 3 conjugacy classes is equal to",
    answer: 2,
  },
  {
    id: 28,
    marks: 1,
    type: "NAT",
    question:
      String.raw`Let \(f(x,y)=(x^2-y^2,2xy)\), where \(x>0,y>0\). Let \(g\) be the inverse of \(f\) in a neighborhood of \(f(2,1)\). Then the determinant of the Jacobian matrix of \(g\) at \(f(2,1)\) is equal to (round off to TWO decimal places).`,
    answer: { min: 0.04, max: 0.06 },
  },
  {
    id: 29,
    marks: 1,
    type: "NAT",
    question:
      String.raw`Let \(\mathbb F_3\) be the field with exactly 3 elements. The number of elements in \(GL_2(\mathbb F_3)\) is equal to`,
    answer: 48,
  },
  {
    id: 30,
    marks: 1,
    type: "NAT",
    question:
      String.raw`Given a real subspace \(W\) of \(\mathbb R^4\), let \(W^\perp\) denote its orthogonal complement with respect to the standard inner product on \(\mathbb R^4\). Let
\[
W_1=\operatorname{Span}\{(1,0,0,-1)\},\qquad
W_2=\operatorname{Span}\{(2,1,0,-1)\}.
\]
The dimension of \(W_1^\perp\cap W_2^\perp\) over \(\mathbb R\) is equal to`,
    answer: 2,
  },
  {
    id: 31,
    marks: 1,
    type: "NAT",
    question: "The number of group homomorphisms from Z/4Z to S4 is equal to",
    answer: 16,
  },
  {
    id: 32,
    marks: 1,
    type: "NAT",
    question:
      String.raw`Let \(a\in\mathbb R\) and \(h\) be a positive real number. For any twice-differentiable function \(f:\mathbb R\to\mathbb R\), let \(P_f(x)\) be the interpolating polynomial of degree at most two that interpolates \(f\) at \(a-h,a,a+h\). Define \(d\) to be the largest integer such that any polynomial \(g\) of degree \(d\) satisfies \(g''(a)=P_g''(a)\). The value of \(d\) is equal to`,
    answer: 3,
  },
  {
    id: 33,
    marks: 1,
    type: "NAT",
    question:
      String.raw`Let \(P_f(x)\) be the interpolating polynomial of degree at most two that interpolates \(f(x)=x^2|x|\) at \(x=-1,0,1\). Then
\[
\sup_{x\in[-1,1]}|f(x)-P_f(x)|
\]
is equal to (round off to TWO decimal places).`,
    answer: { min: 0.14, max: 0.16 },
  },
  {
    id: 34,
    marks: 1,
    type: "NAT",
    question:
      String.raw`The maximum of the function \(f(x,y,z)=xyz\) subject to the constraints
\[
xy+yz+zx=12,\qquad x>0,\ y>0,\ z>0
\]
is equal to (round off to TWO decimal places).`,
    answer: { min: 7.99, max: 8.01 },
  },
  {
    id: 35,
    marks: 1,
    type: "NAT",
    question:
      String.raw`If the outward flux of \(\vec F(x,y,z)=(x^3,y^3,z^3)\) through the unit sphere \(x^2+y^2+z^2=1\) is \(\alpha\pi\), then \(\alpha\) is equal to (round off to TWO decimal places).`,
    answer: { min: 2.39, max: 2.41 },
  },

  {
    id: 36,
    marks: 2,
    type: "MCQ",
    question:
      String.raw`Let \(H=\{z\in\mathbb C:\operatorname{Im}(z)>0\}\) and \(D=\{z\in\mathbb C:|z|<1\}\). Then
\[
\sup\{|f'(0)|: f\text{ is an analytic function from }D\text{ to }H,\ f(0)=i/2\}
\]
is equal to`,
    options: ["1/4", "1/2", "1", "100"],
    answer: "C",
  },
  {
    id: 37,
    marks: 2,
    type: "MCQ",
    question:
      String.raw`Let \(S_1=\{z\in\mathbb C:|z|=1\}\). For which one of the following functions \(f\) does there exist a sequence of polynomials in \(z\) that uniformly converges to \(f\) on \(S_1\)?`,
    options: [
      String.raw`\(f(z)=z\)`,
      String.raw`\(f(z)=\operatorname{Re}(z)\)`,
      String.raw`\(f(z)=e^z\)`,
      String.raw`\(f(z)=|z+1|^2\)`,
    ],
    answer: "C",
  },
  {
    id: 38,
    marks: 2,
    type: "MCQ",
    question:
      "Let f : [0,1] → R be a function. Which one of the following is a sufficient condition for f to be Lebesgue measurable?",
    options: [
      "|f| is a Lebesgue measurable function",
      "There exist continuous functions g,h : [0,1] → R such that g ≤ f ≤ h on [0,1]",
      "f is continuous almost everywhere on [0,1]",
      "For each c ∈ R, the set {x ∈ [0,1] : f(x)=c} is Lebesgue measurable",
    ],
    answer: "C",
  },
  {
    id: 39,
    marks: 2,
    type: "MCQ",
    question:
      String.raw`Let \(g:M_2(\mathbb R)\to\mathbb R\) be given by \(g(A)=\operatorname{Trace}(A^2)\). Let \(0\) be the \(2\times2\) zero matrix. The space \(M_2(\mathbb R)\) may be identified with \(\mathbb R^4\) in the usual manner. Which one of the following is correct?`,
    options: [
      "0 is a point of local minimum of g",
      "0 is a point of local maximum of g",
      "0 is a saddle point of g",
      "0 is not a critical point of g",
    ],
    answer: "C",
  },
  {
    id: 40,
    marks: 2,
    type: "MCQ",
    question:
      "Consider the following statements.\n\nI. There exists a proper subgroup G of (Q,+) such that Q/G is a finite group.\nII. There exists a subgroup G of (Q,+) such that Q/G is isomorphic to (Z,+).\n\nWhich one of the following is correct?",
    options: [
      "Both I and II are TRUE",
      "I is TRUE and II is FALSE",
      "I is FALSE and II is TRUE",
      "Both I and II are FALSE",
    ],
    answer: "D",
  },
  {
    id: 41,
    marks: 2,
    type: "MCQ",
    question:
      "Let X be the space R/Z with the quotient topology induced from the usual topology on R. Consider the following statements.\n\nI. X is compact.\nII. X \\ {x} is connected for any x ∈ X.\n\nWhich one of the following is correct?",
    options: [
      "Both I and II are TRUE",
      "I is TRUE and II is FALSE",
      "I is FALSE and II is TRUE",
      "Both I and II are FALSE",
    ],
    answer: "A",
  },
  {
    id: 42,
    marks: 2,
    type: "MCQ",
    question:
      String.raw`Let \(\langle\cdot,\cdot\rangle\) denote the standard inner product on \(\mathbb R^7\). Let \(\Sigma=\{v_1,\ldots,v_5\}\subseteq\mathbb R^7\) be a set of unit vectors such that \(\langle v_i,v_j\rangle\) is a non-positive integer for all \(1\le i\ne j\le5\). Define \(N(\Sigma)\) to be the number of pairs \((r,s)\), \(1\le r,s\le5\), such that \(\langle v_r,v_s\rangle\ne0\). The maximum possible value of \(N(\Sigma)\) is equal to`,
    options: ["9", "10", "14", "5"],
    answer: "A",
  },
  {
    id: 43,
    marks: 2,
    type: "MCQ",
    question:
      String.raw`Let \(f(x)=|x|+|x-1|+|x-2|\), \(x\in[-1,2]\). Which one of the following numerical integration rules gives the exact value of
\[
\int_{-1}^{2}f(x)\,dx?
\]`,
    options: [
      "The Simpson’s rule",
      "The trapezoidal rule",
      "The composite Simpson’s rule by dividing [-1,2] into 4 equal subintervals",
      "The composite trapezoidal rule by dividing [-1,2] into 3 equal subintervals",
    ],
    answer: "D",
  },
  {
    id: 44,
    marks: 2,
    type: "MCQ",
    question:
      String.raw`Consider the initial value problem (IVP)
\[
y'=e^{-y^2}+1,\qquad y(0)=0.
\]
I. IVP has a unique solution on \(\mathbb R\).
II. Every solution of IVP is bounded on its maximal interval of existence.
Which one of the following is correct?`,
    options: [
      "Both I and II are TRUE",
      "I is TRUE and II is FALSE",
      "I is FALSE and II is TRUE",
      "Both I and II are FALSE",
    ],
    answer: "B",
  },
  {
    id: 45,
    marks: 2,
    type: "MCQ",
    question:
      String.raw`Let \(A\) be a \(2\times2\) non-diagonalizable real matrix with a real eigenvalue \(\lambda\) and \(v\) be an eigenvector of \(A\) corresponding to \(\lambda\). Which one of the following is the general solution of the system \(y'=Ay\) of first-order linear differential equations?`,
    options: [
      String.raw`\(c_1e^{\lambda t}v+c_2te^{\lambda t}v\)`,
      String.raw`\(c_1e^{\lambda t}v+c_2t^2e^{\lambda t}v\)`,
      String.raw`\(c_1e^{\lambda t}v+c_2e^{\lambda t}(tv+u)\), where \(u\) satisfies \((A-\lambda I_2)u=v\)`,
      String.raw`\(c_1e^{\lambda t}v+c_2te^{\lambda t}(v+u)\), where \(u\) satisfies \((A-\lambda I_2)u=v\)`,
    ],
    answer: "C",
  },
  {
    id: 46,
    marks: 2,
    type: "MCQ",
    question:
      String.raw`Let \(D=\{(x,y)\in\mathbb R^2:x>0,\ y>0\}\). If the PDE
\[
y^2u_{xx}-x^2u_{yy}+yu_y=0
\]
on D is transformed to
\[
\left(u_{\eta\eta}-u_{\xi\xi}\right)+
\left(u_\eta+u_\xi\right)\frac1{2\eta}
+\left(a\,u_\eta+b\,u_\xi\right)\frac1{2\xi}=0
\]
via the coordinate transform \(\eta=x^2/2\) and \(\xi=y^2/2\), then which one of the following is correct?`,
    options: ["a = 2, b = 0", "a = 0, b = −1", "a = 1, b = −1", "a = 1, b = 0"],
    answer: "B",
  },
  {
    id: 47,
    marks: 2,
    type: "MCQ",
    question:
      String.raw`Let
\[
\ell^p=\left\{x=(x_n)_{n\ge1}:x_n\in\mathbb R,\ \|x\|_p=\left(\sum_{n=1}^{\infty}|x_n|^p\right)^{1/p}<\infty\right\}
\]
for \(p=1,2\). Let \(C_{00}\) be the set of sequences having only finitely many nonzero entries. For \(x\in C_{00}\), define
\[
f(x)=\sum_{n=1}^{\infty}\frac{x_n}{\sqrt n}.
\]
Consider:\n\nI. There exists a continuous linear functional F on \((\ell^1,\|\cdot\|_1)\) such that \(F=f\) on \(C_{00}\).\nII. There exists a continuous linear functional G on \((\ell^2,\|\cdot\|_2)\) such that \(G=f\) on \(C_{00}\).\n\nWhich one is correct?`,
    options: [
      "Both I and II are TRUE",
      "I is TRUE and II is FALSE",
      "I is FALSE and II is TRUE",
      "Both I and II are FALSE",
    ],
    answer: "B",
  },

  {
    id: 48,
    marks: 2,
    type: "MSQ",
    question:
      String.raw`Let \(\ell_Z^2=\{(x_j)_{j\in\mathbb Z}:x_j\in\mathbb R,\sum_{j=-\infty}^{\infty}x_j^2<\infty\}\) endowed with the inner product \(\langle x,y\rangle=\sum_{j=-\infty}^{\infty}x_jy_j\). Let \(T:\ell_Z^2\to\ell_Z^2\) be given by \(T((x_j)_{j\in\mathbb Z})=(y_j)_{j\in\mathbb Z}\), where \(y_j=(x_j+x_{-j})/2\). Which of the following is/are correct?`,
    options: [
      "T is a compact operator",
      "The operator norm of T is 1",
      "T is a self-adjoint operator",
      "Range(T) is closed",
    ],
    answer: ["B", "C", "D"],
  },
  {
    id: 49,
    marks: 2,
    type: "MSQ",
    question:
      String.raw`Let \(X\) be the normed space \((\mathbb R^2,\|\cdot\|)\), where \(\|(x,y)\|=|x|+|y|\). Let \(S=\{(x,0):x\in\mathbb R\}\) and \(f:S\to\mathbb R\) be given by \(f((x,0))=2x\). Recall that a Hahn-Banach extension of f to X is a continuous linear functional F on X such that \(F|_S=f\) and \(\|F\|=\|f\|\). Which of the following is/are true?`,
    options: [
      "F(x,y)=2x+3y is a Hahn-Banach extension of f to X",
      "F(x,y)=2x+y is a Hahn-Banach extension of f to X",
      "f admits infinitely many Hahn-Banach extensions to X",
      "f admits exactly two distinct Hahn-Banach extensions to X",
    ],
    answer: ["B", "C"],
  },
  {
    id: 50,
    marks: 2,
    type: "MSQ",
    question:
      "Let {[a,b) : a,b ∈ R, a < b} be a basis for a topology τ on R. Which of the following is/are correct?",
    options: [
      "Every (a,b) with a < b is an open set in (R,τ)",
      "Every [a,b] with a < b is a compact set in (R,τ)",
      "(R,τ) is a first-countable space",
      "(R,τ) is a second-countable space",
    ],
    answer: ["A", "C"],
  },
  {
    id: 51,
    marks: 2,
    type: "MSQ",
    question:
      "Let T,S : R^4 → R^4 be two non-zero, non-identity R-linear transformations. Assume T^2=T. Which of the following is/are TRUE?",
    options: [
      "T is necessarily invertible",
      "T and S are similar if S^2=S and Rank(T)=Rank(S)",
      "T and S are similar if S has only 0 and 1 as eigenvalues",
      "T is necessarily diagonalizable",
    ],
    answer: ["B", "D"],
  },
  {
    id: 52,
    marks: 2,
    type: "MSQ",
    question:
      String.raw`Let \(p_1<p_2\) be the two fixed points of the function \(g(x)=e^x-2\), where \(x\in\mathbb R\). For \(x_0\in\mathbb R\), let the sequence \((x_n)_{n\ge1}\) be generated by the fixed point iteration \(x_n=g(x_{n-1})\). Which of the following is/are correct?`,
    options: [
      String.raw`\((x_n)_{n\ge0}\) converges to \(p_1\) for any \(x_0\in(p_1,p_2)\)`,
      String.raw`\((x_n)_{n\ge0}\) converges to \(p_2\) for any \(x_0\in(p_1,p_2)\)`,
      String.raw`\((x_n)_{n\ge0}\) converges to \(p_2\) for any \(x_0>p_2\)`,
      String.raw`\((x_n)_{n\ge0}\) converges to \(p_1\) for any \(x_0<p_1\)`,
    ],
    answer: ["A", "D"],
  },
  {
    id: 53,
    marks: 2,
    type: "MSQ",
    question:
      String.raw`Which of the following is/are eigenvalue(s) of the Sturm-Liouville problem
\[
y''+\lambda y=0,\quad 0\le x\le\pi,
\]
\[
y(0)=y'(0),\qquad y(\pi)=y'(\pi)?
\]`,
    options: ["λ = 1", "λ = 2", "λ = 3", "λ = 4"],
    answer: ["A", "D"],
  },
  {
    id: 54,
    marks: 2,
    type: "MSQ",
    question:
      String.raw`Let \(f:\mathbb R^2\to\mathbb R\) be a function such that
\[
f(x,y)=
\begin{cases}
\left(1-\cos\frac{x^2}{y^2}\right)\sqrt{x^2+y^2},&y\ne0,\\
0,&\text{otherwise}.
\end{cases}
\]
Which of the following is/are correct?`,
    options: [
      "f is continuous at (0,0), but not differentiable at (0,0)",
      "f is differentiable at (0,0)",
      "All the directional derivatives of f at (0,0) exist and they are equal to zero",
      "Both the partial derivatives of f at (0,0) exist and they are equal to zero",
    ],
    answer: ["A", "D"],
  },
  {
    id: 55,
    marks: 2,
    type: "MSQ",
    question:
      String.raw`For an integer \(n\), let \(f_n(x)=xe^{-nx}\), where \(x\in[0,1]\). Let \(S=\{f_n:n\ge1\}\). Consider the metric space \((C([0,1]),d)\), where
\[
d(f,g)=\sup_{x\in[0,1]}|f(x)-g(x)|.
\]
Which of the following statement(s) is/are true?`,
    options: [
      "S is an equi-continuous family of continuous functions",
      "S is closed in (C([0,1]), d)",
      "S is bounded in (C([0,1]), d)",
      "S is compact in (C([0,1]), d)",
    ],
    answer: ["A", "C"],
  },
  {
    id: 56,
    marks: 2,
    type: "MSQ",
    question:
      String.raw`Let \(T:\mathbb R^4\to\mathbb R^4\) be an \(\mathbb R\)-linear transformation such that 1 and 2 are the only eigenvalues of \(T\). Suppose the dimensions of \(\operatorname{Kernel}(T-I_4)\) and \(\operatorname{Range}(T-2I_4)\) are 1 and 2, respectively. Which of the following is/are possible (upper triangular) Jordan canonical form(s) of \(T\)?`,
    options: [
      String.raw`\(\begin{pmatrix}1&0&0&0\\0&2&0&0\\0&0&2&1\\0&0&0&2\end{pmatrix}\)`,
      String.raw`\(\begin{pmatrix}1&0&0&0\\0&2&1&0\\0&0&2&1\\0&0&0&2\end{pmatrix}\)`,
      String.raw`\(\begin{pmatrix}1&1&0&0\\0&1&0&0\\0&0&2&1\\0&0&0&2\end{pmatrix}\)`,
      String.raw`\(\begin{pmatrix}1&1&0&0\\0&1&0&0\\0&0&2&0\\0&0&0&2\end{pmatrix}\)`,
    ],
    answer: ["A", "D"],
  },

  {
    id: 57,
    marks: 2,
    type: "NAT",
    question:
      String.raw`Let \(L^2([-1,1])\) denote the space of all real-valued Lebesgue square-integrable functions on \([-1,1]\), with the usual norm. Let \(P_1\) be the subspace of \(L^2([-1,1])\) consisting of all polynomials of degree at most 1. Let \(f\in L^2([-1,1])\) be such that \(\|f\|^2=18/5\), \(\int_{-1}^1f(x)\,dx=2\), and \(\int_{-1}^1xf(x)\,dx=0\). Then
\[
\inf_{g\in P_1}\|f-g\|^2
\]
is equal to (round off to TWO decimal places).`,
    answer: { min: 1.59, max: 1.61 },
  },
  {
    id: 58,
    marks: 2,
    type: "NAT",
    question:
      String.raw`The maximum value of
\[
f(x,y,z)=10x+6y-8z
\]
subject to
\[
5x-2y+6z\le20,\qquad
10x+4y-6z\le30,\qquad
x,y,z\ge0
\]
is equal to (round off to TWO decimal places).`,
    answer: { min: 56.66, max: 56.68 },
  },
  {
    id: 59,
    marks: 2,
    type: "NAT",
    question:
      String.raw`Let \(K\subseteq\mathbb C\) be the field extension of \(\mathbb Q\) obtained by adjoining all the roots of the polynomial equation \((X^2-2)(X^2-3)=0\). The number of distinct fields \(F\) such that \(\mathbb Q\subseteq F\subseteq K\) is equal to`,
    answer: 5,
  },
  {
    id: 60,
    marks: 2,
    type: "NAT",
    question:
      String.raw`Let \(H\) be the subset of \(S_3\) consisting of all \(\sigma\in S_3\) such that
\[
\operatorname{Trace}(A_1A_2A_3)=\operatorname{Trace}(A_{\sigma(1)}A_{\sigma(2)}A_{\sigma(3)})
\]
for all \(A_1,A_2,A_3\in M_2(\mathbb C)\). The number of elements in \(H\) is equal to`,
    answer: 3,
  },
  {
    id: 61,
    marks: 2,
    type: "NAT",
    question:
      String.raw`Let \(r:[0,1]\to\mathbb R^2\) be a continuously differentiable path from \((0,2)\) to \((3,0)\) and let \(\vec F:\mathbb R^2\to\mathbb R^2\) be defined by \(\vec F(x,y)=(1-2y,1-2x)\). The line integral of \(\vec F\) along \(r\),
\[
\int_r\vec F\cdot d\vec r,
\]
is equal to (round off to TWO decimal places).`,
    answer: { min: 0.99, max: 1.01 },
  },
  {
    id: 62,
    marks: 2,
    type: "NAT",
    question:
      String.raw`Let \(u=u(x,t)\) be the solution of
\[
u_{tt}-u_{xx}=0,\quad x\in\mathbb R,\ t>0,
\]
\[
u(x,0)=0,\qquad
u_t(x,0)=
\begin{cases}
x^4(1-x)^4,&0<x<1,\\
0,&\text{otherwise}.
\end{cases}
\]
If
\[
\alpha=\inf\{t>0:u(2,t)>0\},
\]
then \(\alpha\) is equal to (round off to TWO decimal places).`,
    answer: { min: 0.99, max: 1.01 },
  },
  {
    id: 63,
    marks: 2,
    type: "NAT",
    question:
      String.raw`The boundary value problem
\[
x^2y''-2xy'+2y=0,\quad 1\le x\le2,
\]
\[
y(1)-y'(1)=1,\qquad y(2)-ky'(2)=4,
\]
has infinitely many distinct solutions when \(k\) is equal to (round off to TWO decimal places).`,
    answer: { min: 1.99, max: 2.01 },
  },
  {
    id: 64,
    marks: 2,
    type: "NAT",
    question:
      String.raw`The global maximum of
\[
f(x,y)=(x^2+y^2)e^{2-x-y}
\]
on
\[
\{(x,y)\in\mathbb R^2:x\ge0,\ y\ge0\}
\]
is equal to (round off to TWO decimal places).`,
    answer: { min: 3.99, max: 4.01 },
  },
  {
    id: 65,
    marks: 2,
    type: "NAT",
    question:
      String.raw`Let \(k\in\mathbb R\) and \(D=\{(r,\theta):0<r<2,\ 0<\theta<\pi\}\). Let \(u(r,\theta)\) be the solution of
\[
u_{rr}+\frac1r u_r+\frac1{r^2}u_{\theta\theta}=0,
\]
\[
u(r,0)=u(r,\pi)=0,\quad 0\le r\le2,
\]
\[
u(2,\theta)=k\sin(2\theta),\quad0<\theta<\pi.
\]
If \(u(1,\pi/4)=2\), then the value of \(k\) is equal to (round off to TWO decimal places).`,
    answer: { min: 7.99, max: 8.01 },
  },
];

export default test08;

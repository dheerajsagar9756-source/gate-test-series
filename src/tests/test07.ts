import type { TestQuestion } from "../testTypes";

const test07: TestQuestion[] = [
  {
    id: 1, marks: 1, type: "MCQ",
    question: "Ravi had ______ younger brother who taught at ______ university. He was widely regarded as ______ honorable man.\n\nSelect the option with the correct sequence of articles to fill in the blanks.",
    options: ["a; a; an", "the; an; a", "a; an; a", "an; an; a"],
    answer: "A",
  },
  {
    id: 2, marks: 1, type: "MCQ",
    question: "The CEO’s decision to downsize the workforce was considered myopic because it sacrificed long-term stability to accommodate short-term gains.\n\nSelect the most appropriate option that can replace the word “myopic” without changing the meaning of the sentence.",
    options: ["visionary", "shortsighted", "progressive", "innovative"],
    answer: "B",
  },
  {
    id: 3, marks: 1, type: "MCQ",
    question: "The average marks obtained by a class in an examination were calculated as 30.8. However, while checking the marks entered, the teacher found that the marks of one student were entered incorrectly as 24 instead of 42. After correcting the marks, the average becomes 31.4. How many students does the class have?",
    options: ["25", "28", "30", "32"],
    answer: "C",
  },
  {
    id: 4, marks: 1, type: "MCQ",
    question: "Consider the relationships among P, Q, R, S, and T:\n\n• P is the brother of Q.\n• S is the daughter of Q.\n• T is the sister of S.\n• R is the mother of Q.\n\nThe following statements are made based on the relationships given above.\n\n(1) R is the grandmother of S.\n(2) P is the uncle of S and T.\n(3) R has only one son.\n(4) Q has only one daughter.\n\nWhich one of the following options is correct?",
    options: ["Both (1) and (2) are true.", "Both (1) and (3) are true.", "Only (3) is true.", "Only (4) is true."],
    answer: "A",
  },
  {
    id: 5, marks: 1, type: "MCQ",
    question: "According to the map shown in the figure, which one of the following statements is correct?\n\nMap layout: Library and Canteen are on the 1st Main Road. Physics Lab is below the Library; Hospital is below the Canteen. Hostels are below the Physics Lab; Chemistry Lab is below the Hospital. Classrooms are below the Hostels. North is upward, East is right, West is left, and South is downward.\n\nNote: The figure shown is representative.",
    options: [
      "The library is located to the northwest of the canteen.",
      "The hospital is located to the east of the chemistry lab.",
      "The chemistry lab is to the southeast of physics lab.",
      "The classrooms and canteen are next to each other.",
    ],
    answer: "C",
  },
  {
    id: 6, marks: 2, type: "MCQ",
    question: "“I put the brown paper in my pocket along with the chalks, and possibly other things. I suppose every one must have reflected how primeval and how poetical are the things that one carries in one’s pocket: the pocket-knife, for instance the type of all human tools, the infant of the sword. Once I planned to write a book of poems entirely about the things in my pocket. But I found it would be too long: and the age of the great epics is past.”\n\n(From G.K. Chesterton’s “A Piece of Chalk”)\n\nBased only on the information provided in the above passage, which one of the following statements is true?",
    options: [
      "The author of the passage carries a mirror in his pocket to reflect upon things.",
      "The author of the passage had decided to write a poem on epics.",
      "The pocket-knife is described as the infant of the sword.",
      "Epics are described as too inconvenient to write.",
    ],
    answer: "C",
  },
  {
    id: 7, marks: 2, type: "MCQ",
    question: "In the diagram, the lines QR and ST are parallel to each other. The shortest distance between these two lines is half the shortest distance between the point P and line QR. What is the ratio of the area of the triangle PST to the area of the trapezium SQRT?\n\nNote: The figure shown is representative.",
    options: ["1/3", "1/4", "2/5", "1/2"],
    answer: "A",
  },
  {
    id: 8, marks: 2, type: "MCQ",
    question: "A fair six-faced dice, with the faces labelled ‘1’, ‘2’, ‘3’, ‘4’, ‘5’, and ‘6’, is rolled thrice. What is the probability of rolling ‘6’ exactly once?",
    options: ["75/216", "1/6", "1/18", "25/216"],
    answer: "A",
  },
  {
    id: 9, marks: 2, type: "MCQ",
    question: "A square paper, shown in figure (I), is folded along the dotted lines as shown in figures (II) and (III). Then a few cuts are made as shown in figure (IV). Which one of the following patterns will be obtained when the paper is unfolded?\n\n[Figure-based question: see the original GATE 2025 MA paper for the four folding/cutting diagrams.]",
    options: [
      "Pattern shown as option (A) in the original paper.",
      "Pattern shown as option (B) in the original paper.",
      "Pattern shown as option (C) in the original paper.",
      "Pattern shown as option (D) in the original paper.",
    ],
    answer: "A",
  },
  {
    id: 10, marks: 2, type: "MCQ",
    question: "A shop has 4 distinct flavors of ice-cream. One can purchase any number of scoops of any flavor. The order in which the scoops are purchased is inconsequential. If one wants to purchase 3 scoops of ice-cream, in how many ways can one make that purchase?",
    options: ["4", "20", "24", "48"],
    answer: "B",
  },

  {
    id: 11, marks: 1, type: "MCQ",
    question: String.raw`Let
\[
S=\left\{w=\begin{bmatrix}w_1\\w_2\\w_3\end{bmatrix}\in\mathbb{R}^3:
\begin{bmatrix}1&-3&2\end{bmatrix}
\begin{bmatrix}w_1&w_2&w_3\end{bmatrix}\text{ is diagonalizable and }\|w\|=1\right\},
\]
where \(\|w\|=(w_1^2+w_2^2+w_3^2)^{1/2}\). Then, which one of the following is TRUE?`,
    options: ["S is compact and connected", "S is neither compact nor connected", "S is compact but not connected", "S is connected but not compact"],
    answer: "B",
  },
  {
    id: 12, marks: 1, type: "MCQ",
    question: String.raw`Given that the Laplace transforms of \(J_0(x)\), \(J_0'(x)\) and \(J_0''(x)\) exist, where \(J_0(x)\) is the Bessel function. Let \(Y=Y(s)\) be the Laplace transform of \(J_0(x)\). Then, which one of the following is TRUE?`,
    options: [
      String.raw`\(\frac{dY}{ds}+\frac{2sY}{s^2+1}=0,\quad s>0\)`,
      String.raw`\(\frac{dY}{ds}-\frac{2sY}{s^2+1}=0,\quad s>0\)`,
      String.raw`\(\frac{dY}{ds}-\frac{sY}{s^2+1}=0,\quad s>0\)`,
      String.raw`\(\frac{dY}{ds}+\frac{sY}{s^2+1}=0,\quad s>0\)`,
    ],
    answer: "D",
  },
  {
    id: 13, marks: 1, type: "MCQ",
    question: String.raw`To find a real root of the equation \(x^3+4x^2-10=0\) in the interval \((1,\frac32)\) by using the fixed-point iteration scheme, consider the following two statements:

S1: The iteration scheme \(x_{k+1}=\sqrt{\frac{10}{4+x_k}}\), \(k=0,1,2,\ldots\), converges for any initial guess \(x_0\in(1,\frac32)\).

S2: The iteration scheme \(x_{k+1}=\frac12\sqrt{10-x_k^3}\), \(k=0,1,2,\ldots\), diverges for some initial guess \(x_0\in(1,\frac32)\).

Then, which one of the following is correct?`,
    options: ["S1 is TRUE and S2 is FALSE", "S2 is TRUE and S1 is FALSE", "both S1 and S2 are TRUE", "neither S1 nor S2 is TRUE"],
    answer: "A",
  },
  {
    id: 14, marks: 1, type: "MCQ",
    question: String.raw`For the linear programming problem:

Maximize \(Z=2x_1+4x_2+4x_3-3x_4\)

Subject to
\[
\alpha x_1+x_2+x_3=4,\qquad x_1+\beta x_2+x_4=8,\qquad x_1,x_2,x_3,x_4\ge0,
\]
consider the following two statements:

S1: If \(\alpha=2\) and \(\beta=1\), then \((x_1,x_2)^T\) forms an optimal basis.

S2: If \(\alpha=1\) and \(\beta=4\), then \((x_3,x_2)^T\) forms an optimal basis.

Then, which one of the following is correct?`,
    options: ["S1 is TRUE and S2 is FALSE", "S2 is TRUE and S1 is FALSE", "both S1 and S2 are TRUE", "neither S1 nor S2 is TRUE"],
    answer: "B",
  },
  {
    id: 15, marks: 1, type: "MCQ",
    question: String.raw`Consider the following subsets of the Euclidean space \(\mathbb{R}^4\):
\[
S=\{x\in\mathbb R^4:x_1^2+x_2^2+x_3^2-x_4^2=0\},
\]
\[
T=\{x\in\mathbb R^4:x_1^2+x_2^2+x_3^2-x_4^2=1\},
\]
\[
U=\{x\in\mathbb R^4:x_1^2+x_2^2+x_3^2-x_4^2=-1\}.
\]
Then, which one of the following is TRUE?`,
    options: ["S is connected, but T and U are not connected", "T and U are connected, but S is not connected", "S and U are connected, but T is not connected", "S and T are connected, but U is not connected"],
    answer: "D",
  },
  {
    id: 16, marks: 1, type: "MCQ",
    question: String.raw`Consider the system of ordinary differential equations \(\frac{dX}{dt}=MX\), where \(M\) is a \(6\times6\) skew-symmetric matrix with entries in \(\mathbb R\). Then, for this system, the origin is a stable critical point for`,
    options: ["any such matrix M", "only such matrices M whose rank is 2", "only such matrices M whose rank is 4", "only such matrices M whose rank is 6"],
    answer: "A",
  },
  {
    id: 17, marks: 1, type: "MCQ",
    question: String.raw`Let \(X=\{f\in C[0,1]:f(0)=0=f(1)\}\) with the norm \(\|f\|_\infty=\sup_{0\le t\le1}|f(t)|\). Let \(Y=C[0,1]\) with the norm \(\|f\|_2=(\int_0^1|f(t)|^2dt)^{1/2}\). Let \(U_X\) and \(U_Y\) be the closed unit balls in \(X\) and \(Y\) centred at the origin. Consider \(T:X\to\mathbb R\) and \(S:Y\to\mathbb R\) given by
\[
Tf=\int_0^1f(t)\,dt,\qquad Sf=\int_0^1f(t)\,dt.
\]
Consider:
S1: \(\sup_{f\in U_X}|Tf|\) is attained at a point of \(U_X\).
S2: \(\sup_{f\in U_Y}|Sf|\) is attained at a point of \(U_Y\).
Then, which one is correct?`,
    options: ["S1 is TRUE and S2 is FALSE", "S2 is TRUE and S1 is FALSE", "both S1 and S2 are TRUE", "neither S1 nor S2 is TRUE"],
    answer: "B",
  },
  {
    id: 18, marks: 1, type: "MCQ",
    question: String.raw`Let \(g(x,y)=f(x,y)e^{2x+3y}\) be defined in \(\mathbb R^2\), where \(f(x,y)\) is a continuously differentiable non-zero homogeneous function of degree 4. Then,
\[
x\frac{\partial g}{\partial x}+y\frac{\partial g}{\partial y}=0
\]
holds for`,
    options: ["all points (x,y) in R²", "all points (x,y) on the line 2x+3y+4=0", "all points in R² except on the line 2x+3y+4=0", "all points (x,y) on the line 2x+3y=0"],
    answer: "B",
  },
  {
    id: 19, marks: 1, type: "MCQ",
    question: String.raw`The partial differential equation
\[
(1+x^2)u_{xx}+2x(1-y^2)u_{xy}+(1-y^2)u_{yy}+xu_x+(1-y^2)u_y=0
\]
is`,
    options: [
      "elliptic in the region {(x,y)∈R² : |y|≤1}",
      "hyperbolic in the region {(x,y)∈R² : |y|>1}",
      "elliptic in the region {(x,y)∈R² : |y|>1}",
      "hyperbolic in the region {(x,y)∈R² : |y|<1}",
    ],
    answer: "B",
  },
  {
    id: 20, marks: 1, type: "MCQ",
    question: String.raw`Let \(u(x,t)\) be the solution of
\[
u_t-u_{xx}=0,\quad x\in(0,\pi),\ t>0,
\]
with \(u(0,t)=u(\pi,t)=0,\ u(x,0)=\sin4x\cos3x\). Then, for each \(t>0\), the value of \(u(\frac{\pi}{4},t)\) is`,
    options: [
      String.raw`\(\frac{e^{-49t}}{2\sqrt2}(e^{48t}-1)\)`,
      String.raw`\(\frac{e^{-49t}}{2\sqrt2}(1-e^{48t})\)`,
      String.raw`\(\frac{e^{-49t}}{2\sqrt2}(1+e^{48t})\)`,
      String.raw`\(\frac{e^{-49t}}{4\sqrt2}(1-e^{48t})\)`,
    ],
    answer: "A",
  },
  {
    id: 21, marks: 1, type: "MCQ",
    question: String.raw`Consider the function \(F:\mathbb R^2\to\mathbb R^2\) given by
\[
F(x,y)=(x^3-3xy^2-3x,\ 3x^2y-y^3-3y).
\]
Then, for the function \(F\), the inverse function theorem is`,
    options: ["applicable at all points of R²", "not applicable at exactly one point of R²", "not applicable at exactly two points of R²", "not applicable at exactly three points of R²"],
    answer: "C",
  },
  {
    id: 22, marks: 1, type: "MCQ",
    question: String.raw`Let \(f:\mathbb R^2\to\mathbb R\) and \(g:\mathbb R^2\to\mathbb R\) be given by
\[
f(x_1,x_2)=x_1^2+x_2^2-2x_1x_2,\qquad
g(x_1,x_2)=2x_1^2+2x_2^2-x_1x_2.
\]
Consider:
S1: For every compact subset \(K\) of \(\mathbb R\), \(f^{-1}(K)\) is compact.
S2: For every compact subset \(K\) of \(\mathbb R\), \(g^{-1}(K)\) is compact.
Then, which one is correct?`,
    options: ["S1 is TRUE and S2 is FALSE", "S2 is TRUE and S1 is FALSE", "both S1 and S2 are TRUE", "neither S1 nor S2 is TRUE"],
    answer: "B",
  },

  {
    id: 23, marks: 1, type: "MSQ",
    question: String.raw`Let \(p_A(x)\) denote the characteristic polynomial of a square matrix \(A\). Then, for which of the following invertible matrices \(M\), the polynomial \(p_M(x)-p_{M^{-1}}(x)\) is constant?`,
    options: [
      String.raw`\(M=\begin{bmatrix}5&7\\2&3\end{bmatrix}\)`,
      String.raw`\(M=\begin{bmatrix}3&1\\4&2\end{bmatrix}\)`,
      String.raw`\(M=\begin{bmatrix}1&3\\2&-1\end{bmatrix}\)`,
      String.raw`\(M=\begin{bmatrix}5&-8\\2&-3\end{bmatrix}\)`,
    ],
    answer: ["A","C","D"],
  },
  {
    id: 24, marks: 1, type: "MSQ",
    question: String.raw`Consider the balanced transportation problem with three sources \(S_1,S_2,S_3\), and four destinations \(D_1,D_2,D_3,D_4\), for minimizing the total transportation cost. The cost matrix is:
\[
\begin{array}{c|cccc|c}
& D_1&D_2&D_3&D_4&\text{Supply}\\
S_1&2&6&20&11&\alpha+10\\
S_2&12&7&4&10&\alpha+\lambda+10\\
S_3&8&14&16&11&5\\
\text{Demand}&\alpha+5&10&\lambda+5&\alpha+\lambda
\end{array}
\]
where \(\alpha,\lambda>0\). If the associated cost to the starting basic feasible solution obtained by using the North-West corner rule is 290, then which of the following is/are correct?`,
    options: [
      String.raw`\(\alpha^2+\lambda^2=100\)`,
      String.raw`\(\alpha^2+\alpha\lambda=150\)`,
      "The optimal cost of the transportation problem is 260",
      "The optimal cost of the transportation problem is 290",
    ],
    answer: ["B","D"],
  },
  {
    id: 25, marks: 1, type: "MSQ",
    question: String.raw`Consider the regions:
\[
S_1=\{(x_1,x_2)\in\mathbb R^2:2x_1+x_2\le4,\ x_1+2x_2\le5,\ x_1,x_2\ge0\},
\]
\[
S_2=\{(x_1,x_2)\in\mathbb R^2:2x_1-x_2\le5,\ x_1+2x_2\le5,\ x_1,x_2\ge0\}.
\]
Then, which of the following is/are TRUE?`,
    options: [
      "The maximum value of x₁+x₂ is 3 on the region S₂",
      "The maximum value of x₁+x₂ is 5 on the region S₂−S₁",
      "The maximum value of x₁+x₂ is 3 on the region S₁∩S₂",
      "The maximum value of x₁+x₂ is 4 on the region S₁∪S₂",
    ],
    answer: ["C","D"],
  },
  {
    id: 26, marks: 1, type: "MSQ",
    question: String.raw`Let \(f:\mathbb R^2\setminus\{(0,0)\}\to\mathbb R\) be defined by
\[
f(x,y)=\frac{x^2-y^2}{x^2+y^2}+x\sin\left(\frac1{x^2+y^2}\right).
\]
Consider:
S1: \(\lim_{x\to0}\lim_{y\to0}f(x,y)\) exists.
S2: \(\lim_{y\to0}\lim_{x\to0}f(x,y)\) exists.
S3: \(\lim_{(x,y)\to(0,0)}f(x,y)\) exists.
Then, which of the following is/are correct?`,
    options: [
      "S2 and S3 are TRUE and S1 is FALSE",
      "S1 and S2 are TRUE and S3 is FALSE",
      "S1 and S3 are TRUE and S2 is FALSE",
      "S1, S2 and S3 are all TRUE",
    ],
    answer: ["B"],
  },

  {
    id: 27, marks: 1, type: "NAT",
    question: String.raw`Let \(M\) be a \(7\times7\) matrix with entries in \(\mathbb R\) and characteristic polynomial
\[
c_M(x)=(x-1)^\alpha(x-2)^\beta(x-3)^2,\quad \alpha>\beta.
\]
Let \(\operatorname{rank}(M-I_7)=\operatorname{rank}(M-2I_7)=\operatorname{rank}(M-3I_7)=5\). If \(m_M(x)\) is the minimal polynomial of \(M\), then \(m_M(5)\) is equal to _____ (in integer).`,
    answer: 96,
  },
  {
    id: 28, marks: 1, type: "NAT",
    question: String.raw`Let \(y=P_n(x)\) be the unique polynomial of degree \(n\) satisfying
\[
(1-x^2)y''-2xy'+n(n+1)y=0,\qquad y(1)=1.
\]
Then, the value of \(P_{11}'(1)\) is equal to _____ (in integer).`,
    answer: 66,
  },
  {
    id: 29, marks: 1, type: "NAT",
    question: String.raw`Let \(\hat a\) be a unit vector parallel to the tangent at the point \(P(1,1,\sqrt2)\) to the curve of intersection of the surfaces \(2x^2+3y^2-z^2=3\) and \(x^2+y^2=z^2\). Then, the absolute value of the directional derivative of
\[
f(x,y,z)=x^2+2y^2-2\sqrt{11}\,z
\]
at \(P\) in the direction of \(\hat a\) is _____ (in integer).`,
    answer: 2,
  },
  {
    id: 30, marks: 1, type: "NAT",
    question: String.raw`The volume of the region bounded by the cylinders \(x^2+y^2=4\) and \(x^2+z^2=4\) is _____ (rounded off to TWO decimal places).`,
    answer: { min: 42.50, max: 42.70 },
  },
  {
    id: 31, marks: 1, type: "NAT",
    question: String.raw`Let \(W\) be the vector space (over \(\mathbb R\)) consisting of all bounded real-valued solutions of the differential equation
\[
\frac{d^4y}{dx^4}+2\frac{d^2y}{dx^2}+y=0.
\]
Then, the dimension of \(W\) is _____ (in integer).`,
    answer: 2,
  },
  {
    id: 32, marks: 1, type: "NAT",
    question: String.raw`Let \(\vec F=(y-z)\hat i+(z-x)\hat j+(x-y)\hat k\) be a vector field, and let \(S\) be the surface \(x^2+y^2+(z-1)^2=9,\ 1\le z\le4\). If \(\hat n\) denotes the unit outward normal vector to \(S\), then the value of
\[
\frac1\pi\left|\iint_S(\nabla\times\vec F)\cdot\hat n\,dS\right|
\]
is equal to _____ (in integer).`,
    answer: 18,
  },
  {
    id: 33, marks: 1, type: "NAT",
    question: String.raw`Consider
\[
I=\frac1{2\pi i}\oint_C\frac{\sin z}{1-\cos(z^3)}\,dz,
\]
where \(C=\{z\in\mathbb C:z=x+iy,\ |x|+|y|=1,\ x,y\in\mathbb R\}\) is oriented positively as a simple closed curve. Then, the value of \(120I\) is equal to _____ (in integer).`,
    answer: 2,
  },
  {
    id: 34, marks: 1, type: "NAT",
    question: String.raw`Let \(\alpha,\beta,\gamma,\delta\in\mathbb R\) be such that the quadrature formula
\[
\int_{-1}^{1}f(x)\,dx=\alpha f(-1)+\beta f(1)+\gamma f'(-1)+\delta f'(1)
\]
is exact for all polynomials of degree less than or equal to 3. Then \(9(\alpha^2+\beta^2+\gamma^2+\delta^2)\) is equal to _____ (in integer).`,
    answer: 20,
  },
  {
    id: 35, marks: 1, type: "NAT",
    question: String.raw`Let \(y(x)\) be the solution of the initial value problem
\[
\frac{dy}{dx}=\sin(\pi(x+y)),\qquad y(0)=0.
\]
Using Euler’s method, with the step-size \(h=0.5\), the approximate value of \(y(1.5)+2y(1)\) is equal to _____ (in integer).`,
    answer: 1,
  },

  {
    id: 36, marks: 2, type: "MCQ",
    question: String.raw`Consider the linear system \(A\mathbf x=\mathbf b\), where \(A=[a_{ij}]\), \(i,j=1,2,3\), and \(a_{ii}\ne0\). For \(D=\operatorname{diag}(a_{11},a_{22},a_{33})\), let
\[
D^{-1}A=\begin{bmatrix}1&1&-2\\3&1&2\\1&1&1\end{bmatrix},
\qquad
D^{-1}\mathbf b=\begin{bmatrix}4\\4\\1\end{bmatrix}.
\]
Consider:
S1: The approximation after one Jacobi iteration with \(\mathbf x_0=[1,1,1]^T\) is \(\mathbf x_1=[5,-1,-1]^T\).
S2: There exists an initial vector \(\mathbf x_0\) for which Jacobi iterative scheme diverges.
Then, which one is correct?`,
    options: ["S1 is TRUE and S2 is FALSE", "S2 is TRUE and S1 is FALSE", "both S1 and S2 are TRUE", "neither S1 nor S2 is TRUE"],
    answer: "C",
  },
  {
    id: 37, marks: 2, type: "MCQ",
    question: String.raw`Let \(y(x)\) be the solution of
\[
x^2y''+7xy'+9y=x^{-3}\log_e x,\qquad x>0,
\]
satisfying \(y(1)=0\) and \(y'(1)=0\). Then, the value of \(y(e)\) is equal to`,
    options: [String.raw`\(\frac13e^{-3}\)`, String.raw`\(\frac16e^{-3}\)`, String.raw`\(\frac23e^{-3}\)`, String.raw`\(\frac12e^{-3}\)`],
    answer: "B",
  },
  {
    id: 38, marks: 2, type: "MCQ",
    question: String.raw`Let \(y_1(x)\) and \(y_2(x)\) be the two linearly independent solutions of
\[
(1+x^2)y''-xy'+(\cos^2x)y=0,
\]
satisfying \(y_1(0)=3,\ y_1'(0)=-1,\ y_2(0)=-5,\ y_2'(0)=2\). Define
\[
W(x)=\left|\begin{matrix}y_1(x)&y_2(x)\\y_1'(x)&y_2'(x)\end{matrix}\right|.
\]
Then, the value of \(W(\frac12)\) is`,
    options: [String.raw`\(\frac{\sqrt5}{4}\)`, String.raw`\(\frac{\sqrt5}{2}\)`, String.raw`\(\frac2{\sqrt5}\)`, String.raw`\(\frac4{\sqrt5}\)`],
    answer: "B",
  },
  {
    id: 39, marks: 2, type: "MCQ",
    question: String.raw`Let \(C\) be the curve of intersection of the surfaces \(z^2=x^2+y^2\) and \(4x+z=7\). If \(P\) is a point on \(C\) at a minimum distance from the \(xy\)-plane, then the distance of \(P\) from the origin is`,
    options: [String.raw`\(\frac75\)`, String.raw`\(\frac{7\sqrt2}{5}\)`, String.raw`\(\frac{14}{5}\)`, String.raw`\(\frac{14\sqrt2}{5}\)`],
    answer: "B",
  },
  {
    id: 40, marks: 2, type: "MCQ",
    question: String.raw`Let \(u(x,t)\) be the solution of
\[
u_{tt}-9u_{xx}=0,\quad x\in\mathbb R,\ t>0,\quad u(x,0)=e^x,\quad u_t(x,0)=\sin x.
\]
Then, the value of \(u(\frac\pi2,\frac\pi6)\) is`,
    options: [
      String.raw`\(\frac12(e^\pi-\frac13)\)`,
      String.raw`\(\frac12(e^\pi+\frac13)\)`,
      String.raw`\(\frac12(e^\pi+\frac53)\)`,
      String.raw`\(\frac12(e^\pi-\frac53)\)`,
    ],
    answer: "C",
  },
  {
    id: 41, marks: 2, type: "MCQ",
    question: String.raw`Let \(T\) be the Möbius transformation that maps the points \(0,\frac12,1\) conformally onto the points \(-3,\infty,2\), respectively, in the extended complex plane. If \(T\) maps the circle centred at \(1\) with radius \(k\) onto a straight line given by \(\alpha x+\beta y+\gamma=0\), then the value of
\[
\frac{2k(\alpha+\beta)+\gamma}{\alpha+\beta-2k\gamma}
\]
is equal to`,
    options: ["1/7", "2/7", "1/3", "2/3"],
    answer: "A",
  },
  {
    id: 42, marks: 2, type: "MCQ",
    question: String.raw`Let \(U=\{z\in\mathbb C:\operatorname{Im}(z)>0\}\) and \(D=\{z\in\mathbb C:|z|<1\}\). Let \(S\) be the set of all bijective analytic functions \(f:U\to D\) such that \(f(i)=0\). Then, the value of \(\sup_{f\in S}|f(4i)|\) is`,
    options: ["0", "1/4", "1/2", "3/5"],
    answer: "D",
  },
  {
    id: 43, marks: 2, type: "MCQ",
    question: String.raw`Let \(\Omega\) be a non-empty open connected subset of \(\mathbb C\) and \(f:\Omega\to\mathbb C\) be a non-constant function. Define \(f^2(z)=(f(z))^2\) and \(f^3(z)=(f(z))^3\). Consider:
S1: If \(f\) is continuous in \(\Omega\) and \(f^2\) is analytic in \(\Omega\), then \(f\) is analytic in \(\Omega\).
S2: If \(f^2\) and \(f^3\) are analytic in \(\Omega\), then \(f\) is analytic in \(\Omega\).
Then, which one is correct?`,
    options: ["S1 is TRUE and S2 is FALSE", "S2 is TRUE and S1 is FALSE", "both S1 and S2 are TRUE", "neither S1 nor S2 is TRUE"],
    answer: "C",
  },
  {
    id: 44, marks: 2, type: "MCQ",
    question: String.raw`In the following, all subsets of Euclidean spaces are considered with the respective subspace topologies. Define an equivalence relation on
\[
S=\{(x_1,x_2,x_3)\in\mathbb R^3:x_1^2+x_2^2+x_3^2=1\}
\]
by \((x_1,x_2,x_3)\sim(y_1,y_2,y_3)\) if \(x_3=y_3\). Let \(X\) be the set of all equivalence classes. If \(X\) is provided with the quotient topology, then which one is TRUE?`,
    options: [
      "X is homeomorphic to {x∈R : −1≤x≤1}",
      "X is homeomorphic to {(x₁,x₂)∈R² : x₁²+x₂²=1}",
      "X is homeomorphic to {(x₁,x₂)∈R² : x₁²+x₂²≤1}",
      "X is homeomorphic to {(x₁,x₂,x₃)∈R³ : x₁²+x₂²=1 and −1≤x₃≤1}",
    ],
    answer: "A",
  },
  {
    id: 45, marks: 2, type: "MCQ",
    question: String.raw`Consider \(X=(C[-1,1],\|\cdot\|_\infty)\) and \(Y=(C[-1,1],\|\cdot\|_2)\), where
\[
\|f\|_\infty=\sup_{t\in[-1,1]}|f(t)|,\qquad
\|f\|_2=\left(\int_{-1}^1|f(t)|^2dt\right)^{1/2}.
\]
Let \(W\) be the linear span over \(\mathbb R\) of all the Legendre polynomials. Then, which one is correct?`,
    options: ["W is dense in X but not in Y", "W is dense in Y but not in X", "W is dense in both X and Y", "W is dense neither in X nor in Y"],
    answer: "C",
  },
  {
    id: 46, marks: 2, type: "MCQ",
    question: String.raw`Consider the metric spaces \(X=(\mathbb R,d_1)\) and \(Y=([0,1],d_2)\) with \(d_1(x,y)=|x-y|\) and \(d_2(x,y)=|x-y|\). Then, which one is TRUE?`,
    options: ["[0,1/4) is open in X but not in Y", "[0,1/4) is open in Y but not in X", "[0,1/4) is open in both X and Y", "[0,1/4) is open neither in X nor in Y"],
    answer: "B",
  },
  {
    id: 47, marks: 2, type: "MCQ",
    question: String.raw`Let \(K\) be an algebraically closed field containing a finite field \(F\). Let \(L\) be the subfield of \(K\) consisting of elements of \(K\) that are algebraic over \(F\). Consider:
S1: \(L\) is algebraically closed.
S2: \(L\) is infinite.
Then, which one of the following is correct?`,
    options: ["S1 is TRUE and S2 is FALSE", "S2 is TRUE and S1 is FALSE", "both S1 and S2 are TRUE", "neither S1 nor S2 is TRUE"],
    answer: "C",
  },

  {
    id: 48, marks: 2, type: "MSQ",
    question: String.raw`Let \(M_2(\mathbb R)\) be the vector space over \(\mathbb R\) of all \(2\times2\) matrices. Consider \(T:M_2(\mathbb R)\to M_2(\mathbb R)\) defined by \(T(X)=AXB\), where
\[
A=\begin{bmatrix}1&-2\\1&4\end{bmatrix},\qquad
B=\begin{bmatrix}6&5\\-2&-1\end{bmatrix}.
\]
If \(P\) is the matrix representation of \(T\) with respect to the standard basis of \(M_2(\mathbb R)\), which of the following is/are TRUE?`,
    options: ["P is an invertible matrix", "The trace of P is 25", String.raw`The rank of \(P^2-4I_4\) is 4`, String.raw`The nullity of \(P-2I_4\) is 0`],
    answer: ["A","B"],
  },
  {
    id: 49, marks: 2, type: "MSQ",
    question: String.raw`Consider the linear programming problem:
\[
\text{Maximize }Z=3x_1+5x_2
\]
subject to
\[
x_1+x_3=4,\quad 2x_2+x_4=12,\quad 3x_1+2x_2+x_5=18,\quad x_i\ge0.
\]
Given that \(x_B=(x_3,x_2,x_1)^T\) forms the optimal basis and
\[
B^{-1}=\begin{bmatrix}\alpha&\beta&-\beta\\0&\gamma&0\\0&-\beta&\beta\end{bmatrix},
\]
if \((p,q,r)\) is the optimal solution of the dual problem, which of the following is/are TRUE?`,
    options: [
      String.raw`\(\alpha+3\beta+2\gamma=3\)`,
      String.raw`\(\alpha-3\beta+4\gamma=1\)`,
      String.raw`\(p+q+r=\frac52\)`,
      String.raw`\(p^2+q^2+r^2=\frac{17}{4}\)`,
    ],
    answer: ["A","C"],
  },
  {
    id: 50, marks: 2, type: "MSQ",
    question: String.raw`Let \(0<\alpha<1\). Define
\[
C^\alpha[0,1]=\left\{f:[0,1]\to\mathbb R:\sup_{s\ne t}\frac{|f(t)-f(s)|}{|t-s|^\alpha}<\infty\right\}.
\]
It is given that \(C^\alpha[0,1]\) is a Banach space with its stated norm. If \(T:C^\alpha[0,1]\to C[0,1]\) is the map \(Tf=f\), which of the following is/are TRUE?`,
    options: ["T is a compact linear map", "Image of T is closed in C[0,1]", "Image of T is dense in C[0,1]", "T is not a bounded linear map"],
    answer: ["A","C"],
  },
  {
    id: 51, marks: 2, type: "MSQ",
    question: String.raw`Let \(u(x,t)\) solve
\[
u_t+3u_x=u,\quad u(x,0)=\cos x,
\]
and let \(v(x,t)\) solve
\[
v_t+3v_x=v^2,\quad v(x,0)=\cos x.
\]
Then, which of the following is/are TRUE?`,
    options: [
      String.raw`\(|u(x,t)|\le e^t\) for all \(x\in\mathbb R\) and \(t>0\)`,
      String.raw`\(v(x,1)\) is not defined for certain values of \(x\in\mathbb R\)`,
      String.raw`\(v(x,1)\) is not defined for any \(x\in\mathbb R\)`,
      String.raw`\(u(2\pi,\pi)=-e^\pi\)`,
    ],
    answer: ["A","B","D"],
  },
  {
    id: 52, marks: 2, type: "MSQ",
    question: String.raw`Let \(u(x,t)\) solve
\[
u_t=2u_{xx},\quad 0<x<1,\ t>0,
\]
with \(u(0,t)=u(1,t)=0,\ u(x,0)=2x(1-x)\). Then, which of the following is/are TRUE?`,
    options: [
      String.raw`\(0\le u(x,t)\le\frac14\) for all \(t\ge0,\ x\in[0,1]\)`,
      String.raw`\(u(x,t)=u(1-x,t)\) for all \(t\ge0,\ x\in[0,1]\)`,
      String.raw`\(\int_0^1(u(x,t))^2dx\) is a decreasing function of \(t\)`,
      String.raw`\(\int_0^1(u(x,t))^2dx\) is not a decreasing function of \(t\)`,
    ],
    answer: ["B","C"],
  },
  {
    id: 53, marks: 2, type: "MSQ",
    question: String.raw`Consider \(f:\mathbb R^2\to\mathbb R^2\) given by
\[
f(x,y)=(e^{2\pi x}\cos2\pi y,\ e^{2\pi x}\sin2\pi y).
\]
Then, which of the following is/are TRUE?`,
    options: [
      "If G is open in R², then f(G) is open in R²",
      "If G is closed in R², then f(G) is closed in R²",
      "If G is dense in R², then f(G) is dense in R²",
      "f is surjective",
    ],
    answer: ["A","C"],
  },
  {
    id: 54, marks: 2, type: "MSQ",
    question: String.raw`Let \(\{x_k\}_{k=1}^\infty\) be an orthonormal set in a real Hilbert space \(X\). Let \(Y=\operatorname{span}\{x_k\}_{k=1}^n\), and for \(x\in X\), let
\[
S_n(x)=\sum_{k=1}^n\langle x,x_k\rangle x_k.
\]
Then, which of the following is/are TRUE?`,
    options: [
      "Sₙ(x) is the orthogonal projection of x onto Y",
      "Sₙ(x) is the orthogonal projection of x onto Y⊥",
      "x−Sₙ(x) is orthogonal to Sₙ(x) for all x in X",
      String.raw`\(\sum_{k=1}^n|\langle x,x_k\rangle|^2=\|x\|^2\) for all x in X`,
    ],
    answer: ["A","C"],
  },
  {
    id: 55, marks: 2, type: "MSQ",
    question: String.raw`Consider the sequence of continuous functions on \([0,1]\) defined by
\[
f_1(x)=\frac{x}{2},\qquad
f_{n+1}(x)=f_n(x)-\frac12\left((f_n(x))^2-x\right),\quad n=1,2,3,\ldots.
\]
Then, which of the following is/are TRUE?`,
    options: [
      "The sequence {fₙ} converges pointwise but not uniformly on [0,1]",
      "The sequence {fₙ} converges uniformly on [0,1]",
      String.raw`\(\sqrt{x}-f_n(x)>\frac{2\sqrt{x}}{2+n\sqrt{x}}\) for all x∈[0,1] and n=1,2,3,…`,
      String.raw`\(0\le f_n(x)\le\sqrt{x}\) for all x∈[0,1] and n=1,2,3,…`,
    ],
    answer: ["B","D"],
  },
  {
    id: 56, marks: 2, type: "MSQ",
    question: String.raw`For \(x\in(0,\pi)\), let \(u_n(x)=\frac{\sin nx}{\sqrt n}\), \(n=1,2,3,\ldots\). Then, which of the following is/are TRUE?`,
    options: [
      "Σuₙ(x) converges uniformly on (0,π)",
      "Σuₙ'(x) converges uniformly on (0,π)",
      "Σuₙ(x) converges pointwise but not uniformly on (0,π)",
      "Σuₙ(x) converges uniformly on every compact subset of (0,π)",
    ],
    answer: ["C","D"],
  },
  {
    id: 57, marks: 2, type: "MSQ",
    question: String.raw`Let \(\mathbb R^1\) and \(\mathbb R^2\) be provided with their Euclidean topologies, and let
\[
S^1=\{(x_1,x_2)\in\mathbb R^2:x_1^2+x_2^2=1\}
\]
have the subspace topology. If \(f:S^1\to\mathbb R^1\) is a non-constant continuous function, then which of the following is/are TRUE?`,
    options: [
      "f maps closed sets to closed sets",
      "f is injective",
      "f is surjective",
      String.raw`There exists \(\lambda\in\mathbb R\) such that \(f(\cos\lambda,\sin\lambda)=f(-\cos\lambda,-\sin\lambda)\)`,
    ],
    answer: ["A","D"],
  },
  {
    id: 58, marks: 2, type: "MSQ",
    question: String.raw`Let \(X\) be an uncountable set. A subset \(U\subseteq X\) is open if \(X-U\) is empty, finite, or countable, and the empty set is open. Then, which of the following is/are TRUE?`,
    options: [
      "Every compact subset of X is closed",
      "Every closed subset of X is compact",
      "X is T₁ but not T₂ (Hausdorff)",
      "X is T₂ (Hausdorff)",
    ],
    answer: ["A","C"],
  },
  {
    id: 59, marks: 2, type: "MSQ",
    question: String.raw`All rings considered are associative and commutative with \(1\ne0\), and ring homomorphisms map 1 to 1. Consider:
P1: \(R\) is isomorphic to the product of two rings \(R_1\) and \(R_2\).
P2: There exist \(r_1,r_2\in R\) such that \(r_1^2=r_1\ne0\ne r_2=r_2^2,\ r_1r_2=0,\ r_1+r_2=1\).
P3: There exist proper nonzero ideals \(I_1,I_2\) with \(R=I_1+I_2\) and \(I_1\cap I_2=(0)\).
P4: There exist nonzero \(a,b\in R\) such that \(ab=0\).
Then, which of the following implications are TRUE?`,
    options: ["P1 ⇒ P2", "P2 ⇒ P3", "P3 ⇒ P4", "P4 ⇒ P1"],
    answer: ["A","B","C"],
  },
  {
    id: 60, marks: 2, type: "MSQ",
    question: String.raw`Let \(E\subset F\) and \(F\subset K\) be field extensions which are not algebraic. Let \(\alpha\in K\) be algebraic over \(F\) and \(\alpha\notin F\). Let \(L\) be the subfield of \(K\) generated over \(E\) by the coefficients of the monic polynomial of minimal degree over \(F\) which has \(\alpha\) as a zero. Then, which of the following is/are TRUE?`,
    options: [
      String.raw`\(F(\alpha)\supset L(\alpha)\) is a finite extension iff \(F\supset L\) is a finite extension`,
      String.raw`[L(\alpha):L]>[F(\alpha):F]`,
      String.raw`[L(\alpha):L]<[F(\alpha):F]`,
      String.raw`\(F(\alpha)\supset L(\alpha)\) is an algebraic extension iff \(F\supset L\) is an algebraic extension`,
    ],
    answer: ["A","D"],
  },

  {
    id: 61, marks: 2, type: "NAT",
    question: String.raw`Consider the inner product space of all real-valued continuous functions on \([-1,1]\) with
\[
\langle f,g\rangle=\int_{-1}^1f(x)g(x)\,dx.
\]
If \(p(x)=\alpha+\beta x^2-30x^4\), \(\alpha,\beta\in\mathbb R\), is orthogonal to all polynomials having degree less than or equal to 3, then \(\alpha+5\beta\) is equal to _____ (in integer).`,
    answer: 126,
  },
  {
    id: 62, marks: 2, type: "NAT",
    question: String.raw`For \(X=(x_1,x_2,x_3)^T\in\mathbb R^3\), consider
\[
Q(X)=2x_1^2+2x_2^2+3x_3^2+4x_1x_2+2x_1x_3+2x_2x_3.
\]
Let \(M\) be the symmetric matrix associated with \(Q\). For non-zero \(Y\), let
\[
a_n=\frac{Y^T(M+I_3)^{n+1}Y}{Y^T(M+I_3)^nY}.
\]
Then \(\lim_{n\to\infty}a_n\) is _____ (in integer).`,
    answer: 6,
  },
  {
    id: 63, marks: 2, type: "NAT",
    question: String.raw`Let \(\alpha,\beta\) be distinct non-zero real numbers, and let \(Q(z)\) be a polynomial of degree less than 5. If
\[
f(z)=\frac{\alpha^6\sin(\beta z)-\beta^6(e^{2\alpha z}-Q(z))}{z^6}
\]
satisfies Morera’s theorem in \(\mathbb C\setminus\{0\}\), then the value of \(\frac{\alpha}{4\beta}\) is equal to _____ (in integer).`,
    answer: 8,
  },
  {
    id: 64, marks: 2, type: "NAT",
    question: String.raw`Let \(G\) be a group with identity element \(e\), and let \(g,h\in G\) satisfy:
(i) \(g\ne e,\ g^2=e\);
(ii) \(h\ne e,\ h^2\ne e,\) and \(ghg^{-1}=h^2\).
Then, the least positive integer \(n\) for which \(h^n=e\) is _____ (in integer).`,
    answer: 3,
  },
  {
    id: 65, marks: 2, type: "NAT",
    question: String.raw`Let \((\mathbb R^2,d_1)\) and \((\mathbb R^2,d_2)\) be two metric spaces with
\[
d_1((x_1,x_2),(y_1,y_2))=|x_1-y_1|+|x_2-y_2|,
\]
\[
d_2((x_1,x_2),(y_1,y_2))=\frac{d_1((x_1,x_2),(y_1,y_2))}{1+d_1((x_1,x_2),(y_1,y_2))}.
\]
If the open ball centred at \((0,0)\) with radius \(1/7\) in \((\mathbb R^2,d_1)\) is equal to the open ball centred at \((0,0)\) with radius \(1/\alpha\) in \((\mathbb R^2,d_2)\), then the value of \(\alpha\) is _____ (in integer).`,
    answer: 8,
  },
];

export default test07;

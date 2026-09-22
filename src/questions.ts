export type QuestionType = "MCQ" | "MSQ" | "NAT";

export type Question = {
  id: number;
  marks: number;
  type: QuestionType;
  question: string;
  options?: string[];
  note?: string;
};

export const questions: Question[] = [
  {
    "id": 1,
    "marks": 2,
    "type": "MCQ",
    "question": "Two trains started at 7 AM from the same point. The first train travelled north at a speed of $80\\text{ km/h}$ and the second train travelled south at a speed of $100\\text{ km/h}$. The time at which they were $540\\text{ km}$ apart is \\underline{\\hspace{1cm}} AM.",
    "options": [
      "9",
      "10",
      "11",
      "11.30"
    ]
  },
  {
    "id": 2,
    "marks": 2,
    "type": "MCQ",
    "question": "The distance between Delhi and Agra is $233\\text{ km}$. A car $P$ started travelling from Delhi to Agra and another car $Q$ started from Agra to Delhi along the same road $1\\text{ hour}$ after the car $P$ started. The two cars crossed each other $75\\text{ minutes}$ after the car $Q$ started. Both cars were travelling at constant speed. The speed of car $P$ was $10\\text{ km/hr}$ more than the speed of car $Q$. How many kilometers the car $Q$ had travelled when the cars crossed each other?",
    "options": [
      "66.6",
      "75.82",
      "88.2",
      "116.5"
    ]
  },
  {
    "id": 3,
    "marks": 1,
    "type": "MCQ",
    "question": "The figure shows the front and rear view of a disc, which is shaded with identical patterns. The disc is flipped once with respect to any one of the fixed axes 1-1, 2-2 or 3-3 chosen uniformly at random.\n\nWhat is the probability that the disc DOES NOT retain the same front and rear views after the flipping operation?",
    "options": [
      "0",
      "$\\frac{1}{3}$",
      "$\\frac{2}{3}$",
      "1"
    ]
  },
  {
    "id": 4,
    "marks": 1,
    "type": "MCQ",
    "question": "Find the missing group of letters in the following series:\n$$\\text{BC, FGH, LMNO, \\underline{\\hspace{1.5cm}}}$$",
    "options": [
      "UVWXY",
      "TUVWX",
      "STUVW",
      "RSTUV"
    ]
  },
  {
    "id": 5,
    "marks": 2,
    "type": "MCQ",
    "question": "\"If you are looking for a history of India, or for an account of the rise and fall of the British Raj, or for the reason of the cleaving of the subcontinent into two mutually antagonistic parts and the effects this mutilation will have in the respective sections, and ultimately on Asia, you will not find it in these pages, for though I have spent a lifetime in the country. I lived too near the seat of events, and was too intimately associated with the actors, to get the perspective needed for the impartial recording of these matters.\"\n\nWhich of the following statements best reflects the author's opinion?",
    "options": [
      "An intimate association does not allow for the necessary perspective.",
      "Matters are recorded with an impartial perspective.",
      "An intimate association offers an impartial perspective.",
      "Actors are typically associated with the impartial recording of matters."
    ]
  },
  {
    "id": 6,
    "marks": 1,
    "type": "MCQ",
    "question": "The ninth and the tenth of this month are Monday and Tuesday \\underline{\\hspace{2cm}}.",
    "options": [
      "figuratively",
      "retrospectively",
      "respectively",
      "rightfully"
    ]
  },
  {
    "id": 7,
    "marks": 2,
    "type": "MCQ",
    "question": "\"I read somewhere that in ancient times the prestige of a kingdom depended upon the number of taxes that it was able to levy on its people. It was very much like the prestige of a head-hunter in his own community.\"\n\nBased on the paragraph above, the prestige of a head-hunter depended upon \\underline{\\hspace{2cm}}.",
    "options": [
      "the prestige of the kingdom",
      "the prestige of the heads",
      "the number of taxes he could levy",
      "the number of heads he could gather"
    ]
  },
  {
    "id": 8,
    "marks": 2,
    "type": "MCQ",
    "question": "Some people suggest anti-obesity measures (AOM) such as displaying calorie information in restaurant menus. Such measures sidestep addressing the core problems that cause obesity: poverty and income inequality. Which one of the following statements summarizes the passage?",
    "options": [
      "The proposed AOM addresses the core problems that cause obesity.",
      "If obesity reduces, poverty will naturally reduce, since obesity causes poverty.",
      "AOM are addressing the core problems and are likely to succeed.",
      "AOM are addressing the problem superficially."
    ]
  },
  {
    "id": 9,
    "marks": 1,
    "type": "MCQ",
    "question": "A polygon is convex if, for every pair of points, $P$ and $Q$ belonging to the polygon, the line segment $PQ$ lies completely inside or on the polygon. Which one of the following is NOT a convex polygon?",
    "note": "The supplied source text does not contain the figure or answer options for this question."
  },
  {
    "id": 10,
    "marks": 1,
    "type": "MCQ",
    "question": "Given below are two statements and four conclusions drawn based on the statements.\n\n\\textbf{Statement 1:} Some bottles are cups.\\\\\n\\textbf{Statement 2:} All cups are knives.\n\n\\textbf{Conclusion I:} Some bottles are knives.\\\\\n\\textbf{Conclusion II:} Some knives are cups.\\\\\n\\textbf{Conclusion III:} All cups are bottles.\\\\\n\\textbf{Conclusion IV:} All knives are cups.\n\nWhich one of the following options can be logically inferred?",
    "options": [
      "Only conclusion I and conclusion II are correct",
      "Only conclusion II and conclusion III are correct",
      "Only conclusion II and conclusion IV are correct",
      "Only conclusion III and conclusion IV are correct"
    ]
  },
  {
    "id": 11,
    "marks": 2,
    "type": "MCQ",
    "question": "Let $f : \\mathbb{R}^2 \\rightarrow \\mathbb{R}$ be defined by\n$$f(x, y) = \\begin{cases} (x^2 + y^2) \\sin\\left(\\frac{1}{x^2 + y^2}\\right), & \\text{if } (x, y) \\neq (0,0) \\\\ 0, & \\text{if } (x, y) = (0,0) \\end{cases}$$\n\nConsider the following statements:",
    "options": [
      "I and II only",
      "I and IV only",
      "IV only",
      "III only"
    ]
  },
  {
    "id": 12,
    "marks": 2,
    "type": "MCQ",
    "question": "The work done by the force $F = (x + y)\\hat{i} - (x^2 + y^2)\\hat{j}$, where $\\hat{i}$ and $\\hat{j}$ are unit vectors in $\\vec{OX}$ and $\\vec{OY}$ directions, respectively, along the upper half of the circle $x^2 + y^2 = 1$ from $(1, 0)$ to $(-1, 0)$ in the $xy$-plane is",
    "options": [
      "$-\\pi$",
      "$-\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{2}$",
      "$\\pi$"
    ]
  },
  {
    "id": 13,
    "marks": 2,
    "type": "NAT",
    "question": "Let $D = \\{(x, y) \\in \\mathbb{R}^2 : 1 \\leq x \\leq 1000, 1 \\leq y \\leq 1000\\}$. Define\n$$f(x, y) = \\frac{xy}{2} + \\frac{500}{x} + \\frac{500}{y}$$\nThen the minimum value of $f$ on $D$ is equal to \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 14,
    "marks": 2,
    "type": "MCQ",
    "question": "Let $\\gamma$ be the curve which passes through $(0, 1)$ and intersects each curve of the family $y = cx^2$ orthogonally. Then $\\gamma$ also passes through the point",
    "options": [
      "$(\\sqrt{2}, 0)$",
      "$(0, \\sqrt{2})$",
      "$(1, 1)$",
      "$(-1, 1)$"
    ]
  },
  {
    "id": 15,
    "marks": 1,
    "type": "MCQ",
    "question": "Let $D = [-1, 1] \\times [-1, 1]$. If the function $f : D \\rightarrow \\mathbb{R}$ is defined by\n$$f(x, y) = \\begin{cases} \\frac{x^2 - y^2}{(x^2 + y^2)^2}, & (x, y) \\neq (0, 0) \\\\ 0, & (x, y) = (0, 0) \\end{cases}$$\nthen",
    "options": [
      "$f$ is continuous at $(0, 0)$",
      "both the first order partial derivatives of $f$ exist at $(0, 0)$",
      "$\\iint_D |f(x, y)|^{1/2} \\, dx \\, dy$ is finite",
      "$\\iint_D |f(x, y)| \\, dx \\, dy$ is finite"
    ]
  },
  {
    "id": 16,
    "marks": 1,
    "type": "NAT",
    "question": "Let $u(x, y, z) = x^2 - 2y + 4z^2$ for $(x, y, z) \\in \\mathbb{R}^3$. Then the directional derivative of $u$ in the direction $\\frac{3}{5}\\hat{i} - \\frac{4}{5}\\hat{k}$ at the point $(5, 1, 0)$ is \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 17,
    "marks": 1,
    "type": "MCQ",
    "question": "Let $f, g : \\mathbb{R}^2 \\rightarrow \\mathbb{R}$ be defined by\n$$f(x, y) = x^2 - \\frac{3}{2}xy^2 \\quad \\text{and} \\quad g(x, y) = 4x^4 - 5x^2y + y^2$$\nfor all $(x, y) \\in \\mathbb{R}^2$.\n\nConsider the following statements:",
    "options": [
      "both P and Q are TRUE",
      "P is FALSE but Q is TRUE",
      "P is TRUE but Q is FALSE",
      "both P and Q are FALSE"
    ]
  },
  {
    "id": 18,
    "marks": 1,
    "type": "MCQ",
    "question": "Let $g : \\mathbb{R}^2 \\rightarrow \\mathbb{R}^2$ be a function defined by $g(x, y) = (e^x \\cos y, e^x \\sin y)$ and $(a, b) = g\\left(1, \\frac{\\pi}{3}\\right)$. ($\\mathbb{R}$ is the set of all real numbers and $\\mathbb{R}^2 = \\{(x, y) : x, y \\in \\mathbb{R}\\}$)\n\nWhich one of the following statements is TRUE?",
    "options": [
      "$g$ is injective",
      "If $h$ is the continuous inverse of $g$, defined in some neighbourhood of $(a, b) \\in \\mathbb{R}^2$, such that $h(a, b) = \\left(1, \\frac{\\pi}{3}\\right)$, then the Jacobian of $h$ at $(a, b)$ is $e^2$",
      "If $h$ is the continuous inverse of $g$, defined in some neighbourhood of $(a, b) \\in \\mathbb{R}^2$, such that $h(a, b) = \\left(1, \\frac{\\pi}{3}\\right)$, then the Jacobian of $h$ at $(a, b)$ is $e^{-2}$",
      "$g$ is surjective"
    ]
  },
  {
    "id": 19,
    "marks": 2,
    "type": "NAT",
    "question": "Let $A$ be a $3 \\times 3$ matrix with real entries. If three solutions of the linear system of differential equations $\\dot{x}(t) = Ax(t)$ are given by\n$$\\begin{bmatrix} e^t - e^{2t} \\\\ -e^t + e^{2t} \\\\ e^t + e^{2t} \\end{bmatrix}, \\quad \\begin{bmatrix} -e^{2t} - e^{-t} \\\\ e^{2t} - e^{-t} \\\\ e^{2t} + e^{-t} \\end{bmatrix} \\quad \\text{and} \\quad \\begin{bmatrix} e^{-t} + 2e^t \\\\ e^{-t} - 2e^t \\\\ -e^{-t} + 2e^t \\end{bmatrix}$$\nthen the sum of the diagonal entries of $A$ is equal to \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 20,
    "marks": 2,
    "type": "NAT",
    "question": "Let $A = [a_{ij}]$ be a $3 \\times 3$ real matrix such that\n$$A \\begin{bmatrix} 1 \\\\ 2 \\\\ 1 \\end{bmatrix} = 2 \\begin{bmatrix} 1 \\\\ 2 \\\\ 1 \\end{bmatrix}, \\quad A \\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\end{bmatrix} = 2 \\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\end{bmatrix} \\quad \\text{and} \\quad A \\begin{bmatrix} -1 \\\\ 1 \\\\ 0 \\end{bmatrix} = 4 \\begin{bmatrix} -1 \\\\ 1 \\\\ 0 \\end{bmatrix}$$\nIf $m$ is the degree of the minimal polynomial of $A$, then $a_{11} + a_{21} + a_{31} + m$ equals \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 21,
    "marks": 1,
    "type": "MCQ",
    "question": "Consider a real vector space $V$ of dimension $n$ and a non-zero linear transformation $T : V \\rightarrow V$. If $\\dim(T(V)) < n$ and $T^2 = \\lambda T$, for some $\\lambda \\in \\mathbb{R} \\setminus \\{0\\}$, then which of the following statements is TRUE?",
    "options": [
      "$\\det(T) = |\\lambda^n|$",
      "There exists a non-trivial subspace $V_1$ of $V$ such that $T(X) = 0$ for all $X \\in V_1$",
      "$T$ is invertible.",
      "$\\lambda$ is the only eigenvalue of $T$"
    ]
  },
  {
    "id": 22,
    "marks": 1,
    "type": "NAT",
    "question": "Let $A$ be a $7 \\times 7$ matrix such that $2A^2 - A^4 = I$, where $I$ is the identity matrix. If $A$ has two distinct eigenvalues and each eigenvalue has geometric multiplicity 3, then the total number of nonzero entries in the Jordan canonical form of $A$ equals \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 23,
    "marks": 2,
    "type": "MCQ",
    "question": "Let $D \\subset \\mathbb{R}^2$ denote the closed disc with center at the origin and radius 2. Then\n$$\\iint_D e^{-(x^2 + y^2)} \\, dx \\, dy =$$",
    "options": [
      "$\\pi (1 - e^{-4})$",
      "$\\frac{\\pi}{2} (1 - e^{-4})$",
      "$\\pi (1 - e^{-2})$",
      "$\\frac{\\pi}{2} (1 - e^{-2})$"
    ]
  },
  {
    "id": 24,
    "marks": 2,
    "type": "NAT",
    "question": "Let $\\sum_{n=-\\infty}^{\\infty} a_n z^n$ be the Laurent series expansion of $f(z) = \\frac{1}{2z^2 - 13z + 15}$ in the annulus $\\frac{3}{2} < |z| < 5$. Then $\\frac{a_1}{a_2}$ is equal to \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 25,
    "marks": 1,
    "type": "NAT",
    "question": "Let\n$$\\alpha = \\int_C \\frac{e^{i\\pi z}}{2z^2 - 5z + 2} \\, dz, \\quad C: \\cos t + i \\sin t, \\, 0 \\leq t \\leq 2\\pi, \\, i = \\sqrt{-1}$$\nThen the greatest integer less than or equal to |\\alpha| is \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 26,
    "marks": 1,
    "type": "MCQ",
    "question": "Let $P(x) = 1 + e^{2\\pi i x} + 2e^{3\\pi i x}, \\, x \\in \\mathbb{R}, \\, i = \\sqrt{-1}$. Then\n$$\\lim_{N \\rightarrow \\infty} \\frac{1}{N} \\sum_{k=0}^{N-1} P(k\\sqrt{2})$$\nis equal to",
    "options": [
      "0",
      "1",
      "3",
      "4"
    ]
  },
  {
    "id": 27,
    "marks": 2,
    "type": "NAT",
    "question": "Let $\\alpha$ and $\\beta$ with $\\alpha > \\beta$ be the roots of the indicial equation of $(x^2 - 1)\\frac{d^2y}{dx^2} + (x - 1)\\frac{dy}{dx} - y = 0$ at $x = -1$. Then $\\alpha - 4\\beta$ equals \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 28,
    "marks": 2,
    "type": "MCQ",
    "question": "The solution to the initial value problem $\\frac{d^2y}{dt^2} + 2\\frac{dy}{dt} + 5y = 3e^{-t} \\sin t$, $y(0) = 0$ and $\\frac{dy}{dt}(0) = 3$, is",
    "options": [
      "$y(t) = e^t (\\sin t + \\sin 2t)$",
      "$y(t) = e^{-t} (\\sin t + \\sin 2t)$",
      "$y(t) = 3e^t \\sin t$",
      "$y(t) = 3e^{-t} \\sin t$"
    ]
  },
  {
    "id": 29,
    "marks": 2,
    "type": "NAT",
    "question": "For every $k \\in \\mathbb{N} \\cup \\{0\\}$, let $y_k(x)$ be a polynomial of degree $k$ with $y_k(1) = 5$.\n\nFurther, let $y_k(x)$ satisfy the Legendre equation\n$$(1 - x^2) y'' - 2x y' + k(k + 1) y = 0$$\n\nIf\n$$\\frac{1}{2} \\int_{-1}^1 \\sum_{k=1}^n (y_k(x) - y_{k-1}(x))^2 \\, dx - \\int_{-1}^1 \\sum_{k=1}^n (y_k(x))^2 \\, dx = 24$$\nfor some positive integer $n$, then the value of $n$ is \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 30,
    "marks": 1,
    "type": "MCQ",
    "question": "The eigenvalues of the boundary value problem $\\frac{d^2y}{dx^2} + \\lambda y = 0$, $x \\in (0, \\pi)$, $\\lambda > 0$, $y(0) = 0$, $\\lambda y(\\pi) - \\frac{dy}{dx}(\\pi) = 0$ are given by",
    "options": [
      "$\\lambda = (n\\pi)^2, \\, n = 1, 2, 3\\dots$",
      "$\\lambda = n^2, \\, n = 1, 2, 3\\dots$",
      "$\\lambda = k_n^2$, where $k_n > 0$ for $n = 1, 2, 3\\dots$ are the roots of $k - \\tan(k\\pi) = 0$",
      "$\\lambda = k_n^2$, where $k_n > 0$ for $n = 1, 2, 3\\dots$ are the roots of $k + \\tan(k\\pi) = 0$"
    ]
  },
  {
    "id": 31,
    "marks": 1,
    "type": "MCQ",
    "question": "The solution to the integral equation $\\varphi(x) = x + \\int_0^x \\sin(x - \\xi) \\varphi(\\xi) \\, d\\xi$ is",
    "options": [
      "$x^2 + \\frac{x^3}{3}$",
      "$x - \\frac{x^3}{3!}$",
      "$x + \\frac{x^3}{3!}$",
      "$x^2 - \\frac{x^3}{3!}$"
    ]
  },
  {
    "id": 32,
    "marks": 2,
    "type": "NAT",
    "question": "Consider the differential equation\n$$t \\frac{d^2y}{dt^2} + 2 \\frac{dy}{dt} + ty = 0, \\quad t > 0, \\quad y(0^+) = 1, \\quad \\left(\\frac{dy}{dt}\\right)_{t=0^+} = 0$$\nIf $Y(s)$ is the Laplace transform of $y(t)$, then the value of $Y(1)$ is \\underline{\\hspace{1.5cm}} (round off to 2 decimal places)."
  },
  {
    "id": 33,
    "marks": 2,
    "type": "MCQ",
    "question": "Consider the following statements:",
    "options": [
      "I, II and III only",
      "I and III only",
      "I, II and IV only",
      "II and III only"
    ]
  },
  {
    "id": 34,
    "marks": 1,
    "type": "MCQ",
    "question": "In the permutation group $S_6$, the number of elements of order 8 is",
    "options": [
      "0",
      "1",
      "2",
      "4"
    ]
  },
  {
    "id": 35,
    "marks": 2,
    "type": "MCQ",
    "question": "Consider the polynomial $p(X) = X^4 + 4$ in the ring $\\mathbb{Q}[X]$ of polynomials in the variable $X$ with coefficients in the field $\\mathbb{Q}$ of rational numbers. Then",
    "options": [
      "the set of zeros of $p(X)$ in $\\mathbb{C}$ forms a group under multiplication",
      "$p(X)$ is reducible in the ring $\\mathbb{Q}[X]$",
      "the splitting field of $p(X)$ has degree 3 over $\\mathbb{Q}$",
      "the splitting field of $p(X)$ has degree 4 over $\\mathbb{Q}$"
    ]
  },
  {
    "id": 36,
    "marks": 2,
    "type": "MSQ",
    "question": "Let $\\{e_n\\}_{n=1}^{\\infty}$ be an orthonormal basis for a separable Hilbert space $H$ with the inner product $\\langle \\cdot, \\cdot \\rangle$. Define\n$$f_n = e_n - \\frac{1}{n+1} e_{n+1} \\quad \\text{for } n \\in \\mathbb{N}$$\nThen",
    "options": [
      "the closure of the span $\\{f_n : n \\in \\mathbb{N}\\}$ equals $H$",
      "$f = 0$ if $\\langle f, f_n \\rangle = \\langle f, e_n \\rangle$ for all $n \\in \\mathbb{N}$",
      "$\\{f_n\\}_{n=1}^{\\infty}$ is an orthogonal subset of $H$.",
      "there does not exist nonzero $f \\in H$ such that $\\langle f, e_2 \\rangle = \\langle f, f_2 \\rangle$"
    ]
  },
  {
    "id": 37,
    "marks": 1,
    "type": "NAT",
    "question": "Let $T : (C[0, 1], \\|\\cdot\\|_\\infty) \\rightarrow \\mathbb{R}$ be defined by $T(f) = \\int_0^1 2x f(x) \\, dx$ for all $f \\in C[0, 1]$. Then $\\|T\\|$ is equal to \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 38,
    "marks": 2,
    "type": "MCQ",
    "question": "Consider the subspace $Y = \\{(x, x) : x \\in \\mathbb{C}\\}$ of the normed linear space $(\\mathbb{C}^2, \\|\\cdot\\|_\\infty)$. If $\\phi$ is a bounded linear functional on $Y$, defined by $\\phi(x, x) = x$, then which one of the following sets is equal to\n$$\\{\\psi(1, 0) : \\psi \\text{ is a norm-preserving extension of } \\phi \\text{ to } (\\mathbb{C}^2, \\|\\cdot\\|_\\infty)\\}$$\n($\\mathbb{C}$ is the set of all complex numbers, $\\mathbb{C}^2 = \\{(x, y) : x, y \\in \\mathbb{C}\\}$ and $\\|(x_1, x_2)\\|_\\infty = \\sup \\{|x_1|, |x_2|\\}$)",
    "options": [
      "$\\{1\\}$",
      "$\\left[\\frac{1}{2}, \\frac{3}{2}\\right]$",
      "$[1, \\infty)$",
      "$[0, 1]$"
    ]
  },
  {
    "id": 39,
    "marks": 2,
    "type": "NAT",
    "question": "The quadrature formula\n$$\\int_0^2 x f(x) \\, dx \\approx \\alpha f(0) + \\beta f(1) + \\gamma f(2)$$\nis exact for all polynomials of degree $\\leq 2$.Then $2\\beta - \\gamma$ = __________." 
  },
  {
    "id": 40,
    "marks": 2,
    "type": "NAT",
    "question": "Let the following discrete data be obtained from a curve $y = y(x)$:\n$$\\begin{array}{cccccc}\nx : & 0 & 0.25 & 0.5 & 0.75 & 1.0 \\\\\ny : & 1 & 0.9896 & 0.9589 & 0.9089 & 0.8415\n\\end{array}$$\nLet $S$ be the solid of revolution obtained by rotating the above curve about the $x$-axis between $x = 0$ and $x = 1$ and let $V$ denote its volume. The approximate value of $V$, obtained using Simpson's $\\frac{1}{3}$ rule, is \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 41,
    "marks": 1,
    "type": "NAT",
    "question": "If the fourth-order divided difference of $f(x) = \\alpha x^4 + 5x^3 + 3x + 2$, $\\alpha \\in \\mathbb{R}$ at the points 0.1, 0.2, 0.3, 0.4, 0.5 is 5, then $\\alpha$ equals \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 42,
    "marks": 2,
    "type": "NAT",
    "question": "Let $\\Omega$ be the disk $x^2 + y^2 < 4$ in $\\mathbb{R}^2$ with boundary $\\partial \\Omega$. If $u(x, y)$ is the solution of the Dirichlet problem\n$$\\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0, \\quad (x, y) \\in \\Omega$$\n$$u(x, y) = 1 + 2x^2, \\quad (x, y) \\in \\partial\\Omega$$\nthen the value of $u(0, 1)$ is \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 43,
    "marks": 2,
    "type": "MCQ",
    "question": "If the characteristic curves of the partial differential equation $x u_{xx} + 2x^2 u_{xy} = u_x - 1$ are $\\mu(x, y) = c_1$ and $\\nu(x, y) = c_2$, where $c_1$ and $c_2$ are constants, then",
    "options": [
      "$\\mu(x, y) = x^2 - y, \\quad \\nu(x, y) = y$",
      "$\\mu(x, y) = x^2 + y, \\quad \\nu(x, y) = y$",
      "$\\mu(x, y) = x^2 + y, \\quad \\nu(x, y) = x^2$",
      "$\\mu(x, y) = x^2 - y, \\quad \\nu(x, y) = x^2$"
    ]
  },
  {
    "id": 44,
    "marks": 2,
    "type": "NAT",
    "question": "Let $u(x, y)$ be the solution of the first-order partial differential equation\n$$x \\frac{\\partial u}{\\partial x} + (x^2 + y) \\frac{\\partial u}{\\partial y} = u, \\quad \\text{for all } x, y \\in \\mathbb{R}$$\nsatisfying $u(2, y) = y - 4, \\, y \\in \\mathbb{R}$. Then, the value of $u(1, 2)$ is \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 45,
    "marks": 1,
    "type": "MCQ",
    "question": "If $u(x, y) = 1 + x + y + f(xy)$, where $f : \\mathbb{R}^2 \\rightarrow \\mathbb{R}$ is a differentiable function, then $u$ satisfies",
    "options": [
      "$x \\frac{\\partial u}{\\partial x} - y \\frac{\\partial u}{\\partial y} = x^2 - y^2$",
      "$x \\frac{\\partial u}{\\partial x} - y \\frac{\\partial u}{\\partial y} = 0$",
      "$x \\frac{\\partial u}{\\partial x} - y \\frac{\\partial u}{\\partial y} = x - y$",
      "$y \\frac{\\partial u}{\\partial x} - x \\frac{\\partial u}{\\partial y} = x - y$"
    ]
  },
  {
    "id": 46,
    "marks": 1,
    "type": "NAT",
    "question": "Let $u(x, t)$ be the d'Alembert's solution of the initial value problem for the wave equation\n$$U_{tt} - c^2 U_{xx} = 0$$\n$$u(x, 0) = f(x), \\quad u_t(x, 0) = g(x)$$\nwhere $c$ is a positive real number and $f, g$ are smooth odd functions. Then, $u(0, 1)$ is equal to \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 47,
    "marks": 1,
    "type": "MCQ",
    "question": "The family of surfaces given by $u = xy + f(x^2 - y^2)$, where $f : \\mathbb{R} \\rightarrow \\mathbb{R}$ is a differentiable function, satisfies",
    "options": [
      "$y \\frac{\\partial u}{\\partial x} + x \\frac{\\partial u}{\\partial y} = x^2 + y^2$",
      "$x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = x^2 + y^2$",
      "$y \\frac{\\partial u}{\\partial x} + x \\frac{\\partial u}{\\partial y} = x^2 - y^2$",
      "$x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = x^2 - y^2$"
    ]
  },
  {
    "id": 48,
    "marks": 2,
    "type": "MCQ",
    "question": "Let $\\mathbb{R}$ denote the set of all real numbers. Consider the following topological spaces:\n$$X_1 = (\\mathbb{R}, T_1), \\text{ where } T_1 \\text{ is the upper limit topology having all sets } (a, b] \\text{ as basis.}$$\n$$X_2 = (\\mathbb{R}, T_2), \\text{ where } T_2 = \\{U \\subset \\mathbb{R} : \\mathbb{R} \\setminus U \\text{ is finite}\\} \\cup \\{\\phi\\}.$$\nThen",
    "options": [
      "both $X_1$ and $X_2$ are connected.",
      "$X_1$ is connected and $X_2$ is NOT connected.",
      "$X_1$ is NOT connected and $X_2$ is connected.",
      "neither $X_1$ nor $X_2$ is connected."
    ]
  },
  {
    "id": 49,
    "marks": 2,
    "type": "MCQ",
    "question": "Let $X$ denote $\\mathbb{R}^2$ endowed with the usual topology. Let $Y$ denote $\\mathbb{R}$ endowed with the co-finite topology. If $Z$ is the product topological space $Y \\times Y$, then",
    "options": [
      "the topology of $X$ is the same as the topology of $Z$",
      "the topology of $X$ is strictly coarser (weaker) than that of $Z$",
      "the topology of $Z$ is strictly coarser (weaker) than that of $X$",
      "the topology of $X$ cannot be compared with that of $Z$"
    ]
  },
  {
    "id": 50,
    "marks": 2,
    "type": "MCQ",
    "question": "Let $f : X \\rightarrow Y$ be a continuous map from a Hausdorff topological space $X$ to a metric space $Y$. Consider the following two statements:",
    "options": [
      "Q implies P but P does NOT imply Q",
      "P implies Q but Q does NOT imply P",
      "P and Q are equivalent",
      "neither P implies Q nor Q implies P"
    ]
  },
  {
    "id": 51,
    "marks": 1,
    "type": "MCQ",
    "question": "Let $\\mathbb{R}^3$ be a topological space with the usual topology and $\\mathbb{Q}$ denote the set of rational numbers. Define the subspaces $X, Y, Z$ and $W$ of $\\mathbb{R}^3$ as follows:\n$$X = \\{(x, y, z) \\in \\mathbb{R}^3 : |x| + |y| + |z| \\in \\mathbb{Q}\\}$$\n$$Y = \\{(x, y, z) \\in \\mathbb{R}^3 : xyz = 1\\}$$\n$$Z = \\{(x, y, z) \\in \\mathbb{R}^3 : x^2 + y^2 + z^2 = 1\\}$$\n$$W = \\{(x, y, z) \\in \\mathbb{R}^3 : xyz = 0\\}$$\n\nWhich of the following statements is correct?",
    "options": [
      "$X$ is homeomorphic to $Y$",
      "$Z$ is homeomorphic to $W$",
      "$Y$ is homeomorphic to $W$",
      "$X$ is NOT homeomorphic to $W$"
    ]
  },
  {
    "id": 52,
    "marks": 1,
    "type": "MCQ",
    "question": "Let $T_1$ be the co-countable topology on $\\mathbb{R}$ and $T_2$ be the co-finite topology on $\\mathbb{R}$.\n\nConsider the following statements:",
    "options": [
      "I and II only",
      "II and III only",
      "III and IV only",
      "I and IV only"
    ]
  },
  {
    "id": 53,
    "marks": 1,
    "type": "MCQ",
    "question": "Consider ([0, 1], $T_1$), where $T_1$ is the subspace topology induced by the Euclidean topology on $\\mathbb{R}$, and let $T_2$ be any topology on [0, 1]. Consider the following statements:",
    "options": [
      "P is TRUE and Q is FALSE",
      "Both P and Q are TRUE",
      "Both P and Q are FALSE",
      "P is FALSE and Q is TRUE"
    ]
  },
  {
    "id": 54,
    "marks": 1,
    "type": "MCQ",
    "question": "Let $X$ and $Y$ be two topological spaces. A continuous map $f : X \\rightarrow Y$ is said to be proper if $f^{-1}(K)$ is compact in $X$ for every compact subset $K$ of $Y$, where $f^{-1}(K) = \\{x \\in X : f(x) \\in K\\}$.\n\nConsider $\\mathbb{R}$ with the usual topology. If $\\mathbb{R} \\setminus \\{0\\}$ has the subspace topology induced from $\\mathbb{R}$ and $\\mathbb{R} \\times \\mathbb{R}$ has the product topology, then which of the following maps is proper?",
    "options": [
      "$f : \\mathbb{R} \\setminus \\{0\\} \\rightarrow \\mathbb{R}$ defined by $f(x) = x$",
      "$f : \\mathbb{R} \\times \\mathbb{R} \\rightarrow \\mathbb{R} \\times \\mathbb{R}$ defined by $f(x, y) = (x + y, y)$",
      "$f : \\mathbb{R} \\times \\mathbb{R} \\rightarrow \\mathbb{R}$ defined by $f(x, y) = x$",
      "$f : \\mathbb{R} \\times \\mathbb{R} \\rightarrow \\mathbb{R}$ defined by $f(x, y) = x^2 - y^2$"
    ]
  },
  {
    "id": 55,
    "marks": 2,
    "type": "MCQ",
    "question": "Let $\\alpha, \\beta \\in \\mathbb{R}, \\alpha \\neq 0$. The system\n\\begin{align*}\n    x_1 - 2x_2 + \\alpha x_3 &= 8 \\\\\n    x_1 - x_2 + x_4 &= \\beta \\\\\n    x_1, x_2, x_3, x_4 &\\geq 0\n\\end{align*}\nhas NO basic feasible solution if",
    "options": [
      "$\\alpha < 0, \\beta > 8$",
      "$\\alpha > 0, 0 < \\beta < 8$",
      "$\\alpha > 0, \\beta < 0$",
      "$\\alpha < 0, \\beta < 8$"
    ]
  },
  {
    "id": 56,
    "marks": 1,
    "type": "MCQ",
    "question": "If (D1) and (D2) denote the dual problems of the linear programming problems (P1) and (P2), respectively, where\\\\\n(P1): minimize $x_1 - 2x_2$ subject to $-x_1 + x_2 = 10, \\, x_1, x_2 \\geq 0$\\\\\n(P2): minimize $x_1 - 2x_2$ subject to $-x_1 + x_2 = 10, \\, x_1 - x_2 = 10, \\, x_1, x_2 \\geq 0$\\\\\nthen",
    "options": [
      "both (D1) and (D2) are infeasible.",
      "(P2) is infeasible and (D2) is feasible.",
      "(D1) is infeasible and (D2) is feasible but unbounded.",
      "(P1) is feasible but unbounded and (D1) is feasible."
    ]
  },
  {
    "id": 57,
    "marks": 1,
    "type": "MCQ",
    "question": "For a linear programming problem, which one of the following statements is FALSE?",
    "options": [
      "If a constraint is an equality, then the corresponding dual variable is unrestricted in sign",
      "Both primal and its dual can be infeasible",
      "If primal is unbounded, then its dual is infeasible",
      "Even if both primal and dual are feasible, the optimal values of the primal and the dual can differ"
    ]
  },
  {
    "id": 58,
    "marks": 2,
    "type": "NAT",
    "question": "Let $X_1 = 1, X_2 = 1, X_3 = 1, X_4 = 2, X_5 = 2, X_6 = 2$ be a random sample from a Poisson random variable with mean $\\theta$, where $\\theta \\in \\{1, 2\\}$. Then, the maximum likelihood estimator of $\\theta$ is equal to \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 59,
    "marks": 2,
    "type": "MCQ",
    "question": "Let $\\{X_i\\}$ be a sequence of independent Poisson($\\lambda$) variables and let $W_n = \\frac{1}{n} \\sum_{i=1}^n X_i$. Then the limiting distribution of $\\sqrt{n}(W_n - \\lambda)$ is the normal distribution with zero mean and variance given by",
    "options": [
      "1",
      "$\\sqrt{\\lambda}$",
      "$\\lambda$",
      "$\\lambda^2$"
    ]
  },
  {
    "id": 60,
    "marks": 1,
    "type": "MCQ",
    "question": "Let $X_1, X_2, \\dots, X_n \\, (n \\geq 2)$ be independent and identically distributed random variables with finite variance $\\sigma^2$ and let $\\bar{X} = \\frac{1}{n} \\sum_{i=1}^n X_i$. Then the covariance between $\\bar{X}$ and $X_1 - \\bar{X}$ is",
    "options": [
      "0",
      "$-\\sigma^2$",
      "$-\\frac{\\sigma^2}{n}$",
      "$\\frac{\\sigma^2}{n}$"
    ]
  },
  {
    "id": 61,
    "marks": 1,
    "type": "NAT",
    "question": "Let $\\{X_j\\}$ be a sequence of independent Bernoulli random variables with $P(X_j = 1) = 1/4$ and let $Y_n = \\frac{1}{n} \\sum_{j=1}^n X_j^2$. Then $Y_n$ converges, in probability, to \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 62,
    "marks": 2,
    "type": "MCQ",
    "question": "Define $f_1, f_2 : [0, 1] \\rightarrow \\mathbb{R}$ by\n$$f_1(x) = \\sum_{n=1}^\\infty \\frac{x \\sin(n^2 x)}{n^2} \\quad \\text{and} \\quad f_2(x) = \\sum_{n=1}^\\infty x^2 (1 - x^2)^{n-1}$$\nThen",
    "options": [
      "$f_1$ is continuous but $f_2$ is NOT continuous",
      "$f_2$ is continuous but $f_1$ is NOT continuous",
      "both $f_1$ and $f_2$ are continuous",
      "neither $f_1$ nor $f_2$ is continuous"
    ]
  },
  {
    "id": 63,
    "marks": 2,
    "type": "MCQ",
    "question": "Let\n$$f_n(x) = \\frac{x^2}{x^2 + (1 - nx)^2}, \\quad x \\in [0, 1], \\, n = 1, 2, 3, \\dots$$\nThen, which of the following statements is TRUE?",
    "options": [
      "$\\{f_n\\}$ is not equicontinuous on [0, 1]",
      "$\\{f_n\\}$ is uniformly convergent on [0, 1]",
      "$\\{f_n\\}$ is equicontinuous on [0, 1]",
      "$\\{f_n\\}$ is uniformly bounded and has a subsequence converging uniformly on [0, 1]"
    ]
  },
  {
    "id": 64,
    "marks": 1,
    "type": "NAT",
    "question": "Let $I = [2, 3)$, $J$ be the set of all rational numbers in the interval [4, 6], $K$ be the Cantor (ternary) set, and let $L = \\{7 + x : x \\in K\\}$. Then the Lebesgue measure of the set $I \\cup J \\cup L$ equals \\underline{\\hspace{1.5cm}}."
  },
  {
    "id": 65,
    "marks": 2,
    "type": "NAT",
    "question": "Let $S(x) = a_0 + \\sum_{n=1}^\\infty (a_n \\cos(nx) + b_n \\sin(nx))$ be the Fourier series of the $2\\pi$-periodic function defined by $f(x) = x^2 + 4 \\sin(x) \\cos(x), \\, -\\pi \\leq x \\leq \\pi$. Then\n$$\\left| \\sum_{n=0}^\\infty a_n - \\sum_{n=1}^\\infty b_n \\right|$$\nis equal to \\underline{\\hspace{1.5cm}}.\n\n\\end{document}"
  }
];

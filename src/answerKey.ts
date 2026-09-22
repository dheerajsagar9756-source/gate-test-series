export type AnswerKeyEntry = {
  type: "MCQ" | "MSQ" | "NAT";
  answer: string | string[];
  marks: number;
  negativeMarking: number;
};

export const answerKey: Record<number, AnswerKeyEntry> = {
  1:  { type: "MCQ", answer: "B", marks: 2, negativeMarking: 2 / 3 },
  2:  { type: "MCQ", answer: "B", marks: 2, negativeMarking: 2 / 3 },
  3:  { type: "MCQ", answer: "B", marks: 1, negativeMarking: 1 / 3 },
  4:  { type: "MCQ", answer: "B", marks: 1, negativeMarking: 1 / 3 },
  5:  { type: "MCQ", answer: "A", marks: 2, negativeMarking: 2 / 3 },
  6:  { type: "MCQ", answer: "C", marks: 1, negativeMarking: 1 / 3 },
  7:  { type: "MCQ", answer: "D", marks: 2, negativeMarking: 2 / 3 },
  8:  { type: "MCQ", answer: "D", marks: 2, negativeMarking: 2 / 3 },

  // Q9 figure is missing from the supplied paper
  9:  { type: "MCQ", answer: "C", marks: 1, negativeMarking: 1 / 3 },

  10: { type: "MCQ", answer: "A", marks: 1, negativeMarking: 1 / 3 },
  11: { type: "MCQ", answer: "B", marks: 2, negativeMarking: 2 / 3 },
  12: { type: "MCQ", answer: "B", marks: 2, negativeMarking: 2 / 3 },

  13: { type: "NAT", answer: "150", marks: 2, negativeMarking: 0 },

  14: { type: "MCQ", answer: "A", marks: 2, negativeMarking: 2 / 3 },
  15: { type: "MCQ", answer: "C", marks: 1, negativeMarking: 1 / 3 },

  16: { type: "NAT", answer: "6", marks: 1, negativeMarking: 0 },

  17: { type: "MCQ", answer: "A", marks: 1, negativeMarking: 1 / 3 },
  18: { type: "MCQ", answer: "C", marks: 1, negativeMarking: 1 / 3 },

  19: { type: "NAT", answer: "2", marks: 2, negativeMarking: 0 },
  20: { type: "NAT", answer: "4", marks: 2, negativeMarking: 0 },

  21: { type: "MCQ", answer: "B", marks: 1, negativeMarking: 1 / 3 },
  22: { type: "NAT", answer: "8", marks: 1, negativeMarking: 0 },

  23: { type: "MCQ", answer: "A", marks: 2, negativeMarking: 2 / 3 },
  24: { type: "NAT", answer: "5", marks: 2, negativeMarking: 0 },
  25: { type: "NAT", answer: "2", marks: 1, negativeMarking: 0 },

  26: { type: "MCQ", answer: "B", marks: 1, negativeMarking: 1 / 3 },

  // Q27 appears inconsistent in the supplied paper
  27: { type: "NAT", answer: "0", marks: 2, negativeMarking: 0 },

  28: { type: "MCQ", answer: "B", marks: 2, negativeMarking: 2 / 3 },

  // Q29 appears inconsistent in the supplied paper
  29: { type: "NAT", answer: "0", marks: 2, negativeMarking: 0 },

  // Q30 options do not match the derived characteristic equation
  30: { type: "MCQ", answer: "C", marks: 1, negativeMarking: 1 / 3 },

  31: { type: "MCQ", answer: "C", marks: 1, negativeMarking: 1 / 3 },
  32: { type: "NAT", answer: "0.79", marks: 2, negativeMarking: 0 },

  33: { type: "MCQ", answer: "B", marks: 2, negativeMarking: 2 / 3 },
  34: { type: "MCQ", answer: "A", marks: 1, negativeMarking: 1 / 3 },
  35: { type: "MCQ", answer: "B", marks: 2, negativeMarking: 2 / 3 },

  // MSQ — NO negative marking
  36: { type: "MSQ", answer: ["A", "B"], marks: 2, negativeMarking: 0 },

  37: { type: "NAT", answer: "1", marks: 1, negativeMarking: 0 },
  38: { type: "MCQ", answer: "D", marks: 2, negativeMarking: 2 / 3 },
  39: { type: "NAT", answer: "2", marks: 2, negativeMarking: 0 },
  40: { type: "NAT", answer: "2.81925", marks: 2, negativeMarking: 0 },
  41: { type: "NAT", answer: "5", marks: 1, negativeMarking: 0 },
  42: { type: "NAT", answer: "4", marks: 2, negativeMarking: 0 },

  43: { type: "MCQ", answer: "D", marks: 2, negativeMarking: 2 / 3 },
  44: { type: "NAT", answer: "1", marks: 2, negativeMarking: 0 },
  45: { type: "MCQ", answer: "C", marks: 1, negativeMarking: 1 / 3 },
  46: { type: "NAT", answer: "0", marks: 1, negativeMarking: 0 },
  47: { type: "MCQ", answer: "A", marks: 1, negativeMarking: 1 / 3 },
  48: { type: "MCQ", answer: "C", marks: 2, negativeMarking: 2 / 3 },
  49: { type: "MCQ", answer: "C", marks: 2, negativeMarking: 2 / 3 },
  50: { type: "MCQ", answer: "C", marks: 2, negativeMarking: 2 / 3 },
  51: { type: "MCQ", answer: "D", marks: 1, negativeMarking: 1 / 3 },
  52: { type: "MCQ", answer: "B", marks: 1, negativeMarking: 1 / 3 },
  53: { type: "MCQ", answer: "B", marks: 1, negativeMarking: 1 / 3 },
  54: { type: "MCQ", answer: "B", marks: 1, negativeMarking: 1 / 3 },
  55: { type: "MCQ", answer: "D", marks: 2, negativeMarking: 2 / 3 },
  56: { type: "MCQ", answer: "A", marks: 1, negativeMarking: 1 / 3 },
  57: { type: "MCQ", answer: "D", marks: 1, negativeMarking: 1 / 3 },

  58: { type: "NAT", answer: "2", marks: 2, negativeMarking: 0 },

  59: { type: "MCQ", answer: "C", marks: 2, negativeMarking: 2 / 3 },
  60: { type: "MCQ", answer: "A", marks: 1, negativeMarking: 1 / 3 },

  61: { type: "NAT", answer: "0.25", marks: 1, negativeMarking: 0 },

  62: { type: "MCQ", answer: "A", marks: 2, negativeMarking: 2 / 3 },
  63: { type: "MCQ", answer: "A", marks: 2, negativeMarking: 2 / 3 },

  64: { type: "NAT", answer: "1", marks: 1, negativeMarking: 0 },
  65: { type: "NAT", answer: "2", marks: 2, negativeMarking: 0 },
};
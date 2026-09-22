export type TestAnswer =
  | string
  | number
  | string[]
  | {
      min: number;
      max: number;
    };

export type TestQuestion = {
  id: number;
  marks: number;
  type: "MCQ" | "MSQ" | "NAT";
  question: string;
  options?: string[];
  note?: string;
  answer?: TestAnswer;
};
export type TestData = {
  id: number;
  title: string;
  duration: number;
  questions: TestQuestion[];
};
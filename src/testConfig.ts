import type { TestQuestion } from "./testTypes";

export type TestConfig = {
  id: number;
  title: string;
  questions: number;
  marks: number;
  duration: number;
};

const testModules = import.meta.glob("./tests/test*.ts", {
  eager: true,
  import: "default",
}) as Record<string, TestQuestion[]>;

export const testConfigs: TestConfig[] = Object.entries(testModules)
  .map(([filePath, questions]) => {
    const match = filePath.match(/test(\d+)\.ts$/);

    if (!match) {
      return null;
    }

    const id = Number(match[1]);

    const totalMarks = questions.reduce(
      (total, question) => total + question.marks,
      0
    );

    return {
      id,
      title: `GATE Mathematics Full Length Test ${String(id).padStart(
        2,
        "0"
      )}`,
      questions: questions.length,
      marks: totalMarks,
      duration: 180,
    };
  })
  .filter((config): config is TestConfig => config !== null)
  .sort((a, b) => a.id - b.id);
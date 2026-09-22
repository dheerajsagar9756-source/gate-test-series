import type { TestQuestion } from "./testTypes";

const testModules = import.meta.glob("./tests/test*.ts", {
  eager: true,
  import: "default",
}) as Record<string, TestQuestion[]>;

export function getTestQuestions(testId: number): TestQuestion[] {
  const testNumber = String(testId).padStart(2, "0");
  const fileName = `./tests/test${testNumber}.ts`;

  const testQuestions = testModules[fileName];

  if (!testQuestions) {
    console.error(`Test ${testId} not found: ${fileName}`);
    return [];
  }

  return testQuestions;
}
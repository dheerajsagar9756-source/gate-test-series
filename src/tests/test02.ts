import { questions } from "../questions";
import { answerKey } from "../answerKey";
import type { TestQuestion } from "../testTypes";

const test02Questions: TestQuestion[] = questions.map((question) => {
  const key = answerKey[question.id];

  return {
    ...question,
    answer: key?.answer ?? "",
  };
});

export default test02Questions;
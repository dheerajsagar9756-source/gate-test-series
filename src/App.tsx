import { useEffect, useState } from "react";
import TestSeries from "./TestSeries";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import "./App.css";
import { questions } from "./questions";
import { getTestQuestions } from "./testLoader";
import { testConfigs } from "./testConfig";

function renderQuestionText(text: string) {
  const cleanText = text
    .replace(/\\\\\(/g, "\\(")
    .replace(/\\\\\)/g, "\\)")
    .replace(/\\\\\[/g, "\\[")
    .replace(/\\\\\]/g, "\\]")
        .replace(/\\\(([\s\S]*?)\\\)/g, (_, math) => `$${math}$`)
    .replace(/\\\[([\s\S]*?)\\\]/g, (_, math) => `$$${math}$$`)
    .replace(/\\underline\{\\hspace\{[^}]*\}\}/g, "__________")
  const formattedText = cleanText
    .replace(/\\begin\{align\*\}/g, "$$\\begin{aligned}")
    .replace(/\\end\{align\*\}/g, "\\end{aligned}$$");

  const parts = formattedText.split(
    /(\$\$[\s\S]*?\$\$|\$[^$]*?\$)/g
  );


  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("$$") && part.endsWith("$$")) {
          return (
            <BlockMath
              key={index}
              math={part.slice(2, -2)}
            />
          );
        }

        if (part.startsWith("$") && part.endsWith("$")) {
          return (
            <InlineMath
              key={index}
              math={part.slice(1, -1)}
            />
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
} 


function App() {

  const TOTAL_TIME = 180 * 60;
  
  const [selectedTest, setSelectedTest] = useState(1);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [answers, setAnswers] = useState<Record<number, string>>(() => {
  const savedAnswers = localStorage.getItem(`gate-test-answers-${selectedTest}`);

  return savedAnswers ? JSON.parse(savedAnswers) : {};
});
  const [marked, setMarked] = useState<Set<number>>(() => {
  const savedMarked = localStorage.getItem(`gate-test-marked-${selectedTest}`);

  return savedMarked
    ? new Set(JSON.parse(savedMarked))
    : new Set();
});
  const [submitted, setSubmitted] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  

  const activeQuestions = getTestQuestions(selectedTest);

  const activeAnswerKey = Object.fromEntries(
    activeQuestions.map((q) => [
      q.id,
    {
      type: q.type,
      answer: q.answer ?? "",
      marks: q.marks,
      negativeMarking: q.type === "MCQ" ? q.marks / 3 : 0,
    },
  ])
);

  console.log("Selected Test:", selectedTest);
console.log("Number of Questions:", activeQuestions.length);

  useEffect(() => {
  localStorage.setItem(
  `gate-test-answers-${selectedTest}`,
  JSON.stringify(answers)
);
}, [answers]);
useEffect(() => {
  localStorage.setItem(
    `gate-test-marked-${selectedTest}`,
    JSON.stringify([...marked])
  );
}, [marked]);



  const calculateScore = () => {
  let score = 0;
  let correct = 0;
  let wrong = 0;
  let unattempted = 0;

  activeQuestions.forEach((q) => {
    const userAnswer = answers[q.id];
    const correctAnswer = activeAnswerKey[q.id];

    // Skip questions for which we do not have a verified answer
    if (!correctAnswer) return;

    // Unattempted question
    if (userAnswer === undefined || userAnswer.trim() === "") {
      unattempted++;
      return;
    }

    let normalizedAnswer = userAnswer.trim();

    // Convert selected MCQ option text into A/B/C/D
    if (q.type === "MCQ" && q.options) {
      const optionIndex = q.options.findIndex(
        (option) => option === userAnswer
      );

      if (optionIndex !== -1) {
        normalizedAnswer = String.fromCharCode(65 + optionIndex);
      }
    }

    // Correct answer
    if (
normalizedAnswer.toUpperCase() ===
correctAnswer.answer.toString().trim().toUpperCase()
    ) {
      correct++;
      score += q.marks;
    } else {
     // Wrong answer
wrong++;

// Negative marking ONLY for MCQ
if (q.type === "MCQ") {
  if (q.marks === 1) {
    score -= 1 / 3;
  } else if (q.marks === 2) {
    score -= 2 / 3;
  }
} 
    } 
});
  

  return {
    score,
    correct,
    wrong,
    unattempted,
  };
};


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((previous) => {
        if (previous <= 1) {
          clearInterval(timer);
          setSubmitted(true);
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  if (!testStarted) {
  return (
    <TestSeries
      onStartTest={(testId) => {
  setSelectedTest(testId);

  const savedAnswers = localStorage.getItem(
    `gate-test-answers-${testId}`
  );

  setAnswers(savedAnswers ? JSON.parse(savedAnswers) : {});

  const savedMarked = localStorage.getItem(
    `gate-test-marked-${testId}`
  );

  setMarked(
    savedMarked ? new Set(JSON.parse(savedMarked)) : new Set()
  );

  setTestStarted(true);
}}
    />
  );
}
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

 const question = activeQuestions[currentQuestion];
const selectAnswer = (answer: string) => {
  setAnswers((previous) => {
    if (question.type !== "MSQ") {
      return {
        ...previous,
        [question.id]: answer,
      };
    }

    const currentAnswer = previous[question.id] || "";

    const selectedOptions = currentAnswer
  ? currentAnswer.split(",")
  : [];

if (selectedOptions.includes(answer)) {
  const updatedOptions = selectedOptions.filter(
    (option) => option !== answer
  );

  return {
    ...previous,
    [question.id]: updatedOptions.join(","),
  };
}

return {
  ...previous,
  [question.id]: [...selectedOptions, answer].join(","),
};

    selectedOptions.sort();

    return {
      ...previous,
      [question.id]: selectedOptions.join(","),
    };
  });
};


  const clearResponse = () => {
    setAnswers((previous) => {
      const updated = { ...previous };
      delete updated[question.id];
      return updated;
    });
  };

  const toggleReview = () => {
    setMarked((previous) => {
      const updated = new Set(previous);

      if (updated.has(question.id)) {
        updated.delete(question.id);
      } else {
        updated.add(question.id);
      }

      return updated;
    });
  };

  const submitTest = () => {
    if (window.confirm("Are you sure you want to submit the test?")) {
      setSubmitted(true);
    }
  };

  const answeredCount = Object.keys(answers).length;

  if (submitted) {
    const result = calculateScore();
    if (showAnalysis) {
  return (
    <div className="result-screen">
      <div className="result-card">
        <h1>Question-wise Analysis</h1>

        <p>Review your performance question by question.</p>

        <div className="analysis-list">
  {questions.map((question) => {
    const userAnswer = answers[question.id] || "";
    const key = activeAnswerKey[question.id];

    let isCorrect = false;

    if (key.type === "MSQ") {
      const userOptions = userAnswer
        ? userAnswer.split(",").sort()
        : [];

      const correctOptions = Array.isArray(key.answer)
        ? [...key.answer].sort()
        : [];

      isCorrect =
        JSON.stringify(userOptions) ===
        JSON.stringify(correctOptions);
    } else {
      isCorrect =
        userAnswer.trim().toUpperCase() ===
        String(key.answer).trim().toUpperCase();
    }

    const status = !userAnswer
      ? "Unanswered"
      : isCorrect
      ? "Correct"
      : "Wrong";

    const marks =
  status === "Correct"
    ? `+${key.marks}`
    : status === "Wrong" && key.type === "MCQ"
    ? `-${key.negativeMarking.toFixed(2)}`
    : "0";

    return (
      <div className="analysis-item" key={question.id}>
        <strong>Q{question.id}</strong>

        <span>
          Your Answer: {userAnswer || "—"}
        </span>

        <span>
          Correct Answer:{" "}
          {Array.isArray(key.answer)
  ? key.answer.join(", ")
  : typeof key.answer === "object"
  ? `${key.answer.min} – ${key.answer.max}`
  : key.answer}
        </span>

        <span className={`analysis-status ${status.toLowerCase()}`}>
          {status === "Correct" && "✓ "}
          {status === "Wrong" && "✗ "}
          {status === "Unanswered" && "○ "}
          {status}
        </span>

        <span className="analysis-marks">
          {marks}
        </span>
      </div>
    );
  })}
</div>

        <button
          className="result-btn secondary"
          onClick={() => setShowAnalysis(false)}
        >
          Back to Result
        </button>
      </div>
    </div>
  );
}
    return (
      <div className="result-screen">
        <div className="result-card">
          <div className="result-icon">✓</div>

          <h1>Test Submitted</h1>

<div className="result-actions">
<button
  className="result-btn primary"
  onClick={() => setShowAnalysis(true)}
>
  Question-wise Analysis
</button>

  <button className="result-btn secondary">
    Back to Test Series
  </button>
</div>

<div className="result-stats">

  <div className="result-stat score-stat">
    <strong>{result.score.toFixed(2)}</strong>
   <span>Score / {testConfigs.find((test) => test.id === selectedTest)?.marks ?? 0}</span>
  </div>

  <div className="result-stat">
    <strong>{result.correct}</strong>
    <span>Correct</span>
  </div>

  <div className="result-stat">
    <strong>{result.wrong}</strong>
    <span>Wrong</span>
  </div>

  <div className="result-stat">
    <strong>{questions.length - answeredCount}</strong>
    <span>Unanswered</span>
  </div>

  <div className="result-stat">
    <strong>
      {answeredCount > 0
        ? ((result.correct / answeredCount) * 100).toFixed(2)
        : "0.00"}%
    </strong>
    <span>Accuracy</span>
  </div>

  <div className="result-stat">
    <strong>
      {Math.floor((180 * 60 - timeLeft) / 60)} min
    </strong>
    <span>Time Used</span>
  </div>

</div>

          <button
            className="primary-btn"
            onClick={() => window.location.reload()}
          >
            Back to Test
          </button>
        </div>
      </div>
    );
  }

  return (
<div className="app-container">
<header className="topbar">
        <div>
          <h1>GATE Mathematics Mock Test</h1>
          <p>65 Questions · 100 Marks · 180 Minutes</p>
        </div>

        <div className="top-actions">
          <div className="timer-box">
            <span>TIME LEFT</span>
            <strong>{formatTime(timeLeft)}</strong>
          </div>

          <button className="submit-btn" onClick={submitTest}>
            Submit Test
          </button>
        </div>
      </header>

      <main className="test-layout">
        <section className="question-card">
          <div className="question-header">
            <div>
              <div className="question-number">
                Question {question.id}
              </div>

              <div className="question-tags">
                <span className="tag">Mathematics</span>
                <span className="tag">{question.type}</span>
              </div>
            </div>

            <div className="question-marks">
              {question.marks} Mark
              {question.marks > 1 ? "s" : ""}
            </div>
          </div>
          
          <div className="question-body">
            <div className="question-text">
  {renderQuestionText(question.question)}
</div>

            {(question.type === "MCQ" || question.type === "MSQ") && (
              <div className="options">
                {question.options?.map((option, index) => {
                  const letter = String.fromCharCode(65 + index);
                 const selected =
  question.type === "MSQ"
    ? (answers[question.id] || "").split(",").includes(letter)
    : answers[question.id] === letter;

                  return (
                    <button
                      key={option}
                      className={`option ${
                        selected ? "selected" : ""
                      }`}
                      onClick={() => selectAnswer(letter)}
                    >
                      <span className="option-circle">{letter}</span>
                      <span>{renderQuestionText(option)}</span>
                  
                    </button>
                  );
                })}
              </div>
            )}
          <input
  className="nat-input"
  type="text"
  inputMode="decimal"
  placeholder="Enter your answer"
  value={answers[question.id] ?? ""}
  onChange={(event) => {
    setAnswers((previous) => ({
      ...previous,
      [question.id]: event.target.value,
    }));
  }}
/>

          
          </div>

          <div className="question-footer">
            <div className="left-controls">
              <button className="outline-btn" onClick={toggleReview}>
                {marked.has(question.id)
                  ? "Unmark Review"
                  : "Mark for Review"}
              </button>

              <button className="outline-btn" onClick={clearResponse}>
                Clear Response
              </button>
            </div>

            <div className="navigation">
              <button
                className="outline-btn"
                disabled={currentQuestion === 0}
                onClick={() =>
                  setCurrentQuestion((q) => Math.max(q - 1, 0))
                }
              >
                Previous
              </button>
              <button
  className="outline-btn"
  onClick={() => {
    const questionId = questions[currentQuestion].id;

    setMarked((previous) => {
      const updated = new Set(previous);

      if (updated.has(questionId)) {
        updated.delete(questionId);
      } else {
        updated.add(questionId);
      }

      return updated;
    });
  }}
>
  {marked.has(questions[currentQuestion].id)
    ? "Unmark Review"
    : "Mark for Review"}
</button>

              <button
                className="next-btn"
               disabled={currentQuestion === activeQuestions.length - 1}
                onClick={() =>
                  setCurrentQuestion((q) =>
                   Math.min(q + 1, activeQuestions.length - 1)
                  )
                }
              >
                Next
              </button>
            </div>
          </div>
        </section>

        <aside className="sidebar">
          <div className="palette-card">
            <h2>Question Palette</h2>

            <div className="legend">
              <div>
                <span className="legend-dot answered-dot" />
                Answered ({answeredCount})
              </div>

              <div>
                <span className="legend-dot" />
                Not Answered (
                {activeQuestions.length - answeredCount})
              </div>

              <div>
                <span className="legend-dot review-dot" />
                Review ({marked.size})
              </div>
            </div>

            <div className="palette">
              {activeQuestions.map((item, index) => {
                const isAnswered = Boolean(answers[item.id]);
                const isReview = marked.has(item.id);
                const isCurrent = currentQuestion === index;

                return (
                  <button
                    key={item.id}
                    className={`palette-btn
                      ${isAnswered ? "answered" : ""}
                      ${isReview ? "review" : ""}
                      ${isCurrent ? "current" : ""}`}
                    onClick={() => setCurrentQuestion(index)}
                  >
                    {item.id}
                  </button>
                );
              })}
            </div>

            <button className="sidebar-submit" onClick={submitTest}>
              Submit Test
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
import "./TestSeries.css";
import { testConfigs } from "./testConfig";

type TestSeriesProps = {
  onStartTest: (testId: number) => void;
};

function TestSeries({ onStartTest }: TestSeriesProps) {
  return (
    <div className="test-series">
      <header className="series-header">
        <h1>GATE Mathematics</h1>
        <p>Full Length Mock Test Series</p>
      </header>

      <div className="test-list">
        {testConfigs.map((test) => (
          <div className="test-card" key={test.id}>
            <div>
              <span className="test-number">
                MOCK TEST {String(test.id).padStart(2, "0")}
              </span>

              <h2>{test.title}</h2>

              <div className="test-details">
                <span>{test.questions} Questions</span>
                <span>{test.marks} Marks</span>
                <span>{test.duration} Minutes</span>
              </div>
            </div>

            <button
              className="start-test-btn"
              onClick={() => onStartTest(test.id)}
            >
              Start Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestSeries;
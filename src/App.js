import { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  return (
    <div>
      <h1>Test App</h1>
      {finished ? (
        <Result score={score} />
      ) : (
        <Quiz setScore={setScore} setFinished={setFinished} />
      )}
    </div>
  );
}

export default App;
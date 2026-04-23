import { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    fontFamily: "sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "32px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "480px",
  },
  title: {
    margin: "0 0 24px",
    fontSize: "1.5rem",
    textAlign: "center",
    color: "#333",
  },
};

function App() {
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>Test App</h1>
        {finished ? (
          <Result score={score} />
        ) : (
          <Quiz setScore={setScore} setFinished={setFinished} />
        )}
      </div>
    </div>
  );
}

export default App;
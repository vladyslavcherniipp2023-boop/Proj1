import { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

console.log('Mode:', import.meta.env.VITE_APP_MODE)

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)",
    fontFamily: "'Segoe UI', sans-serif",
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    padding: "40px",
    width: "100%",
    maxWidth: "520px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
  },
  title: {
    margin: "0 0 8px",
    fontSize: "1.8rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: 700,
    letterSpacing: "-0.5px",
  },
  subtitle: {
    textAlign: "center",
    color: "rgba(255,255,255,0.4)",
    fontSize: "0.85rem",
    marginBottom: "32px",
  },
};

function App() {
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleRestart = () => {
    setScore(0);
    setFinished(false);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>⚡ Quiz App</h1>
        <p style={styles.subtitle}>Test your knowledge</p>
        {finished ? (
          <Result score={score} onRestart={handleRestart} />
        ) : (
          <Quiz setScore={setScore} setFinished={setFinished} />
        )}
      </div>
    </div>
  );
}

export default App;
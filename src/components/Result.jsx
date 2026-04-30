const styles = {
  wrapper: {
    textAlign: "center",
  },
  emoji: {
    fontSize: "3.5rem",
    marginBottom: "16px",
  },
  score: {
    fontSize: "3rem",
    fontWeight: 800,
    color: "#fff",
    margin: "0 0 8px",
  },
  label: {
    color: "rgba(255,255,255,0.5)",
    fontSize: "0.9rem",
    marginBottom: "32px",
  },
  btn: {
    padding: "14px 40px",
    borderRadius: "12px",
    border: "none",
    background: "#4f8ef7",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "opacity 0.2s",
  },
};

export default function Result({ score, onRestart }) {
  const total = 5;
  const emoji = score === total ? "🏆" : score >= 3 ? "👍" : "😅";

  return (
    <div style={styles.wrapper}>
      <div style={styles.emoji}>{emoji}</div>
      <p style={styles.score}>{score}/{total}</p>
      <p style={styles.label}>
        {score === total ? "Perfect score!" : score >= 3 ? "Good job!" : "Keep practicing!"}
      </p>
      <button style={styles.btn} onClick={onRestart} onMouseOver={e => e.target.style.opacity = 0.85} onMouseOut={e => e.target.style.opacity = 1}>
        Try Again
      </button>
    </div>
  );
}
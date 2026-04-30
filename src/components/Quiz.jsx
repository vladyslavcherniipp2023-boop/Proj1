import { useState } from "react";

const questions = [
  { q: "2 + 2 = ?", options: ["3", "4", "5"], answer: "4" },
  { q: "Capital of Ukraine?", options: ["Kyiv", "Lviv", "Odesa"], answer: "Kyiv" },
  { q: "What does HTML stand for?", options: ["HyperText Markup Language", "High Tech Modern Language", "HyperText Modern Links"], answer: "HyperText Markup Language" },
  { q: "Which language runs in a browser?", options: ["Python", "Java", "JavaScript"], answer: "JavaScript" },
  { q: "What is 10 * 10?", options: ["10", "100", "1000"], answer: "100" },
];

const styles = {
  question: {
    fontSize: "1.15rem",
    fontWeight: 600,
    color: "#fff",
    marginBottom: "24px",
    lineHeight: 1.5,
  },
  progress: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    color: "rgba(255,255,255,0.4)",
    fontSize: "0.8rem",
  },
  progressBar: {
    width: "100%",
    height: "4px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "2px",
    marginBottom: "24px",
    overflow: "hidden",
  },
  optionsGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};

export default function Quiz({ setScore, setFinished }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleClick = (option) => {
    if (selected) return;
    setSelected(option);

    if (option === questions[index].answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      setSelected(null);
      if (index + 1 < questions.length) {
        setIndex(index + 1);
      } else {
        setFinished(true);
      }
    }, 700);
  };

  const progress = ((index) / questions.length) * 100;

  return (
    <div>
      <div style={styles.progress}>
        <span>Question {index + 1} of {questions.length}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div style={styles.progressBar}>
        <div style={{ height: "100%", width: `${progress}%`, background: "#4f8ef7", borderRadius: "2px", transition: "width 0.3s ease" }} />
      </div>
      <p style={styles.question}>{questions[index].q}</p>
      <div style={styles.optionsGrid}>
        {questions[index].options.map((opt) => {
          let bg = "rgba(255,255,255,0.06)";
          let border = "1px solid rgba(255,255,255,0.1)";
          let color = "#fff";

          if (selected) {
            if (opt === questions[index].answer) {
              bg = "rgba(72,199,142,0.2)";
              border = "1px solid #48c78e";
              color = "#48c78e";
            } else if (opt === selected) {
              bg = "rgba(255,91,91,0.2)";
              border = "1px solid #ff5b5b";
              color = "#ff5b5b";
            }
          }

          return (
            <button
              key={opt}
              onClick={() => handleClick(opt)}
              style={{
                padding: "14px 18px",
                borderRadius: "12px",
                border,
                background: bg,
                color,
                fontSize: "0.95rem",
                cursor: selected ? "default" : "pointer",
                textAlign: "left",
                transition: "all 0.2s ease",
                fontFamily: "inherit",
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
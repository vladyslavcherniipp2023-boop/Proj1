import { useState } from "react";

const questions = [
  {
    q: "2 + 2 = ?",
    options: ["3", "4", "5"],
    answer: "4",
  },
  {
    q: "Capital of Ukraine?",
    options: ["Kyiv", "Lviv", "Odesa"],
    answer: "Kyiv",
  },
];

export default function Quiz({ setScore, setFinished }) {
  const [index, setIndex] = useState(0);

  const handleClick = (option) => {
    if (option === questions[index].answer) {
      setScore((prev) => prev + 1);
    }

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div>
      <h2>{questions[index].q}</h2>
      {questions[index].options.map((opt) => (
        <button key={opt} onClick={() => handleClick(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}
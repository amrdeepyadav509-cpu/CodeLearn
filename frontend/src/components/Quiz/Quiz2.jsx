import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const quizData = [
  { question: "1. What does CSS stand for?", options: [
      { label: "A", text: "Cascading Style Sheets" },
      { label: "B", text: "Colorful Style System" },
      { label: "C", text: "Creative Style Syntax" },
      { label: "D", text: "Computer Style Sheet" },
    ], answer: "A" },
  { question: "2. Which property is used to change the text color in CSS?", options: [
      { label: "A", text: "font-color" },
      { label: "B", text: "color" },
      { label: "C", text: "text-color" },
      { label: "D", text: "fgcolor" },
    ], answer: "B" },
  { question: "3. Which CSS selector selects elements with a specific class?", options: [
      { label: "A", text: "#classname" },
      { label: "B", text: ".classname" },
      { label: "C", text: "classname" },
      { label: "D", text: "*classname" },
    ], answer: "B" },
  { question: "4. Which CSS property is used to change the background color?", options: [
      { label: "A", text: "bgcolor" },
      { label: "B", text: "color-background" },
      { label: "C", text: "background-color" },
      { label: "D", text: "bg-color" },
    ], answer: "C" },
  { question: "5. Which CSS property controls the size of text?", options: [
      { label: "A", text: "font-size" },
      { label: "B", text: "text-style" },
      { label: "C", text: "text-size" },
      { label: "D", text: "font-weight" },
    ], answer: "A" },
  { question: "6. Which property is used to make text bold in CSS?", options: [
      { label: "A", text: "font-bold" },
      { label: "B", text: "font-weight" },
      { label: "C", text: "text-bold" },
      { label: "D", text: "style" },
    ], answer: "B" },
  { question: "7. Which value of position places an element relative to its first positioned ancestor?", options: [
      { label: "A", text: "fixed" },
      { label: "B", text: "absolute" },
      { label: "C", text: "relative" },
      { label: "D", text: "static" },
    ], answer: "C" },
  { question: "8. Which CSS property is used to control the spacing between lines of text?", options: [
      { label: "A", text: "letter-spacing" },
      { label: "B", text: "word-spacing" },
      { label: "C", text: "line-height" },
      { label: "D", text: "spacing" },
    ], answer: "C" },
  { question: "9. Which CSS property sets the space between the element's border and content?", options: [
      { label: "A", text: "margin" },
      { label: "B", text: "spacing" },
      { label: "C", text: "padding" },
      { label: "D", text: "border-spacing" },
    ], answer: "C" },
  { question: "10. Which property makes an element take up the entire available width?", options: [
      { label: "A", text: "display:block" },
      { label: "B", text: "display:inline" },
      { label: "C", text: "float:left" },
      { label: "D", text: "width:auto" },
    ], answer: "A" },
  { question: "11. Which CSS property is used to change the font of text?", options: [
      { label: "A", text: "font-style" },
      { label: "B", text: "font-family" },
      { label: "C", text: "font-weight" },
      { label: "D", text: "text-style" },
    ], answer: "B" },
  { question: "12. Which of the following is the correct way to add an external CSS file?", options: [
      { label: "A", text: '<style src="style.css">' },
      { label: "B", text: '<css href="style.css">' },
      { label: "C", text: '<link rel="stylesheet" href="style.css">' },
      { label: "D", text: '@import style.css' },
    ], answer: "C" },
  { question: "13. Which selector selects all <p> elements inside a <div>?", options: [
      { label: "A", text: "div p" },
      { label: "B", text: "div+p" },
      { label: "C", text: "div.p" },
      { label: "D", text: "div>p" },
    ], answer: "A" },
  { question: "14. Which property makes text italic?", options: [
      { label: "A", text: "font-style:italic" },
      { label: "B", text: "text-transform:italic" },
      { label: "C", text: "font-variant:italic" },
      { label: "D", text: "text-decoration:italic" },
    ], answer: "A" },
  { question: "15. Which property controls the order of elements when they overlap?", options: [
      { label: "A", text: "display" },
      { label: "B", text: "z-index" },
      { label: "C", text: "order" },
      { label: "D", text: "layer" },
    ], answer: "B" },
  { question: "16. Which property is used to make an element float to the right?", options: [
      { label: "A", text: "align:right" },
      { label: "B", text: "position:right" },
      { label: "C", text: "float:right" },
      { label: "D", text: "text-align:right" },
    ], answer: "C" },
  { question: "17. Which unit is relative to the root element's font-size?", options: [
      { label: "A", text: "em" },
      { label: "B", text: "rem" },
      { label: "C", text: "px" },
      { label: "D", text: "%" },
    ], answer: "B" },
  { question: "18. Which media query applies styles only on screens smaller than 600px?", options: [
      { label: "A", text: "@media (width < 600px)" },
      { label: "B", text: "@media screen and (max-width: 600px)" },
      { label: "C", text: "@screen (max-width: 600px)" },
      { label: "D", text: "@media-width 600px" },
    ], answer: "B" },
  { question: "19. Which property is used to create rounded corners?", options: [
      { label: "A", text: "border-round" },
      { label: "B", text: "border-radius" },
      { label: "C", text: "border-style:round" },
      { label: "D", text: "corner-radius" },
    ], answer: "B" },
  { question: "20. Which display value creates a flex container?", options: [
      { label: "A", text: "display:block" },
      { label: "B", text: "display:flex" },
      { label: "C", text: "display:grid" },
      { label: "D", text: "display:inline-flexbox" },
    ], answer: "B" },
];

export default function Quiz2() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();
  const totalQuestions = quizData.length;

  const handleOptionChange = (e) => {
    setAnswers({ ...answers, [currentQuestion]: e.target.value });
  };

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) setCurrentQuestion(currentQuestion + 1);
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const submitQuiz = () => setShowResult(true);

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });
    return score;
  };

  const question = quizData[currentQuestion];

  return (
    <div>
                 <FaArrowLeft
          size={32}
          style={{ cursor: 'pointer', marginBottom: '10px' }}
          onClick={() => navigate('/')}  // Home page route
          title="Go back to Home"
        />
      <style>{`
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Poppins', sans-serif; }

.quiz-container {
  background: #ffffffcc;
  padding: 30px;
  border-radius: 15px;
  height: auto;
  width: 800px;
  
  margin: 50px auto;
  box-shadow: 0px 6px 20px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #2c3e50;
  font-size: 2rem;
}

.back-btn {
  position: fixed;
  top: 15px;
  left: 15px;
  font-size: 30px;
  color: #333;
  cursor: pointer;
  transition: 0.3s;
}

.back-btn:hover { color: #0056b3; }

.question { display: flex; flex-direction: column; }
.question p { font-weight: 600; margin-bottom: 10px; color: #333; }

label {
  display: block;
  margin-bottom: 8px;
  cursor: pointer;
  margin: 15px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  flex-wrap: wrap;
  gap: 10px;
  
}

button {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  flex: 1;
max-width: 100px;
height: 50px;
}

button:hover { opacity: 0.8; }

.next-btn { background: #007bff; color: white; }
.prev-btn { background: #6c757d; color: white; }
.submit-btn { background: #28a745; color: white; width: 100%; margin-top: 10px; }

.result {
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}

/* Responsive Media Queries */

/* Mobile: 480px - 767px */
@media (max-width: 767px) {
  .quiz-container { padding: 20px; width: 95%; margin: 30px auto; }
  h1 { font-size: 1.6rem; }
  label { margin: 10px 0; font-size: 14px; }
  button { font-size: 14px; padding: 10px; }
  
}

/* Tablet: 768px - 1024px */
@media (min-width: 768px) and (max-width: 1024px) {
  .quiz-container { padding: 25px; width: 90%; margin: 40px auto; }
  h1 { font-size: 1.8rem; }
  label { margin: 12px 0; font-size: 15px; }
  button { font-size: 15px; padding: 11px 18px; }
}

/* Desktop: 1025px - 1200px */
@media (min-width: 1025px) and (max-width: 1200px) {
  .quiz-container { width: 95%; padding: 28px; margin: 50px auto; }
  h1 { font-size: 2rem; }
  label { margin: 14px 0; font-size: 16px; }
  button { font-size: 16px; padding: 12px 20px; }
}

      `}</style>

      {showResult ? (
        <div className="quiz-container">
          <h1>CSS Quiz Result</h1>
          <h2 style={{ color: calculateScore() >= totalQuestions / 2 ? "green" : "red" }}>
            Your Score: {calculateScore()}/{totalQuestions}
          </h2>
        </div>
      ) : (
        <div className="quiz-container">
      

          <h1>CSS Quiz</h1>
          <div className="question active">
            <p>{question.question}</p>
            {question.options.map((opt) => (
              <label key={opt.label}>
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={opt.label}
                  checked={answers[currentQuestion] === opt.label}
                  onChange={handleOptionChange}
                />
                {opt.label}) {opt.text}
              </label>
            ))}
          </div>

          <div className="buttons">
            <button className="prev-btn" onClick={prevQuestion} disabled={currentQuestion === 0}>
              Previous
            </button>
            {currentQuestion < totalQuestions - 1 && (
              <button className="next-btn" onClick={nextQuestion}>
                Next
              </button>
            )}
            {currentQuestion === totalQuestions - 1 && (
              <button className="submit-btn" onClick={submitQuiz}>
                Submit
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


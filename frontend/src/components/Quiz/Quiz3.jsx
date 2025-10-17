import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const quizData = [
  { question: "1. Which company developed JavaScript?", options: [
      { label: "A", text: "Microsoft" },
      { label: "B", text: "Netscape" },
      { label: "C", text: "Sun Microsystems" },
      { label: "D", text: "Oracle" },
    ], answer: "B" },
  { question: "2. Which of the following is the correct way to write a comment in JavaScript?", options: [
      { label: "A", text: "<!-- This is a comment -->" },
      { label: "B", text: "# This is a comment" },
      { label: "C", text: "// This is a comment" },
      { label: "D", text: "* This is a comment *" },
    ], answer: "C" },
  { question: "3. Inside which HTML element do we put JavaScript code?", options: [
      { label: "A", text: "<js>" },
      { label: "B", text: "<scripting>" },
      { label: "C", text: "<script>" },
      { label: "D", text: "<javascript>" },
    ], answer: "C" },
  { question: "4. Which of the following is NOT a JavaScript data type?", options: [
      { label: "A", text: "String" },
      { label: "B", text: "Number" },
      { label: "C", text: "Boolean" },
      { label: "D", text: "Character" },
    ], answer: "D" },
  { question: "5. What is the correct syntax to print 'Hello World' in the console?", options: [
      { label: "A", text: 'print("Hello World")' },
      { label: "B", text: 'console.print("Hello World")' },
      { label: "C", text: 'log.console("Hello World")' },
      { label: "D", text: 'console.log("Hello World")' },
    ], answer: "D" },
  { question: "6. Which operator is used to assign a value to a variable?", options: [
      { label: "A", text: "=" },
      { label: "B", text: "==" },
      { label: "C", text: "===" },
      { label: "D", text: ":=" },
    ], answer: "A" },
  { question: "7. Which function is used to convert a string to an integer?", options: [
      { label: "A", text: "parseInt()" },
      { label: "B", text: "int()" },
      { label: "C", text: "stringToInt()" },
      { label: "D", text: "Number.parseString()" },
    ], answer: "A" },
  { question: "8. What is the output of typeof null in JavaScript?", options: [
      { label: "A", text: '"object"' },
      { label: "B", text: '"null"' },
      { label: "C", text: '"undefined"' },
      { label: "D", text: '"boolean"' },
    ], answer: "A" },
  { question: "9. Which symbol is used for single-line comments?", options: [
      { label: "A", text: "//" },
      { label: "B", text: "#" },
      { label: "C", text: "/* */" },
      { label: "D", text: "<!-- -->" },
    ], answer: "A" },
  { question: "10. Which method adds a new element to the end of an array?", options: [
      { label: "A", text: "push()" },
      { label: "B", text: "pop()" },
      { label: "C", text: "shift()" },
      { label: "D", text: "unshift()" },
    ], answer: "A" },
  { question: "11. Which keyword declares a block-scoped variable?", options: [
      { label: "A", text: "var" },
      { label: "B", text: "let" },
      { label: "C", text: "const" },
      { label: "D", text: "both B and C" },
    ], answer: "D" },
  { question: "12. Which method is used to select an element by its ID?", options: [
      { label: "A", text: "getElementsByClassName()" },
      { label: "B", text: "querySelectorAll()" },
      { label: "C", text: "getElementById()" },
      { label: "D", text: 'querySelector("#id")' },
    ], answer: "C" },
  { question: "13. Which event occurs when the user clicks on an HTML element?", options: [
      { label: "A", text: "onchange" },
      { label: "B", text: "onmouseover" },
      { label: "C", text: "onclick" },
      { label: "D", text: "onsubmit" },
    ], answer: "C" },
  { question: "14. What is the result of '5' + 2 in JavaScript?", options: [
      { label: "A", text: "7" },
      { label: "B", text: "52" },
      { label: "C", text: "NaN" },
      { label: "D", text: "Error" },
    ], answer: "B" },
  { question: "15. Which method removes the last element from an array?", options: [
      { label: "A", text: "shift()" },
      { label: "B", text: "pop()" },
      { label: "C", text: "splice()" },
      { label: "D", text: "delete()" },
    ], answer: "B" },
  { question: "16. What is the default value of a variable declared but not initialized?", options: [
      { label: "A", text: "0" },
      { label: "B", text: "null" },
      { label: "C", text: "undefined" },
      { label: "D", text: "false" },
    ], answer: "C" },
  { question: "17. Which loop executes at least once, even if the condition is false?", options: [
      { label: "A", text: "for" },
      { label: "B", text: "while" },
      { label: "C", text: "do...while" },
      { label: "D", text: "forEach" },
    ], answer: "C" },
  { question: "18. Which operator is used to compare both value and type?", options: [
      { label: "A", text: "=" },
      { label: "B", text: "==" },
      { label: "C", text: "===" },
      { label: "D", text: "!=" },
    ], answer: "C" },
  { question: "19. Which of the following defines an arrow function?", options: [
      { label: "A", text: "function() => {}" },
      { label: "B", text: "() => {}" },
      { label: "C", text: "=> function() {}" },
      { label: "D", text: "func =>" },
    ], answer: "B" },
  { question: "20. Which keyword stops the execution of a loop?", options: [
      { label: "A", text: "exit" },
      { label: "B", text: "break" },
      { label: "C", text: "continue" },
      { label: "D", text: "stop" },
    ], answer: "B" },
];

export default function Quiz3() {
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

  if (showResult) {
    const score = calculateScore();
    return (
      <div className="quiz-container">
                           <FaArrowLeft
          size={32}
          style={{ cursor: 'pointer', marginBottom: '10px',textAlign: 'left'}}
          onClick={() => navigate('/')}  // Home page route
          title="Go back to Home"
        />
        <h1>JavaScript Quiz Result</h1>
        <h2 style={{ color: score >= totalQuestions / 2 ? "green" : "red" }}>
          Your Score: {score}/{totalQuestions}
        </h2>
       
      </div>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div>
      <style>
        {`
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

        h1 { text-align: center; margin-bottom: 20px; color: #2c3e50; font-size: 2rem; }

        label { display: block; margin-bottom: 8px; cursor: pointer; margin: 15px; }

        .buttons { display: flex; justify-content: space-between; margin-top: 15px; flex-wrap: wrap; gap: 10px; }

        button { padding: 12px 20px; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; transition: 0.3s; flex: 1; max-width: 100px; height: 50px; }

        button:hover { opacity: 0.8; }
        .next-btn { background: #007bff; color: white; }
        .prev-btn { background: #6c757d; color: white; }
        .submit-btn { background: #28a745; color: white; width: 100%; margin-top: 10px; }

        @media (max-width: 767px) {
          .quiz-container { padding: 20px; width: 95%; margin: 30px auto; }
          h1 { font-size: 1.6rem; }
          label { margin: 10px 0; font-size: 14px; }
          button { font-size: 14px; padding: 10px; }
        }
        `}
      </style>
      <FaArrowLeft
        size={32}
        style={{ cursor: 'pointer', marginBottom: '10px', textAlign: 'left' }}
        onClick={() => navigate('/')}
        title="Go back to Home"
      />

      <div className="quiz-container">
        <h1>JavaScript Quiz</h1>
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
    </div>
  );
}

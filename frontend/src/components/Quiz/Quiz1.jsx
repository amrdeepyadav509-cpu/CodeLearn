import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const quizData = [
  {
    question: "1. What does HTML stand for?",
    options: [
      { label: "A", text: "HyperText Markup Language" },
      { label: "B", text: "HighText Machine Language" },
      { label: "C", text: "Hyperlinks and Text Marking Language" },
      { label: "D", text: "Home Tool Markup Language" },
    ],
    answer: "A",
  },
  {
    question: "2. Which tag is used to create a hyperlink?",
    options: [
      { label: "A", text: "<link>" },
      { label: "B", text: "<a>" },
      { label: "C", text: "<href>" },
      { label: "D", text: "<url>" },
    ],
    answer: "B",
  },
  {
    question: "3. Which attribute specifies an alternate text for an image?",
    options: [
      { label: "A", text: "title" },
      { label: "B", text: "src" },
      { label: "C", text: "alt" },
      { label: "D", text: "longdesc" },
    ],
    answer: "C",
  },
  {
    question: "4. Which tag is used to define an ordered list?",
    options: [
      { label: "A", text: "<ol>" },
      { label: "B", text: "<ul>" },
      { label: "C", text: "<li>" },
      { label: "D", text: "<list>" },
    ],
    answer: "A",
  },
  {
    question: "5. Which HTML element is used to display a scalar measurement within a range?",
    options: [
      { label: "A", text: "<meter>" },
      { label: "B", text: "<progress>" },
      { label: "C", text: "<range>" },
      { label: "D", text: "<slider>" },
    ],
    answer: "A",
  },
  {
    question: "6. Which attribute is used to specify the URL of an external script file?",
    options: [
      { label: "A", text: "href" },
      { label: "B", text: "src" },
      { label: "C", text: "link" },
      { label: "D", text: "script" },
    ],
    answer: "B",
  },
  {
    question: "7. Which tag creates a table row?",
    options: [
      { label: "A", text: "<th>" },
      { label: "B", text: "<tr>" },
      { label: "C", text: "<td>" },
      { label: "D", text: "<row>" },
    ],
    answer: "B",
  },
  {
    question: "8. Where should the metadata like <meta charset='utf-8'> be placed?",
    options: [
      { label: "A", text: "Inside <body>" },
      { label: "B", text: "Inside <head>" },
      { label: "C", text: "Before <!DOCTYPE>" },
      { label: "D", text: "After </html>" },
    ],
    answer: "B",
  },
  {
    question: "9. Which element is used for the largest heading?",
    options: [
      { label: "A", text: "<h1>" },
      { label: "B", text: "<h6>" },
      { label: "C", text: "<heading>" },
      { label: "D", text: "<big>" },
    ],
    answer: "A",
  },
  {
    question: "10. Which attribute specifies that an input field must be filled out before submitting the form?",
    options: [
      { label: "A", text: "required" },
      { label: "B", text: "placeholder" },
      { label: "C", text: "validate" },
      { label: "D", text: "pattern" },
    ],
    answer: "A",
  },
  {
    question: "11. Which element is used to define the footer for a document or section?",
    options: [
      { label: "A", text: "<bottom>" },
      { label: "B", text: "<footer>" },
      { label: "C", text: "<section-footer>" },
      { label: "D", text: "<aside>" },
    ],
    answer: "B",
  },
  {
    question: "12. What is the correct HTML element for inserting a line break?",
    options: [
      { label: "A", text: "<break>" },
      { label: "B", text: "<br>" },
      { label: "C", text: "<lb>" },
      { label: "D", text: "<nl>" },
    ],
    answer: "B",
  },
  {
    question: "13. Which input type should be used to accept only email addresses?",
    options: [
      { label: "A", text: "text" },
      { label: "B", text: "email" },
      { label: "C", text: "mail" },
      { label: "D", text: "url" },
    ],
    answer: "B",
  },
  {
    question: "14. Which element is used to group related elements in a form?",
    options: [
      { label: "A", text: "<group>" },
      { label: "B", text: "<fieldset>" },
      { label: "C", text: "<formgroup>" },
      { label: "D", text: "<div>" },
    ],
    answer: "B",
  },
  {
    question: "15. Which tag is used to embed audio content in an HTML page?",
    options: [
      { label: "A", text: "<sound>" },
      { label: "B", text: "<audio>" },
      { label: "C", text: "<music>" },
      { label: "D", text: "<soundtrack>" },
    ],
    answer: "B",
  },
  {
    question: "16. Which attribute is used to open a link in a new tab?",
    options: [
      { label: "A", text: 'target="_blank"' },
      { label: "B", text: 'newtab="true"' },
      { label: "C", text: 'rel="external"' },
      { label: "D", text: 'window="new"' },
    ],
    answer: "A",
  },
  {
    question: "17. Which element is best for marking up navigation links?",
    options: [
      { label: "A", text: "<nav>" },
      { label: "B", text: "<navigation>" },
      { label: "C", text: "<menu>" },
      { label: "D", text: "<ul>" },
    ],
    answer: "A",
  },
  {
    question: "18. How do you add a comment in HTML?",
    options: [
      { label: "A", text: "// This is a comment" },
      { label: "B", text: "<!-- This is a comment -->" },
      { label: "C", text: "/* This is a comment */" },
      { label: "D", text: "<!--- This is a comment --->" },
    ],
    answer: "B",
  },
  {
    question: "19. Which attribute is used on <form> to send files (like uploads) to the server?",
    options: [
      { label: "A", text: 'enctype="multipart/form-data"' },
      { label: "B", text: 'method="post"' },
      { label: "C", text: 'accept="file"' },
      { label: "D", text: 'encoding="file"' },
    ],
    answer: "A",
  },
  {
    question: "20. Which tag is used to include a CSS file in an HTML document?",
    options: [
      { label: "A", text: '<script src="style.css">' },
      { label: "B", text: '<link rel="stylesheet" href="style.css">' },
      { label: "C", text: '<style src="style.css">' },
      { label: "D", text: '<css src="style.css">' },
    ],
    answer: "B",
  },
];

export default function Quiz1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();
  const totalQuestions = quizData.length;

  const handleOptionChange = (e) => {
    setAnswers({
      ...answers,
      [currentQuestion]: e.target.value,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) setCurrentQuestion(currentQuestion + 1);
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const submitQuiz = () => {
    setShowResult(true);
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((q, index) => {
      if (answers[index] === q.answer) score++;
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
        <h1>HTML Quiz Result</h1>
        <h2 style={{ color: score >= totalQuestions / 2 ? "green" : "red" }}>
          Your Score: {score}/{totalQuestions}
        </h2>
      </div>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div>
                   <FaArrowLeft
          size={32}
          style={{ cursor: 'pointer', marginBottom: '10px',textAlign: 'left'}}
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

    <div className="quiz-container">
    

      <h1>HTML Quiz</h1>
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


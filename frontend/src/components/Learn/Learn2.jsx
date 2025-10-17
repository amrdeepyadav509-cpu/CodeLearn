import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaAudible, FaGripfire, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Learn2() {
  const [activeTab, setActiveTab] = useState("a1");
  const editorRef = useRef(null);
  const iframeRef = useRef(null);
  const navigate = useNavigate();

  // Load saved code from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("persistentCode");
    if (editorRef.current) editorRef.current.value = saved || "";
  }, []);

  const handleInput = () => {
    localStorage.setItem("persistentCode", editorRef.current.value);
  };

  const handleTabClick = (id) => {
    setActiveTab(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      section.classList.add("highlight");
      setTimeout(() => section.classList.remove("highlight"), 1200);
    }
  };

  const runCode = () => {
    const code = editorRef.current.value;
    if (!code.trim()) return;
    const iframe = iframeRef.current;
    iframe.contentDocument.open();
    iframe.contentDocument.write(code);
    iframe.contentDocument.close();
  };

  const topics = [
    { id: "a1", label: "CSS" },
    { id: "a2", label: "Syntax" },
    { id: "a3", label: "Selectors" },
    { id: "a4", label: "Text Styling" },
    { id: "a5", label: "Box Model" },
    { id: "a6", label: "Layout" },
    { id: "a7", label: "Color & Backgrounds" },
    { id: "a8", label: "Responsive Design" },
    { id: "a9", label: "Transitions & Animations" },
  ];

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "Arial, sans-serif", display: "flex", flexDirection:"column" }}>
      <style>{`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

/* ---------- HEADER ---------- */
header {
  background: linear-gradient(135deg, rgb(7, 114, 150), rgb(11, 170, 190));
  color: white;
  padding: 40px 20px;
  text-align: center;
}

header h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

header p {
  font-size: 1.2rem;
  margin: 5px 0;
}

.top {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  background-color: rgba(2, 188, 255, 0.519);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 20px auto;
}

/* ---------- STATS BOXES ---------- */
.div11 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.a1 {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  text-align: center;
  padding: 25px;
  width: 280px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.a1 i {
  font-size: 50px;
  margin-bottom: 10px;
}

.a1:hover {
  background-color: rgba(0, 255, 255, 0.3);
  transform: translateY(-10px);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
}

/* ---------- MAIN SECTION ---------- */
main {
  background: linear-gradient(135deg, rgb(11, 245, 182), rgb(231, 4, 216), rgb(50, 238, 7));
  padding: 40px 20px;
  color: #000;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 25px;
}

/* ---------- TOPICS ---------- */
.topic {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 30px;
}

.topic .link {
  padding: 12px 22px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.topic .link:hover {
  background: linear-gradient(135deg, #2ecc71, #27ae60);
  transform: translateY(-3px);
}

.topic .link.active {
  background: linear-gradient(135deg, #e67e22, #d35400);
}

/* ---------- CONTENT AREA ---------- */
.content {
  display: none;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
  background: rgba(255, 255, 255, 0.8);
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;
  max-width: 1000px;
  margin: 20px auto;
  font-size: 1rem;
  line-height: 1.5;
}

.content.show {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

/* ---------- CODE EDITOR ---------- */
#z2 {
  text-align: center;
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  color: white;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

#container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: #1e1e2f;
  border-radius: 12px;
  padding: 15px;
  justify-content: center;
}

#editorPanel, #outputPanel {
  flex: 1 1 400px;
  border-radius: 12px;
  min-height: 300px;
  overflow: hidden;
  background: #39a3b8;
}

#miniCode {
  width: 100%;
  height: 250px;
  border: none;
  padding: 15px;
  font-family: "Courier New", monospace;
  font-size: 16px;
  background: #1e1e2f;
  color: white;
  border-radius: 8px;
  resize: none;
}

#z1 {
  display: block;
  margin: 10px auto;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #ff416c, #ff4b2b);
  color: white;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s ease;
}

#z1:hover {
  transform: scale(1.05);
}

#outputPanel iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: white;
}

/* ---------- FOOTER ---------- */
footer {
  background: linear-gradient(135deg, rgba(11, 245, 183, 0.362), rgba(231, 4, 216, 0.4), rgba(49, 238, 7, 0.405));
  text-align: center;
  padding: 40px 20px;
}

/* ---------- RESPONSIVE BREAKPOINTS ---------- */

/* 💻 Large Tablets / Small Laptops */
@media (max-width: 1200px) {
  header h1 {
    font-size: 2.5rem;
  }
}

/* 📱 Tablets */
@media (max-width: 992px) {
  header h1 {
    font-size: 2rem;
  }
  .a1 {
    width: 45%;
  }
  #container {
    flex-direction: column;
  }
}

/* 📱 Large Phones */
@media (max-width: 768px) {
  .a1 {
    width: 100%;
  }
  .topic {
    flex-direction: column;
    align-items: center;
  }
  h2 {
    font-size: 1.8rem;
  }
  header h1 {
    font-size: 1.8rem;
  }
  header p {
    font-size: 1rem;
  }
}

/* 📱 Small Phones (400px) */
@media (max-width: 480px) {
  .top {
    width: 70px;
    height: 70px;
    font-size: 40px;
    
  }
    *{
  margin-left: 50px;
  }
  .a1 {
    width: 100%;
    padding: 15px;
  }
.content{
margin-left: 300px;
}
  h2 {
    font-size: 1.5rem;
  }
  header h1 {
    font-size: 1.5rem;
    
  }
  #container {
    padding: 10px;
margin-left: 200px;
  }
  #miniCode {
    height: 300px;
  }
}

      `}</style>

      <header>
        <FaArrowLeft size={32} style={{ cursor: 'pointer', marginBottom:'10px' }} onClick={()=>navigate('/')} title="Go back to Home" />
        <div className="top">&lt; &gt;</div>
        <h1>MASTER CSS</h1>
        <p>Learn CSS fundamentals through interactive Q&A cards.</p>
        <p>Search, filter, and explore comprehensive answers with code examples.</p>
        <div className="div11">
          <div className="a1"><FaAudible /><h4>50+</h4><h4>Content</h4></div>
          <div className="a1"><FaGripfire /><h4>50+</h4><h4>Categories</h4></div>
          <div className="a1"><FaUsers /><h4>100%</h4><h4>Interactive</h4></div>
        </div>
      </header>

      <main>
        <h2>Content</h2>
        <div className="topic">
          {topics.map(topic => (
            <button key={topic.id} className={`link ${activeTab===topic.id ? "active":""}`} onClick={()=>handleTabClick(topic.id)}>{topic.label}</button>
          ))}
        </div>

        <div className="contents">
          {/* CSS Tab Contents */}
          <div className={`content ${activeTab==="a1"? "show":""}`} id="a1">
            <h2>CSS</h2>
            <pre>{`1. What is CSS?

CSS (Cascading Style Sheets) is used to style HTML elements including color, font, spacing, and layout.

2. How CSS Works

- Inline CSS: <p style="color: blue;">This is a paragraph</p>

- Internal CSS: <style>p { color: blue; }</style>

- External CSS: <link rel="stylesheet" href="style.css">`}</pre>
          </div>
          <div className={`content ${activeTab==="a2"? "show":""}`} id="a2">
            <h2>Syntax</h2>
            <pre>{`selector {

  property: value;

}

Example:

p {

  color: blue;

  font-size: 10px;

}`}</pre>
          </div>
          <div className={`content ${activeTab==="a3"? "show":""}`} id="a3">
            <h2>Selectors</h2>
            <pre>{`Element selector: p { color: green; }

Class selector: .highlight { background-color: yellow; }

ID selector: #main-header { font-size:24px; }

Universal selector: * { margin:0; }

Attribute selector: input[type="text"] { background-color: lightgrey; }`}</pre>
          </div>
          <div className={`content ${activeTab==="a4"? "show":""}`} id="a4">
            <h2>Text Styling</h2>
            <pre>{`p { font-family: Arial, sans-serif; }

h1 { font-size: 40px; }

p { font-weight: bold; }

em { font-style: italic; }

h1 { text-transform: uppercase; }

p { color: blue; }

h1 { text-align: center; }

a { text-decoration: underline; }`}</pre>
          </div>
          <div className={`content ${activeTab==="a5"? "show":""}`} id="a5">
            <h2>Box Model</h2>
            <pre>{`div {

  padding: 30px;

  border: 20px;

  margin: 10px;

}`}</pre>
          </div>
          <div className={`content ${activeTab==="a6"? "show":""}`} id="a6">
            <h2>Layout</h2>
            <pre>{`div { display: block; }

span { display: inline; }

div { display: inline-block; }

.container { display: flex; justify-content: space-between; }

div { position: relative; top:10px; left:20px; }`}</pre>
          </div>
          <div className={`content ${activeTab==="a7"? "show":""}`} id="a7">
            <h2>Color & Backgrounds</h2>
            <pre>{`Colors: red, blue, green, #ff5733, rgb(255,0,0), rgba(255,0,0,0.5)

body {

  background-image: url('background.jpg');

  background-repeat: no-repeat;

  background-size: cover;

}`}</pre>
          </div>
          <div className={`content ${activeTab==="a8"? "show":""}`} id="a8">
            <h2>Responsive Design</h2>
            <pre>{`@media (max-width: 600px) {

  body { font-size: 14px; }

}`}</pre>
          </div>
          <div className={`content ${activeTab==="a9"? "show":""}`} id="a9">
            <h2>Transitions & Animations</h2>
            <pre>{`button { background-color: blue; transition: background-color 0.5s ease; }

button:hover { background-color: green; }

@keyframes slide {

  from { transform: translateX(0); }

  to { transform: translateX(100px); }

}
  
div { animation: slide 2s infinite; }`}</pre>
          </div>

          {/* Mini Code Editor */}
          <h2 id="z2">Mini Code Editor & Output</h2>
          <div id="container">
            <div id="editorPanel">
              <textarea ref={editorRef} id="miniCode" placeholder="Write HTML/JS code here..." onChange={handleInput} />
              <button id="z1" onClick={runCode}>Run Code</button>
            </div>
            <div id="outputPanel">
              <iframe ref={iframeRef} id="outputFrame" title="Output"></iframe>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="top">&lt; &gt;</div>
        <h2>Keep Learning CSS</h2>
        <p>Master CSS fundamentals with our comprehensive guide.</p>
        <p>Each content is crafted to build your understanding step by step.</p>
      </footer>
    </div>
  );
}

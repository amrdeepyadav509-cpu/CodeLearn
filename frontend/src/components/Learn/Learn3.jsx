import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaAudible, FaGripfire, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Learn3() {
  const [activeTab, setActiveTab] = useState("j1");
  const editorRef = useRef(null);
  const iframeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("persistentJSCode");
    if (editorRef.current) editorRef.current.value = saved || "";
  }, []);

  const handleInput = () => {
    localStorage.setItem("persistentJSCode", editorRef.current.value);
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
    iframe.contentDocument.write(`<script>${code}<\/script>`);
    iframe.contentDocument.close();
  };

  const topics = [
    { id: "j0", label: "All" },
    { id: "j1", label: "Variables & Data Types" },
    { id: "j2", label: "Functions" },
    { id: "j3", label: "Loops" },
    { id: "j4", label: "Conditionals" },
    { id: "j5", label: "Arrays" },
    { id: "j6", label: "Objects" },
    { id: "j7", label: "DOM Manipulation" },
    { id: "j8", label: "Events" },
    { id: "j9", label: "ES6 Features" },
    { id: "j10", label: "JSON & Storage" },
    { id: "j11", label: "Error Handling" },
    { id: "j12", label: "Timers" },
    { id: "j13", label: "Arrow Functions" },
    { id: "j14", label: "Template Literals" },
    { id: "j15", label: "Destructuring" },
    { id: "j16", label: "Spread & Rest Operators" },
    { id: "j17", label: "String Methods" },
    { id: "j18", label: "Number & Math" },
    { id: "j19", label: "Boolean & Logic" },
    { id: "j20", label: "Switch Statements" },
  ];

  return (
    <div style={{ margin: "0", padding: "0", fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column" }}>
      <style>
        {`
            a {
        cursor: pointer;
        font-size: 30px;
        width: 50px;
        height: 50px;
        
    }

    .top {
        text-align: center;
        align-items: center;
        align-content: center;
        height: 100px;
        width: 100px;
        padding: 0;
        margin: auto;
        font-size: 60px;
        background-color: rgba(2, 188, 255, 0.519);
        border-radius: 100%;
    }

    header {
        background-color: rgb(7, 114, 150);
        height: 600px;
        width: 100%;
        color: white;
        transition: background 0.5s ease;
        padding: 20px;
    }

    header p {
        text-align: center;
    }

    header h1 {
        text-align: center;
        font-size: 3rem;
        padding-top: 30px;
        margin-top: 0;
    }

    .div11 {
        display: flex;
        justify-content: center;
        flex-direction: row;
       padding: 20px
        gap: 20px;
        margin-top: 40px;
    }

    .a1 {
        background: transparent;
        height: 150px;
        width: 250px;
        text-align: center;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        padding: 20px;
    }

    .a1 i {
        font-size: 50px;
    }

    .a1:hover {
        background-color: rgba(0, 255, 255, 0.671);
        border-radius: 15px;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
        transform: translateY(-10px);
    }

    main {
        min-height: 100vh;
        width: 100%;
        background: linear-gradient(135deg, rgb(11, 245, 182), rgb(231, 4, 216), rgb(50, 238, 7));
        
    }

    h2 {
        text-align: center;
        font-size: 60px;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    .topic {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-bottom: 20px;
        justify-content: center;
        margin: 20px;
    }

    .topic .link {
        padding: 12px 20px;
        border: none;
        cursor: pointer;
        background: linear-gradient(135deg, #3498db, #2980b9);
        color: white;
        border-radius: 30px;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.5px;
        position: relative;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .topic .link:hover {
        background: linear-gradient(135deg, #2ecc71, #27ae60);
        transform: translateY(-4px) scale(1.05);
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
    }

    .topic .link.active {
        background: linear-gradient(135deg, #e67e22, #d35400);
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
    }

    .topic .link::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
    }

    .topic .link:active::after {
        width: 200px;
        height: 200px;
        opacity: 0;
    }

    .content {
        display: none;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease;
        background: rgb(139, 242, 244);
           padding-bottom: 30px;
          font-size: 20px;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        margin: 20px;
        
    }

    .content.show {
        display: block;
        opacity: 1;
        transform: translateY(0);
    }

    li {
        font-size: 30px;
        
        margin-bottom: 30px;
         margin-left: 50px;
    }

    h5 {
        font-size: 20px;
    }

  

    footer {
        background: linear-gradient(135deg, rgba(11, 245, 183, 0.362), rgba(231, 4, 216, 0.4), rgba(49, 238, 7, 0.405));
        height: 500px;
        width: 100%;
        align-content: center;
        text-align: center;
    }

    /* ✅ Editor Header */
    #z2 {
        text-align: center;
       
        margin: 0;
        background: linear-gradient(90deg, #6a11cb, #2575fc);
        color: #fff;
        font-weight: 600;
        letter-spacing: 1px;
  
        box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    }

    /* ✅ Editor Container */
    #container {
        flex: 1;
        display: flex;
        gap: 15px;
        padding: 15px;
        box-sizing: border-box;
        animation: fadeIn 0.8s ease forwards;
        height: 500px;
       
        background: #1e1e2f;
    }

    /* ✅ Editor Panel */
    #editorPanel {
        flex: 1;
        width: auto;
        display: flex;
        flex-direction: column;
        background: #39a3b8;
        padding-bottom: 10px;
        border-radius: 12px;
        box-shadow: 0 6px 12px rgba(0,0,0,0.3);
        transition: transform 0.3s ease;
    }

    #editorPanel:hover {
        transform: scale(1.02);
    }

    /* ✅ Textarea */
    #miniCode {
        flex: 1;
        padding: 15px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 16px;
        resize: none;
        border: none;
        border-radius: 8px;
        background: #1e1e2f;
        color: #f0f0f0;
        box-shadow: inset 0 0 10px rgba(255,255,255,0.05);
    }

    #miniCode:focus {
        outline: none;
        background: #26263c;
        box-shadow: inset 0 0 12px rgba(255,255,255,0.1);
    }

    /* ✅ Run Button */
    #z1 {
        padding: 10px 18px;
        font-size: 16px;
        cursor: pointer;
        background: linear-gradient(90deg, #ff416c, #ff4b2b);
        color: white;
        border: none;
        border-radius: 8px;
        margin-top: 12px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    #z1:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(255,75,43,0.5);
    }

    /* ✅ Output Panel */
    #outputPanel {
        flex: 1;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 6px 12px rgba(0,0,0,0.3);
        background: #f7f9fa;
    }

    #outputPanel:hover {
        transform: scale(1.02);
    }

    iframe {
        width: 100%;
        height: 100%;
        border: none;
        background: #eefafd;
    }

    /* ✅ Fade-in animation */
    @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
    }

    /* ✅ Responsive Layout */
    @media (max-width: 1024px) {
        #container {
            flex-direction: column;
            height: auto;
        }
        #editorPanel, #outputPanel {
            width: 100%;
            min-height: 250px;
        }
    }

    @media (max-width: 768px) {
        header h1 {
            font-size: 2rem;
        }
        .a1 {
            width: 45%;
            font-size: 1rem;
        }
        h2 {
            font-size: 2rem;
        }
    }

    @media (max-width: 480px) {
        .top {
            font-size: 40px;
            height: 70px;
            width: 70px;
        }
        header h1 {
            font-size: 1.6rem;
        }
        .a1 {
            width: auto;
            font-size: 1rem;

        }
        h2 {
            font-size: 1.5rem;
        }
        .topic {
         height: auto;

            flex-direction: row;
             justify-content: space-around;
            align-items: center;
        }
            
        #container {
            padding: 10px;
        }
    }

/* Base style for all images */
.content img,
.contents img {
  display: block;
  max-width: 75%;        /* moderate image size */
  height: auto;
  margin: 15px auto;     /* center alignment */
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  object-fit: contain;
}

/* Adjust for images inside divs (with inline margin-left in HTML) */
.content > div img,
.contents > div img {
  max-width: 65%;
  height: auto;
  margin: 15px auto;
}

/* For screens between 480px and 768px (tablets, large phones) */
@media (min-width: 480px) and (max-width: 768px) {
  .content img,
  .contents img {
    max-width: 85%;
  }
  .content > div img,
  .contents > div img {
    max-width: 80%;
  }
}

/* For screens between 769px and 992px (small laptops) */
@media (min-width: 769px) and (max-width: 992px) {
  .content img,
  .contents img {
    max-width: 70%;
  }
  .content > div img,
  .contents > div img {
    max-width: 65%;
  }
}

/* For screens between 993px and 1200px (medium desktops) */
@media (min-width: 993px) and (max-width: 1200px) {
  .content img,
  .contents img {
    max-width: 60%;
  }
  .content > div img,
  .contents > div img {
    max-width: 55%;
  }
}
        `}
      </style>
      <header>
        <FaArrowLeft size={32} style={{ cursor: 'pointer', marginBottom: '10px' }} onClick={() => navigate('/')} title="Go back to Home" />
        <div className="top">&lt; &gt;</div>
        <h1>MASTER JAVASCRIPT</h1>
        <p>Learn JavaScript fundamentals with interactive lessons and code examples.</p>
        <div className="div11">
          <div className="a1"><FaAudible /><h4>20+</h4><h4>Topics</h4></div>
          <div className="a1"><FaGripfire /><h4>Interactive</h4><h4>Examples</h4></div>
          <div className="a1"><FaUsers /><h4>Editable</h4><h4>Code</h4></div>
        </div>
      </header>

      <main>
        <h2>JavaScript Content</h2>
        <div className="topic">
          {topics.map(topic => (
            <button
              key={topic.id}
              className={`link ${activeTab === topic.id ? "active" : ""}`}
              onClick={() => handleTabClick(topic.id)}
            >
              {topic.label}
            </button>
          ))}
        </div>

        <div className="contents">
          {/* j1 Variables & Data Types */}
          <div className={`content ${activeTab === "j1" || activeTab === "j0" ? "show" : ""}`} id="j1">
            <h2>Variables & Data Types</h2>
            <ul>
              <li>let, const, var for variable declaration</li>
              <li>Data Types: String, Number, Boolean, Object, Array, Null, Undefined</li>
              <li>Example: <code>let name = "Amrdeep";</code></li>
            </ul>
          </div>

          {/* j2 Functions */}
          <div className={`content ${activeTab === "j2" || activeTab === "j0" ? "show" : ""}`} id="j2">
            <h2>Functions</h2>
            <ul>
              <li>Function Declaration: <code>function greet(){}</code></li>
              <li>Arrow Function: <code>const greet = () =&gt; {}</code></li>
              <li>Returning values: <code>return x + y;</code></li>
            </ul>
          </div>

          {/* j3 Loops */}
          <div className={`content ${activeTab === "j3" || activeTab === "j0" ? "show" : ""}`} id="j3">
            <h2>Loops</h2>
            <ul>
              <li>for, while, do-while loops</li>
              <li>Array iteration: <code>array.forEach(item =&gt; ...)</code></li>
            </ul>
          </div>

          {/* j4 Conditionals */}
          <div className={`content ${activeTab === "j4" || activeTab === "j0" ? "show" : ""}`} id="j4">
            <h2>Conditionals</h2>
            <ul>
              <li>if, else if, else statements</li>
              <li>ternary operator: <code>let res = a &gt; b ? "yes" : "no";</code></li>
            </ul>
          </div>

          {/* j5 Arrays */}
          <div className={`content ${activeTab === "j5" || activeTab === "j0" ? "show" : ""}`} id="j5">
            <h2>Arrays</h2>
            <ul>
              <li>Declaration: <code>let arr = [1,2,3];</code></li>
              <li>Methods: push, pop, shift, unshift, map, filter, reduce</li>
            </ul>
          </div>

          {/* j6 Objects */}
          <div className={`content ${activeTab === "j6" || activeTab === "j0" ? "show" : ""}`} id="j6">
            <h2>Objects</h2>
            <ul>
              <li>Declaration: <code>const obj = </code></li>
              <li>Access: <code>obj.name</code></li>
              <li>Looping: <code>for (let key in obj) {  }</code></li>
            </ul>
          </div>

          {/* j7 DOM Manipulation */}
          <div className={`content ${activeTab === "j7" || activeTab === "j0" ? "show" : ""}`} id="j7">
            <h2>DOM Manipulation</h2>
            <ul>
              <li>Get Element: <code>document.getElementById('id')</code></li>
              <li>Modify Content: <code>element.innerHTML = "Hello";</code></li>
              <li>Change Style: <code>element.style.color = "red";</code></li>
            </ul>
          </div>

          {/* j8 Events */}
          <div className={`content ${activeTab === "j8" || activeTab === "j0" ? "show" : ""}`} id="j8">
            <h2>Events</h2>
            <ul>
              <li>Click: <code>element.addEventListener('click', fn)</code></li>
              <li>Mouseover, Keydown, Submit, etc.</li>
            </ul>
          </div>

          {/* j9 ES6 Features */}
          <div className={`content ${activeTab === "j9" || activeTab === "j0" ? "show" : ""}`} id="j9">
            <h2>ES6 Features</h2>
            <ul>
              <li>let, const</li>
              <li>Arrow Functions</li>
              <li>Template Literals</li>
              <li>Destructuring</li>
              <li>Spread & Rest Operators</li>
            </ul>
          </div>

          {/* j10 JSON & Storage */}
          <div className={`content ${activeTab === "j10" || activeTab === "j0" ? "show" : ""}`} id="j10">
            <h2>JSON & Storage</h2>
            <ul>
              <li>JSON: <code>JSON.parse(), JSON.stringify()</code></li>
              <li>LocalStorage: <code>localStorage.setItem('key', value)</code></li>
              <li>SessionStorage: <code>sessionStorage.setItem('key', value)</code></li>
            </ul>
          </div>

          {/* j11 Error Handling */}
          <div className={`content ${activeTab === "j11" || activeTab === "j0" ? "show" : ""}`} id="j11">
            <h2>Error Handling</h2>
            <ul>
              <li>try...catch...finally</li>
              <li>throw new Error("message")</li>
            </ul>
          </div>

          {/* j12 Timers */}
          <div className={`content ${activeTab === "j12" || activeTab === "j0" ? "show" : ""}`} id="j12">
            <h2>Timers</h2>
            <ul>
              <li>setTimeout(fn, ms)</li>
              <li>setInterval(fn, ms)</li>
              <li>clearTimeout(), clearInterval()</li>
            </ul>
          </div>

          {/* j13 Arrow Functions */}
          <div className={`content ${activeTab === "j13" || activeTab === "j0" ? "show" : ""}`} id="j13">
            <h2>Arrow Functions</h2>
            <ul>
              <li>Basic Syntax: <code>const fn = () =&gt; {}</code></li>
              <li>Implicit return: <code>const square = x =&gt; x*x;</code></li>
            </ul>
          </div>

          {/* j14 Template Literals */}
          <div className={`content ${activeTab === "j14" || activeTab === "j0" ? "show" : ""}`} id="j14">
            <h2>Template Literals</h2>
            <ul>
              <li>Backticks `` and ${} for variables</li>
              <li>Example: <code>let msg = `Hello ${name}`;</code></li>
            </ul>
          </div>

          {/* j15 Destructuring */}
          <div className={`content ${activeTab === "j15" || activeTab === "j0" ? "show" : ""}`} id="j15">
            <h2>Destructuring</h2>
            <ul>
              <li>Array: <code>const [a, b] = arr;</code></li>
              <li>Object: <code>const = obj;</code></li>
            </ul>
          </div>

          {/* j16 Spread & Rest */}
          <div className={`content ${activeTab === "j16" || activeTab === "j0" ? "show" : ""}`} id="j16">
            <h2>Spread & Rest Operators</h2>
            <ul>
              <li>Spread: <code>let arr2 = [...arr1];</code></li>
              <li>Rest: <code>function fn(...args) {}</code></li>
            </ul>
          </div>

          {/* j17 String Methods */}
          <div className={`content ${activeTab === "j17" || activeTab === "j0" ? "show" : ""}`} id="j17">
            <h2>String Methods</h2>
            <ul>
              <li>length, slice, substring, substr</li>
              <li>toUpperCase(), toLowerCase(), trim()</li>
              <li>includes(), indexOf(), replace()</li>
            </ul>
          </div>

          {/* j18 Number & Math */}
          <div className={`content ${activeTab === "j18" || activeTab === "j0" ? "show" : ""}`} id="j18">
            <h2>Number & Math</h2>
            <ul>
              <li>Number methods: parseInt, parseFloat, toFixed()</li>
              <li>Math: Math.round(), Math.floor(), Math.ceil(), Math.random()</li>
            </ul>
          </div>

          {/* j19 Boolean & Logic */}
          <div className={`content ${activeTab === "j19" || activeTab === "j0" ? "show" : ""}`} id="j19">
            <h2>Boolean & Logic</h2>
            <ul>
              <li>Boolean values: true, false</li>
              <li>Logical operators: &&, ||, !</li>
              <li>Comparison operators: ==, ===, !=, !==, &gt;, &lt;, &gt;=, &lt;=</li>
            </ul>
          </div>

          {/* j20 Switch Statements */}
          <div className={`content ${activeTab === "j20" || activeTab === "j0" ? "show" : ""}`} id="j20">
            <h2>Switch Statements</h2>
            <ul>
              <li>Syntax: <code>switch(expression) </code></li>
              <li>Useful for multiple conditional checks</li>
            </ul>
          </div>
        </div>

        {/* Code Editor */}
        <h2 id="z2">Mini Code Editor & Output</h2>
        <div id="container">
          <div id="editorPanel">
            <textarea
              id="miniCode"
              ref={editorRef}
              placeholder="Write JavaScript code here..."
              onChange={handleInput}
            />
            <button id="z1" onClick={runCode}>Run Code</button>
          </div>
          <div id="outputPanel">
            <iframe id="outputFrame" ref={iframeRef} title="Output"></iframe>
          </div>
        </div>
      </main>

      <footer>
        <div className="top">&lt; &gt;</div>
        <h2>Keep Learning JavaScript</h2>
        <p>Practice and master core concepts with interactive examples.</p>
      </footer>
    </div>
  );
}


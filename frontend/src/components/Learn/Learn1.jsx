import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaAudible, FaGripfire, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Learn1() {
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
    { id: "a0", label: "All" },
    { id: "a1", label: "HTML5 Semantics" },
    { id: "a2", label: "Basic" },
    { id: "a3", label: "HTML Elements and Tags" },
    { id: "a4", label: "Hyperlinks and Images" },
    { id: "a5", label: "Lists" },
    { id: "a6", label: "Tables" },
    { id: "a7", label: "Forms and Input Elements" },
    { id: "a8", label: "Multimedia" },
  ];

  return (
    <div style={{        margin: "0",  padding: "0", fontFamily: "Arial ,sans-serif", display: "flex", flexDirection:"column" }}>
      <style>{`
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
            flex-direction: column;
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
      `}</style>
      <header>
         <FaArrowLeft
          size={32}
          style={{ cursor: 'pointer', marginBottom: '10px' }}
          onClick={() => navigate('/')}  // Home page route
          title="Go back to Home"
        />
        <div className="top">&lt; &gt;</div>
        <h1>MASTER HTML</h1>
        <p>Learn HTML fundamentals through interactive Q&A cards.</p>
        <p>Search, filter, and explore comprehensive answers with code examples.</p>

        <div className="div11">
          <div className="a1">
            <FaAudible />
            <h4>50+</h4>
            <h4>Content</h4>
          </div>
          <div className="a1">
            <FaGripfire />
            <h4>50+</h4>
            <h4>Categories</h4>
          </div>
          <div className="a1">
            <FaUsers />
            <h4>100%</h4>
            <h4>Interactive</h4>
          </div>
        </div>
      </header>

      <main>
        <h2>Content</h2>
        <div className="topic">
          {topics.map((topic) => (
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
          {/* a1: HTML5 Semantics */}
          <div className={`content ${activeTab === "a1" || activeTab === "a0" ? "show" : ""}`} id="a1">
            <h2>HTML5 Semantics</h2>
            <ol>
              <li>Semantic Elements</li>
              <ul>
                <li>&lt;header&gt;: Defines the header of a page or section.</li>
                <li>&lt;footer&gt;: Represents the footer of a page or section.</li>
                <li>&lt;article&gt;: Defines a self-contained, reusable content block.</li>
                <li>&lt;section&gt;: Represents a section of content within a document.</li>
                <li>&lt;nav&gt;: Represents a section of navigation links.</li>
              </ul>
            </ol>
          </div>

          {/* a2: Basic */}
          <div className={`content ${activeTab === "a2" || activeTab === "a0" ? "show" : ""}`} id="a2">
            <h2>Basic</h2>
            <ol>
              <li>An HTML Document Follows a Specific Structure</li>
            </ol>
            <ul>
              <li>&lt;!DOCTYPE html&gt;: Declares the document type and version (HTML5).</li>
              <li>&lt;html&gt;: The root element enclosing the entire webpage.</li>
              <li>&lt;head&gt;: Contains meta-information, such as the title.</li>
              <li>&lt;body&gt;: Contains visible content of the page, like headings and paragraphs.</li>
            </ul>
          </div>

          {/* a3: HTML Elements and Tags */}
          <div className={`content ${activeTab === "a3" || activeTab === "a0" ? "show" : ""}`} id="a3">
            <h2>HTML Elements and Tags</h2>
            <ol>
              <li>HTML Element</li>
              <ul>
                <li>Opening Tag : &lt; &gt;</li>
                <li>Closing Tag : &lt;/&gt;</li>
                <li>Example: &lt;p&gt;This is a paragraph&lt;/p&gt;</li>
              </ul>
              <li>Common HTML Tags</li>
              <ul>
                <li>Headings: &lt;h1&gt; to &lt;h6&gt;</li>
                <li>Paragraph: &lt;p&gt;</li>
                <li>Bold: &lt;b&gt;</li>
                <li>Italic: &lt;i&gt;</li>
                <li>Underline: &lt;u&gt;</li>
                <li>Strong: &lt;strong&gt;</li>
                <li>Emphasis: &lt;em&gt;</li>
                <li>Break: &lt;br&gt;</li>
                <li>Horizontal Rule: &lt;hr&gt;</li>
              </ul>
            </ol>
          </div>

          {/* a4: Hyperlinks and Images */}
          <div className={`content ${activeTab === "a4" || activeTab === "a0" ? "show" : ""}`} id="a4">
            <h2>Hyperlinks and Images</h2>
            <ol>
              <li>Hyperlinks</li>
              <ul>
                <li>&lt;a href="https://example.com"&gt;Website&lt;/a&gt;</li>
                <li>href: URL of the destination page.</li>
                <li>target="_blank": Opens the link in a new tab.</li>
              </ul>
              <li>Images</li>
              <ul>
                <li>&lt;img src="image.jpg" alt="Description"&gt;</li>
                <li>src: Image URL</li>
                <li>alt: Description for accessibility</li>
              </ul>
            </ol>
          </div>

          {/* a5: Lists */}
          <div className={`content ${activeTab === "a5" || activeTab === "a0" ? "show" : ""}`} id="a5">
            <h2>Lists</h2>
            <ol>
              <li>Unordered Lists</li>
              <ul>
                <li>&lt;ul&gt; and &lt;li&gt; for bullet lists</li>
              </ul>
              <li>Ordered Lists</li>
              <ul>
                <li>&lt;ol&gt; and &lt;li&gt; for numbered lists</li>
              </ul>
              <li>Definition Lists</li>
              <ul>
                <li>&lt;dl&gt; &lt;dt&gt;Term&lt;/dt&gt; &lt;dd&gt;Definition&lt;/dd&gt;</li>
              </ul>
            </ol>
          </div>

          {/* a6: Tables */}
          <div className={`content ${activeTab === "a6" || activeTab === "a0" ? "show" : ""}`} id="a6">
            <h2>Tables</h2>
            <ol>
              <li>Creating Tables</li>
              <ul>
                <li>
                  &lt;table&gt;, &lt;tr&gt;, &lt;td&gt;, &lt;th&gt;
                  <ul>
                    <li>&lt;table&gt;</li>
                    <li>&lt;tr&gt;&lt;td&gt;Amar&lt;/td&gt;&lt;td&gt;19&lt;/td&gt;&lt;/tr&gt;</li>
                  </ul>
                </li>
                <li>&lt;tr&gt;: Table row</li>
                <li>&lt;th&gt;: Table header</li>
                <li>&lt;td&gt;: Table data cell</li>
              </ul>
            </ol>
          </div>

          {/* a7: Forms and Input Elements */}
          <div className={`content ${activeTab === "a7" || activeTab === "a0" ? "show" : ""}`} id="a7">
            <h2>Forms and Input Elements</h2>
            <ol>
              <li>Creating Forms</li>
              <ul>
                <li>&lt;form action="/submit" method="post"&gt; ... &lt;/form&gt;</li>
                <li>action: URL to submit form data</li>
                <li>method: HTTP method</li>
              </ul>
              <li>Input Elements</li>
              <ul>
                <li>Text: &lt;input type="text"&gt;</li>
                <li>Email: &lt;input type="email"&gt;</li>
                <li>Password: &lt;input type="password"&gt;</li>
                <li>Checkbox, Radio, Date, File, URL, Tel, Submit...</li>
              </ul>
            </ol>
          </div>

          {/* a8: Multimedia */}
          <div className={`content ${activeTab === "a8" || activeTab === "a0" ? "show" : ""}`} id="a8">
            <h2>Multimedia</h2>
            <ol>
              <li>Audio</li>
              <ul>
                <li>&lt;audio controls&gt;&lt;source src="audio.mp3" type="audio/mp3"&gt;&lt;/audio&gt;</li>
              </ul>
              <li>Video</li>
              <ul>
                <li>&lt;video width="320" height="240" controls&gt;&lt;source src="movie.mp4" type="video/mp4"&gt;&lt;/video&gt;</li>
              </ul>
            </ol>
          </div>
        </div>

        {/* Code Editor */}
        <h2 id="z2">Mini Code Editor & Output</h2>
        <div id="container">
          <div id="editorPanel">
            <textarea
              id="miniCode"
              ref={editorRef}
              placeholder="Write HTML/JS code here..."
              onChange={handleInput}
            />
            <button id="z1" onClick={runCode}>
              Run Code
            </button>
          </div>
          <div id="outputPanel">
            <iframe id="outputFrame" ref={iframeRef} title="Output"></iframe>
          </div>
        </div>
      </main>

      <footer>
        <div className="top">&lt; &gt;</div>
        <h2>Keep Learning HTML</h2>
        <p>Master the fundamentals of web development with our comprehensive HTML guide.</p>
        <p>Each content is crafted to build your understanding step by step.</p>
      </footer>


    </div>
  );
}

import React, { useEffect, useState } from 'react';
import API from '../../api';
import Profile from './Profile';
import TaskManager from './TaskManager';
import FeedbackPanel from './FeedbackPanel';
import { Link, useNavigate } from 'react-router-dom';
import "./Home.css";
import screenshot1 from './Screenshot 2025-10-08 230028.png';
import screenshot2 from './Screenshot 2025-10-08 230102.png';
import screenshot3 from './Screenshot 2025-10-08 230121.png';
import screenshot4 from './Screenshot 2025-10-08 230146.png';
import screenshot5 from './Screenshot 2025-10-08 233844.png';
import screenshot6 from './Screenshot 2025-10-08 230220.png';
import screenshot7 from './Screenshot 2025-10-08 230234.png';
import screenshot8 from './Screenshot 2025-10-08 233426.png';





export default function Home() {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    async function load() {
      try {
        const res = await API.get('/users/me');
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, []);

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      section.classList.add('highlight');
      setTimeout(() => section.classList.remove('highlight'), 1200);
    }
  };
  const screenshots = [
  screenshot1,
  screenshot2,
  screenshot3,
  screenshot4,
  screenshot5,
  screenshot6,
  screenshot7,
  screenshot8,
];

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">
          <h1>Oure</h1><h2>Code</h2>
        </div>

        <button onClick={() => scrollToSection('html')}>HTML</button>
        <button onClick={() => scrollToSection('css')}>CSS</button>
        <button style={{ width: 120 }} onClick={() => scrollToSection('javascript')}>JavaScript</button>

        <div className="search">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && scrollToSection(searchQuery)}
            placeholder="Search"
          />
          <i className="fa-solid fa-magnifying-glass" onClick={() => scrollToSection(searchQuery)}></i>
        </div>

        <button onClick={() => scrollToSection('task')}>Task</button>
        <button style={{ width: 'auto' }} onClick={() => scrollToSection('feed')}>Projects</button>
         <div className="logo2">
          <h1></h1><h2></h2>
        </div>
        <Profile user={user} logout={logout} />
      </nav>

      <div className="main">
        <h1>Welcome To Learn Code</h1>
        <h5>Build Your Skills for Free.</h5>
      </div>

      {/* Learn Sections */}
      <section id="html" className="learn-section">
        <div className="learn-card">
          <h1>HTML</h1>
          <p>The language for building web pages</p>
          <button onClick={() => navigate('/Learn/1')}>Learn HTML</button>
        </div>
        <div className="learn-image">
          <Link to="/Quiz/1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYk594AhSKw5Eb3iHkPHs_XmpCqaRVgu0mvg&s"
              alt="HTML"
              height="250"
            />
          </Link>
        </div>
      </section>

      <section id="css" className="learn-section">
        <div className="learn-card">
          <h1>CSS</h1>
          <p>The language for designing web pages</p>
          <button onClick={() => navigate('/Learn/2')}>Learn CSS</button>
        </div>
        <div className="learn-image">
          <Link to="/Quiz/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSs_0G4nlQUDrd6bUZ_2-fcjINAo2iK-E9Hg&s"
              alt="CSS"
              height="250"
            />
          </Link>
        </div>
      </section>

      <section id="javascript" className="learn-section">
        <div className="learn-card">
          <h1>JavaScript</h1>
          <p>The language for making web pages interactive</p>
          <button onClick={() => navigate('/Learn/3')}>Learn JavaScript</button>
        </div>
        <div className="learn-image">
          <Link to="/Quiz/3">
            <img
              src="https://thumbs.dreamstime.com/b/javascript-logo-javascript-logo-white-background-vector-format-available-136765881.jpg"
              alt="JS"
              height="250"
              width="250"
            />
          </Link>
        </div>
      </section>

      {/* Task Manager Section */}
      <section id="task">
        <TaskManager />
      </section>

      {/* Projects Section */}


<section id="feed" className="projects-container">
  <h2 style={{textAlign: 'center', fontSize: 40, marginBottom: 30}}>Projects</h2>
  <div className="projects-row">
    {screenshots.map((img, i) => (
      <div key={i} className="project-card">
        <div className="project-overlay">
          <h3>Project {i + 1}</h3>
        </div>
        <img src={img} alt={`Project ${i + 1}`} />
        <button href="#" className="btn">Find Code</button>
      </div>
    ))}
  </div>
</section>


      {/* Feedback Panel */}
      <FeedbackPanel />

 <footer>
        <div className="footer-content">
        
            <div className="footer-logo">
                <h3>Learn Code</h3>
                <p>Empowering learners to build web skills for free.</p>
                <p>Contact me anywhere</p>
                <div className="social-icons">
                    <a href="https://www.youtube.com/@Amardeep-rn3mv" target="main"><i
                            class="fa-brands fa-youtube"></i></a>
                    <a href="https://t.me/amard87" target="main"><i class="fa-brands fa-telegram"></i></a>
                    <a href="https://www.instagram.com/amrdeepyadav509?igsh=MTFnbWpnbzM4aW4xYg==" target="main"><i
                            class="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/amrdeep-yadav-000b42320" target="main"><i
                            class="fab fa-linkedin-in"></i></a>
                </div>
            </div>

          
            <div className="footer-links">
                <h4>Quick Links</h4>
                <a href="#html">HTML</a>
                <a href="#css">CSS</a>
                <a href="#javascript">JavaScript</a>
                <a href="#task">Task Manager</a>
            </div>

        
            <div className="footer-links">
                <h4>Support</h4>
                <a href="https://t.me/amard87">Contact Us</a>
                <a href="#FAQs">FAQs</a>
                <a href="#feed">Feedback</a>
                <a href="#Help">Help Center</a>
            </div>

           
            <div className="footer-links">
                <h4>Resources</h4>
                <a href="#Blog">Blog</a>
                <a href="#Tutorial">Tutorials</a>
                <a href="#Courses">Courses</a>
                <a href="#Documentation">Documentation</a>
            </div>
        </div>

        <div className="footer-bottom">
            <p>&copy; 2025 Learn Code. By Amardeep Yadav.</p>
        </div>
    </footer>
    </div>
  );
}

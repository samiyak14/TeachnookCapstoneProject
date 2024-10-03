import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight - windowHeight;

    
      const scrollPercent = Math.min(scrollPosition / documentHeight, 1);
      setScrollPercentage(scrollPercent);
    };

    
    window.addEventListener("scroll", handleScroll);

    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="container"
      style={{
        backgroundColor: `rgba(${255 * (1 - scrollPercentage)}, ${255 * (1 - scrollPercentage)}, ${255 * (1 - scrollPercentage)}, 1)`,
      }}
    >
      <div className="content react-section">
        <h1>React</h1>
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="React Logo"
          className="logo"
        />
        <p>
          React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data without reloading the page. Its key feature is the use of components, which are reusable UI elements that manage their own state.
        </p>
        <p>
          React is maintained by Facebook and a community of individual developers and companies.
        </p>
      </div>
      <div className="content html-css-section">
        <h1>HTML & CSS</h1>
        <div className="logos">
          <div className="logo-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="HTML Logo"
              className="logo"
            />
            <p>HTML (Hypertext Markup Language) is the standard markup language for creating web pages.</p>
          </div>
          <div className="logo-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt="CSS Logo"
              className="logo"
            />
            <p>CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

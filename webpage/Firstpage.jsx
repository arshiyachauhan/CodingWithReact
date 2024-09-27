import React from "react";
import "./Style.css";

function Firstpage() {
  return (
    <>
      <div className="bck">
        <div className="log">
          <h2 >LOGO</h2>
          <div className="nav">
            <a href="#home">Home</a>
            <a href="#videos">Videos</a>
            <a href="#blog">Blog</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
        <div className="para">
          <h1>BEAUTIFUL AND SIMPLE WEBPAGE</h1>
          <h3>CREATED USING HTML</h3>
        </div>
        <div className="b">
          <button>START HERE</button>
          <button>SUBSCRIBE US</button>
        </div>
      </div>
    </>
  );
}

export default Firstpage;

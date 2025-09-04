import React from "react"
import '../Styles/About.css'
import smt from'../Styles/smt.jpg'

function About() {
  return (
    <section className="about" id="about">
      {/* Left: Text */}
      <div className="disc">
        <h1 className="intro-title">
          Hi, I am <br /> Mohammed <br /> Sharmuddin
        </h1>

        {/* Animated Heading */}
        <h1 className="animated-heading">
          <span>I</span>
          <span>am</span>
          <span>a</span>
          <span>MERN</span>
          <span>Developer!</span>
        </h1>

        <p className="about-text">
          I am a motivated and versatile individual, always eager to take on new challenges. 
          With a passion for learning, I am dedicated to delivering high-quality results. 
          With a positive attitude and a growth mindset, I am ready to make a meaningful 
          contribution and achieve great things.
        </p>
      </div>

      {/* Right: Image */}
      <div className="animated-container">
        <img id="mm" src={smt} alt="Profile" />
        <div className="overlay"></div>
      </div>
    </section>
  )
}

export default About
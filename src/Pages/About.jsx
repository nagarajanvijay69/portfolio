import React from 'react'
import './About.css'

const About = () => {

  return <>
    <div id="about" className="about">
      <div className="about-head">About Me</div>
      <div className="flex">
        <div className="about-left">
          <div className="ani-about-head">
            <span className='heading'>My Details & Academic</span>
          </div>
          <div className="ani-about">
            <div className="about-left-left"><p>Hi, I'm Nagarajan, a dedicated web developer with a strong passion for creating useful and engaging websites. I'm always exploring new ways to improve my skills, especially in web development and AI. I believe in continuous learning and enjoy building things that make a difference. Outside of tech, I love watching comedy and interesting fact videos, especially those about signs and world records.</p></div>
            <div className="about-left-right"><p>I'm currently pursuing a Bachelor of Science in Computer Science at st. Xavier's College in Palayamkottai, Tirunelveli. I completed my schooling at Rahmania Higher Secondary School in Melapalayam, Tirunelveli, where I was part of the biology group. Although my early focus was on science, my growing interest in technology led me to shift toward computer science in college, where I discovered my passion for coding and web development.</p></div>
          </div>
        </div>
        <div className="about-right">
          <div className="about-right-head heading">My Skills</div>
          <div className="skils-container">
            <div className="react"><img src="./react.svg" />React</div>
            <div className="node"><img src="./node-js.svg" />Node.js</div>
            <div className="mongodb"><img src="./mongodb.svg" />MongoDB</div>
            <div className="python"><img src="./python.svg" />Python</div>
            <div className="c"><img src="./c.svg" />C</div>
            <div className="c++"><img src="./c++.svg" />C++</div>
            <div className="c#"><img src="./cs.svg" />C#</div>
            <div className="java"><img src="./java.svg" />Java</div>
          </div>
          <a href="#projects" className='pro-link-1'>My Projects</a>
          <a href="#contact" className='pro-link'>Contact Me</a>
        </div>
      </div>
    </div>
  </>
}

export default About
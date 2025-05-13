import React from 'react'
import './Home.css'

const Home = () => {
  return <>
    <div id="home" className='home'>
      <img src="./user.png" alt="my-img" />
      <span className='one heading'><b>Iam Nagarajan</b></span>
      <span className='two'>Full Stack Developer</span>
      <span className='three'>Passionate about full-stack development especially MERN<br />Currently building chat apps and e-commerce platforms.  <br />Always learning, always coding.</span>
      <span className="nav-btn">
        <a href="./resume.pdf" className='nav-link nav-1' download="Nagarajan-Fullstack-Dev.pdf" >My Resume</a>
        <a href="#contact" className='nav-link nav-2'>Contact Me</a>
      </span>
    </div>
  </>
}

export default Home
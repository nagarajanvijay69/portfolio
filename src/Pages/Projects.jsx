import React from 'react'
import './Projects.css'

const Projects = () => {
  return<>
  <div id="projects" className="projects">
     <div className="proj-head">Projects</div>
     <div className="proj-div">
      <div className="one">
        <img src="./itachi.jpg" alt="Itachi AI" />
        <span>Itachi AI - Chat bot</span>
        <a href='https://itachi-ai-delta.vercel.app/' target='_blank'>Visit Now</a>
      </div>
      <div className="one">
        <img src="./loan.jpg" alt="Loan img" />
        <span>Loan Management</span>
        <a href='https://loan-proj-frontend.vercel.app' target='_blank'>Visit Now</a>
      </div>
     </div>
  </div>
</>
}

export default Projects
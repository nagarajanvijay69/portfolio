import React from 'react'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Nav from './Pages/Nav'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

const App = () => {
  return <>
     <div className="app">
      <div className="fixed"><Nav /></div>
      <Home />
      <About />
      <Projects />
      <Contact />
     </div>
  </>
}

export default App
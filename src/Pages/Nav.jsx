import React, { useState } from 'react'
import './Nav.css'

const Nav = () => {
   const [Nav, Setnav] = useState(false);
  return<>
    <nav className='navbar'>
     <span className='nav-title heading'><b>Portfolio</b></span>
          <img src="./menu.svg" className={Nav ? 'hide' : 'show'} onClick={()=> Setnav(!Nav)}/>
     <ul className={Nav ? 'show-ul list' : 'hide-ul special-list'}>
          <img src="./close.svg" className={Nav ? '' : 'none'} onClick={()=> Setnav(!Nav)}/>
          <li className={Nav ? '' : 'hide-list'}><a href="#home" onClick={()=>Setnav(false)}>Home</a></li>
          <li className={Nav ? '' : 'hide-list'}><a href="#about" onClick={()=>Setnav(false)}>About</a></li>
          <li className={Nav ? '' : 'hide-list'}><a href="#projects" onClick={()=>Setnav(false)}>Projects</a></li>
          <li className={Nav ? '' : 'hide-list'}><a href="#contact" onClick={()=>Setnav(false)}>Contact</a></li>
     </ul>
     <div style={{opacity : '0'}}  className={Nav ? '' : 'temp-none'}>...............</div>
    </nav>
  </>
}

export default Nav
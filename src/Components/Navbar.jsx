import React from 'react'
import {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars} from "react-icons/fa";
import { RiCloseFill} from "react-icons/ri";



const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
    document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling
};
  const [activeNav, setActiveNav] = useState('/')

  const closeMenuBar = () => {
    setClick(false);
    document.body.style.overflow = 'auto'; // Enable scrolling


  };


  
  return (
    <div>
             
          
          
        
      <nav>

        <Link to={'/'}> <h6 className='sharon'>Sharon</h6></Link>

        <div className='bars' onClick={handleClick}>  
          {click ? (<RiCloseFill id='close'/>) : (<FaBars id='bar' />)}
        </div>

        <ul  className={click ? 'menu active' : 'menu'}>

           {/* <NavLink to="/" className='tab' activeclassName = 'active'><li >Home</li></NavLink> */}
          
            {/* <NavLink to="/about" className='tab'  activeclassName = 'active'><li>About Me</li></NavLink> */}

            {/* <NavLink to="/skills" className='tab'  ><li>Skills</li></NavLink> */}

            {/* <NavLink to='/projects' className="tab" activeclassName = 'active'><li>Projects</li></NavLink> */}

            {/* <NavLink to='/contact' className="tab" activeclassName = 'active'><li>Contact</li></NavLink> */}


            {/* <a href='mailto:ngowari@gmail.com' className='tab'><li>Contact Me</li></a> */}


            <a href='#home' className='tab' activeclassName = 'active' onClick={closeMenuBar}><li >Home</li></a>
          
            <a href='#about' className='tab' onClick={closeMenuBar}><li>Services</li></a>

            <a href='#skill' className='tab'  onClick={closeMenuBar}><li>Skills</li></a>

            <a href='#project' className="tab" activeclassName = 'active' onClick={closeMenuBar}><li>Projects</li></a>

            <a href='#contact' className="tab" activeclassName = 'active' onClick={closeMenuBar}><li>Contact</li></a>


        </ul>
    </nav>
    <div className={click ? 'cover' : 'cover active'}></div>
    </div>
  )
}

export default Navbar



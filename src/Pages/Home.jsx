import React, {useState, useEffect, useRef} from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import profile from '../images/pix2.jpeg';
// import { Typewriter } from 'react-simple-typewriter';
import  Typewriter  from 'typewriter-effect';
import { MdWidthFull } from 'react-icons/md';
// import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {

  const [state] = useState({
    title: 'Hi',
    titleTwo: "I'm",
    titleThree: 'a developer',
    titleFour: 'a designer',
  })

  

  return (
    <div className='home' id='home'>

        <div className='dk'></div>
        <Navbar/>

        <section >
          <div className='flex'>
            

            <div className='flex-text'>
              {/* <h2>Sharon Uzu</h2> */}

                <h4 style={{width:'100%'}}>
                  
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings:[
                        "Hi, i'm Sharon Uzu.",
                        "I'm a Web Developer.",
                        "I'm a Web Designer.",
                      ],
                  }}
                  />
                </h4>
                {/* <h4>I'm a 
                  <span style={{fontWeight:'bolder', color:' hsla(33, 94%, 58%, 0.8)'}}>{text}</span>
                  <Cursor/>
                  </h4> */}
                {/* <p>High proficiency in website design and web development, and delivering of high quality work.
                I'm passionate about turning creative ideas into functional and visually appealing websites.
                </p> */}
                <p><span>Welcome!</span> I'm Sharon Uzu, a creative web developer with a  passion for crafting exceptional online experiences. I've had the privilege to work on diverse projects that have not only improved my technical skills but also increased my curiosity for innovation.</p>
                <p>I specialize in turning ideas into reality using a variety of tools. Proficient in <span> HTML, CSS, JAVASCRIPT, PHP, REACTJS,</span> ensuring that user interfaces are not just visually appealing, but also user-friendly while leveraging the power of front-end frameworks like React and back-end technologies, i have had the opportunity to create seamless, responsive, and engaging websites that satisfies the needs of users.</p>
                <p>I also enjoy creating beautiful things, teaching, catering, watching nice movies and listening to nice music, which adds to my creativity.</p>
                   

                <a href='#contact'><button type='button' >Contact Me</button></a>
            </div>

            <div className='flex-img'>
              <img src={profile}/>
            </div>
              
              
          </div>
              
               
        </section>

    </div>
  )
}

export default Home
import React from 'react';
import Navbar from '../Components/Navbar';
import pix from '../images/photo-1576836165612-8bc9b07e7778.jpeg'


const Skills = () => {
    return (
        <div className='abouts skills' id='skill'>
            {/* <Navbar/> */}

           
            <h1 className='skill'>SKILLS</h1>
            <section className='skill-con'>

            
              
              <div className='text'>
                <div className='progress'>
                  <h4><span className='num'>01</span> <span>HTML5</span> </h4>
                  <p className='progress-color'><span></span></p>
                </div>

                <div className='progress'>
                  <h4><span className='num'>02</span> <span>CSS3</span> </h4>
                  <p className='progress-color css'><span></span></p>
                </div>

                <div className='progress'>
                  <h4><span className='num'>03</span> <span>BOOTSTRAP</span> </h4>
                  <p className='progress-color boot'><span></span></p>
                </div>

                <div className='progress'>
                  <h4><span className='num'>04</span> <span>TAILWIND</span> </h4>
                  <p className='progress-color tail'><span></span></p>
                </div>

                <div className='progress'>
                  <h4><span className='num'>06</span> <span>JAVASCRIPT</span> </h4>
                  <p className='progress-color js'><span></span></p>
                </div>

                <div className='progress'>
                  <h4><span className='num'>07</span> <span>REACTJS</span> </h4>
                  <p className='progress-color react'><span></span></p>
                </div>

                <div className='progress'>
                  <h4><span className='num'>08</span> <span>PHP</span> </h4>
                  <p className='progress-color php'><span></span></p>
                </div>

                <div className='progress'>
                  <h4><span className='num'>09</span> <span>WORDPRESS</span> </h4>
                  <p className='progress-color word'><span></span></p>
                </div>

                <div className='progress'>
                  <h4><span className='num'>10</span> <span>Supabase</span> </h4>
                  <p className='progress-color sup'><span></span></p>
                </div>
                
              </div>

              <div>
                <img src={pix} alt="" />
              </div>

            </section>
            
              
              
            
    
            
        
        </div>
      )
}

export default Skills
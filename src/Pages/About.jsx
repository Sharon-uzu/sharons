import React from 'react';
import Navbar from '../Components/Navbar';
import pix from '../images/pix2.jpeg'

const About = () => {
  return (
    <div className='abouts' id='about'>
        {/* <Navbar/> */}

        {/* <section>
          <div className='about-pix' id='about'>
            <img src={pix} alt="" />
          </div>
          <div className='text'>
            <h1>Sharon,<span> a Web Developer</span></h1>
            <p><span>Welcome!</span> I'm Sharon Uzu, a creative web developer with a  passion for crafting exceptional online experiences. I've had the privilege to work on diverse projects that have not only improved my technical skills but also increased my curiosity for innovation.</p>
            <p>I specialize in turning ideas into reality using a variety of tools. Proficient in <span> HTML, CSS, JAVASCRIPT, PHP, REACTJS,</span> ensuring that user interfaces are not just visually appealing, but also user-friendly while leveraging the power of front-end frameworks like React and back-end technologies, i have had the opportunity to create seamless, responsive, and engaging websites that satisfies the needs of users.</p>
            <p>I also enjoy creating beautiful things, teaching, catering, watching nice movies and listening to nice music, which adds to my creativity.</p>
                      
          </div>
        </section> */}


        <div className='services'>
          <h1>SERVICES</h1>

          <div className='service-cards'>

            <div className='service-card'>
              <h3>01</h3>
              <div>
                <h2>
                  Web App development
                </h2>
                <p>Designing User Interfaces.</p>
                <p> Integrating multimedia content onto a site.</p> 
                <p>Create and maintain website.</p>
              </div>
            </div>

            <div className='service-card'>
              <h3>02</h3>
              <div>
                <h2>
                  Frontend Mentoring
                </h2>
                <p> Helps students to gain skills that will benefit them as developers.</p> 
                <p>Guide students through the process.</p>
              </div>
            </div>

            <div className='service-card'>
              <h3>03</h3>
              <div>
                <h2>
                  Source Code Management
                </h2>
                <p>Keeping track of source code modification.</p>
                <p> Resolve issues when merging code from multiple sources.</p> 
                <p>Ensure  accurate and up-to-date codes.</p>
              </div>
            </div>

            <div className='service-card'>
              <h3>04</h3>
              <div>
                <h2>
                  Responsive Design 
                </h2>
                <p> Implement responsive design that fits to different screen sizes.</p> 
                <p>Ensuring that websites are optimized for mobile devices.</p>
                
              </div>
            </div>

            

            <div className='service-card'>
              <h3>05</h3>
              <div>
                <h2>
                Website Maintenance 
                </h2>
                <p>Update and maintain websites to ensure security and functionality.</p>
                <p>Fixing bugs and updating software.</p> 
              </div>
            </div>


            <div className='service-card'>
              <h3>06</h3>
              <div>
                <h2>
                Consultation and Strategy
                </h2>
                <p>Advise clients on best technologies and practices.</p>
                <p>Providing insights into industry trends and technologies.</p> 
              </div>
            </div> 

          </div>
        </div>
        
          
          
        

        
    
    </div>
  )
}

export default About
import React from 'react';
import Navbar from '../Components/Navbar';
import itsolve from '../images/itsove.png';
import calc from '../images/calc.png'
import convert from '../images/conv.png'
import camp from '../images/Capture2.png';
import tech from '../images/techette.png';
import az from '../images/az.png';
import altan from '../images/portf1.png'
import crypto from '../images/cryp.png'
import clockme from '../images/clock.png';
import corner from '../images/corner.png';
import dokita from '../images/dokita.png';
import fichaya from '../images/fichaya.png';
import harv from '../images/harv.png'
import keyboard from '../images/keyboard.png'
import crimson from '../images/crimson.png'
import bos from '../images/bos.png'
import ali from '../images/ali.png';
import stay from '../images/stay.png'
import hmo from '../images/hmo.png'
import coming from '../images/coming.png'
import slash from '../images/slash.png'
import chuk from '../images/chukwu.png'
import techtan from '../images/tech.png'
import wit from '../images/wit.png'
import tan from '../images/tan.png'
import edu from '../images/edu.png'
import python from '../images/python.png'
import agro from '../images/agro.png'


const Projects = () => {

    const project = [
      {
        img: python,
        title: 'Pythons Cave',
        // p1:'A platform to hire top-notch female tech talents.',
        button: 'Visit',
        // link: 'https://school.harvoxx.com/'
        link:'https://pythonscave.com/'
      },
      {
        img: agro,
        title: 'AgroVest',
        // p1:'A platform to hire top-notch female tech talents.',
        button: 'Visit',
        link: 'https://agrovest.io/'
      },
      {
        img: edu,
        title: 'Harvoxx-School',
        // p1:'A platform to hire top-notch female tech talents.',
        button: 'Visit',
        // link: 'https://school.harvoxx.com/'
        link:'https://harvoxxschool.netlify.app/'
      },
      {
        img: tan,
        title: 'TechTan',
        // p1:'A platform to hire top-notch female tech talents.',
        button: 'Visit',
        // link: 'https://school.harvoxx.com/'
        link:'https://mytechtan.com/'
      },
      {
        img: harv,
        title: 'Harvoxx School',
        // p1:'A platform to hire top-notch female tech talents.',
        button: 'Visit',
        // link: 'https://school.harvoxx.com/'
        link:'https://harvoxx-school.netlify.app/'
      },
      {
        img: keyboard,
        title: 'The Keyboard',
        // p1:'A platform to hire top-notch female tech talents.',
        button: 'Visit',
        // link: 'https://the-keyboard.com/'
        link: 'https://keyboard23.netlify.app/'
      },
      {
        img: hmo,
        title: 'AlliedHealth',
        // p1:'A platform to hire top-notch female tech talents.',
        button: 'Visit',
        link: 'https://allied-health2.netlify.app/'
      },
      {
        img: techtan,
        title: 'TechTan',
        // p1:'A platform to hire top-notch female tech talents.',
        button: 'Visit',
        link: 'https://tech-tan.netlify.app/'
      },
      {
        img: chuk,
        title: 'Chukwudi Dimkpa Foundation',
        // p1:'A platform to hire top-notch female tech talents.',
        button: 'Visit',
        link: 'https://chukwudidimkpafoundation.org/'
      },
      {
        img: slash,
        title: 'SlashPoint',
        // p1:'A platform to hire top-notch female tech talents.',
        button: 'Visit',
        link: 'https://slashpoint24.netlify.app/'
      },
      {
        img: wit,
        title: 'Wit',
        // p1:'A platform to hire top-notch female tech talents.',
        button: 'Visit',
        link: 'https://wit24.netlify.app'
      },
      
      {
        img: bos,
        title: 'Bosporan',
        // p1:'A platform to hire top-notch female tech talents.',
        button: 'Visit',
        link: 'https://bosporan23.netlify.app/'
      },
      {
        img: ali,
        title: 'Allimacotech',
        // p1:'A platform to hire top-notch female tech talents.',
        button: 'Visit',
        link: 'https://allimacotech.netlify.app/'
      },
      
      {
        img: crimson,
        title: 'Crimson and Clover Group',
        // p1:'A platform to hire top-notch female tech talents.',
        button: 'Visit',
        link: 'https://crimsonsbiz.com/n/'
      },
      {
        img: stay,
        title: 'STAY Conference',
        // p1:'A platform to hire top-notch female tech talents.',
        button: 'Visit',
        link: 'https://stayconference.com/'
      },
        {
          img: tech,
          title: 'Techette',
          // p1:'A platform to hire top-notch female tech talents.',
          button: 'Visit',
          link: 'https://techette.netlify.app/'
        },
        
        {
          img: dokita,
          title: 'Dokita',
          // p1:'A HealthTech Marketplace',
          button: 'Open',
          link: 'https://dokita-c.netlify.app/'
        },
        {
          img: clockme,
          title: 'Clock me in - Website',
          // p1:'Online signing in and data compilation',
          button: 'In Progress',
          // link: 'https://www.figma.com/file/prCBcnN2Uxf9SpdoFRBK1i?node-id=0:1'
        },

        {
          img: corner,
          title: 'CornerStone',
          // p1:'A platform to create African solution.',
          button: 'In Progress',
          // link: 'https://www.figma.com/file/prCBcnN2Uxf9SpdoFRBK1i?node-id=0:1'
        },
        
        {
            img: az,
            title: 'AZ Delivery',
            // p1:'A food delivery app',
            button: 'In Progress',
            // link: 'https://www.figma.com/file/prCBcnN2Uxf9SpdoFRBK1i?node-id=0:1'
          },

          {
            img: itsolve,
            title: 'ITSOLVE',
            // p1:'A phenomenal IT Solution Website.',
            button: 'View',
            link: 'https://sharon-uzu.github.io/IT-Solution/'
          },

          // {
          //   img: convert,
          //   title: 'Converter',
          //   // p1:'A weight converter used for converting weights in different unit.',
          //   button: 'Open',
          //   link: 'https://sharon-uzu.github.io/Digital-Converter/'
          // },

          {
            img: altan,
            title: 'Portfolio',
            // p1:'Portfolio',
            button: 'Open',
            link: 'https://altan-portfolio.netlify.app/'
          },

          // {
          //   img: camp,
          //   title: 'Yelp Camp',
          //   // p1:'A site used to explore the best camps.',
          //   button: 'Open',
          //   link: 'https://sharon-uzu.github.io/YelpCamp/'
          // },

          
      ];

  return (
    <div className='proj' id='project'>
        {/* <Navbar/> */}
        <div className='project'>
            
            <h3>PROJECTS</h3>

            <div className='cards'>

            {project.map((item, index) => (
                <a href={item.link} className='card' target='_blank'><div className='content-r'  key={index}>
                <img src={item.img} alt='projects'/>

                <div className='content'>
                  <h3>{item.title}</h3>
                  <p>{item.p1}</p>
                  
                  <button>{item.button}</button>
                </div>
                
                </div></a>
              ))}
                



                

                

            </div>
        </div>



        

        
    </div>
  )
}

export default Projects
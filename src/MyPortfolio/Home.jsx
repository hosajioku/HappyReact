import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroPortfolio from '../component/HeroPortfolio'
import NavBarPortfolio from '../component/NavBarPortfolio'
import AboutPortfolio from '../component/AboutPortfolio'
import ProjectsPortfolio from '../component/ProjectsPortfolio'
import SkillsPortfolio from '../component/SkillsPortfolio'
import ContactPortfolio from '../component/ContactPortfolio'
import FooterPortfolio from '../component/FooterPortfolio'



const Home = () => {
  useEffect(() => {
    // make sure AOS is available
    if (AOS && typeof AOS.init === 'function') {
      AOS.init({ duration: 800, once: true });
    }
  }, []);

  return (
    <div className='scroll-smooth'>
     <NavBarPortfolio/>
     <HeroPortfolio/>
     

      {/* About Section */}
     <section
      id="about"
      className="min-h-screen bg-white flex items-center justify-center px-6 py-20"
       data-aos="fade-up"
       >
      <AboutPortfolio/>
     </section>


      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-sky-50 flex items-center justify-center px-6 py-20"
         data-aos="fade-up"
        >
       <ProjectsPortfolio/>
      </section>
   
      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen bg-white flex items-center justify-center px-6 py-20"
         data-aos="fade-up"
        >
       <SkillsPortfolio/>
      </section>
     
      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-sky-50 flex items-center justify-center px-6 py-20"
         data-aos="fade-up"
      >
        <ContactPortfolio/>  
      </section>
    
      <FooterPortfolio/>
    </div>
  )
}

export default Home
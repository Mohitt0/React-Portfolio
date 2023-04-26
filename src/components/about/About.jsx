import React from 'react';
import Image from '../../assets/avatar-2.svg'
import Resume from '../../assets/resume.pdf'
import '../about/about.css'
const About = () => {
    const downloadResume=()=>{
        window.open(Resume, '_blank');
    }
    return (
        <section className='about container section' id='about'> 
        <h2 className='section__title'>About Me</h2>
        <div className='about__container grid'>
            <img src={Image} alt="" className='about__img' />
            <div className='about__data grid'>
                <div className='about__info'>
                    <p className='about__description'>
                    Hello! I'm Mohit, and I'm based in Udaipur, India. I studied at Geetanjali Institue of Technical Studies, where I in Computer Science Engineering.<br /><br />
                            Fastforward to today, and I can honestly say it's been a beautiful journery and I hope to grow even further as Software Engineer. My current focus these days
                            is on expanidng my portfolio by building more projects that I can add on here, as well as being a great team player at my current role.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                    </p>
                    <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Postgres SQL</li>
                            <li>NestJS</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                  
                </div>
            </div>
        </div>
      
        </section>
    );
}

export default About;

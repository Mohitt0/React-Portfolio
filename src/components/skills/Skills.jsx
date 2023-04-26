import React from 'react';
import html from '../../assets/html.svg'
import cssLogo from '../../assets/css-logo.svg'
import jsLogo from '../../assets/js-logo.svg'
import reactLogo from '../../assets/react-logo.svg'
import bootstrapLogo from '../../assets/bootstrap-logo.svg'
import postgresqlLogo from '../../assets/postgrsql-logo.svg'
import firebaseLogo from '../../assets/firebase-logo.svg'
import '../skills/skills.css'
const Skills = () => {
    return (
   <section className='section container' id='skills'>
     <h2 className='section__title'>Technical Skills</h2>
    <div className='skills_container'>
       <div className='skill_list'>
        <img className='skill_logo' src={html} alt="" />
       </div>
       <div className='skill_list'>
        <img className='skill_logo' src={cssLogo} alt="" />
       </div>
       <div className='skill_list'>
        <img className='skill_logo' src={jsLogo} alt="" />
       </div>
       <div className='skill_list'>
        <img className='skill_logo' src={reactLogo} alt="" />
       </div>
       <div className='skill_list'>
        <img className='skill_logo' src={bootstrapLogo} alt="" />
       </div>
       <div className='skill_list'>
        <img className='skill_logo' src={postgresqlLogo} alt="" />
       </div>
       <div className='skill_list'>
        <img className='skill_logo' src={firebaseLogo} alt="" />
       </div>
    </div>
   </section>
    );
}

export default Skills;

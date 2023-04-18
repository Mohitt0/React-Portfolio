import React from 'react';
import HeaderSocial from './HeaderSocial';
import Me from '../../assets/avatar-1.svg'
import '../home/home.css'

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className='intro'>
                <img src={Me} className='home__img' alt="" width="120" />
                <h1 className='home_name'>Mohit Prajapat</h1>
                <span style={{fontSize:"20px"}} className='home_title'>I'm a Web Developer</span>

                <HeaderSocial/>
                <a href='#contact' className='btn'>Contact Me</a>
           
            </div>
         
            
        </section>
    );
}

export default Home;




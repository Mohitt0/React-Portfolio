import React from 'react';
import HeaderSocial from './HeaderSocial';
import Me from '../../assets/avatar-1.svg'
import '../home/home.css'
const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className='intro'>
                <img src={Me} style={{marginBottom:"1.5rem"}} alt="" width="120" />
                <h1>Mohit Prajapat</h1>
                <span>I'm a Web Developer</span>

                <HeaderSocial/>
            </div>
        </section>
    );
}

export default Home;

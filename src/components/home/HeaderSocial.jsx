import React from 'react';
import {AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'
import {IoLogoLinkedin} from 'react-icons/io'
import {FaTwitter} from 'react-icons/fa'


const HeaderSocial = () => {
    return (
        <div className='home_social'>
            <a href='https://github.com/Mohitt0' target='_blank' rel='noreferrer' className='social_link'>
                <AiFillGithub/>
            </a>
            <a href='https://github.com/Mohitt0' target='_blank' rel='noreferrer' className='social_link'>
                <IoLogoLinkedin/>
            </a>
            <a href='https://github.com/Mohitt0' target='_blank' rel='noreferrer' className='social_link'>
                <AiOutlineInstagram/>
            </a>
            <a href='https://github.com/Mohitt0' target='_blank' rel='noreferrer' className='social_link'>
                <FaTwitter/>
            </a>
        </div>
    );
}

export default HeaderSocial;

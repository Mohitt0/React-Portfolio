import React from 'react';
import navlogo from '../../assets/logo.svg'
import lightlogo from '../../assets/light-logo.svg'
import '../sidebar/sidebar.css'
import {BiHomeAlt2} from 'react-icons/bi'
import {TbBriefcase} from 'react-icons/tb'
import {RiStackLine} from 'react-icons/ri'
import {AiOutlineUser} from 'react-icons/ai'
import {IoIosContact} from 'react-icons/io'
import {FiSun} from 'react-icons/fi'
const Sidebar = () => {
    return (
        <>
        <aside className='aside show-menu'>
            <a href='#home' className='nav_logo'>
                <img src={lightlogo} alt='logo'></img>
            </a>
            <nav className='nav'>
                <div className='nav__menu'>
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <a href='#home' className='nav__link'>
                                <BiHomeAlt2/>
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#home' className='nav__link'>
                                <AiOutlineUser/>
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#home' className='nav__link'>
                                <TbBriefcase/>
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#home' className='nav__link'>
                                <RiStackLine/>
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#home' className='nav__link'>
                                <IoIosContact/>
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            <div className='nav_footer'>
                <button className='nav__link footer_button'>
                    <FiSun/>
                </button>
            </div>
        </aside>
        </>
    );
}

export default Sidebar;

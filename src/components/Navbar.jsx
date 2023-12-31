/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#252422] text-[#FFFCF2]'>
            <div>
                <img src={Logo} alt='Logo Image' style={{ width: '75px' }} />
            </div>

            {/* Main Menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>


            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <div>
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#252422] flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl'>Home</li>
                    <li className='py-6 text-4xl'>About</li>
                    <li className='py-6 text-4xl'>Skills</li>
                    <li className='py-6 text-4xl'>Projects</li>
                    <li className='py-6 text-4xl'>Contact</li>
                </ul>
            </div>

            {/* Social Icons */}
            <div className='flex fixed flex-col top-[35%] left-0'></div>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center'>
                    <a className='flex justify-between items-center w-full text-[#FFFCF2]'
                    href='/'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
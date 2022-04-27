import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import giftCard from '../assets/giftCard.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed z-10 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        
        {/* <li className='py-6 text-4xl'> */}
            <Link className="cursor-pointer" to='home' smooth={true} duration={500}>
            <img src={giftCard} alt='Logo Image' style={{ width: '40px', height: "40px", borderRadius: "50px" }} />
            </Link>
        {/* </li> */}

      {/* menu */}
      <ul className='hidden md:flex space-x-10 mr-4 text-sm'>
        <li className='cursor-pointer'>
            <Link to='/' smooth={true} duration={500}>
                Home
            </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='/about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='/log-in' smooth={true} duration={500}>
            Get Started
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          {' '}
           <Link onClick={handleClick} className="cursor-pointer" to='/' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
           <Link onClick={handleClick} className="cursor-pointer" to='/footer' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;

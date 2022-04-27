import React from 'react';
import giftCard from '../assets/giftCard.jpg';
import {
    FaWhatsapp,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
  } from 'react-icons/fa';
  import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div name='home' className='w-full bg-[#0a192f] overflow-hidden'>
    
      <div className='relative md:flex flex-row justify-between md:pt-40 pt-24 px-4 max-w-7xl mx-auto'>
            <div className='max-w-[900px] px-8 flex flex-col justify-center'>
                <p className='text-white text-2xl'>Welcome 👋 to our page</p>
                <h2 className='text-2xl text-gray-400 my-5 sm:text-3xl font-bold'>
                We sell gift cards to buy and sell amazing stuff in any outlets in Africa. Register now to get 100% bonus on your first purchase.
                </h2>
                <div className='flex w-full'>
                    <button className='text-white text-xs border-2 border-gray-600 px-2 py-2 my-2 flex items-center hover:bg-white hover:border-white rounded-lg'>
                        Know more
                    </button>
                    <div class="lg:hidden inline-flex text-2xl space-x-3 ml-8 mt-4">
                            <a href="https://www.twitter.com/iamsegunajibola">
                                <FaTwitter size={30} className='text-blue-500' />
                            </a>
                            <a href="https://www.instagram.com/iamsegunajibola">
                                <FaInstagram size={30} className='text-red-300' />
                            </a>
                            <a href="https://wwww.github.com/segunajibola">
                                <FaGithub size={30} className='text-white' />
                            </a>
                            <a href="https://wa.me/2348105729893">
                                <FaWhatsapp size={30} className='text-green-500' />
                            </a>
                            <a href="https://wwww.github.com/segunajibola">
                                <FaLinkedin className='bg- white text-blue-500' size={30} />
                            </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-shrink-0 justify-center sp:pb-0 md:pb-0 items-center'>
                <img src={giftCard} alt='Profile Image' className="rounded-full w-80 h-80 m-4" />
            </div>
       </div>
       <Link to="/log-in">
        <button className='border border-red p-3 text-center flex justify-center items-center mx-auto my-4 bg-gray-500 hover:bg-white rounded-lg'>
            Click here to Login
        </button>
       </Link>
    </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaTwitter,
  } from 'react-icons/fa';
import google from '../assets/playstore.png';
import apple from '../assets/appstore.png';

const Footer = () => {
  let getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div>
      <footer className='bg-gray-400 dark:bg-gray-900 dark:text-gray-400 md:mx-0'>
        <div className='p-4'>
          <div className='mx-auto grid max-w-7xl grid-cols-2 gap-6 space-y-4 md:mx-2 md:grid-cols-4 '>
            <div>
              <h5 className='mt-4 text-lg font-semibold dark:text-gray-200'>
                Company
              </h5>
              <p>
                <Link to='/'>About</Link>
              </p>
              <p>
                <Link to='/'>Awards</Link>
              </p>
              <p>
                <Link to='/'>Contact us</Link>
              </p>
            </div>
            <div>
              <h5 className='mb-1 text-lg font-semibold dark:text-gray-200'>
                Exerience
              </h5>
              <p>
                <Link to='/'>Safety</Link>
              </p>
              <p>
                <Link to='/'>FAQs</Link>
              </p>
            </div>
            <div>
              <h5 className='mb-1 text-lg font-semibold dark:text-gray-200'>
                Terms
              </h5>
              <p>
                <Link to='/'>Privacy Policy</Link>
              </p>
              <p>
                <Link to='/'>Terms & Condition</Link>
              </p>
            </div>
            <div>
              <h5 className='mb-1 text-lg font-semibold dark:text-gray-200'>
                Connect
              </h5>
              <div className='flex gap-3'>
                <Link to='https://www.twitter.com/'>
                    <FaTwitter size={30} className='text-blue-500' />
                </Link>
                <Link to='https://www.facebook.com/'>
                    <FaFacebook size={30} className='text-green-500' />
                </Link>
                <Link to='https://wa.me/'>
                    <FaWhatsapp size={30} className='text-green-500' />
                </Link>
                <Link to='https://www.instagram.com/'>
                    <FaInstagram size={30} className='text-red-300' />
                </Link>
               </div>
              <p className='mt-4'>Download Our App</p>
              <div className=''>
                <Link to='/'>
                  <img
                    src={ google }
                    alt='Google playstore'
                    className='inline h-8 w-16 md:w-20'
                  />
                </Link>
                <Link to='/'>
                  <img
                    src={ apple }
                    alt='Appstore'
                    className='md:w-26 inline h-11 w-24'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className='p-3 text-center'>
          Copyright &copy; {getYear()}. All right reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;

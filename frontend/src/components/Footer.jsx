import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="PsychoCorp Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6 dark:text-white'>
            Easily connect with top healthcare professionals. Browse through our curated list of trusted doctors, find the right specialist, and schedule appointments hassle-free. Over 100+ verified doctors available at your convenience. Create an account to get started!
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 dark:text-white'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600 dark:text-white'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 dark:text-white'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600 dark:text-white'>
            <li>0551-2321435</li>
            <li><a href="mailto:psychocorp@gmail.com">psychocorp@gmail.com</a></li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center dark:text-white'>
          Copyright 2024 @ psychocorp.com - All Right Reserved.
        </p>
      </div>

    </div>
  );
};

export default Footer;

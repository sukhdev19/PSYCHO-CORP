import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10 mt-20 md:mt-40 px-5 md:px-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">

        {/* Logo & Description */}
        <div className="flex flex-col items-start gap-5">
          <img className="mb-5 w-40" src={assets.logo} alt="PsychoCorp Logo" />
          <p className="text-gray-600 leading-6 dark:text-white md:w-3/4 lg:w-2/3">
            Easily connect with top healthcare professionals. Browse through our curated list of trusted doctors, find the right specialist, and schedule appointments hassle-free. Over 100+ verified doctors available at your convenience. Create an account to get started!
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-semibold mb-5 text-gray-800 dark:text-white">COMPANY</p>
          <ul className="flex flex-col gap-3 text-gray-600 dark:text-white">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </li>
            <li className="text-gray-400">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-semibold mb-5 text-gray-800 dark:text-white">GET IN TOUCH</p>
          <ul className="flex flex-col gap-3 text-gray-600 dark:text-white">
            <li className="hover:text-primary transition-colors">0551-2321435</li>
            <li>
              <a href="mailto:psychocorp@gmail.com" className="hover:text-primary transition-colors">
                psychocorp456@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider and Copyright */}
      <div className="mt-10">
        <hr className="border-gray-300 dark:border-gray-700" />
        <p className="py-5 text-sm text-center text-gray-600 dark:text-white">
          &copy; 2024 PsychoCorp - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

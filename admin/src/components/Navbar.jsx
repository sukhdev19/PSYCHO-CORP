import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { DoctorContext } from '../context/DoctorContext';
import { AdminContext } from '../context/AdminContext';
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext
import { useNavigate } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import dark/light icons

const Navbar = () => {
  const { dToken, setDToken } = useContext(DoctorContext);
  const { aToken, setAToken } = useContext(AdminContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext); // Get dark mode state and toggle function

  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    dToken && setDToken('');
    dToken && localStorage.removeItem('dToken');
    aToken && setAToken('');
    aToken && localStorage.removeItem('aToken');
  };

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white  dark:bg-darkBg text-black dark:text-darkText'>
      <div className='flex items-center gap-2 text-xs'>
        <img
          onClick={() => navigate('/')}
          className='w-36 sm:w-40 cursor-pointer'
          src={assets.admin_logo}
          alt=""
        />
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600 dark:text-darkText'>
          {aToken ? 'Admin' : 'Doctor'}
        </p>
      </div>
      <div className='flex items-center gap-4'>
        <button
          onClick={toggleTheme}
          className='text-lg flex items-center justify-center bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-darkText rounded-full p-2'
          aria-label='Toggle Dark Mode'
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          onClick={logout}
          className='bg-primary text-white text-sm px-10 py-2 rounded-full'
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

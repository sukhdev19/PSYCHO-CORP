import { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem('token');
    setToken(false);
    navigate('/login');
  };

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD] bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-white sticky top-0 z-50'>
      <img onClick={() => navigate('/')} className='w-44 ml- cursor-pointer' src={assets.logo} alt="Logo" />
      <ul className='md:flex items-start gap-5 font-medium hidden ml-auto'>
        <NavLink 
          to='/' 
          className={({ isActive }) => 
            `hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-primary text-white' : ''}`}>
          <li className='py-1'>HOME</li>
        </NavLink>
        <NavLink 
          to='/doctors' 
          className={({ isActive }) => 
            `hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-primary text-white' : ''}`}>
          <li className='py-1'>ALL DOCTORS</li>
        </NavLink>
        <NavLink 
          to='/about' 
          className={({ isActive }) => 
            `hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-primary text-white' : ''}`}>
          <li className='py-1'>ABOUT</li>
        </NavLink>
        <NavLink 
          to='/contact' 
          className={({ isActive }) => 
            `hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-primary text-white' : ''}`}>
          <li className='py-1'>CONTACT</li>
        </NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        <ThemeToggle /> {/* Theme toggle button */}
        {
          token && userData ? (
            <div 
              className='flex items-center gap-2 cursor-pointer relative mr-10'
              onClick={() => setShowDropdown(prev => !prev)} // Toggle dropdown on click
            >
              <img className='w-8 rounded-full' src={userData.image} alt="User" />
              {showDropdown && (
                <div className='absolute top-14 right-0 text-base font-medium text-gray-600 z-20'>
                  <div className='min-w-48 bg-gray-50 dark:bg-gray-800 dark:text-white rounded flex flex-col gap-4 p-4'>
                    <p onClick={() => { setShowDropdown(false); navigate('/my-profile'); }} className='hover:text-black dark:hover:text-cyan-400 cursor-pointer'>My Profile</p>
                    <p onClick={() => { setShowDropdown(false); navigate('/my-appointments'); }} className='hover:text-black dark:hover:text-cyan-400 cursor-pointer'>My Appointments</p>
                    <p onClick={() => { setShowDropdown(false); logout(); }} className='hover:text-black dark:hover:text-cyan-400 cursor-pointer'>Logout</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block '>Create account</button>
          )
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="Menu" />

        {/* ---- Mobile Menu ---- */}
        <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white dark:bg-gray-900 transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img src={assets.logo} className='w-36' alt="Logo" />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="Close" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink 
              onClick={() => setShowMenu(false)} 
              to='/' 
              className={({ isActive }) => 
                `hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-primary text-white' : ''}`}>
              <p className='px-4 py-2 rounded-full inline-block'>HOME</p>
            </NavLink>
            <NavLink 
              onClick={() => setShowMenu(false)} 
              to='/doctors' 
              className={({ isActive }) => 
                `hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-primary text-white' : ''}`}>
              <p className='px-4 py-2 rounded-full inline-block'>ALL DOCTORS</p>
            </NavLink>
            <NavLink 
              onClick={() => setShowMenu(false)} 
              to='/about' 
              className={({ isActive }) => 
                `hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-primary text-white' : ''}`}>
              <p className='px-4 py-2 rounded-full inline-block'>ABOUT</p>
            </NavLink>
            <NavLink 
              onClick={() => setShowMenu(false)} 
              to='/contact' 
              className={({ isActive }) => 
                `hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-primary text-white' : ''}`}>
              <p className='px-4 py-2 rounded-full inline-block'>CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

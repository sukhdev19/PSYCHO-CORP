import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { DoctorContext } from '../context/DoctorContext';
import { AdminContext } from '../context/AdminContext';
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext

const Sidebar = () => {
  const { dToken } = useContext(DoctorContext);
  const { aToken } = useContext(AdminContext);
  const { isDarkMode } = useContext(ThemeContext); // Get dark mode state

  return (
    <div className={`min-h-screen border-r ${isDarkMode ? 'dark:bg-darkBg text-darkText' : 'bg-white text-[#515151]'} md:w-80`}> {/* Increased width */}
      {aToken && (
        <ul className='mt-5'>
          <NavLink
            to={'/admin-dashboard'}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-6 w-full sm:w-auto md:px-6 cursor-pointer transition-all duration-200 ease-in-out mb-5 border-2 ${
                isActive ? 'bg-[#38dbdb] text-black' : 'bg-white text-black border-[#38dbdb]'
              } hover:bg-[#38dbdb] hover:text-white`
            }
          >
            <img className='min-w-5' src={assets.home_icon} alt='' />
            <p className='hidden md:block'>Dashboard</p>
          </NavLink>
          <NavLink
            to={'/all-appointments'}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-6 w-full sm:w-auto md:px-6 cursor-pointer rounded transition-all duration-200 ease-in-out mb-5 border-2 ${
                isActive ? 'bg-[#38dbdb] text-black' : 'bg-white text-black border-[#38dbdb]'
              } hover:bg-[#38dbdb] hover:text-white`
            }
          >
            <img className='min-w-5' src={assets.appointment_icon} alt='' />
            <p className='hidden md:block'>Appointments</p>
          </NavLink>
          <NavLink
            to={'/add-doctor'}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-6 w-full sm:w-auto md:px-6 cursor-pointer rounded  transition-all duration-200 ease-in-out mb-5 border-2 ${
                isActive ? 'bg-[#38dbdb] text-black' : 'bg-white text-black border-[#38dbdb]'
              } hover:bg-[#38dbdb] hover:text-white`
            }
          >
            <img className='min-w-5' src={assets.add_icon} alt='' />
            <p className='hidden md:block'>Add Doctor</p>
          </NavLink>
          <NavLink
            to={'/doctor-list'}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-6 w-full rounded  sm:w-auto md:px-6 cursor-pointer transition-all duration-200 ease-in-out mb-5 border-2 ${
                isActive ? 'bg-[#38dbdb] text-black' : 'bg-white text-black border-[#38dbdb]'
              } hover:bg-[#38dbdb] hover:text-white`
            }
          >
            <img className='min-w-5' src={assets.people_icon} alt='' />
            <p className='hidden md:block'>Doctors List</p>
          </NavLink>
        </ul>
      )}

      {dToken && (
        <ul className='mt-5'>
          <NavLink
            to={'/doctor-dashboard'}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-6 w-full sm:w-auto md:px-6 cursor-pointer transition-all duration-200 ease-in-out mb-5 border-2 ${
                isActive ? 'bg-[#38dbdb] text-black' : 'bg-white text-black border-[#38dbdb]'
              } hover:bg-[#38dbdb] hover:text-white`
            }
          >
            <img className='min-w-5' src={assets.home_icon} alt='' />
            <p className='hidden md:block'>Dashboard</p>
          </NavLink>
          <NavLink
            to={'/doctor-appointments'}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-6 w-full sm:w-auto md:px-6 cursor-pointer transition-all duration-200 ease-in-out mb-5 border-2 ${
                isActive ? 'bg-[#38dbdb] text-black' : 'bg-white text-black border-[#38dbdb]'
              } hover:bg-[#38dbdb] hover:text-white`
            }
          >
            <img className='min-w-5' src={assets.appointment_icon} alt='' />
            <p className='hidden md:block'>Appointments</p>
          </NavLink>
          <NavLink
            to={'/doctor-profile'}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-6 w-full sm:w-auto md:px-6 cursor-pointer transition-all duration-200 ease-in-out mb-5 border-2 ${
                isActive ? 'bg-[#38dbdb] text-black' : 'bg-white text-black border-[#38dbdb]'
              } hover:bg-[#38dbdb] hover:text-white`
            }
          >
            <img className='min-w-5' src={assets.people_icon} alt='' />
            <p className='hidden md:block'>Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;

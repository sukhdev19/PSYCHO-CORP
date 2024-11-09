import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-20 min-h-[80vh] ml-6 mr-6'>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[10vw]'>
                <p className='text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-snug text-left'>
                    Book Appointment <br /> With Trusted Doctors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-base md:text-lg font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="Group profiles" />
                    <p className='text-center md:text-left'>
                        Simply browse through our extensive list of trusted doctors,
                        <br className='hidden sm:block' /> schedule your appointment hassle-free.
                    </p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm hover:scale-105 transition-all duration-300'>
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="Arrow icon" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 flex justify-center items-center relative'>
                <img
                    className='w-full md:w-3/4 lg:w-5/6 h-auto object-cover rounded-lg'
                    src={assets.header_img}
                    alt="Header"
                />
            </div>
        </div>
    );
}

export default Header;

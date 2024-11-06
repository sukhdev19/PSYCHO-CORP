import React from 'react';
import { assets } from '../assets/assets';
import headerImage from '../assets/header_image.png'; // Import the new header image

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary  px-6 md:px-10 lg:px-20 w-full'>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Book with Trusted Doctors Today <br /> Caring for You, Every Step of the Way.
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="Group of doctors" />
                    <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="Arrow icon" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative rounded-lg overflow-hidden flex justify-center items-center bg-[#38dbdb]'>
                <img className='w-full h-auto max-h-[800px] object-cover rounded-lg' src={headerImage} alt="Header" />
            </div>
        </div>
    );
}

export default Header;



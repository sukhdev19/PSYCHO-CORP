import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm dark:text-white'>

        <div>
          <h2 className='text-2xl font-bold dark:text-black'>PSYCHOCORP</h2>
          <p className='w-full md:w-2/3 text-gray-600 leading-6 dark:text-gray-300'>
            Psychocorp is a comprehensive doctor appointment website designed to simplify and enhance the healthcare experience. It enables users to easily book appointments with healthcare professionals, view detailed doctor profiles, and manage their medical consultations. The platform provides features like a searchable doctor listing, appointment scheduling, and user profile management, making it a one-stop solution for organizing healthcare needs. With a user-friendly interface, Psychocorp aims to bridge the gap between patients and medical providers, offering an efficient and accessible way to access quality healthcare services.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 dark:text-white'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600 dark:text-gray-300'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 dark:text-white'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600 dark:text-gray-300'>
            <li>+91 79066 21066</li>
            <li>psychocorp456@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr className='dark:border-gray-700' />
        <p className='py-5 text-sm text-center text-gray-600 dark:text-gray-400'>
          Copyright 2024 @ Prescripto.com - All Right Reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer


import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {

    const { doctors } = useContext(AppContext)

    return (
        <div className="dark:bg-dark-background dark:text-white">
            <p className='pb-3 mt-12 font-medium text-zinc-700 dark:text-gray-300 border-b'>My appointments</p>
            <div className=''>
                {doctors.slice(0, 2).map((item, index) => (
                    <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b dark:border-gray-700'>
                        <div>
                            <img className='w-32 bg-indigo-50 dark:bg-dark-input' src={item.image} alt="" />
                        </div>
                        <div className='flex-1 text-sm text-zinc-600 dark:text-gray-200'>
                            <p className='text-neutral-800 font-semibold dark:text-white'>{item.name}</p>
                            <p className='dark:text-gray-400'>{item.speciality}</p>
                            <p className='text-zinc-700 font-medium mt-1 dark:text-gray-300'>Address:</p>
                            <p className='text-xs dark:text-gray-400'>{item.address.line1}</p>
                            <p className='text-xs dark:text-gray-400'>{item.address.line2}</p>
                            <p className='text-xs mt-1 dark:text-gray-400'>
                                <span className='text-sm text-neutral-700 font-medium dark:text-gray-300'>Date & Time:</span> 25, July, 2024 | 8:30 PM
                            </p>
                        </div>
                        <div></div>
                        <div className='flex flex-col gap-2 justify-end'>
                            <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>
                                Pay Online
                            </button>
                            <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>
                                Cancel appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAppointments

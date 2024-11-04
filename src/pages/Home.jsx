import React from 'react'
import Header from '../components/Header'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import SpecialityMenu from '../components/SpecialityMenu'

const Home = () => {
  return (
    <div className='w-full'>
      {/* Make the header sticky at the top with z-index for layering */}
      <Header className='mb-10 sticky top-0 z-50' />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  )
}

export default Home

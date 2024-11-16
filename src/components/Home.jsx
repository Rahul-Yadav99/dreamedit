import React from 'react'
import Layout from './Layout'
// f4f00a YELLOw
// 121a23

// #101820, #FEE715
const Home = () => {
  return (
    <Layout>
      <div className="md:w-6/12 w-11/12 m-auto">
      <div className='min-h-[50vh] md:gap-14 gap-8 flex justify-center flex-col items-center'>
        <h1 className='text-white md:text-4xl text-2xl font-extrabold'>"Transforming Ideas into Visual <span className='md:text-5xl text-3xl text-[#FFD700]'>Masterpieces</span>."</h1>
        <div className="w-full md:space-x-10 space-x-5 md:pl-5">
          <button className='bg-[#FFD700] text-black px-6 py-3 rounded font-semibold'>Hire Me !</button>
          <button className='border border-[#FFD700] text-white px-6 py-3 rounded font-semibold'>Resume !</button>
        </div>
      </div>
      </div>
    </Layout>

  )
}

export default Home

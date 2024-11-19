import React, { useEffect, useRef } from 'react'
import Layout from './Layout'
import ReactSlider from './ReactSlider'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';
const Home = () => {

  const boxRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Initialize GSAP Timeline
    const timeline = gsap.timeline();

    // Define animations
    timeline
      .from(boxRef.current, {
        y: 300,
        duration: 1,
        delay: 0.5,
        opacity: 0,
      })
      .from(textRef.current, {
        y: 300,
        duration: 1,
        opacity: 0,
      });

    // Cleanup (optional if animations won't reinitialize)
    return () => {
      timeline.kill();
    };
  });

  return (
    <Layout>
      <div className='md:w-8/12 w-11/12 m-auto md:min-h-screen min-h-[90vh] grid md:grid-cols-2 grid-cols-1'>
        <div ref={boxRef} className="heroOne h-full flex justify-center items-start flex-col md:gap-y-9 gap-5">
          <h1 className='text-white md:text-4xl text-2xl font-extrabold'>"Transforming Ideas into Visual <span className='md:text-5xl text-3xl ml-2 text-[#FFD700]'>Masterpieces</span> ." </h1>
          <div className="w-full md:space-x-10 space-x-5">
            <button className='bg-[#FFD700] text-black px-6 py-3 rounded font-semibold'>Hire Me !</button>
            <button className='border border-[#FFD700] text-white px-6 py-3 rounded font-semibold'>Resume !</button>
          </div>
        </div>

        <div ref={textRef} className="heroTwo h-full flex justify-center items-center">
          <img src="/images/hero.svg" alt="" />
        </div>
      </div>
      <div className="md:w-8/12 w-11/12 m-auto py-5">
        <h1 className='font-bold md:text-4xl text-3xl text-[#FFD700] mb-5'>Our Client`s</h1>
        {/* <Slider /> */}
        <ReactSlider />
      </div>
    </Layout>

  )
}

export default Home

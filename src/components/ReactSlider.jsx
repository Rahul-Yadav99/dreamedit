import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReactSlider = () => {
    const [clients, setClients] = useState([
        {
          name : 'clinet',
          message : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          image : '/images/logo.jpg',
          link : 'https://youtube.com/@dreamverse777?si=3z6PcV_oVTNN0hjW'
        },{
          name : 'clinet',
          message : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          image : '/images/logo.jpg',
          link : 'https://youtube.com/@dreamverse777?si=3z6PcV_oVTNN0hjW'
        },{
          name : 'clinet',
          message : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          image : '/images/logo.jpg',
          link : 'https://youtube.com/@dreamverse777?si=3z6PcV_oVTNN0hjW'
        },{
          name : 'clinet',
          message : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          image : '/images/logo.jpg',
          link : 'https://youtube.com/@dreamverse777?si=3z6PcV_oVTNN0hjW'
        },{
          name : 'clinet',
          message : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          image : '/images/logo.jpg',
          link : 'https://youtube.com/@dreamverse777?si=3z6PcV_oVTNN0hjW'
        },{
          name : 'clinet',
          message : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          image : '/images/logo.jpg',
          link : 'https://youtube.com/@dreamverse777?si=3z6PcV_oVTNN0hjW'
        },{
          name : 'clinet',
          message : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          image : '/images/logo.jpg',
          link : 'https://youtube.com/@dreamverse777?si=3z6PcV_oVTNN0hjW'
        },
      ])
      const settingsPc = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      const settingsMoblie = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
    <div className='w-11/12 m-auto md:block hidden'>
            <Slider {...settingsPc}>
        {
            clients.map((item, index) => (
            <div key={index} className=' flex justify-center items-center flex-col border border-white rounded-lg py-3 border-b-2 border-b-[#FFD700]'>
                <img src={item.image} alt="" className='m-auto h-[150px] w-[150px] object-top object-cover rounded-full' />
                <div className=" m-auto w-[300px] space-y-3 mt-2 overflow-hidden">
                  <h1 className='text-center text-white'>{item.name}</h1>
                  <p className='text-center text-white'>{item.message}</p>
                  <div className="flex justify-center">
                      <Link to={item.link} target='blank' className='block w-fit bg-[#FFD700] font-semibold px-4 py-1'>
                      View
                      <i className="ri-arrow-right-line ml-2"></i>
                      </Link>
                  </div>
                </div>
            </div>
            ))
        }
        </Slider>
    </div>

     {/* slider for mobile */}

      <div className='w-11/12 m-auto md:hidden block'>
              <Slider {...settingsMoblie}>
          {
              clients.map((item, index) => (
              <div key={index} className=' flex justify-center items-center flex-col border border-white rounded-lg py-3 border-b-2 border-b-[#FFD700]'>
                  <img src={item.image} alt="" className='m-auto h-[150px] w-[150px] object-top object-cover rounded-full' />
                  <div className=" m-auto w-[300px] space-y-3 mt-2 overflow-hidden">
                    <h1 className='text-center text-white'>{item.name}</h1>
                    <p className='text-center text-white'>{item.message}</p>
                    <div className="flex justify-center">
                        <Link to={item.link} target='blank' className='block w-fit bg-[#FFD700] font-semibold px-4 py-1'>
                        View
                        <i className="ri-arrow-right-line ml-2"></i>
                        </Link>
                    </div>
                  </div>
              </div>
              ))
          }
          </Slider>
      </div>
    </div>
  )
}

export default ReactSlider

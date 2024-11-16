import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Slider = () => {

  const [clients, setClients] = useState([
    {
      name : 'clinet',
      message : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, dolorem.',
      image : '/images/logo.jpg',
      link : 'https://youtube.com/@dreamverse777?si=3z6PcV_oVTNN0hjW'
    },{
      name : 'clinet',
      message : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, dolorem.',
      image : '/images/logo.jpg',
      link : 'https://youtube.com/@dreamverse777?si=3z6PcV_oVTNN0hjW'
    },{
      name : 'clinet',
      message : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, dolorem.',
      image : '/images/logo.jpg',
      link : 'https://youtube.com/@dreamverse777?si=3z6PcV_oVTNN0hjW'
    },{
      name : 'clinet',
      message : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, dolorem.',
      image : '/images/logo.jpg',
      link : 'https://youtube.com/@dreamverse777?si=3z6PcV_oVTNN0hjW'
    },{
      name : 'clinet',
      message : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, dolorem.',
      image : '/images/logo.jpg',
      link : 'https://youtube.com/@dreamverse777?si=3z6PcV_oVTNN0hjW'
    },{
      name : 'clinet',
      message : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, dolorem.',
      image : '/images/logo.jpg',
      link : 'https://youtube.com/@dreamverse777?si=3z6PcV_oVTNN0hjW'
    },{
      name : 'clinet',
      message : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, dolorem.',
      image : '/images/logo.jpg',
      link : 'https://youtube.com/@dreamverse777?si=3z6PcV_oVTNN0hjW'
    },
  ])
  return (
    <>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
        
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper md:flex hidden"
    >
      {
        clients.map((item, index) => (
          <SwiperSlide key={index} className='md:w-8/12 w-11/12 m-auto flex justify-center items-center flex-col border border-white rounded-lg py-3 border-b-2 border-b-[#FFD700]'>
            <img src={item.image} alt="" className='h-[150px] w-[150px] object-top object-cover rounded-full' />
            <div className="w-[300px] space-y-3 mt-2">
              <h1 className='text-center text-white'>{item.name}</h1>
              <p className='text-center text-white'>{item.message}</p>
              <div className="flex justify-center">
                <Link to={item.link} target='blank' className='block w-fit bg-[#FFD700] font-semibold px-4 py-1'>
                  View
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
{/* mobile */}
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
        
      }}
      modules={[Pagination]}
      className="mySwiper md:hidden flex"
    >
      {
        clients.map((item, index) => (
          <SwiperSlide key={index} className='md:w-8/12 w-11/12 m-auto flex justify-center items-center flex-col border border-white rounded-lg py-3 border-b-2 border-b-[#FFD700]'>
            <img src={item.image} alt="" className='h-[150px] w-[150px] object-top object-cover rounded-full' />
            <div className="w-[300px] space-y-3 mt-3">
              <h1 className='text-center text-white font-semibold'>{item.name}</h1>
              <p className='text-center text-white'>{item.message}</p>
              <div className="flex justify-center">
                <Link to={item.link} target='blank' className='block w-fit bg-[#FFD700] font-semibold px-4 py-1'>
                  View
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  </>
  )
}

export default Slider

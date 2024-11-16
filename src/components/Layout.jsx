import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Layout = ({children}) => {

    const location = useLocation()
    const [mobileMenu, setMobileMenu] = useState(false)

    const menus = [
    {
        label : 'Home',
        href : '/'
    },
    {
        label : 'About',
        href : '/about'
    },
    {
        label : 'Portfolio',
        href : '/portfolio'
    },
]
  return (
    <div>
      <header className='bg-[#101820] shadow-xl sticky top-0 left-0 border-b'>
        <nav className='md:w-8/12 w-11/12 m-auto flex justify-between items-center'>
            <Link to={'/'}>
                <img src="/images/logo.png" alt="" className='w-[120px] object-cover' />
            </Link>
            <button className='md:hidden' onClick={() => setMobileMenu(!mobileMenu)}>
                {
                    mobileMenu ? <i className="ri-close-line font-bold text-2xl text-white"></i> : <i className="ri-menu-4-line font-bold text-2xl text-white"></i>

                }
            </button>
            <ul className='md:flex hidden justify-center items-center gap-7'>
                {
                    menus.map((item, index) => (
                        <li key={index} className=' hover:bg-[#FFD700] hover:text-black text-white'>
                            <Link to={item.href} className='block px-4 py-2'
                                style={{
                                    borderBottom: (item.href === location.pathname) ? '2px solid #FFD700' : '',
                                }}
                            >{item.label}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
      </header>


        <div className='bg-gray-100'>
            {children}
        </div>


       <footer className='bg-[#101820] py-5'>
       <div className="md:w-8/12 w-11/12 m-auto grid md:grid-cols-3 grid-cols-1 gap-8">
            <div className="">
            <Link to={'/'} className=' font-bold text-5xl text-[#FFFF]'>
                DREAMEDIT
            </Link>
            <p className='text-base text-gray-100 md:mt-4 mt-2'>
                <i className="ri-map-pin-line mr-3 text-xl"></i>
                Sonia Vihar, New Delhi, Delhi 110094
            </p>
            </div>
            <div className="">
                <h1 className='text-3xl text-white font-semibold'>Usefull Links</h1>
                <ul className='space-y-2 md:mt-4 mt-1 '>
                    {
                        menus.map((item, index) => (
                            <li key={index} className='text-white '>
                                <Link to={item.href}>{item.label}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="">
                <h1 className='text-3xl text-white font-semibold mb-4'>Contact us</h1>
                <form action="" className='space-y-4'>
                    <input required type="text" name="fullname" placeholder='Your Name' className='bg-white w-full rounded p-3' />
                    <input required type="email" name="email" placeholder='Your Emial' className='bg-white w-full rounded p-3' />
                    <textarea name="message" placeholder='Message' rows={3} className='bg-white w-full rounded p-3'/>
                    <button className='border border-white bg-black text-white py-2 px-4 rounded'>Submit</button>
                </form>
            </div>
        </div>
       </footer>

       {/* Phone nav */}
    
       <aside className='h-full md:hidden bg-gray-600  shadow-2xl fixed top-0 left-0 z-10 overflow-hidden pt-6'
            style={{
                width: mobileMenu ? 250 : 0,
                transition: '0.3s',
            }}
        >
            <div className='flex flex-col gap-2 pl-2 pt-6 pr-2'>
                {
                    menus.map((item, index) => (
                        <Link to={item.href} key={index} className=' px-4 py-2 text-sm font-medium w-full text-white'
                            style={{
                                background: (item.href === location.pathname) ? '#FFD700' : '',
                                color: (item.href === location.pathname) ? 'black' : '',
                            }}
                        >
                            {item.label}
                        </Link>
                    ))
                }
            </div>
        </aside>
    </div>
  )
}

export default Layout

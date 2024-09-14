import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {

    const location = useLocation()


    const [mobileSize, setMobileSize] = useState(false)
    
    const menus = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'About',
            href: '/about'
        },
        {
            label: 'Portfolio',
            href: '/portfolio'
        }
    ]

    return (
        <div>
            <nav 
                className=" bg-black flex items-center justify-around py-4  border-b"
                style={{
                    position:'sticky',
                    top: 0
                }}
                >
                <div className="flex items-cente justify-center">
                    <Link 
                        to={'/'}
                        className="font-mono md:text-3xl text-2xl font font-semibold text-white tracking-widest"
                    >
                        Dream Edit
                    </Link>
                </div>
                <button 
                    className="md:hidden"
                    onClick={()=>setMobileSize(!mobileSize)}
                >
                    <i className="ri-menu-2-line text-white font-semibold text-xl"></i>
                </button>
                <div 
                    className="md:flex hidden"
                >
                   <ul className="md:flex items-center justify-center gap-12 ">
                        {
                            menus.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link 
                                            to={item.href}
                                            className="text-white text-base font-semibold px-4 py-2 "
                                            style={{
                                                borderBottom: (item.href === location.pathname) ? '1px solid white' : 'transparent',
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                   </ul>
                </div>
            </nav>
                <aside 
                    className="fixed top-[63.4px] left-0 bg-black h-screen md:hidden overflow-hidden z-10"
                    style={{
                            width: mobileSize ? '250px' : '0px',
                            transition: '0.3s'
                        }}
                >
                    <div className="flex flex-col p-8 gap-6 ">
                        {
                            menus.map((item, index) => {
                                return(
                                    <Link to={item.href} 
                                        className="text-white px-4 py-2"
                                        style={{
                                            borderBottom: (item.href === location.pathname) ? '1px solid white' : 'transparent',
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </aside>
        </div>
    )
}

export default Navbar
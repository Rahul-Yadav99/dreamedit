import { Link } from "react-router-dom"

const Navbar = () => {

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
            label: 'Work',
            href: '/work'
        }
    ]

    return (
        <>
            {/* computer */}
            <div className="md:block hidden">
                <nav className="py-4 px-32 shadow-lg flex items-center justify-between ">
                    <h1 
                        className=" font-mono text-2xl font-semibold tracking-widest ">
                        <Link to={'/'}>DreamEdit</Link>
                    </h1>

                    <div className="flex items-center gap-3">
                        <ul className="flex items-center justify-between gap-3">
                            {
                                menus.map((item, index) => {
                                    return (
                                        <li key={index} className="text-base font-semibold ">
                                            <Link to={item.href} 
                                                className=" py-2 px-4 hover:transition delay-75 hover:border-b-2 hover:border-black"
                                            >{item.label}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <button className="py-2 px-4 text-base font-semibold bg-[dodgerblue] text-white rounded hover:bg-[#115598] transition delay-75">Resume <i className="ri-link"></i></button>
                        <button className="py-2 px-4 text-base font-semibold border border-[dodgerblue] rounded">Contact Us <i class="ri-contacts-line"></i></button>
                    </div>
                </nav>
            </div>

            {/* mobile */}

            <div className="md:hidden block">
                <nav className="py-4 px-32 shadow-lg flex items-center justify-between ">
                    <h1 
                        className=" font-mono text-2xl font-semibold tracking-widest ">
                        <Link to={'/'}>DreamEdit</Link>
                    </h1>

                    <div className="flex items-center gap-3">
                        <ul className="flex items-center justify-between gap-3">
                            {
                                menus.map((item, index) => {
                                    return (
                                        <li key={index} className="text-base font-semibold ">
                                            <Link to={item.href} 
                                                className=" py-2 px-4 hover:transition delay-75 hover:border-b-2 hover:border-black"
                                            >{item.label}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <button className="py-2 px-4 text-base font-semibold bg-[dodgerblue] text-white rounded hover:bg-[#115598] transition delay-75">Resume <i className="ri-link"></i></button>
                        <button className="py-2 px-4 text-base font-semibold border border-[dodgerblue] rounded">Contact Us <i class="ri-contacts-line"></i></button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
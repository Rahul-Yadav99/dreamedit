import { Link } from "react-router-dom"


const Footer = () => {

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
            <footer className="md:grid md:grid-cols-3 flex flex-col md:px-32 md:py-12 py-4 gap-4 bg-black ">
                

                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="">
                        <Link 
                            to={'/'}
                            className="md:text-xl text-base font text-white"
                        >
                            Useful Links
                        </Link>
                    </div>

                    <div className="flex items-center justify-center">
                        <ul className="flex items-center justify-center gap-4 flex-col ">
                            {
                                menus.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link 
                                                to={item.href}
                                                className="text-white text-base px-4 py-2 "
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 py-4">
                    <h1 className="text-white text-xl">Social Media</h1>
                    <div className="flex flex-col gap-4">
                        <Link to={'https://www.instagram.com/dreamedit777?igsh=MXYwbGlybmgwaDV6Zw=='} target="blank" className="text-white text-lg">
                            <i className="ri-instagram-line text-xl mr-2 text-[#e318d1]"></i>
                            Instagram
                        </Link>

                        <Link to={'https://youtube.com/@roshanedit1?si=9l3hr4nDQc3Dlmpp'} target="blank" className="text-white text-lg">
                            <i className="ri-youtube-line text-xl mr-4 text-red-700"></i>
                            YouTube
                        </Link>

                        <Link to={'https://www.linkedin.com/in/hritik-yadav9/'} target="blank" className="text-white text-lg">
                            <i className="ri-linkedin-box-fill text-xl mr-4 text-[#2863be]"></i>
                            Linkedin
                        </Link>
                    </div>
                </div>            

                <div className=" px-8 py-4">
                    <h1 className="text-white text-2xl font-semibold mb-2">Contact Me</h1>
                    <form action="" 
                        className="flex flex-col gap-4"
                    >
                        <input type="text" name="name" placeholder="Enter Your Name" className="px-3 py-3 rounded" />
                        <input type="email" name="email" placeholder="Enter Your Email" className="px-3 py-3 rounded" />
                        <input type="number" name="contact" placeholder="Enter Your Contact No." className="px-3 py-3 rounded" />
                        <textarea name="message" rows={3} placeholder="Message" className="px-3 py-3 rounded"></textarea>
                        <button
                            className="bg-[dodgerblue] text-white px-4 py-2 rounded w-fit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                
            </footer>
        </div>
    )
}

export default Footer
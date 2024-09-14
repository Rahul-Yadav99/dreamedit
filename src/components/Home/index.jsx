import { Link } from "react-router-dom";
import Footer from "../Footer"
import Navbar from "../Navbar"
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";

const Home = () => {


    const ExampleComponent = () => {
        return (
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Video Editor',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              ' Video Editor',
              1000
            ]}
            wrapper="span"
            speed={20}
            style={{ 
                fontSize: '50px', 
                
                fontWeight: 700 ,
                color: '#29b4d2',
                letterSpacing: '7px',
                marginLeft: '12px'
            }}

            repeat={Infinity}
          />
        );
      };

      const mobileTyping = () => {
        return (
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Video Editor',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              ' Video Editor',
              1000
            ]}
            wrapper="span"
            speed={20}
            style={{ 
                fontSize: '50px', 
                display: 'inline-block', 
                fontWeight: 700 ,
                color: '#29b4d2',
                letterSpacing: '4px',
                
            }}

            repeat={Infinity}
          />
        );
      };

    return (
        <div>
            <Navbar />
            {/* computer */}
               <div className="bg-black  md:flex  justify-center items-center gap-10 px-32 py-12 hidden">
                    <div className="w-[70%] mr-[50px] pl-[100px]">
                        {/* computer */}
                            <h1 
                                className="text-white text-5xl font-[700] mb-6"
                                style={{
                                    letterSpacing: '7px'
                                }}
                            >
                                Hritik Yadav {ExampleComponent()}
                            </h1>

                            <p
                                className="text-white w-[600px] mb-6"
                                style={{
                                    letterSpacing: 4
                                }}    
                            >
                                Hello! I'm Hritik Yadav. I'm a Video Editor, and I'm very passionate and dedicated to my work.
                            </p>


                            <button className=" text-white font-medium">
                                <Link to={'/contact'}
                                    className=" bg-[#29b4d2] px-6 py-2 rounded "
                                >
                                    Hire Me
                                    <i className="ri-arrow-right-line ml-2"></i>
                                </Link>
                            </button>
                    </div>

                    <div className="h-full w-[30%] flex items-center justify-end pr-[200px] ">
                        <img src="./images/logo.jpg" alt="" 
                            className="h-[336px] w-[240px]"
                        />
                    </div>
               </div>

               {/* mobile */}

               <div className="bg-black md:hidden flex justify-center items-center flex-col overflow-hidden gap-y-[25px] pb-4">
                    <div className="h-[50%] w-[100%]  pl-2 py-11">
                            <h1 
                                className="text-white text-[50px] font-[700] mb-2"
                                style={{
                                    letterSpacing: '3px'
                                }}
                            >
                                Hritik Yadav 
                            </h1>
                            <h1 className="mb-2">
                                {mobileTyping()}    
                            </h1>    
                            <p
                                className="text-white mb-6"
                                style={{
                                    letterSpacing: 4
                                }}    
                            >
                                Hello! I'm Hritik Yadav. I'm a Video Editor, and I'm very passionate and dedicated to my work.
                            </p>


                            <button className=" text-white font-medium mb-6">
                                <Link to={'/contact'}
                                    className=" bg-[#29b4d2] px-6 py-2 rounded "
                                >
                                    Hire Me
                                    <i className="ri-arrow-right-line ml-2"></i>
                                </Link>
                            </button>
                    </div>

                    <div className="h-[50%] w-[100%] flex items-center justify-center">
                        <img src="./images/logo.jpg" alt="" 
                            className="h-[336px] w-[240px]"
                        />
                    </div>
               </div>
            <Footer />
        </div>
    )
}

export default Home
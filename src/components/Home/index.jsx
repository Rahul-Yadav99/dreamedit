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
                display: 'inline-block', 
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
                fontSize: '10px', 
                display: 'inline-block', 
                fontWeight: 500 ,
                color: '#29b4d2',
                letterSpacing: '4px',
                marginLeft: '12px'
            }}

            repeat={Infinity}
          />
        );
      };

    return (
        <div>
            <Navbar />
               <div className="overflow-hidden md:min-h-screen min-h-[50vh] py-12 bg-black  flex md:flex-row justify-center items-center flex-col-reverse md:gap-10 gap-5 md:px-32">
                    <div className="h-full md:w-[60%] w-full">
                        {/* computer */}
                            <h1 
                                className="text-white md:text-5xl md:font-[700] md:mb-6 md:flex hidden "
                                style={{
                                    letterSpacing: '7px'
                                }}
                            >
                                Hritik Yadav {ExampleComponent()}
                            </h1>

                            <p
                                className="text-white w-[600px] mb-6 md:flex  hidden"
                                style={{
                                    letterSpacing: 4
                                }}    
                            >
                                Hello! I'm Hritik Yadav. I'm a Video Editor, and I'm very passionate and dedicated to my work.
                            </p>

                            {/* mobile */}

                            <h1 
                                className="text-white mr-2 items-center justify-center  md:text-5xl md:font-[700] md:mb-6 flex md:hidden text-[10px] font-[500]"
                                style={{
                                    letterSpacing: '4px'
                                }}
                            >
                                Hritik Yadav {mobileTyping()}
                            </h1>

                            <p
                                className="text-white w-[600px] mb-6 flex md:hidden p-2"
                                style={{
                                    letterSpacing: 2
                                }}    
                            >
                                Hello! I'm Hritik Yadav. I'm a Video Editor.
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

                    <div className="bg-green-500">
                        <img src="./images/logo.jpg" alt="" 
                            className="md:h-[672px] md:w-[480] h-[380px]"
                        />
                    </div>
               </div>
            <Footer />
        </div>
    )
}

export default Home
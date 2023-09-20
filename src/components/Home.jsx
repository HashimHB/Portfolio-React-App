import React,{useState} from "react"
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from "react-scroll";

const Home = () =>{
    const [Home,setHome] = useState(false)
    const handleClick = () => setHome(!Home)
    return(
        <div name='home' className="w-full h-screen bg-[#0a192f]">


            {/* {Container} */}

            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white">
                <p className="text-pink-600 text-2xl">Hi, My Name is</p>
                <h1 className="text-3xl sm:text-5xl font-bold text-[#ccd6f6]">Hashim Hayath Basha</h1>
                <h2 className="text-3xl sm:text-5xl font-bold text-[#8892b0]">I'm a Intrested in Full-Stack</h2><br></br>
                <p className=" text-[#8892b0] py-4 max-w-[700px] text-xl">Student at <span className="text-pink-600">Chennai Institute of Technology.</span>Maintaining a good CGPA of about <span className="text-pink-600">8.9</span>. 
                I have a strong work ethic and I am a fast learner who largely wants to learn and explore new things. To secure a challenging position in a reputable organization to expand my <span className="text-pink-600">learnings, knowledge, and skills.</span>
                </p>
                <div>
                
                <div className="flex gap-3">
                <button  className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-500">
                    <a href="https://resume.io/r/z42WdYetn" target="_blank" >Resume</a>
                    <span >
                    <HiArrowNarrowRight className="hover:rotate-180 duration-300 ml-3"/>
                    </span>
                </button>

                <button className="text-white border-2 px-6 py-3 my-2  flex items-center hover:bg-pink-600 hover:border-pink-500">
                     <Link onClick={handleClick} to="projects" smooth={true} duration={500}>View Work</Link>
                    <span>
                    <HiArrowNarrowRight className="hover:rotate-90 duration-300 ml-3"/>
                    </span>
                </button>
                </div>

                </div>
            </div>
        </div>     
    )
}

export default Home
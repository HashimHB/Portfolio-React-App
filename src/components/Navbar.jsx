import React,{useState} from "react"
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaTwitter} from 'react-icons/fa';
import logo from "../assetes/logo-nav.png";
import {Link} from "react-scroll";

const Navbar = () =>{
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fbfbfc] text-black-300'>
            <div>
                <a href="home"><img src={logo} alt="Logo" style={{width:'50px'}}/></a>
            </div>

                <ul className="hidden md:flex nav-style ">
                    <li>
                      <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li>
                    <Link to="skills" smooth={true} duration={500}>Skills</Link>
                    </li>
                    <li>
                    <Link to="projects" smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
            

            {/* {Hamburger} */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars/>: <FaTimes/>}
            </div>
            {/* {Mobile Menu} */}
            <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#b8babd] flex flex-col justify-center items-center nav-mobile'}>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>


            {/* {Social Icons} */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/hashimhb/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#dd4d4d]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.instagram.com/Hashimb5h/' 
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0c6899]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/' rel="noopener"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#706c6c]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/HashimHB'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
    )
}




export default Navbar
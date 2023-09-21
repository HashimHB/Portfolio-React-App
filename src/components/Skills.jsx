import React from "react";
import github from '../assetes/github.png';
import git from '../assetes/git.png';
import cpp from '../assetes/cpp.png';
import java from '../assetes/java.png';
import js from '../assetes/js.png';
import mongodb from '../assetes/mongodb.png';
import python from '../assetes/python.png';
import nodejs from '../assetes/nodejs.png';
import html from '../assetes/html.png';
import css from '../assetes/CSS.png';
import bootstrap from '../assetes/bootstrap.png';
import wordpress from '../assetes/wordpress.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 '>
      <div className='max-w-[1000px] mx-auto  p-5  flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#b2b4b6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#b2b4b6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={css} alt="css icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#b2b4b6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={js} alt="javascript icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#b2b4b6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={python} alt="python icon" />
                  <p className='my-4'>PYTHON</p>
              </div>
              <div className='shadow-md shadow-[#b2b4b6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={java} alt="java icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#b2b4b6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={cpp} alt="c++ icon" />
                  <p className='my-4'>C ++</p>
              </div>
              <div className='shadow-md shadow-[#b2b4b6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={git} alt="git icon" />
                  <p className='my-4'>GIT</p>
              </div>
              <div className='shadow-md shadow-[#b2b4b6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={github} alt="github icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#b2b4b6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={nodejs} alt="nodejs icon" />
                  <p className='my-4'>NODEJS</p>
              </div>
              <div className='shadow-md shadow-[#b2b4b6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={mongodb} alt="mongodb icon" />
                  <p className='my-4'>MONGODB</p>
              </div>
              <div className='shadow-md shadow-[#b2b4b6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={bootstrap} alt="mongodb icon" />
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
              <div className='shadow-md shadow-[#b2b4b6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={wordpress} alt="mongodb icon" />
                  <p className='my-4'>WORDPRESS</p>
              </div>
          </div>
      </div>
    </div>
    );
};

export default Skills
import React from "react";

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm <span className="text-pink-600">Hashim HB,</span>  nice to meet you. Please take a look around.</p>
            </div>
            <div>
                <p className="text-2xl font-bold  text-slate-400 py-3">What's special about me?</p>
                <p className="text-orange-500 py-2"> ➢ Ability to quickly master a new skill and implement it to solve real problems.</p>
                <p className="text-orange-500 py-2">➢ Love to learn new technologies and explore new sets of areas.</p>
                <p className="text-orange-500 py-2">➢ I will give my 100% to any task that is given to me.
                </p>  
            </div>
          </div>
      </div>
    </div>
    )
}


export default About;
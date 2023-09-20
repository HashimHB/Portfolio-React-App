import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi';

const Contact = () =>{
    return (
        <div name='contact' className='w-full h-screen  bg-[#0a192f] text-gray-300 '>
            <div className='max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full'>
                    <form method="POST" action="https://getform.io/f/93eb2321-6e03-47c8-bdc7-c6a814fa5638" className="flex flex-col max-w-[px] w-full">
                        <div className="pb-8">
                            <p className="text-4xl font-bold inline border-b-4 border-pink-600">Contact</p>
                            
                        </div>
                        <input className="bg-[#ccdf6] p-2 text-gray-600"  type="text" placeholder="Enter Your Name" name="name"/>
                        <input  className="my-4 p-2 bg-[#ccdf6] text-gray-600" type="email" placeholder="Enter Your Email-ID" name="email"/>
                        <textarea className="bg-[#ccdf6] p-2 text-gray-600" name="message" rows="4" placeholder="Enter Your Message"></textarea>
                        <button  className="text-white border-2 px-6 py-3 my-2 mx-auto flex  justify-center items-center hover:bg-pink-600 hover:border-pink-500">
                            <a>Let's Collaborate</a>
                                <span >
                                    <HiArrowNarrowRight className="hover:rotate-180 duration-300 ml-3"/>
                                </span>
                        </button>
                    </form>
                        <br></br>
                        <p className="text-gray-300 text-2xl py-4">I will be <span className="text-pink-600">Available Here :</span> </p>
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=599&amp;height=391&amp;hl=en&amp;q=chennai institute of technology&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            <a href="https://connectionsgame.org/"></a>
                        </div>



                    </div>

            
                    
            </div>

                    
        </div>

        
    )

}

export default Contact;
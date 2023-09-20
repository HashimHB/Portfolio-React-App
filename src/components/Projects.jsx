import React from "react";
import twitter from '../assetes/twitter.png';
import news from "../assetes/news.png";
import az1 from "../assetes/az1.jpeg";
import login1 from "../assetes/login1.png";
import portfolio from "../assetes/portfolio.png";
import quiz from "../assetes/quiz.png";
import clone from "../assetes/clone.png";

const Projects = () =>{
    return (
      <div name="projects" className="w-full md:h-screen  text-gray-200 bg-[#0a192f] responsive">
          <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Projects</p>
              <p className="py-6">Check Out Some of My recent Projects</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
              <div style={{backgroundImage:`url(${clone})`}} className="shadow-lg shadow-[#dedfe0] group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    Coming Soon!!!!
                  </span>

                  <div className="gt-8 text-color">
                    
                    <button className="text-center rounded-lg px-4 py-3 m-4 text-gray-700 font-bold text-lg button-style"><a href='https://github.com/HashimHB' target="_blank">Visit</a></button>

                    <a href='https://github.com/HashimHB'></a>
                    <button className="text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg button-style">Code</button>
                  </div>
                </div>
              </div>

              <div style={{backgroundImage:`url(${quiz})`}} className="shadow-lg shadow-[#dedfe0] group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    Quiz Website
                  </span>

                  <div className="gt-8 text-color">
                    
                    <button className="text-center rounded-lg px-4 py-3 m-4 text-gray-700 font-bold text-lg button-style"><a href='https://github.com/HashimHB' target="_blank">Visit</a></button>

                    <a href='https://github.com/HashimHB'></a>
                    <button className="text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg button-style">Code</button>
                  </div>
                </div>
              </div>

              <div style={{backgroundImage:`url(${news})`}} className="shadow-lg shadow-[#dedfe0] group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    News Api Website
                  </span>

                  <div className="gt-8 text-color">
                    
                    <button className="text-center rounded-lg px-4 py-3 m-4 text-gray-700 font-bold text-lg button-style"><a href='https://github.com/HashimHB' target="_blank">Visit</a></button>

                    <a href='https://github.com/HashimHB'></a>
                    <button className="text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg button-style">Code</button>
                  </div>
                </div>
              </div>

              <div style={{backgroundImage:`url(${twitter})`}} className="shadow-lg shadow-[#dedfe0] group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    Sentiment Analysis
                  </span>

                  <div className="gt-8 text-color">
                    
                    <button className="text-center rounded-lg px-4 py-3 m-6 text-gray-700 font-bold text-lg button-style"><a href='https://github.com/HashimHB/Twitter-Sentiment-Analysis#readme' target="_blank">Visit</a></button>

                    <a href='https://github.com/HashimHB'></a>
                    <button className="text-center rounded-lg px-4 py-3 m-3 text-gray-700 font-bold text-lg button-style">Code</button>
                  </div>
                </div>
              </div>

              <div style={{backgroundImage:`url(${login1})`}} className="shadow-lg shadow-[#dedfe0] group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    Login-page
                  </span>

                  <div className="gt-8 text-color">
                    
                    <button className="text-center rounded-lg px-4 py-3 m-4 text-gray-700 font-bold text-lg button-style"><a href='https://github.com/HashimHB' target="_blank">Visit</a></button>

                    <a href='https://github.com/HashimHB'></a>
                    <button className="text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg button-style">Code</button>
                  </div>
                </div>
              </div>

              <div style={{backgroundImage:`url(${portfolio})`}} className="shadow-lg shadow-[#dedfe0] group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    Portfolio Website
                  </span>

                  <div className="gt-8 text-color">
                    
                    <button className="text-center rounded-lg px-4 py-3 m-4 text-gray-700 font-bold text-lg button-style"><a href='https://hashimhb.github.io/Portfolio-NEW/' target="_blank">Visit</a></button>

                    
                    <button className="text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg button-style"><a href='https://github.com/HashimHB/Portfolio-NEW' target="_blank">Code</a></button>
                  </div>
                </div>
              </div>

              

              
            </div>
          </div> 
      </div>
    )
}


export default Projects
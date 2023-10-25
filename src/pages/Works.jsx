import React from 'react';
import One from "../assets/images/1.png";
import Two from "../assets/images/2.png";
import Three from "../assets/images/3.png";

export default function Works() {
  return (
  
     <div id="works" className="bg-primary-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center	">
            <h2 className="text-base font-semibold leading-7 text-yellow-400">
              Latest work
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary-white sm:text-4xl">
              Here are some of the projects I have worked on
            </p>
            <p className="mt-6 text-lg leading-8 text-primary-light-gray">
              I love being about to 
            </p>
          </div>
          <div className="flex justify-center items-center py-16">
            <div className="flex flex-wrap justify-center gap-4 md:gap-x-16">
              <a>
                <img
                  className="w-auto h-96 rounded-xl cursor-pointer hover:-translate-y-1.5 hover:scale-100 duration-300"
                  src={One}
                  alt="Image 1"
                />
              </a>
              <a>
                <img
                  className="w-auto h-96 rounded-xl cursor-pointer hover:-translate-y-1.5 hover:scale-100 duration-300"
                  src={Two}
                  alt="Image 2"
                />
              </a>
              <a>
                <img
                  className="w-auto h-96 rounded-xl cursor-pointer hover:-translate-y-1.5 hover:scale-100 duration-300"
                  src={Three}
                  alt="Image 3"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}


// src/pages/Homepage.js

import React from "react";
import { Link } from 'react-router-dom';

function sendImage(innerWidth) {
  console.log(innerWidth);
  if (innerWidth <= 765) return "./headshot_mobile.jpeg"
  return "./headshot.jpeg"
}

export default function Homepage() {
  return (
    <section id="homepage">
      <div className="h-screen w-screen">
        <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w w 2xl:pl-10 lg:pl-8 lg:pl-6 md:pl-4 pl-2 2xl:pr-14 xl:pr-12 lg:pr-10 md:pr-4 pr-2 
            2xl:pt-8 xl:pt-6 lg:pt-4 pt-2 2xl:pb-10 xl:pb-8 lg:pb-6 md:pb-4 sm:pb-4 pb-2 absolute md:text-left 2xl:ml-30 xl:ml-20 lg:ml-20 md:ml-10
            2xl:mt-50 xl:mt-40 lg:mt-30 md:mt-20 sm:mt-5 2xl:mb-20 xl:mb-20 lg:mb-10 md:mb-4 sm:mb-2 items-center bg-stone-600 bg-opacity-60 rounded-2xl text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Luke!
              <br className="hidden lg:inline-block" /> Software Engineer / Writer
            </h1>
            <p className="mb-8 text-white leading-relaxed">
              I've always looked for a way to combine my love of coding with my creative side, and web development is one way that I'm able to do that.
              I also have a love of writing stories and hope one day to publish a book series, so I can share my imagination with the world.
            </p>
            <div className="justify-center">
              <Link to="/bio"
                className="mr-4 inline-flex text-white bg-red-700 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded lg:text-lg md:text-lg sm:text-md">
                About Me
              </Link>
              <Link to="/projects"
                className="inline-flex text-white bg-stone-500 border-0 py-2 px-6 focus:outline-none hover:bg-stone-400 hover:text-white rounded lg:text-lg md:text-lg sm:text-md">
                See My Past Work
              </Link>
            </div>
          </div>
        <img
          className="object-cover min-w-full min-h-full h-full"
          alt="headshot"
          src={sendImage(window.innerWidth)}
        /> 
      </div>    
    </section>
  );
}
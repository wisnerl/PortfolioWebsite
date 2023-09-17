// src/pages/Homepage.js

import React from "react";
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <section id="homepage">
      <div className="h-full w-full">
        <div className="lg:w-1/2 md:w-1/2 lg:pl-10 md:pl-4 lg:pr-10 md:pr-4 lg:pt-4 md:pt-2 lg:pb-4 md:pb-2 absolute md:text-left mb-16 lg:ml-20 md:ml-10 sm:ml-5 lg:mt-30 md:mt-20 sm:mt-8 md:mb-0 items-center bg-stone-600 bg-opacity-60 rounded-2xl text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Luke!
              <br className="hidden lg:inline-block" /> Web Developer / Writer
            </h1>
            <p className="mb-8 text-white leading-relaxed">
              I've always looked for a way to combine my love of coding with my creative side, and web development lets me do just that.
              I also have a love of writing stories, so I hope to one day share my imagination with the world.
            </p>
            <div className="justify-center">
              <Link to="/contact"
                className="inline-flex text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                Contact Me
              </Link>
              <Link to="/projects"
                className="ml-4 inline-flex text-white bg-stone-600 border-0 py-2 px-6 focus:outline-none hover:bg-stone-500 hover:text-white rounded text-lg">
                See My Past Work
              </Link>
            </div>
          </div>
        <img
          className="bg-cover object-center "
          alt="headshot"
          src="./headshot.jpeg"
        /> 
      </div>    
    </section>
  );
}
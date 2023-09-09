// src/components/Homepage.js

import React from "react";
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <section id="homepage">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            I'm Luke!
            <br className="hidden lg:inline-block" /> Web Developer / Writer
          </h1>
          <p className="mb-8 leading-relaxed">
            I've always looked for a way to combine my love of coding with my creative side, and web development lets me do just that.
            I also have a love of writing stories, so I hope to one day share my imagination with the world.
          </p>
          <div className="flex justify-center">
            <Link to="/contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </Link>
            <Link to="/projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./typing.svg"
          />
        </div>
      </div>
    </section>
  );
}
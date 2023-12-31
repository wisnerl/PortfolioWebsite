// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from 'react-router-dom';
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-stone-200 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <Link to="/" className="ml-3 text-xl">
          <img
            className="mx-auto object-center h-8 w-25 2xl:mb-6 xl:mb-6 lg:mb-6 md:mb-6 mb-0 2xl:mr-6 xl:mr-4 lg:mr-2 md:mr-2 mr-0"
            alt="cover"
            src="./Logo-no-background.png"
          />
          </Link>
        </div>
        <nav className="md:mr-auto sm:ml-0 ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-500	flex flex-wrap items-center text-base justify-center">
          <Link to="/bio" className="mr-5 hover:text-red-700 2xl:mb-0 xl:mb-0 l:mb-0 m:mb-0 sm:mb-0 mb-4">
            About Me
          </Link>
          <Link to="/projects" className="mr-5 hover:text-red-700 2xl:mb-0 xl:mb-0 l:mb-0 m:mb-0 sm:mb-0 mb-4">
            Coding Work
          </Link>
          <Link to="/skills" className="mr-5 hover:text-red-700 2xl:mb-0 xl:mb-0 l:mb-0 m:mb-0 sm:mb-0 mb-4">
            Tech Skills
          </Link>
          <Link to="/writing" className="mr-5 hover:text-red-700 2xl:mb-0 xl:mb-0 l:mb-0 m:mb-0 sm:mb-0 mb-4">
            Writing
          </Link>
          <Link to="/blog" className="mr-5 hover:text-red-700 2xl:mb-0 xl:mb-0 l:mb-0 m:mb-0 sm:mb-0 mb-4">
            Book Blog
          </Link>
        </nav>
        <Link
          to="/contact"
          className="inline-flex items-center bg-stone-200 border-0 py-1 px-3 focus:outline-none hover:bg-red-400 rounded text-base 
            2xl:mb-0 xl:mb-0 l:mb-0 m:mb-0 sm:mb-0 mb-4">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </header>
  );
}
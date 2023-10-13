// src/pages/Bio.js

import React from "react";
import { Link } from 'react-router-dom';
import { AcademicCapIcon } from "@heroicons/react/solid";

export default function Contact() {
  return (
      <section id="bio">
      <div className="container max-w-screen-2xl px-5 py-10 mx-auto text-center sm:flex-nowrap">
        <div className="flex flex-col w-full mb-5">
          <AcademicCapIcon className="mx-auto inline-block w-10 mb-4 text-stone-400" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-stone-400">
            About Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed mb-2">
            Get to know me better through my experiences, skills, and interests
          </p>
          <hr className="mb-4"></hr>
        </div>
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col overflow-hidden items-start">
            <div className="flex flex-wrap inline-flex overflow-hidden rounded-2xl shadow-md mb-2 bg-stone-200 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/2 w text-left 2xl:mr-6 xl:mr-6 lg:mr-6 md:mr-6 mr-0">
                <div className="px-6 py-6 flex-col overflow-hidden">
                    <img
                        className="object-cover rounded-2xl overflow-hidden"
                        alt="bioimage"
                        src="./bioimage.jpeg"
                    />
                    <h2 className="text-2xl font-medium title-font text-stone-400 mt-4">
                            Inquire Further:
                    </h2>
                    <div className="flex flex-row w justify-center">
                        <a className="w-1/3 mt-4" href="https://www.linkedin.com/in/luke-wisner-811101198">
                        <img
                            className="object-cover rounded-2xl overflow-hidden"
                            alt="linkedinlogo"
                            src="./linkedin.jpg"
                        />
                        </a>
                        <a className="w-1/3 2xl:ml-8 xl:ml-8 l:ml-6 ml-4 mt-4" href="https://github.com/wisnerl">
                        <img
                            className="object-cover rounded-2xl overflow-hidden"
                            alt="githublogo"
                            src="./github.png"
                        />
                        </a>
                        <Link to="/contact"
                            className="w-1/3 2xl:ml-8 xl:ml-8 l:ml-6 ml-4 mt-4 inline-flex text-white bg-red-700 border-0 lg:py-6 py-2 lg:px-4 px-6 focus:outline-none hover:bg-red-600 rounded-xl lg:text-2xl md:text-xl text-lg text-center items-center justify-center">
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-stone-200 rounded-2xl overflow-hidden p-6 flex flex-wrap shadow-md mb-2 justify-start relative 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-1/2 w 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-6">
                <h2 className="text-2xl font-medium title-font text-stone-400 mb-2">
                    Who I am:
                </h2>
                <p className="mx-auto leading-relaxed bg-stone-400 rounded-xl text-white px-4 py-4">
                As someone with both a technical and creative brain, I pride myself on my ability to find innovative solutions
                to any problem. Whether working on a group project at school or as a hired software engineer, I've been able 
                to apply this aspect of myself to elevate my work and drive results. At Northeastern University and in my 
                various jobs, I have discovered a talent for web development because it allows me to further flex my creativity 
                along with my technical skills. I am looking for opportunities to apply my computer engineering knowledge and 
                experience in an environment that will challenge me and also benefit from my ability to communicate and 
                work well with others.
                </p>
                <h2 className="text-2xl font-medium title-font text-stone-400 mb-2 mt-6">
                    What I know:
                </h2>
                <div className="flex 2xl:flex-row xl:flex-row lg:flex-row flex-col bg-stone-400 text-white rounded-xl px-4 py-4 text-center items-center">
                    <p className="mx-auto leading-relaxed">
                        Throughout my time at Northeastern I have gained many years of experience in multiple coding languages, my strongest being JavaScript and C++
                    </p>
                    <Link to="/skills"
                        className="mt-4 inline-flex text-white whitespace-nowrap bg-red-700 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded lg:text-lg md:text-lg sm:text-md lg:ml-8 lg:mr-4 lg:mb-4">
                        My Skills
                    </Link>
                </div>
                <h2 className="text-2xl font-medium title-font text-stone-400 mb-2 mt-6">
                    What I do for fun:
                </h2>
                <div className="flex 2xl:flex-row xl:flex-row lg:flex-row flex-col bg-stone-400 text-white rounded-xl px-4 py-4 text-center items-center">
                <p className="mx-auto leading-relaxed">
                    In addition to my technical skills, I have many other hobbies that I love sharing with others. I'm a boxer as well as a runner, and I can also hold my own in the kitchen. I love stories in any 
                    form through reading or watching movies, and I have begun to tell some stories of my own through my writing.
                </p>
                    <Link to="/writing"
                        className="mt-4 inline-flex text-white whitespace-nowrap bg-red-700 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded lg:text-lg md:text-lg sm:text-md lg:ml-8 lg:mr-4 lg:mb-4">
                        My Writing
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
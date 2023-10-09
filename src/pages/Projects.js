// src/pages/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container px-5 py-10 mx-auto text-center 2xl:w-1/2 xl:w-1/2 l:w-1/2 m:w-2/3 sm:w w">
        <div className="flex flex-col w-full mb-5">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 text-stone-400" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-stone-400">
            Past Work
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed mb-2">
            Below are a few samples of relevant coding projects
          </p>
          <hr className="mb-6 "></hr>
        </div>
        <div className="max-w-4xl flex flex-wrap overflow-hidden">
          {projects.map((project) => (
            <div className="sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover shadow-md rounded-2xl"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 rounded-2xl w-full border-4 border-stone-200 bg-stone-300 opacity-0 hover:opacity-100 active:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-white">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
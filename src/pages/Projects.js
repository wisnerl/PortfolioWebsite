// src/pages/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-5">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 text-stone-300" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-stone-300">
            Past Work
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-stone-600">
            Below are a few samples of relevant coding projects.
          </p>
        </div>
        <div className="max-w-4xl flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-contain rounded-2xl"
                  src={project.image}
                />
                <div className="px-8 py-10 relative rounded-2xl z-10 w-full border-4 border-stone-200 bg-stone-500 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-stone-300">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
// src/pages/Skills.js

import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-5">
          <ChipIcon className="w-10 inline-block mb-4 text-stone-300" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-stone-300 mb-4">
            Skills
          </h1>
          <p className="text-stone-600 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Coding Languages, Libraries, and Other Technologies
          </p>
        </div>
        <div id="skillgallery" className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 lg:w-1/4 md:w-1/3 sm:w-1/2">
              <div className="bg-white rounded-2xl flex p-4 h-full w-full items-center">
                <img className="min-w-40 rounded-xl"
                  alt= {skill.skillName}
                  src= {skill.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
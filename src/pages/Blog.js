// src/pages/Blog.js

import React from "react";
import { BookOpenIcon } from "@heroicons/react/solid";
import { recommendations } from "../data";


export default function Blog() {
  return (
    <section id="writing">
      <div className="container max-w-screen-2xl px-5 py-10 mx-auto text-center 2xl:w-1/2 xl:w-1/2 l:w-1/2 m:w-2/3 sm:w w">
        <BookOpenIcon className="w-10 inline-block mb-4 text-stone-400" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-stone-400 mb-4">
          Book Blog
        </h1> 
        <p className="lg:w-2/3 mx-auto leading-relaxed mb-2">
            I love reading and want to share my favorite books and authors with others!
          </p>
          <hr className="mb-6"></hr>
        <div id="recommendations">
        <h2 className="sm:text-3xl text-2xl font-medium title-font text-stone-400 mb-4">
          Recommendations and Favorites
        </h2>
        <div className="max-w-4xl flex flex-wrap overflow-hidden">
          {recommendations.map((recommendations) => (
            <div className="sm:w-1/2 p-4">
              <h1 className="title-font text-lg font-medium text-red-600 mb-1">
                    {recommendations.title}
              </h1>
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover shadow-md rounded-2xl"
                  src={recommendations.image}
                />
                <div className="px-8 py-10 relative z-10 rounded-2xl w-full border-4 border-stone-200 bg-stone-300 opacity-0 hover:opacity-100 active:opacity-100">
                  <h2 className="tracking-widest text-md title-font font-medium text-red-500 mb-3">
                    {recommendations.booktitle}
                  </h2>
                  <p className="leading-relaxed text-white">{recommendations.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div id="blog">
          
        </div> 
      </div>
    </section>
  );
}
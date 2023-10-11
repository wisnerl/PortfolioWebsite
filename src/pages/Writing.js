// src/pages/Writing.js

import React from "react";
import { PencilAltIcon } from "@heroicons/react/solid";


export default function Writing() {
  return (
    <section id="writing">
      <div className="container px-5 py-10 mx-auto text-center">
        <PencilAltIcon className="w-10 inline-block mb-4 text-stone-400" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-stone-400 mb-4">
          Writing
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed mb-2">
            I've always had stories bouncing around my head, but now I'm writing my first ever full-length novel
          </p>
          <hr className="mb-6"></hr>
        <div class="relative mx-auto opacity-60 overflow-hidden mb-6">
        <img
            className="object-center mx-auto rounded-2xl shadow-md mb-2"
            alt="cover"
            src="./reapercover.jpg"
          />
        </div>
        <div class="mb-1 text-xl font-medium text-left text-stone-400 xl:w-2/4 lg:w-3/4 mx-auto">Current Progress: Editing Part 2</div>
        <div class="w-full h-6 bg-gray-200 rounded-full xl:w-2/4 lg:w-3/4 mx-auto mb-6 shadow-md">
          <div class="h-6 bg-red-700 text-s font-medium text-red-300 text-center p-0.4 rounded-full" style={{width: `70%`}}>70%</div>
        </div>
        <div className="leading-relaxed bg-stone-200 shadow-md rounded-lg xl:w-2/4 lg:w-3/4 mx-auto px-5 py-2">
          <span className="text-stone-600">
            When his son is taken in the night by gods, former soldier Samael Einar makes it his mission to hunt them down and rescue his child.
            Samael's journey will take him through a land he once razed in war, a kingdom he abandoned in its time of need, and the farthest reaches of
            the continent. These continuous trials will force him to confront assassins, horrifying creatures, and his own troubled past. But how do you hunt down a god, and when you do, 
          </span>
          <span className="text-red-700 font-bold"> how do you defeat one?</span>
        </div>           
      </div>
    </section>
  );
}
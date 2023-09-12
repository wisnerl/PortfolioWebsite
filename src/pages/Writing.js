// src/pages/Writing.js

import React from "react";
import { PencilAltIcon } from "@heroicons/react/solid";


export default function Writing() {
  return (
    <section id="writing">
      <div className="container px-5 py-10 mx-auto text-center">
        <PencilAltIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-10">
          Writing
        </h1>
        <div class="relative mx-auto overflow-hidden mb-6">
        <img
            className="object-center mx-auto rounded-3xl"
            alt="cover"
            src="./reapercover.jpg"
          />
        </div>
        <div class="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700 xl:w-2/4 lg:w-3/4 mx-auto mb-6">
          <div class="h-6 bg-green-600 text-s font-medium text-green-100 text-center p-0.4 rounded-full" style={{width: `70%`}}>70%</div>
        </div>
        <div className="leading-relaxed bg-gray-700 rounded-lg xl:w-2/4 lg:w-3/4 mx-auto px-5 py-2">
          <span className="text-gray-300">
            When his son is violently taken in the night by Gods, former-soldier Samael Einar makes it his mission to hunt them down and rescue his boy.
            Samael's journey will take him through a land he once razed in war, a kingdom he abandoned in their time of need, and the farthest reaches of
            the continent, forcing him to confront assassins, horrifying creatures, and his own past. But how do you hunt down a god, and when you do, 
          </span>
          <span className="text-red-500 font-bold"> how do you kill one?</span>
        </div>           
      </div>
    </section>
  );
}
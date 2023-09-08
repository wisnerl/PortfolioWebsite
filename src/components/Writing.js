// src/components/Writing

import React from "react";
import { BookOpenIcon } from "@heroicons/react/solid";

export default function Writing() {
  return (
    <section id="writing">
      <div className="container px-5 py-10 mx-auto text-center">
        <BookOpenIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Writing
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            The Reaper of Gods: Book 1 of The Whims of The Divine Trilogy
        </p>
      </div>
    </section>
  );
}
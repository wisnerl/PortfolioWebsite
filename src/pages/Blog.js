// src/pages/Blog.js

import React from "react";
import { BookOpenIcon } from "@heroicons/react/solid";


export default function Blog() {
  return (
    <section id="writing">
      <div className="container px-5 py-10 mx-auto text-center">
        <BookOpenIcon className="w-10 inline-block mb-4 text-stone-300" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-stone-300 mb-10">
          My Book Blog
        </h1>    
      </div>
    </section>
  );
}
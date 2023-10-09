// src/pages/Contact.js

import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-stone-200 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/d/u/1/embed?mid=1Il24RrLJjdHtiBO83tYIVtOdawE&hl=en&ehbc=2E312F"
          />
          <div className="bg-stone-200 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-stone-600 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Chicago, IL
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-stone-600 tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="!#" className="text-indigo-400 leading-relaxed">
                lukewisner01@gmail.com
              </a>
              <h2 className="title-font font-semibold text-stone-600 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">847-505-5583</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-stone-400 sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed text-stone-600 mb-5">
            Send me an email below with any inquiries, and I'll get back to you quickly!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-stone-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-stone-200 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-stone-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-stone-200 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-stone-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-stone-200 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
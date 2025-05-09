import React from "react";

function Footer() {
  return (
    <div className="h-[60vh] flex justify-around w-[98.9%] ml-[.55%] text-white bg-teal-900 mt-8 p-16">
      <div className=" h-fit w-fit flex align-center justify-between flex-col p-8">
        <h1 className="font-bold text-[1.5vw] hover:text-yellow-700 cursor-pointer">Quick Links </h1>
        <div className="flex h-full w-full  align-center justify-center flex-col mt-4 text-[0.9vw] gap-[0.5vw]">
          <a
            className="hover:text-brown-600 hover:border-b-2 hover:border-white hover:border-width-fit py-1 px-2 rounded w-fit"
            href=""
          >
            Home
          </a>
          <a
            className="hover:text-brown-600 hover:border-b-2 hover:border-white hover:border-width-fit py-1 px-2 rounded w-fit"
            href=""
          >
            About us
          </a>
          <a
            className="hover:text-brown-600 hover:border-b-2 hover:border-white hover:border-width-fit py-1 px-2 rounded w-fit"
            href=""
          >
            Classes
          </a>
          <a
            className="hover:text-brown-600 hover:border-b-2 hover:border-white hover:border-width-fit py-1 px-2 rounded w-fit"
            href=""
          >
            Testimonial
          </a>
          <a
            className="hover:text-brown-600 hover:border-b-2 hover:border-white hover:border-width-fit py-1 px-2 rounded w-fit"
            href=""
          >
            Login/Register
          </a>
        </div>
      </div>
      <div className=" h-fit w-fit p-8">
        <h1 className="font-bold text-[1.5vw] hover:text-yellow-700 cursor-pointer">contact us</h1>
        <div className="flex h-full w-full  align-center justify-evenly flex-col mt-4 text-[0.9vw] gap-[0.5vw]">
          <a
            className="hover:text-brown-600 hover:border-b-2 hover:border-white hover:border-width-fit py-1 px-2 rounded w-fit"
            href=""
          >
            Phone: 123567890
          </a>
          <a
            className="hover:text-brown-600 hover:border-b-2 hover:border-white hover:border-width-fit py-1 px-2 rounded w-fit"
            href=""
          >
            email :- qhjh@gmail.com
          </a>
          <a
            className="hover:text-brown-600 hover:border-b-2 hover:border-white hover:border-width-fit py-1 px-2 rounded w-fit"
            href=""
          >
            Toll free :- 78278688296
          </a>
        </div>
      </div>
      <div className=" h-fit w-fit p-8">
        <h1 className="font-bold text-[1.5vw] hover:text-yellow-700 cursor-pointer">Reach </h1>
        <div className="flex h-full w-full  align-center justify-evenly flex-col mt-4 text-[0.9vw] gap-[0.5vw]">
          <a
            className="hover:text-brown-600 hover:border-b-2 hover:border-white hover:border-width-fit py-1 px-2 rounded w-fit"
            href=""
          >
            Whatsapp
          </a>
          <a
            className="hover:text-brown-600 hover:border-b-2 hover:border-white hover:border-width-fit py-1 px-2 rounded w-fit"
            href=""
          >
            Instagram
          </a>
          <a
            className="hover:text-brown-600 hover:border-b-2 hover:border-white hover:border-width-fit py-1 px-2 rounded w-fit"
            href=""
          >
            facebook
          </a>
          <a
            className="hover:text-brown-600 hover:border-b-2 hover:border-white hover:border-width-fit py-1 px-2 rounded w-fit"
            href=""
          >
            Twitter
          </a>
          <a
            className="hover:text-brown-600 hover:border-b-2 hover:border-white hover:border-width-fit py-1 px-2 rounded w-fit"
            href=""
          >
            Youtube
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from 'react';

import { AiOutlinePlayCircle } from "react-icons/Ai";
import { IconContext } from "react-icons";

const HomeBanner = () => {
    return (
        <div className="bg-[#f5f0ff] my-10 w-11/12 mx-auto border py-4 px-2 rounded-2xl">
        <div className=" gap-4 flex lg:flex-row flex-col-reverse lg: items-center md:justify-center ">
          <div className="my-4 text-center">
            <h1 className="lg:text-7xl md:text-3xl text-3xl  font-extrabold">
              Delicious & Affordable
            </h1>
            <h1 className="lg:text-6xl md:text-4xl text-3xl rounded-xl mx-auto md:w-8/12 my-6 py-4 pl-2  bg-[#580cfc] text-white font-extrabold">
              Meals Near You.
            </h1>
            <p className="text-slate-500 text-xl w-10/12 mx-auto mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="lg:flex justify-center gap-12 my-6">
              <a
                href="#"
                className="btn btn-primary font-bold sm:btn-sm md:btn-md lg:btn-lg"
              >
                Order Now
              </a>
              <a
                href="#"
                className="font-bold lg:mt-0 mt-5 flex justify-center items-center text-slate-600"
              >
                <IconContext.Provider value={{ size: "3em" }}>
                  <AiOutlinePlayCircle className="mr-2" /> Meet The Chefs
                </IconContext.Provider>
              </a>
            </div>
          </div>
          <div className="my-4 text-center">
            {" "}
            <img
              className="rounded-3xl mx-auto  "
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
              alt="meal image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
};

export default HomeBanner;
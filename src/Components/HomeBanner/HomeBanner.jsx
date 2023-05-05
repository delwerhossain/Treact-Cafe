import React from "react";

import { AiOutlinePlayCircle } from "react-icons/Ai";
import { IconContext } from "react-icons";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="bg-[#f5f0ff] my-10 w-11/12 mx-auto border py-4 px-2 rounded-2xl">
      <div className=" gap-4 flex lg:flex-row flex-col-reverse lg: items-center md:justify-center ">
        <div className="my-4 flex-1 text-center">
          <h1 className="lg:text-6xl md:text-3xl text-3xl  font-extrabold">
            Delicious & Affordable{" "}
            <span className="bg-violet-200 mt-2 w-10/12 mx-auto rounded-xl block p-2">Italian food</span>
          </h1>
          <h1 className="lg:text-6xl md:text-4xl text-3xl rounded-xl mx-auto md:w-8/12 my-4 py-4 pl-2  bg-[#d6c3ff]   text-primary font-extrabold">
            Meals Near You.
          </h1>
          <p className="text-slate-500 md:text-xl w-10/12 mx-auto mb-4">
            The Restaurant Expert is a coaching and training company which
            offers seminars and workshops that assist restaurant owners in
            running more effective and successful businesses, while tackling
            common issues, like HR, inventory, and costs. Because the company
            focuses on training, their resources are outstanding. The Restaurant
            Expert’s blogs doesn’t just produce listicles for the sake of
            producing content, every piece they produce is chock-full of hands
            on learning that serves to make restaurant owners more effective at
            their jobs and responsibilities.
          </p>

          <div className="lg:flex justify-center gap-12 my-6">
            <Link
              to={"register"}
              className="btn btn-primary font-bold sm:btn-sm md:btn-md lg:btn-lg"
            >
              Register Now
            </Link>
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
          <LazyLoad>
            <img
              className="rounded-3xl flex-1 mx-auto  "
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
              alt="meal image"
            />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

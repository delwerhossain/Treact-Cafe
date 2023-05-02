import React from "react";
import { AiOutlinePlayCircle } from "react-icons/Ai";
import { IconContext } from "react-icons";

const HomeChoose = () => {
  return (
    <div>
      <div className="bg-[#f5f0ff] my-10 w-11/12 mx-auto border py-4 px-2 rounded-2xl">
        <p className="text-[#580cfc] text-xl my-8  w-10/12 mx-auto mb-4 bg-violet-200 rounded-lg pl-5">
          A Reputed Brand
        </p>
        <div className="  flex md:gap-12 lg:flex-row flex-col-reverse lg: items-center md:justify-center mx-auto md:w-10/12 ">
          <div className=" flex-1 my-4 text-start">
            <h1 className="lg:text-7xl md:text-5xl text-3xl  font-extrabold">
              Why{" "}
              <span className=" bg-[#580cfc] text-white px-2 ">
                Choose Us ?
              </span>
            </h1>

            <p className="text-slate-500 text-xl my-8   mx-auto mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              pariatur aliquid molestias! At officia rem eum id cupiditate
              deleniti aliquid?
            </p>
            <div className="flex text-xl md:text-2xl my-6 justify-around items-center">
              <div className=" bg-violet-200 p-3 md:p-5 rounded-2xl">
                <p className="font-semibold text-slate-700">94000+</p>
                <p className="text-violet-900">Orders</p>
              </div>
              <div className=" bg-violet-200 p-3 md:p-5 rounded-2xl">
                <p className="font-semibold text-slate-700">11000+</p>
                <p className="text-violet-900">Customers</p></div>
              <div className=" bg-violet-200 p-3 md:p-5 rounded-2xl">
                <p className="font-semibold text-slate-700">1500+</p>
                <p className="text-violet-900">Chefs</p></div>
            </div>

            <a
              href="#"
              className="btn btn-primary my-5 font-bold  mx-auto w-full"
            >
              Order Now
            </a>
          </div>
          <div className="flex-1 my-4 text-center">
            {" "}
            <img
              className="rounded-3xl mx-auto  "
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
              alt="meal image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeChoose;

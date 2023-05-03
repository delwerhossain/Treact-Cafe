import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { RiArrowRightUpLine } from 'react-icons/ri';
import { IconContext } from "react-icons";

const ChefCard = ({ chef }) => {
  const { id, name, image, slogan, experience, totalRecipes, likes } = chef;
  console.log(likes);
  return (
    <div className="my-10 w-11/12 mx-auto border py-4 px-2 rounded-2xl">
      <div className="grid gap-4 md:grid-cols-2 items-center md:justify-center ">
        <div className="my-4 text-center">
          <h1 className="lg:text-7xl md:text-3xl text-3xl  font-extrabold">
            {name}
          </h1>
          <h1 className="lg:text-6xl md:text-4xl text-3xl rounded-xl mx-auto md:w-8/12 mt-6 mb-4 py-4 pl-2  bg-[#b795ff] text-white font-extrabold">
            {slogan}
          </h1>
          <div className="py-4 pl-2  rounded-xl mx-auto md:w-8/12  bg-violet-50 lg:text-3xl mb-4 text-2xl  font-bold">
          <h1 className="">
            experience {experience}
          </h1>
          <h1 className="">
            Total Recipes - {totalRecipes}
          </h1>
          <h1 className="">
            Total Likes - {likes}
          </h1>

          </div>

          <p className="text-slate-500 text-xl w-10/12 mx-auto mb-4">
          Covers articles on meal planning, food & drink, kitchen tips & tools, entertaining and holiday recipes. Doris Christopher founded Pampered Chef in 1980. She has been recognized with numerous awards.
          </p>

          <Link to={`/chef/${id}`} className="btn btn-primary text-xl font-bold sm:btn-sm md:btn-md lg:btn-lg">
            secret recipes
            <IconContext.Provider value={{ size: '2em' }}>
            <RiArrowRightUpLine className="text-white w-6 md:w-7 ml-3" />

            </IconContext.Provider>
          </Link>
        </div>
        <div className="my-4 text-center">
          {" "}
          <LazyLoad>
          <img
            className="rounded-3xl mx-auto md:w-[400px] md:h-[320px]  lg:w-[640px] lg:h-[450px]"
            src={image}
            alt={name}
          />

          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;

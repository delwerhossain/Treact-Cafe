import React from "react";
import LazyLoad from "react-lazy-load";

const RecipeCard = ({ recipe }) => {
  const { name, image, ingredients } = recipe;
  return (
    <div>
      <div className="grid gap-4 border w-8/12 mx-auto  rounded-2xl items-center justify-center ">
        <div className="my-4 text-center">
          <h1 className="lg:text-7xl md:text-3xl text-3xl  font-extrabold">
            {name}
          </h1>

          <p className="text-slate-100 text-xl font-bold my-2 rounded-3xl py-8 bg-slate-800 w-10/12 mx-auto mb-4">
            {ingredients.map((item) => (
              <p>{item}</p>
            ))}
          </p>
        </div>
        <div className="my-4 text-center">
          {" "}
          <LazyLoad>
            <img
              className="rounded-3xl mx-auto md:w-[600px] lg:w-[800px]"
              src={image}
              alt={name}
              
            />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

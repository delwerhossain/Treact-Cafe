import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import LazyLoad from "react-lazy-load";
import Loading from "../../Components/Loading/Loading";
const ChefDetails = () => {
  const chefData = useLoaderData();
  // const paramId = useParams()
  // const [singleChef , setSingleChef]= useState([])
  // useEffect(() => {
  //     const singleData = chefsData.find(data => data.id === paramId)
  //     if (singleData) {
  //         setSingleChef(singleData)
  //     }
  // },[chefsData])

  const { id, name, slogan, image, recipes, experience, totalRecipes, likes } =
    chefData;

    const [loading, setLoading] = useState(true);
    useEffect(() => {
      if (loading) {
        setTimeout(() => {
          setLoading(false);
        }, 250);
      }
    }, []);
  
    return loading ? (
      <div className="grid justify-center items-center">
        <Loading />
      </div>
    ) : (
    <div className="my-10 w-11/12 mx-auto border py-4 px-2 rounded-2xl">
      <div className="grid gap-4  items-center justify-center ">
        <div className="my-4 text-center">
          <h1 className="lg:text-5xl md:text-3xl text-3xl  font-extrabold">
            {name}
          </h1>
          <h1 className="lg:text-5xl md:text-4xl text-3xl mx-auto md:w-6/12 my-6 py-4 pl-2  transform rotate-2 bg-[#580cfc] text-white font-extrabold">
            {slogan}
          </h1>
          <div className="py-4 pl-2  rounded-xl mx-auto md:w-8/12  bg-violet-50 lg:text-3xl mb-4 text-2xl  font-bold">
            <h1 className="">experience {experience}</h1>
            <h1 className="">Total Recipes - {totalRecipes}</h1>
            <h1 className="">Total Likes - {likes}</h1>
        
          </div>

          <p className="text-slate-500 md:text-xl w-10/12 mx-auto mb-4">
            Find tested and perfected recipes that work for you the very first
            time with Step-by-step photos, ingredient recommendations, menus for
            holidays, entertaining and everyday family meals. Jenn Segal is a
            classically-trained chef, cookbook author, and busy mom whose
            mission is to make cooking easy, gratifying and fun.
          </p>
        </div>
        <div className="my-4 text-center">
          {" "}
          <LazyLoad>
            <img
              className="rounded-3xl mx-auto lg:w-6/12 md:w-10/12"
              src={image}
              alt={name}
            />
          </LazyLoad>
        </div>
        <div className="rounded-xl">
          <h1 className="lg:text-6xl md:text-4xl text-3xl rounded-xl mx-auto md:w-11/12 text-center my-10 py-4 pl-2  bg-[#581fd1] text-white font-extrabold">
            Secret Recipes
          </h1>
          <div className="grid grid-cols-1 md:gap-14 gap-10 md:my-28 my-16  ">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;

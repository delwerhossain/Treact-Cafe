import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';

const ChefDetails = () => {
    const chefData = useLoaderData()
    // const paramId = useParams()
    // const [singleChef , setSingleChef]= useState([])
    // useEffect(() => {
    //     const singleData = chefsData.find(data => data.id === paramId)
    //     if (singleData) {
    //         setSingleChef(singleData)
    //     }
    // },[chefsData])
    
    const { id, name, slogan, image ,recipes } = chefData;
  console.log(recipes);
  
    return (
        <div className="my-10 w-11/12 mx-auto border py-4 px-2 rounded-2xl">
      <div className="grid gap-4  items-center justify-center ">
        <div className="my-4 text-center">
          <h1 className="lg:text-7xl md:text-3xl text-3xl  font-extrabold">
            {name}
          </h1>
          <h1 className="lg:text-6xl md:text-4xl text-3xl rounded-xl mx-auto md:w-8/12 my-6 py-4 pl-2  bg-[#580cfc] text-white font-extrabold">
              { slogan}
          </h1>
          <p className="text-slate-500 text-xl w-10/12 mx-auto mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est praesentium labore. Quibusdam magnam repudiandae corporis corrupti impedit quam aut, sequi laborum nulla asperiores aspernatur quia provident itaque culpa aliquam repellat cupiditate in vel accusantium vero iusto? Nostrum unde recusandae accusantium quas deleniti necessitatibus. Quos consequatur animi voluptatum at id.
          </p>
        </div>
        <div className="my-4 text-center">
          {" "}
          <img
            className="rounded-3xl mx-auto w-6/12"
            src={image}
            alt={name}
            loading="lazy"
          />
          </div>
          <div className='rounded-xl'>
          <h1 className="lg:text-6xl md:text-4xl text-3xl rounded-xl mx-auto md:w-11/12 text-center my-6 py-4 pl-2  bg-[#581fd1] text-white font-extrabold">
          Secret Recipes
            </h1>
            <div className='grid grid-cols-1 gap-8  '>
          {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>)}

            </div>
          </div>
      </div>
    </div>
    );
};

export default ChefDetails;
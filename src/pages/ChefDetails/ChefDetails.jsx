import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

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
    
    const { id, name, image } = chefData;
    console.log(chefData);
    return (
        <div className="my-10 w-11/12 mx-auto border py-4 px-2 rounded-2xl">
      <div className="grid gap-4  items-center justify-center ">
        <div className="my-4 text-center">
          <h1 className="lg:text-7xl md:text-3xl text-3xl  font-extrabold">
            {name}
          </h1>
          <h1 className="lg:text-6xl md:text-4xl text-3xl rounded-xl mx-auto md:w-8/12 my-6 py-4 pl-2  bg-[#580cfc] text-white font-extrabold">
            Meals Near You.
          </h1>
          <p className="text-slate-500 text-xl w-10/12 mx-auto mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="my-4 text-center">
          {" "}
          <img
            className="rounded-3xl mx-auto w-10/12"
            src={image}
            alt={name}
            loading="lazy"
          />
        </div>
      </div>
    </div>
    );
};

export default ChefDetails;
import React from 'react';

const ChefCard = ({ chef }) => {
    const {id , name ,image } =chef
    return (
        <div className="my-10 w-11/12 mx-auto border py-4 px-2 rounded-2xl">
        <div className="grid gap-4 md:grid-cols-2 items-center md:justify-center ">
          <div className="my-4 text-center">
            <h1 className="lg:text-7xl md:text-3xl text-3xl  font-extrabold">{name}</h1>
            <h1 className="lg:text-6xl md:text-4xl text-3xl rounded-xl mx-auto md:w-8/12 my-6 py-4 pl-2  bg-[#580cfc] text-white font-extrabold">
              Meals Near You.
                    </h1>
                    <p className="text-slate-500 text-xl w-10/12 mx-auto mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  
                    <button className="btn btn-primary font-bold btn-xs sm:btn-sm md:btn-md lg:btn-lg">secret recipes </button>
          </div>
          <div className="my-4 text-center">
            {" "}
            <img
              className="rounded-3xl w-[600px] h-[400px]"
              src={image} alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default ChefCard;
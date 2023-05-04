import React, { useState } from "react";
import LazyLoad from "react-lazy-load";
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { IconContext } from "react-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactStars from "react-stars";


const RecipeCard = ({ recipe }) => {
  const { name, image, ingredients } = recipe;
  const [love, setLove] = useState(false)
  const handleLove = () => {
    if (love) {
      toast.error("all ready added!")
      return
    }
    setLove(true)
    toast.success("love added!")
  }
  return (
    <div>
      <div className="bg-slate-50 grid gap-4 border lg:w-8/12 mx-auto  rounded-2xl items-center justify-center ">
        <div className="my-4 text-center">
            
          <button className="text-primary" onClick={handleLove}>
          <IconContext.Provider value={{ size: '3em' }}>
          {!love ?<BsHeart /> :<BsHeartFill />}
        </IconContext.Provider>
             
          </button>

          <h1 className="lg:text-7xl md:text-3xl text-3xl  font-extrabold">
            {name}
          </h1>
          <div className=" w-32 mx-auto ">
              <ReactStars className=""
                count={5}
                value={4.5}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
              
            </div>

          <p className="text-slate-100 md:text-xl font-bold my-4 rounded-3xl py-8  bg-slate-800 md:w-10/12 w-11/12 mx-auto mb-4">
            {ingredients.map((item) => (
              <p>{item}</p>
            ))}
          </p>
        </div>
        <div className="my-4 text-center">
          {" "}
          <LazyLoad>
            <img
              className="rounded-3xl mx-auto w-11/12 md:w-[600px] lg:w-[800px]"
              src={image}
              alt={name}
              
            />
          </LazyLoad>
        </div>
      </div><ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
  );
};

export default RecipeCard;

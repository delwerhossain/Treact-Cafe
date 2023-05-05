import React from "react";
import { IconContext } from "react-icons";
import { BsApple } from "react-icons/bs"; 
import { IoLogoGooglePlaystore} from "react-icons/io5"; 

const MobileBanner = () => {
  return (
    <div className="bg-slate-900 py-16 my-28">
      <div className="lg:flex-row flex flex-col  items-center  w-11/12 mx-auto">
        <div className="mb-16 w-10/12 mx-auto flex-1">
          <p className="text-yellow-500 md:text-2xl text-xl font-bold">
            Download App
          </p>
          <h2 className="text-3xl lg:w-7/12 md:text-4xl leading-10 text-white font-bold">
            People around you are ordering delicious meals using the{" "}
            <span className="bg-white block my-2 text-center w-9/12 md:w-6/12 py-2  text-primary font-extrabold   px-2">
              Treact App.
            </span>
          </h2>
          <div>
            <div className="flex lg:w-6/12 flex-col gap-6 md:flex-row mt-8 ">
             
              <div className="flex lg:py-3 w-9/12 lg:w-60 mx-auto rounded-3xl  bg-white justify-center items-center">
                <IconContext.Provider value={{ size: "3em" }}>
                  <BsApple />{" "}
                  <h4 className="font-extrabold text-2xl ml-2   py-3">
                    APP STORE
                  </h4>
                </IconContext.Provider>
              </div>
              <div className="flex w-9/12 lg:w-60 mx-auto rounded-2xl bg-white justify-center items-center">
                <IconContext.Provider value={{ size: "3em" }}>
                  <IoLogoGooglePlaystore />{" "}
                  <h4 className="font-extrabold text-2xl ml-2   py-3">
                    Play STORE
                  </h4>
                </IconContext.Provider>
              </div>
             
            </div>
          </div>
        </div>
        <div className="mx-auto flex-1">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1"><span className="px-4 py-2 text-6xl rounded-2xl font-extrabold mr-2 text-white bg-[#580cfc]">T</span>{" "}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBanner;

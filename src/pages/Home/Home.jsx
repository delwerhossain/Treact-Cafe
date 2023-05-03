import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../../Components/ChefCard/ChefCard";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import HomeChoose from "../../Components/HomeChoose/HomeChoose";

const Home = () => {
  const chefsData = useLoaderData();

  return (
    <div className="my-6">
      <HomeBanner></HomeBanner>

      <div>
      <h1 className="lg:text-7xl md:text-5xl text-4xl mb-6  font-extrabold text-center underline text-ellipsis">
        {" "}
        Ours <span className="text-[#580cfc]">Chef</span>
      </h1>
      {chefsData.map((chef) => (
        <ChefCard key={chef.id} chef={chef}></ChefCard>
      ))}
      </div>
      {/* banner choose */}
      <HomeChoose></HomeChoose>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../../Components/ChefCard/ChefCard";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import HomeChoose from "../../Components/HomeChoose/HomeChoose";
import MobileBanner from "../../Components/MoblieBanner/MoblieBanner";
import Loading from "../../Components/Loading/Loading";

const Home = () => {
  const chefsData = useLoaderData();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);

  return loading ? (
    <div className="grid justify-center items-center">
      <Loading />
    </div>
  ) : (
    <div className="my-6">
      <HomeBanner></HomeBanner>

      <div>
        <h1 className="lg:text-7xl md:text-5xl text-4xl mb-6  font-extrabold text-center underline text-ellipsis">
          {" "}
          Ours <span className="text-[#580cfc]">Chef</span>
        </h1>
        {!chefsData ? (
          <progress className="progress w-10/12"></progress>
        ) : (
          chefsData.map((chef) => (
            <ChefCard key={chef.id} chef={chef}></ChefCard>
          ))
        )}
      </div>
      {/* banner choose */}
      <HomeChoose></HomeChoose>
      <MobileBanner></MobileBanner>
    </div>
  );
};

export default Home;

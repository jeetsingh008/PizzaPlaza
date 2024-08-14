import React from "react";
import welcomePic from "../assets/welcomeImage.jpg";

const Home = () => {
  return (
    <div className="flex justify-evenly items-center w-full relative top-10">
      {/* welcom message */}
      <div className="w-1/6 lg:w-1/3">
        <h1 className="lext-lg lg:text-4xl font-bold text-orange-600 mb-4">
          Welcome to Pizza Palace
        </h1>
        <p className="text-sm md:text text-gray-700">
          Experience the best pizzas in town with fresh ingredients, delicious
          toppings, and a warm, inviting atmosphere. Your taste buds are in for
          a treat!
        </p>
        <br />
        <div className="flex gap-2 justify-start items-center">
          <p>Getting hugry?</p>
          <button className="bg-orange-600 text-white font-semibold px-3 py-1 rounded-full hover:bg-orange-700">Browse now</button>
        </div>
      </div>

      {/* image section */}
      <div className="w-1/3 p-10 shadow-lg bg-white">
        <img className="m-auto rounded-lg bg-contain" src={welcomePic} alt="" />
      </div>
    </div>
  );
};

export default Home;

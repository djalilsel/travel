import React from "react";
import { hero } from "./assets";

const Hero = () => {
  return (
    <div id="home" className="h-[91vh] flex w-full p-24">
      <div className="flex-1 flex justify-center flex-col gap-9">
        <h1 className="font-[600] text-[5rem] leading-tight">
          Book Now And Discover The World
        </h1>
        <p className="text-[#231A1294] text-[1.25rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
        </p>
        <div className="flex gap-12">
          <button className="bg-primary text-white text-base rounded-xl px-6 py-3 shadow-3xl">
            Book Now
          </button>
          <button className="font-[500] text-lg">Login</button>
        </div>
      </div>
      <div className="flex-1">
        <img
          src={hero.src}
          alt="hero"
          className="w-full h-full rounded-xl hero-shadow"
        />
      </div>
    </div>
  );
};

export default Hero;

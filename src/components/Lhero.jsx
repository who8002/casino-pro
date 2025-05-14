import React from "react";
import { imgcard } from "../json/imgcard.js";
import ImgCard from "./ImgCard";

const Lhero = () => {
  return (
    <div className=" h-auto text-white px-6">
      <h1 className="my-3 text-2xl lg:text-6xl font-bold">
        Betting Starts Here
      </h1>
      <h3 className=" text-xl md:text-3xl font-bold mb-2 md:mb-10">
        Get expert betting guidance on your favorite sports.
      </h3>
      <div className="hidden md:flex gap-3 items-center flex-row">
        {imgcard.map((item) => {
          return <ImgCard key={item.text} src={item.src} text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default Lhero;

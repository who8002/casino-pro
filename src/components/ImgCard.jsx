import React from "react";

const ImgCard = ({ src, text }) => {
  return (
    <div>
      <div className=" h-28 w-44 bg-white text-center flex flex-col items-center justify-center">
        <img src={src} className="h-10 w-10" alt="" />
        <span className=" text-gray-900 text-2xl font-black">{text}</span>
      </div>
    </div>
  );
};

export default ImgCard;

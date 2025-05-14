import React from "react";

const Carosule = () => {
  return (
    <div className="relative">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="/1.webp" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="/2.webp" className="w-full" />
        </div>
      </div>
      <div className="absolute bottom-[40%] flex w-full justify-between gap-2 py-2">
        <a href="#item1" className="btn btn-xs text-white bg-teal-700">
          🢀
        </a>
        <a href="#item2" className="btn btn-xs text-white bg-teal-700">
          🢂
        </a>
      </div>
    </div>
  );
};

export default Carosule;

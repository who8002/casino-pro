import React from "react";

const TCard = ({ src, text }) => {
  return (
    <div>
      <div className="card w-80 md:w-96 h-64 my-2 overflow-hidden shadow-sm relative">
        <img src={src} alt="Shoes" className="rounded-xl h-64" />
        <div className=" absolute bottom-0 card-body items-center w-full text-center">
          <div className=" h-28 bg-teal-800 absolute bottom-0 w-full opacity-80"></div>
          <h2 className=" z-10 text-sm md:text-base card-title text-white">
            {text}
          </h2>
          <div className="card-actions z-10">
            <a href="https://www.profitableratecpm.com/bj1zkmu8?key=437cc9ee36f5ff281645a1481235d42e">
              <button className="btn btn-success text-sm md:text-base text-white">
                Claim Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TCard;

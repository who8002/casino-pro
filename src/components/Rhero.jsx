import React from "react";

const Rhero = () => {
  return (
    <div className="text-white w-full px-6 md:px-0 md:w-[450px]">
      <h3 className="text-xl md:text-3xl py-3">Top bonus prizes</h3>
      <div className=" text-teal-700">
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Free offers on first visit
          </li>

          <li className="list-row flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <div>
                <img
                  className=" size-10 md:size-20 rounded-box"
                  src="/11.jpg"
                />
              </div>
              <div className="list-col-grow">
                <div className="text-sm md:text-lg font-bold">Roullet game</div>
                <div className="text-xs md:text-base font-semibold uppercase opacity-60">
                  Get 100$ instant bonus
                </div>
              </div>
            </div>
            <button className="btn btn-warning text-xs md:text-sm text-white">
              Claim Now
            </button>
          </li>

          <li className="list-row flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <div>
                <img
                  className="size-10 md:size-20 rounded-box"
                  src="/poker.avif"
                />
              </div>
              <div className="list-col-grow">
                <div className="text-sm md:text-lg font-bold">Poker game</div>
                <div className="text-xs md:text-base font-semibold uppercase opacity-60">
                  Get 299$ in first game
                </div>
              </div>
            </div>
            <button className="btn btn-warning text-xs md:text-sm text-white">
              Claim Now
            </button>
          </li>

          <li className="list-row flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <div>
                <img className="size-10 md:size-20 rounded-box" src="/12.jpg" />
              </div>
              <div className="list-col-grow">
                <div className="text-sm md:text-lg font-bold">
                  Sports Betting
                </div>
                <div className="text-xs md:text-base font-semibold uppercase opacity-60">
                  Get upto 1000$ on first visit
                </div>
              </div>
            </div>
            <button className="btn btn-warning text-xs md:text-sm text-white">
              Claim Now
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rhero;

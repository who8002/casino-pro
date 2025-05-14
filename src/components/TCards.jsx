import React from "react";
import TCard from "./TCard";
import { betCard } from "../json/betCard";

const TCards = () => {
  return (
    <div className=" flex flex-wrap justify-center gap-4 items-center container mx-auto">
      {betCard.map((item) => {
        return <TCard src={item.src} text={item.text} />;
      })}
    </div>
  );
};

export default TCards;

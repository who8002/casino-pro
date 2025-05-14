import React from "react";
import Lhero from "./Lhero";
import Rhero from "./Rhero";

const Hero = () => {
  return (
    <div className=" ">
      <section className="full-width h-[85vh] md:h-[70vh] relative wp-block-hero-banner">
        <div className="absolute inset-0 w-full z-[1] h-full">
          <img
            srcSet="https://betting.com/wp-content/uploads/Hero-image-for-homepage-NFL-1920x840-1-180x79.webp 180w, https://betting.com/wp-content/uploads/Hero-image-for-homepage-NFL-1920x840-1-180x79.jpg 180w, https://betting.com/wp-content/uploads/Hero-image-for-homepage-NFL-1920x840-1-360x158.webp 360w, https://betting.com/wp-content/uploads/Hero-image-for-homepage-NFL-1920x840-1-360x158.jpg 360w, https://betting.com/wp-content/uploads/Hero-image-for-homepage-NFL-1920x840-1-720x315.webp 720w, https://betting.com/wp-content/uploads/Hero-image-for-homepage-NFL-1920x840-1-720x315.jpg 720w, https://betting.com/wp-content/uploads/Hero-image-for-homepage-NFL-1920x840-1-1290x564.webp 1290w, https://betting.com/wp-content/uploads/Hero-image-for-homepage-NFL-1920x840-1-1290x564.jpg 1290w, https://betting.com/wp-content/uploads/Hero-image-for-homepage-NFL-1920x840-1.webp 1920w, https://betting.com/wp-content/uploads/Hero-image-for-homepage-NFL-1920x840-1.jpg 1920w"
            sizes="(max-width: 767px) 720px, 100vw"
            src="https://betting.com/wp-content/uploads/Hero-image-for-homepage-NFL-1920x840-1.jpg"
            alt="betting.com"
            className="object-cover object-center bg-cover bg-center inset-o w-full z-[1] h-full object-right-center grayscale "
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-bet opacity-[85%] z-10"></div>
          <div className="absolute flex flex-wrap top-0 left-0 right-0 bottom-0 m-auto bg-transparent h-full z-50 w-full justify-around lg:items-center">
            <div className="flex justify-center items-center">
              <Lhero />
            </div>
            <div className="">
              <Rhero />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

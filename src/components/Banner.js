import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Bnnaer1 from "../../public/banners/banner1.jpg";
import Bnnaer2 from "../../public/banners/banner2.jpg";
import Bnnaer3 from "../../public/banners/banner3.jpg";
import Bnnaer4 from "../../public/banners/banner4.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative max-w-full m-auto">
      <div
        className="absolute w-full h-32 bg-gradient-to-t 
      from-gray-100 to-transparent bottom-0 z-10 -mb-24"
      />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={5000}
      >
        <div>
          <Image src={Bnnaer1} loading="lazy" quality={100} alt="banner" />
        </div>
        <div>
          <Image src={Bnnaer2} loading="lazy" quality={100} alt="banner" />
        </div>
        <div>
          <Image src={Bnnaer3} loading="lazy" quality={100} alt="banner" />
        </div>
        <div>
          <Image src={Bnnaer4} loading="lazy" quality={100} alt="banner" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

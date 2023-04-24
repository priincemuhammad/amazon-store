import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";
import Prime from "../../public/prime.png";

const MAX_RATE = 5;
const MIN_RATE = 1;

const Product = ({ id, title, category, image, description, price }) => {
  let rate = Math.floor(Math.random() * (MAX_RATE - MIN_RATE + 1) + MIN_RATE);
  const [rating] = useState(rate);

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col bg-white m-5 z-30 p-10">
      <span className=" absolute text-gray-400 text-xs italic top-2 right-2 ">
        {category}
      </span>
      <Image
        src={image}
        width={100}
        height={100}
        className="object-contain m-auto"
        alt="img"
      />
      <p className="text-black pt-5">{title}</p>
      <div className="flex py-2">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" key={i} />
          ))}
      </div>
      <p className="text-black text-xs my-2 line-clamp-2">{description}</p>
      <p className="text-black font-bold">
        <Currency currency="USD" quantity={price} />
      </p>
      {hasPrime && (
        <div className="flex items-center ">
          <Image src={Prime} width={50} height={10} alt="prime" />
          <p className="text-xs text-gray-500 my-5">Free Nextday Delivery!</p>
        </div>
      )}
      <button className="button">Add to basket</button>
    </div>
  );
};

export default Product;

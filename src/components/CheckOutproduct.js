import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Prime from "../../public/prime.png";
import Currency from "react-currency-formatter";
import { addTobasket, removeFrombasket } from "@/slices/basketSlice";
import { useDispatch } from "react-redux";

const CheckOutproduct = ({
  id,
  title,
  category,
  image,
  description,
  price,
}) => {
  const [rating] = useState(5);
  const dispatch = useDispatch();
  const addItemTobasket = () => {
    const product = {
      id,
      title,
      category,
      image,
      description,
      price,
    };
    // push product into redux
    dispatch(addTobasket(product));
  };
  const removeItem = () => {
    // remove product from redux
    dispatch(removeFrombasket({ id }));
  };
  return (
    <div className="grid grid-cols-5 text-black bg-white p-5 ">
      <Image
        src={image}
        width={200}
        height={200}
        className="object-contain col-span-1"
        alt="img"
      />
      <div className="col-span-3 px-5">
        <span className="text-gray-400 text-xs italic ">{category}</span>
        <p className="text-black pt-5">{title}</p>
        <div className="flex py-2">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" key={i} />
            ))}
        </div>
        <p className="text-black text-xs my-2 line-clamp-2">{description}</p>
        <div className="flex items-center ">
          <Image
            src={Prime}
            className="w-12"
            width={"auto"}
            height={"auto"}
            priority={true}
            alt="prime"
          />
          <p className="text-xs text-gray-500 my-5">Free Nextday Delivery!</p>
        </div>
        <div className="text-black font-bold">
          <Currency currency="USD" quantity={price} />
        </div>
      </div>
      <div className="col-span-1 grid items-center">
        <div className="space-y-5">
          <button className="button w-full" onClick={addItemTobasket}>
            Add again
          </button>
          <button className="button w-full" onClick={removeItem}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutproduct;

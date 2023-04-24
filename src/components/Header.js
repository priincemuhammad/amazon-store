import Image from "next/image";
import Amazonlogo from "../../public/amazonLogo.png";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header>
      {/*header top*/}
      <div
        className="flex flex-grow-1   items-center bg-amazon_blue 
      p-2 flex-grow py-2 space-x-5"
      >
        <div className="mt-2  flex flex-grow items-center md:flex-grow-0">
          <Image
            src={Amazonlogo}
            className="object-contain cursor-pointer w-20 sm:w-32"
            width={150}
            height={50}
            quality={100}
            alt="logo"
          />
        </div>
        {/*search*/}
        <div className="hidden md:flex items-center h-10 rounded-md flex-grow bg-second_color-btncolor hover:bg-yellow-700">
          <input
            type="text"
            className="text-black flex-grow flex-shrink h-full w-6 p-2 rounded-l-md outline-none"
          />
          <MagnifyingGlassIcon className="text-black h-12 p-2 cursor-pointer" />
        </div>
        {/*basket*/}
        <div className="flex items-center justify-center text-sm space-x-5">
          <div className="flex flex-col  links">
            <span>Hey,Prince Muhammad</span>
            <span className="font-bold  flex items-center">
              Account & Lists <ChevronDownIcon className="h-5 ml-2" />
            </span>
          </div>
          <div className="flex flex-col   links">
            <span>Returns </span>
            <span className="font-bold "> & Order</span>
          </div>
          <div className="links flex items-center relative">
            <ShoppingCartIcon className="text-white h-10 sm:h-12  cursor-pointer" />
            <span className="absolute bottom-7 right-0 sm:right-10 font-bold text-xl">
              0
            </span>
            <span className="hidden sm:inline font-bold">Basket</span>
          </div>
        </div>
      </div>
      {/*header bottom*/}
      <div className="bg-amazon_blue-light flex space-x-6 p-2">
        <p className="flex items-center links">
          <Bars3Icon className="h-6 mr-1 text-white" />
          All
        </p>
        <p className="links">Prime Video</p>
        <p className="links">Aamazon Business</p>
        <p className="links">Today's Deals</p>
      </div>
    </header>
  );
};

export default Header;

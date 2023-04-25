import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
  Bars3Icon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Amazonlogo from "../../public/amazonLogo.png";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItem } from "@/slices/basketSlice";

const Header = () => {
  const [showMenu, setMenu] = useState(false);
  const [user, setUser] = useState();
  const accountRef = useRef();
  const router = useRouter();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const userInfo = result.user;
        localStorage.setItem("userdata", JSON.stringify(userInfo));
        window.location.reload();
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error.message);
      });
  };

  const signout = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    //fetch user data form lcalstorage
    const userData = localStorage.getItem("userdata");
    setUser(JSON.parse(userData));
    // menu function
    return document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (!accountRef.current?.contains(e.target)) {
      setMenu(false);
    }
  };

  const items = useSelector(selectItem);

  return (
    <header>
      {/*header top*/}
      <div
        className="flex flex-grow-1   items-center bg-amazon_blue 
      p-2 flex-grow py-3 space-x-5"
      >
        <div className="mt-2  flex flex-grow items-center md:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src={Amazonlogo}
            className="object-contain cursor-pointer w-20 sm:w-32"
            width={150}
            height={50}
            quality={100}
            priority={true}
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
          <div
            className="group  flex justify-center items-center"
            onClick={() => setMenu(!showMenu)}
          >
            {user ? (
              <img
                src={user?.photoURL}
                alt="user"
                className="w-10 rounded-full mr-3"
              />
            ) : (
              <UserIcon className="h-7 text-white mr-5 ring-2 ring-white rounded-full p-1" />
            )}
            <div className="flex flex-col  links relative">
              <span>Hey, {user ? user.displayName : "sign in"}</span>
              <div className="font-bold  flex items-center">
                Account & Lists <ChevronDownIcon className="h-5 ml-2" />
              </div>
            </div>
            <div
              ref={accountRef}
              className={`absolute flex flex-col  w-40 top-16 z-50 bg-white text-black
              origin-top-right  ${showMenu ? "opacity-1" : "opacity-0"}`}
            >
              <button
                className="border border-yellow-300 rounded-sm text-black 
                bg-gradient-to-b from-yellow-200 to-yellow-400 py-2 font-bold text-left pl-4"
                onClick={user ? signout : signIn}
              >
                {user ? "Sign out" : " Sign in"}
              </button>
              <button className=" py-2 font-bold bg-white text-left pl-4">
                Account
              </button>
            </div>
          </div>

          <div className=" flex-col hidden  sm:flex links">
            <span>Returns </span>
            <span className="font-bold "> & Order</span>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="links flex items-center relative"
          >
            <ShoppingCartIcon className="text-white h-10 sm:h-12  cursor-pointer" />
            <span className="absolute bottom-7 right-0 sm:right-10 font-bold text-xl">
              {items ? items.length : 0}
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

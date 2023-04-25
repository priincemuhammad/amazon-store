import Header from "@/components/Header";
import Image from "next/image";
import Banner from "../../public/basketBanner.png";
import { selectItem, selectTotal } from "@/slices/basketSlice";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import CheckOutproduct from "@/components/CheckOutproduct";
import { useRouter } from "next/router";

const checkout = () => {
  const items = useSelector(selectItem);
  const total = useSelector(selectTotal);
  const router = useRouter();

  return (
    <div className="bg-gray-100">
      <Header />
      <main className=" lg:flex max-w-screen-2xl bg-gray-100 m-auto ">
        {/* left side */}
        <div className=" flex-grow m-5 shadow-sm text-black">
          <div>
            <Image
              src={Banner}
              priority={true}
              className=" object-contain"
              quality={100}
              alt="banner"
            />
          </div>
          <div className="flex flex-col p-5 bg-white">
            <h1 className="text-3xl font-bold">
              {items.length !== 0
                ? "Your Shopping basket"
                : "Your Shopping basket is empty!"}
            </h1>
          </div>
          <div className="space-y-5">
            {items.map((item, i) => (
              <CheckOutproduct
                key={i}
                title={item.title}
                category={item.category}
                image={item.image}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </div>
        {/* right side */}
        <div className="w-80 bg-white text-black p-8">
          {
            <>
              <div className="text-black font-bold">
                <h1 className="font-bold whitespace-nowrap">
                  Subtotal ({items.length} items)
                  <span>
                    <Currency currency="USD" quantity={total} />
                  </span>
                </h1>
                {items.length <= 0 ? (
                  <button
                    onClick={() => router.push("/")}
                    className="button w-full"
                  >
                    Go to shop
                  </button>
                ) : (
                  <button className="button w-full">Proceed to Checkout</button>
                )}
              </div>
            </>
          }
        </div>
      </main>
    </div>
  );
};

export default checkout;

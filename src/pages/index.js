import Head from "next/head";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ProductFeed from "@/components/ProductFeed";

const Home = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Amazon-Store</title>
      </Head>
      {/* Header*/}
      <Header />
      {/* main  */}
      <main className="max-w-screen-2xl m-auto">
        {/* banner */}
        <Banner />
        {/* products */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}

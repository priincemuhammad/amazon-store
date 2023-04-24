import Product from "./Product";

const ProductFeed = ({ ...getData }) => {
  return (
    <div
      className="grid grid-flow-row-dense sm:grid-cols-2 
     md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:-mt-56 md:-mt-48 mx-auto z-20"
    >
      {getData.products
        .slice(0, 4)
        .map(({ id, title, category, image, description, price }) => (
          <Product
            key={id}
            title={title}
            category={category}
            image={image}
            description={description}
            price={price}
          />
        ))}
      <img
        src={"./fullWimg.jpg"}
        className="col-span-full m-auto"
        alt="bigImg"
      />
      <div className="md:col-span-2">
        {getData.products
          .slice(4, 5)
          .map(({ id, title, category, image, description, price }) => (
            <Product
              key={id}
              title={title}
              category={category}
              image={image}
              description={description}
              price={price}
            />
          ))}
      </div>
      {getData.products
        .slice(5, getData.products.lenght)
        .map(({ id, title, category, image, description, price }) => (
          <Product
            key={id}
            title={title}
            category={category}
            image={image}
            description={description}
            price={price}
          />
        ))}
    </div>
  );
};

export default ProductFeed;

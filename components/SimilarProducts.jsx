import ProductList from "@/components/ProductList";

const SimilarProducts = ({ products }) => {
  return (
    <section className="mt-36">
      <div className="mb-10">
        <h2 className="text-center text-2xl md:text-4xl lg:text-6xl">
          Similar Products
        </h2>
        <p className="mx-auto mt-2 text-center font-light text-[#0E0506] md:mt-4 md:w-[500px]">
          Shop similar products like the one you’re looking at right now. Feel
          free to add them to cart as well.
        </p>
      </div>
      <ProductList products={products} />
    </section>
  );
};

export default SimilarProducts;

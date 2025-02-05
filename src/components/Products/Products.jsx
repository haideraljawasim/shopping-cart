import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import useLocalStorageState from "use-local-storage-state";
const BASE_URL = "https://fakestoreapi.com/products/";

function Products() {
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cart, setCart] = useLocalStorageState("cart", {});
  const [filteredProducts, setFilteredProducts] = useState([]);

  // fetch products from fake api
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  //add to cart
  const addToCart = (product) => {
    const productToAdd = { ...product, quantity: 1 };
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: productToAdd,
    }));
  };

  //check if the item already in the cart
  const isInCart = (productId) =>
    Object.keys(cart || {}).includes(productId.toString());

  //handle the input to search
  function handleSearch(searchValue) {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = products.filter((item) => {
        console.log(Object.values(item).join("").toLowerCase());
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredProducts(filteredData);
    } else {
      setFilteredProducts(products);
    }
  }
  console.log(`the fillterd data ${filteredProducts}`);
  if (isLoading) return <Loader />;
  if (error) return <h3>⚠️ Error loading products. Please try again later.</h3>;

  return (
    <>
      <div className="flex justify-center items-center">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search..."
          className="w-1/2 m-5 h-10 p-4 border border-blue-400 focus:border-4 focus:border-purple-600"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="m-3 p-4 border rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.title}
              width="100"
              className="mx-auto mb-2"
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-700">
              Price: <strong>{product.price}</strong>
            </p>
            <button
              disabled={isInCart(product.id)}
              onClick={() => addToCart(product)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white self-center rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;

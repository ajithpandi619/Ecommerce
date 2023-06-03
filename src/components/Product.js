import React, { useEffect } from "react";
import Cards from "./Cards";
import { getProducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import StatusCode from "../store/utils/StatusCode";
const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    //api
    dispatch(getProducts());
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getProducts(result));
  }, [dispatch]);

  if (status === StatusCode.LOADING) {
    return <p className="flex justify-center">Loading...</p>;
  }

  if (status === StatusCode.ERROR) {
    return <p>Something went worng! Try Again later</p>;
  }

  const cards = products.map((product) => (
    <div key={product.id}>
      <Cards productes={product} />
    </div>
  ));

  return (
    <>
      <h1 className="p-6 font-bold text-center">Product dashboard</h1>
      <div className="grid grid-cols-4 gap-6 mb-10 ml-12 ">{cards}</div>
    </>
  );
};

export default Product;

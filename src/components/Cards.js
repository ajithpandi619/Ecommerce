import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

function Cards({ productes }) {
  const { image, title, price } = productes;
  const dispatch = useDispatch();

  const addToCart = (productes) => {
    dispatch(add(productes));
  };

  return (
    //Main box//
    <div className="border border-gray-500 ">
      <header className="flex justify-center h-40 mt-3">
        <img
          src={image}
          alt="img-blur-shadow"
          className="w-[100px] mt-5 h-[150px]"
        />
      </header>

      <div className="mt-6 ">
        <div className="p-4">
          <h5 className="mb-2 text-sm text-center text-blue-gray">
            {title.substring(0, 12)}
          </h5>
          <p className="text-sm text-center">INR:{price}</p>
        </div>
      </div>

      <footer className="flex justify-center pt-0 border-t-2 bg-slate-100">
        <button
          onClick={() => addToCart(productes)}
          className="p-1 text-sm bg-blue-600 rounded-md w-[6rem] mb-[25px] mt-4 text-zinc-50"
        >
          Add to cart
        </button>
      </footer>
    </div>
  );
}

export default Cards;

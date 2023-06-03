import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div className="grid grid-cols-3 gap-8">
      {products.map((product) => (
        <div className="border border-gray-500" key={product.id}>
          <header className="flex justify-center h-40 mt-3">
            <img
              src={product.image}
              alt="img-blur-shadow"
              className="w-[100px] mt-5 h-[150px]"
            />
          </header>

          <div className="mt-6">
            <div className="p-4">
              <h5 className="mb-2 text-sm text-center text-blue-gray">
                {product.title && product.title.substring(0, 12)}
              </h5>
              <p className="text-sm text-center">INR: {product.price}</p>
            </div>
          </div>

          <footer className="flex justify-center pt-0 border-t-2 bg-slate-100">
            <button
              className="p-1 text-sm bg-red-600 rounded-md w-[6rem] mb-[25px] mt-4 text-zinc-50"
              onClick={() => handleRemove(product.id)}
            >
              Remove Item
            </button>
          </footer>
        </div>
      ))}
    </div>
  );
};

export default Cart;

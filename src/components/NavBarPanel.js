import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <div className="flex justify-between bg-zinc-300">
      <div>
        Redux Toolkit{" "}
        <span className="ml-5">
          <Link to="/" as={Link}>
            Products
          </Link>
        </span>
      </div>

      <div>
        <Link to="/cart" as={Link}>
          My Bag {cartProducts.length}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

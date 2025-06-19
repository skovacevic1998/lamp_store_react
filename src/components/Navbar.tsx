import { Link } from "react-router-dom";
import "../styles/navbar.css";
export const Navbar = () => {
  return (
    <nav className="nav">
      {" "}
      <Link to="/" className={"logo"}>
        LampStore
      </Link>{" "}
      <div className={"navLinks"}>
        {" "}
        <Link to="/products" className={"navLink"}>
          Products
        </Link>{" "}
        <Link to="/about" className={"navLink"}>
          About
        </Link>{" "}
        <Link to="/contact" className={"navLink"}>
          Contact
        </Link>{" "}
        <Link to="/cart" className={"cartButton"}>
          Cart
        </Link>{" "}
      </div>{" "}
    </nav>
  );
};

import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { useState, useContext } from "react";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const data = useContext(UserContext);

  // Selector to get the data from the Redux store - it is noting but hook coming from react redux library
  // suscribing to the store using selector
  const cartItems = useSelector((state) => { console.log(state); return state?.cart?.cartItems});
  return (
    <div className="Header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Dawat" height={90} width={80}></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/instamart">INSTAMART</Link>
          </li>
          <li>
            <Link to="/">FOOD DELIVERY</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cartItems.length} items)</Link> {/*  to="/card" */}
          </li>
          <li>
            <button
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
          <li>
            {data.loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

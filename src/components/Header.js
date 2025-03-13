import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/card">Cart</Link>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;

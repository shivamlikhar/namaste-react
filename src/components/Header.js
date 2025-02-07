import logo from "../../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} alt="Dawat" height={90} width={80}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login")
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

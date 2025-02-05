import logo from "../../assets/logo.png";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
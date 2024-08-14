import "./Navbar.scss";
import Logo from "../../assets/Logo.svg";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar__container wrapper">
        <a href="#">
          <img src={Logo} alt="logo Positivus" />
        </a>
        <div className={showNav ? "show" : ""}>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Use Cases</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <button className="btn btn-clear">Request a quote</button>
        </div>
        <div className="navbar__menu" onClick={() => setShowNav(!showNav)}>
          {showNav ? <IoCloseOutline /> : <IoMenuOutline />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

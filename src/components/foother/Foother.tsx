import "./Foother.scss";

import Logo from "../../assets/LogoWhite.svg";
import Linkedin from "../../assets/icons/LinkWhite.svg";
import Facebook from "../../assets/icons/FbWhite.svg";
import Twitter from "../../assets/icons/TwWhite.svg";

const Foother = () => {
  return (
    <footer className="foother">
      <div className="foother__container wrapper">
        <div className="content">
          <div className="content__inner">
            <div className="top">
              <img src={Logo} alt="Impuls" />
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
              <div className="social desktop-show">
                <img src={Linkedin} alt="Linkedin" />
                <img src={Facebook} alt="Facebook" />
                <img src={Twitter} alt="Twitter" />
              </div>
            </div>
            <div className="medium">
              <div className="left">
                <div className="contactus">Contact us:</div>

                <div className="email">Email: info@positivus.com</div>
                <div className="phone">Phone: 555-567-8901</div>
                <div className="adress">
                  Address: 1234 Main St <br />
                  Moonstone City, Stardust State 12345
                </div>
              </div>
              <div className="right">
                <form action="#">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <button className="btn" type="submit">
                    Subscribe to news
                  </button>
                </form>
              </div>
              <div className="social desktop-hide">
                <img src={Linkedin} alt="Linkedin" />
                <img src={Facebook} alt="Facebook" />
                <img src={Twitter} alt="Twitter" />
              </div>
            </div>
            <div className="bottom">
              <p className="rights">© 2023 Positivus. All Rights Reserved.</p>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foother;

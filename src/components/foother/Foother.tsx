import "./Foother.scss";

import Logo from "../../assets/LogoWhite.svg";
import Linkedin from "../../assets/icons/LinkWhite.svg";
import Facebook from "../../assets/icons/FbWhite.svg";
import Twitter from "../../assets/icons/TwWhite.svg";
import { useState } from "react";

const Foother = () => {
  const [formData, setFormData] = useState<{ email: string }>({
    email: "",
  });
  const [formSended, setFormSended] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const respons = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (!respons.ok) {
        throw new Error("Smth wrong");
      }
      const data = await respons.json();
      console.log("Success ", data);

      setFormData({ email: "" });
      setFormSended(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
                <form onSubmit={onSubmit}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                    value={formData.email}
                  />
                  <button className="btn" type="submit">
                    Subscribe to news
                  </button>

                  {formSended ? <div> Your message was sent :)</div> : ""}
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

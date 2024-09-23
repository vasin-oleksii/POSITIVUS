import "./Foother.scss";

import Logo from "../../assets/LogoWhite.svg";
import Linkedin from "../../assets/icons/LinkWhite.svg";
import Facebook from "../../assets/icons/FbWhite.svg";
import Twitter from "../../assets/icons/TwWhite.svg";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const Foother = () => {
  const [formSended, setFormSended] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (value, { resetForm }) => {
      try {
        const respons = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            body: JSON.stringify(value),
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

        setFormSended(true);
        resetForm();
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <footer className="foother">
      <div className="foother__container wrapper">
        <div className="content">
          <div className="content__inner">
            <div className="top">
              <img src={Logo} alt="Impuls" />
              <ul>
                <li>
                  <a href="#team">About us</a>
                </li>
                <li>
                  <a href="#favors">Services</a>
                </li>
                <li>
                  <a href="#studies">Use Cases</a>
                </li>
                <li>
                  <a href="#process">Pricing</a>
                </li>
                <li>
                  <a href="#testimonials">Blog</a>
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
                <form onSubmit={formik.handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  <button className="btn" type="submit">
                    {formSended ? "Thank you for sending" : "Subscribe to news"}
                  </button>
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
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

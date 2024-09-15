import "./Contact.scss";

import InfoBlock from "../common/InfoBlock/InfoBlock";
import IllustrationContact from "../../assets/IllustrationContact.svg";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const [formSended, setFormSended] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: { option: "", name: "", email: "", message: "" },
    validationSchema: Yup.object({
      option: Yup.string(),
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(3, "Must be 3 characters or more"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .min(15, "Must be 15 characters or more")
        .max(500, "Must be 500 characters or less")
        .required("Required"),
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
    <section className="contact">
      <div className="contact__container wrapper">
        <InfoBlock
          title="Contact Us"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
        <div className="content">
          <img src={IllustrationContact} alt="IllustrationContact" />
          <form onSubmit={formik.handleSubmit}>
            <div>
              <fieldset>
                <input
                  type="radio"
                  id="sayHi"
                  name="option"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value="say Hi"
                  checked={formik.values.option === "say Hi"}
                />
                <label htmlFor="sayHi" id="hi">
                  <span className="custom-radio"></span> Say Hi
                </label>

                <input
                  type="radio"
                  id="GetaQuote"
                  name="option"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value="Get a Quote"
                  checked={formik.values.option === "Get a Quote"}
                />
                <label htmlFor="GetaQuote">
                  <span className="custom-radio"></span> Get a Quote
                </label>
              </fieldset>

              <label htmlFor="name" className="name">
                <span>Name</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}
              </label>

              <label htmlFor="email">
                <span>Email*</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </label>

              <label htmlFor="message">
                <span>Message*</span>
                <textarea
                  rows={7}
                  id="message"
                  name="message"
                  required
                  placeholder="Message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div>{formik.errors.message}</div>
                ) : null}
              </label>
            </div>

            <button className="btn" type="submit">
              {formSended ? "Thank you for sending" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

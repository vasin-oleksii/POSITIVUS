import "./Contact.scss";
import InfoBlock from "../common/InfoBlock/InfoBlock";
import IllustrationContact from "../../assets/IllustrationContact.svg";
import { useState } from "react";

interface FormData {
  option: string;
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    option: "",
    name: "",
    email: "",
    message: "",
  });

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
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="contact">
      <div className="contact__container wrapper">
        <InfoBlock
          title="Contact Us"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
        <div className="content">
          <img src={IllustrationContact} alt="IllustrationContact" />
          <form onSubmit={onSubmit}>
            <div>
              <fieldset>
                <input
                  type="radio"
                  id="sayHi"
                  name="option"
                  onChange={handleChange}
                  value="say Hi"
                />
                <label htmlFor="sayHi" id="hi">
                  <span className="custom-radio"></span> Say Hi
                </label>

                <input
                  type="radio"
                  id="GetaQuote"
                  name="option"
                  onChange={handleChange}
                  value="Get a Quote"
                />
                <label htmlFor="GetaQuote">
                  <span className="custom-radio"></span> Get a Quote
                </label>
              </fieldset>

              <label htmlFor="name" className="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                onChange={(e) => handleChange(e)}
                value={formData.name}
              />

              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
                onChange={(e) => handleChange(e)}
                value={formData.email}
              />

              <label htmlFor="message">Message*</label>
              <textarea
                rows={7}
                id="message"
                name="message"
                required
                placeholder="Message"
                onChange={(e) => handleChange(e)}
                value={formData.message}
              />
            </div>

            <button className="btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

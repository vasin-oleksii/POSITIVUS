import "./Contact.scss";
import InfoBlock from "../common/InfoBlock/InfoBlock";
import IllustrationContact from "../../assets/IllustrationContact.svg";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container wrapper">
        <InfoBlock
          title="Contact Us"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
        <div className="content">
          <img src={IllustrationContact} alt="IllustrationContact" />
          <form>
            <div>
              <fieldset>
                <input type="radio" id="sayHi" name="option" />
                <label htmlFor="sayHi" id="hi">
                  <span className="custom-radio"></span> Say Hi
                </label>
                <input type="radio" id="GetaQuote" name="option" />
                <label htmlFor="GetaQuote">
                  <span className="custom-radio"></span> Get a Quote
                </label>
              </fieldset>

              <label htmlFor="name" className="name">
                Name
              </label>
              <input type="text" id="name" name="name" placeholder="Name" />

              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
              />

              <label htmlFor="message">Message*</label>
              <textarea
                rows={7}
                id="message"
                name="message"
                required
                placeholder="Message"
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

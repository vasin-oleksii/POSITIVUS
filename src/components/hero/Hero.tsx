import "./Hero.scss";
import IlustrationHero from "../../assets/Illustration.svg";
import Partners from "../partners/Partners";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container wrapper">
        <div>
          <h1 className="disappearing-phone">
            Navigating the digital landscape for success
          </h1>
          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <div>
            <button className="btn">Book a consultation</button>
          </div>
        </div>
        <img src={IlustrationHero} alt="Ilustration Hero" />
        <h1 className="apparing-phone">
          Navigating the digital landscape for success
        </h1>
      </div>
      <Partners />
    </section>
  );
};

export default Hero;

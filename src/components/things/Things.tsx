import "./Things.scss";
import IllustrationProposal from "../../assets/IllustrationProposal.svg";

const Things = () => {
  return (
    <section className="things">
      <div className="things__container wrapper">
        <div className="things__content">
          <div className="description">
            <h3>Let’s make things happen</h3>
            <p>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <a href="#contact">
              <button className="btn">Get your free proposal</button>
            </a>
          </div>
          <div className="img">
            <img src={IllustrationProposal} alt="IllustrationProposal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Things;

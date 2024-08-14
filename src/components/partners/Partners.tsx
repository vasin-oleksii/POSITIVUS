import "./Partners.scss";
import Amazon from "../../assets/partners/Company logo.svg";
import Dribble from "../../assets/partners/Company logo-1.svg";
import HubSpot from "../../assets/partners/Company logo-2.svg";
import Notion from "../../assets/partners/Company logo-3.svg";
import Netflix from "../../assets/partners/Company logo-4.svg";
import Zoom from "../../assets/partners/Company logo-5.svg";

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners__container wrapper">
        <ul className="left">
          <li>
            <img src={Amazon} alt="Amazon" />
          </li>
          <li>
            <img src={Dribble} alt="Dribble" />
          </li>
          <li>
            <img src={HubSpot} alt="HubSpot" />
          </li>
        </ul>
        <ul className="right">
          <li>
            <img src={Netflix} alt="Netflix" />
          </li>
          <li>
            <img src={Notion} alt="Notion" />
          </li>
          <li>
            <img src={Zoom} alt="Zoom" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Partners;

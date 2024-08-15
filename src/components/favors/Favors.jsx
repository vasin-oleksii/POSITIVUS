import "./Favors.scss";
import InfoBlock from "../common/InfoBlock/InfoBlock";
import { favorsInfo } from "../../Data";

const Favors = () => {
  return (
    <section className="favors">
      <div className="favors__container wrapper">
        <InfoBlock
          title="Services"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
        <ul className="cards">
          {favorsInfo.map(
            ({
              image,
              name,
              subName,
              namesColorBackground,
              cardColorBackground,
              arrowColor,
              arrowColorBackground,
              id,
            }) => (
              <li
                key={id}
                className="card"
                style={{ background: cardColorBackground }}
              >
                <div className="left">
                  <div className="titles">
                    <div>
                      <h3 style={{ background: namesColorBackground }}>
                        {name}
                      </h3>
                    </div>

                    <div>
                      <h3 style={{ background: namesColorBackground }}>
                        {subName}
                      </h3>
                    </div>
                  </div>
                  <a href="#">
                    {" "}
                    <svg
                      width="41"
                      height="41"
                      viewBox="0 0 41 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="20.5"
                        cy="20.5"
                        r="20.5"
                        fill={arrowColorBackground}
                      />
                      <path
                        d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                        fill={arrowColor}
                      />
                    </svg>
                    <p
                      style={
                        cardColorBackground === "#191a23"
                          ? { color: "#ffffff" }
                          : { color: "#191a23" }
                      }
                    >
                      Learn more
                    </p>
                  </a>
                </div>
                <div className="right">
                  <img src={image} alt={name} />
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Favors;

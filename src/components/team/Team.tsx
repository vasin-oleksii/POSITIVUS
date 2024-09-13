import "./Team.scss";
import InfoBlock from "../common/InfoBlock/InfoBlock";
import { teamInfo } from "../../Data";

interface TeamInfo {
  image: string;
  name: string;
  job: string;
  about: string;
  socialIcon: string;
}

const Team = () => {
  return (
    <section className="team">
      <div className="team__container wrapper">
        <InfoBlock
          title="Team"
          description="Meet the skilled and experienced team behind our successful digital marketing strategies"
        />
        <div className="content">
          {teamInfo.map(
            ({ image, name, job, about, socialIcon }, id: number) => {
              return (
                <div className="content__item" key={id}>
                  <div className="item__top">
                    <img src={image} alt={name} />
                    <div className="about">
                      <h5 className="name">{name}</h5>
                      <p className="job">{job}</p>
                    </div>
                    <div className="iconSocial">
                      <img src={socialIcon} alt={name} className="socialIcon" />
                    </div>
                  </div>
                  <div className="item__bottom">
                    <p>{about}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div className="more">
          <button className="btn">See all team</button>
        </div>
      </div>
    </section>
  );
};

export default Team;

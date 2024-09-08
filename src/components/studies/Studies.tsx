import "./Studies.scss";
import InfoBlock from "../common/InfoBlock/InfoBlock";
import LabelArrow from "../common/labelArrow/LabelArrow";
import { studiesInfo } from "../../Data";

export interface StudiesInfo {
  text: string;
  color: "#fff" | "#b9ff66" | "#191a23";
  textButton: string;
  id: number;
}

const Studies = () => {
  return (
    <section className="studies">
      <div className="studies__container wrapper">
        <InfoBlock
          title="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />

        <div className="studies__content">
          {studiesInfo.map(({ text, color, textButton, id }: StudiesInfo) => {
            return (
              <div className="content__item" key={id}>
                <p>{text}</p>
                <LabelArrow title={textButton} color={color} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Studies;

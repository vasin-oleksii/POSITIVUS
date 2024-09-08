import arrowSimple from "../../../assets/icons/arrowSimple.svg";
import "./LabelArrow.scss";
export interface LabelInfo {
  title: string;
  color: "#fff" | "#b9ff66" | "#191a23";
}

const LabelArrow = ({ title, color }: LabelInfo) => {
  return (
    <a href="#" className="label--arrow">
      <p style={{ color: color }}>{title}</p>
      <img src={arrowSimple} alt="arrow Simple" />
    </a>
  );
};

export default LabelArrow;

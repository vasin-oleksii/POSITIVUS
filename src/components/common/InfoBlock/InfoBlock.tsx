import "./InfoBlock.scss";

type InfoBlockProps = {
  title: string;
  description: string;
};

const InfoBlock = ({ title, description }: InfoBlockProps) => {
  return (
    <div className="infoBlock">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default InfoBlock;

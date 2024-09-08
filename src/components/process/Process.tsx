import InfoBlock from "../common/InfoBlock/InfoBlock";
import { processInfo } from "../../Data";
import BtnPlus from "../../assets/icons/btnPlus.svg";
import BtnMinus from "../../assets/icons/btnMinus.svg";
import "./Process.scss";
import { useState } from "react";

export interface ProcessInfo {
  id: number;
  text: string;
  description: string;
}

const Process = () => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const handleActiveItemId = (id: number) => {
    setActiveItemId(activeItemId === id ? null : id);
  };

  return (
    <section className="process">
      <div className="process__container wrapper">
        <InfoBlock
          title="Our Working Process "
          description="Step-by-Step Guide to Achieving Your Business Goals"
        />
        <div className="process__content">
          {processInfo.map(({ id, text, description }: ProcessInfo) => (
            <div
              className={activeItemId === id ? "item active" : "item"}
              key={id}
            >
              <div className={activeItemId === id ? "top active" : "top"}>
                <div className="left">
                  <div className="number">0{id}</div>
                  <p>{text}</p>
                </div>

                {activeItemId === id ? (
                  <img
                    src={BtnMinus}
                    alt="BtnMinus"
                    className="right"
                    onClick={() => handleActiveItemId(id)}
                  />
                ) : (
                  <img
                    src={BtnPlus}
                    alt="BtnPlus"
                    className="right"
                    onClick={() => handleActiveItemId(id)}
                  />
                )}
              </div>
              <div className={activeItemId === id ? "bottom" : "bottom hidden"}>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

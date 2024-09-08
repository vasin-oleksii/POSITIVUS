import InfoBlock from "../common/InfoBlock/InfoBlock";
import { processInfo } from "../../Data";
import BtnPlus from "../../assets/icons/btnPlus.svg";
import BtnMinus from "../../assets/icons/btnMinus.svg";
import "./Process.scss";
import { useState } from "react";

export interface ProcessInfo {
  id: number;
  text: string;
  descripton: string;
}

const Process = () => {
  const [itemClicked, setItemClicked] = useState(false);

  //   const onCLickLabel = (id : number) => id

  return (
    <section className="process">
      <div className="process__container wrapper">
        <InfoBlock
          title="Our Working Process "
          description="Step-by-Step Guide to Achieving Your Business Goals"
        />
        <div className="process__content">
          {processInfo.map(({ id, text, description: descripton }) => (
            <div className={itemClicked ? "item active" : "item"} key={id}>
              <div className={itemClicked ? "top active" : "top"}>
                <div className="left">
                  <div className="number">0{id}</div>
                  <p>{text}</p>
                </div>

                {itemClicked ? (
                  <img
                    src={BtnMinus}
                    alt="BtnMinus"
                    className="right"
                    onClick={() => setItemClicked(!itemClicked)}
                  />
                ) : (
                  <img
                    src={BtnPlus}
                    alt="BtnPlus"
                    className="right"
                    onClick={() => setItemClicked(!itemClicked)}
                  />
                )}
              </div>
              <div className={itemClicked ? "bottom" : "bottom hidden"}>
                <p>{descripton}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

import "./Studies.scss";
import InfoBlock from "../common/InfoBlock/InfoBlock";
import LabelArrow from "../common/labelArrow/LabelArrow";
import { studiesInfo } from "../../Data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export interface StudiesInfo {
  text: string;
  color: "#fff" | "#b9ff66" | "#191a23";
  textButton: string;
}

const Studies = () => {
  return (
    <section className="studies" id="studies">
      <div className="studies__container wrapper">
        <InfoBlock
          title="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />

        <Swiper
          className="studies__content mobile--show"
          slidesPerView={1.2}
          spaceBetween={10}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
        >
          {studiesInfo.map(
            ({ text, color, textButton }: StudiesInfo, id: number) => {
              return (
                <SwiperSlide key={id}>
                  <div className="content__item">
                    <p>{text}</p>
                    <LabelArrow title={textButton} color={color} />
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>

        <div className="studies__content mobile--hide">
          {studiesInfo.map(
            ({ text, color, textButton }: StudiesInfo, id: number) => {
              return (
                <div className="content__item" key={id}>
                  <p>{text}</p>
                  <LabelArrow title={textButton} color={color} />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Studies;

import "./Testimonials.scss";
import { testimonials } from "../../Data";
import InfoBlock from "../common/InfoBlock/InfoBlock";
import { Swiper, SwiperSlide } from "swiper/react";
import Polygon from "../../assets/icons/Polygon.svg";

import ArrowRight from "../../assets/icons/ArrowRight.svg";
import ArrowLeft from "../../assets/icons/Arrowleft.svg";
import StarGreen from "../../assets/icons/StarGreen.svg";
import StarGrey from "../../assets/icons/StarGrey.svg";
import { useRef, useState } from "react";

export interface Testimonials {
  text: string;
  name: string;
  job: string;
}

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState<number>(1);
  const swiperRef = useRef<any>(null);

  const handleActiveSlide = (num: number) => {
    setActiveSlide(num);
    swiperRef.current && swiperRef.current.slideTo(num);
  };

  const moveSlide = (navigation: "next" | "prev") => {
    navigation === "next" && swiperRef.current && swiperRef.current.slideNext();
    navigation === "prev" && swiperRef.current && swiperRef.current.slidePrev();
  };

  return (
    <section className="testimonials">
      <div className="testimonials__container wrapper">
        <InfoBlock
          title="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />
        <div className="content">
          <Swiper
            className=""
            slidesPerView={2}
            spaceBetween={50}
            centeredSlides={true}
            initialSlide={1}
            breakpoints={{
              900: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            navigation={true}
            onSlideChange={(e) => handleActiveSlide(e.activeIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {testimonials.map(({ text, name, job }, i: number) => {
              return (
                <SwiperSlide>
                  <div className="content__item" key={i}>
                    <div className="top">
                      <p>{text}</p>
                    </div>
                    <div className="bottom">
                      <h5 className="name">{name}</h5>
                      <p>{job}</p>
                      <div className="polygon">
                        <img src={Polygon} alt="polygon" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="pagination">
            <img
              src={ArrowLeft}
              alt="ArrowLeft"
              onClick={() => moveSlide("prev")}
              style={
                activeSlide === 0
                  ? { opacity: 0.3, cursor: "default" }
                  : { opacity: 1 }
              }
            />
            <div className="stars">
              {testimonials.map((el, i) => {
                el = el;
                return i === activeSlide ? (
                  <img src={StarGreen} alt="StarGreen" />
                ) : (
                  <img
                    src={StarGrey}
                    alt="StarGrey"
                    onClick={() => handleActiveSlide(i)}
                  />
                );
              })}
            </div>
            <img
              src={ArrowRight}
              alt="ArrowRight"
              onClick={() => moveSlide("next")}
              style={
                activeSlide === testimonials.length - 1
                  ? { opacity: 0.3, cursor: "default" }
                  : { opacity: 1 }
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

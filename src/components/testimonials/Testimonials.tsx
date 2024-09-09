import InfoBlock from "../common/InfoBlock/InfoBlock";
import { testimonials } from "../../Data";
import Polygon from "../../assets/icons/Polygon.svg";
import "./Testimonials.scss";
import { Swiper, SwiperSlide } from "swiper/react";

export interface Testimonials {
  text: string;
  name: string;
  job: string;
}

const Testimonials = () => {
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

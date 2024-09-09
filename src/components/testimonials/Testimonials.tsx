import InfoBlock from "../common/InfoBlock/InfoBlock";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__container wrapper">
        <InfoBlock
          title="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />
      </div>
    </section>
  );
};

export default Testimonials;

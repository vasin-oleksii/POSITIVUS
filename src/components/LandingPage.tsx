import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import Favors from "./favors/Favors";
import Things from "./things/Things";
import Studies from "./studies/Studies";
import Process from "./process/Process";
import Team from "./team/Team";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./сontact/Contact";
import Foother from "./foother/Foother";

import ProgressBar from "react-scroll-progress-bar";

const LandingPage = () => {
  return (
    <>
      <ProgressBar
        bgcolor="blue"
        height="5px"
        style={{ position: "fixed", top: 0, left: 0, width: "100%" }}
      />
      <Navbar />

      <Hero />
      <Favors />
      <Things />
      <Studies />
      <Process />
      <Team />
      <Testimonials />
      <Contact />

      <Foother />
    </>
  );
};

export default LandingPage;

import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Favors from "./components/favors/Favors";
import Things from "./components/things/Things";
import Studies from "./components/studies/Studies";
import Process from "./components/process/Process";
import Team from "./components/team/Team";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/сontact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Favors />
      <Things />
      <Studies />
      <Process />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;

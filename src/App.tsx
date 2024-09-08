import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Favors from "./components/favors/Favors";
import Things from "./components/things/Things";
import Studies from "./components/studies/Studies";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Favors />
      <Things />
      <Studies />
    </>
  );
}

export default App;

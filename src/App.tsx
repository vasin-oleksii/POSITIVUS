import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Favors from "./components/favors/Favors";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <Favors />
      </main>
    </>
  );
}

export default App;

import Preloader from "./components/common/reloader/Preloader";

import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleIsLoading = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    window.addEventListener("load", handleIsLoading);
    handleIsLoading();
    return () => {
      window.removeEventListener("load", handleIsLoading);
    };
  }, []);

  return <>{isLoading ? <Preloader /> : <LandingPage />}</>;
}

export default App;

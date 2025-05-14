import React from "react";
import Carosule from "./components/Carosule";
import Hero from "./components/Hero";
import TCards from "./components/TCards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Hero />
      <TCards />
      <Carosule />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
    </div>
  );
};

export default App;

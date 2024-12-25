import React from "react";

import Router from "./pages/Routes";
import Header from "./components/Header";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="font-lato">
      <Router />
      <Header />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

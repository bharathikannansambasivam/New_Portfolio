import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="font-lato">
      <Navbar />
      <Header />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

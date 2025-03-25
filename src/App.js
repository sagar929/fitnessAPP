import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Join from "./Components/Join";
import Plans from "./Components/Plans";
import Programs from "./Components/Programs";
import Reasons from "./Components/Reasons";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;

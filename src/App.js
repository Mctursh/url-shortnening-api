import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MidSection from "./components/MidSection";
import NavBar from "./components/NavBar";
import "./css/styles.css"

const App = () => {
  return (
    <div className="">      
      <NavBar />
      <Header />
      <MidSection />
      <Footer />
    </div>
  );
};

export default App;




import React from "react";
import Footer from "../component/Footer";
import FourCol from "../component/FourCol";
import Header from "../component/Header";
import Main_nav from "../component/Main_nav";
import Navbar from "../component/Navbar";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Main_nav/>
      <FourCol/>
      <Footer/>
    </>
  );
}

export default Home;

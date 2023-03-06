/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Img2 from "./img/3.png";
import Img3 from "./img/5.5.png";
import Img4 from "./img/5.png";
import Img5 from "./img/6.png";
import Img6 from "./img/21.png";
import Img7 from "./img/13.png";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Two from "./components/Twoheader/Two";
import Theer from "./components/theer/Theer";
import Four from "./components/Four/Four";
import Five from "./components/Five/Five";
function App() {
  return (
    <>
      <Navbar />
      <main>  
        <Header />
        <Two />
        <Theer />
        <Footer />
        <Four />
      </main>
      <footer>
        <Five />
      </footer>
    </>
  );
}

export default App;

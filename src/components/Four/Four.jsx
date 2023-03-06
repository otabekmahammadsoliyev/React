import React from "react";
import Img3 from "../../img/5.5.png";
import "./Four.css";
import "../../App.css";

function Four() {
  return (
    <>
      <div className="cent">
        <div className="container">
          <div className="top">
            <h2>НАШИ БРЕНДЫ</h2>
            <p>_____</p>
          </div>
          <div className="center">
            <div className="boxc">
              <div className="cards">
                <img src={Img3} alt="" />
              </div>
              <div className="cards">
                <img src={Img3} alt="" />
              </div>
              <div className="cards">
                <img src={Img3} alt="" />
              </div>
              <div className="cards">
                <img src={Img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Four;

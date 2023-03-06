import React from "react";
import Img2 from "../../img/3.png";
import "./Two.css";
import "../../App.css";

function Two() {
  return (
    <>
      <div className="boxs">
        <div className="container">
          <div className="left">
            <h2>СЕЗОН 2020/21</h2>
            <p>______</p>
            <div className="boxses">
              <div className="card">
                <img src={Img2} alt="" />
                <h3>Louis XVI ATHOS</h3>
                <p>165 000 руб. </p>
              </div>
              <div className="card">
                <img src={Img2} alt="" />
                <h3>Louis XVI ATHOS</h3>
                <p>165 000 руб. </p>
              </div>
              <div className="card">
                <img src={Img2} alt="" />
                <h3>Louis XVI ATHOS</h3>
                <p>165 000 руб. </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="h">
              {" "}
              <h1>Новая коллекция</h1>
              <p>______</p>
              <button>Каталог</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Two;

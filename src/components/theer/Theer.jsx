import React from "react";
import Img4 from "../../img/5.png";
import "./Theer.css";
import "../../App.css";

function Theer() {
  return (
    <>
      <div className="two">
        <div className="container">
          <div className="left">
            <img src={Img4} alt="" />
          </div>
          <div className="right">
            <h1>коллекция 2018</h1>
            <p>______</p>
            <div className="dad">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut
                neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed
                scelerisque magna consectetur. Amet convallis quis gravida
                facilisis vulputate. Faucibus facilisi habitasse ipsum interdum
                dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada
                integer. Aenean praesent viverra nulla nullam natoque volutpat
                curabitur auctor. Viverra viverra ullamcorper scelerisque risus
                dignissim egestas. Id aliquam a aliquam egestas leo orci
                pharetra sed diam.{" "}
              </p>
              <button>посмотреть коллекцию</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Theer;

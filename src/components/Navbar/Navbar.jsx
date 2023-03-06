/* eslint-disable no-unused-vars */
import React from "react";
import "./navbar.css";
import "../../App.css";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="sa">
            {" "}
            <a href="" className="text ">
              PORTEN
            </a>
          </div>
          <a href="" className="text ">
            Понравилось
          </a>
          <a href="" className="text ">
            личный кабинет
          </a>
          <a href="" className="text ">
            {" "}
            настройки
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

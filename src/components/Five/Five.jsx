import React from "react";
import Img6 from "../../img/21.png";
import Img7 from "../../img/13.png";
import "./Five.css";
import "../../App.css";

function Five() {
  return (
    <>
      <div className="botom">
        <div className="container">
          <div className="left">
            <h1>О магазине</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper
              viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet
              consectetur vel vitae aliquam dictum suspendisse. Lobortis eget
              consequat, tellus et et sed turpis. Pretium quisque vitae, amet,
              porttitor odio ultricies massa pharetra leo. Et ipsum urna fames
              in sit mi ultrices nisi, nunc.
            </p>
          </div>
          <div className="center">
            <h1>Категории</h1>
            <button>часы</button>
            <button>браслеты</button>
            <button>ремни</button>
            <button>
              <img src={Img6} alt="" />
            </button>
            <button>
              <img src={Img7} alt="" />
            </button>
          </div>
          <div className="right">
            <h1>РАссылка</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper
              viverra nunc cursus tortor lectus nunc nulla nibh.
            </p>
            <div className="saa">
              <button>ВАША почта</button>
              <button>ПОДПИСАТЬСЯ</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Five;

import React from "react";
function Cards(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="mypic" className="card_img" />
          <div className="card_info">
            <span>{props.title}</span>
            <h2>{props.sname}</h2>
            <a href="{props.link}">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;

import React from "react";
import "./card.component.scss";

interface CardProps {
  imgSrc: string;
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="Card">
      <div className="Card__container">
        <div className="Card__container-img">
          <img className="Card__container-img-img" src={props.imgSrc} alt="" />
        </div>
        <div className="Card__container-content">
          <div className="Card__title">{props.title}</div>
          <div className="Card__content">{props.content}</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);

import React from "react";
import Card from "../card/card.component";
import "./slider.component.scss";
import { IData } from "../../interfaces";

interface SliderProps {
  data: IData[];
  direction: string;
  animating: boolean;
}

const Slider: React.FC<SliderProps> = (props) => {
  return (
    <div className="Slider">
      <ul className="Slider__ul">
        {props.data.map((item, index) => {
          let className = "";
          if (index === 0) {
            className = "Slider__li";
          }
          return (
            <li
              key={item.id}
              style={{
                transform: props.animating
                  ? props.direction === "next"
                    ? "translateX(-100%)"
                    : "translateX(100%)"
                  : "translateX(0)",
                transition: props.animating
                  ? "transform 0.5s ease-in-out"
                  : "none",
              }}
              className={className}
            >
              <Card
                imgSrc={item.imgSrc}
                title={item.title}
                content={item.text}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default React.memo(Slider);

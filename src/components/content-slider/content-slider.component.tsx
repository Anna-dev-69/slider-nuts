import { useEffect, useState } from "react";
import SlideTrack from "../slide-track/slide-track.component";
import Slider from "../slider/slider.component";
import "./content-slider.component.scss";
import cardDetails from "../../data";
import arrowPng from "../../assets/arrow.png";
import { IData } from "../../interfaces";

const DURATION = 2000;
type Direction = "next" | "prev";

const ContentSlider = () => {
  const [newArray, setNewArray] = useState<IData[]>(cardDetails || []);
  const [direction, setDirection] = useState<Direction>("next");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleMove = (newDirection: Direction) => {
    if (animating) return;

    setAnimating(true);

    setDirection(newDirection);

    setTimeout(() => {
      const newData = [...newArray];
      if (newDirection === "next") {
        const first = newData.shift();
        newData.push(first!);

        setCurrentIndex((prev) => (prev < newData.length - 1 ? prev + 1 : 0));
      } else {
        const last = newData.pop();
        newData.unshift(last!);

        setCurrentIndex((prev) => (prev <= 0 ? newData.length - 1 : prev - 1));
      }

      setNewArray(newData);
      setAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleMove("next");
    }, DURATION);

    return () => {
      clearInterval(timer);
    };
  }, [newArray]);

  return (
    <div className="ContentSlider">
      <div className="ContentSlider__container-title">
        <button className="Button" onClick={() => handleMove("prev")}>
          <img src={arrowPng} alt="Right" />
        </button>
        <h1>World Discover</h1>
        <button className="Button" onClick={() => handleMove("next")}>
          <img src={arrowPng} alt="Left" style={{ rotate: "180deg" }} />
        </button>
      </div>
      <Slider animating={animating} data={newArray} direction={direction} />
      <SlideTrack data={newArray.length} currentIndex={currentIndex} />
    </div>
  );
};

export default ContentSlider;

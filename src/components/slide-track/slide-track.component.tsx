import React from "react";
import "./slide-track.component.scss";
interface SlideTrackProps {
  data: number;
  currentIndex: number;
}

const SlideTrack: React.FC<SlideTrackProps> = (props) => {
  return (
    <ul className="SlideTrack">
      {Array.from({ length: props.data }).map((_, index) => (
        <li
          key={index}
          className="SlideTrack__li"
          style={
            props.currentIndex === index ? { backgroundColor: " #CCD1C3" } : {}
          }
        ></li>
      ))}
    </ul>
  );
};

export default React.memo(SlideTrack);

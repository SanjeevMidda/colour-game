import { React, useEffect, useState } from "react";

const Color = ({
  color,
  setColorSelected,
  colorSelected,
  startingColor,
  score,
  setScore,
  setStartingColor,
  randomColor,
}) => {
  const [correctAnswer, setCorrectAnswer] = useState(false);

  useEffect(() => {
    if (colorSelected === startingColor) {
      let currentScore = score + 1;
      setScore(currentScore);
      setColorSelected("");
      setStartingColor(randomColor());
    }
  }, [colorSelected]);

  let colorStyles = {
    backgroundColor: color,
    width: "25px",
    height: "25px",
    borderRadius: "50%",
  };

  return (
    <div
      className="color"
      style={colorStyles}
      onClick={() => {
        setColorSelected(color);
      }}
    ></div>
  );
};

export default Color;

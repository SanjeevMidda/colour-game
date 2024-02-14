import "./index.css";
import Color from "./components/Color";
import { useState } from "react";

function App() {
  let randomColor = () => {
    let colors = [
      "blue",
      "red",
      "brown",
      "yellow",
      "purple",
      "orange",
      "grey",
      "pink",
      "black",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [startingColor, setStartingColor] = useState(randomColor());
  const [colorSelected, setColorSelected] = useState("");
  const [score, setScore] = useState(0);

  let colorElements = [];

  for (let index = 0; index < 40; index++) {
    colorElements.push(
      <Color
        color={randomColor()}
        setColorSelected={setColorSelected}
        colorSelected={colorSelected}
        startingColor={startingColor}
        score={score}
        setScore={setScore}
        setStartingColor={setStartingColor}
        randomColor={randomColor}
      />
    );

    console.log(colorElements);
  }
  return (
    <div className="App">
      <div className="findColor">
        <h1>{startingColor}</h1>
        <h1 style={{ color: "grey" }}>{score}</h1>
      </div>

      <div className="colorContainer">
        {colorElements.map((item) => {
          return item;
        })}
      </div>
    </div>
  );
}

export default App;

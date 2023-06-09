import { useState } from "react";
import pelak from "./img/car-plate-iran.jpg";

function App() {
  const Arr = [
    { id: 1, name: "A", color: "RED" },
    { id: 2, name: "B", color: "BLUE" },
    { id: 3, name: "C", color: "GREEN" },
    { id: 4, name: "D", color: "YELLOW" },
    { id: 5, name: "E", color: "BLACK" },
  ];
  const [color, setColor] = useState("");
  const [error, setError] = useState("");

  const changeColor = (e) => {
    const ch = e.target.value.charAt(2);
    console.log("Charcter", ch);
    const output = Arr.filter(function (data) {
      return data.name === ch;
    });

    const output2 = output.map(function (data) {
      return data.color;
    });
    console.log("first", output2);
    setColor(output2);
    console.log("color", color);
    setError(output2.length > 0 ? "" : "There is no such license plate");
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <img src={pelak} alt="پلاک  ایران " />
      <br />
      <h1>
        Check the car license plate using the character, change the background
        according to the character
      </h1>
      <br />
      <input
        name="inputName"
        id="inputID"
        onClick={changeColor}
        style={{
          lineHeight: 3,
          borderRadius: "10px",
          fontSize: "2em",
          width: "40%",
          padding: "10px",
          margin: "10px",
        }}
      />
      <br /> <br /> <br />
      <input
        placeholder=""
        value={color}
        style={{
          lineHeight: 3,

          borderRadius: "10px",
          fontSize: "2em",
          width: "40%",
          padding: "10px",
          backgroundColor: `${color}`,
          // color: "white",
          textAlign: "center",
        }}
      />
      <h1 style={{ color: "red" }}>{error} </h1>
    </div>
  );
}

export default App;

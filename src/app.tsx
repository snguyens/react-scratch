// src/index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      Hello{" "}
      <button
        onClick={() => setIsToggled(!isToggled)}
        style={{
          width: 100,
          height: 100,
          backgroundColor: isToggled ? "red" : "green",
        }}
      ></button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

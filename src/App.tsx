import { useState } from "react";

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

export default App;

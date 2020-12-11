import { FunctionComponent, useState } from "react";

const App: FunctionComponent = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsToggled(!isToggled)}
        style={{
          width: 100,
          height: 100,
          backgroundColor: isToggled ? "red" : "green",
        }}
      ></button>
    </>
  );
};

export default App;

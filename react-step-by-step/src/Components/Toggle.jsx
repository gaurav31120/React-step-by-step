import { useState } from "react";

const Toggle = () => {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <h1>Toggle in React js</h1>

      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display ? <>Gaurav</> : null}
    </>
  );
};

export default Toggle;

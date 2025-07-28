import { useState } from "react";

const ElseIfConditional = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Multiple conditions in react</h1>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Counter</button>

        {count == 0 ? (
          <h1>condition1</h1>
        ) : count == 1 ? (
          <h1>condition2</h1>
        ) : count == 2 ? (
          <h1>condition3</h1>
        ) : count == 3 ? (
          <h1>condition4</h1>
        ) : count == 4 ? (
          <h1>condition5</h1>
        ) : null}
      </div>
    </>
  );
};

export default ElseIfConditional;

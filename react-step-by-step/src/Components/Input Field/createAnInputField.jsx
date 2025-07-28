// 15 Create an Input Field

import { useState } from "react";

function InputField() {
  const [val, setVal] = useState("");

  return (
    <>
      <h1>Get Input Field value</h1>
      <input
        type="text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
        placeholder="Enter user name"
      />
      <h1>{val}</h1>
      <button onClick={() => setVal("")}>Clear val</button>
    </>
  );
}

export default InputField;

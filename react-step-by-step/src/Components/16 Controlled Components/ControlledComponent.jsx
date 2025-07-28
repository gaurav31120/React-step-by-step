// 16 Controlled Component

import { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <h1>Controlled Componenets</h1>
      {/* <form actions="" method="get"> */}
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter name"
      />
      <br />
      <br />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Enter password"
      />
      <br />
      <br />
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter email"
      />
      <br />
      <br />
      <button>Submit</button>

      <button
        onClick={() => {
          setEmail("");
          setPassword("");
          setName("");
        }}
      >
        Clear
      </button>
      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{email}</h3>
      {/* </form> */}
    </>
  );
}

export default ControlledComponent;

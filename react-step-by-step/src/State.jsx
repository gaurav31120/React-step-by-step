import { useState } from "react"; 
function State() {

    const [fruit, setFruit] = useState('Apple');
//   let fruit = "Apple";

  const handleFruit = () => {
    // fruit = "Banana";
    setFruit("Banana")
    console.log("fruit", fruit);
  };

  return (
    <div>
      <h1>State in React Js</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change fruit name</button>
    </div>
  );
}

export default State;

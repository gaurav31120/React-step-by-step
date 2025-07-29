import { useState } from "react";

function Skills() {
  const [skill, setSkill] = useState([]);
  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      //   setSkill(event.target.value)
      setSkill([...skill, event.target.value]);
    } else {
      setSkill([...skill.filter((item) => item != event.target.value)]);
    }
  };
  return (
    <>
      <h3>Select your skills</h3>
      {/* <h5></h5> */}
      <input type="checkbox" id="php" value="php" onChange={handleSkills} />
      <label htmlFor="php">PHP</label>
      <br />
      <br />

      <input type="checkbox" id="js" value="js" onChange={handleSkills} />
      <label htmlFor="js">JS</label>
      <br />
      <br />

      <input type="checkbox" id="node" value="node" onChange={handleSkills} />
      <label htmlFor="node">Node</label>
      <br />
      <br />

      <input type="checkbox" id="java" value="java" onChange={handleSkills} />
      <label htmlFor="java">Java</label>

      <h1>{skill}</h1>
    </>
  );
}

export default Skills;

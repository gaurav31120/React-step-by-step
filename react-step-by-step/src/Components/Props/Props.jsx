import { useState } from "react";
import College from "./College";
import Student from "./Student";
import UserComponent from "./UserComponent";

const Props = () => {
  //   let name = "Gaurav Kumar";
  //   let username = "gaurav123";
  //   let age = 26;
  //   let email = "gaurav@g.com";
  let userObject = {
    username: "gaurav123",
    age: 26,
    email: "gaurav@g.com",
  };
  let userObject2 = {
    username: "prince",
    age: 20,
    email: "prince@g.com",
  };
  let userObject3 = {
    username: "piyush",
    age: 22,
    email: "piyush@g.com",
  };

  let collegeName = ["IET", "DU", "IIT", "NIT"];

  const [student, setStudent] = useState("");
  return (
    <>
      <h1>Props</h1>

      {/* <UserComponent name={"Gaurav Kr"} age={26} email={"gaurav@g.com"} /> */}
      {/* <UserComponent name={username} age={age} email={email} /> */}
      {student && <Student name={student} />}
      <button onClick={() => setStudent("Isha")}>Update student</button>
      <College names={collegeName[0]} />
      <College names={collegeName[1]} />
      <College names={collegeName[2]} />
      <College names={collegeName[3]} />
      <UserComponent user={userObject} />
      <UserComponent user={userObject2} />
      <UserComponent user={userObject3} />
    </>
  );
};

export default Props;

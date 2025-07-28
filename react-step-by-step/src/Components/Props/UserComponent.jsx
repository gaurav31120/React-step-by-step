// 1st way tp call (import)  props:

// const UserComponent = (props) => {
//   console.log("props", props, props.name);
//   return (
//     <>
//       <div>User Component</div>
//       <h2>{props.name}</h2>
//     </>
//   );
// };

// 2nd way to call props:
// const UserComponent = ({name,age,email}) => {
//   console.log("props", name,age,email);
//   return (
//     <>
//       <div>User Component</div>
//       <h2>{name}</h2>
//       <h2>{age}</h2>
//       <h2>{email}</h2>
//     </>
//   );
// };

const UserComponent = ({ user }) => {
  console.log("props", user);
  return (
    <>
      {/* <div>User Component</div> */}
      <hr />
      <h4>{user.username}</h4>
      <h4>{user.age}</h4>
      <h4>{user.email}</h4>
    </>
  );
};

export default UserComponent;

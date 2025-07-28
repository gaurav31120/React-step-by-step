import ClickEvent from "./ClickEventAndFunctionCall";
import Counter from "./Components/Counter";
import Toggle from "./Components/Toggle";
import Header from "./Header";
import JsxInReact from "./JsxInReact";
import State from "./State";

function App() {
  // alert(sum())
//   const name = "Gaurav Kumar"
//   const userObj={
//     name:"Gaurav Kr",
//     email:"gaurav@test.com",
//     age: 26,
//   }
//   const userArray = ['Sam',"Peter",'Bruce']
//   let path =
// "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/10/1/HBFB1406_180126_dog-on-rug_041.jpg.rend.hgtvcom.616.822.suffix/1523383802334.jpeg";

//   let x=10
//   let y=20
//   function fruit() {
//     return "apple"
//   }
//   function sum(a,b) {
//     return a+b
//   }
//   function operation(a,b,op) {
//     if(op=="+"){
//       return a+b;
//     }
//     else if(op=="-") {
//       return a-b;

//     }
//     else {
//       return a*b;

//     }
//   }
  return (
    <>
    <div>
    {/* <h1>Jsx with curly braces</h1>
    <h1>{name?name:"user not found"}</h1>
    <h1>{x+y}</h1>
    <h1>{fruit()}</h1>
    <h1>{sum(10,100)}</h1>
    <h1>{operation(20,10,"+")}</h1>
    <h1>{operation(20,10,"-")}</h1>
    <h1>{operation(20,10,"*")}</h1>
    <h1>{userObj.name}</h1>
    <h1>{userObj.email}</h1>
    <h1>{userObj.age}</h1>
    <h1>{userArray[0]}</h1>
    <input type="test" value={name} />
    <br />
    <img src={path} /> */}
    {/* <ClickEvent/> */}
    {/* <State/> */}
    {/* <Counter/> */}
    <Toggle />
    </div>
    

       {/* <Header />
      // <h1>First Component {sum() }</h1>
      // <Fruit />
      // <JsxInReact /> */}
    </>
  );
}

// function Fruit() {  // This is a component

  
//   return (
//     <>
//     <h1>Apple</h1>
//     </>
//   )
// }

// function sum() {       // This is a function
//   return 10+10
// }

export default App;

// import './App.css'

// function App() {

//   return (
//     <>
//     <h1>React step by step</h1>
//     <h1>Hello React 19</h1>
//     </>
//   )
// }

// export default App

import Header from "./Header";
import JsxInReact from "./JsxInReact";

function App() {
  // alert(sum())
  return (
    <>
      <Header />
      <h1>First Component {sum() }</h1>
      <Fruit />
      <JsxInReact />
    </>
  );
}

function Fruit() {  // This is a component

  
  return (
    <>
    <h1>Apple</h1>
    </>
  )
}

function sum() {       // This is a function
  return 10+10
}

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

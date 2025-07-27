function ClickEvent() {
    function callFun() {                 // function defination
        alert("function caller")
    }

    const fruit=()=>{
        alert("apple")
    }

    const apple = (name) => {
        alert(name)

    }

    // callFun() //function calling

    return (
        <div>
            <h1>Event and function caller</h1>
            <button onClick={callFun}>Click me</button> 
            <button onClick={fruit}>Click me2</button> 
            <button onClick={() => apple('gaurav')}>apple</button> 
            {/* // put function definition not function calling */}
        </div>
    )
}

export default ClickEvent

// onClick={callFun} --> use this while no parameter
// onClick={() => apple('parameter'))} --> use this while having parameter
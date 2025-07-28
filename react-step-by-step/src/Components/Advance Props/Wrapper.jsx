function Wrapper({children}) {
  return (
    <>
      <div style={{ color: "green", border:"5px solid", width: "300px"}}>
        {/* <h1>Hello Wrapper</h1> */}
        {children}
      </div>
    </>
  );
}

export default Wrapper;

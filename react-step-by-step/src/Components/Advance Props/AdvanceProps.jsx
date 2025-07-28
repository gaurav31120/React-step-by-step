import User from "./User";
import Wrapper from "./Wrapper";

function AdvanceProps() {
  return (
    <>
      <div>
        <h1>Advance props</h1>
        <User name={"Gaurav"} />
        <User name={"Nidhi"} />
        <User name="priya" />
        <User />
        <Wrapper>
          <h1>Hello Wrapper</h1>
        </Wrapper>
        <Wrapper>
          <h1>Hello Gaurav</h1>
        </Wrapper>
      </div>
    </>
  );
}

export default AdvanceProps;

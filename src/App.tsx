import Navbar from "./components/Navbar";
import BoxOne from "./components/BoxOne";
import BoxTwo from "./components/BoxTwo";
import BoxThree from "./components/BoxThree";
import BoxFour from "./components/BoxFour";
import BoxFive from "./components/BoxFive";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 200px;
`;

function App() {
  return (
    <>
      <div>
        {/* <SmoothScroll> */}
        <Wrapper>
          <Navbar />
          <BoxOne />
          <BoxTwo />
          <BoxThree />
          <BoxFour />
          <BoxFive />
        </Wrapper>
        {/* </SmoothScroll> */}
      </div>
    </>
  );
}

export default App;

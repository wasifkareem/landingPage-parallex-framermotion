import Navbar from "./components/Navbar";
import BoxOne from "./components/BoxOne";
import BoxTwo from "./components/BoxTwo";
import BoxThree from "./components/BoxThree";
import BoxFour from "./components/BoxFour";
import BoxFive from "./components/BoxFive";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <>
      <div>
        <SmoothScroll>
          <Navbar />
          <BoxOne />
          <BoxTwo />
          <BoxThree />
          <BoxFour />
          <BoxFive />
        </SmoothScroll>
      </div>
    </>
  );
}

export default App;

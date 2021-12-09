import Rive from "rive-react";
import HamburgerTime from "./hamburger-time.riv";

function App() {
  return (
    <div>
      <Rive src={HamburgerTime} animations="Hamburger to X"/>
    </div>
  );
}

export default App;

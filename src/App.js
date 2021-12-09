import { useRive } from "rive-react";

function App() {
  const { rive, RiveComponent } = useRive({
    src: "hamburger-time.riv",
    animations: "Hamburger to X",
    autoplay: false,
  });

  return (
    <div>
      <RiveComponent onMouseOver={() => rive.play()} />
    </div>
  );
}

export default App;

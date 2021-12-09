import { useRive } from "rive-react";

function App() {
  const { rive, RiveComponent } = useRive({
    src: "hamburger-time.riv",
    animations: "Hamburger to X",
    autoplay: true,
  });

  return (
    <div>
      <RiveComponent/>
    </div>
  );
}

export default App;

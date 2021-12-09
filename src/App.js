import { useRive, useStateMachineInput } from "rive-react";

function App() {
  const STATE_MACHINE_NAME = "Basic State Machine";
  const INPUT_NAME = "Switch";

  const { rive, RiveComponent } = useRive({
    src: "hamburger-time.riv",
    stateMachines:STATE_MACHINE_NAME,
    autoplay: true,
  });
  
  //state machine check 
  // if (rive) {
  //   console.log(rive.contents);
  // }
  
  const onClickInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME
  )

  return (
    <div>
      <RiveComponent onClick={()=> onClickInput.fire()}/>
    </div>
  );
}

export default App;

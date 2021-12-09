import { useRive, useStateMachineInput } from "rive-react";

export default function RiveHamburger() {
  const STATE_MACHINE_NAME = "Basic State Machine";
  const INPUT_NAME = "Switch";

  const { rive, RiveComponent } = useRive({
    src: "hamburger-time.riv",
    stateMachines:STATE_MACHINE_NAME,
    autoplay: true,
  });
    
  const onClickInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME
  )

  return <RiveComponent onClick={()=> onClickInput.fire()}/>;

}
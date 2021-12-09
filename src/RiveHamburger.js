import { useRive, useStateMachineInput } from "rive-react";
import "./RiveHamburger.css"
export default function RiveHamburger({className}) {
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

  return <RiveComponent className={className} onClick={()=> onClickInput.fire()}/>;

}
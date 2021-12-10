## Rive  
Rive는 애니메이션을 디자인하고 추출 가능하도록 만듭니다.  
플랫폼 독립적이므로 한 번 만들어서 웹,앱,게임 등 여러 플랫폼에서 사용합니다.  

[공식 홈페이지](https://rive.app/)  
[React x Rive Tutorial 영상](https://www.youtube.com/watch?v=5hvhOb9zLeg)  

## 준비물  
- vscode에서 vscode-rive-viewer 플러그인을 설치  
- [햄버거 버튼 소스](https://rive.app/community/961-2031-hamburger-time/) 다운로드  

## 목표  
![example](https://user-images.githubusercontent.com/48556400/145498631-61affe44-8c04-405d-bbef-816907110b12.gif)   
CRA로 만든 리액트 프로젝트에 햄버거 버튼을 적용시켜봅시다.  
추가로 컴포넌트로 만들어서 props를 적용하고, className를 전달하여 스타일 바인딩을 합니다.  

## 컴포넌트 코드 
```
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
```

## 자세한 개발과정
은 [블로그 링크](https://rita.oopy.io/dev/rive)로 대신합니다.  

import { useState } from "react";
import cssModules from "../ToggleSwitch/ToggleSwitch.module.css";
import { IoIosSwitch } from "react-icons/io";

/* Notes:-
  1. React Icons for icons imahe from multiple sources(Font Awesome icons, Material UI icons,etc) at one place
    To access icons first need to install using terminal cmd
    eg bun install react-icons
    
    Then import where need to show icon
    eg import { IconComponentName } from "react-icons/io";

    Use icon component where specific icon in required within component
    <IconComponentName style={{color:"blue"}}/>
      
*/

export const ToggleSwitch = () => {
  const [toggleSwitchState, setToggleSwitchState] = useState(false);

  function handleToggleSwitch() {
    setToggleSwitchState(!toggleSwitchState);
  }

  return (
    <div className={cssModules.body}>
      <h1 className="text-3xl font-bold underline">
        Toggle Switch
        <IoIosSwitch
          style={{ color: "green", fontSize: "25px", display: "inline-block" }}
        />
      </h1>
      <div
        className={cssModules["toggle-switch"]}
        style={{ backgroundColor: toggleSwitchState ? "green" : "red" }}
        onClick={handleToggleSwitch}
      >
        <div
          className={`${cssModules["switch"]} 
            ${toggleSwitchState ? cssModules["on"] : cssModules["off"]}
          `}
        >
          {toggleSwitchState ? "ON" : "OFF"}
        </div>
      </div>
    </div>
  );
};

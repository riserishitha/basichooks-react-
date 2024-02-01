import { useContext, useState } from "react";
import { theam } from "../App";
function Task() {
    const [initial, setInitial] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const bg=useContext(theam)
    const themeStyle = {
        backgroundColor: bg?"grey":"black",
        color:bg?"black":"grey",
        padding:"2rem",
        margin:"2rem"
      }
    const start = () => {
        setInitial(initial + 1);
    };
    const showAlert = () => {
        if (displayText !== "") {
            setDisplayText("");
        } else {
            alert("Context button clicked");
            setDisplayText("He hid under the covers hoping that nobody would notice him there. It really didn't make much sense since it would be obvious to anyone who walked into the room there was someone hiding there, but he still held out hope. He heard footsteps coming down the hall and stop in front in front of the bedroom door He heard the squeak of the door hinges and someone opened the bedroom door. He held his breath waiting never did. for whoever was about to discover him, but they never did.");
        }
    };
    return (
        <div style={themeStyle} >
            <div>
            <p>{displayText}</p>
                <button onClick={showAlert}>Context</button>
            </div>
            <div>
                <span>{initial}</span>
            </div>
            <div>
                <button onClick={start}>Like</button>
            </div>
        </div>
    );
}
export default Task;

Task.js


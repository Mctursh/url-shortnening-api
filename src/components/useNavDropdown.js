import React from "react";
import { useState } from "react"
import Button from "./Button"

const DropDown = ({ initialState }) => {
    const [clickedState, setClickedState] = useState(initialState)
    const [displayState, setDisplayState] = useState(initialState)

    const changeState = () => {
        setClickedState((prev) => !prev)
        setDisplayState(true)
    }

    const Dropdown = () => {
        return (
            <div className={displayState ? "zero" : "none"}>
                <div className={clickedState ?  "" : "nav-dropdown animate__animated animate__slideOutUp"}>      
                    <div className={clickedState ? "nav-dropdown animate__animated animate__slideInDown" : ""}>
                    <ul>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                        <hr/>
                        <li>Login</li>
                        <li id="nav-dropdown-btn"><Button value="Sign Up" style="round-edge"/></li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
    return [Dropdown, changeState, setDisplayState]
}


export default DropDown;
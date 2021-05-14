import React from "react"
import Logo from "./Svg/Logo"
import Button from "./Button"

const TopBar = ({ changeState, width, clickedState }) => {
    return (
        <div className="nav-container">
        <h1 className="flex">
          <a className="flex" href="#"><Logo fill="#34313D" /></a>
        </h1>
        <div className="nav-item-container">
          <div className="nav-container-l">          
          <h6>
            <a href="#">Features</a>
          </h6>
          <h6>
            <a href="#">Pricing</a>
          </h6>
          <h6>
            <a href="#">Resources</a>
          </h6>
        </div>
        <div className="nav-container-r">
          <h6>
            <a href="#">Login</a>
          </h6>
          <Button value="Sign Up" style="round-edge" anchorStyle="small"/>
        </div>        
        </div>
        <Button value={clickedState ? <i class="fas fa-times"></i> :"☰"} changeState={changeState} style={width < 601 ? "nav-btn" : "none"} />
      </div>
    )
}

export default TopBar;
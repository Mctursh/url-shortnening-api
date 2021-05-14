import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import useNavDropDown from "./useNavDropdown"

const NavBar = () => {

  const [width, setWidth] = useState(window.innerWidth)
  const [DropDown, changeState, setDisplayState, clickedState] = useNavDropDown(false)

  useEffect(() => {
    window.addEventListener("resize", function(e) {
      setWidth(e.currentTarget.innerWidth);
      setDisplayState(false)
    })
    return () => {
      window.removeEventListener("resize", function() {
        setDisplayState(true)
      })
    }
  }, [width])

  

  return (
    <nav className="app">
      <TopBar clickedState={clickedState}  width={width} changeState={changeState} />
      {width < 601 ? <DropDown /> : ""}          
    </nav>    
  );
};

export default NavBar;

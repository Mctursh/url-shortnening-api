import React from "react"
import Button from "./Button"
import { IllustrationWorking } from "./Svg/Logo"

const Header = () => {
    return (
        <div className="header-container flex app">
            <div className="header-content"> 
                <h1>More than just shorter links</h1>
                <p>build your brand's recognition and get detailed insight on how your links are performing</p>
                <Button value="Get Started" style="round-edge" />
            </div>
            <IllustrationWorking className="header-svg" />
        </div>
    )
}

export default Header
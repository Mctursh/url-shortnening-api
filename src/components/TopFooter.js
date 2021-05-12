import React from "react"
import Button from "./Button"

const TopFooter = () => {
    return (
        <div className="top-footer-parent">
            <div className="boost">
                <h1>Boost you links today</h1>
                <Button value="Get Started" style="round-edge" />
            </div>                
        </div>
    )
}

export default TopFooter;
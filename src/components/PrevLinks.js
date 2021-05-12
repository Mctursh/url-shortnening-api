import React, { useState } from "react"
import Button from "./Button"

const PrevLink = ({ original, shortened }) =>{

    

    const [CopyStatus, setCopyStatus] = useState("Copy")
    
    const handleChange = () => {
        try {
            navigator.clipboard.writeText(shortened)
            setCopyStatus("Copied!")
        } catch (error) {
            setCopyStatus("Again")
        }
    }
    return(
        <div className="flex spc-btw">
            <p><a href="">{original}</a></p>
            <div className="flex alg-cnt">
                <p><a href="">{shortened}</a></p>
                <Button changeState={handleChange} value={CopyStatus} style={CopyStatus == "Copied!" ? "square-edge small-edge dark-blue" : "square-edge small-edge"} anchorStyle="small-square"/>
            </div>
        </div>
    )    
}

export default PrevLink;
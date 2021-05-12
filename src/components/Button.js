import React from "react"

const Button = ({ anchorStyle ,value, style, changeState }) => {
    return(
        <button onClick={(e) => {
            e.preventDefault()
            changeState()
            }} className={style}>
           <a  className={anchorStyle} href="#">{value}</a>
         </button>
    )
}

export default Button;
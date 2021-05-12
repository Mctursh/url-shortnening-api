import React, { useState, useEffect } from "react"
import Button from "./Button"
import PrevLink from "./PrevLinks"
import { useCookies } from 'react-cookie';

const FormInput = () => {
    const [LinkValue, setLinkValue] = useState("")
    const [IsPresent, setIsPresent] = useState(false)
    const [Clicked, setClicked] = useState(false)
    const [Shortened, setShortened] = useState([])
    const [ Cookies, setCookie ] = useCookies(["short"])

    const handleChange = (e) => {
        setLinkValue(() => {
            if (e.target.value.length > 0) {
                setClicked(true)
                setIsPresent(false)
            } else if(e.target.value.length === 0) {
                setClicked(false)
            }            
            return e.target.value
        })    
    }

    async function shortenLink() {        
        if (Clicked) {
            setIsPresent(false)
            const raw = await fetch(`https://api.shrtco.de/v2/shorten?url=${LinkValue}`)
            const res = await raw.json();
            const {result : { code, short_link, original_link }} = res
            setShortened((prev) => {
                const newList = [...prev]
                newList.unshift({ code, short_link, original_link})
                setCookie('short', { history: [...newList] } , { path: '/', maxAge: 2592000 })                
                return newList
            })
        } else {
            setIsPresent(true)
        }    
    }

    useEffect(() => {
        {Cookies.short && setShortened(Cookies.short.history)}
    }, [])

    return (
        <div className="mid-section-container">
            <form className="query-form" data-no-link-input={IsPresent ? "Please add a link" : ""}>
                <input id={IsPresent ? "no-link-input" : ""}  onChange={handleChange} value={LinkValue} type="text" placeholder="Shorten a link here..." />
                <Button value="Shorten it!" style="square-edge" changeState={shortenLink} anchorStyle="small-square"/>
            </form>    
            <div className="history-list">
                {Shortened.length > 0 && Shortened.map(({ code, short_link, original_link }) => <PrevLink key={code} shortened={short_link} original={original_link} />)}
            </div>            
        </div>    
    )
}

export default FormInput
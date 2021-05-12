import React, { useState } from "react"
import Logo, { IconFacebook, IconInstagram, IconPinterest, IconTwitter } from "./Svg/Logo"

const BottomFooter = () => {
    const [SocialHover, setSocialHover] = useState({
        fb: false,
        tw: false,
        pin: false,
        ig: false
    })

    const handleHover = (icon) => {
        setSocialHover(({ fb, tw, pin,ig }) => {
            return (
                {
                    fb: "fb" == icon ? !fb : fb,
                    tw: "tw" == icon ? !tw: tw,
                    pin: "pin" == icon ? !pin: pin,
                    ig: "ig" == icon ? !ig: ig
                }
            )
        })
    }
    return(
        <div className="flex spc-btw bottom-footer-parent">
            <div className="footer-logo">
                <a href="#"><Logo fill="#fff" /></a>
            </div>
            <div className="services">
                <div className="flex features">
                    <h3><a href="#">Features</a></h3>
                    <p><a href="#">Link Shortening</a></p>
                    <p><a href="#">Branded Links</a></p>
                    <p><a href="#">Analytics</a></p>
                </div>
                <div className="flex resources">
                    <h3><a href="#">Resources</a></h3>
                    <p><a href="#">Blog</a></p>
                    <p><a href="#">Developers</a></p>
                    <p><a href="#">Support</a></p>
                </div>
                <div className="flex company">
                    <h3><a href="#">Company</a></h3>
                    <p><a href="#">About</a></p>
                    <p><a href="#">Our Team</a></p>
                    <p><a href="#">Careers</a></p>
                    <p><a href="#">Contact</a></p>
                </div>
            </div>
            <div className="social">
                <a onMouseOut={() => {handleHover("fb")}}  onMouseOver={() => {handleHover("fb")}} href="#"><IconFacebook fill={SocialHover.fb ? "hsl(180, 66%, 49%)" : "#fff"}  /></a>
                <a onMouseOut={() => {handleHover("tw")}} onMouseOver={() => {handleHover("tw")}} href="#"><IconTwitter fill={SocialHover.tw ? "hsl(180, 66%, 49%)" : "#fff"} /></a>
                <a onMouseOut={() => {handleHover("pin")}} onMouseOver={() => {handleHover("pin")}} href="#"><IconPinterest fill={SocialHover.pin ? "hsl(180, 66%, 49%)" : "#fff"} /></a>
                <a onMouseOut={() => {handleHover("ig")}} onMouseOver={() => {handleHover("ig")}} href="#"><IconInstagram fill={SocialHover.ig ? "hsl(180, 66%, 49%)" : "#fff"} /></a>
            </div>
        </div>
    )
}

export default BottomFooter
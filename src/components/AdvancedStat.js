import React from "react"
import { IconBrandingRecognition, IconDetailedRecords, IconFullyCustomizable } from "./Svg/Logo"

const AdvancedStat = () => {
    return (
        <div className="flex alg-cnt cnt advanced">
            <div className="flex alg-cnt  advanced-header">
                <h1 className="zero-marg">Advanced Statistics</h1>
                <p className="zero-marg">Track how your links are performing across the web with our advanced statistic board</p>
            </div>
            
            <div className="flex spc-btw stats-info">
                <hr />
                <div className="prnt-brand">
                    <div className="brand-recog">
                        <div id="svg"><IconBrandingRecognition viewBox="-10 0 60 40" /></div>
                        <h2>Brand Recognition</h2>
                        <p>Boost your recognition with each click. Generic links don't mean a thing. Branded links helps instil confidence in your content.</p>
                    </div>
                </div>
                
                <div className="flex prnt-detail">
                    <div className="detailed-rec">
                        <div id="svg"><IconDetailedRecords viewBox="-10 0 60 40" /></div>
                        <h2>Detailed Records</h2>
                        <p>Gain insight into who is clicking your link. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                </div>
                
                <div className="flex prnt-custom">
                    <div className="fully-cus">
                        <div id="svg"><IconFullyCustomizable viewBox="-5 0 60 40" /></div>
                        <h2>Fully customizable</h2>
                        <p>Improve brand awareness and content discoverability through customizable links.supercharging audience engagement.</p>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default AdvancedStat;
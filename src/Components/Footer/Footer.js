import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <div className="joiningInfo">
                <div className="aquaLogo"><img src={require(`../../Images/icon.png`).default} style={{width:"430px",height:"150px"}}/></div>
                <h2>Stay Connected!</h2>
                <h5>Follow Us</h5>
                <div></div>
            </div>
            <div className="productsInfoSupport"></div>
        </div>
    )
}

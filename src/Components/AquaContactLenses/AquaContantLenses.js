import React from 'react';
import "./AquaContactLenses.css";
import {Button} from "react-bootstrap";

export default function AquaContantLenses() {
    const aqualensFeatures = ["High Quality Product","Maximum Comfort","Value Of Money"]
    return (
        <div className="aquaClearLenses">
            <h2 className="aquaClearLensesHeading">Aqualens Contact Lenses</h2>
            <h5 className="aquaClearLensesSubHeading">Nothing  But  The  Best  For  Your Eyes</h5>
            <div className="aquaLensFeatures">
                {aqualensFeatures.map((feature,index)=>(
                    <div style={{marginTop:"5px"}}>
                        <div className="featureImage"><img src={require(`../../Images/feature${index}.png`).default}/></div>
                        <div className="featureTitle">{feature}</div>
                    </div>
                ))}
            </div>
            <h2 className="clearLensesHeading">Clear Lenses</h2>
            <h5 className="clearLensesSubHeading">Goodbye Bulky Glasses, Hello Comfy Lenses</h5>
            <div className="productContainer">
                <div className="productContent">
                    <a href="#">
                        <div className="productHeader"><h3>Dailies</h3></div>
                        <div className="productDesc"><p>New Clean Lenses Everyday<br/>Perfect For Part-Time Lens Wearers<br/>3 Variants Available</p></div>
                        <div className="productImg"><img src={require(`../../Images/dailies.png`).default}/></div>
                        <div className="productInfo"><p>Daily Lenses<br/><span>Starting from Rs. 199</span></p></div>
                    </a>
                </div>
                <div className="productContent">
                    <a href="#">
                        <div className="productHeader"><h3>Monthly</h3></div>
                        <div className="productDesc"><p>Better Suited For Sensitive Eyes<br/>Environmently & Travel Friendly<br/>2 Variants Available</p></div>
                        <div className="productImg"><img src={require(`../../Images/monthly.png`).default}/></div>
                        <div className="productInfo"><p>Monthly Lenses<br/><span>Starting from Rs. 699</span></p></div>
                    </a>
                </div>
            </div>
            <Button style={{background:"#00bac6",border:"none",margin:"15px",width:"25%",fontFamily: "Poppins",fontSize:"16px"}} size="lg" active>
                View All Clear Lenses
            </Button>
        </div>
    )
}

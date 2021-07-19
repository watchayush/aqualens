import React from 'react'
import "./ToricLenses.css";
import {Button} from "react-bootstrap";

export default function ToricLenses() {
    const toricLensesFeatures = ["4x Oxygen Highly Breathable","High Water Content"]
    return (
        <div className="toricLensesContainer">
            <div className="toricLensesFeatures">
                {toricLensesFeatures.map((feature,index)=>(
                    <div style={{marginTop:"5px",marginInline:"5px",width:"70%"}}>
                        <div className="toricLensesFeatureImage"><img src={require(`../../Images/toricFeature${index}.png`).default}/></div>
                        <div className="toricLensesFeatureTitle">{feature}</div>
                    </div>
                ))}
            </div>
            <div className="toricLensesSubContainer">
                <div className="toricLenses">
                    <a href="#">
                        <div className="toricLensesHeader"><h3>Ocassional User</h3></div>
                        <div className="toricLensesImg"><img src={require(`../../Images/dailyToric.png`).default}/></div>
                        <div className="toricLensesInfo"><p>24H Daily Toric Lenses<br/><span>1 Lens / 1 Day use</span></p></div>
                        <div className="toricLensesPrice"><p>Rs. 1699 <span>Rs. 2405</span></p></div>
                        <div className="toricLensessBtn"><div className="topSellersBtnText">View Details</div></div>
                    </a>
                </div>
                <div className="toricLenses">
                    <a href="#">
                        <div className="toricLensesHeader"><h3>Regular User</h3></div>
                        <div className="toricLensesImg"><img src={require(`../../Images/monthlyToric.png`).default}/></div>
                        <div className="toricLensesInfo"><p>24H Monthly Toric Lenses<br/><span>1 Lens / 30 Day use</span></p></div>
                        <div className="toricLensesPrice"><p>Rs. 999 <span>Rs. 1100</span></p></div>
                        <div className="toricLensessBtn"><div className="topSellersBtnText">View Details</div></div>
                    </a>
                </div>
            </div>
            <div className="toricLensesSubHeading">
                <p>
                Ditch those glasses for our comfy toric lenses
                <br/>
                made from Silicone Hydrogel
                </p>
            </div>
            <Button style={{background:"#00bac6",border:"none",margin:"10px",width:"60%",fontFamily: "Poppins",fontSize:"16px"}} size="lg" active>
                View All Toric Lenses
            </Button>
        </div>
    )
}

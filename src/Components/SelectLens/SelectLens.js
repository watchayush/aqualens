import React,{useState} from 'react';
import "./SelectLens.css";
import TurquiseEyes from "../../Images/turquiseEyes.jpg";
import GrayEyes from "../../Images/grayEyes.jpg";
import GreenEyes from "../../Images/greenEyes.jpg";
import BlueEyes from "../../Images/blueEyes.jpg";
import NbrownEyes from "../../Images/NbrownEyes.jpg";
import DbrownEyes from "../../Images/DbrownEyes.jpg";
import {Button} from "react-bootstrap";

// const image1 = "../../Images/turquiseEyes.jpg";
export default function SelectLens() {
    var [background, setbackground] = useState(TurquiseEyes)
    const colouredLens = ["Tricky Torquoise","Sincere Gray","Envy Green","Icy Blue","Naughty Brown","Dusky Brown"];

    const handleClick = (lensColorSelected) =>{
        const selectedLensView = document.getElementById("selectedLensView");
        console.log("lensselected ",lensColorSelected);
        switch(lensColorSelected){
            case 0:setbackground(TurquiseEyes);
                    break;
            case 1:setbackground(GrayEyes);
                    break;
            case 2:setbackground(GreenEyes);
                    break;
            case 3:setbackground(BlueEyes);
                    break;
            case 4:setbackground(NbrownEyes);
                    break;
            case 5:setbackground(DbrownEyes);
                    break;
            default:break;
        }
        console.log(selectedLensView.style);

    }
    return (
        <>
            <div id="selectedLensView" style={{ backgroundImage: `url(${background})`,backgroundSize:"cover",backgroundPosition:"50% 50%" }}></div>
            <div className="colorVarities">
                <p>
                    Select From 40+ Colors<br/>
                    <span>Color Lenses Starting from Rs. 120</span>
                </p>
            </div>
            <div className="selectedLens">
                <div className="selectedLensTitle">Popular Colors</div>
                <div className="colouredLenses">
                    <div className="colouredLensesRow">
                        <div className="colouredLensesColumn" onClick={()=>handleClick(0)}>
                            <img src={require("../../Images/turquise.png").default}/>
                            <span>{colouredLens[0]}</span>
                        </div>
                        <div className="colouredLensesColumn" onClick={()=>handleClick(1)}>
                            <img src={require("../../Images/gray.png").default}/>
                            <span>{colouredLens[1]}</span>
                        </div>
                    </div>
                    <div className="colouredLensesRow">
                        <div className="colouredLensesColumn" onClick={()=>handleClick(2)}>
                            <img src={require("../../Images/green.png").default}/>
                            <span>{colouredLens[2]}</span>
                        </div>
                        <div className="colouredLensesColumn" onClick={()=>handleClick(3)}>
                            <img src={require("../../Images/blue.png").default}/>
                            <span>{colouredLens[3]}</span>
                        </div>
                    </div>
                    <div className="colouredLensesRow">
                        <div className="colouredLensesColumn" onClick={()=>handleClick(4)}>
                            <img src={require("../../Images/Nbrown.png").default}/>
                            <span>{colouredLens[4]}</span>
                        </div>
                        <div className="colouredLensesColumn" onClick={()=>handleClick(5)}>
                            <img src={require("../../Images/Dbrown.png").default}/>
                            <span>{colouredLens[5]}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="colorLensesSubHeading2">Top Sellers</div>
            <div className="topSellersContainer">
                <div className="topSellers">
                    <a href="#">
                        <div className="topSellersHeader"><h3>Available In 8 Colors</h3></div>
                        <div className="topSellersImg"><img src={require(`../../Images/candyPack.png`).default}/></div>
                        <div className="topSellersInfo"><p>Zero Power - Candy Pack<br/><span>1 Lens / 1 Day use</span></p></div>
                        <div className="topSellersPrice"><p>Rs. 120 <span>Rs. 200</span></p></div>
                        <div className="topSellersBtn"><div className="topSellersBtnText">View Details</div></div>
                    </a>
                </div>
                <div className="topSellers">
                    <a href="#">
                        <div className="topSellersHeader"><h3>Available In 10 Colors</h3></div>
                        <div className="topSellersImg"><img src={require(`../../Images/monthlyPack.png`).default}/></div>
                        <div className="topSellersInfo"><p>With Power - Monthly Pack<br/><span>1 Lens / 30 Day use</span></p></div>
                        <div className="topSellersPrice"><p>Rs. 299 <span>Rs. 450</span></p></div>
                        <div className="topSellersBtn"><div className="topSellersBtnText">View Details</div></div>
                    </a>
                </div>
            </div>
            <Button style={{background:"#00bac6",border:"none",margin:"10px",width:"50%",fontFamily: "Poppins",fontSize:"16px"}} size="lg" active>
                View All Color Lenses
            </Button>
        </>
    )
}

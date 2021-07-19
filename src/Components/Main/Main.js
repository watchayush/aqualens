import React from 'react';
import CarouselView from "./CarouselView.js";
import "./Main.css";
import LensCategory from '../LensCategory/LensCategory.js';
import SolutionContent from '../SolutionContent/SolutionContent.js';
import AquaContantLenses from '../AquaContactLenses/AquaContantLenses.js';
import SelectLens from '../SelectLens/SelectLens.js';
import ToricLenses from "../ToricLenses/ToricLenses.js";
import {Button} from "react-bootstrap";


export default function Main() {
    const lenses = ["Clear Lenses","Color Lenses","Toric Lenses"];
    const solutions = ["Solutions","Lens Cases"];
    const solAcc = ["Lens Solutions","Lens Accessories"];
    return (
        <div className="main">
            <section>
                <CarouselView/>
            </section>
            <section className="categoryContentSection">
                <div className="categoryContentLenses">{lenses.map((lens,index)=><LensCategory lens={lens} lenscategory={require(`../../Images/lenscategory${index}.png`).default}/>)}</div>
                <div className="categoryContentSolutions">{solutions.map((sol,index)=><SolutionContent solution={sol} contentSol={require(`../../Images/contentSol${index}.png`).default}/>)}</div>
                <div className="categoryContentSolutions2"><div className="categoryContentImage"><img src={require(`../../Images/contentSol0.png`).default} style={{width:"200px",height:"200px"}}/></div></div>
            </section>
            <section className="aquaClearLensesSection">
                <AquaContantLenses/>
            </section>
            <section className="colorLensesSection">
                <h2 className="colorLensesHeading">Color Lenses</h2>
                <h5 className="colorLensesSubHeading">Find The Perfect Color For Every Occasion</h5>
                <div className="colorLensesSelect"><SelectLens/></div>
            </section>
            <section className="toricLensesSection">
                <h2 className="toricLensesHeading">Toric Lenses</h2>
                <h5 className="toricLensesSubHeading">Cylindrical Power? We've Got You!</h5>
                <div className="toricLensesSelect"><ToricLenses/></div>
            </section>
            <section className="administrativeSection
            ">
                <div className="fda"><img src={require(`../../Images/fda.png`).default} style={{width:"430px",height:"150px"}}/></div>
                <div className="checkPower">
                    <a href="#">
                        <h4>Check Your Power</h4><h5>Provide your eye glasses power and we will tell you your contact lens power.</h5>
                        <div className="fdaPowerBtn"><div className="fdaPowerText">Check Now</div></div>
                    </a>
                </div>
                <div className="solutionAndAccessories">
                    {solAcc.map((sa,index)=>(
                        <a href="#">
                            <div className="solAccContainer">
                                <div className="solAccImage"><img src={require(`../../Images/solAccImage${index}.png`).default}/></div>
                                <div className="solAccDetails">
                                    <h4>{sa}</h4>
                                    <h5>Starting at Rs. 123</h5>
                                    <Button className="viewProducts">View Products</Button>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
            {/* <section className="videoGallerySection">
                <h2>Video Gallery</h2>
                <div className="videos">
                    <div className="currentVideo">
                        <video width="320" height="240" controls>
                            <source src="movie.mp4" type="video/mp4"/>
                            <source src="movie.ogg" type="video/ogg"/>
                        </video>
                    </div>
                    <div className="videoList"></div>
                </div>
            </section> */}
        </div>
    )
}

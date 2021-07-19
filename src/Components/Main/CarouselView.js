import React from 'react'
import {Carousel,Button} from "react-bootstrap";
import "./Main.css";

export default function CarouselView() {
    return (
        <div>
            <Carousel style={{zIndex:"-1"}}>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={require("../../Images/carousel1.png").default}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <Button className="carouselExploreBtn" size="lg" style={{color:"white",backgroundColor:"#face48",border:"none"}}>Explore Color Lenses</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={require("../../Images/carousel2.png").default}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

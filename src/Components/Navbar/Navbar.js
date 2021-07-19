import React from 'react';
import "./Navbar.css";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Navbar() {
    const navlinksTitle = ["START YOUR TRIAL", "COLOR LENSES", "CLEAR LENSES", "TORIC", "SOLUTION", "LENS CASES"];
    const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
    const navLinksMenu = document.getElementsByClassName("navlinks")[0];

    // toggleBtn.addEventListener('click',()=>{
    //     navLinks.classList.toggle('active');
    // })
    const toggle = () =>{
        console.log(navLinksMenu);
        if(navLinksMenu)
            navLinksMenu.classList.toggle('active');
    }
    return (
        <nav className="navbar">
            <div className="navicon"><img src={require("../../Images/icon.png").default} height="100%" width="100%"/></div>
            <a className="toggle-btn" href="#" onClick={toggle}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </a>
            <ul className="navlinks">
                {navlinksTitle.map(link=><li><a href="#">{link}</a></li>)}
                <li><a href="#">LOGIN<ExitToAppIcon style={{ fontSize: "14px"}}/></a></li>
                <li><a href="#">CART<ShoppingCartIcon style={{ fontSize: "14px"}}/></a></li>
            </ul>
        </nav>
    )
}

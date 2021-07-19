import React from 'react';
import "./LensCategory.css";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

export default function LensCategory({lens,lenscategory}) {
    return (
        <div className="categoryContentCard">
            <div className="categoryContentImage"><img src={lenscategory} style={{width:"200px",height:"200px"}}/></div>
            <div className="categoryContentName"><h4 style={{width:"40%"}}>{lens}</h4><div className="arrowForward"><ArrowForwardIosRoundedIcon style={{backgroundColor:"white",borderRadius:"50%",padding:"5px",color:"#3069B3"}}/></div></div>
        </div>
    )
}

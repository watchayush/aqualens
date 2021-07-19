import React from 'react'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import "./SolutionContent.css";

export default function SolutionContent({solution,contentSol}) {
    return (
        <div className="solutionContentCard">
            <div className="solutionContentImage"><img src={contentSol} style={{width:"70px",height:"100px"}}/></div>
            <div className="solutionContentName"><h4 style={{width:"40%"}}>{solution}</h4><ArrowForwardIosRoundedIcon style={{backgroundColor:"white",borderRadius:"50%",padding:"5px",color:"#3069B3"}}/></div>
        </div>
    )
}

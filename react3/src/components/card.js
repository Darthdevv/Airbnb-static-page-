import React from "react";





function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.openSpots !== 0) {
        badgeText = "ONLINE";
    }



    return (
        <div className="card">
            <div className="card-badge" style={{ display: props.openSpots === 0 || props.location==="Online"? "block" : "none" }}>{badgeText}</div>
            <img className="img" src={`/images/${ props.coverImg }`} alt='swimmer'></img>
            <div className="fix">
            <img className="icon" src={`/images/${props.icon}`} alt='star'></img>
                <span><span className="num">{ props.stats.rating} </span><span className="grey"> ({  props.stats.reviewCount})</span><span className="grey"> {props.location}</span></span>
            </div>
            <p className="card-title">{ props.title}</p>
            <span className="span"><span className="bold">From ${ props.price}</span> / person</span>
        </div>
    )
}


export default Card;


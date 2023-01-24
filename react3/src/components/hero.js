import React from "react";


function Hero(props) {
    return (
        <>
        <section>
            <div className="hero">
                    <img className="image" src={`/images/${ props.img }`} alt='groupimage'></img>
            </div>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by<br></br> one-of-a-kind hosts—all without leaving<br></br> home.</p>
        </section>
        </>
)
}

export default Hero;
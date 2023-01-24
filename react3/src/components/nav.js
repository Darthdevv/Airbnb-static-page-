import React from "react";
import Hero from "./hero";
import Card from "./card";
import Data from "./data";


function Navbar(props) {
    return (
        <nav className="navbar">
            <img className="logo" src={`/images/${props.img}`} alt='airbnb'></img>
        </nav>
    )  
}






function Page() {
    const dataElements = Data.map(data => {
        return <Card {...data} />
    })
    return (
        <>
            <Navbar
                img='airbnb 1.png'
            />
            <Hero
                img="Group 77.png"
            />
            <section className="cards-list">
            {dataElements}
            </section>
        </>
    )
}


export default Page;
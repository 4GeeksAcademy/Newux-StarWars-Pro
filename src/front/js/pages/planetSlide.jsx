import React, { useState, useEffect, useContext } from "react";
import PlanetCard from '../component/planetCard.jsx'
import { Context } from "../store/appContext";
import '/workspaces/Newux-StarWars-Pro/src/front/styles/characterSlide.css'


const PlanetSlide = () => {
    const {store, actions} = useContext(Context)
    return (
        <div className="container d-flex flex-column mb-3">
            <div className="heading-1 p-2">
                <h3>Planets</h3>
            </div>
            <div className="card-row1 p-2 gap-5 d-flex overflow-auto w-auto">
                {store.planets.map((Planets,index)=>{
                    return <PlanetCard key={index} index={index} planet={Planets}/>
                })}
            </div>
        </div>
    )
}

export default PlanetSlide;


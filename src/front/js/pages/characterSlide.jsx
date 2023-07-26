import React, { useState, useEffect, useContext } from "react";
import CharacterCard from '../component/characterCard.jsx'
import { Context } from "../store/appContext";
import '/workspaces/Newux-StarWars-Pro/src/front/styles/characterSlide.css'



const CharacterSlide = () => {
    const {store, actions} = useContext(Context)

    return (
        <div className="container d-flex flex-column mb-3">
            <div className="heading-1 p-2">
                <h3>Characters</h3>
            </div>
            <div className="card-row1 p-2 gap-5 d-flex overflow-auto w-auto">
                {store.people.map((character,index)=>{
                    return <CharacterCard key={index} index={index} character={character}/>
                })}
            </div>
        </div>
    )
}

export default CharacterSlide
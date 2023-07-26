import React from 'react'
import PlanetCard from '../component/planetCard.jsx'
import '/workspaces/Newux-StarWars-Pro/src/front/styles/characterSlide.css'


const PlanetSlide = () => {
    return (
        <div className="container d-flex flex-column mb-3">
            <div className="heading-1 p-2">
                <h3>Planets</h3>
            </div>
            <div className="card-row2 p-2 d-flex justify-content-between overflow-x-auto w-auto">
                <PlanetCard />
            </div>
        </div>
    )
}

export default PlanetSlide;
import React from 'react'
import CharacterCard from '../component/characterCard.jsx'


const CharacterSlide = () => {
    return (
        <div className="container d-flex flex-column mb-3">
            <div className="heading-1 p-2">
                <h3>Characters</h3>
            </div>
            <div className="card-row1 p-2 d-flex justify-content-between">
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
            </div>
        </div>
    )
}

export default CharacterSlide
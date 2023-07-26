import React from 'react'
import { Link } from "react-router-dom";


const PlanetCard = ({
    picURL = "https://fakeimg.pl/400x200?font=bebas", 
    planetName = "Make One", 
    numberOfPeople = "1,000", 
    geoTerrain = "Grasslands, mountains" 
}) => {
    return (
        <div className="card">
            <img src={picURL} className="card-img-top" alt="wtf?" />
            <div className="card-body">
                <h5 className="card-title">{planetName}</h5>
                <p className="card-text">Population: {numberOfPeople}</p>
                <p className="card-text">Terrain: {geoTerrain}</p>
                <div className="button-group d-flex justify-content-between">
                    <button href="#" className="btn btn-primary">Learn More!</button>
                    <button type="button" className="btn btn-outline-warning">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )

}

export default PlanetCard
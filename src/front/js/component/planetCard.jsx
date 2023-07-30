import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from 'prop-types';


const PlanetCard = ({
    planet, index

}) => {
    const picURL = `https://starwars-visualguide.com/assets/img/planets/${index+2}.jpg`;
    const { store, actions } = useContext(Context)
    const params = useParams();
    //index is for favorites feature
    // let plan = store.planets.find((item, index) => index == params.theIndex)

    // const setPlanets = useState([]); //UseState run the function (API)

    // console.log(setPlanets);
    console.log(planet);

    return (
       <div>
            <div className="card">
                <img src={picURL} 
                className="card-img-top" 
                alt="wtf?" 
                />
                <div className="card-body">
                    <h5 className="card-title">{planet.name}</h5>
                    <p className="card-text">Population: {planet.population}</p>
                    <p className="card-text">Terrain: {planet.terrain}</p>
                    <div className="button-group d-flex justify-content-between">
                        <Link to="/destinations">
                            <button href="#" className="btn btn-primary">Learn More!</button>
                        </Link>
                        <button className={`btn btn-outline-warning ${store.favorites.filter((index) => planet.name === planet).length < 1 ? "outline-" : ""}`}
                            onClick={() => actions.addFavorite(planet.name, index)}>
                            <i className="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

PlanetCard.propTypes = {
    match: propTypes.object,
}
export default PlanetCard


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
    //this gets the name of the favorites we need
    //everytime we select favs button, function finds the name and adds it to the favs
    let favs = store.favorites.find((favs) => favs.name == planet.name);

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
                        <Link to={"/planet/details/" + index}>
                            <button className="btn btn-primary">Learn More!</button>
                        </Link>
                        <button className={`btn btn-outline-warning ${store.favorites.filter((index) => planet.name === planet).length < 1 ? "outline-" : ""}`}
                            onClick={() => actions.addFavorite(planet.name, index)}>
                                {!favs ? <i className="fa-regular fa-heart"/> : <i className="fa-solid fa-heart"/> }
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


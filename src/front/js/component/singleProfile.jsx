import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from 'prop-types';
// import {ListFavorites} from "./listFavorites";



const SingleProfile = ({
    character, index

    

}) => {
    //went into the elements tab in google inspect to find this link to images that actually worked lol
    const picURL = `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`;
    const { store, actions } = useContext(Context)
    const params = useParams();
    let char = store.people.find((item, index) => index == params.theIndex)

    const setPeople = useState([]); //UseState run the function (API)

    console.log(setPeople);
    console.log(character.name);
    return (
        <div>
            <div className="card">
                <img
                    src={picURL}
                    className="card-img-top"
                    alt="wtf?"
                />
                <div className="card-body-single">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">Gender: {character.gender}</p>
                    <p className="card-text">Eye Color: {character.eye_color}</p>
                    <p className="card-text">Birth Year: {character.birth_year}</p>
                    <div className="button-group d-flex justify-content-between">
                        {/* reverse wrap with Link component, browser will navigate to route without refreshing */}
                        <Link to="/home">
                            <button href="#" className="btn btn-primary">Learn More!</button>
                        </Link>
                        <button onClick={() => addToFavorite(character.id)} className="btn btn-outline-warning">
                        <i className="fa-regular fa-heart"></i>
                        </button>
                        {/* <button type="button" className="btn btn-outline-warning">
                            <i className="fa-regular fa-heart"></i>
                        </button> */}
                    </div>
                </div>
            </div>

        </div>
    )
    //add character details code


}
SingleProfile.propTypes = {
    match: propTypes.object, //used to pass to params
}
export default SingleProfile
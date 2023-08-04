import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from 'prop-types';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import {ListFavorites} from "./listFavorites";



const CharacterCard = ({
    character, index



}) => {
    //useState (loading state) if true, when we load our application, what we want to see page is loading because we are fetching data from API, after resolve we will render component
    const [isLoading, setIsLoading] = useState(true);

    //if page isLoading is true and we are still fetching data from API, return #load if not content will show
    if (!isLoading) return <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
    </div>



    //went into the elements tab in google inspect to find this link to images that actually worked lol
    const picURL = `https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`;
    const { store, actions } = useContext(Context)
    //this gets the name of the favorites we need
    //everytime we select favs button, function finds the name and adds it to the favs
    let favs = store.favorites.find((favs) => favs.name == character.name); 


    const setPeople = useState([]); //UseState run//  the function (API)
    const [isFavorite, setIsFavorite] = useState(true);


    console.log(setPeople);
    console.log(character.name);
    return (
        <div>
            <div className="card">
                <img
                    src={picURL}
                    className="card-img-top"
                    alt="wtf?" 
                    onError={e => e.target.src = "https://placehold.co/400x550"}
                />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">Gender: {character.gender}</p>
                    <p className="card-text">Eye Color: {character.eye_color}</p>
                    <p className="card-text">Birth Year: {character.birth_year}</p>
                    <div className="button-group d-flex justify-content-between">
                        {/* reverse wrap with Link component, browser will navigate to route without refreshing */}
                        <Link to={"/character/details/" + index}>
                            <button className="btn btn-primary">Learn More!</button>
                        </Link>
                        <button className={`btn btn-outline-warning ${store.favorites.filter((index) => character.name === character).length < 1 ? "outline-" : ""}`}
                            onClick={() => actions.addFavorite(character.name, index)}>
                                {!favs ? <i className="fa-regular fa-heart"/> : <i className="fa-solid fa-heart"/> }
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
    //add character details code


}
CharacterCard.propTypes = {
    match: propTypes.object, //used to pass to params
}
export default CharacterCard
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from 'prop-types';



const CharacterCard = ({
    character, index

}) => {
    //went into the elements tab in google inspect to find this link to images that actually worked lol
    const picURL = `https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`;
    // name = "Make One", 
    // hairColour = "black", 
    // eyeColour = "dark brown"
    const { store, actions } = useContext(Context)
    const params = useParams();
    let char = store.people.find((item, index) => index == params.theIndex)

    const setPeople = useState([]); //UseState run the function (API)


    // useEffect(() => {
    //     setPeople(store.getPeopleData)
    // }, [store.getPeopleData] // In Here we call out again to keep stored the data on re-load the page
    // )
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
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">Gender: {character.gender}</p>
                    <p className="card-text">Eye Color: {character.eye_color}</p>
                    <p className="card-text">Birth Year: {character.birth_year}</p>
                    <div className="button-group d-flex justify-content-between">
                        {/* reverse wrap with Link component, browser will navigate to route without refreshing */}
                        <Link to="/demo">
                            <button href="#" className="btn btn-primary">Learn More!</button>
                        </Link>
                        <button type="button" className="btn btn-outline-warning">
                            <i className="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
    //add character details code


}
CharacterCard.propTypes = {
    match: propTypes.object,
}
export default CharacterCard
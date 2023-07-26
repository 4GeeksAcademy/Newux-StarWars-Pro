import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from 'prop-types';



const CharacterCard = ({
    character, index

}) => {
    const picURL = "https://fakeimg.pl/400x200?font=bebas";
    // name = "Make One", 
    // hairColour = "black", 
    // eyeColour = "dark brown"
    const { store, actions } = useContext(Context)
    const params = useParams();
    let char = store.people.find((item, index) => index == params.theIndex)

    const setPeople = useState([]); //UseState run the function from planets (API)


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
                    <p className="card-text">Hair Color: {character.hair_color}</p>
                    <p className="card-text">Eye Color: {character.eye_color}</p>
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
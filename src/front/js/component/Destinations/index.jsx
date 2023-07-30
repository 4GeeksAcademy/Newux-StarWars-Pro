import React, { useEffect, useState, useContext } from 'react'
// import getState from '../../store/flux';
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";
// import propTypes from 'prop-types';


const Destinations = ({ character, index }) => {


    // const picURL = `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`;
    // const { store, actions } = useContext(Context)
    // const params = useParams();
    // let char = store.people.find((item, index) => index == params.theIndex)

    // const setPeople = useState([]); //UseState run the function (API)

    // console.log(setPeople);
    // console.log(character.name);

    //useState (loading state) if true, when we load our application, what we want to see page is loading because we are fetching data from API, after resolve we will render component
    const [isLoading, setIsLoading] = useState(true);
    // getState();


    //if page isLoading is true and we are still fetching data from API, return #load if not content will show
    if (isLoading) return <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
    </div>
    return (
        <div>
            {/* <div className="card">
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
                        <Link to="/demo">
                            <button href="#" className="btn btn-primary">Learn More!</button>
                        </Link>
                        <button onClick={() => addToFavorite(character.id)} className="btn btn-outline-warning">
                            <i className="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div> */}

        </div>
    )
}
// Destinations.propTypes = {
//     match: propTypes.object, //used to pass to params
// }
export default Destinations
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from 'prop-types';
import '/workspaces/Newux-StarWars-Pro/src/front/styles/card.css'



const VehicleCard = ({ 
    vehicle, index

}) => {
    const picURL = `https://starwars-visualguide.com/assets/img/vehicles/${index+4}.jpg`;
    const { store, actions } = useContext(Context);
    const params = useParams(); 
    //below variables for favorites button
    const [solidHeart, setSolidHeart] = useState(false);
    const toggleSolidHeart = () => setSolidHeart(!solidHeart);    
    const darkHeart = <i className="fa-solid fa-heart" style="color: #000000;"></i>;
    const lightHeart = <i className="fa-regular fa-heart"></i>

    console.log(vehicle);

    return (
        <div>
            <div className="card">
                <img src={picURL} className="card-img-top" alt="wtf?" />
                <div className="card-body">
                    <h5 className="card-title">{vehicle.name}</h5>
                    <p className="card-text">Max Speed: {vehicle.max_atmosphering_speed}</p>
                    <p className="card-text">Passengers: {vehicle.passengers}</p>
                    <p className="card-text">Crew: {vehicle.crew}</p>
                    <div className="button-group d-flex justify-content-between">
                        <button href="#" className="btn btn-primary">Learn More!</button>
                        <button className="btn btn-outline-warning" onClick={toggleSolidHeart}>{solidHeart ? darkHeart : lightHeart}
                            {/* <i className="fa-regular fa-heart"></i> */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
    //add character details code


}

export default VehicleCard
import React, { useState} from 'react'
import { Link } from "react-router-dom";
import '/workspaces/Newux-StarWars-Pro/src/front/styles/card.css'


const VehicleCard = ({ 
    picURL = "https://fakeimg.pl/400x200?font=bebas", 
    alias = "Make One", 
    hairColour = "black", 
    eyeColour = "dark brown", id }) => {
    
        const [solidHeart, setSolidHeart] = useState(false);

        const toggleSolidHeart = () => setSolidHeart(!solidHeart); 
        
        const darkHeart = <i className="fa-solid fa-heart" style="color: #000000;"></i>;
        const lightHeart = <i className="fa-regular fa-heart"></i>

    return (
        <div>
            <div className="card">
                <img src={picURL} className="card-img-top" alt="wtf?" />
                <div className="card-body">
                    <h5 className="card-title">{alias}</h5>
                    <p className="card-text">Hair Colour: {hairColour}</p>
                    <p className="card-text">Eye Colour: {eyeColour}</p>
                    <div className="button-group d-flex justify-content-between">
                        <button href="#" className="btn btn-primary">Learn More!</button>
                        <button className="btn btn-outline-warning" onClick={toggleSolidHeart}>{solidHeart ? darkHeart : lightHeart}
                            {/* <i className="fa-regular fa-heart"></i> */}
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="card mb-3" style="max-width: 540px;">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={picURL} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{alias}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
    //add character details code


}

export default VehicleCard
import React from 'react'
import { Link } from "react-router-dom";


const CharacterCard = ({picURL = "https://fakeimg.pl/400x200?font=bebas", alias = "Make One", hairColour = "black", eyeColour = "dark brown" }) => {
    return (
        <div className="card">
            <img src={picURL} className="card-img-top" alt="wtf?" />
            <div className="card-body">
                <h5 className="card-title">{alias}</h5>
                <p className="card-text">Hair Colour: {hairColour}</p>
                <p className="card-text">Eye Colour: {eyeColour}</p>
                <a href="#" className="btn btn-primary">Learn More!</a>
                
            </div>
        </div>
    )

}

export default CharacterCard
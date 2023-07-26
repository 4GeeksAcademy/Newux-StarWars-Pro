import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../component/card.jsx";


export const PeopleSlide = () => {

    const {char_id} = useParams();
    const [character, setCharacter] =useState({});
  
    useEffect(async() => {
     const response = await fetch(`https://swapi.dev/api/people/${char_id}`)
      const data = await response.json();
      setCharacter(data)
    }, []);
     
    return (
      <div className="mt-5">
      <Card
        img={`https://starwars-visualguide.com/assets/img/characters/${char_id}.jpg`}
      >
        <h4 className="card-title text center">{character.name}</h4>
        <ul className="list-group text-left">
          <li className="list-group-item">
            Gender: {character.gender}
          </li>
          <li className="list-group-item">
            Hair Color: {character.hair_color}
            </li>
          <li className="list-group-item">
          Eye-Color: {character.eye_color}
          </li>
        </ul>
        <span className="d-flex mt-2">
        <a className="btn btn-outline-warning">
        <i class="fa-regular fa-heart"></i>
        </a>
        </span>
      </Card>
    </div>
     
    );
  };

// import React, { useState, useEffect, useContext } from "react";
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";
// import propTypes from 'prop-types';
// import { Single } from "./single";



// const CharacterDetails = ({
//     character, index

// }) => {
//     //went into the elements tab in google inspect to find this link to images that actually worked lol
//     const picURL = `https://starwars-visualguide.com/assets/img/characters/${index}.jpg`;
//     const { store, actions } = useContext(Context)
//     const params = useParams();
//     let char = store.people.find((item, index) => index == params.theIndex)

//     const setPeople = useState([]); //UseState run the function (API)

//     console.log(setPeople);
//     console.log(character.name);
//     return (
//         <div>
//             <div className="card">
//                 <img
//                     src={picURL}
//                     className="card-img-top"
//                     alt="wtf?"
//                 />
//                 <div className="card-body">
//                     <h5 className="card-title">{character.name}</h5>
//                     <p className="card-text">Gender: {character.gender}</p>
//                     <p className="card-text">Eye Color: {character.eye_color}</p>
//                     <p className="card-text">Birth Year: {character.birth_year}</p>
//                     <div className="button-group d-flex justify-content-between">
//                         {/* reverse wrap with Link component, browser will navigate to route without refreshing */}
//                         <Link to={"/character/details/" + index}>
//                             <button className="btn btn-primary">Learn More!</button>
//                         </Link>
//                         <button type="button" className="btn btn-outline-warning">
//                             <i className="fa-regular fa-heart"></i>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
//     //add character details code


// }
// CharacterDetails.propTypes = {
//     match: propTypes.object, //used to pass to params
// }
// export default CharacterDetails



































// import React, { useEffect, useContext } from 'react';

// const CharacterDetails = (character) => {
//     let char = store.people.find((item, index) => index == params.theIndex)
//     const { store, actions } = useContext(Context);
//     const { id } = useParams(); //using to get the details for single view via proptypes
//     useEffect(() => {
//         actions.getData();
//     })
//     return (
//         <div className="card mb-3" style="max-width: 540px;">
//             <div className="row g-0">
//                 <div className="col-md-4">
//                     <img src={picURL} className="img-fluid rounded-start" alt="..." />
//                 </div>
//                 <div className="col-md-8">
//                     <div className="card-body">
//                         <h5 className="card-title">{character.name}</h5>
//                         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                         <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CharacterDetails

// {store.people[id]?.name}
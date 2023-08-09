import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import { CharacterDetails } from "/workspaces/Newux-StarWars-Pro/src/front/js/pages/characterDetails.jsx"
import "/workspaces/Newux-StarWars-Pro/src/front/styles/single.css";


export const SingleVehicle = (props, index) => {

	const { store, actions } = useContext(Context);
	const params = useParams();
	// let character = store.people.find((item, index) => index == params.theIndex);
	let vehicles = store.vehicles.find((item, index) => index == params.theIndex);
	const picURL = `https://starwars-visualguide.com/assets/img/vehicles/${index+1}.jpg`;
	let favs = store.favorites.find((favs) => favs.name == vehicles.name);

	console.log(vehicles);
	return (
		<div className="jumbotron">
			<div className="billboard d-flex flex-row justify-content-center">
				<div className="bill-img-div">
					<img
						src={picURL}
						className="billboard-img p-3"
						alt="wtf?"
						onError={e => e.target.src = "https://placehold.co/600x400"}
					/>
				</div>
				<div className="billboard-text p-5 text-center">
					<div className="title-fav d-flex justify-content-evenly">
						<h1 className="bill-header fs-1">{vehicles.name}</h1>
						<button className={`btn ${store.favorites.filter((index) => vehicles.name === vehicles).length < 1 ? "outline-" : ""}`}
							onClick={() => actions.addFavorite(planets.name, index)}>
							{!favs ? <i className="fa-regular fa-heart" /> : <i className="fa-solid fa-heart" style={{color: "#ffd500",}}/>}
						</button>
					</div>
					<p className="bill-p">I find your lack of faith disturbing. General Kenobi. You are a bold one.
						Kill him! I'm looking forward to compconsting your training.
						In time you will call me master. Indeed you are powerful, as the Emperor has foreseen.
						I will fulfill our Destiny So, you have a twin sister.
						Your feelings have now betrayed her too. Obi-Wan was wise to hide her from me.
						Now his failure is compconste. If you will not turn to the dark side,
						then perhaps she will.</p>
				</div>
			</div>
			<hr className="my-4" />
			<div className="single-card d-flex flex-row justify-content-center">
				<p className="card-text p-5 text-center">
					<p className="label fw-bold">Name</p>
					{vehicles.name}
				</p>
				<p className="card-text p-5 text-center">
					<p className="label fw-bold">Max Speed</p>
					{vehicles.max_atmosphering_speed}
				</p>
				<p className="card-text p-5 text-center">
					<p className="label fw-bold">Model</p>
					{vehicles.model}
				</p>
				<p className="card-text p-5 text-center">
					<p className="label fw-bold">Passengers</p>
					{vehicles.passengers}
				</p>
				<p className="card-text p-5 text-center">
					<p className="label fw-bold">Crew</p>
					{vehicles.crew}
				</p>
				<p className="card-text p-5 text-center">
					<p className="label fw-bold">Cargo Capacity</p>
					{vehicles.cargo_capacity}
				</p>
			</div>
			{/* <Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					{props.category == "character" ? character.name : "loading"}
				</span>
			</Link> */}

		</div>
	);
};

SingleVehicle.propTypes = {
	match: PropTypes.object
};

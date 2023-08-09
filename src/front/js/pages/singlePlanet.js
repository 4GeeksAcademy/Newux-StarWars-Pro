import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import { CharacterDetails } from "/workspaces/Newux-StarWars-Pro/src/front/js/pages/characterDetails.jsx"
import '../../styles/single.css';


export const SinglePlanet = (props, index) => {

	const { store, actions } = useContext(Context);
	const params = useParams();
	// let character = store.people.find((item, index) => index == params.theIndex);
	let planets = store.planets.find((item, index) => index == params.theIndex);
	const picURL = `https://starwars-visualguide.com/assets/img/planets/${index+1}.jpg`;
	let favs = store.favorites.find((favs) => favs.name == planets.name);

	console.log(planets);
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
						<h1 className="bill-header fs-1">{planets.name}</h1>
						<button className={`btn ${store.favorites.filter((index) => planets.name === planets).length < 1 ? "outline-" : ""}`}
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
					{planets.name}
				</p>
				<p className="card-text p-5 text-center">
					<p className="label fw-bold">Population</p>
					{planets.population}
				</p>
				<p className="card-text p-5 text-center">
					<p className="label fw-bold">Terrain</p>
					{planets.terrain}
				</p>
				<p className="card-text p-5 text-center">
					<p className="label fw-bold">Climate</p>
					{planets.climate}
				</p>
				<p className="card-text p-5 text-center">
					<p className="label fw-bold">Gravity</p>
					{planets.gravity}
				</p>
				<p className="card-text p-5 text-center">
					<p className="label fw-bold">Surface Water</p>
					{planets.surface_water}
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

SinglePlanet.propTypes = {
	match: PropTypes.object
};

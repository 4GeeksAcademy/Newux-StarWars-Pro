import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { CharacterDetails } from "/workspaces/Newux-StarWars-Pro/src/front/js/pages/characterDetails.jsx"
// import PlanetCard from "../component/planetCard";


export const Single = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let character = store.people.find((item, index) => index == params.theIndex);
	// let planets = store.planet.find((item, index) => index == params.theIndex);

	console.log(character);
	return (
		<div className="jumbotron">
			<img src={rigoImageUrl} />
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					{props.category == "character" ? character.name : "loading"}
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};

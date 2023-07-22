import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharacterSlide from "./characterSlide.jsx";

export const Home = () => {
	return (
		<div className="d-flex flex-column mb-3">
			<CharacterSlide p-2 />
			<CharacterSlide p-2 />
		</div>
		
	);
};



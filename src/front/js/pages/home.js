import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharacterSlide from "./characterSlide.jsx";
import PlanetSlide from "./planetSlide.jsx";
import VehicleSlide from "./vehicleSlide.jsx";
import CharacterCard from "../component/characterCard.jsx";




export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="body d-flex flex-column mb-3">
			<CharacterSlide p-2 />
			{/* {store.people.map((character,index)=>{
                    return <CharacterCard key={index} index={index} character={character}/>
                })} */}
			<PlanetSlide p-2 />
			<VehicleSlide p-2 />
		</div>
		
	);
};



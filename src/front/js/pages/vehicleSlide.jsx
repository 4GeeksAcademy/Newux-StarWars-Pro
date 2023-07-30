import React, { useState, useEffect, useContext } from "react";
import VehicleCard from '../component/vehicleCard.jsx'
import { Context } from "../store/appContext";
import '/workspaces/Newux-StarWars-Pro/src/front/styles/characterSlide.css'

const VehicleSlide = () => {
    const {store, actions} = useContext(Context)
    return (
        <div className="container d-flex flex-column mb-3">
            <div className="heading-1 p-2">
                <h3>Vehicles</h3>
            </div>
            <div className="card-row1 p-2 gap-5 d-flex overflow-auto w-auto">
                {store.vehicles.map((Vehicles,index)=>{
                    return <VehicleCard key={index} index={index} vehicle={Vehicles}/>
                })}
            </div>
        </div>
    )
}

export default VehicleSlide
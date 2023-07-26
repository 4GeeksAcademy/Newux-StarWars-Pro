import React from 'react'
import VehicleCard from '../component/vehicleCard.jsx'


const VehicleSlide = () => {
    return (
        <div className="container d-flex flex-column mb-3">
            <div className="heading-1 p-2">
                <h3>Vehicles</h3>
            </div>
            <div className="card-row1 p-2 d-flex justify-content-between overflow-x-auto w-auto">
                <VehicleCard />
            </div>
        </div>
    )
}

export default VehicleSlide
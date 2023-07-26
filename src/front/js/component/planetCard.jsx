import React from 'react'
import { Link } from "react-router-dom";


const PlanetCard = ({
    picURL = "https://fakeimg.pl/400x200?font=bebas", 
    planetName = "Make One", 
    numberOfPeople = "1,000", 
    geoTerrain = "Grasslands, mountains" 
}) => {
    return (
        <div className="card">
            <img src={picURL} className="card-img-top" alt="wtf?" />
            <div className="card-body">
                <h5 className="card-title">{planetName}</h5>
                <p className="card-text">Population: {numberOfPeople}</p>
                <p className="card-text">Terrain: {geoTerrain}</p>
                <div className="button-group d-flex justify-content-between">
                    <button href="#" className="btn btn-primary">Learn More!</button>
                    <button type="button" className="btn btn-outline-warning">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )

}

export default PlanetCard

// const PlanetCard = ({
//     planet, index

// }) => {
//     //went into the elements tab in google inspect to find this link to images that actually worked lol
//     const picURL = `https://starwars-visualguide.com/assets/img/planets/${index+1}.jpg`;
//     // name = "Make One", 
//     // hairColour = "black", 
//     // eyeColour = "dark brown"
//     const { store, actions } = useContext(Context)
//     const params = useParams();
//     let char = store.planet.find((item, index) => index == params.theIndex)

//     const setPlanets = useState([]); //UseState run the function (API)


//     // useEffect(() => {
//     //     setPlanets(store.getPlanetsData)
//     // }, [store.getPlanetsData] // In Here we call out again to keep stored the data on re-load the page
//     // )
//     console.log(setPlanets);
//     console.log(planet.name);
//     return (
//         <div>
//             <div className="card">
//                 <img
//                     src={picURL}
//                     className="card-img-top"
//                     alt="wtf?"
//                 />
//                 <div className="card-body">
//                     <h5 className="card-title">{planet.name}</h5>
//                     <p className="card-text">Gender: {planet.gender}</p>
//                     <p className="card-text">Eye Color: {character.eye_color}</p>
//                     <p className="card-text">Birth Year: {character.birth_year}</p>
//                     <div className="button-group d-flex justify-content-between">
//                         {/* reverse wrap with Link component, browser will navigate to route without refreshing */}
//                         <Link to="/demo">
//                             <button href="#" className="btn btn-primary">Learn More!</button>
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
// CharacterCard.propTypes = {
//     match: propTypes.object,
// }
// export default CharacterCard
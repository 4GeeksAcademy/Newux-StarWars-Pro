import React from 'react'
import { useState } from 'react'


const ListFavorites = () => {
    const [favorites, setFavorites] = useState([]) //empty array for favorites

    const deleteFavorites = (id) => {
        setFavorites(currentFavorites => {
            return currentFavorites.filter(favorites => favorites.id !== id)
        })

        return (
            <div>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item d-flex justify-content-between " href="#">Action
                        <span onClick={() => MyActions.deleteFavorites(favoritesToDelete)}>
                            <i class="fa-regular fa-trash-can"></i>
                        </span></a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    {/* {favorites.map(favorites => {
                        return (
                            <div>
                                <li key={favorites.id} className="list-group-item">
                                    <a className="dropdown-item d-flex justify-content-between " href="#">
                                        {favorites.name}
                                        <span onClick={() => deleteFavorites(favorites.id)}>
                                            <i className="fa-regular fa-trash-can"></i>
                                        </span>
                                    </a>
                                </li>
                            </div>
                        )
                    })} */}
                </ul>
            </div>
        )
    }
};

export default ListFavorites

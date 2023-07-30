import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from 'prop-types';



const ListFavorites = () => {
    const { store, actions } = useContext(Context) //<= from flux
    console.log(store.favorites)


    return (
        <div className="fav-dropdown">
            <button
                className="btn favorites-button dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                disabled={store.favorites.length === 0 ? true : false}
            >
                Favorites
                {store.favorites.length > 0 ? (<span className='bg-light ms-1 text-danger px-2 fw-semibold rounded-circle'>
                    {store.favorites.length}
                </span>) : ""}
            </button>
            <div>
                {store.favorites.map((item, idx) => {
                    return (
                        <div>
                            <li key={item} className="list-group-item d-flex justify-content-between">
                                <a className="dropdown-item " href="#">{item.name}</a>
                                <span>
                                        <i className="fa-regular fa-trash-can" onClick={() => actions.removeFavorite(item)}></i>
                                </span>
                            </li>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};


export default ListFavorites

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import '../../styles/navbar.css';
import starWarsLit from '../../img/starwarslit.png';

export const Navbar = () => {
	//comment out to render
	const { store, actions } = useContext(Context) //<= from flux
	console.log(store.favorites)


	return (
		<nav className="navbar d-flex">
			<Link to="/">
				<img className="navbar-brand" src={starWarsLit} />
			</Link>
			<div className="ml-auto">
				<Link to="#">
					<div className="dropdown">
						<button className="btn favorites-button btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
							disabled={store.favorites.length === 0 ? true : false}> {/*remove this line to render, this disables button if no favs */}
							Favorites
							{store.favorites.length > 0 ? (<span className='badge bg-danger ms-1 text-light px-2 fw-semibold'>
								{store.favorites.length} {/*this line is for badge - with favs counter*/}
							</span>) : ""}
						</button>
						<div className="dropdown-menu bg-dark">
							{store.favorites.map((item, idx) => {
								return (
									<div className="list-container">
										<li key={item} className="list-group-item d-flex justify-content-between">
											<a className="dropdown-item" href="#">{item.name}</a>
											<span>
												<i className="fa-regular fa-trash-can" onClick={() => actions.removeFavorite(item)}></i>
											</span>
										</li>
									</div>
								)
							})}

						</div>
					</div>
				</Link>
			</div>

		</nav>
	);
};

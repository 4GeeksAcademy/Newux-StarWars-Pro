import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "/workspaces/Newux-StarWars-Pro/src/front/img/starwarslogo.png";
import '/workspaces/Newux-StarWars-Pro/src/front/styles/navbar.css';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src={starWarsLogo} /></span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<div className="dropdown">
							<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites<span className="badge text-bg-secondary">0</span>
							</button>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">Action</a></li>
								<li><a className="dropdown-item" href="#">Another action</a></li>
								<li><a className="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};

import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	const removeFavorite = (id, type) => {
		dispatch({
			type: 'remove_favorites',
			payload: { id, type }
		});
	}

	return (
		<nav className="navbar container">
			<div className=" ">
				<Link to="/" className="navbar-brand mb-0 h1">
					<img
						src="https://images.seeklogo.com/logo-png/40/1/the-simpsons-yellow-logo-png_seeklogo-403268.png"
						className="nav-bar-logo" />
				</Link>
			</div>

			<div className="ml-auto">

				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="badge bg-secondary ms-1">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu">
						{store.favorites.length === 0 ? (<li><a className="dropdown-item">No favorites</a></li>) :
							(
								store.favorites.map((favorite, index) => {
									return (
										<li key={index} className="d-flex justify-content-between my-2">
											<p className="dropdown-item m-0">{favorite.name}</p>
											<button
												onClick={() => removeFavorite(favorite.id, favorite.type)}
												className="btn py-0">
												<i class="fa-solid fa-trash-can"></i>
											</button>
										</li>
									)
								})
							)}
					</ul>
				</div>

			</div>
		</nav>
	);
};
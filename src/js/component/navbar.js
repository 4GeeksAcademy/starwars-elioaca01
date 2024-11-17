import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand ms-5 h1"><img className="logo" src="https://logos-world.net/wp-content/uploads/2020/11/Star-Wars-Logo.png" /></span>
			</Link>
			<div className="ml-auto me-5">
				<div class="dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
						<i className="fa-regular fa-heart p-2"></i>{store.favorites.length}
					</button>
					<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuClickable">
						{
							store.favorites.map((item)=>{
								return(
									<li className="p-2 d-flex justify-content-between align-self-center">
										{item.properties.name}
										<i onClick={()=>actions.deleteFavorite(item._id)} class="fa-solid fa-trash me-2 align-self-center"></i>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};
<i className="fa-regular fa-heart"></i>
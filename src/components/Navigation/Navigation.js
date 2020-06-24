import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ setNavState, clearSearch }) => {
	return (
		<nav className="nav-bar container-pad">
			<div className="">
		      <ul className="nav-inner header-inner">
		        <li><p className="link" onClick={() => setNavState("")}  title="">Home</p></li>
		        <li><p className="link bold" onClick={() => setNavState("mains")}  title="">Mains</p></li>
		        <li><p className="link" onClick={() => setNavState("desserts")}  title="">Desserts</p></li>
		        <li><p className="link" onClick={() => setNavState("lunches")}  title="">Lunches</p></li>
		        <li><p className="link" onClick={() => setNavState("snacks")}  title="">Snacks & Sides</p></li>
		        <li><p className="link" onClick={() => setNavState("Breakfasts")}  title="">Breakfasts</p></li>
		        <li><p className="link" onClick={() => setNavState("")} href="" >Add Recipe</p></li>
		      </ul>		
			</div> 
		</nav>
		);
}

export default Navigation;



import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ setNavState, navFilter, route }) => {
	return (
		<nav className="nav-bar container-pad">
			<div className="">
		      <ul className="nav-inner header-inner">
		        <li><p className="link"  onClick={()=>setNavState('mains,desserts,lunches,snacks,breakfasts', 'index')}  title="">Home</p></li>
		        <li><p className={navFilter == 'mains' ? 'link nav-active' : 'link'}  onClick={()=>setNavState('mains', 'index')} title="">Mains</p></li>
		        <li><p className={navFilter == 'desserts' ? 'link nav-active' : 'link'} onClick={()=>setNavState('desserts', 'index')} title="">Desserts</p></li>
		        <li><p className={navFilter == 'lunches' ? 'link nav-active' : 'link'} onClick={()=>setNavState('lunches', 'index')} title="">Lunches</p></li>
		        <li><p className={navFilter == 'snacks' ? 'link nav-active' : 'link'} onClick={()=>setNavState('snacks', 'index')} title="">Snacks & Sides</p></li>
		        <li><p className={navFilter == 'breakfasts' ? 'link nav-active' : 'link'} onClick={()=>setNavState('breakfasts', 'index')} title="">Breakfasts</p></li>
		        <li><p className={route == 'addRecipe' ? 'link nav-active' : 'link'}  onClick={()=>setNavState('', 'addRecipe')} >Add Recipe</p></li>
		      </ul>		
			</div> 
		</nav>
		);
}

export default Navigation;

// onClick={() => setNavState("")}


import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import './Navigation.css';

const Navigation = ({ setNavState, navFilter, route }) => {
	return (
		<nav className="nav-bar container-pad">
			<div className="">
		      <ul className="nav-inner header-inner">
		        <li><p id="home" className="link menu-item"  onClick={()=>setNavState('mains,desserts,lunches,snacks,breakfasts', 'index')}  title="">Home</p></li>
		        <li><p id="mains" className={navFilter == 'mains' ? 'link nav-active menu-item' : 'link menu-item'}  onClick={()=>setNavState('mains', 'index')} title="">Mains</p></li>
		        <li><p id="desserts" className={navFilter == 'desserts' ? 'link nav-active menu-item' : 'link menu-item'} onClick={()=>setNavState('desserts', 'index')} title="">Desserts</p></li>
		        <li><p id="lunches" className={navFilter == 'lunches' ? 'link nav-active menu-item' : 'link menu-item'} onClick={()=>setNavState('lunches', 'index')} title="">Lunches</p></li>
		        <li><p id="snacks" className={navFilter == 'snacks' ? 'link nav-active menu-item' : 'link menu-item'} onClick={()=>setNavState('snacks', 'index')} title="">Snacks & Sides</p></li>
		        <li><p id="breaks" className={navFilter == 'breakfasts' ? 'link nav-active menu-item' : 'link menu-item'} onClick={()=>setNavState('breakfasts', 'index')} title="">Breakfasts</p></li>
		        <li><p id="home" className={route == 'addRecipe' ? 'link nav-active menu-item' : 'link menu-item'}  onClick={()=>setNavState('', 'addRecipe')} >Add Recipe</p></li>
		      </ul>		
			</div> 
		</nav>
		);
}

export default Navigation;

// onClick={() => setNavState("")}


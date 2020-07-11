import React from 'react';
import './Header.css';
import logo from './v-logo.svg';
import Tilt from 'react-tilt'

const Header = ({ setNavState, navFilter, route }) => {
	return (
		<nav className="header container-pad">
			<Tilt className="Tilt" options={{ max : 25 }}>
				<div className="Tilt-inner header-inner br2 shadow-2" onClick={()=>setNavState('mains,desserts,lunches,snacks,breakfasts', 'index')}>			
			          <div  title="">
			            <img className="img-responsive logo" alt="" src={logo}></img>
			            	<p className="header-brand">
			            	Vegoodies
			            	</p>
			          </div>
			        <p className="italic">Plant based recipes for every occasion; by Chris & Narnz.</p>
				</div> 
			</Tilt>
		</nav>
	);
}

export default Header;

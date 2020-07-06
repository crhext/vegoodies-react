import React from "react";
import logo from './v-logo.svg';
import burger from './b-icon.svg';
import Media from 'react-media';

class HeaderBar extends React.Component {
	render() {
		let HeaderBarComponent;
		if (this.props.route != "addRecipe") {
			HeaderBarComponent = 
				<div className="container search search-bar-pad">
					<div className="row no-gutters">
						<img onClick={()=>this.props.toggleNavDrawerState()} className="img-responsive logo search-logo justify-content-start burger" alt="" src={burger}></img>
					 	<img onClick={()=>this.props.setHomeRoute()} className="img-responsive logo search-logo " alt="" src={logo}></img>
					 	<a className="" href="https://www.instagram.com/vegoodies/" title="">
					 		<i class="fa fa-instagram fa-size search-logo " aria-hidden="true"></i>
					 	</a> 
						
						<input 
							class="form-control col-5 col-sm-5 justify-content-end search-bar" 
							type="search" 
							placeholder=" Search Recipes" 
							aria-label="Search"
							onChange={this.props.searchChange}
						>
						</input>
					</div>
				</div>
		} else {
			HeaderBarComponent = 
				<div className="container search search-bar-pad">
					<div className="row no-gutters">
						<img onClick={()=>this.props.toggleNavDrawerState()} className="img-responsive logo search-logo justify-content-start burger" alt="" src={burger}></img>
					 	<img onClick={()=>this.props.setHomeRoute()} className="img-responsive logo search-logo " alt="" src={logo}></img>
					 	<i class="fa fa-instagram fa-size search-logo " aria-hidden="true"></i>
						
						<div 
							class="col-5 col-sm-5 justify-content-end" 
						>
						</div>
					</div>
				</div>

		}




	return (
		<div>
			{HeaderBarComponent}
		</div>
	);
};
}

export default HeaderBar;



				

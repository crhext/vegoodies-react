import React from "react";

class RecipeCard extends React.Component {
	render() {


	return (
		<div 
			onClick={()=>
				this.props.onRecipeSelect(this.props.name,'recipe')}
			className="col-xl-3 col-lg-4 col-md-6 recipe-card link-hover"
		>
			<img alt="title" src={this.props.image} />
			<div>
				<h2 className="recipe-card-header"> {this.props.title} </h2>
				 <p className="link-hover-child"> {this.props.overview} </p>{" "}
			</div>
		</div>
	);
};
}

export default RecipeCard;

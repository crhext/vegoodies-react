import React from "react";

const RecipeCard = ({ image, title, overview }) => {
	return (
		<div className="col-xl-3 col-lg-4 col-md-6 recipe-card">
			<img alt="title" src={image} />
			<div>
				<h2 className="recipe-card-header"> {title} </h2>
				 <p> {overview} </p>{" "}
			</div>
		</div>
	);
};

export default RecipeCard;

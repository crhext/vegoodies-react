import React from 'react';

const Recipe = ({ recipe }) => {	
	return (
		<div className="row">
			<div className="col-xs-12 section-container-spacer">
				<div className="section-container">

					<h1 className="main-header"> {recipe.title}</h1>

					<p>{ recipe.overview }</p>

					<p><img className="img-responsive" alt="" src={ recipe.image }></img></p>

					<h3>Portions</h3>
					<p>{ recipe.portions }</p>

					<h3>Method</h3>
					<p className="white-space">{ recipe.method }</p>

					<h3>Ingredients</h3>
					<p className="white-space" id="ingredients">{ recipe.ingredients }</p>

					<h3>Tags</h3>
					<p>{ recipe.tags }</p>

					<p><i><small>This recipe was created with love by { recipe.author }</small></i></p>
				</div>
			</div>
		</div>
		);
}


export default Recipe;


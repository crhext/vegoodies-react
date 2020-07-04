import React from "react";
import RecipeCard from "./RecipeCard.js";
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0
};


class RecipeCardList extends React.Component {

	render() {	
	return (
		<div className="recipes">
            <Masonry
                className={'grid'} // default ''
               
                options={masonryOptions} // default {}
                
               >			
				{this.props.recipes.map((recipe, i) => {
					return (
						<RecipeCard key={i.toString()}
							image={this.props.recipes[i].image}
							title={this.props.recipes[i].title}
							overview ={this.props.recipes[i].overview}
							name ={this.props.recipes[i].name}
							onRouteChange={this.props.onRouteChange}
							onRecipeSelect={this.props.onRecipeSelect}
						/>
					);
				})}
			</Masonry>
		</div>
	);
};
};

export default RecipeCardList;
import React from "react";
import RecipeCard from "./RecipeCard.js";
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0
};


const RecipeCardList = ({ recipes }) => {	
	return (
		<div className="recipes">
            <Masonry
                className={'grid'} // default ''
               
                options={masonryOptions} // default {}
                
               >			
				{recipes.map((recipe, i) => {
					return (
						<RecipeCard key={i.toString()}
							image={recipes[i].image}
							title={recipes[i].title}
							overview ={recipes[i].overview}
						/>
					);
				})}
			</Masonry>
		</div>
	);
};

export default RecipeCardList;
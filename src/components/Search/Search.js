import React from "react";

const Search = ({searchfield, searchChange}) => {
	return (
		<div className="search-bar-pad ">
			<input 
			class="form-control search-bar col-md-5" 
			type="search" 
			placeholder="Search Recipes" 
			aria-label="Search"
			onChange={searchChange}
			>

			</input>
		</div>
	);
};

export default Search;

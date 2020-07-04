import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RecipeCardList from './components/RecipeCardList/RecipeCardList';
import Search from './components/Search/Search';
import AddRecipe from './components/AddRecipe/AddRecipe';
import Recipe from './components/Recipe/Recipe';
import './App.css';


const particleOptions = {
	particles: {
		number: {
			value: 30,
			density: {
				enable: true,
				value_area: 800
			}
		},
		"color": {
      "value": "#c23ea7"
       }
	}
};

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			recipes: [],
			searchfield: "",
			navFilter: "mains,desserts,lunches,snacks,breakfasts",
			route: "index",
			recipe: {author:"", id:"", image:"", ingredients:"", method:"", name:"", overview:"", portions:"", recipe_type:"", tags:"", title:""}
		};
	}

	componentDidMount() {
		fetch("http://localhost:5000/recipe")
			.then(response => {
				return response.json();
			})
			.then(recipes => {
				this.setState({ recipes: recipes });
			});

		// $("#ingredients").focus(function() {
		//     if(document.getElementById('ingredients').value === ''){
		//         document.getElementById('ingredients').value +='• ';
		//   }
		// });

		// $("#ingredients").keyup(function(event){
		//   var keycode = (event.keyCode ? event.keyCode : event.which);
		//     if(keycode == '13'){
		//         document.getElementById('ingredients').value +='• ';
		//   }
		//   var txtval = document.getElementById('ingredients').value;
		//   if(txtval.substr(txtval.length - 1) == '\n'){
		//     document.getElementById('ingredients').value = txtval.substring(0,txtval.length - 1);
		//   }
		// });
	}

	onSearchChange = event => {
		this.setState({ searchfield: event.target.value });
	};

	setNavState = (nav, route) => {
		this.onRouteChange(route)
		this.setState({ navFilter: nav });
		this.setState({ searchfield:'' });
		};

	onRecipeSelect = (recipeName, route) => {
		this.onRouteChange(route);
		const selectedRecipe = this.state.recipes.find(recipe => {
			return recipe.name
				.toLowerCase()
				.includes(recipeName.toLowerCase())
			});
		this.setState({ recipe: selectedRecipe})
		console.log(this.state.recipe);
	}


	onRouteChange = route => {
		this.setState({ route: route})
	}





	renderSwitch(param) {

	const filteredRecipes = this.state.recipes.filter(recipe => {
		return (recipe.title
			.toLowerCase()
			.includes(this.state.searchfield.toLowerCase())
			|| recipe.overview
			.toLowerCase()
			.includes(this.state.searchfield.toLowerCase()))
			&& this.state.navFilter.toLowerCase()
			.toLowerCase()
			.includes(recipe.recipe_type);
		});

	const shuffledRecipes = shuffleArray(filteredRecipes)

		switch (param) {
			case "index": 
				return (
					<div>
						<div className="search-bar-pad">
							<Search searchChange={this.onSearchChange} />
						</div>
						<RecipeCardList recipes={shuffledRecipes} onRouteChange={this.onRouteChange} onRecipeSelect={this.onRecipeSelect} />
					</div>
					);
			case "recipe": 
				return (
					<div>					
						<Recipe recipe={this.state.recipe}/>
					</div>					
					);
			case "addRecipe": 
				return (
					<div>					
						<AddRecipe />
					</div>					
					);
			default:
				return (
					<div>
						<div className="search-bar-pad">
							<Search searchChange={this.onSearchChange} />
						</div>
						<RecipeCardList recipes={shuffledRecipes} onRouteChange={this.onRouteChange} onRecipeSelect={this.onRecipeSelect}/>
					</div>
					);
			}
		}
	

	render() {

	return (
	<div className="App">
	  <Particles className="particles" params={particleOptions} />
	  <div className="sidenav">
	      <Header setNavState={this.setNavState} navFilter={this.state.navFilter} route={this.state.route}/>
	      <Navigation setNavState={this.setNavState} navFilter={this.state.navFilter} route={this.state.route}/>
	      <Footer />
	  </div>
	  <div className="main container-pad">
	  	{this.renderSwitch(this.state.route)}
  		{/*<div className="search-bar-pad">
  			<Search searchChange={this.onSearchChange} />
  		</div>
		<RecipeCardList recipes={shuffledRecipes} />*/}
		{/*<AddRecipe />*/}
		

	  </div>
	  
	</div>
	);
}
}

export default App;




import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RecipeCardList from './components/RecipeCardList/RecipeCardList';
import HeaderBar from './components/HeaderBar/HeaderBar';
import AddRecipe from './components/AddRecipe/AddRecipe';
import Recipe from './components/Recipe/Recipe';
import Media from 'react-media';
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


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			recipes: [],
			navDrawerActive: false,
			searchfield: "",
			navFilter: "mains,desserts,lunches,snacks,breakfasts",
			route: "index",
			recipe: {author:"", id:"", image:"", ingredients:"", method:"", name:"", overview:"", portions:"", recipe_type:"", tags:"", title:""}
		};
	}

	componentDidMount() {
		fetch("https://vegoodies-api.herokuapp.com/recipe")
			.then(response => {
				return response.json();
			})
			.then(recipes => {
				this.setState({ recipes: recipes });
			});
	}

	onSearchChange = event => {
		this.setState({ searchfield: event.target.value });
	};

	toggleNavDrawerState = () => {
		if (this.state.navDrawerActive === true) {
			this.setState({navDrawerActive: false})
		} else {
			this.setState({navDrawerActive: true})
		}
	}

	toggleNavDrawerStateOff = () => {
			this.setState({navDrawerActive: false});
	}

	setHomeRoute = () => {
		this.setState({ navFilter: "mains,desserts,lunches,snacks,breakfasts" });
		this.setState({ searchfield:'' });
		this.setState({ navDrawerActive: false });	
		this.setState({ route: "index" });	
	}


	setNavState = (nav, route) => {
		this.onRouteChange(route)
		this.setState({ navFilter: nav });
		this.setState({ searchfield:'' });
		this.toggleNavDrawerStateOff();
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

	onRecipeAdd = recipe => {
		this.setState({ recipe: recipe})
		this.setState({ route: 'recipe'})
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

		switch (param) {
			case "index": 
				return (
					<div>
						<RecipeCardList recipes={filteredRecipes} onRouteChange={this.onRouteChange} onRecipeSelect={this.onRecipeSelect} />
					</div>
					);
			case "recipe": 
				return (
					<div className="recipe-pad" >					
						<Recipe recipe={this.state.recipe}/>
					</div>					
					);
			case "addRecipe": 
				return (
					<div className="add-pad" >					
						<AddRecipe recipes={this.state.recipes} onRecipeAdd={this.onRecipeAdd} />
					</div>					
					);
			default:
				return (
					<div>
						<RecipeCardList recipes={filteredRecipes} onRouteChange={this.onRouteChange} onRecipeSelect={this.onRecipeSelect}/>
					</div>
					);
			}
		}
	

	render() {

	return (
		<div className="App outer-container">
			<Particles className="particles" params={particleOptions} />
			<div className="sidenav">
				<Media query="(min-width: 599px)" render={() =>
				(<Header setNavState={this.setNavState} navFilter={this.state.navFilter} route={this.state.route}/>)}
				/>	        
				<div className={this.state.navDrawerActive === true ? 'nav-drawer-active' : 'nav-drawer'}>
					<div className="nav-drawer-inner">
						<Navigation  setNavState={this.setNavState} navFilter={this.state.navFilter} route={this.state.route}/>
					</div>
					<Footer />
				</div>
			</div>
			<div className="main container-pad container" >
				<div className="">
					<HeaderBar searchChange={this.onSearchChange} toggleNavDrawerState={this.toggleNavDrawerState} setHomeRoute={this.setHomeRoute} route={this.state.route} />
				</div>
				{this.renderSwitch(this.state.route)}
			</div>
		</div>
	);
}
}

export default App;




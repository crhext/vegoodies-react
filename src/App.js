import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RecipeCardList from './components/RecipeCardList/RecipeCardList';
import Search from './components/Search/Search';
// import Home from './components/Home/Home';
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

	constructor() {
		super();
		this.state = {
			recipes: [],
			searchfield: "",
			navfilter: ""
		};
	}

	componentDidMount() {
		fetch("http://localhost:5000/recipe")
			.then(response => {
				return response.json();
			})
			.then(recipes => {
				this.setState({ recipes: recipes });
				console.log(recipes);
			});
	}

	onSearchChange = event => {
		this.setState({ searchfield: event.target.value });
	};

	setNavState = route => {
		this.setState({ navfilter: route });
		this.setState({ searchfield:'' });
	};

	render() {
	const filteredRecipes = this.state.recipes.filter(recipe => {
		return recipe.title
			.toLowerCase()
			.includes(this.state.searchfield.toLowerCase())
			|| recipe.overview
			.toLowerCase()
			.includes(this.state.searchfield.toLowerCase());
		});

	return (
	<div className="App">
	  <Particles className="particles" params={particleOptions} />
	  <div className="sidenav">
	      <Header />
	      <Navigation setNavState={this.setNavState}/>
	      <Footer />
	  </div>
	  <div className="main container-pad">
	  	<Search searchChange={this.onSearchChange} />
		<RecipeCardList recipes={filteredRecipes}/>
	  </div>
	  
	</div>
	);
}
}

export default App;


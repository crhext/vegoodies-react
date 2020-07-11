import React from 'react';
import $ from 'jquery';
import axios from 'axios';


class AddRecipe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author:"",
			image:null,
			ingredients:"",
			method:"",
			overview:"",
			portions:"",
			recipe_type:"",
			tags:"",
			title:""
		};
	}


 	componentDidMount() {
		 $("#ingredients").focus(function() {
		    if(document.getElementById('ingredients').value === ''){
		        document.getElementById('ingredients').value +='• ';
		  }
		});

		$("#ingredients").keyup(function(event){
		  var keycode = (event.keyCode ? event.keyCode : event.which);
		    if(keycode === '13'){
		        document.getElementById('ingredients').value +='• ';
		  }
		  var txtval = document.getElementById('ingredients').value;
		  if(txtval.substr(txtval.length - 1) === '\n'){
		    document.getElementById('ingredients').value = txtval.substring(0,txtval.length - 1);
		  }
		});
 	}

 	changeHandler = (e) => {
 		this.setState({[e.target.name]:e.target.value})
 	}

 	fileHandler = (e) => {
 		this.setState({image: e.target.files[0]})
 	}
 	

 	submitHandler = (e) => {
 		e.preventDefault()

 		const name = this.state.title.replace(/\s+/g, '').toLowerCase();
 		let data = new FormData()
 		data.append('title', this.state.title)
 		data.append('recipe_type', this.state.recipe_type)
 		data.append('name', name)
 		data.append('overview', this.state.overview)
 		data.append('method', this.state.method)
 		data.append('ingredients', this.state.ingredients)
 		data.append('tags', this.state.tags)
 		data.append('portions', this.state.portions)
 		data.append('author', this.state.author)
 		data.append('image', this.state.image)

 		axios.post(
 			'https://vegoodies-api.herokuapp.com/recipe',
 			data,
 			{
				headers: { "Access-Control-Allow-Origin": "*",
	                       "Access-Control-Allow-Methods": "POST",
	                   	'Content-Type': 'multipart/form-data'},
	        })	
	 		.then((res)=>{
	 			console.log(res);
	 		})
	 		.catch((err)=>{
	 			console.log(err);
	 		});

	 	const recipeAdd  = {
	 		author:this.state.author,
	 		 id:"",
	 		 image:URL.createObjectURL(this.state.image),
	 		 ingredients:this.state.ingredients,
	 		 method:this.state.method,
	 		 name:name,
	 		 overview:this.state.overview,
	 		 portions:this.state.portions,
	 		 recipe_type:this.state.recipe_type,
	 		 tags:this.state.tags,
	 		 title:this.state.title}
	 	
	 	this.props.onRecipeAdd(recipeAdd)
		}


		




	render() {
		const { author, ingredients, method, overview, portions, recipe_type, tags, title } = this.state
	return (
		<div class="row justify-content-left">
		  <div class="col-xs-12 col-sm-8">
		    <div class="pad-below section-container-spacer">
		      <h1 className="main-header">Add Recipe</h1>
		      <p>Please use the form below to submit a new recipe to the website. Only add plant based recipes; any non-plant based recipes will be removed.</p>
		    </div>
		    <div class="section-container-spacer">
		       <form  onSubmit={this.submitHandler}>
		          <div class="row">
		            <div class="col-md-12">
		              <div class="form-group">
		                <h4> Type </h4>
		                <select onChange={this.changeHandler}  for="type" class="form-control" id="type" name="recipe_type" value={recipe_type} required>
		                  <option disabled selected value> -- Enter the meal type -- </option>
		                  <option value="mains">Mains</option>
		                  <option value="desserts">Desserts</option>
		                  <option value="lunches">Lunches</option>
		                  <option value="snacks">Snacks & Sides</option>
		                  <option value="breakfasts">Breakfasts</option>
		                </select>
		              </div>

		              <div class="form-group">
		                <h4> Title </h4>
		                <input onChange={this.changeHandler}  value={title} type="text" class="form-control" id="title" name="title" placeholder="Enter the title" required></input>
		              </div>

		              <div class="form-group">
		                <h4> Overview </h4>
		                <textarea onChange={this.changeHandler}  value={overview} class="form-control" rows="2" id="overview" name="overview" required placeholder="Enter a short overview"></textarea>
		              </div>

		              <div class="form-group">
		                <h4> Portions </h4>
		                <input onChange={this.changeHandler}  value={portions} type="text" class="form-control" id="portions" name="portions" required placeholder="Enter how many portions this recipe makes"></input>
		              </div>

		              <div class="form-group">
		                <h4> Method </h4>
		                <textarea onChange={this.changeHandler}  value={method} className="form-control pre-wrap" rows="5" id="method" name="method" required placeholder="Enter the method"></textarea>
		              </div>

		              <div class="form-group ingredients">
		                <h4> Ingredients </h4>
		                <textarea onChange={this.changeHandler} value={ingredients} class="form-control" rows="5" id="ingredients" ref="ingredients" name="ingredients" required placeholder="Enter the ingredients"></textarea>
		              </div>

		              <div class="form-group">
		                <h4> Tags </h4>
		                <input  onChange={this.changeHandler}  value={tags} type="text" class="form-control" id="tags" name="tags" placeholder="Enter tags to catagorise the recipe (optional)"></input>
		              </div>

		              <div class="form-group">
		                <h4> Author </h4>
		                <input onChange={this.changeHandler} value={author} type="text" class="form-control" id="author" name="author" placeholder="Enter author name (optional)"></input>
		              </div>

		              <div class="form-group ">
		              	<h4>Select image</h4>
		                  <div class="custom-file">
		    		          <input onChange={this.fileHandler}  type="file" class="custom-file-input" id="image" name="image" accept="image/*" required></input>
		    		          <label class="custom-file-label" for="image">{this.state.image === null ? 'Choose Image' : this.state.image.name}</label> 
		                </div>
		              </div>

		              <button type="submit" class="btn btn-primary btn-lg btn-color">Send</button>

		            </div>
		          </div>
		        </form>
		    </div>
		  </div>
		</div>
	);
};
};

export default AddRecipe;

// 	handleBullet = () => {
// 	const ingredients = findDOMNode(this.refs.ingredients)
// 	$(ingredients).focus(function() {
// 	    if(ingredients.value === ''){
// 	        ingredients.value +='• ';
// 	  }
// 	});

// 	$(ingredients).keyup(function(event){
// 	  var keycode = (event.keyCode ? event.keyCode : event.which);
// 	    if(keycode == '13'){
// 	        ingredients.value +='• ';
// 	  }
// 	  var txtval = document.getElementById('ingredients').value;
// 	  if(txtval.substr(txtval.length - 1) == '\n'){
// 	    ingredients.value = txtval.substring(0,txtval.length - 1);
// 	  }
// 	});
// }
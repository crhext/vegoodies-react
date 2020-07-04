import React from 'react';

const AddRecipe = () => {
	return (
		<div class="row justify-content-left">
		  <div class="col-xs-12 col-sm-8">
		    <div class="pad-below section-container-spacer">
		      <h1 className="main-header">Add Recipe</h1>
		      <p>Please use the form below to submit a new recipe to the website. Only add plant based recipes; any non-plant based recipes will be removed.</p>
		    </div>
		    <div class="section-container-spacer">
		       <form action="submit_form" method="post" class="reveal-content" enctype="multipart/form-data">
		          <div class="row">
		            <div class="col-md-12">
		              <div class="form-group">
		                <h4> Type </h4>
		                <select for="type" class="form-control" id="type" name="type" required>
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
		                <input type="text" class="form-control" id="title" name="title" placeholder="Enter the title" required></input>
		              </div>

		              <div class="form-group">
		                <h4> Overview </h4>
		                <textarea class="form-control" rows="2" id="overview" name="overview" required placeholder="Enter a short overview"></textarea>
		              </div>

		              <div class="form-group">
		                <h4> Portions </h4>
		                <input type="text" class="form-control" id="portions" name="portions" required placeholder="Enter how many portions this recipe makes"></input>
		              </div>

		              <div class="form-group">
		                <h4> Method </h4>
		                <textarea className="form-control pre-wrap" rows="5" id="method" name="method" required placeholder="Enter the method"></textarea>
		              </div>

		              <div class="form-group ingredients">
		                <h4> Ingredients </h4>
		                <textarea class="form-control" rows="5" id="ingredients" name="ingredients" required placeholder="Enter the ingredients"></textarea>
		              </div>

		              <div class="form-group">
		                <h4> Tags </h4>
		                <input type="text" class="form-control" id="tags" name="tags" placeholder="Enter tags to catagorise the recipe (optional)"></input>
		              </div>

		              <div class="form-group">
		                <h4> Author </h4>
		                <input type="text" class="form-control" id="author" name="author" placeholder="Enter author name (optional)"></input>
		              </div>

		              <div class="form-group ">
		              	<h4>Select image</h4>
		                  <div class="custom-file">
		                    <label oninput="filesize(this);" class="custom-file-label" for="image"></label> 
		                    <input type="file" class="custom-file-input" id="image" name="image" accept="image/*"></input>
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
}

export default AddRecipe;

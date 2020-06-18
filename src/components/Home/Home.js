import React from 'react';
import Masonry from 'react-masonry-css'
import breakfasts from './breakfasts.jpg';
import desserts from './desserts.jpg';
import lunch from './lunch.jpg';
import mains from './mains.jpg';
import snack from './snack.jpg';

const Home = () => {
	return (
		<div className="masonryholder test container-pad">
			<div className="masonryblocks">
		      <img className="img-responsive" alt="" src={breakfasts}></img>
		      <a href="www.vegoodies.com" class=""></a>
		    </div>
			<div className="masonryblocks">
		      <img className="img-responsive" alt="" src={mains}></img>
		      <a href="www.vegoodies.com" class=""></a>
		    </div>
			<div className="masonryblocks">
		      <img className="img-responsive" alt="" src={snack}></img>
		      <a href="www.vegoodies.com" class=""></a>
		    </div>
			<div className="masonryblocks">
		      <img className="img-responsive" alt="" src={lunch}></img>
		      <a href="www.vegoodies.com" class=""></a>
		    </div>
			<div className="masonryblocks">
		      <img className="img-responsive" alt="" src={desserts}></img>
		      <a href="www.vegoodies.com" class=""></a>
		    </div>
		</div>

/*<div class="hero-full-wrapper">
  <div class="grid">
  <div class="gutter-sizer"></div>
    <div class="grid-sizer"></div>
    
    <div class="grid-item">
      <img class="img-responsive" alt="" src="./static/assets/images/mains.jpg"></img>
      <a href="./mains" class="project-description">
        <div class="project-text-holder">
          <div class="project-text-inner">
            <h3>Mains</h3>
            <p>Discover more</p>
          </div>
        </div>
      </a>
    </div>


    <div class="grid-item">
      <img class="img-responsive" alt="" src="./static/assets/images/img-04.jpg"></img>
      <a href="./breakfasts" class="project-description">
        <div class="project-text-holder">
          <div class="project-text-inner">
            <h3>Breakfasts</h3>
            <p>Discover more</p>
          </div>
        </div>
      </a>
    </div>
    <div class="grid-item">
      <img class="img-responsive" alt="" src="./static/assets/images/lunch.jpg"></img>
      <a href="./lunches" class="project-description">
        <div class="project-text-holder">
          <div class="project-text-inner">
            <h3>Lunches</h3>
            <p>Discover more</p>
          </div>
        </div>
      </a>
    </div>



    <div class="grid-item">
      <img class="img-responsive" alt="" src="./static/assets/images/img-07.jpg"></img>
      <a href="./desserts" class="project-description">
        <div class="project-text-holder">
          <div class="project-text-inner">
            <h3>Desserts</h3>
            <p>Discover more</p>
          </div>
        </div>
      </a>
    </div>


    <div class="grid-item">
      <img class="img-responsive" alt="" src="./static/assets/images/snack.jpg"></img>
      <a href="./snacks" class="project-description">
        <div class="project-text-holder">
          <div class="project-text-inner">
            <h3>Snacks & Sides</h3>
            <p>Discover more</p>
          </div>
        </div>
      </a>
    </div>

  </div>
</div>*/
		);
}

export default Home;

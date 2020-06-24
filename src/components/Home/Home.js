import React from 'react';
import Masonry from 'react-masonry-component';
// import { Container, Row, Col } from 'react-bootstrap';
import HomeCard from './HomeCard.js';


const masonryOptions = {
    transitionDuration: 1
};
	
const Home = ({ elements }) => {
	const elems = elements.map((element, index) => {
						return (
							<div className="grid-item">
								<HomeCard
									url={elements[index].url}
									category={elements[index].category}
								/>
							</div>
							)
					})
	return(
            <Masonry
                className={'grid'} // default ''
               
                options={masonryOptions} // default {}
                
               >
                <div className="grid-sizer"></div> 
					{elems}
				</Masonry>
	     );
	}
	
export default Home;


import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
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

function App() {
  return (
    <div className="App">
      <Particles className="particles" params={particleOptions} />
      <div className="sidenav">
	      <Header />
	      <Navigation />
	      <Footer />
      </div>
      <div className="main container-pad">
		<Home />
      </div>
      
      {/*<AccoutNav />
      <IndexLinks />*/}
    </div>
  );
}

export default App;

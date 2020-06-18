import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Footer />
      {/*<AccoutNav />
      <IndexLinks />*/}
    </div>
  );
}

export default App;

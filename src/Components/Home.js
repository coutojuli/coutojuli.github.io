import React from 'react';
import Content from './Content';
import Navbar from './Navbar';
import '../styles.css';

const Home = () => {
  return (
  <div>
    <Navbar />
      <img className="banner" src="banner2.jpg" alt="website banner"/>
    <Content />    
  </div>)
}

export default Home;
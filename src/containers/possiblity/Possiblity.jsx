import React from 'react';
import possiblityImage from '../../assets/possibility.png'
import './Possiblity.css';


const Possiblity = () => {
  return (
    <div className='gpt3__possiblity section__padding' id="possibility">
      <div className="gpt3__possiblity-image">
        <img src={possiblityImage} alt="possiblity" />
      </div>
      <div className="gpt3__possiblity-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possiblity are beyond your imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur obcaecati delectus, ipsum reprehenderit, a nisi assumenda fuga illum iste porro laboriosam! Autem aliquid possimus quis dolorum ullam repudiandae animi.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Possiblity
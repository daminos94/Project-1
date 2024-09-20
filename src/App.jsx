import React from 'react';
import Article from './components/article/Article';
import Brand from './components/brand/Brand';
import CTA from './components/cta/cta';
import Feature from './components/feature/feature';
import Navbar from './components/navbar/navbar';
import Blog from './containers/blog/Blog';
import Features from './containers/features/Features';
import Footer from './containers/footer/Footer';
import Header from './containers/header/Header';
import Possibility from './containers/possiblity/Possiblity';
import GPT3 from './containers/whatGPT3/GPT3';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <GPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App


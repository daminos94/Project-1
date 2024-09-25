import React from 'react';
import './GPT3.css';
import Feature from '../../components/feature/feature';


const GPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nobis perspiciatis ea deleniti? Aperiam saepe maxime accusantium consectetur molestias doloribus. Distinctio magni nesciunt dolore illo accusamus veniam laborum obcaecati error."/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possiblities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nobis perspiciatis ea deleniti? Aperiam saepe maxime accusantium consectetur molestias doloribus."/>
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nobis perspiciatis ea deleniti? Aperiam saepe maxime accusantium consectetur molestias doloribus. Distinctio magni nesciunt dolore illo accusamus veniam laborum obcaecati error."/>
        <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nobis perspiciatis ea deleniti? Aperiam saepe maxime accusantium consectetur molestias doloribus. Distinctio magni nesciunt dolore illo accusamus veniam laborum obcaecati error."/>
      </div>
    </div>
  )
}

export default GPT3


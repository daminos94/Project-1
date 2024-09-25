import React from 'react';
import './Features.css';
import Feature from '../../components/feature/feature';

const featuresData = [
  {
    title: 'Improving end distrusts instantly' ,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam ullam. Sapiente earum aliquid sint eos quos iure aut illum odio eligendi magni iusto, numquam itaque provident, inventore veniam quas.'
  },
  {
    title: 'Become the tended active' ,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam ullam. Sapiente earum aliquid sint eos quos iure aut illum odio eligendi magni iusto, numquam itaque provident, inventore veniam quas.'
  },
  {
    title: 'Message or am nothing' ,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam ullam. Sapiente earum aliquid sint eos quos iure aut illum odio eligendi magni iusto, numquam itaque provident, inventore veniam quas.'
  },
  {
    title: 'Really boy law county' ,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam ullam. Sapiente earum aliquid sint eos quos iure aut illum odio eligendi magni iusto, numquam itaque provident, inventore veniam quas.'
  }
]


const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The furure is Now and You Need To Realize it. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features
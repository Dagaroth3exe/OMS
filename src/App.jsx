import React from 'react';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import bgImage from '../src/assets/3 1.png'
import Features from './Components/Features'
import Demo from './Components/Demo'
import Waves from './Components/Waves'



const App = () => {
  return (
  <>
    <div className="font-outfit ">
      <section className='bg-slate-200 bg-cover flex flex-col' style={{backgroundImage: `url(${bgImage})`}} >
        <Nav/>
        <hr className="bg-slate-600 "/>
        <Hero/>
      </section>
      <section className="w-full " style={{backgroundImage: `url(${Waves})`}}>
        <Features/>
        <Demo/>
      
      </section>
    </div>
  </>
  );
}

export default App;
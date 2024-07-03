import React from 'react';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import bgImage from '../src/assets/3 1.png'
import Features from './Components/Features'
import Demo from './Components/Demo'
import Waves from './Components/Waves'
import Subscription from './Components/Subscription'
import BGI from './assets/Group.svg'
import BGI2 from './assets/Group2.svg'



const App = () => {
  return (
  <>
    <div className="font-">
      <section className='bg-slate-200 bg-cover flex flex-col'>
        <Nav/>
        <hr className="bg-slate-600 "/>
        <Hero/>
      </section>
      <section className="bg-cover flex flex-col bg-no-repeat bg-center" style={{backgroundImage: `url(${BGI})`}}>
        <Features/>
        <Demo/>
      </section>
      <section className='bg-cover flex flex-col bg-no-repeat bg-end' style={{backgroundImage: `url(${BGI2})`}}>
      <Subscription/>
      </section>
    </div>
  </>
  );
}

export default App;
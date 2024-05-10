import React from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import  Reveal from 'react-reveal/Reveal';

 

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
        <Reveal>
          <Brand />
        </Reveal>
        <Reveal>
          <WhatGPT3 />
        </Reveal>
      <Reveal>
        <Features />
      </Reveal>
        <Possibility />
      <Reveal>
        <CTA />
      </Reveal>
      <Reveal>
        <Blog />
      </Reveal>
      <Reveal>
      <Footer />
      </Reveal>
    </div>
  );
}

export default App;

import React from 'react'
import Navbar from './Navbar';
import '../styling/main.css';
import IntroPage from './IntroPage';

const LandingPage = () => {
  return (
    <div style={{background: 'rgb(244,244,244)', position: 'relative'}}>
        <Navbar />
        <IntroPage />
    </div>
  )
}

export default LandingPage

import React, { useCallback } from 'react';
import  "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import "./App.css" ;
import Header from "./components/Header";
import Particles from "react-tsparticles";









const App = () => {

  return (
      <div>
      <Particles
      className='particles-canvas'
        options={{
          particles: {
            color: {
                value: "#F26F20",
            },
            links: {
                color: "#F26F20",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }}



      
        
      />
      <Navbar/>
      <Header/>
      </div>    
  
  )
}

export default App


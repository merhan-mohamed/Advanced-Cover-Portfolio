import React from 'react';
import { ReactTyped } from "react-typed";


const Header = () => {
  return (
    <div className='header-wraper'>
      <div className="overlay"></div>
        <div className="main-info">
            <h1>web development and websites promotions</h1>
            <ReactTyped
                className='Typed-Text'
                strings={[
                   "Web Design", 
                   "Web Development",
                   "Facebook Ads SMM"
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
            />
            <a href="#" className='btn-main-info'> Contact Me</a>
        </div>
    </div>
  )
}

export default Header

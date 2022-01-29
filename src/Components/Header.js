import React from "react";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Animation from './AnimationData/Animation';

export default function Header() {

 
  return <header>


    <div className="hero">
      <div className="hero-right">
        <h2>CriptoTech</h2>

        <div className="hero-right-info">
          <h1>Welcome to CriptoTech</h1>

          <h3>The best place of your investment on <span>Criptos.</span></h3>
            <Button
              color="primary"
              className='mt-3 btn-form'
               >
               <Link to="/login"  style={{color:'#fff', textDecoration:'none'}}>   Sing In</Link>            
            </Button>

        </div>
      </div>

      <div className="hero-left">
        <Animation />
      </div>

    </div>
  </header>;
}

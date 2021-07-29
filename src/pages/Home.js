import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './styles/Home.css'
import confLogo from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'
class Home extends Component {
  render() {
    return(
      <React.Fragment>
        <div className="Home__container">
          <div className="Home__info">
            <img src={confLogo} alt="Conf Logo" />
            <h1>PRINT YOUR BADGES</h1>
            <p>The easiest way to manage your conference</p>
            <Link className="btn btn-primary" to="/badges">Start Now</Link>
          </div>
          <img className="Home__astronauts" src={astronauts} alt="Home Logo"/>
        </div>
      </React.Fragment>
    ) 
  }
}

export default Home;
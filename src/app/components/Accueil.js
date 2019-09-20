import React, {Component} from 'react';
import './Accueil.css';
import Menu from './Menu';


export default class Accueil extends Component {

  render() {
    return (
      <div id='accueil'>
        <span>Alba-Karina HERVE</span>
        <Menu/>
      </div>
    )
  }
  
}


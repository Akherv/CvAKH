import React, {Component} from 'react';
import './Menu.css';
import Topic from './Topic';


export default class Menu extends Component {

  render() {
    return (
      <div id='menu'>
        <Topic/>
      </div>
    )
  }

}
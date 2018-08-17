import React, { Component } from 'react';
import {Map} from './Map.jsx'
import {CenterButton} from './map_components/centerButton.jsx'


export class App extends Component {

render() {
  return (
    <div className="app-container">
      <CenterButton />
      <Map />
    </div>
    )};

}

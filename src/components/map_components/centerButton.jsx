import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import * as actionCreators from '../../actions';

@connect(state => ({
  mapRef: state.map.mapRef,
  center: state.map.center
}), Object.assign({}, actionCreators))
export class CenterButton extends Component {
  constructor(props: Props) {
    super(props)
  }

  render() {
      return (
        <div
          className="center-btn"
          onClick={() => {
            this.props.mapRef.flyTo({ center: this.props.center, zoom: 10 })
          }}
          >
          <i className="material-icons">filter_center_focus</i>
        </div>
      )
    }
}

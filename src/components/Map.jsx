import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import * as actionCreators from '../actions';
mapboxgl.accessToken = 'pk.eyJ1IjoibnNpZWJlbmFsbGVyIiwiYSI6ImNqMnl5OXR2MDAxMXAyd21rYnJ6NmVkcWIifQ.EhkPyywSu1xXfx5uqxhsbQ'

@connect(state => ({
  mapObj: state.map
}), Object.assign({}, actionCreators))
export class Map extends Component {
  constructor(props: Props) {
    super(props)
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 1.5
    }
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: "map-container",
      style: 'mapbox://styles/mapbox/streets-v9'
    })
    this.props.storeParam({ mapRef: map })

    if (!navigator.geolocation) {
      console.log("geolocation not supported!")
    } else {
      navigator.geolocation.getCurrentPosition((geo) => {
        console.log("geolocation supported!")
        const { coords } = geo
        const lnglat = [coords.longitude, coords.latitude]
        this.props.storeParam({ center: lnglat })
        map.flyTo({ center: lnglat, zoom: 10 })

        setTimeout(() => {
          const marker = new mapboxgl.Marker()
            .setLngLat(lnglat)
            .addTo(map)
        }, 1000);

      })

    }
  }

  componentWillUnmount() {
    this.map.remove()
  }


  render() {
      return <div id="map-container" ref={el => this.mapContainer = el} />
    }
}

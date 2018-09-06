import React, {Component} from 'react';
import DeckGL, {ScatterplotLayer} from 'deck.gl';

const viewport = { 
    width: window.innerWidth,
    height: window.innerHeight,
    longitude:139.72,
    latitude: 35.66,
    zoom: 16,
}

export default class DeckGLOverlay extends Component {

  _initialize(gl) {
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
  }

  render() {
    if (!this.props.data) {
      return null;
    }

    const layers = [
      new ScatterplotLayer({
        id: 'scatterplot',
        getPosition: d => d.position,
        getColor: d => [0, 128, 255],
        getRadius: d => 5,
        opacity: 0.5,
        pickable: false,
        radiusScale: 5,
        radiusMinPixels: 0.25,
        radiusMaxPixels: 30,
        ...this.props
      })
    ];


    return (
      <DeckGL {...viewport} layers={layers} onWebGLInitialized={this._initialize} />
    );
  }
}
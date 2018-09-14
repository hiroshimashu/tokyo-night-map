import React, {Component} from 'react';
import DeckGL, { ScatterplotLayer, PathLayer } from 'deck.gl';
export default class DeckGLOverlay extends Component {
  
  _initialize(gl) {
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
  }

  render() {
    if (!this.props.pointData || !this.props.pathData) {
      return null;
    }

    const layers = [
      new ScatterplotLayer({
        id: 'scatterplot',
        getPosition: d => d.position,
        data: this.props.pointData,
        getColor: d => [0, 128, 255],
        getRadius: d => 1,
        opacity: 0.5,
        radiusScale: 5,
        pickable: false,
        radiusMinPixels: 0.25,
        radiusMaxPixels: 30,
      }),
      new PathLayer({
        id: 'path-layer',
        data: this.props.pathData,
        widthMinPixels: 2,
        widthScale: 5,
        getWidth: d => 5,
        getColor: d => d.color,
        getPath: d => d.path,
      })
    ];


    return (


      <DeckGL 
          viewState = {this.props.viewState}
          layers={layers}
          onWebGLInitialized={this._initialize} 
          onViewportChange={viewport => this._onViewportChange(viewport)}  
      />
    );
  }
}
import React, {Component} from 'react';
import DeckGL, { ScatterplotLayer, PathLayer } from 'deck.gl';
export default class DeckGLOverlay extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hoveredItems: null,
      expanded: false
    };
  }
  
  _initialize(gl) {
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
  }

  _onHover = (info) => {
    console.log("clicked");
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
        onHover: this._onHover,
      }),
      new PathLayer({
        id: 'path-layer',
        data: this.props.pathData,
        widthMinPixels: 2,
        widthScale: 5,
        getWidth: d => 2,
        getColor: d => d.color,
        getPath: d => d.path,
      }),
      new PathLayer({
        id: 'path-layer-2',
        data: this.props.pathData2,
        widthMinPixels: 2,
        widthScale: 5,
        getWidth: d => 2,
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
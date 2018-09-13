import React, { Component } from 'react';
import DeckGL, {GeoJsonLayer} from 'deck.gl';
import data from './geoJson';

const layers = new GeoJsonLayer({
    id: 'geojson-layer',
    data,
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    lineWidthScale: 20,
    lineWidthMinPixels: 2,
    getFillColor: [160, 160, 180, 200],
    getLineColor: [160, 150, 150, 200],
    getRadius: 100,
    getLineWidth: 100,
    getElevation: 30
});


class Way extends Component {

    render() {
        return (
            <DeckGL 
                viewState = {this.props.viewState}
                layers={layers} 
            />
        )
    }
}

export default Way;
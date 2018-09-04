import React from 'react';
import DeckGL, { ScatterplotLayer } from 'deck.gl';

const Point = ({ data, viewport }) => {
    const layer = new ScatterplotLayer({
        id: 'scatterplot-layer',
        data,
        pickable: true,
        opacity: 0.8,
        radiusScale: 6,
        radiusMinPixels: 1,
        radiusMaxPixels: 100,
        getPosition: d => d.coordinates,
        getRadius: d => 5,
        getColor: d => [255, 140, 0],
      });
    
      return (<DeckGL {...viewport} layers={[layer]} />);
}

export default  Point;
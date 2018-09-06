import React, { Component } from 'react';
import axios from  'axios';
import MapGL from 'react-map-gl'; 
import Point from './point';
// Need to move TOKEN into .env file and read from it. 
const MAPBOX_STYLE = 'mapbox://styles/mapbox/dark-v9';
const TOKEN = "pk.eyJ1IjoidWJlcmRhdGEiLCJhIjoiY2o4OW90ZjNuMDV6eTMybzFzbmc3bWpvciJ9.zfRO_nfL1O3d2EuoNtE_NQ";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
            longitude:139.72,
            latitude: 35.66,
            zoom: 16,
            maxZoom: 20,
            selectedHour: null
          },
        };
        this._resize = this._resize.bind(this);
    }
    
    componentDidMount() {
        this._processData();
        window.addEventListener('resize', this._resize);
        this._resize();
    }
    
      componentWillUnmount() {
        window.removeEventListener('resize', this._resize);
      }
    
      _resize() {
        this._onViewportChange({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    
      _onSelect(selectedHour) {
        this.setState({
          selectedHour: selectedHour === this.state.selectedHour ? null : selectedHour
        });
      }
    
      async _processData() {
        const taxiData = await axios.get('http://localhost:5000/get/mapinfo');
        if (taxiData) {
          console.log(taxiData);
          this.setState({status: 'LOADED'});
          const points = taxiData.data.reduce((accu, cuur) => {
            accu.push({
              position: [Number(cuur.longitude), Number(cuur.latitude)],
              pickup: true
            })
            return accu;
          }, []);
          this.setState({
            points,
            status: 'READY'
          });
        }
      }
    
      _onViewportChange(viewport) {
        this.setState({
          viewport: {...this.state.viewport, ...viewport}
        });
      }
    
    
    
      render() {
        return (
          <div>
          <MapGL
            {...this.state.viewport}
            onViewportChange={viewport => this._onViewportChange(viewport)}
            mapStyle={MAPBOX_STYLE}
            mapboxApiAccessToken={TOKEN}>
            <Point
              data={this.state.points}
            />
          </MapGL>
        </div>
        );
      }
}

export default App;
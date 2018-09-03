import React, { Component } from 'react';
import axios from  'axios';
import {StaticMap} from 'react-map-gl'; 
const TOKEN = "pk.eyJ1IjoidWJlcmRhdGEiLCJhIjoiY2o4OW90ZjNuMDV6eTMybzFzbmc3bWpvciJ9.zfRO_nfL1O3d2EuoNtE_NQ";
class App extends Component {
    state = {
        mapinfo: []
    }

    componentWillMount() {
        this.getMapData();
    }

    getMapData =  async () => {
        const mapInfo = await axios.get('http://localhost:5000/get/mapinfo');
        this.setState(() => {
            return { mapinfo: mapInfo.data }
        })
    }

    renderMapData = () => {
        if (this.state.mapinfo.length === 0) {
            return <div>no place to be shown yet</div>
        }
        const shopList = this.state.mapinfo.map((info) => {
            return (
                <div key = {info._id}>
                    name:{ info.shopName }<br/>
                    latitude: { info.latitude }<br />
                    longitude: { info.longitude }<br /> 
                    category: { info.category } <br/>
                </div>

            )
        })
        return shopList;
    }

    render() {
        console.log(process.env);
        return(
            <div>
               {this.renderMapData()}
                <StaticMap
                   width={400}
                   height={400}
                   latitude={35.66082}
                   longitude={139.726211}
                   zoom={16} 
                   mapboxApiAccessToken= {TOKEN}
                />
            </div>
        )
    }
}

export default App;
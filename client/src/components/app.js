import React, { Component } from 'react';
import axios from  'axios';

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
        return(
            <div>
               {this.renderMapData()}
            </div>
        )
    }
}

export default App;
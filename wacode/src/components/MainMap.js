/* global google */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {requestOzone, requestAll} from './Request';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MainMap extends Component {

    static defaultProps = {
        center: {
            lat: 31.5,
            lng: -97.14
        },
        zoom: 3
    };

    constructor(props){
        super(props);
        var heatMapData;
        this.state = {zoomScale: 3, radius: 2.2, data: heatMapData};
    }

    getMapOptions = {
            streetViewControl: false,
            scaleControl: true,
            fullscreenControl: false,
            styles: [{
                elementType: "labels",
                stylers: [{
                    visibility: "on"
                }]
            }],
            disableDoubleClickZoom: true,    
            mapTypeControl: true,
            zoomControl: true,
            clickableIcons: false
        }

    /*onMapClick({x, y, lat, lng, event}) {
        if (this._googleMap !== undefined) {
          const point = new google.maps.LatLng(lat, lng)
          this._googleMap.heatmap.data.push(point)
        }
    }*/

      async componentDidMount() {
        const data = await requestAll(-124.90425, 48.3979, 6);
        console.log(data);

        var heatMapData = {    
            positions: [
              {lat: 55.5, lng: -80.56},
              {lat: 34.7, lng: 28.4},],
              options: {radius: this.state.radius, opacity: 0.6, dissipating: false}
        }

        for(var i = 0; i < 500; i++){
            console.log(data.data[i].lat, data.data[i].lng);
            heatMapData.positions.push({lat: data.data[i].lat, lng: data.data[i].lng + 6});

            for (var j = 0; j < data.data[i].ozoneLevel; j++){
                heatMapData.positions.push({lat: data.data[i].lat + 3 + Math.random() % 0.005, lng: data.data[i].lng + 4 + Math.random() % 0.9});
            }
        }

        this.setState({data: heatMapData});
    }

    render() {
        return (
            <div style={{width:"100%", height:"40vw"}}>
                <GoogleMapReact ref={(el) => this._googleMap = el} 
                     bootstrapURLKeys={{ key: "AIzaSyCbrPx3Z10EQN-SXXRMXs0Bd56v2zAaAd0" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    heatmapLibrary={true}
                    heatmap={this.state.data}
                    //onClick={this.onMapClick.bind(this)}
                    mapTypeId="SATELLITE"
                    options={this.getMapOptions}
                    onGoogleApiLoaded={this.loadData}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default MainMap;
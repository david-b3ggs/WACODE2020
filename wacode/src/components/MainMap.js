/* global google */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MenuIcon from '@material-ui/icons/Menu';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MainMap extends Component {
    static defaultProps = {
        center: {
            lat: 31.5,
            lng: -97.14
        },
        zoom: 3
    };

    onMapClick({x, y, lat, lng, event}) {
        if (this._googleMap !== undefined) {
          const point = new google.maps.LatLng(lat, lng)
          this._googleMap.heatmap.data.push(point)
        }
      }

    heatMapData = {    
        positions: [
          {lat: 55.5, lng: 34.56},
          {lat: 34.7, lng: 28.4},],
          options: {radius: 20, opacity: 0.6}
      }

    render() {
        return (
            <div style={{ height: '70vh', width: '90vw' }}>
                <GoogleMapReact ref={(el) => this._googleMap = el} 
                    // bootstrapURLKeys={{ key: "AIzaSyCbrPx3Z10EQN-SXXRMXs0Bd56v2zAaAd0" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    heatmapLibrary={true}
                    heatmap={this.heatMapData}
                    onClick={this.onMapClick.bind(this)}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default MainMap;
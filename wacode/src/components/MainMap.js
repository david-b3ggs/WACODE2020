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

    constructor(props){
        super(props);
        var heatMapData;
        this.state = {zoomScale: 3, radius: 0.5, data: heatMapData};
        console.log(this.state);
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

    onMapClick({x, y, lat, lng, event}) {
        if (this._googleMap !== undefined) {
          const point = new google.maps.LatLng(lat, lng)
          this._googleMap.heatmap.data.push(point)
        }
      }

      loadData () {
        /*for (var city in citymap) {
            // Add the circle for this city to the map.
            var cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              center: citymap[city].center,
              radius: Math.sqrt(citymap[city].population) * 100
            });
          }*/
      }

      componentDidMount() {
        var heatMapData = {    
            positions: [
              {lat: 55.5, lng: -80.56},
              {lat: 34.7, lng: 28.4},],
              options: {radius: this.state.radius, opacity: 0.6, dissipating: false}
        }

        this.setState({data: heatMapData});
        console.log(this.state);
    }

    render() {
        return (
            <div style={{width:"100%", height:"40vw"}}>
                <GoogleMapReact ref={(el) => this._googleMap = el} 
                    // bootstrapURLKeys={{ key: "AIzaSyCbrPx3Z10EQN-SXXRMXs0Bd56v2zAaAd0" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    heatmapLibrary={true}
                    heatmap={this.state.data}
                    onClick={this.onMapClick.bind(this)}
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
import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for marker icons not showing up correctly
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});

interface Coordinates {
    latitude: number;
    longitude: number;
    device_id: string;
}

interface MapProps {
    coordinates: Coordinates[];
}

class Map extends Component<MapProps> {
    render() {
        const { coordinates } = this.props;

        return (
            <MapContainer 
                center={[50.595443, 36.589050]} 
                zoom={13} 
                style={{ height: "500px", width: "100%" }}
                attributionControl={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {coordinates.map((coord, index) => (
                    <Marker key={index} position={[coord.latitude, coord.longitude]}>
                        <Popup>
                            {`Device ID: ${coord.device_id}`}
                            <br />
                            {`Latitude: ${coord.latitude}, Longitude: ${coord.longitude}`}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        );
    }
}

export default Map;

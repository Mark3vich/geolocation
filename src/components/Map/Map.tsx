import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import DataTextStore from '../../stores/DataTextStores';
import ConvertData from '../../utils/SGK_T/ConvertDataSGK_T';

// Fix for marker icons not showing up correctly
L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});

interface Coordinates {
    latitude: number;
    longitude: number;
    device_id: string;
}

class Map extends Component {
    private dataText = DataTextStore.getDataText();
    private coordinates: Coordinates[]  = this.dataText ? this.dataText?.map(item => ({
                latitude: ConvertData.convertToCoordinateString(item.latitude),
                longitude: ConvertData.convertToCoordinateString(item.longitude),
                device_id: item.device_id
            })) : [];

    render() {
        // console.log(ConvertData.convertToCoordinateString(DataTextStore.getLongitudeDataText()));

        return (
            <div className="container">
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
                    {this.coordinates.map((coord, index) => (
                        <Marker key={index} position={[coord.latitude, coord.longitude]}>
                            <Popup>
                                {`Device ID: ${coord.device_id}`}
                                <br />
                                {`Latitude: ${coord.latitude}, Longitude: ${coord.longitude}`}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        );
    }
}

export default Map;

import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import DataTextStore from '../../stores/DataStoresSGK_T';
import ConvertDataSGK_T from '../../utils/Reader/SGK_T/ConvertDataSGK_T';
import { IDataSGK_T } from '../../interface/IDataSGK_T';
import { ICoordinates } from '../../interface/ICoordinates';
import DataStoresNMEA_GPGGA from '../../stores/DataStoresNMEA_GPGGA';

L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});

class Map extends Component {
    private dataText: IDataSGK_T[] | null = DataTextStore.getDataText();
    private coordinates: ICoordinates[]  = this.dataText ? this.dataText?.map(item => ({
                latitude: ConvertDataSGK_T.convertToCoordinateString(item.latitude),
                longitude: ConvertDataSGK_T.convertToCoordinateString(item.longitude),
                device_id: item.device_id
            })) : [];
    
    render() {
        return (
            <div className="container">
                <MapContainer
                    center={[this.coordinates[0].latitude, this.coordinates[0].longitude]}
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
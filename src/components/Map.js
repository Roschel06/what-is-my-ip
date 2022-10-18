import { MapContainer, TileLayer, useMap, Marker, } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from "leaflet";
import styledComponents from 'styled-components';


const icon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.1/dist/images/marker-icon-2x.png",
  iconSize: [24, 36],
  iconAnchor: [12,36]
});


const Map= ({lat, lng}) => {
  const position = [lat, lng];
  

    return (
        
        <MapContainer 
        className='map'
        center={position} 
        zoom= {6} 
        zoomControl={false} 
        style={{ width: "500px" , height: "340px" }}>
        <TileLayer
          attribution='&copy;
           <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} anchor={position} icon={icon}></Marker>
     
        </MapContainer>
    
    )
};

export default Map;

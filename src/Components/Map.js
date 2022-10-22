
import { useState, useEffect,Suspense } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Map({lng, lat }) {

  const [zoom, setZoom] = useState(0);
    const [data, setData] = useState({})

/*     useEffect(() => { 
        async function getData(){
        try {
            const result = await fetch('https://restcountries.com/v3.1/all?access_token=at_uTanxU4QwfUvFHmUMgeDa5dtRVHsEs')
            const data = await result.json()
            setData(data)
          } 
        catch(error){
          console.log('This is a wrong path ', error.message)
        }
      }getData()
      }, []);
    console.log(data);
    

    console.log (zoom) */
    return (

      
          
         
        
           
        <MapContainer center={[lng, lat]} zoom={12} scrollWheelZoom={false} style={{ width: "100%", height: "300px" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lng, lat]} />
     
      </MapContainer>
    
                
 

    )
            };
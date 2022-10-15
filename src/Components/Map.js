
import { useState, useEffect,Suspense } from "react";
import { Time,LeafletMap,CanvasContainer, Canvas,MyGlobe } from 'react-leaflet'


export default function Map({country, ipAddressDict }) {

    console.log ("Map Info", country, ipAddressDict)
    const [zoom, setZoom] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => { 
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
    

    console.log (zoom)
    return (

        country && ipAddressDict
        ?<div className="bg-black flex flex-col" >
            <div>
                <Time ipAddressDict={ipAddressDict}/>
            </div>
            <div>
                {
                <LeafletMap ipAddressDict={ipAddressDict} country={country} />
                }
            </div>
            <div className="h-100%">
               <CanvasContainer>
                    <Canvas>
                        <Suspense fallback={null}>
                            <MyGlobe x={30} y={30} />    
                        </Suspense>
                    </Canvas>

                 </CanvasContainer>
            </div>
        </div>
    :<p>loading...</p>

    )
            };
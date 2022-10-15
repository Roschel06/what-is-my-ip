
import { useState, useEffect,Suspense } from "react";


export default function Map({country, ipAddressDict }) {

    console.log ("Map Info", country, ipAddressDict)
    const [zoom, setZoom] = useState(0);
    const [data, setData] = useState({})

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
          
         
            <div className="h-100%">
           
              
                        <Suspense fallback={null}>
                            <Map x={30} y={30} />    
                        </Suspense>
                
            </div>
        </div>
    :<p>loading...</p>

    )
            };
import { useState, useEffect,Suspense } from "react";



    export default function Flag({country, ipAddressDict }) {
        const [data, setData] = useState({})
        console.log ("Map Info", country, ipAddressDict)
        const [zoom, setZoom] = useState(0);
        useEffect(() => { 
            async function getData(){
            try {
                const result = await fetch('https://restcountries.com/v3.1/all?access_token=')
                const data = await result.json()
               getData(data)
              } 
            catch(error){
              console.log('This is a wrong path ', error.message)
            }
          }getData()
          }, [])
        console.log(data);
   
    return (
        <div>
                    <div >
                        <p>
                            <span >Flag: </span>
                            {data?.flags?.svg}
                        </p>

                        <p>
                            <span >Timezone: </span>
                            {data?.timezones}
                        </p>
                    </div>
        </div>
    );
};
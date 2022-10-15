import { useState, useEffect } from "react"

export default function CountryData() {

  const [data, setData] = useState({})

  useEffect(() => { 
    async function getData(){
    try {
        const result = await fetch('http://api.countrylayer.com/v2/all?access_key=d7fd279dfd15d4bbebb11ab8f1995235')
        const data = await result.json()
        setData(data)
      } 
    catch(error){
      console.log('This is a wrong path ', error.message)
    }
  }getData()
  }, [])
  console.log(data)
  return (
    <div>
       {
  Array.isArray(data)
    ? data.map(data => {
        return <h2>{data.region} {data.name} {data.capital}</h2>;
      })
    : null}   
  
    {/* //  data?.map((data, idx) => <div> {data.region}, {data.name}, {data.capital} </div>)} */}

   </div>
  )
}
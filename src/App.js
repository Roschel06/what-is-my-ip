import './App.css';
import {useState, useEffect} from 'react'
import Map from './Components/Map';
import Flag from './Components/Flag';
import CountryData from './CountryData';


function App() {

  const [data, setData] = useState({})
    const [data2, setData2] = useState({})

  useEffect(() => { 
    async function getData(){
    try {
        const result = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IP_KEY}`)
        const data = await result.json()
        
/*         const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
          }
        }; */
        
         setData(data)
      } 
    catch(error){
      console.log('This is a wrong path ', error.message)
    }
  }getData()
  }, [])

  useEffect(() => { 
    async function getData(){
    try {  
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
          }
        };
        
        fetch('https://restcountries.com/v3.1/all', options)
          .then(response => response.json())
          .then(data2 => {
            setData2(data2)})
          // .then(response => console.log(response))
          .catch(err => console.error(err));
      } 
    catch(error){
      console.log('This is a wrong path ', error.message)
    }
  } getData()
  }, [])

const countryIndex = data2?.findIndex((item) => item?.cca2 === data?.location?.country)

const lng = data?.location?.lat
const lat = data?.location?.lng

  return (
    <div className="App">
      <h1 className="myIpText">MY IP IS: </h1>
      <h2 className="myIp">{data?.ip}</h2>
      <h2 className="myIp">Postalcode: {data?.location?.postalCode}, City: {data?.location?.city}</h2>
      <h2 className="myIp">Region: {data?.location?.region}</h2>
      <h2 className="myIp">{data?.location?.country}</h2>
      <h2 className="myIp">{data?.location?.timezone}</h2>
      <h2 className="myIp">Capital of {data2[countryIndex]?.name?.common} is: {data2[countryIndex]?.capital}</h2>
      <img src={`${data2[countryIndex]?.flags?.png}`} alt="" />
      <Map lng={lng} lat={lat} />
    </div>
  );
}

export default App;

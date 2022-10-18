import './App.css';
import {useState, useEffect} from 'react'
import Map from './components/Map';
import CountryDetail  from './components/CountryDetail'
import { MapContainer } from 'react-leaflet';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {

  const [data, setData] = useState({})
  const [data2, setData2] = useState([])
  const [value, setValue] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [ipnumber, setIpnumber] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [countryName, setCountryName] = useState('');
  const [flag, setFlag] = useState('');



  useEffect(() => { 
    async function getData(){
    try {
        const result = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=')

        .then((res) => res.json())
        .then(
          (result) => {
           	setLat(result["location"]["lat"]);
            setLng(result["location"]["lng"]);
            setIpnumber(result["ip"]);
            setCountry(result["location"]["country"]);
            setRegion(result["location"]["region"]);
            setLocation(result["location"]["city"]);
            setTimezone(`UTC${result["location"]["timezone"]}`);
            setCountryName(result["location"]["region"]);
            setValue("");

					},
					(error) => {
						console.log(error);
					}
      )
          setData(data)
        
      } 
    catch(error){
      console.log('This is a wrong path ', error.message)
    }
  }getData()
  }, [])
  console.log(country)
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
          .catch(err => console.error(err));
      } 
    catch(error){
      console.log('This is a wrong path ', error.message)
    }
  } getData()
  }, [])
  console.log(data2)


  return (
    <div className="App">
            <Header />
            <div className='container' >
            <CountryDetail 
            ipnumber={ipnumber}
            location={location}
            timezone={timezone}
            region={region} 
            country={country}
            data2={data2}
            />
            <Map lat={lat} lng={lng} 
            />
          </div>
          <Footer />
    </div>
  );
}

export default App;


//const result = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${env.REACT_APP_API_KEY}`)




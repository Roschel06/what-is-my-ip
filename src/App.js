import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState({})
    const [data2, setData2] = useState([])

  useEffect(() => { 
    async function getData(){
    try {
        const result = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_EGwYfCYlI1HnNR1eIj99NMYdoDIsO')
        const data = await result.json()
        
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '1d8cdf63d3msh3ea544923f9d03ep1c3763jsn4bcbce8d7a15',
            'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
          }
        };
        
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
            'X-RapidAPI-Key': '1d8cdf63d3msh3ea544923f9d03ep1c3763jsn4bcbce8d7a15',
            'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
          }
        };
        
        fetch('https://restcountries.com/v3.1/all', options)
          .then(response => response.json())
          .then(data2 => {
            console.log(data2)
            setData2(data2)})
          // .then(response => console.log(response))
          .catch(err => console.error(err));
      } 
    catch(error){
      console.log('This is a wrong path ', error.message)
    }
  } getData()
  }, [])

  return (
    <div className="App">
      <h1 className="myIpText">MY IP IS: </h1>
      <h2 className="myIp">{data?.ip}</h2>
      <h2 className="myIp">Postalcode: {data?.location?.postalCode}, City: {data?.location?.city}</h2>
      <h2 className="myIp">Region: {data?.location?.region}</h2>
      <h2 className="myIp">{data?.location?.country}</h2>
      <h2 className="myIp">{data?.location?.timezone}</h2>
      <h2 className="myIp">Capital of {data?.location?.country} is: {data2[85]?.capital}</h2>
      <h2 className="myIp">Flag: {data2[85]?.flag}</h2>
     {/* <div>Hee
      {data2.filter(data2 => data2.includes(data?.location?.country)).map(filteredName => (
        <div>
          {filteredName}
        </div>
      ))}
    </div> */}
  );
}

export default App;

//data.filter(item => item.alpha2Code === response.data.location.country (returns in array!)


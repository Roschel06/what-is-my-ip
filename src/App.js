import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState({})

  useEffect(() => { 
    async function getData(){
    try {
        const result = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_IP_KEY}`)
        const data = await result.json()
        setData(data)
      } 
    catch(error){
      console.log('This is a wrong path ', error.message)
    }
  }getData()
  }, [])

  return (
    <div className="App">
      <h1>Your IP is:<br/>{data.ip}</h1> 
    </div>
  );
}

export default App;

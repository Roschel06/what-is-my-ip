import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState({})

  useEffect(() => { 
    async function getData(){
    try {
        const result = await fetch('https://geo.ipify.org/api/v2/country?apiKey=')
        const data = await result.json()
        setData(data)
      } 
    catch(error){
      console.log('This is a wrong path ', error.message)
    }
  }getData()
  }, [])
console.log(data.ip);
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;

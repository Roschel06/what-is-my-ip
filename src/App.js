import './App.css';
import {useState, useEffect} from 'react'
import Map from './Components/Map';
import Flag from './Components/Flag';


function App() {

  const [data, setData] = useState({})

  useEffect(() => { 
    async function getData(){
    try {
        const result = await fetch('https://geo.ipify.org/api/v2/country?apiKey=at_uTanxU4QwfUvFHmUMgeDa5dtRVHsE')
        const data = await result.json()
        setData(data)
      } 
    catch(error){
      console.log('This is a wrong path ', error.message)
    }
  }getData()
  }, [])
console.log(data);


  return (

    <div className='flex flex-wrap gap-[10px] p-[40px]'>

   
        <h1>My IP Address is</h1>
        <br></br>
        {data.ip}
 


    <Flag />
    </div>

 

  )
      }
export default App;

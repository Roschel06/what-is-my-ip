import './App.css';
import {useState, useEffect} from 'react'
import Map from './Components/Map';
import Flag from './Components/Flag';


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
/* <<<<<<< HEAD

  return (
    <div className="App">
      <h1>Your IP is:<br/>{data.ip}</h1> 
    </div>
  );
}
=======
console.log(data);
>>>>>>> 32b4a99539e7491f1c7d488df8cd7de3e488526b
 */

  return (

    <div className='flex flex-wrap gap-[10px] p-[40px]'>

   
        <h1>My IP Address is</h1>
        <br></br>
        {data.ip}
 

<Map />
    <Flag />
    </div>

 

  )
      }
export default App;

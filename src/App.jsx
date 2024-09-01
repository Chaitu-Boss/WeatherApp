import React from 'react'
import './App.css'
import axios from 'axios'
import env from "dotenv"

function App(){
  const [city, setCity] = React.useState('New York')
  const [weather, setweather] = React.useState({
    "coord": {
      "lon": -74.006,
      "lat": 40.7143
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 30.29,
      "feels_like": 31.66,
      "temp_min": 28.68,
      "temp_max": 31.99,
      "pressure": 1016,
      "humidity": 51,
      "sea_level": 1016,
      "grnd_level": 1015
    },
    "visibility": 10000,
    "wind": {
      "speed": 3.09,
      "deg": 60
    },
    "clouds": {
      "all": 0
    },
    "dt": 1722870992,
    "sys": {
      "type": 1,
      "id": 4610,
      "country": "US",
      "sunrise": 1722851819,
      "sunset": 1722902817
    },
    "timezone": -14400,
    "id": 5128581,
    "name": "New York",
    "cod": 200
  })
  const [type, setType] = React.useState('Rain')
  // switch(weather.weather.main){
  //   case 'Clear':
  //     setType('Clear')
  //     break;
  //   case 'Clouds':
  //     setType('Clouds')
  //     break;
  //   case 'Drizzle':
  // }
  // const weathers =["Clear","Drizzle","Clouds","Mist","Snow","Rain"]
  // React.useEffect(()=>{
  //   weathers.map((elem)=>{
  //     if(elem===weather.weather[0].main){
  //       setType(elem)
  //     }
  //   })
  //   console.log(type)
  // },[])  
  const apiKey =process.env.API_KEY
  async function handleSearchClick() {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      setweather(response.data)

      // console.log(weather.weather[0].main)
    }
    catch (err) {
      alert(`City Name ${city}. Enter Correct City Name`)
    }
  }
  var newsrc=weather.weather[0].main+".png"
  console.log(newsrc)
  return (
    <>
      <div className='main my-20 bg-blue-400 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md grid items-center'>

        <div className="search flex gap-2 py-0 justify-center">
          <input type="text" name="city" id="city" className="block w-72 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter City Name" value={city} onChange={(e) => { setCity(e.target.value) }} />
          <i className="bi bi-search flex bg-white justify-center items-center gap-1 rounded-full px-2 cursor-pointer" onClick={handleSearchClick}></i>
        </div>
        <div className='info flex flex-col justify-center items-center'>
          <img src={newsrc} alt="" className='w-36 h-36' />
          <div className='flex flex-col gap-1 justify-center items-center'>
            <p className='text-5xl text-white'>{weather.main.temp} °C</p>
            <h1 className='text-3xl text-white' >{weather.name}</h1>
          </div>
        </div>
        <div className='wind-humid relative bottom-2 left-6 flex gap-4'>
          <div className='flex items-center gap-2'>
            <img src="Wind.png" alt="" className='h-8 w-8' />
            <div>
              <h2 className='text-white text-xl'>{weather.wind.speed} km/hr</h2>
              <p className='text-white'>Wind speed</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <img src="Pressure.png" alt="" className='h-8 w-8' />
            <div>
              <h2 className='text-white text-xl'>{(weather.main.pressure / 1013.25).toFixed(2)} atm</h2>
              <p className='text-white'> Air Pressure</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <img src="Humidity.png" alt="" className='h-8 w-8' />
            <div >
              <h2 className='text-white text-xl'>{weather.main.humidity}%</h2>
              <p className='text-white'>Humidity</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App

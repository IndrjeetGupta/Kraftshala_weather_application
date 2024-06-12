import React, { useEffect, useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiBrightnessUp } from "react-icons/ci";

import '../Css/Home.css'
import { newfetchData } from './data';

function Home({toggleFun, toggle}) {

    const [weatherData , setWeatherData] = useState([])
    const [city , setCity] =useState('bengaluru')
    
    useEffect(() =>{
        const fetchData = async() =>{
            const data = await newfetchData(city)
            console.log(data)
            setWeatherData(data)
        }
        fetchData()

    },[city])

   
    const cityFun = (e) =>{
        if (e.keyCode === 13){
            setCity(e.currentTarget.value)

        }
    }

    // name,
    // temp,
    // feels_like,
    // humidity,
    // pressure,
    // temp_max,
    // temp_min,
    // speed,
    // deg,
    // country
    const tempeture = Math.round(weatherData.temp-273.15)
    const minTemp = Math.round(weatherData.temp_min-273.15)
    const maxTemp = Math.round(weatherData.temp_max-273.15)
    const feelsLike =  Math.round(weatherData.feels_like-273.15)
    const pressure = Math.round(weatherData.pressure)
    const humidity = Math.round(weatherData.humidity)
    const windSpeed = Math.round(weatherData.speed)

    // className={openSidebarToggle ? "sidebar-responsive": ""}
     
  return (
    <div>
        <div className='overlay'>
            <div className='container'>
                <div  className={toggle ? 'weatherBlack' : 'weatherWhite'}>
                <h1  >Weather Application</h1>

                </div>
               
                    
                
                <div  className={toggle ? "section_inputBack" : "section_inputWhite"}  >
                    <input className='input' onKeyDown={cityFun} type="text" name="city" id=""  placeholder='     Enter City'/>
                    <button className='btn' onClick={toggleFun}>{toggle ?  <MdDarkMode/> : <CiBrightnessUp/> } </button>
                   
                    

                </div>

                <div  className={toggle ? "tempBlack" : "tempWhite"}>
                    <p className='city'>City {weatherData.name}</p>
                    <p className='tempC'>Temp {tempeture} °C</p>


                </div>

                <div className='grid'>

                    <div  className={toggle ? 'tempdivblack' : 'tempdivwhite' } >
                        <p>Min {minTemp} °C</p>
                        
                        
                    </div>
                    <div className={toggle ? 'tempdivblack' : 'tempdivwhite' } ><p>Max {maxTemp} °C</p></div>
                    <div className={toggle ? 'tempdivblack' : 'tempdivwhite' } ><p>Feels Like {feelsLike} °C</p></div>
                        
                    <div className={toggle ? 'tempdivblack' : 'tempdivwhite' } ><p>Pressure {pressure} hpa</p></div>
                    <div className={toggle ? 'tempdivblack' : 'tempdivwhite' } ><p>Humidity {humidity} %</p></div>
                    <div className={toggle ? 'tempdivblack' : 'tempdivwhite' } ><p>Wind {windSpeed} mph</p></div>

                    
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Home

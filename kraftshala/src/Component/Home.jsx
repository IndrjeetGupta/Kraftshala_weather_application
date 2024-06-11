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
    const tempeture = Math.round(weatherData.temp-273.15)
     
  return (
    <div>
        <div className='overlay'>
            <div className='container'>
                <div className='section_input'>
                    <input className='input' onKeyDown={cityFun} type="text" name="city" id=""  placeholder='     Enter City'/>

                    <button className='btn' onClick={toggleFun}>{toggle ?  <MdDarkMode/> : <CiBrightnessUp/> } </button>
                   
                    

                </div>

                <div className='temp'>
                    <p className='city'>City {weatherData.name}</p>
                    <p className='tempC'>Temp {tempeture} °C</p>


                </div>

                <div className='grid'>

                    <div className='tempdiv'><p>hi</p>

                    </div>
                    <div className='tempdiv'>hi</div>
                    <div className='tempdiv'>hi</div>
                    <div className='tempdiv'>hi</div>
                    <div className='tempdiv'>hi</div>
                    <div className='tempdiv'>hi</div>

                    
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Home

import React, { useEffect, useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiBrightnessUp } from "react-icons/ci";

import '../Css/Home.css'
import { memo } from 'react';
import { newfetchData } from './data';

function Home({toggleFun, toggle}) {

 
    
    const [weatherData , setWeatherData] = useState([])
    const [city , setCity] =useState('bengaluru')
    const API_KEY = '58dd7367d80d378561ca0e8befa43a20'
    



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
   


     console.log(weatherData.temp)
  return (
    <div>
        <div className='overlay'>
            <div className='container'>
                <div className='section_input'>
                    <input className='input' onKeyDown={cityFun} type="text" name="city" id=""  placeholder='     Enter City'/>

                    <button className='btn' onClick={toggleFun}>{toggle ?  <MdDarkMode/> : <CiBrightnessUp/> } </button>
                   
                    

                </div>

                <div>
                <h1>{weatherData.name} </h1>
                {/* <h1>{weatherData.main} </h1> */}

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Home

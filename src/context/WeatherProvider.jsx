import { createContext, useEffect, useState } from "react"
import data from '../../public/data.json'

export const WeatherContext = createContext()

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY
const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState({})
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [unit, setUnit] = useState('C')
  
  // get geolocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    })
  }, [])
  const getData = async () => {
    // console.log(location)
    // const locationUrl = 'lat=' + location.latitude + '&lon=' + location.longitude
    // const url = BASE_URL + locationUrl + API_KEY
    // const rawRes = await fetch(url)
    // const res = await rawRes.json()
    // setWeather(data)
  }

  return (
    <WeatherContext.Provider value={{
      weather, loading, setLoading, showModal, setShowModal,
      unit, setUnit, location
    }}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider
import { createContext, useEffect, useState } from "react"
import getDate from "../services/getDate"
import getGPSLocation from "../services/getGPSLocation"
import fetchWeather from "../services/fetchWeather"
import fetchForecast from "../services/fetchForecast"

export const WeatherContext = createContext()


const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState({})
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [unit, setUnit] = useState('C')
  const [today, setToday] = useState(0)
  const [forecast, setForecast] = useState([])

  // weather
  const getWeather = async () => {
    if (!location.latitude || !location.longitude) { return }
    let res = await fetchWeather(unit, location)
    setWeather(res)
    res = await fetchForecast(unit, location)
    setForecast(res)
  }
  useEffect(() => { getWeather() }, [location, unit])

  // location / date
  const getLocation = async () => {
    const loc = await getGPSLocation()
    setLocation(loc)
  }
  useEffect(() => {
    setToday(getDate())
    getLocation()
  }, [])

  return (
    <WeatherContext.Provider value={{
      weather, forecast, loading, setLoading, showModal, setShowModal,
      unit, setUnit, location, today
    }}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider
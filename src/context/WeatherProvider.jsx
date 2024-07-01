import { createContext, useEffect, useState } from "react"
import getDate from "../services/getDate"
import getGPSLocation from "../services/getGPSLocation"
import fetchWeather from "../services/fetchWeather"
import fetchForecast from "../services/fetchForecast"
import fetchLocations from "../services/fetchLocations"

export const WeatherContext = createContext()


const WeatherProvider = ({ children }) => {
  const [geoLocation, setGeoLocation] = useState({})
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showCoordinates, setShowCoordinates] = useState(false)
  const [showError, setShowError] = useState(false)
  const [unit, setUnit] = useState('C')
  const [today, setToday] = useState(0)
  const [forecast, setForecast] = useState([])
  const [location, setLocation] = useState('')
  const [locations, setLocations] = useState([])

  // error snackbar
  const showErrorSnack = () => {
    setShowError(true)
    setTimeout(() => {
      setShowError(false)
    }, 6000);
  }

  // weather / forecast
  const getWeather = async () => {
    if (!geoLocation.latitude || !geoLocation.longitude) { return }
    let res = await fetchWeather(unit, geoLocation)
    res.success ? setWeather(res.data) : showErrorSnack()
    if (res.success) {
      setShowCoordinates(false)
      res = await fetchForecast(unit, geoLocation)
      setForecast(res)
    }
  }
  useEffect(() => { getWeather() }, [geoLocation, unit])

  // geolocation / date
  const getLocation = async () => {
    const res = await getGPSLocation()
    setGeoLocation(res)
  }
  useEffect(() => {
    setToday(getDate())
    getLocation()
  }, [])

  // locations
  const getLocations = async () => {
    const res = await fetchLocations(location)
    setLocations(res)
  }
  useEffect(() => {
    if (!location || location === '') return
    getLocations()
  }, [location])

  return (
    <WeatherContext.Provider value={{
      weather, forecast, loading, setLoading, showModal, setShowModal,
      unit, setUnit, location: geoLocation, today, setLocation, locations,
      setGeoLocation, showCoordinates, setShowCoordinates, showError,
      setShowError
    }}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider
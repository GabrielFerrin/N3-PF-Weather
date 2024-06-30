import { createContext, useEffect, useState } from "react"
import data from '../data.json'
import filterData from "../services/filterData"

export const WeatherContext = createContext()

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY
const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState({})
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [unit, setUnit] = useState('C')
  const [today, setToday] = useState(0)

  useEffect(() => {
    const date = new Date()
    const day = date
      .toLocaleDateString('en-US', { weekday: 'long' })
      .slice(0, 3)
    const dayNumber = date.getDate()
    const month = date.toLocaleDateString('en-US', { month: 'long' })
      .slice(0, 3)
    const completeDate = day + ', ' + dayNumber + ' ' + month
    setToday(completeDate)
  }, [])

  const getData = async () => {
    if (!location.latitude || !location.longitude) {
      return
    }
    const locationUrl = 'lat=' + location.latitude + '&lon=' + location.longitude
    const currentUnit = unit === 'C' ? 'metric' :
      unit === 'F' ? 'imperial' : 'standard'
    const url = BASE_URL + locationUrl +
      '&appid=' + API_KEY + '&units=' + currentUnit
    // const rawRes = await fetch(url)
    // const res = await rawRes.json()
    setWeather(filterData(data))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      },
      (error) => {
        setLocation({
          latitude: -0.9535488,
          longitude: -80.7174144
        })
      }
    )
  }, [])

  useEffect(() => {
    getData()
  }, [location])

  return (
    <WeatherContext.Provider value={{
      weather, loading, setLoading, showModal, setShowModal,
      unit, setUnit, location, today
    }}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider
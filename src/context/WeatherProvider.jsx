import { createContext, useEffect, useState } from "react"
import data from '../../public/data.json'

export const WeatherContext = createContext()

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY
const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [unit, setUnit ] = useState('C')
  const getData = async () => {
    // const url = BASE_URL + 'lat=44.34&lon=10.99&appid=' + API_KEY
    // const rawRes = await fetch(url)
    // const res = await rawRes.json()
    setWeather(data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <WeatherContext.Provider value={{
      weather, loading, setLoading, showModal, setShowModal,
      unit, setUnit
    }}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider
import filterWeatherData from "./filterWeather"

const WEATHER_URL = import.meta.env.VITE_WEATHER_URL
const API_KEY = import.meta.env.VITE_API_KEY

const fetchWeather = async (unit, location) => {
  try {
    const locationUrl = 'lat=' + location.latitude + '&lon=' +
      location.longitude
    const currentUnit = unit === 'C' ? 'metric' :
      unit === 'F' ? 'imperial' : 'standard'
    const url = WEATHER_URL + locationUrl +
      '&appid=' + API_KEY + '&units=' + currentUnit
    const rawRes = await fetch(url)
    const res = await rawRes.json()
    return { success: true, data: filterWeatherData(res) }
  } catch (error) {
    return { success: false }
  }
}

export default fetchWeather
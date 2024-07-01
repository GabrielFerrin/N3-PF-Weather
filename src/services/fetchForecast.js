import forecastData from '../forecast-data.json'
import filterForecastData from './filterForecast'

const FORECAST_URL = import.meta.env.VITE_FORECAST_URL
const API_KEY = import.meta.env.VITE_API_KEY

const fetchForecast = async (unit, location) => {
  const locationUrl = 'lat=' + location.latitude + '&lon=' +
    location.longitude
  const currentUnit = unit === 'C' ? 'metric' :
    unit === 'F' ? 'imperial' : 'standard'
  const url = FORECAST_URL + locationUrl +
    '&appid=' + API_KEY + '&units=' + currentUnit
  const rawRes = await fetch(url)
  const res = await rawRes.json()
  return filterForecastData(res)
  // return filterForecastData(forecastData)
}

export default fetchForecast
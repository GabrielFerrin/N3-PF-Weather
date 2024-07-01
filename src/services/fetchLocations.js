import locationsData from '../locations-data.json'
import filterLocations from './filterLocations'

const LOCATIONS_URL = import.meta.env.VITE_LOCATIONS_URL
const API_KEY = import.meta.env.VITE_API_KEY

const fetchLocations = async (location) => {
  const url = LOCATIONS_URL + location + '&limit=15&appid=' + API_KEY
  const rawRes = await fetch(url)
  const res = await rawRes.json()
  return filterLocations(res)
  // return filterLocations(locationsData)
}

export default fetchLocations
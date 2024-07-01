import countriesData from '../countries-data.json'

const filterLocations = (locations) => {
  const filteredLocations = locations.map(location => {
    return {
      name: location.name + ', ' + (countriesData.find(country => country.Code ===
        location.country).Name || location.country) +
        (location.state ? ', ' + location.state : ''),
        latitude: location.lat,
        longitude: location.lon
    }
  })
  return filteredLocations
}

export default filterLocations
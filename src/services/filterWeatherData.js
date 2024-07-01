const firstLetterUpper = (str) => {
  const strArr = str.split(' ')
  return strArr.map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
}

const getWindAbreviation = (degrees) => {
  const directions = [
    'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW',
    'WSW', 'W', 'WNW', 'NW', 'NNW'
  ]
  return directions[Math.round(degrees / 22.5)]
}

const filterWeatherData = (weatherData) => {
  return {
    temp: Math.round(weatherData.main.temp),
    icon: weatherData.weather[0].icon.slice(0, 2) + '.png',
    main: weatherData.weather[0].main, city: weatherData.name,
    description: firstLetterUpper(weatherData.weather[0].description),
    windSpeed: weatherData.wind.speed.toFixed(1),
    windDegree: weatherData.wind.deg,
    windDirection: getWindAbreviation(weatherData.wind.deg),
    humidity: weatherData.main.humidity,
    airPreasure: (weatherData.main.pressure * 0.01).toFixed(1),
    visibility: (weatherData.visibility * 0.000621371192).toFixed(1)
  }
}

export default filterWeatherData
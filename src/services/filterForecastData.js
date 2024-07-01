const getDayStamp = (utcTimestamp) => {
  const date = new Date(utcTimestamp * 1000)
  const options = { timeZone: 'UTC', day: 'numeric' }
  const dayToLocal = parseInt(date.toLocaleDateString('en-US', options))
  const today = parseInt(new Date().getDay())
  let completeDate = ''
  if (dayToLocal !== (today + 1)) {
    const day = date
      .toLocaleDateString('en-US', { weekday: 'long' })
      .slice(0, 3)
    const dayNumber = date.getDate()
    const month = date.toLocaleDateString('en-US', { month: 'long' })
      .slice(0, 3)
    completeDate = day + ', ' + dayNumber + ' ' + month
  } else {
    completeDate = 'Tomorrow'
  }
  return completeDate
}

const filterForecastData = ({ list }) => {
  const filteredData = list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000)
      .toLocaleTimeString([], { hour: '2-digit', hour12: false })
    if (date === '13') {
      const day = new Date(item.dt * 1000).toLocaleDateString()
      if (!acc.find(item => item.day === day)) {
        acc.push({
          day, date: getDayStamp(item.dt),
          icon: item.weather[0].icon.slice(0, 2) + '.png',
          minTemp: Math.round(item.main.temp_min),
          maxTemp: Math.round(item.main.temp_max)
        })
      }
    }
    return acc
  }, [])
  return filteredData
}

export default filterForecastData
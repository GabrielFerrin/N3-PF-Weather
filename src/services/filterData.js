const firstLetterUpper = (str) => {
  const strArr = str.split(' ')
  return strArr.map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
}

const filterData = (data) => {
  console.log(data)
  return {
    temp: data.main.temp, icon: data.weather[0].icon.slice(0, 2) + '.png',
    main: data.weather[0].main, city: data.name,
    description: firstLetterUpper(data.weather[0].description)
  }
}

export default filterData
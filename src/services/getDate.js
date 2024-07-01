const getDate = () => {
    const date = new Date()
    const day = date
      .toLocaleDateString('en-US', { weekday: 'long' })
      .slice(0, 3)
    const dayNumber = date.getDate()
    const month = date.toLocaleDateString('en-US', { month: 'long' })
      .slice(0, 3)
    const completeDate = day + ', ' + dayNumber + ' ' + month
    return completeDate
}

export default getDate

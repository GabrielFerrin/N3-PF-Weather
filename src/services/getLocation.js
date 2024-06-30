const getLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    },
    (error) => {
      return {
        latitude: -0.9535488,
        longitude: -80.7174144
      }
    }
  )
}

export default getLocation
import { useContext } from "react"
import { WeatherContext } from "../context/WeatherProvider"

function Location({ location, setLocation, coordinates }) {
  const { setGeoLocation, setShowModal } = useContext(WeatherContext)
  const handleClick = () => {
    setLocation(location)
    setGeoLocation(coordinates)
    setShowModal(false)
  }

  return (
    <div className="flex items-center px-6 border border-[#1E213A] hover:border hover:border-[#616475]  h-[48px]  font-[500] cursor-pointer text-[#A09FB1] transition duration-300"
      onClick={handleClick}>
      {location}
    </div>
  )
}

export default Location
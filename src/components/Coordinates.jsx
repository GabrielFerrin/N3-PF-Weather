import { useContext, useRef } from "react"
import { WeatherContext } from "../context/WeatherProvider"
import Location from "./icons/Location"

function Coordinates() {
  const { setTryCoordinate, getLocation, setShowCoordinates } = useContext(WeatherContext)
  const latitude = useRef(null)
  const longitud = useRef(null)
  const twStyle = "px-4 border border-[#616475] focus:outline-none " +
    "bg-transparent h-[48px] w-[250px] focus:border-[#E7E7EB] transition " +
    "duration-300 font-[500] [#616475]::placeholder"
  const handleClick = () => {
    if (latitude.current.value && longitud.current.value)
      setTryCoordinate({
        latitude: latitude.current.value,
        longitude: longitud.current.value
      })
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter')
      handleClick()
  }

  const useMyLocations = () => {
    getLocation()
    setShowCoordinates(false)
  }

  return (
    <div style={{ right: '0', transform: 'translateX(-24%)' }}
      id='coordinates'
      className="absolute top-[6rem] bg-[#6E707A] bg-opacity-30 w-[250px] z-50">
      <div className="relative hover:text-[#555555] bg-[#3C47E9] hover:bg-[#E7E7EB] active:bg-[#b5b5bb] transition duration-300 bg-opacity-90">
        <input onClick={useMyLocations}
          className="text-[16px] w-[100%] h-[48px] font-[600]   "
          type="button" value="Use my location" />
        <div
          className="absolute z-55 top-[17px] right-10 h-4 w-4 hover:fill-[#555555]">
          <Location />
        </div>
      </div>
      <input className={twStyle} ref={latitude}
        type="number" placeholder="latitude" onKeyDown={handleKeyDown} />
      <input className={twStyle} ref={longitud}
        type="number" placeholder="longitude" onKeyDown={handleKeyDown} />
      <input onClick={handleClick}
        className="bg-[#3C47E9] text-[16px] w-[100%] h-[48px] font-[600] hover:bg-[#E7E7EB] hover:text-[#555555] active:bg-[#b5b5bb] transition duration-300 bg-opacity-90"
        type="button" value="Apply" />
    </div>
  )
}

export default Coordinates
import { useContext, useRef } from "react"
import { WeatherContext } from "../context/WeatherProvider"

function Coordinates() {
  const { setGeoLocation } = useContext(WeatherContext)
  const latitude = useRef(null)
  const longitud = useRef(null)
  const twStyle = "px-4 border border-[#616475] focus:outline-none " +
    "bg-transparent h-[48px] w-[250px] focus:border-[#E7E7EB] transition " +
    "duration-300 font-[500] [#616475]::placeholder"
  const handleClick = () => {
    if (latitude.current.value && longitud.current.value) {
      setGeoLocation({
        latitude: latitude.current.value,
        longitude: longitud.current.value
      })
    }
  }
  return (

    <div style={{ right: '0', transform: 'translateX(-24%)' }}
      id='coordinates'
      className="absolute top-[6rem] bg-[#6E707A] bg-opacity-30 w-[250px] z-50">
      <input className={twStyle} ref={latitude}
        type="number" placeholder="latitude" />
      <input className={twStyle} ref={longitud}
        type="number" placeholder="longitude" />
      <input onClick={handleClick}
        className="bg-[#3C47E9] text-[16px] w-[100%] h-[48px] font-[600] hover:bg-[#E7E7EB] hover:text-[#555555] active:bg-[#b5b5bb] transition duration-300 bg-opacity-90"
        type="button" value="Search" />
    </div>
  )
}

export default Coordinates
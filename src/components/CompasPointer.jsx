import { useContext } from "react"
import { WeatherContext } from "../context/WeatherProvider"

function CompasPointer() {
  const { weather } = useContext(WeatherContext)

  return (
    <div className="flex items-center justify-center gap-3">
      <div className="flex items-center justify-center h-[30px] w-[30px] rounded-[50%] bg-[#626475]">
        <img className="h-[13px]" src="compas.svg" alt="Compas icon"
          style={{ transform: `rotate(${weather.windDegree}deg)` }} />
      </div>
      WSW
    </div>
  )
}
export default CompasPointer
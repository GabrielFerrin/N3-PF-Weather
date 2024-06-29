import { useContext } from "react"
import { WeatherContext } from "../context/WeatherProvider"

function Forecast({ date, icon, startTemp, endTemp }) {
  const { unit } = useContext(WeatherContext)
  return (
    <div className="flex flex-col justify-between items-center py-[18px] bg-[#1E213A] w-[120px] h-[177px] font-[500] text-[16px]">
      <span>{date}</span>
      <img className="h-[62px] w-auto object-contain" src={icon} alt="Weather icon" />
      <span className="flex gap-5">
        <span>{startTemp}°{unit}</span>
        <span className="text-[#A09FB1] font-[500]">{endTemp}°{unit}</span>
      </span>
    </div>
  )
}
export default Forecast
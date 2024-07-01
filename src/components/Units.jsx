import { useContext } from "react"
import { WeatherContext } from "../context/WeatherProvider"

function Units({ elementUnit }) {
  const { unit, setUnit } = useContext(WeatherContext)
  const selectedClass = elementUnit === unit ? `text-[#100E1D] bg-[#E7E7EB]` :
    `bg-[#585676]`

  return (
    <span onClick={() => setUnit(elementUnit)}
      className={selectedClass + " font-[700] font-sans text-[18px] h-[40px] w-[40px] flex justify-center items-center cursor-pointer rounded-full pr-1"}>°
      {elementUnit}
    </span>
  )
}
export default Units
import { useContext } from "react"
import { WeatherContext } from "../context/WeatherProvider"

function Units({ elementUnit }) {
  const { unit, setUnit } = useContext(WeatherContext)
  const selectedClass = elementUnit === unit ? `text-[#100E1D] bg-[#E7E7EB]` :
    `bg-[#585676]`

  return (
    <span onClick={() => setUnit(elementUnit)}
      className={selectedClass + " font-[700] font-sans text-[18px] h-[40px] w-[40px] flex justify-center items-center cursor-pointer rounded-full pr-1 hover:bg-[#E7E7EB] hover:text-[#555555] active:bg-[#b5b5bb] transition duration-300"}>°
      {elementUnit}
    </span>
  )
}
export default Units
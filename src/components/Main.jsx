import { useContext } from "react"
import { WeatherContext } from "../context/WeatherProvider"
import CompasPointer from "./CompasPointer"
import Forecast from "./Forecast"
import Hightlights from "./Hightlights"
import Meterbar from "./Meterbar"
import Units from "./Units"

function Main() {
  const { weather: { windSpeed, humidity, visibility, airPreasure },
    forecast } = useContext(WeatherContext)

  return (
    <div className="flex w-[100%] p-8">
      <div
        className="flex flex-col justify-between h-auto max-w-[720px] mx-auto">
        {/* options */}
        <div className="w-full h-fit flex justify-end gap-3">
          <Units elementUnit="C" />
          <Units elementUnit="F" />
          <Units elementUnit="K" />
        </div>
        {/* forecast */}
        <div className="flex justify-center flex-wrap gap-7 pt-14">
          {forecast && forecast.map((item, index) => (
            <Forecast key={index} {...item} />
          ))}
        </div>
        {/* hightlights */}
        <div className="flex flex-col gap-6 pt-8 pb-5">
          <h3 className="font-[700] text-[24px]">Today's Hightlights</h3>
          <div className="flex flex-wrap gap-7 justify-center">
            <Hightlights title='Wind status' value={windSpeed} scale='mph'>
              <CompasPointer />
            </Hightlights>
            <Hightlights title='Humidity' value={humidity} scale='%' >
              <Meterbar humidity={humidity} />
            </Hightlights>
            <Hightlights
              title='Visibility' value={visibility} scale=' miles' />
            <Hightlights
              title='Air pressure' value={airPreasure} scale=' mb' />
          </div>
        </div>
        {/* footer */}
        <footer
          className="w-full flex justify-center items-center text-[#88869D] font-[500] box-border">
          <span>
            created by <span
              className="font-extrabold underline">Gabriel Ferrin</span> -
            <span> Funval</span>
          </span>
        </footer>
      </div>
    </div>
  )
}
export default Main
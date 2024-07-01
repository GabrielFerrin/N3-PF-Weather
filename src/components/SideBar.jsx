import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherProvider'
import Location from './icons/Location'
import Coordinates from './Coordinates'

function SideBar() {
  const { weather, unit, today, setShowModal, showCoordinates, setShowCoordinates } = useContext(WeatherContext)

  return (
    <div className="bg-[#1E213A]">
      <div className="w-[459px] max-h-[900px] py-[42px] relative flex items-center justify-between flex-col gap-[.5rem] custom-md:w-auto">
        {/* coordinates modal */}
        {showCoordinates && <Coordinates />}
        {/* nav */}
        <div className="flex justify-between px-[42px] w-full gap-8">
          <button id='search-btn' className="bg-[#6E707A] text-[16px] w-[161px] h-[40px] hover:bg-[#E7E7EB] hover:text-[#555555] transition duration-300 active:bg-[#b5b5bb] focus:outline-none" onClick={() => setShowModal(true)}>
            Search for places
          </button>
          <div id='location' onClick={() => setShowCoordinates(!showCoordinates)}
            className="h-[40px] w-[40px] bg-[#6E707A] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#E7E7EB] hover:text-[#555555] active:bg-[#b5b5bb] transition duration-300 p-[9px]">
            <Location />
          </div>
        </div>
        {/* hero */}
        <div className="h-[295px] w-full bg-cover bg-no-repeat bg-center p-[4rem] mt-6"
          style={{ backgroundImage: 'url(cloud-background.svg)' }}>
          <img src={weather.icon} alt="Weather icon"
            className="object-contain w-full h-full relative" />
        </div>
        {/* temperature */}
        <div className="bg-transparent relative flex justify-center items-center h-[150px] w-full mt-[-1rem]">
          <h2 className="text-[9rem] font-[500] text-white">
            {weather.temp}
            <span className="text-[#88869D] text-[3rem] font-sans font-[400]">
              °{unit}
            </span>
          </h2>
        </div>
        {/* description */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[2.2rem] font-[600] text-[#88869D] pt-6">{weather.main}</h2>
          <h4 className="text-[1rem] font-[600] text-[#88869D]">{weather.description}</h4>
        </div>
        {/* footer */}
        <footer className="w-full flex flex-col gap-7 justify-center items-center text-[#88869D] pt-6">
          <span className="flex gap-3">Today <span>•</span> {today}</span>
          <span className="flex gap-[0.5rem]">
            <img src="location-icon.svg" alt="Location icon" className="w-[14px]" />
            {weather.city}
          </span>
        </footer>
      </div>
    </div>
  )
}

export default SideBar

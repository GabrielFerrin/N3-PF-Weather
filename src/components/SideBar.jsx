import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherProvider'
import Location from './icons/Location'

function SideBar() {
  const { setShowModal, location } = useContext(WeatherContext)

  return (    
    <div className="bg-[#1E213A]">
      {location && <span>{location.latitud}</span>}
      <div className="w-[459px] h-full max-h-[1100px] py-[42px] relative flex items-center justify-between flex-col gap-[1.5rem] custom-md:w-auto">
        {/* nav */}
        <div className="flex justify-between px-[42px] w-full gap-8">
          <button className="bg-[#6E707A]  text-[16px] w-[161px] h-[40px] hover:bg-[#E7E7EB] hover:text-[#555555] transition duration-300 active:bg-[#b5b5bb] focus:outline-none" onClick={() => setShowModal(true)}>
            Search for places
          </button>
          <div className="h-[40px] w-[40px] bg-[#6E707A] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#E7E7EB] hover:text-[#555555] active:bg-[#b5b5bb] transition duration-300 p-[9px]">
            <Location />
          </div>
        </div>
        {/* hero */}
        <div className="h-[325px] w-full bg-cover bg-no-repeat bg-center p-[3rem] mt-6"
          style={{ backgroundImage: 'url(cloud-background.svg)' }}>
          <img src="shower.png" alt="Weather icon"
            className="object-contain w-full h-full relative" />
        </div>
        {/* temperature */}
        <div className="bg-transparent relative flex justify-center items-center h-[150px] w-full mt-[-1rem]">
          <h2 className="text-[9rem] font-[500] text-white">
            15
            <span className="text-[#88869D] text-[3rem] font-sans font-[400]">
              °C
            </span>
          </h2>
        </div>
        <h2 className="text-[2.2rem] font-[600] text-[#88869D] pt-6">Shower</h2>
        <footer className="w-full flex flex-col gap-7 justify-center items-center text-[#88869D] pt-6">
          <span className="flex gap-3">Today <span>•</span> Fri, 5 Jun</span>
          <span className="flex gap-[0.5rem]">
            <img src="location-icon.svg" alt="Location icon" className="w-[14px]" />
            Helsinki
          </span>
        </footer>
      </div>
    </div>
  )
}
export default SideBar
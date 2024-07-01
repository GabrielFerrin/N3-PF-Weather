import { useContext, useEffect, useRef, useState } from "react"
import { WeatherContext } from "../context/WeatherProvider"
import Location from "./Location"
import Close from "./icons/Close"

function SideModal() {
  const { showModal, setShowModal, setLocation, locations } =
    useContext(WeatherContext)
  const [selected, setSelected] = useState(false)
  const [selectedLocation, setSelectedLocation] =
    useState('choose a location...')
  const [selectStyle, setSelectStyle] = useState('')
  const [imgStyle, setImgStyle] = useState('')
  const input = useRef(null)

  useEffect(() => {
    selected ? setSelectStyle('border-[#E7E7EB]') : setSelectStyle('')
    selected ? setImgStyle('transform rotate-90') : setImgStyle('')
  }, [selected])
  const handleSelect = (e) => {
    if (e.target.id === "select" || e.target.id === "img-select") {
      setSelected(!selected)
    }
  }
  const handleDeselect = (e) => {
    if (e.target.id !== 'select' && e.target.id !== 'img-select') {
      setSelected(false)
      setSelectStyle('')
      setImgStyle('')
    }
  }
  const handleClick = () => {
    setLocation(input.current.value.trim())
    input.current.value = ''
    setSelectedLocation('choose a location...')
    setTimeout(() => {
      setSelected(true)
    }, 300);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter')
      handleClick()
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div className="absolute w-[459px] h-full max-h-[1100px] bg-[#1E213A] min-h-screen p-[42px] flex items-center flex-col gap-[1.5rem] custom-md:w-auto custom-xs:w-[100%] transition duration-300"
      id='side-modal'
      style={{
        left: showModal ? '0' : 'calc(-100%)',
        transition: 'left 400ms ease-in-out'
      }} onClick={(e) => handleDeselect(e)}>
      {/* close */}
      <div className="w-full flex justify-end">
        <Close action={handleClose} />
      </div >
      {/* inputs */}
      <div className="w-full flex gap-4 custom-md:flex-col">
        <div className="relative">
          <input className="pl-12 pr-4 border border-[#616475] focus:outline-none bg-transparent h-[48px] w-full focus:border-[#E7E7EB] transition duration-300 font-[500] [#616475]::placeholder"
            type="text" placeholder="search location" ref={input} onKeyDown={handleKeyDown} />
          <img className="absolute w-[24px] p-[3px] top-1/2 translate-y-[-50%] left-4"
            src="lupa.svg" alt="Search icon" />
        </div>
        <input className="bg-[#3C47E9] text-[16px] w-[136px] h-[48px] font-[600] hover:bg-[#E7E7EB] hover:text-[#555555] active:bg-[#b5b5bb] transition duration-300 custom-md:w-auto"
          type="button" value="Search" onClick={handleClick} />
      </div>
      {/* search results */}
      {locations.length > 0 &&
        <div className="w-full flex flex-col">
          {/* select */}
          <div id="select"
            className={selectStyle + " flex items-center justify-between px-4 py-2 mb-3 border border-[#616475] focus:outline-none bg-transparent min-h-[48px] w-full focus:border-[#E7E7EB] transition duration-300 font-[500] cursor-pointer"} onClick={handleSelect}>
            {selectedLocation}
            <img src="deploy.svg" alt="Deploy icon" id="img-select"
              className={imgStyle + " transition duration-300 h-[24px] p-[4px]"} />
          </div>
          {/* options */}
          {selected && <>
            {locations && locations.map(location => (
              <Location key={location.latitude} location={location.name}
                setLocation={setSelectedLocation}
                coordinates={{
                  latitude: location.latitude,
                  longitude: location.longitude
                }} />
            ))}
          </>}
        </div>}
    </div>
  )
}
export default SideModal

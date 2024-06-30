import { useEffect, useState } from "react"

function SideModal() {
  const [selected, setSelected] = useState(false)
  const [selectStyle, setSelectStyle] = useState('')
  const [imgStyle, setImgStyle] = useState('')
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

  return (
    <div className="absolute w-[459px] h-full max-h-[1100px] bg-[#1E213A] min-h-screen p-[42px] flex items-center flex-col gap-[1.5rem]" onClick={(e) => handleDeselect(e)}>
      <div className="w-full flex justify-end">
        <img src="close.svg" alt="Close icon" className="w-[32px] h-[32px] cursor-pointer p-[7px] transition duration-300 hover:bg-[#100E1D] rounded-full" />
      </div>
      <div className="w-full flex gap-4">
        <div className="relative">
          <input className="pl-12 pr-4 border border-[#616475] focus:outline-none bg-transparent h-[48px] w-full focus:border-[#E7E7EB] transition duration-300 font-[500] [#616475]::placeholder" type="text" placeholder="search location" />
          <img className="absolute w-[24px] p-[3px] top-1/2 translate-y-[-50%] left-4" src="lupa.svg" alt="Search icon" />
        </div>
        <input type="button" value="Search" className="bg-[#3C47E9]  text-[16px] w-[136px] h-[48px] font-[600]" />
      </div>
      <div className="w-full flex flex-col">
        <div id="select" className={selectStyle + " flex items-center justify-between px-4 border border-[#616475] focus:outline-none bg-transparent h-[48px] w-full focus:border-[#E7E7EB] transition duration-300 font-[500] cursor-pointer"} onClick={handleSelect}>
          London
          <img id="img-select" className={imgStyle + " transition duration-300 h-[24px] p-[4px]"} src="deploy.svg" alt="Deploy icon" />
        </div >
        {
          selected &&
          <>
            <div className="flex items-center px-6 border border-[#1E213A] hover:border hover:border-[#616475]  h-[48px]  font-[500] cursor-pointer text-[#A09FB1] transition duration-300">
              London
            </div>
            <div className="flex items-center px-6 border border-[#1E213A] hover:border hover:border-[#616475]  h-[48px]  font-[500] cursor-pointer text-[#A09FB1] transition duration-300">
              Barcelona
            </div>
            <div className="flex items-center px-6 border border-[#1E213A] hover:border hover:border-[#616475]  h-[48px]  font-[500] cursor-pointer text-[#A09FB1] transition duration-300">
              Long Beach
            </div>
          </>
        }
      </div>
    </div>
  )
}
export default SideModal

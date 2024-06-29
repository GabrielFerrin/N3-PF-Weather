function SideBar() {
  return (
    <div className="bg-[#1E213A] w-[459px] min-h-screen py-[42px] relative flex items-center justify-between flex-col gap-[2rem]">
      {/* nav */}
      <div className="flex justify-between px-[42px] w-full">
        <button className="bg-[#6E707A]  text-[16px] w-[161px] h-[40px]">
          Search for places
        </button>
        <div className="h-[40px] w-[40px] bg-[#6E707A] rounded-full flex justify-center items-center cursor-pointer">
          <img src="location.svg" alt="Location icon" className="w-[22px] h-[22px] " />
        </div>
      </div>
      {/* hero */}
      <div className="h-[325px] w-full bg-cover bg-no-repeat bg-center p-[3rem]"
        style={{ backgroundImage: 'url(cloud-background.svg)' }}>
        <img src="shower.png" alt="Weather icon"
          className="object-contain w-full h-full relative" />
      </div>
      {/* temperature */}
      <div className="bg-transparent relative flex justify-center items-center h-[150px] w-full">
        <h2 className="text-[9rem] font-[500] text-white">
          15
          <span className="text-[#88869D] text-[3rem] font-sans font-[400]">
            °C
          </span>
        </h2>
      </div>
      <h2 className="text-[2.2rem] font-[600] text-[#88869D]">Shower</h2>
      <footer className="w-full flex flex-col gap-7 justify-center items-center text-[#88869D]">
        <span className="flex gap-3">Today <span>•</span> Fri, 5 Jun</span>
        <span className="flex gap-[0.5rem]">
          <img src="location-icon.svg" alt="Location icon" className="w-[14px]" />
          Helsinki
        </span>
      </footer>
    </div>
  )
}
export default SideBar
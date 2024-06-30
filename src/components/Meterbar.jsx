import { useEffect, useState } from "react"

function Meterbar({ humidity }) {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center">
      <div className="flex px-10 justify-between w-full text-[12px] font-[700] text-[#A09FB1]">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div className="w-[100%] px-10">
        <div className="bg-[#E7E7EB] rounded-full h-2">
          <div className="bg-[#FFEC65] h-2 rounded-full border border-[#9c8d1d]" style={{ width: `${humidity}%` }}></div>
        </div>
        <span className="flex px-10 justify-end w-full text-[12px] font-[700] text-[#A09FB1]">%</span>
      </div>
    </div>
  )
}
export default Meterbar
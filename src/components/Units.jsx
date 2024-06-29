function Units({ unit, isSelected }) {
  const selectedClass = isSelected ? `text-[#100E1D] bg-[#E7E7EB]` :
    `bg-[#585676]`
  return (
    <span className={selectedClass + " font-[700] font-sans text-[18px] h-[40px] w-[40px] flex justify-center items-center cursor-pointer rounded-full pr-1"}>°{unit}</span>
  )
}
export default Units
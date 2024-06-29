function Hightlights({ children, title, value, scale }) {
  return (
    <div className="bg-[rgb(30,33,58)] flex flex-col items-center justify-between w-[345px] py-5 pb-8">
      <span className="font-[500]">{title}</span>
      <span className="font-[700] text-[64px]">
        {value}
        <span className="text-[34px] font-[400]">{scale}</span>
      </span>
      {children &&
        <div>
          {children}
        </div>}
    </div>
  )
}
export default Hightlights
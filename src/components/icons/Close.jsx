function Close({ small, action }) {
  const size = small ?
    "w-[20px] h-[20px] border border-[#E7E7EB] p-[4px]" :
    "w-[32px] h-[32px] p-[7px]"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.15 105.11"
      onClick={action}
      className={size + " cursor-pointer  hover:bg-[#E7E7EB] hover:text-[#555555] active:bg-[#b5b5bb] transition duration-300 rounded-full"}>
      <path fill='currentColor' d="M7.9,0c2.87-.12,4.9,1.38,6.82,3.31,11.89,11.95,23.85,23.81,35.69,35.8,1.75,1.78,2.64,2.02,4.54,.08,11.81-12.02,23.8-23.86,35.67-35.82,2.57-2.59,5.39-4.1,9.03-2.97,5.78,1.79,7.37,8.81,2.97,13.23-12.05,12.13-24.12,24.25-36.32,36.23-2.14,2.1-2,3.19,.05,5.2,12.01,11.82,23.91,23.76,35.78,35.71,4.87,4.9,3.64,11.89-2.38,13.87-3.63,1.19-6.49-.22-9.06-2.81-11.79-11.87-23.7-23.61-35.4-35.56-2.19-2.24-3.26-2.19-5.42,.02-11.71,11.94-23.6,23.71-35.43,35.53-3.98,3.97-8.39,4.35-11.83,1.06-3.61-3.44-3.54-8.08,.53-12.2,11.67-11.81,23.36-23.6,35.27-35.16,2.7-2.62,2.33-3.83-.14-6.24C26.4,37.68,14.7,25.9,3.03,14.1-1.58,9.44-.72,3.36,4.67,.73,5.71,.21,6.77,0,7.9,0Z" />
    </svg>
  )
}

export default Close

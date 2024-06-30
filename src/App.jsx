import { useContext, useEffect } from "react"
import { WeatherContext } from "./context/WeatherProvider"
import SideBar from "./components/SideBar"
import SideModal from "./components/SideModal"
import Main from "./components/Main"

function App() {
  const { weather, showModal } = useContext(WeatherContext)
  useEffect(() => {
    console.log(weather)
  }, [weather])
  return (
    <div className="bg-[#100E1D] text-[#E7E7EB] w-full min-h-screen flex relative">
      <SideBar />
      {/* {showModal && <SideModal />} */}
      <Main />
    </div>
  )
}

export default App

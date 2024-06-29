import { useContext, useEffect } from "react"
import { WeatherContext } from "./context/WeatherProvider"
import SideBar from "./components/SideBar"
import SideModal from "./components/SideModal"
import Main from "./components/Main"

function App() {
  const { weather, showModal, setShowModal } = useContext(WeatherContext)
  useEffect(() => {
    console.log(weather)
  }, [weather])
  return (
    <div className="bg-[#100E1D] text-[#E7E7EB] w-screen min-h-screen flex box-border">
      <SideBar />
      {showModal && <SideModal />}
      <Main />
    </div>
  )
}

export default App

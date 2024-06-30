import { useContext, useEffect } from "react"
import SideBar from "./components/SideBar"
import SideModal from "./components/SideModal"
import Main from "./components/Main"
import { WeatherContext } from "./context/WeatherProvider"

function App() {
  const { setShowModal } = useContext(WeatherContext)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setShowModal(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="bg-[#100E1D] text-[#E7E7EB] w-full min-w-[330px] min-h-screen flex flex-row relative custom-xs:flex-col">
      <SideBar />
      <SideModal />
      <Main />
    </div>
  )
}

export default App

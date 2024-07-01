import { useContext, useEffect } from "react"
import { WeatherContext } from "./context/WeatherProvider"
import SideBar from "./components/SideBar"
import SideModal from "./components/SideModal"
import Main from "./components/Main"
import hasParent from "./services/hasParent"
import ErrorSnackbar from "./components/ErrorSnackbar"

function App() {
  const { setShowModal, setShowCoordinates } = useContext(WeatherContext)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowModal(false)
        setShowCoordinates(false)
      }
    }
    const handleClickOutside = (event) => {
      if (!hasParent(event.target, 'side-modal') &&
        event.target.id !== 'search-btn')
        setShowModal(false)
      if (!hasParent(event.target, 'location') &&
        !hasParent(event.target, 'coordinates') &&
        !hasParent(event.target, 'error-snack'))
        setShowCoordinates(false)
    }
    window.addEventListener('click', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('click', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="bg-[#100E1D] text-[#E7E7EB] w-full min-w-[330px] min-h-screen flex flex-row relative custom-xs:flex-col">
      <ErrorSnackbar message='Error: Coordinates are not valid.' />
      <SideBar />
      <SideModal />
      <Main />
    </div>
  )
}

export default App

import { useContext } from "react"
import { WeatherContext } from "../context/WeatherProvider"
import Close from "./icons/Close"

function ErrorSnackbar({ message }) {
  const { showError, setShowError } = useContext(WeatherContext)

  const handleAction = () => {
    setShowError(false)
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 flex justify-center items-center h-16 bg-red-500 text-white transition-opacity duration-300 ${
        showError ? "opacity-100" : "opacity-0"
      }`}
      style={{
        opacity: showError ? 1 : 0,
      }}
      onAnimationEnd={() => {
        if (!showError) {
          // Remove the element after the animation ends
          const snackbarElement = document.querySelector(".snackbar")
          snackbarElement && snackbarElement.remove()
        }
      }}
      onAnimationStart={() => {
        if (showError) {
          // Start the animation
          const snackbarElement = document.querySelector(".snackbar")
          snackbarElement.style.animation = "fade 3s ease-out forwards"
        }
      }}
    >
      <div className="flex items-center justify-between w-full px-4">
        <span>{message}</span>
        <button
          onClick={handleAction}
          className="text-white hover:text-gray-300"
        >
          <Close />
        </button>
      </div>
    </div>
  )
}

export default ErrorSnackbar
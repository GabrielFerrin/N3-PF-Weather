import { useContext } from "react"
import { WeatherContext } from "../context/WeatherProvider"
import './ErrorSnackbar.css'
import Close from "./icons/Close"

function ErrorSnackbar({ message }) {
  const { setShowError, showError } = useContext(WeatherContext)
  const handleAction = () => {
    setShowError(false)
  }
  return (
    <div className="absolute flex justify-center gap-4 items-center w-[450px] h-[55px] bg-[#ff2929] rounded-md z-50 bg-opacity-90 text-[1.2rem] top-5 custom-sm:w-[340px] custom-sm:text-[1.1rem] font-semibold"
      id='error-snack'
      style={{
        left: '50%', transform: 'translateX(-50%)',
        display: showError ? 'flex' : 'none',
        animation: 'fade 6s ease-out forwards'
      }}>
      <span className="ml-[-40px]">{message}</span>
      <div className="absolute right-7 top-[17px]">
        <Close small={true} action={handleAction} />
      </div>
    </div>
  )
}

export default ErrorSnackbar

// import React, { useState } from 'react';

// const Snackbar = ({ message, onClose }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleClose = () => {
//     setIsVisible(false);
//     onClose();
//   };

//   return (
//     isVisible && (
//       <div className="snackbar">
//         <p>{message}</p>
//         <button onClick={handleClose}>Close</button>
//       </div>
//     )
//   );
// };

// const App = () => {
//   const [showSnackbar, setShowSnackbar] = useState(false);

//   const handleShowSnackbar = () => {
//     setShowSnackbar(true);
//     setTimeout(() => {
//       setShowSnackbar(false);
//     }, 2000);
//   };

//   return (
//     <div>
//       <button onClick={handleShowSnackbar}>Show Snackbar</button>
//       {showSnackbar && <Snackbar message="This is an error message" onClose={handleShowSnackbar} />}
//     </div>
//   );
// };

// export default App;
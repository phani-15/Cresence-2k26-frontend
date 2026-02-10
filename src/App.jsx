import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import HomeScene from './Components/HomeScene'
import Navbar from './Components/Navbar'
import Loader from "./Components/Loader"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomeScene />} />
          <Route path="/" element={<Loader />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

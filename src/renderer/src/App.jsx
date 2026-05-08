import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Matematicas from './screens/Matematicas'
import Lenguaje from './screens/Lenguaje'
import Ciencias from './screens/Ciencias'
import { useEffect } from 'react'
import { sonidos } from './components/sonidos'

function App() {
   useEffect(() => {
    sonidos.inicio()
  }, [])
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matematicas" element={<Matematicas />} />
        <Route path="/lenguaje" element={<Lenguaje />} />
        <Route path="/ciencias" element={<Ciencias />} />
      </Routes>
    </HashRouter>
  )
}

export default App
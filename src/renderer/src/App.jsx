import { useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Matematicas from './screens/Matematicas'
import Lenguaje from './screens/Lenguaje'
import Ciencias from './screens/Ciencias'
import { ConfigProvider } from './components/ConfigContext'
import { sonidos } from './components/sonidos'

function App() {
  useEffect(() => {
    sonidos.inicio()
  }, [])

  return (
    <ConfigProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matematicas" element={<Matematicas />} />
          <Route path="/lenguaje" element={<Lenguaje />} />
          <Route path="/ciencias" element={<Ciencias />} />
        </Routes>
      </HashRouter>
    </ConfigProvider>
  )
}

export default App
import { HashRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import AboutMe from './components/AboutMe'

import './App.css'

function App() {
  return (
    <HashRouter>
      <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/games" element={<Games />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  )
}

export default App

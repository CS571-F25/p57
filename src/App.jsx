import { HashRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'


import NavigationBar from './components/NavigationBar'
import Games from './components/Games'
import Reviews from './components/Reviews'
import Favorites from './components/Favorites'
import Login from './components/Login'
import Home from './components/Home'
import AboutMe from './components/AboutMe'

import './App.css'

function App() {  
  return (
    <HashRouter>
      <NavigationBar /> 
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

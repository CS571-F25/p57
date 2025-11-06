import { HashRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import './App.css'

function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  </HashRouter>
}

export default App

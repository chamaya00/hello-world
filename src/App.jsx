import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ThemeSelector from './components/ThemeSelector'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Projects from './pages/Projects'
import About from './pages/About'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'minimal-bold'
  })

  useEffect(() => {
    // Remove all theme stylesheets
    const existingThemes = document.querySelectorAll('link[data-theme]')
    existingThemes.forEach(link => link.remove())

    // Add new theme stylesheet
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    const base = import.meta.env.BASE_URL
    link.href = `${base}themes/${theme}.css`
    link.setAttribute('data-theme', theme)
    document.head.appendChild(link)

    // Save preference
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <ThemeSelector currentTheme={theme} onThemeChange={setTheme} />
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Projects from './pages/Projects'
import About from './pages/About'

console.log('=== 3. APP.JSX LOADED ===')
console.log('React Router imported')
console.log('All components imported (Navigation, Footer, pages)')

function App() {
  console.log('=== 4. APP COMPONENT RENDERING ===')
  console.log('Setting up React Router')
  console.log('Current path:', window.location.pathname)
  console.log('Routes configured: /, /posts, /projects, /about')

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/projects" element={<Posts />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

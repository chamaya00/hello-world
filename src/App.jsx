import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import DebugPanel from './components/DebugPanel'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Post from './pages/Post'
import Projects from './pages/Projects'
import About from './pages/About'

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
console.log('⚛️  APP.JSX: File loaded')
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
console.log('✓ React Router imported')
console.log('✓ All components imported:')
console.log('  - Navigation, Footer (layout)')
console.log('  - Home, Posts, Post, Projects, About (pages)')

function App() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('⚛️  APP: Component rendering')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('📍 Current URL:', window.location.href)
  console.log('📍 Current path:', window.location.pathname)
  console.log('🛣️  Setting up routes:')
  console.log('  / → Home')
  console.log('  /posts → Posts (list)')
  console.log('  /posts/:slug → Post (single)')
  console.log('  /projects → Projects')
  console.log('  /about → About')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:slug" element={<Post />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      {/* <DebugPanel /> */}
      {/* Debug panel hidden in production - uncomment for development */}
    </Router>
  )
}

export default App

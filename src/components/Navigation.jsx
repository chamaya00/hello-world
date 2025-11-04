import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Charles Amaya</Link>
        <div className="nav-links">
          <Link to="/posts">Posts</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

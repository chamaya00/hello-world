import { Link, NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Charles Amaya</Link>
        <div className="nav-links">
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

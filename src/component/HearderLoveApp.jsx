import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const HearderLoveApp = () => {
  return (
      <header className="header">
      <div className="logo">
        <Link to="/">FindMyLove</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/matches">Matches</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HearderLoveApp
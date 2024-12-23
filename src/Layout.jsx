// src/Layout.jsx
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  const headerStyle = {
    backgroundColor: '#eee',
    padding: '10px',
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  }

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    padding: '6px 12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  }

  return (
    <div>
      <header style={headerStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/sub" style={linkStyle}>Sub</Link>
      </header>

      {/* Nested routes are rendered here */}
      <Outlet />
    </div>
  )
}

export default Layout

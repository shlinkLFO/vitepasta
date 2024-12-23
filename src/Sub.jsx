// src/Sub.jsx
import React from 'react'

function Sub() {
  const pageStyle = {
    backgroundColor: 'pink',
    height: 'calc(100vh - 56px)', // again, account for header if needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <div style={pageStyle}>
      <h1>Sauce</h1>
    </div>
  )
}

export default Sub

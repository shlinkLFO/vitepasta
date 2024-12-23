// src/Home.jsx
import React from 'react'

function Home() {
  const containerStyle = {
    width: '100%',
    // make it fill the screen below the header
    height: 'calc(100vh - 56px)', // adjust if your header height differs
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
  }

  // Red block with centered "Pickaxe"
  const redBlockStyle = {
    backgroundColor: 'red',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '2rem',
  }

  // Green block with a centered paragraph about pasta
  const greenBlockStyle = {
    backgroundColor: 'green',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    color: '#fff',
    textAlign: 'center',
  }

  return (
    <div style={containerStyle}>
      <div style={redBlockStyle}>Pickaxe</div>
      <div style={greenBlockStyle}>
        <p>
          This delicious pasta is made with fresh ingredients, 
          simmered in a homemade sauce, and topped with cheese. 
          It’s hearty, flavorful, and perfect for any meal!
        </p>
      </div>
    </div>
  )
}

export default Home

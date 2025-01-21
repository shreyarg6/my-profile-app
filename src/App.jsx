import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import About from "./components/About.jsx"
import Navbar from "./components/Navbar.jsx"
import Card1 from "./components/Card1.jsx"
import Card2 from "./components/Card2.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Navbar />

      </header>

      <main>
        <div className = "section">
          <div className = "container">
            <h1> Profile App</h1>
          </div>
        </div>

        <div className = "section">
          <div className = "container">
            <About />
          </div>
        </div>

        <div className = "section">
          <div className = "container">
            <div calassName = "profile-cards">
              <Card1 />
              <Card2 />
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default App

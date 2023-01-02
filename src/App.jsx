import { useState } from 'react'
import './App.css'

function App() {

  const [ isAnn, setIsAnn ] = useState(true);

  const switchMode = () => {
    setIsAnn(!isAnn);
  }


  return (
    <div className="App">
      <h1>Our Pricing</h1>

      <div className="switch-container">
        <p>Annually</p>
        <div className="wrap-toggle">
          <input
            type="checkbox"
            id="toggle"
            className="offscreen" 
            onClick={switchMode}
          />
            <label htmlFor="toggle" className="switch"></label>
        </div>
        <p>Monthly</p>
      </div>

      <div className="cards-container">

        <div className="card">
          <h2>Basic</h2>
          <div className="price-container">
            <span>$</span>
            <p className="annually-price" style={{display: isAnn ? 'block' : 'none'}}>199.99</p>
            <p className="monthly-price" style={{display: isAnn ? 'none' : 'block'}}>19.99</p>
          </div>
          <ul>
            <li>500 GB Storage</li>
            <li>2 Users Allowed</li>
            <li>Send up to 3 GB</li>
          </ul>
          <button>LEARN MORE</button>
        </div>

        <div className="card pro">
          <h2>Professional</h2>
          <div className="price-container">
            <span>$</span>
            <p className="annually-price" style={{display: isAnn ? 'block' : 'none'}}>249.99</p>
            <p className="monthly-price" style={{display: isAnn ? 'none' : 'block'}}>24.99</p>
          </div>
          <ul className="ul-pro">
            <li className="li-pro">1 TB Storage</li>
            <li className="li-pro">5 Users Allowed</li>
            <li className="li-pro">Send up to 10 GB</li>
          </ul>
          <button className="button-pro">LEARN MORE</button>
        </div>

        <div className="card">
          <h2>Master</h2>
          <div className="price-container">
            <span>$</span>
            <p className="annually-price" style={{display: isAnn ? 'block' : 'none'}}>399.99</p>
            <p className="monthly-price" style={{display: isAnn ? 'none' : 'block'}}>39.99</p>
          </div>
          <ul>
            <li>2 TB Storage</li>
            <li>10 Users Allowed</li>
            <li>Send up to 20 GB</li>
          </ul>
          <button>LEARN MORE</button>
        </div>

      </div>
    </div>
  )
}

export default App

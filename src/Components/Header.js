import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <div>
  <a className="back-to-top" href>
    <i className="fa-solid fa-angle-up" />
  </a>
  <header>
    <div className="container d-flex j-between a-item">
      <div className="logo">
        <h2>SKATER</h2>
      </div>
      <nav>
        <ul className="d-flex">
          <li><Link to={"/"} style={{color: '#ff8b00'}} >Home</Link></li>
          <li><Link to={"/servics"}>Services</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
</div>

  )
}

export default Header

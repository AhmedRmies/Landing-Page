import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">CetakWorks</a>
        <ul className="nav-links">
          <li><a href="#design" className="btn-design">Design Your Shirt</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
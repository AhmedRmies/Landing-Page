import React from 'react'
import img from '../assets/img.webp'

const Home = () => {
  return (
    <div className="main-content">
      <section id="hero" className="hero">
        <div className="container flex items-center justify-between">
          <div className="text-content">
            <h1 className="logo-text">Create your unique and exclusive shirt with CetakWorks</h1>
            <a href="/design" className="btn-main">Start Designing</a>
          </div>
          <img src={img} alt="Custom Shirt Design" className="main-image" />
        </div>
      </section>
    </div>
  )
}

export default Home
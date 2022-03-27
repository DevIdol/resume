import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import Portfolio from './Components/PortFolio/Portfolio'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="portfolio" element={<NavBar />}>
          <Route index element={<Portfolio />} />
        </Route>
        <Route path="blog" element={<NavBar />}>
          <Route index element={<h1>Blog Page</h1>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

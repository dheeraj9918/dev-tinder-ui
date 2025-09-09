import React from 'react'
import NavBar from './components/NavBar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Body from './components/Body'

const App = () => {
  return (
    <div >
      <Router basename='/'>
        <Routes>
          <Route path='/' element={<Body />} >
            <Route path='about' element={<div>About Page</div>} />
            <Route path='contact' element={<div>Contact Page</div>} />
          </Route>

        </Routes>
      </Router >
      {/* <NavBar /> */}
    </div>
  )
}

export default App
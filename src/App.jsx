import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Body from './components/Body'
import LoginForm from './components/Login'

const App = () => {
  return (
    <div >
      <Router basename='/'>
        <Routes>
          <Route path='/' element={<Body />} >
            <Route path='login' element={<LoginForm/>
            } />
            <Route path='contact' element={<div>Contact Page</div>} />
          </Route>

        </Routes>
      </Router >
      {/* <NavBar /> */}
    </div>
  )
}

export default App
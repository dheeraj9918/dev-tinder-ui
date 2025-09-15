import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Body from './components/Body'
import LoginForm from './components/Login'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App = () => {
  return (
    <Provider store={store} >
      <Router basename='/'>
        <Routes>
          <Route path='/' element={<Body />} >
            <Route path='login' element={<LoginForm />
            } />
            <Route path='contact' element={<div>Contact Page</div>} />
          </Route>

        </Routes>
      </Router >
      {/* <NavBar /> */}
    </Provider>
  )
}

export default App
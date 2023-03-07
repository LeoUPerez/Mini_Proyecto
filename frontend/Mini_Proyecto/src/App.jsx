import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Log_in from './Components/Log_in'
import Mail_verifications from './Components/Mail_verifications'
import Register from './Components/Register'


function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Log_in/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/Mailverification' element={<Mail_verifications/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

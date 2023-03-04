import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Log_in from './Components/Log_in'


function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Log_in/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

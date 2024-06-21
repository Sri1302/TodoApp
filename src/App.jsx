import React from 'react'
import Todos from './Todos.jsx'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='todos' element={<Todos/>} />
      </Routes>
    </Router>
  )
}

export default App
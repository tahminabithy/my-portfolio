import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import About from './components/about/About'
import Education from './components/education/Education'
import Header from './components/header/Header'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home'
import AllProjects from './components/AllProjects/AllProjects'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/allProjects' element={<AllProjects />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

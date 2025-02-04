import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Readmore from './Readmore'
import Contact from './Contact'
import Courses from './Courses'
import Hire from './Hire'



const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/readmore' element={<Readmore/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/hire' element={<Hire/>}/>




      

    </Routes>
  )
}

export default Routing
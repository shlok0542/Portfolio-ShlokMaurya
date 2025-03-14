import React from 'react'
import { Routes,Route } from 'react-router-dom'
import About from '../pages/About'
import Resume from '../pages/Resume'
import Project from '../pages/Project'
import Contact from '../pages/Contact'
import './Container.css'

export default function Container() {
  return (
   <>
   <div className="Container">
    <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/Resume' element={<Resume/>} />
        <Route path='/Projects' element={<Project/>} />
        <Route path='/Contact' element={<Contact/>} />
    </Routes>
   </div>
   </>
  )
}

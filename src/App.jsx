import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Layout from './component/Layout'
import About from './component/About'
import Skills from './component/Skills'
import Project from './component/Project'
import Contact from './component/Contact'
import Education from './component/Education'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />

          


        </Route>
      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className='text-black'>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Journey />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

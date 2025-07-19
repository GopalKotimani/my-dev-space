
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Journey from './components/Journey';
import Contact from './components/Contact';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
    
}

export default App

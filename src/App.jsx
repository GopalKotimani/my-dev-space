
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import heroImage from './assets/profile_reference.jpg';
import { useDispatch, useSelector } from 'react-redux';
import Playground from './components/Playground';


function App() {

  const profileData = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Hero heroData={profileData} />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/playground/:topic" element={<Playground />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )

}

export default App

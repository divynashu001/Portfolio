import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Home from './pages/Home'
import Project from './pages/Project'
import Resume from './pages/Resume'
import Skills from './pages/Skills'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Education/>
    <Project/>
    <Resume/>
    <Contact/>
    </>
  )
}

export default App

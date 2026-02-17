import './App.css'
import Hero from './pages/Hero.tsx'
import Navbar from './components/Navbar'
import About from "./pages/About.tsx"
import Experience from "./pages/Experience.tsx"
import Contact from './pages/Contact.tsx'
import Education from './pages/Eductaion.tsx'
import Skill from './pages/Skill.tsx'
import Project from './pages/Project.tsx'
import { ThemeProvider } from './components/ThemeContext';
import Footer from './components/Footer.tsx'



function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen">
     <Navbar/>
    <Hero/>
    <About />
    <Skill/> 
    <Project/>
    <Experience />
    <Education/>
    <Contact/>
      <Footer/>
    </div>
       
    </ThemeProvider>
  )
}

export default App

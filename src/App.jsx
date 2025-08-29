
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Navbar from './Navbar';



function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
       
     

     
    </div>
  );
}

export default App;

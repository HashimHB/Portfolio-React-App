import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { MDBFooter } from 'mdb-react-ui-kit';


function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>

      <MDBFooter bgColor='light' className='text-center'>
        <div className='text-center p-3 pt-2 text-xs h-[12px]' style={{ backgroundColor:'white' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' >
          <span className="text-pink-600">Hashim Hayath Basha</span>
        </a>
      </div>
      </MDBFooter>
    </div>
  );
}

export default App;

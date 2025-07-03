import './App.css';
import About from './Components/About';
import Work from './Components/Work'
import Home1 from './Components/Home1'; 
import Testimonial from './Components/Testimonial';
import Contact from './Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Home1 />
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;


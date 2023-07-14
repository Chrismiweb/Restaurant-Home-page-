import { Home } from '@mui/icons-material';
import './App.css';
import Navbar from './component/Navbar';
import Body from './component/Body';
import About from './component/About';
import Work from './component/Work';
import Testimonial from './component/Testimonial';
import Footer from './component/Footer';


function App() {
  return (
    <div className="Homepage">
      <Navbar/>
      <Body/>
      <About/>
      <Work/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;

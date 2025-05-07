import { BrowserRouter } from 'react-router-dom'; // Correct import
import './App.css';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Faq from './Components/Faq/Faq';

function App() {
  return (
    <div className='bg-[#12171c] text-white min-h-screen'>
      <BrowserRouter>
        <Header />
        <Banner />
        <Blog />
        <About/>
        <Work/>
        <Faq/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

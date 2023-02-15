
import { Route, Routes } from 'react-router-dom';
import './App.css';

import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Feature from './Components/Feature/Feature';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar'
import Offer from './Components/Offer/Offer';
import Pricing from './Components/Pricing/Pricing';
import Testimonials from './Components/Testimonials/Testimonials';
import SignUp from './Components/SignUp/SignUp'
function App() {
  return (
   <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/features' element={<Feature/>}/>
        <Route path='/offer' element={<Offer/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/testimonials' element={<Testimonials/> }/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/pricing/signUp' element={<SignUp/>}/>
      </Routes>
    <Footer/>

   </>
      

  )
}

export default App;

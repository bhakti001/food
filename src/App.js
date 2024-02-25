import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Maincomonent from './Maincomonent';
import Home from './Components/Home/Home';
import About from './Components/About/About';
// import Card from './Components/card/Card';
import Menu from './Components/Menu/Menu';
import Contact from './Components/contact/Contact';
// import Slider from './Components/slider-main/Slider';
// import Navbar3 from './Components/Nav-3/Navbar';
// import Card from './Components/card/Card';
// import Footer1 from './Footer/Footer1';

function App() {
  return (
    <div className="App">
<BrowserRouter>
{/* <Navbar3/>
  {/* <Navbar3/> 
  <Slider/>
  <br /><br /><br /><br /><br /><br />
  <Card/>
  <Footer1/> */}
<Routes>
  <Route path='/' element={<Maincomonent/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Route>
</Routes>
</BrowserRouter>
    </div>
  );
}
export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Temperature from './pages/Temperature';

function App(){
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/temperature" element={<Temperature/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

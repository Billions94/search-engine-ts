import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './components/Home/Search';
import NavBar from './components/Navbar/NavBar';
import Album from './components/Home/Album';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/search'  element={<Search />} />
        <Route path="/album/:id" element={<Album />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

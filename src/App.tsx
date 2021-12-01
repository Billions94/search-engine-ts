import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './components/home/Search';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={'/home'}  element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

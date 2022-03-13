import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';
import DetailFood from './Detail/Detail';
import Langkah from './Langkah/Langkah';
import Penilaian from './Penilaian/Penilaian';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Detail/:id' element={<DetailFood />} />
        <Route path='/Langkah/:id' element={<Langkah />} />
        <Route path='/Penilaian' element={<Penilaian />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

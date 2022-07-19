import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import Navbar from './components/Navber';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        <Footer/>
    </Router>
    </>
  );
}

export default App;

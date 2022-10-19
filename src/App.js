import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import CreatePost from './components/CreatePost';

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
            <Route path='/createPost' element={<CreatePost/>}/>
          </Routes>
        <Footer/>
    </Router>
    </>
  );
}

export default App;

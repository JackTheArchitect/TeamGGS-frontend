import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import Navbar from './components/Navber';
import Members from './components/Members';
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
          
          <Members mbrUrl='' mbrName='Gaeun Kim'/>
          <Members mbrUrl='' mbrName='Jaeuk Kim'/>
          <Members mbrUrl='' mbrName='Jiho Choi'/>
          <Members mbrUrl='' mbrName='Mirim Kim'/>
          <Members mbrUrl='' mbrName='Seyeong Park'/>
          
        <Footer/>
    </Router>
    </>
  );
}

export default App;

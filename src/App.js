import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Interviews from './Interviews';
import TestApplication from './TestApplication';
import { Route, Link , Routes} from 'react-router-dom';
import Navbar from './Navbar';
function App() {
  return (
    <div class="topbottomnav">
      <div class="topnav">
        <header class="title">ROLLINGTHUNDER</header>
        <nav class="navigationbar background">
          <ul class="navitems">
          <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/testapp">TEST APP</Link></li>
            <li><a href="https://github.com/davivaug2/LLM_RollingThunder"target="_blank">GITHUB</a></li>
          </ul>
        </nav>
      </div>
      <Routes><Route path="/" element={<Home/>}/></Routes>
      <Routes><Route path="/about" element={<About/>}/></Routes>
      <Routes><Route path="/testapp" element={<TestApplication/>}/></Routes>
      <div class = "bottomnav">
        <header class = "footer">David Vaughan, Roman Tait, Tucker Hoffnagle, Karlton Hall, Harrison Whitworth</header>
      </div>
    </div>
  );
}

export default App;

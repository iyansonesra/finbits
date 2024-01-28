
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/NavBar/navbar.js";
import MainCard from "./components/NavBar/maincard.js";
import ExamplePage from './examplePage/examplesPage.js';
import AboutPage from './examplePage/aboutPage.js';
import React from 'react';


function App() {
  return (
    // <Routes>
    //     <Navbar/>
    //     <Route path="/" element={<MainCard />} />
    //     <Route path="/ExamplePage" element={<ExamplePage />} />
    //     {/* <Route path="/about" element={<About />} /> */}
    // </Routes>
    // <div>
    //    <NavBar/>
    //    <Routes>
    //    <Route path="/" element={<MainCard />} />
    //    <Route path="/ExamplePage" element={<ExamplePage />} />
    //    </Routes>
    // </div>
    <div className="App"> 
      <Navbar/>
      <Routes>
        <Route path="/ExamplePage" element={<ExamplePage />} > </Route>
        <Route path="/AboutUs" element={<AboutPage />} > </Route>
        <Route path="/" element={<MainCard />} >  </Route>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Home from './Views/home/Home';
import Publicidad from './Components/Publicidad/Publicidad';
function App() {
  return (
    <Provider store={store}>


      
      <div className='bg-amber-600 rounded-3xl border border-black'>
        {/* <Publicidad /> */}
        <NavBar />
        <Routes>
        <Route  element={ <Home />} />
        </Routes>
        <h1 className='white font-extrabold'>holaaaaaaaaa</h1>
      </div>
    </Provider>
  );
}

export default App;

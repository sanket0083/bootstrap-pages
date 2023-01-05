import React from 'react'
import { ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import Servics from './Components/Servics';
import Contact from './Components/Contact';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route  path='/'  element={<Layout><Home /></Layout>}/>
        <Route  path='/servics'  element={<Layout><Servics /></Layout>}/>
        <Route  path='/contact'  element={<Layout><Contact /></Layout>}/>
      </Routes>
      
    </div>
  )
}

export default App

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Header'
import Home from './components/Home';
import CreateForm from './components/CreateForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route element={ <Home /> } path="/" default/>
          <Route element={ <CreateForm /> } path="/person/create" />
          {/* <Route element={ <ViewPerson /> } path="/person/view/:id" />
          <Route element={ <EditForm /> } path="person/edit/:id" /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
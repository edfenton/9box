import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Table from './components/Table';
import CreateForm from './components/CreateForm';
import ViewPerson from './components/ViewPerson';
import EditForm from './components/EditForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/login" replace />} />
          <Route element={ <Login /> } path="/login" />
          <Route element={ <Register /> } path="/register" />
          <Route element={ <Table /> } path="/dashboard" />
          <Route element={ <CreateForm /> } path="/person/create" />
          <Route element={ <ViewPerson /> } path="/person/view/:id" />
          <Route element={ <EditForm /> } path="person/edit/:id" />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Home/Home';
import Learn1 from './components/Learn/Learn1';
import Learn2 from './components/Learn/Learn2';
import Learn3 from './components/Learn/Learn3';
import Quiz1 from './components/Quiz/Quiz1';
import Quiz2 from './components/Quiz/Quiz2';
import Quiz3 from './components/Quiz/Quiz3';
import '@fortawesome/fontawesome-free/css/all.min.css';

function PrivateRoute({ children }) {

  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/learn/1" element={<PrivateRoute><Learn1/></PrivateRoute>} />
        <Route path="/learn/2" element={<PrivateRoute><Learn2/></PrivateRoute>} />
        <Route path="/learn/3" element={<PrivateRoute><Learn3/></PrivateRoute>} />

        <Route path="/quiz/1" element={<PrivateRoute><Quiz1/></PrivateRoute>} />
        <Route path="/quiz/2" element={<PrivateRoute><Quiz2/></PrivateRoute>} />
        <Route path="/quiz/3" element={<PrivateRoute><Quiz3/></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

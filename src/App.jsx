import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Import semua halaman
import Login from "./Pages/login";
import Register from "./Pages/register";
import Dashboard from "./Pages/dashboard";
import Materi from "./Pages/materi";
import Kuis from "./Pages/kuis";
import Profil from "./Pages/profil";

function App() {
  // Ganti menjadi false jika ingin mencoba alur login
  // Jika true, maka saat buka '/' akan otomatis ke dashboard (jika pakai logic redirect)
  const isAuthenticated = false; 

  return (
    <Router>
      <Routes>
        {/* Halaman Utama (Root) sekarang adalah LOGIN */}
        <Route path="/" element={<Login />} />
        
        {/* Route lainnya */}
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/kuis" element={<Kuis />} />
        <Route path="/profil" element={<Profil />} />

        {/* Fallback: Jika user nyasar, kembalikan ke login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
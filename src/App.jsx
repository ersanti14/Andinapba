import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from "./pages/Menu";
import VistaInicial from "./pages/VistaInicial";
import Nosotros from "./pages/Nosotros";
// index.js o App.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const App = () => {
  useEffect(() => {
    document.cookie = "cookieName=cookieValue; SameSite=None; Secure";
  }, []);

  return(
    <>
    <Routes>
      <Route path="/" element={<Menu />}>
        <Route path="/" element={<VistaInicial />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
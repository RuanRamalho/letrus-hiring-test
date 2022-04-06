import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage";

function RoutesNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/personagens" element={<CharactersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesNavigation;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "animate.css/animate.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/:name/:loc" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

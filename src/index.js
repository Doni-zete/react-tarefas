import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import NavMenu from "./components/NavMenu";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavMenu />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

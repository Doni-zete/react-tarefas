import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./components/NotFound";
import About from "./pages/About";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import {AuthProvider} from "./context/AuthContext";


function App() {
  return (
    <>
    <AuthProvider>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      </AuthProvider>
    </>
  );
}

export default App;

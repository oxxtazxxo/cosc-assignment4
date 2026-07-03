import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/Dashboard";
import Contact from "./pages/Team";

// replaced the entire app.js since it wasn't necesssary
// Browser router turns the app into a single page app.

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Dashboard />} />
        <Route path="/contact" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Navbar from "./components/navbar";

import { ThemeProvider } from "./theme-context";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Navbar */}
        <Navbar />
        {/* routers */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

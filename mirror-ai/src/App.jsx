import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import Wardrobe from "./pages/Wardrobe";
import Controls from "./pages/Controls";

export default function App() {
  return (
    <BrowserRouter>
      {/* Top Navigation */}
      <Navbar />

      {/* Page Content */}
      <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="/controls" element={<Controls />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Store from "./pages/Store";
import Settings from "./pages/Settings";

export default function App() {
  const isLoggedIn = true; // For now, dummy flag. Can replace with real auth later.

  return (
    <Router>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/store" element={<Store />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Login />} />
        </Routes>
      )}
    </Router>
  );
}

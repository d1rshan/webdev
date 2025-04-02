import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Profile from "./Profile";

import "./index.css";

function App() {
  return (
    <Router>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/profile/1"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          Profile 1
        </NavLink>
        <NavLink
          to="/profile/2"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          Profile 2
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<h1>HOME</h1>} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

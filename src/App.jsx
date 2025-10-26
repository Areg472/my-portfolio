import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { Homepage } from "./pages/Homepage.jsx";
import "./App.css";
import { Work } from "./pages/Work.jsx";
import { AnimatePresence } from "motion/react";
import { Navbar } from "./components/Navbar.jsx";
import PropTypes from "prop-types";
import React from "react";

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

function Layout({ children }) {
  return <>{children}</>;
}

const MemoizedNavbar = React.memo(Navbar);

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path={"/Work"} element={<Work />} />
      </Routes>
    </AnimatePresence>
  );
}

export function App() {
  return (
    <Router>
      <div className="w-full flex justify-center px-4">
        <MemoizedNavbar />
      </div>
      <div className="w-full mt-8 px-4">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;

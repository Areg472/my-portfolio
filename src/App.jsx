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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

function Layout({ children }) {
  return <>{children}</>;
}

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
      <Navbar />
      <div className="w-full pt-16 flex justify-center px-4">
        <div className="max-w-3xl w-full">
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;

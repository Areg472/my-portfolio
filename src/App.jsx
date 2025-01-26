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
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path={"/Work"} element={<Work />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;

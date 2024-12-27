import {Route, BrowserRouter as Router, Routes, useLocation} from "react-router-dom"
import {Homepage} from "./pages/Homepage.jsx";
import "./App.css";
import {Work} from "./pages/Work.jsx";
import {AnimatePresence} from "motion/react";

function AnimatedRoutes() {
    const location = useLocation();
    return(
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="*" element={<Homepage/>}/>
                <Route path="/" element={<Homepage/>}/>
                <Route path={"/Work"} element={<Work/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export function App() {
  return (
      <Router>
          <AnimatedRoutes/>
      </Router>
  )
}

export default App

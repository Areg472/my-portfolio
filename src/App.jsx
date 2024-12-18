import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import {Homepage} from "./pages/Homepage.jsx";
import "./App.css";
import {Work} from "./pages/Work.jsx";

console.log("Portfolio site loaded");

export function App() {
  return (
      <Router>
          <Routes>
              <Route>
                  <Route path="*" element={<Homepage/>}/>
                  <Route path="/" element={<Homepage/>}/>
                  <Route path={"/Work"} element={<Work/>}/>
                </Route>
            </Routes>
        </Router>
  )
}

export default App

import './App.css';
import {Routes, Route} from "react-router-dom"

import PageHome from "./components/PageHome/PageHome.jsx"
import PageLogin from "./components/PageLogin/PageLogin.jsx"


function App() {
  return (
     
    <Routes>
        <Route path="/clone-linkedin-app" element={<PageLogin/> } />
        <Route path="/home" element={<PageHome/> } />
    </Routes>

  );
}

export default App;

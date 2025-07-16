
import './App.css'
import {Routes,Route} from "react-router-dom";
import Dashboard from "../src/Dashboard/index.jsx";
import Portfolio from "../src/Portfolio/index.jsx";
import Login from "../src/Login/index.jsx";
import Signup from "../src/Signup/index.jsx";
function App() {


  return (
    <>
      <Routes>
          <Route path='/Login/:type'  element={<Login/>}/>
           <Route path='/Signup'  element={<Signup/>}/>
          <Route path='/Portfolio'  element={<Portfolio/>}/>
          <Route path='/Dashboard'  element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App

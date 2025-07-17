
import './App.css'
import { useEffect,useState } from 'react';
// import {Routes,Route} from "react-router-dom";
// import Dashboard from "../src/Dashboard/index.jsx";
// import Portfolio from "../src/Portfolio/index.jsx";
// import Login from "../src/Login/index.jsx";
// import Signup from "../src/Signup/index.jsx";
function App() {
  const [html, setHtml] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(res => res.text())
      .then(data => setHtml(data));
  }, []);

  return (

    <>
      <div>
      <h1>This is React Section</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
      {/* <Routes>
          <Route path='/Login/:type'  element={<Login/>}/>
           <Route path='/Signup'  element={<Signup/>}/>
          <Route path='/Portfolio'  element={<Portfolio/>}/>
          <Route path='/Dashboard'  element={<Dashboard/>}/>
      </Routes> */}
    </>
  )
}

export default App;

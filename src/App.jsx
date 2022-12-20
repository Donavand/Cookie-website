import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import "./App.css"
import { Route, Routes } from "react-router-dom";
function App() {
  
  return(

  <>
  
  <Navbar/>
  <div className="container">
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/About" element={<About/>}/>
   </Routes>
  </div>
  
  </>
  )
}

export default App;

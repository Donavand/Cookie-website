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
  
   <Routes>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/About" element={<About/>}/>
   </Routes>
  
  
  </>
  )
}

export default App;

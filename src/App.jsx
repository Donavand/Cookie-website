import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/About" element={<About />} />
			</Routes>
		</>
	);
}

export default App;

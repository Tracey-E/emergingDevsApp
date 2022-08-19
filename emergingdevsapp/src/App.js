/**Dependencies imports */
import { Routes, Route } from "react-router-dom";

/** Page imports */
import Home from "./pages/home/home";
/**Component imports */
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
/** CSS imports */
import "./App.css";
import "./css/pages/home.css";
import "./css/components/footer.css";
import "./css/components/header.css";
import "./css/components/nav.css";
/** other imports */

/** actual app */
function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

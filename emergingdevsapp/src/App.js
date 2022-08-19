/**Dependencies imports */
import { Routes, Route } from "react-router-dom";

/** Page imports */
import Home from "./pages/home/home";
import { Week1 } from "./pages/week1/week1";

/**Component imports */
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";

/** Reusable components */

import WeekTemplate from "./css/components/reusable/weekTemplate";

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
      <Header />
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="WeekTemplate" element={<WeekTemplate {...Week1} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

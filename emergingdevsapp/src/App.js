/**Dependencies imports */
import { Routes, Route } from "react-router-dom";

/** Page imports */
import Home from "./pages/home/home";
/**Component imports */
import Header from "./components/header/header";

/** CSS imports */
import './App.css';
import './css/pages/home.css'
/** other imports */
import logo from './logo.svg';


/** actual app */
function App() {
  return (

    <div className="App">
      <Header />
      <h1>Hi</h1>
     <Routes>
       <Route path='/Home' element={<Home/>} />
     </Routes>
    </div>
  );
}

export default App;

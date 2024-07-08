import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Confirm from "./pages/Confirm";

const App = () => {
  return (<div>

        <div className="bg-blue-950">
        <Navbar/>
        </div>
          
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/confirm" element={<Confirm/>} />
        </Routes>

  </div>)
};

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Rewards from "./components/pages/Rewards";
import Gift from "./components/pages/Gift";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/rewards" element={<Rewards />}></Route>
        <Route path="/gift" element={<Gift />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

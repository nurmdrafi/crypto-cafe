import { Route, Routes } from "react-router-dom";
import "./App.css";
import Coins from "./components/Coins/Coins";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

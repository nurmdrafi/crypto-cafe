import { Route, Routes } from "react-router-dom";
import "./App.css";
import Coins from "./components/Coins/Coins";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./components/NotFound/NotFound";
import CoinDetails from "./components/CoinDetails/CoinDetails";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/coin-details/:id" element={<CoinDetails></CoinDetails>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

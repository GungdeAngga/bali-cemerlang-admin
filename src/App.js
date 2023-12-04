import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./views/LandingPage";
import OfferPage from "./views/OfferPage";
import AddOfferPage from "./views/AddOfferPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/Offer" element={<OfferPage/>}/>
      <Route path="/TambahOffer" element={<AddOfferPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

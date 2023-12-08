import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./views/LandingPage";
import OfferPage from "./views/OfferPage";
import AddOfferPage from "./views/AddOfferPage";
import EditOfferPage from "./views/EditOfferPage";
import TiketPage from "./views/TiketPage";
import AddTiketPage from "./views/AddTiketPage";
import EditTiketPage from "./views/EditTiketPage";
import PromoPage from "./views/PromoPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/Offer" element={<OfferPage/>}/>
      <Route path="/TambahOffer" element={<AddOfferPage/>}/>
      <Route path="/EditOffer" element={<EditOfferPage/>}/>
      <Route path="/Tiket" element={<TiketPage/>}/>
      <Route path="/TambahTiket" element={<AddTiketPage/>}/>
      <Route path="/EditTiket" element={<EditTiketPage/>}/>
      <Route path="/Promo" element={<PromoPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

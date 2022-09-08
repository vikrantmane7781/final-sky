import React from 'react'
import { useState } from "react";
import Header from "./components/shared/Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/shared/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Details from "./components/Details/Details";
import SignIn from "./components/Authetication/SignIn/SignIn";
import SignUp from "./components/Authetication/SignUp/SignUp";
import SkyStorePremiere from "./components/HomePage/SkyStorePremiere/SkyStorePremiere";
import AtoZ from "./components/HomePage/Movies/AtoZ";
import Browse from "./components/HomePage/Movies/Browse";
import MovieBoxSets from "./components/HomePage/Movies/MovieBoxSets";
import NewToBuy from "./components/HomePage/Movies/NewToBuy";
import NewToRent from "./components/HomePage/Movies/NewToRent";
import OfficialFilmChart from "./components/HomePage/Movies/OfficialFilmChart";
import PreOrder from "./components/HomePage/Movies/PreOrder";
import EscapeWithAFilm from "./components/HomePage/Sale/EscapeWithAFilm";
import StorePicks from "./components/HomePage/Sale/StorePicks";
import Under3 from "./components/HomePage/Sale/Under3";
import Under4 from "./components/HomePage/Sale/Under4";
import Under5 from "./components/HomePage/Sale/Under5";
import SkyVipGifts from "./components/HomePage/SkyVip/SkyVipGifts";
import All from "./components/HomePage/Tv/All";
import Comedy from "./components/HomePage/Tv/Comedy";
import Drama from "./components/HomePage/Tv/Drama";
import Kids from "./components/HomePage/Tv/Kids";
import MostPopular from "./components/HomePage/Tv/MostPopular";
import NewToStore from "./components/HomePage/Tv/NewToStore";

import { useLocation } from "react-router-dom";
import RedeemVoucher from "./components/HomePage/RedeemVoucher/RedeemVoucher";
function Container() {
    const currentPath = useLocation();
  console.log(currentPath);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      {currentPath.pathname === "/signin" ||
      currentPath.pathname === "/signup" ? null : (
        <Header setSearchTerm={(e) => setSearchTerm(e)} />
      )}

      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage searchTerm={searchTerm} />}
        ></Route>
      </Routes>
      <Routes>
        <Route exact path="/details/:id" element={<Details />}></Route>
      </Routes>

      <Routes>
        <Route exact path="/redeemvoucher" element={<RedeemVoucher />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/atoz" element={<AtoZ />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/browse" element={<Browse />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/movieboxsets" element={<MovieBoxSets />}></Route>
      </Routes>

      <Routes>
        <Route exact path="/newtobuy" element={<NewToBuy />}></Route>
      </Routes>

      <Routes>
        <Route exact path="/newtorent" element={<NewToRent />}></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/officialfilmchart"
          element={<OfficialFilmChart />}
        ></Route>
      </Routes>

      <Routes>
        <Route exact path="/preorder" element={<PreOrder />}></Route>
      </Routes>

      <Routes>
        <Route
          exact
          path="/escapewithafilm"
          element={<EscapeWithAFilm />}
        ></Route>
      </Routes>
      <Routes>
        <Route exact path="/storepicks" element={<StorePicks />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/under3" element={<Under3 />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/under4" element={<Under4 />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/under5" element={<Under5 />}></Route>
      </Routes>

      <Routes>
        <Route
          exact
          path="/skystorepremiere"
          element={<SkyStorePremiere />}
        ></Route>
      </Routes>
      <Routes>
        <Route exact path="/skyvipgifts" element={<SkyVipGifts />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/all" element={<All />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/comedy" element={<Comedy />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/drama" element={<Drama />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/kids" element={<Kids />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/mostpopular" element={<MostPopular />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/newtostore" element={<NewToStore />}></Route>
      </Routes>

      <Routes>
        <Route exact path="/signin" element={<SignIn />}></Route>
      </Routes>

      <Routes>
        <Route exact path="/signup" element={<SignUp />}></Route>
      </Routes>

      {currentPath.pathname === "/signin" ||
      currentPath.pathname === "/signup" ? null : (
        <Footer />
      )}
    </>
  )
}

export default Container
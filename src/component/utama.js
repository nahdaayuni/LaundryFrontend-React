import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home";
import Login from "./login";
import Paket from "./paket";
import Member from "./member";
import Outlet from "./outlet";
import User from "./user";
import ChooseMember from "./ChooseMember";
import ChoosePaket from "./ChoosePaket";
import Cart from "./cart";
import Transaksi from "./transaksi";
import DetailTransaksi from "./DetailTransaksi";
import Cetak from "./cetak";
import Navbar from "../pages/Navbar";
import NavbarKasir from "../pages/NavbarKasir";
import NavbarOwner from "../pages/NavbarOwner";
import TransaksiOwner from "./TransaksiOwner";





const utama = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/login" element={<Login />} />
    <Route path="/paket" element={<Paket />} />
    <Route path="/member" element={<Member />} />
    <Route path="/outlet" element={<Outlet />} />
    <Route path="/user" element={<User />} />
    <Route path="/ChooseMember" element={<ChooseMember />} />
    <Route path="/ChoosePaket" element={<ChoosePaket />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/transaksi" element={<Transaksi />} />
    <Route path="/DetailTransaksi" element={<DetailTransaksi />} />
    <Route path="/cetak" element={<Cetak />} />
    <Route path="/Navbar" element={<Navbar />} />
    <Route path="/NavbarKasir" element={<NavbarKasir />} />
    <Route path="/NavbarOwner" element={<NavbarOwner />} />
    <Route path="/TransaksiOwner" element={<TransaksiOwner />} />
  </Routes>
);

export default utama;

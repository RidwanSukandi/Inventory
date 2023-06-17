import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import UpdateUser from "./pages/Users/UpdateUser";
import UpdateBarang from "./pages/Master/UpdateBarang";
import UpdateSuplier from "./pages/Master/UpdateSuplier";
import AddSuplier from "./pages/Master/AddSuplier";
import Analytics from "./pages/Dashboard/Analytics";
import AddNewProduct from "./pages/Transaksi/AddBarangMasuk";
import User from "./pages/Users/Users";
import AddUser from "./pages/Users/AddUser";
import DataBarang from "./pages/Master/DataBarang";
import AddBarang from "./pages/Master/AddBarang";
import DataJenisBarang from "./pages/Master/JenisBarang";
import DataProductMasuk from "./pages/Transaksi/BarangMasuk";
import DataSuplier from "./pages/Master/DataSuplier";
import Profile from "./pages/Profile";
import FormElements from "./pages/Form/FormElements";
import FormLayout from "./pages/Form/FormLayout";
import Tables from "./pages/Tables";
import Settings from "./pages/Settings";

import Alerts from "./pages/UiElements/Alerts";
import Buttons from "./pages/UiElements/Buttons";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";

const App = () => {
  const [loading, setLoading] = useState(true);

  const preloader = document.getElementById("preloader");

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    !loading && (
      <>
        <Routes>
          <Route exact path="/" element={<Analytics />} />
          <Route path="/data_user" element={<User />} />
          <Route path="/edit_user/:id" element={<UpdateUser />} />
          <Route path="/add_user" element={<AddUser />} />
          <Route
            path="/data-master/edit_barang/:id"
            element={<UpdateBarang />}
          />
          <Route
            path="/data-master/edit_suplier/:id"
            element={<UpdateSuplier />}
          />
          <Route
            path="/data-master/add-suplier/"
            element={<AddSuplier />}
          />
          <Route path="/data-master/data-barang" element={<DataBarang />} />
          <Route path="/data-master/add-barang" element={<AddBarang />} />
          <Route
            path="/transaksi/tambah-data-barang"
            element={<AddNewProduct />}
          />
          <Route
            path="/transaksi/barang-masuk"
            element={<DataProductMasuk />}
          />
          <Route
            path="/transaksi/barang-masuk"
            element={<DataProductMasuk />}
          />
          <Route
            path="/data-master/jenis-barang"
            element={<DataJenisBarang />}
          />
          <Route path="/data-master/data-suplier" element={<DataSuplier />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forms/form-elements" element={<FormElements />} />
          <Route path="/forms/form-layout" element={<FormLayout />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/ui/alerts" element={<Alerts />} />
          <Route path="/ui/buttons" element={<Buttons />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
        </Routes>
      </>
    )
  );
};

export default App;

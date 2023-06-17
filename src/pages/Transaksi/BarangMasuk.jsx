import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableBarangMasuk from "../../components/table/TableBarangMasuk";

const BarangMasuk = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Barang Masuk" />
      <TableBarangMasuk />
    </DefaultLayout>
  );
};

export default BarangMasuk;

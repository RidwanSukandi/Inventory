import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableJenisBarang from "../../components/table/TableJenisBarang";

const BarangKeluar = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Barang Keluar" />
      <TableJenisBarang />
    </DefaultLayout>
  );
};

export default BarangKeluar;

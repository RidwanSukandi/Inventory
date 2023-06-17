import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableJenisBarang from "../../components/table/TableJenisBarang";

const DataBarang = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Jenis Barang" />
      <TableJenisBarang />
    </DefaultLayout>
  );
};

export default DataBarang;

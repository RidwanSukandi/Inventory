import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableBarang from "../../components/table/TableBarang";

const DataBarang = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Data Barang" />
      <TableBarang />
    </DefaultLayout>
  );
};

export default DataBarang;

import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableSuplier from "../../components/table/TableSuplier";

const DataBarang = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Data Suplier" />
      <TableSuplier />
    </DefaultLayout>
  );
};

export default DataBarang;

import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumb";
import Table from "../../components/table/TableUsers";

const Users = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" />
      <Table />
    </DefaultLayout>
  );
};

export default Users;

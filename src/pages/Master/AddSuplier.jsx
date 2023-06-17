import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumb";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AddSuplier = () => {
  const navigate = useNavigate();
  const [error, setError] = useState([]);

  const [add, setAdd] = useState({
    namaSuplier: "",
    alamat: "",
    telepon: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdd((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInput = async (event) => {
    event.preventDefault();

    await axios
      .post(`http://localhost:4000/api/suplier`, add)
      .then((response) => {
        console.log(response.data.statusCode);
        response.data.statusCode == 200
          ? navigate("/data-master/add-suplier")
          : response.data.message;
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      });
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Add Suplier" />

      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">Add Barang</h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
          <form action="" method="post" onSubmit={handleInput}>
            <i className="flex justify-center py-2 text-center font-bold     text-danger">
              {error}
            </i>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Nama Suplier
              </label>
              <input
                type="text"
                value={add.namaSuplier}
                name="namaSuplier"
                placeholder="Input Nama Suplier"
                required
                onChange={handleChange}
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Alamat
              </label>
              <input
                type="text"
                value={add.alamat}
                name="alamat"
                onChange={handleChange}
                required
                placeholder="Input Alamat"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Telepon
              </label>
              <input
                value={add.telepon}
                name="telepon"
                type="text"
                required
                onChange={handleChange}
                placeholder="Input No Telepon"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <button className="mt-2 rounded-2xl bg-primary p-3 text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AddSuplier;

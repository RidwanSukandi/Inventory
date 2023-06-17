import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumb";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateSuplier = () => {
  const id = useParams();
  const navigate = useNavigate();

  const [update, setUpdate] = useState({
    kodeSuplier: "",
    namaSuplier: "",
    alamat: "",
    telepon: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInput = async (event) => {
    event.preventDefault();

    await axios
      .put(
        `https://backend-inventori.vercel.app/api/suplier/update/${id.id}`,
        update
      )
      .then((response) => {
        response.data.status_code == 200
          ? navigate("/data-master/data-barang")
          : response.data.message;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   handleInput(event);
  // }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Edit Data Suplier" />

      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Update Data Suplier
          </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
          <form action="" method="put" onSubmit={handleInput}>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Kode Suplier
              </label>
              <input
                type="text"
                value={update.kodeSuplier}
                name="kodeSuplier"
                onChange={handleChange}
                placeholder="Input Kode Suplier"
                required
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Nama Suplier
              </label>
              <input
                type="text"
                placeholder="Input Nama Suplier"
                value={update.namaSuplier}
                name="namaSuplier"
                onChange={handleChange}
                required
                className="w-full rounded-lg border-[1.5px] border-stroke 
                bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Alamat
              </label>
              <input
                type="text"
                value={update.alamat}
                name="alamat"
                placeholder="Input Alamat"
                required
                onChange={handleChange}
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Telepon
              </label>
              <input
                type="text"
                value={update.telepon}
                name="telepon"
                onChange={handleChange}
                required
                placeholder="Input Telepon"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default UpdateSuplier;

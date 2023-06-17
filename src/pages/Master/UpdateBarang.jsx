import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumb";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateBarang = () => {
  const id = useParams();
  const navigate = useNavigate();

  const [update, setUpdate] = useState({
    kodeBarang: "",
    namaBarang: "",
    jenisBarang: "",
    jumlahBarang: "",
    satuan: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(update);
  const handleInput = async (event) => {
    event.preventDefault();

    await axios
      .put(
        `https://backend-inventori.vercel.app/api/product/update/${id.id}`,
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
      <Breadcrumb pageName="Edit Barang" />

      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Update Data Barang
          </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
          <form action="" method="put" onSubmit={handleInput}>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                KodeBarang
              </label>
              <input
                type="text"
                value={update.kodeBarang}
                name="kodeBarang"
                onChange={handleChange}
                placeholder="Input Kode Barang"
                required
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Nama Barang
              </label>
              <input
                type="text"
                placeholder="Input Nama Barang"
                value={update.namaBarang}
                name="namaBarang"
                onChange={handleChange}
                required
                className="w-full rounded-lg border-[1.5px] border-stroke 
                bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Jenis Barang
              </label>
              <input
                type="text"
                value={update.jenisBarang}
                name="jenisBarang"
                placeholder="Input Jenis Barang"
                required
                onChange={handleChange}
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Jumlah Barang
              </label>
              <input
                type="text"
                value={update.jumlahBarang}
                name="jumlahBarang"
                onChange={handleChange}
                required
                placeholder="Input Jumlah Barang"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Satuan
              </label>
              <input
                value={update.satuan}
                name="satuan"
                type="text"
                required
                onChange={handleChange}
                placeholder="Input Satuan"
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

export default UpdateBarang;

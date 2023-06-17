import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumb";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BarangMasuk = () => {
  const id = useParams();
  const navigate = useNavigate();

  const [add, setAddProduct] = useState({
    idTransaksi: "",
    tanggalMasuk: "",
    kodeBarang: "",
    namaBarang: "",
    pengirim: "",
    jumlahMasuk: "",
    satuan: "",
  });

  const [barang, setBarang] = useState([]);
  const [suplier, setSuplier] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const Barang = async () => {
    await axios.get("http://localhost:4000/api/product").then((response) => {
      setBarang(response.data.data);
    });
    await axios.get("http://localhost:4000/api/suplier").then((response) => {
      setSuplier(response.data.data);
    });
  };

  const handleInput = async (event) => {
    event.preventDefault();

    await axios
      .post(`http://localhost:4000/api/barang-masuk`, add)
      .then((response) => {
        console.log(response);
        response.data.statusCode == 200
          ? navigate("transaksi/barang-masuk")
          : response.data.message;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Barang();
  }, []);
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tambah Barang Masuk" />
      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Tambah Barang Masuk
          </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
          <form action="" method="post" onSubmit={handleInput}>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Id Teransaksi
              </label>
              <input
                type="text"
                value={add.idTransaksi}
                name="idTransaksi"
                onChange={handleChange}
                placeholder="Input Id Transaksi"
                required
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Tanggal Masuk
              </label>
              <input
                type="Date"
                placeholder="Input Nama Suplier"
                value={add.tanggalMasuk}
                name="tanggalMasuk"
                onChange={handleChange}
                required
                className="w-full rounded-lg border-[1.5px] border-stroke 
                bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Kode Barang
              </label>
              <input
                type="text"
                value={add.kodeBarang}
                name="kodeBarang"
                placeholder="Input Kode-Barang"
                required
                onChange={handleChange}
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Nama Barang
              </label>

              <select
                onChange={handleChange}
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                name="namaBarang"
                value={add.namaBarang}
              >
                <option>---Select Nama Barang---</option>
                {barang.map((items) => (
                  <>
                    <option value={items.namaBarang}>{items.namaBarang}</option>
                  </>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Nama Suplier
              </label>

              <select
                onChange={handleChange}
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                name="pengirim"
                value={add.pengirim}
              >
                <option>---Select Nama Suplier---</option>
                {suplier.map((items) => (
                  <>
                    <option value={items.namaSuplier}>
                      {items.namaSuplier}
                    </option>
                  </>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Jumlah Masuk
              </label>
              <input
                type="text"
                value={add.jumlahMasuk}
                name="jumlahMasuk"
                onChange={handleChange}
                required
                placeholder="Input Jumlah-Masuk"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Satuan
              </label>
              <input
                type="text"
                value={add.satuan}
                name="satuan"
                onChange={handleChange}
                required
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

export default BarangMasuk;
